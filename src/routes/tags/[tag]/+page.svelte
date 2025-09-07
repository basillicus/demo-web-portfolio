<script lang="ts">
	// Sample data - in a real app, this would come from our content files
	export let data;
	
	const tag = "machine learning"; // This would come from the URL parameter
	
	const items = [
		{
			title: "AI-Powered Customer Analytics Platform",
			summary: "A comprehensive platform for analyzing customer behavior using machine learning models.",
			date: "2025-08-15",
			type: "project",
			slug: "ai-customer-analytics"
		},
		{
			title: "Getting Started with Machine Learning in Python",
			summary: "A beginner-friendly guide to starting your machine learning journey with Python.",
			date: "2025-08-30",
			type: "blog",
			slug: "getting-started-ml"
		},
		{
			title: "Natural Language Processing for Financial Document Analysis",
			summary: "An NLP system for automatically extracting and categorizing information from financial documents.",
			date: "2025-07-22",
			type: "project",
			slug: "nlp-financial-docs"
		}
	];
</script>

<svelte:head>
	<title>Tag: {tag} - David Smith</title>
	<meta name="description" content="Content tagged with {tag}" />
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
						<a href="/{item.type}s/{item.slug}" class="text-primary hover:underline font-medium">
							Read {item.type === 'project' ? 'Project' : 'Article'}
						</a>
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-8">
			<a href="/" class="btn btn-secondary">&larr; Back to Home</a>
		</div>
	</section>
</div>

<style>
	.text-primary {
		color: var(--color-primary);
	}
</style>