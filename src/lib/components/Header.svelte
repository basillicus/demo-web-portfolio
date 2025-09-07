<script lang="ts">
	let isMenuOpen = false;
	
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
	
	const closeMenu = () => {
		isMenuOpen = false;
	};
</script>

<header class="bg-header-footer/80 text-white py-3 sticky top-0 z-50 shadow-md backdrop-blur-sm border-b border-white/10">
	<div class="container flex justify-between items-center">
		<a href="/" class="text-2xl font-bold px-3 py-2 rounded-md transition-all duration-300 relative overflow-hidden group animated-gradient-text" on:click={closeMenu}>DS
			<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
		</a>
		
		<!-- Desktop Navigation -->
		<nav class="hidden md:flex space-x-4">
			<a href="/projects" class="font-bold px-3 py-2 rounded-md transition-all duration-300 relative overflow-hidden group" on:click={closeMenu}>Projects
				<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
			</a>
			<a href="/blog" class="font-bold px-3 py-2 rounded-md transition-all duration-300 relative overflow-hidden group" on:click={closeMenu}>Blog
				<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
			</a>
			<a href="/about" class="font-bold px-3 py-2 rounded-md transition-all duration-300 relative overflow-hidden group" on:click={closeMenu}>About
				<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
			</a>
			<a href="/contact" class="font-bold px-3 py-2 rounded-md transition-all duration-300 relative overflow-hidden group" on:click={closeMenu}>Contact
				<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
			</a>
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
		<div class="md:hidden bg-header-footer/90 pb-3 backdrop-blur-sm">
			<div class="container flex flex-col space-y-3">
				<a href="/projects" class="py-2 font-bold px-3 py-2 rounded-md transition-all duration-300 relative overflow-hidden group">Projects
					<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
				</a>
				<a href="/blog" class="py-2 font-bold px-3 py-2 rounded-md transition-all duration-300 relative overflow-hidden group">Blog
					<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
				</a>
				<a href="/about" class="py-2 font-bold px-3 py-2 rounded-md transition-all duration-300 relative overflow-hidden group">About
					<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
				</a>
				<a href="/contact" class="py-2 font-bold px-3 py-2 rounded-md transition-all duration-300 relative overflow-hidden group">Contact
					<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
				</a>
			</div>
		</div>
	{/if}
</header>

<style>
	.bg-header-footer {
		background-color: var(--color-header-footer);
	}
	
	.bg-header-footer\/80 {
		background-color: rgba(65, 90, 119, 0.8); /* 80% opacity version of --color-header-footer */
	}
	
	.bg-header-footer\/90 {
		background-color: rgba(65, 90, 119, 0.9); /* 90% opacity version of --color-header-footer */
	}
	
	.text-secondary {
		color: var(--color-secondary);
	}
	
	.animated-gradient-text {
		background: linear-gradient(-45deg, var(--color-text), var(--color-accent-yellow), var(--color-text));
		background-size: 200% 200%;
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		animation: gradientShift 3s ease infinite;
	}
	
	@keyframes gradientShift {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	
	.backdrop-blur-sm {
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
	}
	
	.border-b {
		border-bottom-width: 1px;
	}
	
	.border-white\/10 {
		border-color: rgba(255, 255, 255, 0.1);
	}
	
	.bg-accent-yellow {
		background-color: var(--color-accent-yellow);
	}
	
	.group:hover .group-hover\:w-full {
		width: 100%;
	}
	
	/* Add transition for group hover effects */
	.transition-all {
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
	}
	
	.duration-300 {
		transition-duration: 300ms;
	}
	
	.w-0 {
		width: 0;
	}
	
	.h-0\.5 {
		height: 0.125rem;
	}
	
	.absolute {
		position: absolute;
	}
	
	.bottom-0 {
		bottom: 0;
	}
	
	.left-0 {
		left: 0;
	}
</style>