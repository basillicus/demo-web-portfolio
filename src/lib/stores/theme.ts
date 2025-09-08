import { writable } from 'svelte/store';

// Get initial theme from localStorage or default to 'dark'
const getInitialTheme = () => {
	if (typeof window !== 'undefined') {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			return savedTheme;
		}
		// Check system preference
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
			return 'light';
		}
	}
	return 'dark';
};

// Create the theme store
export const theme = writable(getInitialTheme());

// Function to toggle theme
export const toggleTheme = () => {
	theme.update(currentTheme => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', newTheme);
			document.documentElement.setAttribute('data-theme', newTheme);
		}
		return newTheme;
	});
};

// Initialize theme on client side
if (typeof window !== 'undefined') {
	theme.subscribe((currentTheme) => {
		document.documentElement.setAttribute('data-theme', currentTheme);
	});
}