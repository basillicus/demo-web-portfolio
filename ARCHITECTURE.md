# Portfolio Website Architecture

This document describes the architecture and structure of the portfolio website, explaining how different components work together to create a dynamic, content-driven site.

## Overview

The portfolio website is built with SvelteKit, using a static site generation approach with TypeScript, Tailwind CSS, and mdsvex. Content is managed through Markdown files, making it easy to add new blog posts and projects without touching code.

## Project Structure

```
portfolio/
├── src/
│   ├── lib/
│   │   ├── components/     # Reusable UI components
│   │   ├── stores/         # Svelte stores for state management
│   │   └── utils/          # Utility functions
│   ├── routes/             # Page routes and layouts
│   └── app.css            # Global styles
├── content/               # Markdown content files
│   ├── blog/              # Blog post markdown files
│   └── projects/          # Project markdown files
├── static/                # Static assets (images, favicons, etc.)
└── build/                 # Generated static site output
```

## Content Management

### Markdown Files

Content is stored as Markdown files in the `content/` directory:

- `content/blog/` - Blog posts
- `content/projects/` - Project descriptions

Each markdown file follows this structure:

```markdown
---
title: "Post Title"
date: "2025-01-01"
summary: "Brief description of the content"
tags: ["tag1", "tag2", "tag3"]
published: true
---

# Actual Content

Regular markdown content with **formatting**, lists, code blocks, etc.
```

### Content Loading

The `src/lib/utils/content.ts` file handles all content loading and processing:

1. **File Discovery**: Uses `glob` to find all markdown files in content directories
2. **Frontmatter Parsing**: Extracts metadata from YAML frontmatter
3. **Markdown Processing**: Converts markdown content to HTML using `marked`
4. **Data Sorting**: Sorts content chronologically for listings

Key functions:
- `getBlogPosts()` - Returns all blog posts
- `getProjects()` - Returns all projects
- `getBlogPostBySlug()` - Returns specific blog post
- `getProjectBySlug()` - Returns specific project
- `getAllTags()` - Returns all unique tags
- `getItemsByTag()` - Returns content filtered by tag

## Routing

### Static Routes

- `/` - Homepage
- `/blog` - Blog listing
- `/projects` - Projects listing
- `/about` - About page
- `/contact` - Contact page

### Dynamic Routes

- `/blog/[slug]` - Individual blog posts
- `/projects/[slug]` - Individual projects
- `/tags/[tag]` - Content filtered by tag

### Page Structure

Each route follows this pattern:
1. **Server Load Function** (`+page.server.ts`) - Loads data from content files
2. **Page Component** (`+page.svelte`) - Displays the data using Svelte components

## Styling

### Tailwind CSS

The site uses Tailwind CSS for styling with a custom theme defined in:

- `src/lib/styles/theme.css` - CSS custom properties for colors and typography
- `src/lib/styles/font-themes.css` - Font theme variations

### Responsive Design

All components are designed to be responsive using Tailwind's breakpoints:
- Mobile-first approach
- Responsive utilities for different screen sizes

### Dark/Light Theme

The site supports both dark and light themes:
- Theme切换通过`src/lib/stores/theme.ts`管理
- Theme persistence using localStorage
- CSS custom properties adapt to theme changes

## Components

### Reusable Components

Located in `src/lib/components/`:
- `Header.svelte` - Site navigation and theme toggle
- `Footer.svelte` - Footer with copyright and social links
- `FontThemeSwitcher.svelte` - Font theme selection interface

### Styling Approach

Components use a combination of:
- Tailwind CSS classes for rapid development
- Custom CSS variables for consistent theming
- Component-scoped styles where needed

## Deployment

### Build Process

1. `npm run build` generates static files in the `build/` directory
2. Output includes HTML, CSS, and JavaScript files
3. All routes are pre-rendered for fast loading

### Hosting Options

The static site can be deployed to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting provider

### Performance Features

- Static site generation for fast loading
- Code splitting for efficient delivery
- Asset optimization
- Global CDN delivery (when deployed to supported platforms)

## Adding New Content

### Blog Posts

1. Create a new markdown file in `content/blog/`
2. Add frontmatter with required metadata
3. Write content in markdown format
4. The post automatically appears on the blog listing

### Projects

1. Create a new markdown file in `content/projects/`
2. Add frontmatter with project metadata
3. Describe the project in markdown format
4. The project automatically appears on the projects listing

### Images and Media

- Place static assets in the `static/` directory
- Reference them in markdown with relative paths
- Images are automatically optimized in production builds

## Customization Guide

### Changing Colors

Modify `src/lib/styles/theme.css` to update:
- Color palette
- Typography
- Spacing
- Shadows and effects

### Adding Font Themes

1. Update `src/lib/styles/font-themes.css`
2. Add new font options to Google Fonts link
3. Update `FontThemeSwitcher.svelte` component

### Modifying Layout

- Global layout is defined in `src/routes/+layout.svelte`
- Individual page layouts can be customized per route
- Responsive behavior controlled through Tailwind classes

### Adding New Pages

1. Create a new directory in `src/routes/`
2. Add `+page.svelte` for the page component
3. Add `+page.server.ts` if data loading is needed
4. The route is automatically available based on directory structure

## Development Workflow

### Local Development

1. `npm run dev` - Start development server
2. Changes automatically reload in the browser
3. Error overlay for debugging

### Building

1. `npm run build` - Generate production build
2. `npm run preview` - Test production build locally

### Code Quality

- Prettier for code formatting
- TypeScript for type safety
- Svelte best practices

## Dependencies

### Core Framework

- SvelteKit - Web framework
- TypeScript - Type safety
- Tailwind CSS - Styling
- mdsvex - Markdown processing (configured but content loaded manually)

### Utilities

- marked - Markdown to HTML conversion
- glob - File pattern matching
- prismjs - Syntax highlighting

### Development Tools

- Vite - Build tool
- Prettier - Code formatting
- Svelte plugins for development

## Troubleshooting

### Content Not Appearing

1. Check that markdown files have correct frontmatter
2. Verify `published: true` in frontmatter
3. Ensure files are in the correct directory (`content/blog/` or `content/projects/`)
4. Restart development server to refresh content cache

### Styling Issues

1. Check browser developer tools for CSS conflicts
2. Verify Tailwind classes are correctly applied
3. Ensure custom CSS variables are defined in theme files

### Build Errors

1. Check for TypeScript errors
2. Verify all imports are correct
3. Ensure all required dependencies are installed