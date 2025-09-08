<script lang="ts">
	export let data;
	
	const { tag, items } = data;
</script>

<svelte:head>
	<title>Tag: {tag} - David Smith</title>
	<meta name="description" content={`Content tagged with ${tag}`} />
</svelte:head>

<div class="container">
	<section class="section">
		<h1 class="text-4xl font-bold mb-8">Tag: {tag}</h1>
		<div class="grid grid-cols-1 gap-8">
			{#each items as item}
				<div class="card">
					<div class="p-6">
						<div class="flex justify-between items-start mb-2">
							<h2 class="text-2xl font-bold">{item.title}</h2>
							<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
								{item.type}
							</span>
						</div>
						<p class="text-gray-500 text-sm mb-2">{item.date}</p>
						<p class="text-gray-600 mb-4">{item.summary}</p>
						<a href="/{item.type}/{item.slug}" class="text-primary hover:text-accent-yellow font-medium hover:font-bold transition-all">
							Read {item.type === 'project' ? 'Project' : 'Article'}
						</a>
					</div>
				</div>
			{/each}
		</div>
		{#if items.length === 0}
			<div class="text-center py-12">
				<p class="text-gray-500 text-lg">No content found with this tag.</p>
				<a href="/" class="btn btn-secondary mt-4">← Back to Home</a>
			</div>
		{/if}
		<div class="mt-8">
			<a href="/" class="btn btn-secondary">← Back to Home</a>
		</div>
	</section>
</div>

<style>
	.text-primary {
		color: var(--color-primary);
	}
</style>