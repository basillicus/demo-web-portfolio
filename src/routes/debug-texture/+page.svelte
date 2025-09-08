<script>
  import { onMount } from 'svelte';
  
  let currentTexture = 'none';
  
  onMount(() => {
    // Test if texture classes exist
    console.log('Testing texture classes...');
    const testElement = document.createElement('div');
    testElement.className = 'texture-noise';
    document.body.appendChild(testElement);
    const computedStyle = window.getComputedStyle(testElement);
    console.log('Computed background image:', computedStyle.backgroundImage);
    document.body.removeChild(testElement);
  });
  
  function applyTexture(textureId) {
    console.log('Applying texture:', textureId);
    // Remove all texture classes
    document.body.classList.remove('texture-noise', 'texture-geometric', 'texture-linen', 'texture-paper');
    
    // Add selected texture class if not none
    if (textureId !== 'none') {
      document.body.classList.add(`texture-${textureId}`);
      console.log('Added class: texture-' + textureId);
    }
    
    currentTexture = textureId;
    
    // Log current classes
    console.log('Current body classes:', document.body.className);
    
    // Log computed style
    const computedStyle = window.getComputedStyle(document.body);
    console.log('Computed background image:', computedStyle.backgroundImage);
  }
</script>

<div class="container mx-auto p-8">
  <h1 class="text-3xl font-bold mb-8">Texture Debug Test</h1>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
    <button 
      class="p-4 rounded bg-gray-200 hover:bg-gray-300 {currentTexture === 'none' ? 'ring-2 ring-blue-500' : ''}"
      on:click={() => applyTexture('none')}
    >
      No Texture
    </button>
    <button 
      class="p-4 rounded bg-gray-200 hover:bg-gray-300 {currentTexture === 'noise' ? 'ring-2 ring-blue-500' : ''}"
      on:click={() => applyTexture('noise')}
    >
      Noise Texture
    </button>
    <button 
      class="p-4 rounded bg-gray-200 hover:bg-gray-300 {currentTexture === 'geometric' ? 'ring-2 ring-blue-500' : ''}"
      on:click={() => applyTexture('geometric')}
    >
      Geometric Texture
    </button>
    <button 
      class="p-4 rounded bg-gray-200 hover:bg-gray-300 {currentTexture === 'linen' ? 'ring-2 ring-blue-500' : ''}"
      on:click={() => applyTexture('linen')}
    >
      Linen Texture
    </button>
    <button 
      class="p-4 rounded bg-gray-200 hover:bg-gray-300 {currentTexture === 'paper' ? 'ring-2 ring-blue-500' : ''}"
      on:click={() => applyTexture('paper')}
    >
      Paper Texture
    </button>
  </div>
  
  <div class="p-8 rounded bg-gray-100">
    <h2 class="text-2xl font-bold mb-4">Debug Information</h2>
    <p class="mb-4">
      Open the browser console (F12) to see debug information.
    </p>
    <p>
      Current texture: <strong>{currentTexture}</strong>
    </p>
    <button 
      class="mt-4 p-2 bg-blue-500 text-white rounded"
      on:click={() => {
        console.log('Body classes:', document.body.className);
        const computedStyle = window.getComputedStyle(document.body);
        console.log('Body background image:', computedStyle.backgroundImage);
        console.log('Body background size:', computedStyle.backgroundSize);
      }}
    >
      Log Current State
    </button>
  </div>
</div>