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
	const frontmatterRegex = /---\s*([\\s\\S]*?)\s*---\s*(.*)/s;
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
					frontmatter.tags = tagsMatch[1].split(',').map(tag => tag.trim().replace(/['\"]/g, ''));
				} else {
					frontmatter.tags = [];
				}
			} else if (trimmedKey === 'published') {
				// Parse boolean
				frontmatter.published = value.toLowerCase() === 'true';
			} else {
				// Parse string values
				(frontmatter as any)[trimmedKey] = value.replace(/['\"]/g, '');
			}
		}
	});
	
	return { frontmatter, content };
}

export function getProjects(): ContentItem[] {
	const projectFiles = glob.sync('./content/projects/**/*.md');
	
	return projectFiles.map(filePath => {
		const fileContent = readFileSync(filePath, 'utf-8');
		const { frontmatter, content } = parseFrontmatter(fileContent);
		const slug = path.basename(filePath, '.md');
		
		return {
			slug,
			content,
			frontmatter,
			filePath
		};
	}).filter(item => item.frontmatter.published !== false)
	.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getBlogPosts(): ContentItem[] {
	const blogFiles = glob.sync('./content/blog/**/*.md');
	
	return blogFiles.map(filePath => {
		const fileContent = readFileSync(filePath, 'utf-8');
		const { frontmatter, content } = parseFrontmatter(fileContent);
		const slug = path.basename(filePath, '.md');
		
		return {
			slug,
			content,
			frontmatter,
			filePath
		};
	}).filter(item => item.frontmatter.published !== false)
	.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getProjectBySlug(slug: string): ContentItem | null {
	const projectFiles = glob.sync(`./content/projects/**/${slug}.md`);
	
	if (projectFiles.length === 0) {
		return null;
	}
	
	const filePath = projectFiles[0];
	const fileContent = readFileSync(filePath, 'utf-8');
	const { frontmatter, content } = parseFrontmatter(fileContent);
	
	return {
		slug,
		content,
		frontmatter,
		filePath
	};
}

export function getBlogPostBySlug(slug: string): ContentItem | null {
	const blogFiles = glob.sync(`./content/blog/**/${slug}.md`);
	
	if (blogFiles.length === 0) {
		return null;
	}
	
	const filePath = blogFiles[0];
	const fileContent = readFileSync(filePath, 'utf-8');
	const { frontmatter, content } = parseFrontmatter(fileContent);
	
	return {
		slug,
		content,
		frontmatter,
		filePath
	};
}

export function getAllTags(): string[] {
	const projects = getProjects();
	const blogPosts = getBlogPosts();
	
	const allTags = new Set<string>();
	
	projects.forEach(project => {
		project.frontmatter.tags.forEach(tag => allTags.add(tag));
	});
	
	blogPosts.forEach(post => {
		post.frontmatter.tags.forEach(tag => allTags.add(tag));
	});
	
	return Array.from(allTags).sort();
}

export function getItemsByTag(tag: string): ContentItem[] {
	const projects = getProjects();
	const blogPosts = getBlogPosts();
	
	const taggedItems = [...projects, ...blogPosts].filter(item => 
		item.frontmatter.tags.includes(tag)
	);
	
	return taggedItems.sort((a, b) => 
		new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
	);
}