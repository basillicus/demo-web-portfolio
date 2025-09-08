import { readFileSync } from 'fs';
import { glob } from 'glob';
import path from 'path';

interface Frontmatter {
	title: string;
	date: string;
	summary: string;
	tags: string[];
	published: boolean;
}

export interface ContentItem {
	slug: string;
	content: string;
	frontmatter: Frontmatter;
	filePath: string;
}

export function parseFrontmatter(fileContent: string): { frontmatter: Frontmatter; content: string } {
	const frontmatterRegex = /---\s*([\s\S]*?)\s*---\s*(.*)/s;
	const match = frontmatterRegex.exec(fileContent);
	
	if (!match) {
		throw new Error('Invalid frontmatter format');
	}
	
	const frontmatterContent = match[1];
	const content = match[2];
	
	const frontmatter = {} as Frontmatter;
	
	// Parse each line of frontmatter
	frontmatterContent.split('\n').forEach(line => {
		const [key, ...valueParts] = line.split(':');
		if (key && valueParts.length > 0) {
			const trimmedKey = key.trim();
			const value = valueParts.join(':').trim();
			
			if (trimmedKey === 'tags') {
				// Parse tags array
				const tagsMatch = value.match(/\[(.*)\]/);
				if (tagsMatch) {
					frontmatter.tags = tagsMatch[1].split(',').map(tag => tag.trim().replace(/['"]/g, ''));
				} else {
					frontmatter.tags = [];
				}
			} else if (trimmedKey === 'published') {
				// Parse boolean
				frontmatter.published = value.toLowerCase() === 'true';
			} else {
				// Parse string values
				(frontmatter as any)[trimmedKey] = value.replace(/['"]/g, '');
			}
		}
	});
	
	return { frontmatter, content };
}

// Process markdown content to HTML using marked
async function processMarkdown(content: string): Promise<string> {
	try {
		const { marked } = await import('marked');
		return marked.parse(content);
	} catch (error) {
		console.error('Error processing markdown:', error);
		return content;
	}
}

export async function getProjects(): Promise<ContentItem[]> {
	// Use absolute paths
	const projectFiles = glob.sync(path.resolve('./content/projects/**/*.md'));
	
	const projects = await Promise.all(projectFiles.map(async (filePath) => {
		const fileContent = readFileSync(filePath, 'utf-8');
		const { frontmatter, content } = parseFrontmatter(fileContent);
		const processedContent = await processMarkdown(content);
		const slug = path.basename(filePath, '.md');
		
		return {
			slug,
			content: processedContent,
			frontmatter,
			filePath
		};
	}));
	
	return projects
		.filter(item => item.frontmatter.published !== false)
		.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export async function getBlogPosts(): Promise<ContentItem[]> {
	try {
		// Use absolute paths
		const blogFiles = glob.sync(path.resolve('./content/blog/**/*.md'));
		console.log('Found blog files:', blogFiles);
		
		const posts = await Promise.all(blogFiles.map(async (filePath) => {
			const fileContent = readFileSync(filePath, 'utf-8');
			const { frontmatter, content } = parseFrontmatter(fileContent);
			const processedContent = await processMarkdown(content);
			const slug = path.basename(filePath, '.md');
			
			return {
				slug,
				content: processedContent,
				frontmatter,
				filePath
			};
		}));
		
		return posts
			.filter(item => item.frontmatter.published !== false)
			.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
	} catch (error) {
		console.error('Error in getBlogPosts:', error);
		return [];
	}
}

export async function getProjectBySlug(slug: string): Promise<ContentItem | null> {
	try {
		// Use absolute paths
		const projectFiles = glob.sync(path.resolve(`./content/projects/**/${slug}.md`));
		
		if (projectFiles.length === 0) {
			return null;
		}
		
		const filePath = projectFiles[0];
		const fileContent = readFileSync(filePath, 'utf-8');
		const { frontmatter, content } = parseFrontmatter(fileContent);
		const processedContent = await processMarkdown(content);
		
		return {
			slug,
			content: processedContent,
			frontmatter,
			filePath
		};
	} catch (error) {
		console.error('Error in getProjectBySlug:', error);
		return null;
	}
}

export async function getBlogPostBySlug(slug: string): Promise<ContentItem | null> {
	try {
		// Use absolute paths
		const blogFiles = glob.sync(path.resolve(`./content/blog/**/${slug}.md`));
		console.log(`Looking for blog post with slug ${slug}, found files:`, blogFiles);
		
		if (blogFiles.length === 0) {
			return null;
		}
		
		const filePath = blogFiles[0];
		const fileContent = readFileSync(filePath, 'utf-8');
		const { frontmatter, content } = parseFrontmatter(fileContent);
		const processedContent = await processMarkdown(content);
		
		return {
			slug,
			content: processedContent,
			frontmatter,
			filePath
		};
	} catch (error) {
		console.error('Error in getBlogPostBySlug:', error);
		return null;
	}
}

export async function getAllTags(): Promise<string[]> {
	const projects = await getProjects();
	const blogPosts = await getBlogPosts();
	
	const allTags = new Set<string>();
	
	projects.forEach(project => {
		project.frontmatter.tags.forEach(tag => allTags.add(tag));
	});
	
	blogPosts.forEach(post => {
		post.frontmatter.tags.forEach(tag => allTags.add(tag));
	});
	
	return Array.from(allTags).sort();
}

export async function getItemsByTag(tag: string): Promise<ContentItem[]> {
	const projects = await getProjects();
	const blogPosts = await getBlogPosts();
	
	const taggedItems = [...projects, ...blogPosts].filter(item => 
		item.frontmatter.tags.includes(tag)
	);
	
	return taggedItems.sort((a, b) => 
		new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
	);
}