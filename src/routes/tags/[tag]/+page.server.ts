import { error } from '@sveltejs/kit';
import { getItemsByTag } from '$lib/utils/content';

export async function load({ params }) {
	const { tag } = params;
	
	// Decode the tag parameter (URL encoded)
	const decodedTag = decodeURIComponent(tag);
	
	try {
		// Get items with this tag
		const items = await getItemsByTag(decodedTag);
		
		// Format items for display
		const formattedItems = items.map(item => ({
			title: item.frontmatter.title,
			summary: item.frontmatter.summary,
			date: item.frontmatter.date,
			type: item.filePath.includes('/projects/') ? 'project' : 'blog',
			slug: item.slug
		}));
		
		return {
			tag: decodedTag,
			items: formattedItems
		};
	} catch (err) {
		console.error('Error loading tagged items:', err);
		throw error(500, 'Failed to load tagged content');
	}
}