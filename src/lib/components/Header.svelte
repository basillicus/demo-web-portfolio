<script lang="ts">
	let isMenuOpen = false;
	
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
	
	const closeMenu = () => {
		isMenuOpen = false;
	};
</script>

<header class="bg-header-footer text-white py-4 sticky top-0 z-50 shadow-md">
	<div class="container flex justify-between items-center">
		<a href="/" class="text-2xl font-bold" on:click={closeMenu}>DS</a>
		
		<!-- Desktop Navigation -->
		<nav class="hidden md:flex space-x-8">
			<a href="/projects" class="font-bold hover:bg-header-hover hover:text-white px-3 py-2 rounded-md transition-colors" on:click={closeMenu}>Projects</a>
			<a href="/blog" class="font-bold hover:bg-header-hover hover:text-white px-3 py-2 rounded-md transition-colors" on:click={closeMenu}>Blog</a>
			<a href="/about" class="font-bold hover:bg-header-hover hover:text-white px-3 py-2 rounded-md transition-colors" on:click={closeMenu}>About</a>
			<a href="/contact" class="font-bold hover:bg-header-hover hover:text-white px-3 py-2 rounded-md transition-colors" on:click={closeMenu}>Contact</a>
		</nav>
		
		<!-- Mobile Menu Button -->
		<button 
			class="md:hidden text-white focus:outline-none"
			on:click={toggleMenu}
			aria-label="Toggle menu"
		>
			{#if isMenuOpen}
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</div>
	
	<!-- Mobile Navigation -->
	{#if isMenuOpen}
		<div class="md:hidden bg-header-footer pb-4">
			<div class="container flex flex-col space-y-4">
				<a href="/projects" class="py-2 font-bold hover:bg-header-hover hover:text-white px-3 py-2 rounded-md transition-colors" on:click={closeMenu}>Projects</a>
				<a href="/blog" class="py-2 font-bold hover:bg-header-hover hover:text-white px-3 py-2 rounded-md transition-colors" on:click={closeMenu}>Blog</a>
				<a href="/about" class="py-2 font-bold hover:bg-header-hover hover:text-white px-3 py-2 rounded-md transition-colors" on:click={closeMenu}>About</a>
				<a href="/contact" class="py-2 font-bold hover:bg-header-hover hover:text-white px-3 py-2 rounded-md transition-colors" on:click={closeMenu}>Contact</a>
			</div>
		</div>
	{/if}
</header>

<style>
	.bg-header-footer {
		background-color: var(--color-header-footer);
	}
	
	.text-secondary {
		color: var(--color-secondary);
	}
</style>