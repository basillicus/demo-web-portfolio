import { getBlogPosts } from '$lib/utils/content';

export async function load() {
	try {
		const posts = await getBlogPosts();
		const formattedPosts = posts.map(post => ({
			title: post.frontmatter.title,
			summary: post.frontmatter.summary,
			date: post.frontmatter.date,
			tags: post.frontmatter.tags,
			slug: post.slug
		}));

		return {
			posts: formattedPosts
		};
	} catch (error) {
		console.error('Error loading blog posts:', error);
		return {
			posts: []
		};
	}
}