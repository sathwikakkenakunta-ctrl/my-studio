# Sathwik Akkenakunta — Portfolio

A premium, responsive portfolio for Sathwik Akkenakunta, Full Stack Web Developer. The site presents modern website, dashboard, and SaaS application capabilities through a polished editorial design system and clearly labeled concept projects.

## Features

- Responsive portfolio, services, about, project, engagement, notes, FAQ, contact, legal, and 404 routes
- Six documented concept case studies
- Automatic system theme detection with accessible light/dark switching
- Standardized primary, secondary, outline, ghost, text, and danger button variants
- Reduced-motion support, skip navigation, visible focus states, and semantic structure
- Validated contact form using React Hook Form and Zod
- Route-specific metadata, Open Graph tags, author metadata, and Person structured data
- Sitemap, robots configuration, lazy-loaded routes, and Vercel SPA rewrites

## Stack

React 19, TypeScript, Vite, Tailwind CSS 4, React Router, Framer Motion, Lenis, Lucide, React Helmet Async, React Hook Form, and Zod.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production verification

```bash
npm run lint
npm run build
npm run preview
```

## Architecture

```text
src/
  components/
    layout/       # Navigation, footer, and application shell
    sections/     # Reusable page sections
    ui/           # Buttons, SEO, reveals, accordion, and layout primitives
  data/           # Portfolio identity and project content
  pages/          # Lazy-loaded route components
  index.css       # Design tokens, themes, buttons, and global styles
public/           # Favicon and search-engine files
```

## Content note

The portfolio identity and contact information belong to Sathwik Akkenakunta. Case studies and their metrics are concept work and are labeled as demonstrations.

## Deployment

Import the repository into Vercel and use the default Vite settings. `vercel.json` routes client-side URLs back to the application shell. Update the sitemap base URL if a custom domain is connected.
