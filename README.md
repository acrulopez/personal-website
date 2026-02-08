# Personal Website

A fast, static personal website and blog built with [Astro 5](https://astro.build), [Tailwind CSS 4](https://tailwindcss.com), and [TypeScript](https://www.typescriptlang.org).

## Quick Start

### Prerequisites

- Node.js 18+ and npm

### Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

```bash
npm run build
npm run preview  # Preview the static build
```

## Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Header.astro     # Navigation header
│   └── Footer.astro     # Footer
├── data/                # Content data
│   ├── blog/            # Markdown blog posts
│   └── projects/        # Project data (JSON)
├── layouts/
│   └── BaseLayout.astro # Main HTML layout
├── pages/               # Routes (auto-generated)
│   ├── index.astro      # Home page
│   ├── about.astro      # About page
│   ├── blog/
│   │   ├── index.astro  # Blog listing
│   │   └── [slug].astro # Individual post
│   └── projects/
│       └── index.astro  # Projects listing
├── styles/
│   └── global.css       # Tailwind CSS
└── content.config.ts    # Content collections config
```

## Adding Blog Posts

Blog posts are markdown files in `src/data/blog/`.

### Create a new post

Add a `.md` file to `src/data/blog/`:

```markdown
---
title: "My New Post"
description: "A short description for previews and SEO"
pubDate: 2025-02-08
tags: ["javascript", "web-dev"]
draft: false
---

# My New Post

Your content here...
```

**Frontmatter fields:**
- `title` (required): Post title
- `description` (required): Short summary
- `pubDate` (required): Publish date (ISO format)
- `tags` (optional): Array of tags
- `draft` (optional): Set to `true` to hide from listing (default: `false`)

The post will be automatically available at `/blog/{filename}/` (without the `.md`).

### Example

```markdown
---
title: "Getting Started with TypeScript"
description: "Learn the basics of TypeScript in 10 minutes"
pubDate: 2025-02-08
tags: ["typescript", "tutorial"]
---

# Getting Started with TypeScript

TypeScript adds static typing to JavaScript...
```

→ Available at `/blog/getting-started-with-typescript/`

## Adding Projects

Projects are defined in `src/data/projects/projects.json`. You have two options:

### Option 1: Fetch from GitHub (Recommended for Open Source)

Let the system automatically pull title, description, and topics from your GitHub repository:

```json
{
  "id": "my-project",
  "pull_from_github": true,
  "repo": "https://github.com/username/my-project",
  "url": "https://myproject.com",
  "featured": true
}
```

**Fields:**
- `id`: Unique identifier
- `pull_from_github`: Set to `true` to fetch from GitHub
- `repo`: GitHub repository URL (required when `pull_from_github` is `true`)
- `url`: Live demo/website URL (optional)
- `featured`: Show in featured section (optional, default: `false`)

The system will fetch:
- **title** from repo name
- **description** from repo description
- **tags** from GitHub topics

### Option 2: Manual Entry

Provide all data manually:

```json
{
  "id": "my-project",
  "title": "My Project",
  "description": "A detailed description of my project",
  "repo": "https://github.com/username/my-project",
  "url": "https://myproject.com",
  "tags": ["react", "typescript", "tailwind"],
  "featured": false
}
```

**Fields:**
- `id`: Unique identifier
- `title`: Project name (required unless `pull_from_github` is `true`)
- `description`: Project description (required unless `pull_from_github` is `true`)
- `repo`: GitHub repository URL (optional)
- `url`: Live demo/website URL (optional)
- `tags`: Array of technology tags (optional)
- `featured`: Show in featured section (optional, default: `false`)

### Mixing Both Approaches

You can use GitHub fetch as a base and override with manual values:

```json
{
  "id": "my-project",
  "pull_from_github": true,
  "repo": "https://github.com/username/my-project",
  "tags": ["custom", "tags"],
  "featured": true
}
```

This fetches title and description from GitHub but uses your custom tags.

## Customization

### Styling

Tailwind CSS configuration is in `src/styles/global.css`:

```css
@theme {
  --color-primary: #3b82f6;      /* Blue */
  --color-secondary: #8b5cf6;    /* Purple */
}
```

Modify these colors to match your brand.

### Navigation

Edit the links in `src/components/Header.astro`:

```astro
const links = [
  { href: "/", label: "Home" },
  { href: "/blog/", label: "Blog" },
  // Add your own links here
];
```

### Content

- **Home page:** `src/pages/index.astro`
- **About page:** `src/pages/about.astro`
- **Blog layout:** `src/layouts/BaseLayout.astro` (applies to all pages)

## License

MIT
