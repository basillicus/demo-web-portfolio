<script lang="ts">
	import { onMount } from 'svelte';
	import { highlightAll } from '$lib/utils/syntaxHighlighting';
	
	// Sample data - in a real app, this would come from our content files
	export let data;
	
	const project = {
		title: "AI-Powered Customer Analytics Platform",
		date: "2025-08-15",
		tags: ["machine learning", "analytics", "python"],
		content: `
			<h2>Project Overview</h2>
			<p>This project involved developing a sophisticated customer analytics platform that leverages machine learning to provide actionable insights for businesses. The platform processes large volumes of customer data to identify patterns, predict behavior, and recommend strategies.</p>
			
			<h2>Technical Implementation</h2>
			<p>The platform was built using Python with scikit-learn for machine learning models and FastAPI for the backend API. The frontend was developed with SvelteKit to provide a responsive and interactive user interface.</p>
			
			<p>Key features include:</p>
			<ul>
				<li>Real-time data processing pipelines</li>
				<li>Predictive modeling for customer churn</li>
				<li>Segmentation algorithms for targeted marketing</li>
				<li>Interactive dashboards for data visualization</li>
			</ul>
			
			<h3>Example Code</h3>
			<pre class="language-python"><code>from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import pandas as pd

# Load customer data
df = pd.read_csv('customer_data.csv')

# Prepare features and target
X = df[['age', 'income', 'purchase_history']]
y = df['churn']

# Split the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train the model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)

# Evaluate
accuracy = accuracy_score(y_test, predictions)
print(f"Model accuracy: {accuracy}")</code></pre>
			
			<h2>Results</h2>
			<p>The platform was successfully deployed for a major e-commerce client and resulted in:</p>
			<ul>
				<li>23% increase in customer retention</li>
				<li>18% improvement in marketing campaign effectiveness</li>
				<li>30% reduction in customer acquisition costs</li>
			</ul>
		`
	};
	
	onMount(() => {
		highlightAll();
	});
</script>

<svelte:head>
	<title>{project.title} - David Smith</title>
	<meta name="description" content={project.summary} />
</svelte:head>

<div class="container">
	<article class="section max-w-4xl mx-auto">
		<h1 class="text-4xl font-bold mb-4">{project.title}</h1>
		<p class="text-gray-500 mb-6">{project.date}</p>
		<div class="flex flex-wrap gap-2 mb-8">
			{#each project.tags as tag}
				<a href="/tags/{tag}" class="bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200">{tag}</a>
			{/each}
		</div>
		<div class="prose max-w-none">
			{@html project.content}
		</div>
		<div class="mt-12 pt-8 border-t border-gray-200">
			<a href="/projects" class="btn btn-secondary">&larr; Back to Projects</a>
		</div>
	</article>
</div>

<style>
	.text-primary {
		color: var(--color-primary);
	}
</style>