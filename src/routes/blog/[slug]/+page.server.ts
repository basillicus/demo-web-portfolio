import { error } from '@sveltejs/kit';
import { getBlogPostBySlug } from '$lib/utils/content';

export async function load({ params }) {
	const { slug } = params;
	
	try {
		// Check if the blog post exists
		const post = await getBlogPostBySlug(slug);
		
		if (!post) {
			throw error(404, 'Blog post not found');
		}
		
		return {
			post: {
				title: post.frontmatter.title,
				date: post.frontmatter.date,
				tags: post.frontmatter.tags,
				summary: post.frontmatter.summary,
				content: post.content,
				slug: post.slug
			},
			slug
		};
	} catch (err) {
		throw error(404, 'Blog post not found');
	}
}