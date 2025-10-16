# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Peak Paths and Paws** (Mountain & Fauna Lover) is a wildlife photography and nature documentation website showcasing wildlife observations in the Italian Alps, particularly in Parco Nazionale dello Stelvio and Val di Rabbi, Trentino. The site is built by Simone Mattioli to document wildlife sightings (deer, ibex, chamois, marmots), share alpine adventures, and provide educational content about Alpine fauna.

## Technology Stack

- **Build Tool**: Vite 5.4+
- **Framework**: React 18 + TypeScript
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom theme
- **Routing**: React Router DOM v6
- **Forms**: React Hook Form + Zod validation
- **State Management**: TanStack Query (React Query)
- **SEO**: React Helmet Async with comprehensive structured data

## Common Commands

```bash
# Development server (runs on http://[::]:8080)
npm run dev

# Production build
npm run build

# Development build
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Code Architecture

### Route Structure

Routes are defined in [src/App.tsx](src/App.tsx) using React Router:

- `/` - Homepage (Index) with featured videos and hero section
- `/about` - About page with creator bio and mission
- `/portfolio` - Portfolio grid showing wildlife videos (blog-like structure)
- `/blog` - Blog listing page
- `/blog/:id` - Individual blog post pages
- `/links` - Social media links page
- `*` - 404 NotFound page

**IMPORTANT**: All custom routes MUST be added ABOVE the catch-all `*` route in App.tsx, otherwise they will be caught by the 404 handler.

### Data Management Pattern

Content is stored as TypeScript data files in [src/data/](src/data/):

1. **blogPosts.ts** - Blog content with markdown-like structure
   - Each post has: id, title, excerpt, content (full markdown), date, readTime, category
   - Content includes full article text with markdown formatting

2. **portfolioVideos.ts** - YouTube video portfolio entries
   - Each video has: id, title, excerpt, description, videoId (YouTube), date, category, partner (optional), location, tags
   - Portfolio is structured like a blog but displays YouTube embeds

3. **structuredData.ts** - SEO structured data helpers
   - Functions for creating schema.org JSON-LD
   - Includes: website, organization, person, FAQ, place (geographic), and video objects

### Component Structure

**Core Layout Components** ([src/components/](src/components/)):
- **Navbar** - Main navigation with dark mode toggle
- **Footer** - Site footer with social links
- **ScrollProgress** - Progress bar showing scroll position
- **BackToTop** - Floating button to return to top
- **Breadcrumbs** - Breadcrumb navigation component
- **ImageLightbox** - Modal for full-screen image viewing
- **ThemeToggle** - Dark/light mode switcher

**UI Components** ([src/components/ui/](src/components/ui/)):
- shadcn/ui components (accordion, alert, button, card, dialog, etc.)
- Use the `cn()` utility from [src/lib/utils.ts](src/lib/utils.ts) to merge Tailwind classes

### SEO Implementation

The site has comprehensive SEO through the **SEO component** ([src/components/SEO.tsx](src/components/SEO.tsx)):

- Each page should wrap content with `<SEO />` component
- Pass page-specific: title, description, keywords, canonical, structuredData
- For blog posts, include article metadata (publishedTime, modifiedTime, author, tags)
- Geographic targeting is built-in for Trentino/Parco Stelvio
- Open Graph and Twitter Card meta tags are automatically generated
- Structured data (JSON-LD) for rich search results

**Example usage**:
```tsx
<SEO
  title="Post Title"
  description="Post description"
  keywords="relevant, keywords"
  canonical="/blog/post-id"
  ogType="article"
  article={{
    publishedTime: "2024-01-01",
    tags: ["wildlife", "photography"]
  }}
  structuredData={articleStructuredData}
/>
```

### Path Aliases

The project uses `@/` as an alias for the [src/](src/) directory:
```typescript
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/data/blogPosts"
```

### Styling System

- **Tailwind CSS** with custom theme in [tailwind.config.ts](tailwind.config.ts)
- **Custom fonts**: Inter (sans), Playfair Display (serif)
- **Dark mode**: Class-based dark mode via `next-themes`
- **Custom colors**: HSL-based color system with CSS variables in [src/index.css](src/index.css)
- **Animations**: Custom fade-in animation, accordion animations via Radix

### Content Addition Workflow

**To add a new blog post**:
1. Add entry to `blogPosts` array in [src/data/blogPosts.ts](src/data/blogPosts.ts)
2. Use unique `id` (becomes URL slug)
3. Write content using markdown-style syntax
4. Blog post will automatically appear in listing and be accessible at `/blog/:id`

**To add a new portfolio video**:
1. Add entry to `portfolioVideos` array in [src/data/portfolioVideos.ts](src/data/portfolioVideos.ts)
2. Extract YouTube video ID from URL (e.g., `AlRfDBPqy_I` from `youtube.com/watch?v=AlRfDBPqy_I`)
3. Include partner info if sponsored content
4. Add relevant tags for filtering

### Language and Localization

- **Primary language**: Italian (it-IT)
- All content is in Italian
- SEO meta tags use `lang="it"` and `hreflang="it"`
- Consider this when generating any new content or copy

## Development Notes

- Use `bun.lockb` for dependencies (Bun package manager used)
- Server runs on IPv6 `[::]` port 8080
- shadcn/ui component config in [components.json](components.json)
- TypeScript strict mode enabled
- ESLint configured with React hooks rules
