<script>
  import { onMount } from 'svelte';
  
  // Font themes array - focused on accessibility vs standard
  const fontThemes = [
    { id: 'standard', name: 'Standard (Default)' },
    { id: 'accessibility', name: 'Accessibility Optimized' }
  ];
  
  // Reactive variable for current theme
  let currentTheme = 'standard';
  let showSwitcher = false;
  
  // Apply font theme to body
  function applyFontTheme(themeId) {
    // Remove all font theme classes
    document.body.classList.remove('font-theme-accessibility', 'font-theme-standard');
    
    // Apply selected theme
    if (themeId === 'accessibility') {
      document.body.classList.add('font-theme-accessibility');
    } else if (themeId === 'standard') {
      document.body.classList.add('font-theme-standard');
    }
    
    // Save to localStorage
    localStorage.setItem('fontTheme', themeId);
  }
  
  // Load saved theme on mount
  onMount(() => {
    const savedTheme = localStorage.getItem('fontTheme');
    if (savedTheme) {
      currentTheme = savedTheme;
      applyFontTheme(savedTheme);
    }
  });
  
  // Handle theme change
  function handleThemeChange(themeId) {
    currentTheme = themeId;
    applyFontTheme(themeId);
  }
  
  // Toggle switcher visibility
  function toggleSwitcher() {
    showSwitcher = !showSwitcher;
  }
</script>

<!-- Floating toggle button -->
<button 
  class="fixed bottom-4 right-4 z-50 bg-[var(--color-accent-yellow)] text-black p-3 rounded-full shadow-lg hover:bg-[var(--color-accent-green)] transition-colors"
  on:click={toggleSwitcher}
  aria-label="Toggle font theme switcher"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
</button>

<!-- Font theme switcher panel -->
{#if showSwitcher}
  <div class="fixed bottom-20 right-4 z-50 bg-[var(--color-bg-card)] p-4 rounded-lg shadow-lg border border-[var(--color-text-secondary)] w-80">
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-lg font-semibold">Font Options</h3>
      <button 
        class="text-[var(--color-text-primary)] hover:text-[var(--color-accent-yellow)]"
        on:click={toggleSwitcher}
        aria-label="Close font theme switcher"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <div class="space-y-2">
      {#each fontThemes as theme}
        <button
          class="block w-full text-left px-3 py-2 rounded transition-colors text-sm {currentTheme === theme.id ? 'bg-[var(--color-accent-yellow)] text-black' : 'hover:bg-[var(--color-bg-secondary)]'}"
          on:click={() => handleThemeChange(theme.id)}
        >
          {theme.name}
        </button>
      {/each}
    </div>
    <div class="mt-3 text-xs text-[var(--color-text-secondary)]">
      <p class="mb-1"><strong>Standard:</strong> Instrument Sans + Literata (default)</p>
      <p><strong>Accessibility:</strong> Lexend for both headings and body text</p>
    </div>
  </div>
{/if}