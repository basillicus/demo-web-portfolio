export const prerender = true;
import { getProjects, getBlogPosts } from '$lib/utils/content';

export async function load() {
	try {
		// Get projects and blog posts
		const [projects, blogPosts] = await Promise.all([
			getProjects(),
			getBlogPosts()
		]);
		
		// Format projects for display (limit to 2 for homepage)
		const formattedProjects = projects
			.slice(0, 2)
			.map(project => ({
				title: project.frontmatter.title,
				summary: project.frontmatter.summary,
				date: project.frontmatter.date,
				tags: project.frontmatter.tags,
				slug: project.slug
			}));
		
		// Format blog posts for display (limit to 2 for homepage)
		const formattedBlogPosts = blogPosts
			.slice(0, 2)
			.map(post => ({
				title: post.frontmatter.title,
				summary: post.frontmatter.summary,
				date: post.frontmatter.date,
				tags: post.frontmatter.tags,
				slug: post.slug
			}));
		
		// For featured project, use the first project or a default
		const featuredProject = formattedProjects[0] || {
			title: "AI-Powered Customer Analytics Platform",
			summary: "A comprehensive platform for analyzing customer behavior using machine learning models.",
			slug: "ai-customer-analytics"
		};
		
		return {
			featuredProject,
			projects: formattedProjects,
			blogPosts: formattedBlogPosts
		};
	} catch (error) {
		console.error('Error loading homepage data:', error);
		return {
			featuredProject: {
				title: "AI-Powered Customer Analytics Platform",
				summary: "A comprehensive platform for analyzing customer behavior using machine learning models.",
				slug: "ai-customer-analytics"
			},
			projects: [],
			blogPosts: []
		};
	}
}