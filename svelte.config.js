import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(), 
		mdsvex({
			extensions: ['.svx', '.md'],
			// Configure mdsvex to process files in content directory
		})
	],
	kit: {
		// Using adapter-static for static site generation
		adapter: adapter({
			// Options for adapter-static
			fallback: 'index.html'
		})
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;