<script lang="ts">
	import { onMount } from 'svelte';
	import { highlightAll } from '$lib/utils/syntaxHighlighting';
	
	// Sample data - in a real app, this would come from our content files
	export let data;
	
	const post = {
		title: "Getting Started with Machine Learning in Python",
		date: "2025-08-30",
		tags: ["machine learning", "python", "tutorial"],
		content: `
			<p>Machine learning has become an essential skill for developers and data scientists alike. This guide will help you take your first steps into the world of ML using Python.</p>
			
			<h2>Prerequisites</h2>
			<p>Before diving into machine learning, you should have a basic understanding of:</p>
			<ul>
				<li>Python programming fundamentals</li>
				<li>High school level mathematics (algebra and statistics)</li>
				<li>Basic data manipulation concepts</li>
			</ul>
			
			<h2>Essential Libraries</h2>
			<p>The Python ecosystem offers several powerful libraries for machine learning:</p>
			
			<h3>Scikit-learn</h3>
			<p>Scikit-learn is the most popular machine learning library in Python. It provides simple and efficient tools for data mining and data analysis.</p>
			
			<h3>Pandas</h3>
			<p>Pandas is essential for data manipulation and analysis. It provides data structures and operations for manipulating numerical tables and time series.</p>
			
			<h3>NumPy</h3>
			<p>NumPy is the fundamental package for scientific computing with Python. It provides support for large, multi-dimensional arrays and matrices.</p>
			
			<h3>Matplotlib</h3>
			<p>Matplotlib is a plotting library for creating static, animated, and interactive visualizations in Python.</p>
			
			<h2>Your First Machine Learning Project</h2>
			<p>Let's build a simple classifier to predict whether an email is spam or not:</p>
			
			<pre class="language-python"><code>from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score

# Sample data (in practice, you'd load a larger dataset)
emails = [
    "Get rich quick! Click here now!",
    "Hi, how are you doing today?",
    "Congratulations! You've won $1000000!",
    "Meeting scheduled for tomorrow at 3pm",
    "Limited time offer! Buy now!"
]
labels = [1, 0, 1, 0, 1]  # 1 for spam, 0 for not spam

# Split the data
X_train, X_test, y_train, y_test = train_test_split(emails, labels, test_size=0.2)

# Vectorize the text
vectorizer = CountVectorizer()
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# Train the model
model = MultinomialNB()
model.fit(X_train_vec, y_train)

# Make predictions
predictions = model.predict(X_test_vec)

# Evaluate
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy}")</code></pre>
			
			<h2>Next Steps</h2>
			<p>After completing this basic example, consider exploring:</p>
			<ul>
				<li>More advanced algorithms like Random Forest and Support Vector Machines</li>
				<li>Deep learning with TensorFlow or PyTorch</li>
				<li>Working with real-world datasets from Kaggle</li>
				<li>Deploying models with Flask or FastAPI</li>
			</ul>
			
			<p>The key to mastering machine learning is consistent practice and gradually increasing the complexity of your projects.</p>
		`
	};
	
	onMount(() => {
		highlightAll();
	});
</script>

<svelte:head>
	<title>{post.title} - David Smith</title>
	<meta name="description" content={post.summary} />
</svelte:head>

<div class="container">
	<article class="section max-w-4xl mx-auto">
		<h1 class="text-4xl font-bold mb-4">{post.title}</h1>
		<p class="text-gray-500 mb-6">{post.date}</p>
		<div class="flex flex-wrap gap-2 mb-8">
			{#each post.tags as tag}
				<a href="/tags/{tag}" class="bg-gray-100 text-gray-700 px-3 py-1 rounded hover:bg-gray-200">{tag}</a>
			{/each}
		</div>
		<div class="prose max-w-none">
			{@html post.content}
		</div>
		
		<!-- Giscus Comments -->
		<div class="mt-12 pt-8 border-t border-gray-200">
			<h2 class="text-2xl font-bold mb-4">Comments</h2>
			<script src="https://giscus.app/client.js"
				data-repo="yourusername/yourrepo"
				data-repo-id="YOUR_REPO_ID"
				data-category="Comments"
				data-category-id="YOUR_CATEGORY_ID"
				data-mapping="pathname"
				data-strict="0"
				data-reactions-enabled="1"
				data-emit-metadata="0"
				data-input-position="bottom"
				data-theme="light"
				data-lang="en"
				crossorigin="anonymous"
				async>
			</script>
		</div>
		
		<div class="mt-8">
			<a href="/blog" class="btn btn-secondary">&larr; Back to Blog</a>
		</div>
	</article>
</div>

<style>
	.text-primary {
		color: var(--color-primary);
	}
</style>