<script lang="ts">
	export let data;
	const { posts } = data;
</script>

<svelte:head>
	<title>Blog - David Smith</title>
	<meta name="description" content="Read my articles on machine learning, AI, and technology" />
</svelte:head>

<div class="container">
	<section class="section">
		<h1 class="text-4xl font-bold mb-8">Blog</h1>
		<div class="grid grid-cols-1 gap-8">
			{#each posts as post}
				<div class="card">
					<div class="p-6">
						<h2 class="text-2xl font-bold mb-2">{post.title}</h2>
						<p class="text-gray-500 text-sm mb-2">{post.date}</p>
						<p class="text-gray-600 mb-4">{post.summary}</p>
						<div class="flex flex-wrap gap-2 mb-4">
							{#each post.tags as tag}
								<a href="/tags/{tag}" class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-200">{tag}</a>
							{/each}
						</div>
						<a href="/blog/{post.slug}" class="btn btn-secondary">Read Article</a>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>

<style>
	.text-primary {
		color: var(--color-primary);
	}
</style>