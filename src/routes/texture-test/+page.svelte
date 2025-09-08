<script>
  import { onMount } from 'svelte';
  
  let currentTexture = 'none';
  
  function applyTexture(textureId) {
    // Remove all texture classes
    document.body.classList.remove('texture-noise', 'texture-geometric', 'texture-linen', 'texture-paper');
    
    // Add selected texture class if not none
    if (textureId !== 'none') {
      document.body.classList.add(`texture-${textureId}`);
    }
    
    currentTexture = textureId;
  }
</script>

<div class="container mx-auto p-8">
  <h1 class="text-3xl font-bold mb-8">Texture Test Page</h1>
  
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
  </div>
  
  <div class="p-8 rounded bg-gray-100">
    <h2 class="text-2xl font-bold mb-4">Test Area</h2>
    <p class="mb-4">
      This area should show the selected texture. Click the buttons above to test different textures.
    </p>
    <p>
      Current texture: <strong>{currentTexture}</strong>
    </p>
  </div>
</div>