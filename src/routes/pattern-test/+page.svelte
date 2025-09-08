<script>
  import { onMount } from 'svelte';
  
  // Pattern options
  const patterns = [
    { 
      id: 'dots', 
      name: 'Subtle Dots',
      css: `radial-gradient(circle at center, var(--color-bg-card), var(--color-bg-secondary)),
            url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='2' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E")`
    },
    { 
      id: 'grid', 
      name: 'Light Grid',
      css: `radial-gradient(circle at center, var(--color-bg-card), var(--color-bg-secondary)),
            url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 0 L 100 0 100 100 0 100 Z M 10 0 L 10 100 M 0 10 L 100 10' stroke='%23ffffff' stroke-opacity='0.03' stroke-width='1' fill='none'/%3E%3C/svg%3E")`
    },
    { 
      id: 'triangles', 
      name: 'Soft Triangles',
      css: `radial-gradient(circle at center, var(--color-bg-card), var(--color-bg-secondary)),
            url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,20 L80,20 L50,80 Z' fill='%23ffffff' fill-opacity='0.02'/%3E%3C/svg%3E")`
    },
    { 
      id: 'linen', 
      name: 'Linen Texture',
      css: `radial-gradient(circle at center, var(--color-bg-card), var(--color-bg-secondary)),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='0' x2='100' y2='200'%3E%3Cstop offset='0' stop-color='%23ffffff' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23ffffff' stop-opacity='0.03'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='%23ffffff' fill-opacity='0.01' d='M0 0h200v200H0z'/%3E%3Cpath fill='url(%23a)' d='M0 0h200v200H0z'/%3E%3C/svg%3E")`
    },
    { 
      id: 'none', 
      name: 'No Pattern (Default)',
      css: `radial-gradient(circle at center, var(--color-bg-card), var(--color-bg-secondary))`
    }
  ];
  
  let currentPattern = 'none';
  
  function applyPattern(patternId) {
    const pattern = patterns.find(p => p.id === patternId);
    if (pattern) {
      document.body.style.background = pattern.css;
      document.body.style.backgroundSize = patternId === 'none' ? '300% 300%' : '300% 300%, 200px 200px';
      document.body.style.backgroundRepeat = patternId === 'none' ? 'no-repeat' : 'no-repeat, repeat';
      localStorage.setItem('backgroundPattern', patternId);
      currentPattern = patternId;
    }
  }
  
  onMount(() => {
    const savedPattern = localStorage.getItem('backgroundPattern');
    if (savedPattern) {
      applyPattern(savedPattern);
    }
  });
</script>

<div class="container mx-auto p-8">
  <h1 class="text-3xl font-bold mb-8">Background Pattern Test</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
    {#each patterns as pattern}
      <button 
        class="p-4 rounded bg-gray-200 hover:bg-gray-300 {currentPattern === pattern.id ? 'ring-2 ring-blue-500' : ''}"
        on:click={() => applyPattern(pattern.id)}
      >
        {pattern.name}
      </button>
    {/each}
  </div>
  
  <div class="p-8 rounded bg-gray-100">
    <h2 class="text-2xl font-bold mb-4">Pattern Preview</h2>
    <p class="mb-4">
      This area shows the selected background pattern. Click the buttons above to test different patterns.
    </p>
    <p>
      Current pattern: <strong>{patterns.find(p => p.id === currentPattern)?.name || 'None'}</strong>
    </p>
  </div>
</div>