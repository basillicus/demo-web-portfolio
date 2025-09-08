<script>
  import { onMount } from 'svelte';
  
  // Texture options
  let currentTexture = 'none';
  let showTextureSwitcher = false;
  
  // Apply texture by adding/removing CSS classes
  function applyTexture(textureId) {
    console.log('Applying texture:', textureId);
    // Remove all texture classes
    document.body.classList.remove('texture-noise', 'texture-geometric', 'texture-linen', 'texture-paper');
    
    // Add selected texture class if not none
    if (textureId !== 'none') {
      document.body.classList.add(`texture-${textureId}`);
    }
    
    // Save to localStorage
    localStorage.setItem('backgroundTexture', textureId);
    currentTexture = textureId;
    console.log('Texture applied, current class:', document.body.className);
  }
  
  // Load saved texture on mount
  onMount(() => {
    console.log('TextureSwitcher mounted');
    const savedTexture = localStorage.getItem('backgroundTexture');
    if (savedTexture) {
      console.log('Loading saved texture:', savedTexture);
      applyTexture(savedTexture);
    }
  });
  
  // Handle texture change
  function handleTextureChange(textureId) {
    console.log('Texture changed to:', textureId);
    applyTexture(textureId);
  }
  
  // Toggle switcher visibility
  function toggleSwitcher() {
    console.log('Toggling switcher');
    showTextureSwitcher = !showTextureSwitcher;
  }
</script>

<!-- Floating toggle button -->
<button 
  class="fixed bottom-20 right-4 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
  on:click={toggleSwitcher}
  aria-label="Toggle texture switcher"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
</button>

<!-- Texture switcher panel -->
{#if showTextureSwitcher}
  <div class="fixed bottom-36 right-4 z-50 bg-[var(--color-bg-card)] p-4 rounded-lg shadow-lg border border-[var(--color-text-secondary)] w-80">
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-lg font-semibold">Background Textures</h3>
      <button 
        class="text-[var(--color-text-primary)] hover:text-[var(--color-accent-yellow)]"
        on:click={toggleSwitcher}
        aria-label="Close texture switcher"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <div class="space-y-2">
      <button
        class="block w-full text-left px-3 py-2 rounded transition-colors text-sm {currentTexture === 'none' ? 'bg-[var(--color-accent-yellow)] text-black' : 'hover:bg-[var(--color-bg-secondary)]'}"
        on:click={() => handleTextureChange('none')}
      >
        No Texture (Default)
      </button>
      <button
        class="block w-full text-left px-3 py-2 rounded transition-colors text-sm {currentTexture === 'noise' ? 'bg-[var(--color-accent-yellow)] text-black' : 'hover:bg-[var(--color-bg-secondary)]'}"
        on:click={() => handleTextureChange('noise')}
      >
        Subtle Noise
      </button>
      <button
        class="block w-full text-left px-3 py-2 rounded transition-colors text-sm {currentTexture === 'geometric' ? 'bg-[var(--color-accent-yellow)] text-black' : 'hover:bg-[var(--color-bg-secondary)]'}"
        on:click={() => handleTextureChange('geometric')}
      >
        Geometric Pattern
      </button>
      <button
        class="block w-full text-left px-3 py-2 rounded transition-colors text-sm {currentTexture === 'linen' ? 'bg-[var(--color-accent-yellow)] text-black' : 'hover:bg-[var(--color-bg-secondary)]'}"
        on:click={() => handleTextureChange('linen')}
      >
        Linen Texture
      </button>
      <button
        class="block w-full text-left px-3 py-2 rounded transition-colors text-sm {currentTexture === 'paper' ? 'bg-[var(--color-accent-yellow)] text-black' : 'hover:bg-[var(--color-bg-secondary)]'}"
        on:click={() => handleTextureChange('paper')}
      >
        Paper Texture
      </button>
    </div>
    <p class="text-xs text-[var(--color-text-secondary)] mt-3">
      Your selection is saved in browser storage
    </p>
  </div>
{/if}