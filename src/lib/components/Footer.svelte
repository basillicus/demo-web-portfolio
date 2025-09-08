<footer class="bg-header-footer/80 text-text-primary py-8 mt-12 shadow-md">
	<div class="container">
		<div class="flex flex-col items-center">
			<div class="mb-6 animated-gradient-text">
				<p class="text-center">&copy; {new Date().getFullYear()} David Smith. All rights reserved.</p>
			</div>
			<div class="flex space-x-6">
				<a href="https://github.com/yourusername" class="social-icon transition-colors duration-200" aria-label="GitHub">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
					</svg>
				</a>
				<a href="https://linkedin.com/in/yourusername" class="social-icon transition-colors duration-200" aria-label="LinkedIn">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
						<rect x="2" y="9" width="4" height="12"></rect>
						<circle cx="4" cy="4" r="2"></circle>
					</svg>
				</a>
				<a href="https://twitter.com/yourusername" class="social-icon transition-colors duration-200" aria-label="Twitter">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.bg-header-footer {
		background-color: var(--color-header-footer);
	}
	
	.bg-header-footer\/80 {
		background-color: rgba(from var(--color-header-footer) r g b / 0.8);
	}
	
	.text-text-primary {
		color: var(--color-text-primary);
	}
	
	.hover\:text-secondary:hover {
		color: var(--color-text-secondary);
	}
	
	.text-accent-yellow {
		color: var(--color-accent-yellow);
	}
	
	.hover\:text-text-primary:hover {
		color: var(--color-text-primary);
	}
	
	.transition-colors {
		transition-property: color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;
	}
	
	.duration-200 {
		transition-duration: 200ms;
	}
	
	/* Dark theme icon colors */
	[data-theme="dark"] .social-icon {
		color: var(--color-text-primary); /* Off-white */
	}
	
	[data-theme="dark"] .social-icon:hover {
		color: var(--color-accent-yellow); /* Yellow */
	}
	
	/* Light theme icon colors */
	[data-theme="light"] .social-icon {
		color: #003300; /* Dark green */
	}
	
	[data-theme="light"] .social-icon:hover {
		color: var(--color-accent-yellow); /* Light green */
	}
	
	.animated-gradient-text {
		background: linear-gradient(90deg, var(--color-text-primary), var(--color-accent-yellow), var(--color-text-primary));
		background-size: 300% 300%;
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		animation: gradientShift 4s linear infinite;
		display: inline-block;
	}
	
	@keyframes gradientShift {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 300% 50%;
		}
	}
</style>