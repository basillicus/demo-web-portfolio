# Professional ML/AI Portfolio

A modern, responsive portfolio website for Machine Learning and AI professionals, built with SvelteKit, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Elegant dark/light theme with professional color scheme
- **Responsive Layout**: Works on all device sizes with mobile-first approach
- **Syntax Highlighting**: Beautiful code blocks with custom styling
- **SEO Optimized**: Proper metadata and structured data
- **Fast & Lightweight**: Static site generation for optimal performance
- **Accessible**: WCAG compliant design with proper contrast ratios
- **Easy Content Management**: Add projects and blog posts with Markdown
- **Multiple Font Themes**: Standard and accessibility-optimized font options
- **Tag System**: Content organized by tags for easy navigation
- **Animated Elements**: Subtle animations for enhanced user experience

## Tech Stack

- **Framework**: SvelteKit
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom themes
- **Markdown Processing**: mdsvex
- **Syntax Highlighting**: Prism.js
- **Deployment**: Static site (adapter-static)
- **Form Handling**: Formspree
- **Comments**: Giscus
- **Analytics**: Umami

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── content/
│   ├── blog/          # Blog posts (Markdown files)
│   └── projects/       # Project showcases (Markdown files)
├── src/
│   ├── lib/
│   │   ├── components/ # Reusable UI components
│   │   ├── styles/     # Theme and global styles
│   │   └── utils/      # Utility functions
│   ├── routes/         # Page routes
│   ├── app.css         # Global CSS
│   └── app.html        # Base HTML template
├── static/             # Static assets (images, favicons, etc.)
└── package.json
```

## Adding Content

### Blog Posts

1. Create a new Markdown file in `content/blog/`
2. Add frontmatter at the top:

```markdown
---
title: "Your Blog Post Title"
date: "2025-12-01"
summary: "Brief summary of your post"
tags: ["tag1", "tag2", "tag3"]
published: true
---

Your blog post content here...
```

3. Write your content in Markdown below the frontmatter

### Projects

1. Create a new Markdown file in `content/projects/`
2. Add frontmatter:

```markdown
---
title: "Your Project Title"
date: "2025-12-01"
summary: "Brief summary of your project"
tags: ["machine learning", "python", "nlp"]
published: true
---

Your project description here...
```

3. Write your project details in Markdown

## Customization

### Colors

Colors are defined in `src/lib/styles/theme.css`:

```css
:root {
  /* Dark Theme (default) */
  --color-bg-primary: #0D1B2A;
  --color-bg-secondary: #152232;
  --color-bg-card: #415A77;
  --color-text-primary: #E0E1DD;
  --color-text-secondary: #778DA9;
  --color-header-footer: #1B263B;
  --color-accent-yellow: #FFB703;
  --color-accent-green: #6b9080;
}
```

```css
[data-theme="light"] {
  /* Light Theme */
  --color-bg-primary: #f0f8f0;
  --color-bg-secondary: #e0f0ed;
  --color-bg-card: #d8e8e4;
  --color-text-primary: #222222;
  --color-text-secondary: #5a7a6f;
  --color-header-footer: #c0d8d0;
  --color-accent-yellow: #4a9b5d;
  --color-accent-green: #3a7a5f;
}
```

To change colors, modify these CSS variables.

### Fonts

Fonts are defined in:
1. `src/app.html` (Google Fonts imports)
2. `src/lib/styles/theme.css` (CSS variables)

```css
:root {
  --font-heading: 'Instrument Sans', sans-serif;
  --font-body: 'Literata', serif;
}
```

Font themes can be switched between:
- **Standard**: Instrument Sans + Literata
- **Accessibility Optimized**: Lexend (for both headings and body)

### Spacing & Sizes

Consistent spacing is maintained through CSS variables:

```css
:root {
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  
  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-medium: 300ms ease;
  --transition-slow: 500ms ease;
}
```

### Shadows

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
}
```

## Deployment

This site generates static files and can be deployed to any static hosting service:

### Vercel
1. Connect your GitHub repository
2. Set output directory to `build`
3. Deploy!

### Netlify
1. Connect your GitHub repository
2. Set publish directory to `build`
3. Deploy!

### Manual Deployment
1. Run `npm run build`
2. Upload the contents of the `build` directory to your web server

## Adding Features

### Contact Form
The contact form uses Formspree. To configure:
1. Create an account at [formspree.io](https://formspree.io)
2. Update the form action in `src/routes/contact/+page.svelte`

### Comments
Blog posts include Giscus for comments. To configure:
1. Set up Giscus at [giscus.app](https://giscus.app)
2. Update the script attributes in `src/routes/blog/[slug]/+page.svelte`

### Analytics
Site includes Umami analytics. To configure:
1. Set up Umami at [umami.is](https://umami.is)
2. Update the script in `src/app.html`

## Troubleshooting

### Styles Not Updating
1. Clear browser cache
2. Restart development server
3. Check for CSS specificity issues

### Syntax Highlighting Not Working
1. Ensure code blocks have proper language classes (`language-python`, etc.)
2. Check that required Prism.js languages are imported in `src/lib/utils/syntaxHighlighting.ts`

### Mobile Menu Issues
1. Check `src/lib/components/Header.svelte` for responsive classes
2. Verify Tailwind CSS breakpoints

### Form Readability Issues
1. Check that form inputs use proper theme variables
2. Ensure autocomplete styling is overridden with custom CSS

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue on the GitHub repository.