<script lang="ts">
	// Sample data - in a real app, this would come from our content files
	const projects = [
		{
			title: "AI-Powered Customer Analytics Platform",
			summary: "A comprehensive platform for analyzing customer behavior using machine learning models.",
			date: "2025-08-15",
			tags: ["machine learning", "analytics", "python"],
			slug: "ai-customer-analytics"
		},
		{
			title: "Natural Language Processing for Financial Document Analysis",
			summary: "An NLP system for automatically extracting and categorizing information from financial documents.",
			date: "2025-07-22",
			tags: ["nlp", "finance", "machine learning"],
			slug: "nlp-financial-docs"
		}
	];
</script>

<svelte:head>
	<title>Projects - David Smith</title>
	<meta name="description" content="Browse my portfolio of machine learning and AI projects" />
	<link rel="canonical" href="https://yourdomain.com/projects" />
</svelte:head>

<div class="container">
	<section class="section">
		<h1 class="text-4xl font-bold mb-8">Projects</h1>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each projects as project}
				<div class="card">
					<div class="p-6">
						<h2 class="text-xl font-bold mb-2">{project.title}</h2>
						<p class="text-gray-500 text-sm mb-2">{project.date}</p>
						<p class="text-gray-600 mb-4">{project.summary}</p>
						<div class="flex flex-wrap gap-2 mb-4">
							{#each project.tags as tag}
								<span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{tag}</span>
							{/each}
						</div>
						<a href="/projects/{project.slug}" class="btn btn-secondary">View Project</a>
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