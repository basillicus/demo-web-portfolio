import { error } from '@sveltejs/kit';
import { getProjectBySlug, getProjects } from '$lib/utils/content';

export const prerender = true;

export async function entries() {
	const projects = await getProjects();
	return projects.map((project) => ({
		slug: project.slug,
	}));
}

export async function load({ params }) {
	const { slug } = params;
	
	try {
		// Check if the project exists
		const project = await getProjectBySlug(slug);
		
		if (!project) {
			throw error(404, 'Project not found');
		}
		
		return {
			project: {
				title: project.frontmatter.title,
				date: project.frontmatter.date,
				tags: project.frontmatter.tags,
				summary: project.frontmatter.summary,
				content: project.content,
				slug: project.slug
			},
			slug
		};
	} catch (err) {
		throw error(404, 'Project not found');
	}
}