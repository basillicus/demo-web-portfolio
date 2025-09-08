<script lang="ts">
	import { onMount } from 'svelte';
	
	export let data;
	
	const { featuredProject, projects, blogPosts } = data;
	
	const name = "David Smith";
	const tagline = "Machine Learning Engineer & AI Researcher";
	
	let displayedTagline = '';
	let taglineIndex = 0;
	
	onMount(() => {
		// Typewriter effect for tagline
		const typeTagline = () => {
			if (taglineIndex < tagline.length) {
				displayedTagline += tagline.charAt(taglineIndex);
				taglineIndex++;
				setTimeout(typeTagline, 50);
			}
		};
		
		typeTagline();
	});
</script>

<svelte:head>
	<title>{name} - Portfolio</title>
	<meta name="description" content={tagline} />
	<link rel="canonical" href="https://yourdomain.com/" />
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "David Smith",
			"jobTitle": "Machine Learning Engineer & AI Researcher",
			"url": "https://yourdomain.com/",
			"sameAs": [
				"https://github.com/yourusername",
				"https://linkedin.com/in/yourusername",
				"https://twitter.com/yourusername"
			]
		}
	</script>
</svelte:head>

<div class="container">
	<!-- Hero Section -->
	<section class="section text-center fade-in">
		<h1 class="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
		<p class="text-xl text-gray-600 mb-8 min-h-[2rem]">{displayedTagline}<span class="animate-pulse">|</span></p>
		<div class="flex justify-center gap-4">
			<a href="/projects" class="btn">View Projects</a>
			<a href="/blog" class="btn btn-secondary">Read Blog</a>
		</div>
	</section>

	<!-- Featured Project -->
	<section class="section fade-in">
		<h2 class="text-3xl font-bold mb-8 text-center">Featured Project</h2>
		<div class="card max-w-4xl mx-auto">
			<div class="p-8">
				<h3 class="text-2xl font-bold mb-4">{featuredProject.title}</h3>
				<p class="text-gray-600 mb-6">{featuredProject.summary}</p>
				<a href="/projects/{featuredProject.slug}" class="btn inline-block">Learn More</a>
			</div>
		</div>
	</section>

	<!-- Projects Grid -->
	<section class="section fade-in-staggered">
		<h2 class="text-3xl font-bold mb-8 text-center">Recent Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each projects as project}
				<div class="card fade-in-staggered">
					<div class="p-6">
						<h3 class="text-xl font-bold mb-2">{project.title}</h3>
						<p class="text-gray-600 mb-4">{project.summary}</p>
						<div class="flex flex-wrap gap-2 mb-4">
							{#each project.tags as tag}
								<a href="/tags/{encodeURIComponent(tag)}" class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-200 transition-colors">
									{tag}
								</a>
							{/each}
						</div>
						<a href="/projects/{project.slug}" class="theme-link font-medium hover:font-bold transition-colors duration-200">View Project</a>
					</div>
				</div>
			{/each}
		</div>
		<div class="text-center mt-8">
			<a href="/projects" class="btn btn-secondary">View All Projects</a>
		</div>
	</section>

	<!-- Blog Preview -->
	<section class="section fade-in-staggered">
		<h2 class="text-3xl font-bold mb-8 text-center">Latest from the Blog</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			{#each blogPosts as post}
				<div class="card fade-in-staggered">
					<div class="p-6">
						<h3 class="text-xl font-bold mb-2">{post.title}</h3>
						<p class="text-gray-500 text-sm mb-2">{post.date}</p>
						<p class="text-gray-600 mb-4">{post.summary}</p>
						<div class="flex flex-wrap gap-2 mb-4">
							{#each post.tags as tag}
								<a href="/tags/{encodeURIComponent(tag)}" class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-200 transition-colors">
									{tag}
								</a>
							{/each}
						</div>
						<a href="/blog/{post.slug}" class="theme-link font-medium hover:font-bold transition-colors duration-200">Read Article</a>
					</div>
				</div>
			{/each}
		</div>
		<div class="text-center mt-8">
			<a href="/blog" class="btn btn-secondary">View All Posts</a>
		</div>
	</section>

	<!-- Contact CTA -->
	<section class="section text-center fade-in-staggered">
		<h2 class="text-3xl font-bold mb-4">Let's Connect</h2>
		<p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
			Interested in working together or have questions about my work? I'd love to hear from you.
		</p>
		<a href="/contact" class="btn">Get in Touch</a>
	</section>
</div>

<style>
	.text-primary {
		color: var(--color-primary);
	}
</style>