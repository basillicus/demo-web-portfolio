<svelte:head>
	<title>Contact - David Smith</title>
	<meta name="description" content="Get in touch with me for collaboration opportunities or questions" />
</svelte:head>

<div class="container">
	<section class="section max-w-2xl mx-auto">
		<h1 class="text-4xl font-bold mb-8">Get in Touch</h1>
		<p class="text-xl mb-8">
			Have a project in mind or want to discuss potential collaborations? 
			Fill out the form below and I'll get back to you as soon as possible.
		</p>
		
		<form 
			class="space-y-6"
			action="https://formspree.io/f/YOUR_FORM_ID"
			method="POST"
		>
			<div>
				<label for="name" class="block text-lg font-medium mb-2">Name</label>
				<input 
					type="text" 
					id="name" 
					name="name" 
					required
					class="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-accent text-light"
				>
			</div>
			
			<div>
				<label for="email" class="block text-lg font-medium mb-2">Email</label>
				<input 
					type="email" 
					id="email" 
					name="email" 
					required
					class="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-accent text-light"
				>
			</div>
			
			<div>
				<label for="subject" class="block text-lg font-medium mb-2">Subject</label>
				<input 
					type="text" 
					id="subject" 
					name="subject" 
					required
					class="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-accent text-light"
				>
			</div>
			
			<div>
				<label for="message" class="block text-lg font-medium mb-2">Message</label>
				<textarea 
					id="message" 
					name="message" 
					rows="5" 
					required
					class="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-accent text-light"
				></textarea>
			</div>
			
			<button type="submit" class="btn w-full">Send Message</button>
		</form>
		
		<div class="mt-12 pt-8 border-t border-gray-200">
			<h2 class="text-2xl font-bold mb-4">Connect With Me</h2>
			<div class="flex flex-wrap gap-4">
				<a href="https://github.com/yourusername" class="btn btn-secondary">GitHub</a>
				<a href="https://linkedin.com/in/yourusername" class="btn btn-secondary">LinkedIn</a>
				<a href="https://twitter.com/yourusername" class="btn btn-secondary">Twitter</a>
			</div>
		</div>
	</section>
</div>

<style>
	.text-primary {
		color: var(--color-primary);
	}
	
	.focus\:ring-primary:focus {
		--tw-ring-color: var(--color-primary);
	}
</style>