<script lang="ts">
	import { onMount } from 'svelte';
	import { highlightAll } from '$lib/utils/syntaxHighlighting';
	
	export let data;
	
	// Use the loaded project data
	const { project } = data;
	
	onMount(() => {
		highlightAll();
	});
</script>

<svelte:head>
	<title>{project.title} - David Smith</title>
	<meta name="description" content={project.summary} />
</svelte:head>

<div class="container">
	<article class="section max-w-4xl mx-auto">
		<h1 class="text-4xl font-bold mb-4">{project.title}</h1>
		<p class="text-gray-500 mb-6">{project.date}</p>
		<div class="flex flex-wrap gap-2 mb-8">
			{#each project.tags as tag}
				<a href="/tags/{tag}" class="bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200">{tag}</a>
			{/each}
		</div>
		<div class="prose max-w-none">
			{@html project.content}
		</div>
		<div class="mt-12 pt-8 border-t border-gray-200">
			<a href="/projects" class="btn btn-secondary">&larr; Back to Projects</a>
		</div>
	</article>
</div>

<style>
	.text-primary {
		color: var(--color-primary);
	}
</style>