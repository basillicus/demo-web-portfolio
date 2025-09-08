<script lang="ts">
	import { onMount } from 'svelte';
	import { highlightAll } from '$lib/utils/syntaxHighlighting';
	
	export let data;
	
	// Use the loaded blog post data
	const { post } = data;
	
	onMount(() => {
		highlightAll();
	});
</script>

<svelte:head>
	<title>{post.title} - David Smith</title>
	<meta name="description" content={post.summary} />
</svelte:head>

<div class="container">
	<article class="section max-w-4xl mx-auto">
		<h1 class="text-4xl font-bold mb-4">{post.title}</h1>
		<p class="text-gray-500 mb-6">{post.date}</p>
		<div class="flex flex-wrap gap-2 mb-8">
			{#each post.tags as tag}
				<a href={`/tags/${tag}`} class="bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200">{tag}</a>
			{/each}
		</div>
		<div class="prose max-w-none">
			{@html post.content}
		</div>
		
		<!-- Giscus Comments -->
		<div class="mt-12 pt-8 border-t border-gray-200">
			<h2 class="text-2xl font-bold mb-4">Comments</h2>
			<script src="https://giscus.app/client.js"
				data-repo="yourusername/yourrepo"
				data-repo-id="YOUR_REPO_ID"
				data-category="Comments"
				data-category-id="YOUR_CATEGORY_ID"
				data-mapping="pathname"
				data-strict="0"
				data-reactions-enabled="1"
				data-emit-metadata="0"
				data-input-position="bottom"
				data-theme="light"
				data-lang="en"
				crossorigin="anonymous"
				async>
			</script>
		</div>
		
		<div class="mt-8">
			<a href="/blog" class="btn btn-secondary">&larr; Back to Blog</a>
		</div>
	</article>
</div>

<style>
	.text-primary {
		color: var(--color-primary);
	}
</style>