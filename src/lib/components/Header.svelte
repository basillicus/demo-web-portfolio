<script lang="ts">
	import { onMount } from 'svelte';
	import { theme, toggleTheme } from '$lib/stores/theme';
	
	let isMenuOpen = false;
	let currentTheme = 'dark';
	
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
	
	const closeMenu = () => {
		isMenuOpen = false;
	};
	
	onMount(() => {
		const unsubscribe = theme.subscribe((value) => {
			currentTheme = value;
		});
		
		return () => unsubscribe();
	});
</script>

<header class="bg-header-footer/80 text-text-primary py-3 sticky top-0 z-50 shadow-md backdrop-blur-sm border-b border-accent-green/30">
	<div class="container flex justify-between items-center">
		<a href="/" class="text-2xl font-bold px-3 py-2 rounded-md transition-all duration-300 relative overflow-hidden group animated-gradient-text" on:click={closeMenu}>DS
			<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
		</a>
		
		<!-- Desktop Navigation -->
		<nav class="hidden md:flex space-x-4 items-center">
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
			
			<!-- Theme Toggle Button -->
			<button 
				class="ml-4 p-2 rounded-full hover:bg-header-hover/20 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-yellow"
				on:click={toggleTheme}
				aria-label="Toggle theme"
			>
				{#if currentTheme === 'dark'}
					<!-- Sun icon for light theme -->
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
					</svg>
				{:else}
					<!-- Moon icon for dark theme -->
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				{/if}
			</button>
		</nav>
		
		<!-- Mobile Menu Button -->
		<div class="flex items-center">
			<!-- Theme Toggle Button for Mobile -->
			<button 
				class="md:hidden mr-4 p-2 rounded-full hover:bg-header-hover/20 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-yellow"
				on:click={toggleTheme}
				aria-label="Toggle theme"
			>
				{#if currentTheme === 'dark'}
					<!-- Sun icon for light theme -->
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
					</svg>
				{:else}
					<!-- Moon icon for dark theme -->
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				{/if}
			</button>
			
			<button 
				class="text-text-primary focus:outline-none"
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
	</div>
	
	<!-- Mobile Navigation -->
	{#if isMenuOpen}
		<div class="md:hidden bg-header-footer/90 pb-3 backdrop-blur-sm">
			<div class="container flex flex-col space-y-3">
				<a href="/projects" class="py-2 font-bold px-3 py-2 rounded-md transition-all duration-300 relative overflow-hidden group" on:click={closeMenu}>Projects
					<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
				</a>
				<a href="/blog" class="py-2 font-bold px-3 py-2 rounded-md transition-all duration-300 relative overflow-hidden group" on:click={closeMenu}>Blog
					<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
				</a>
				<a href="/about" class="py-2 font-bold px-3 py-2 rounded-md transition-all duration-300 relative overflow-hidden group" on:click={closeMenu}>About
					<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-yellow transition-all duration-300 group-hover:w-full"></span>
				</a>
				<a href="/contact" class="py-2 font-bold px-3 py-2 rounded-md transition-all duration-300 relative overflow-hidden group" on:click={closeMenu}>Contact
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
		background-color: rgba(from var(--color-header-footer) r g b / 0.8);
	}
	
	.bg-header-footer\/90 {
		background-color: rgba(from var(--color-header-footer) r g b / 0.9);
	}
	
	.text-text-primary {
		color: var(--color-text-primary);
	}
	
	[data-theme="light"] .text-text-primary {
		color: #000000; /* Black text for better contrast on light header */
	}
	
	.text-secondary {
		color: var(--color-text-secondary);
	}
	
	.hover\:bg-header-hover\/20:hover {
		background-color: rgba(from var(--color-accent-yellow) r g b / 0.2);
	}
	
	.focus\:ring-accent-yellow:focus {
		--tw-ring-color: var(--color-accent-yellow);
	}
	
	.animated-gradient-text {
		background: linear-gradient(-45deg, var(--color-text-primary), var(--color-accent-yellow), var(--color-text-primary));
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
	
	.border-accent-green\/30 {
		border-color: rgba(from var(--color-accent-green) r g b / 0.3);
	}
	
	.bg-accent-yellow {
		background-color: var(--color-accent-yellow);
	}
	
	.group:hover .group-hover\:w-full {
		width: 100%;
	}
</style>