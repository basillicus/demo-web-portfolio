export const prerender = true;
import { getProjects } from '$lib/utils/content';

export async function load() {
	try {
		const projects = await getProjects();
		const formattedProjects = projects.map(project => ({
			title: project.frontmatter.title,
			summary: project.frontmatter.summary,
			date: project.frontmatter.date,
			tags: project.frontmatter.tags,
			slug: project.slug
		}));

		return {
			projects: formattedProjects
		};
	} catch (error) {
		console.error('Error loading projects:', error);
		return {
			projects: []
		};
	}
}