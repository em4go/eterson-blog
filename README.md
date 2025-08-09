# eterson-blog

Personal blog and portfolio built with Astro. It includes a blog (Markdown/MDX), projects section, About page and timeline, RSS, sitemap, and SEO-ready head tags.

Features:

- Fast, static Astro site with TypeScript
- Blog posts in Markdown and MDX (`src/content/blog`)
- SEO/OpenGraph via `BaseHead.astro`
- RSS feed at `/rss.xml` and sitemap support
- Projects gallery and timeline components
- Accessible typography (Atkinson Hyperlegible) and light/dark favicons

## Project structure

```text
├── public/
│   └── fonts/ (Atkinson bold/regular)
├── src/
│   ├── assets/            # images, favicons, project previews
│   ├── components/        # Header, Footer, ProjectsSection, AboutMeTimeline, etc.
│   ├── content/
│   │   └── blog/          # your .md / .mdx posts
│   ├── layouts/           # Layout.astro, BlogPost.astro
│   └── pages/             # routes: /, /about, /blog, /rss.xml
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Getting started

Prerequisites: Node.js 18+ and pnpm.

Common tasks:

- Install: `pnpm install`
- Dev server: `pnpm dev` (<http://localhost:4321>)
- Build: `pnpm build` (outputs to `dist/`)
- Preview build: `pnpm preview`
- Astro CLI: `pnpm astro <command>` (e.g. `pnpm astro check`)

## Writing posts

- Add a new post in `src/content/blog/` using `.md` or `.mdx`.
- Recommended frontmatter (fields may be optional based on the collection schema):

```md
---
title: "My first post"
description: "Short summary for social and SEO"
pubDate: 2025-08-09
updatedDate: 2025-08-10
tags: [astro, blog]
heroImage: "../assets/blog-placeholder-1.jpg" # optional
---

Your content here...
```

- Posts are listed at `/blog`. Individual posts use `BlogPost.astro` layout.

## Customization

- Site metadata: set `site` and integrations in `astro.config.mjs`.
- Head tags and SEO: edit `src/components/BaseHead.astro`.
- Navigation/header/footer: `src/components/Header.astro`, `Nav.astro`, `Footer.astro`.
- Projects grid: `src/components/ProjectsSection.astro` (images under `src/assets/projects-preview/`).
- Timeline/About: `src/components/AboutMeTimeline.astro`, page at `src/pages/about.astro`.
- Home page: `src/pages/index.astro`.
- RSS: `src/pages/rss.xml.js` generates `/rss.xml`.

## Deployment

This is a static site. After `pnpm build`, deploy the `dist/` directory to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

## Acknowledgements

Based on the official Astro Blog Starter and inspired by Bear Blog aesthetics.
