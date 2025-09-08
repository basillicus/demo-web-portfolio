<script lang="ts">
	export let data;
	const { projects } = data;
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
				<div class="card flex flex-col h-full">
					<div class="p-6 flex flex-col flex-grow">
						<h2 class="text-xl font-bold mb-2">{project.title}</h2>
						<p class="text-gray-500 text-sm mb-2">{project.date}</p>
						<p class="text-gray-600 mb-4 flex-grow">{project.summary}</p>
						<div class="flex flex-wrap gap-2 mb-4">
							{#each project.tags as tag}
								<a href="/tags/{encodeURIComponent(tag)}" class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-200 transition-colors">
									{tag}
								</a>
							{/each}
						</div>
						<div class="mt-auto">
							<a href="/projects/{project.slug}" class="btn btn-secondary">View Project</a>
						</div>
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