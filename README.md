# Professional ML/AI Portfolio

A modern, responsive portfolio website for Machine Learning and AI professionals, built with SvelteKit, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Dark theme with vibrant yellow accents
- **Responsive Layout**: Works on all device sizes
- **Syntax Highlighting**: Beautiful code blocks with custom styling
- **SEO Optimized**: Proper metadata and structured data
- **Fast & Lightweight**: Static site generation for optimal performance
- **Easy Content Management**: Add projects and blog posts with Markdown

## Tech Stack

- **Framework**: SvelteKit
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Markdown Processing**: mdsvex
- **Syntax Highlighting**: Prism.js
- **Deployment**: Static site (adapter-static)

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
│   └── projects/      # Project showcases (Markdown files)
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
date: "2023-12-01"
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
date: "2023-12-01"
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
  --color-primary: #778DA9;     /* Light blue for accents */
  --color-secondary: #415A77;   /* Medium blue for hover states */
  --color-accent-yellow: #FFB703; /* Vibrant yellow for highlights */
  --color-background: #1B263B;  /* Dark blue background */
  --color-text: #E0E1DD;        /* Off-white text */
}
```

To change colors, modify these CSS variables.

### Fonts

Fonts are defined in:
1. `src/app.html` (Google Fonts imports)
2. `src/lib/styles/theme.css` (CSS variables)

```css
:root {
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Source Serif Pro', serif;
}
```

To change fonts:
1. Add new Google Fonts import in `src/app.html`
2. Update the CSS variables in `theme.css`

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
}
```

### Shadows & Transitions

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.4);
  
  --transition-fast: 150ms ease;
  --transition-medium: 300ms ease;
  --transition-slow: 500ms ease;
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