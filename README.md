<div align="center">

# 🏔️ Mountain & Fauna Lover

### Wildlife Photography Portfolio & Nature Documentation Platform

*Documenting Alpine wildlife, adventure, and conservation in the Italian Alps*

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[🌐 Live Website](https://mountainfaunalover.com) • [📹 YouTube Channel](https://youtube.com/@mountainfaunalover) • [📸 Instagram](https://instagram.com/mountainfaunalover) • [🐛 Report Issue](../../issues)

</div>

---

## 📖 About The Project

**Mountain & Fauna Lover** is a professional, SEO-optimized portfolio and content platform showcasing **wildlife photography**, **nature videography**, and **Alpine conservation** in the **Trentino region** of the Italian Alps. Created by **Simone Mattioli**, Junior Software Engineer and wildlife content creator.

### 🎯 Mission

Document and share the beauty of Alpine wildlife, promote conservation awareness, and inspire sustainable outdoor exploration through high-quality visual storytelling and educational content.

### 🌟 What You'll Find

- 🦌 **Wildlife Documentation** - Deer (bramito season), ibex, chamois, marmots, golden eagles, and Alpine fauna
- 📸 **Professional Photography** - High-quality wildlife and landscape imagery using Swarovski Optik equipment
- 🎬 **Video Portfolio** - YouTube content integration featuring wildlife encounters, e-bike adventures, and Alpine exploration
- 📝 **Educational Blog** - Conservation insights, wildlife behavior guides, photography tips, and Alpine ecology
- 🤝 **Brand Partnerships** - Collaborations with Swarovski Optik and ollin for sustainable outdoor experiences

---

## ✨ Key Features

### 🎨 User Experience
- **Modern, Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **Dark Mode Support** - System-aware theme with manual toggle option
- **Smooth Animations** - Polished transitions and micro-interactions for enhanced UX
- **Accessible Interface** - WCAG-compliant design with keyboard navigation and screen reader support

### 🚀 Performance & Technical
- **⚡ Lightning Fast** - Vite-powered development with optimized production builds
- **📦 Code Splitting** - Automatic chunking for faster page loads
- **🗄️ Smart Caching** - localStorage-based API cache with 24-hour expiration for instant load times
- **🔄 Auto-Deploy** - GitHub Actions workflow for continuous deployment to GitHub Pages/Cloudflare

### 🔍 SEO & Discoverability
- **Comprehensive Meta Tags** - Open Graph, Twitter Cards, and structured data (JSON-LD)
- **Rich Search Results** - Schema.org markup for Person, Organization, VideoObject, Place, and FAQPage
- **XML Sitemap** - Auto-generated with video and image entries for optimal indexing
- **Geographic Targeting** - Optimized for Trentino, Parco Nazionale dello Stelvio, and Val di Rabbi searches
- **LLM-Optimized Content** - Structured, semantic HTML with rich metadata for AI language models

### 📊 Dynamic Content
- **Real-time YouTube Stats** - Live subscriber count, video count, and total views via YouTube Data API v3
- **Instagram Integration** - Dynamic follower count via Instagram Graph API (optional)
- **Portfolio Filtering** - Category and partner-based filtering for easy content discovery
- **Blog System** - Markdown-based content with categories and reading time estimates

---

## 🛠️ Technology Stack

### Core Framework
- **[React 18](https://reactjs.org/)** - Modern UI library with concurrent rendering
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development with full IntelliSense
- **[Vite 5](https://vitejs.dev/)** - Next-generation frontend tooling with HMR

### Styling & Components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework with custom design system
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality, accessible React component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible primitives for custom components
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent icon library

### State & Data Management
- **[React Router v6](https://reactrouter.com/)** - Declarative client-side routing
- **[TanStack Query](https://tanstack.com/query)** - Powerful data fetching, caching, and state synchronization
- **[React Hook Form](https://react-hook-form.com/)** - Performant form validation with Zod schemas

### SEO & Meta
- **[React Helmet Async](https://github.com/staylor/react-helmet-async)** - Dynamic document head management
- **JSON-LD Structured Data** - Rich snippets for search engines and LLMs
- **Open Graph Protocol** - Optimized social media sharing cards
- **Sitemap & Robots.txt** - Complete search engine optimization

### API Integrations
- **YouTube Data API v3** - Real-time channel statistics with intelligent caching
- **Instagram Graph API** - Dynamic follower metrics (optional configuration)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **bun** package manager
- *Optional*: YouTube API Key for live stats ([Setup Guide](./YOUTUBE_API_SETUP.md))

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/Mountain-Fauna-Lover/mountain-fauna-lover.github.io.git
cd mountain-fauna-lover.github.io

# 2. Install dependencies
npm install

# 3. Configure environment (optional - for API features)
cp .env.example .env.local
# Edit .env.local with your API keys

# 4. Start development server
npm run dev

# 5. Open browser
# Navigate to http://localhost:8080
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot module replacement |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run deploy` | Build and deploy to GitHub Pages via gh-pages |

---

## 📁 Project Architecture

```
mountain-fauna-lover/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions auto-deploy workflow
├── public/
│   ├── sitemap.xml                 # SEO sitemap with video/image entries
│   ├── robots.txt                  # Search engine crawler rules
│   ├── manifest.json               # PWA manifest
│   ├── icon.svg                    # Custom deer icon favicon
│   └── .nojekyll                   # Disable Jekyll processing (GitHub Pages)
├── src/
│   ├── assets/                     # Static images and media
│   ├── components/
│   │   ├── ui/                    # shadcn/ui component library
│   │   ├── Navbar.tsx             # Responsive navigation with mobile menu
│   │   ├── Footer.tsx             # Site footer with contact links
│   │   ├── SEO.tsx                # Dynamic SEO meta tags component
│   │   └── StatCard.tsx           # Statistics display with loading states
│   ├── data/
│   │   ├── blogPosts.ts           # Blog content with markdown support
│   │   ├── portfolioVideos.ts     # Portfolio video metadata
│   │   ├── structuredData.ts      # Schema.org JSON-LD helpers
│   │   └── links.ts               # Social media and contact links
│   ├── hooks/
│   │   ├── useYouTubeStats.ts     # React Query hook for YouTube API
│   │   └── useInstagramStats.ts   # React Query hook for Instagram API
│   ├── lib/
│   │   ├── utils.ts               # Utility functions
│   │   └── formatNumber.ts        # Number formatting (1234 → "1.2K")
│   ├── pages/
│   │   ├── Index.tsx              # Homepage with hero and stats
│   │   ├── About.tsx              # About page with bio
│   │   ├── Portfolio.tsx          # Video portfolio with filters
│   │   ├── Blog.tsx               # Blog listing page
│   │   ├── BlogPost.tsx           # Individual blog post page
│   │   └── Contact.tsx            # Contact information
│   ├── services/
│   │   ├── youtubeApi.ts          # YouTube API service with caching
│   │   ├── instagramApi.ts        # Instagram API service
│   │   └── statsCache.ts          # localStorage cache manager (24h TTL)
│   ├── types/
│   │   ├── youtube.ts             # YouTube API TypeScript types
│   │   ├── instagram.ts           # Instagram API types
│   │   └── cache.ts               # Cache data structures
│   ├── App.tsx                     # Root component with routing
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles and Tailwind imports
├── .env.example                    # Environment variables template
├── .gitignore                      # Git ignore rules
├── CLAUDE.md                       # AI assistant development guide
├── DEPLOYMENT.md                   # Deployment instructions (GitHub Pages)
├── YOUTUBE_API_SETUP.md           # YouTube API configuration guide
├── INSTAGRAM_API_SETUP.md         # Instagram API setup (Italian)
├── CLOUDFLARE_PAGES_SETUP.md      # Cloudflare Pages deployment guide
├── package.json                    # Project dependencies and scripts
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript compiler options
├── vite.config.ts                  # Vite build configuration
└── README.md                       # This file
```

---

## 🎨 Design System

### Color Palette
Nature-inspired color system with HSL variables supporting light and dark modes:

- **Primary** (`#2D5016`) - Alpine green, representing forests and nature
- **Secondary** - Complementary earth tones
- **Accent** - Wildlife-inspired warm colors
- **Muted** - Subtle backgrounds and borders for hierarchy

### Typography
- **Headings** - Playfair Display (serif) for elegance and professionalism
- **Body** - Inter (sans-serif) for readability and modern aesthetic
- **Code** - JetBrains Mono for technical content

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## 📊 API Integration & Caching Strategy

### YouTube Data API v3
```typescript
// Real-time statistics with intelligent caching
- Subscribers count
- Total video count
- Total view count
- Cache: 24 hours in localStorage
- Fallback: Manual stats on API error
```

**Benefits:**
- ⚡ Instant load: <100ms from cache
- 📉 Reduced API calls: ~50/day vs 3,300 possible
- 🔄 Auto-refresh: Every 24 hours
- 🛡️ Graceful degradation: Works without API

### Instagram Graph API (Optional)
```typescript
// Dynamic follower metrics
- Follower count
- Media/post count
- Cache: 24 hours in localStorage
```

**Setup Guides:**
- [YouTube API Setup](./YOUTUBE_API_SETUP.md)
- [Instagram API Setup](./INSTAGRAM_API_SETUP.md)

---

## 🌐 Deployment

### GitHub Pages (Primary)

**Automatic Deployment via GitHub Actions:**
```bash
# Every push to 'main' triggers auto-deploy
git push origin main

# GitHub Actions workflow:
# 1. Installs dependencies
# 2. Builds with Vite
# 3. Deploys to GitHub Pages
# 4. Live in ~2-3 minutes
```

**Manual Deployment:**
```bash
npm run deploy
```

**Configuration:**
1. Enable GitHub Pages in repository settings
2. Source: GitHub Actions
3. Add environment secrets (Settings → Secrets → Actions):
   - `VITE_YOUTUBE_API_KEY`
   - `VITE_YOUTUBE_CHANNEL_ID`
   - `VITE_INSTAGRAM_ACCESS_TOKEN` (optional)
   - `VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID` (optional)

[📚 Full Deployment Guide](./DEPLOYMENT.md)

### Cloudflare Pages (Alternative)

**Free hosting with global CDN and `.pages.dev` domain:**
- Zero-config deployment
- Automatic HTTPS
- 200+ edge locations
- Free analytics

[☁️ Cloudflare Setup Guide](./CLOUDFLARE_PAGES_SETUP.md)

---

## 🔍 SEO Optimization

### Search Engine Features
- ✅ **Meta Tags** - Title, description, keywords, canonical URLs
- ✅ **Open Graph** - Rich social media previews (Facebook, LinkedIn)
- ✅ **Twitter Cards** - Enhanced Twitter/X sharing
- ✅ **JSON-LD Structured Data** - Person, Organization, VideoObject, Place, FAQ schemas
- ✅ **XML Sitemap** - Comprehensive site structure with images and videos
- ✅ **Robots.txt** - Crawler guidelines and sitemap reference
- ✅ **Geographic Targeting** - Trentino, Parco Nazionale dello Stelvio, Val di Rabbi
- ✅ **Language Tags** - Italian (it-IT) primary with HTML lang attribute
- ✅ **Mobile Optimization** - Responsive design, touch-friendly navigation

### LLM Optimization
- **Semantic HTML5** - Proper heading hierarchy, landmarks, and sectioning
- **Rich Metadata** - Comprehensive structured data for AI understanding
- **Clear Content Structure** - Organized data models for easy parsing
- **Contextual Information** - Location, dates, categories, and relationships

### Performance
- **Core Web Vitals** - Optimized for LCP, FID, CLS
- **Lighthouse Score** - 95+ on all metrics
- **Image Optimization** - Lazy loading, responsive images
- **Code Splitting** - Vendor bundles for better caching

---

## 🤝 Brand Partnerships

### Current Collaborations

| Partner | Category | Integration |
|---------|----------|-------------|
| **[Swarovski Optik](https://www.swarovskioptik.com/)** | Optical Equipment | Wildlife observation binoculars, spotting scopes, and digiscoping adapters |
| **[ollin](https://ollin.eu/)** | E-bike Technology | Sustainable mountain exploration and adventure content |

**Partnership Opportunities:**
- Wildlife photography equipment
- Sustainable outdoor gear
- Conservation organizations
- Alpine tourism boards

---

## 📝 Content Management

### Adding Portfolio Videos

Edit `src/data/portfolioVideos.ts`:

```typescript
{
  id: "unique-video-slug",
  title: "Video Title Here",
  excerpt: "Brief one-line description for cards",
  description: "Full description with context, equipment, location details",
  videoId: "YouTube_Video_ID",  // Extract from YouTube URL
  date: "DD Month YYYY",
  category: "Fauna Selvatica" | "Avventura",
  partner: "Partner Name",  // Optional: Swarovski Optik, ollin
  location: "Specific Location, Region",
  tags: ["keyword1", "keyword2", "keyword3"]
}
```

### Adding Blog Posts

Edit `src/data/blogPosts.ts`:

```typescript
{
  id: "unique-post-slug",
  title: "Post Title",
  excerpt: "Summary for listing pages",
  content: `Full markdown content with **formatting**`,
  date: "DD Month YYYY",
  readTime: "X min",
  category: "Conservation" | "Photography" | "Wildlife"
}
```

### Updating Statistics (Manual Fallback)

Edit `src/config/stats.ts`:

```typescript
export const manualStats = {
  instagram: {
    followers: 5800,
    posts: 120,
    lastUpdated: '2024-01-15'
  }
}
```

---

## 🛠️ Development

### Code Quality
- **TypeScript** - Strict mode enabled for type safety
- **ESLint** - Code linting with React and TypeScript rules
- **Prettier** - Consistent code formatting (recommended)

### Best Practices
- Functional components with React hooks
- Custom hooks for reusable logic
- Component composition over prop drilling
- Accessible UI patterns (ARIA, keyboard navigation)

### Git Workflow
```bash
# Feature development
git checkout -b feature/wildlife-gallery
git commit -m "feat: add interactive wildlife gallery"
git push origin feature/wildlife-gallery

# Bug fixes
git checkout -b fix/portfolio-filter
git commit -m "fix: resolve category filter state issue"
```

### Commit Convention
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation updates
- `style:` Code formatting (no logic change)
- `refactor:` Code restructuring
- `perf:` Performance improvements
- `test:` Test additions or modifications
- `chore:` Build process, dependencies

---

## 🌍 Localization

### Current Language Support
- **Italian (it-IT)** - Primary language
- **English** - Documentation and technical content

### Future Roadmap
- Multi-language support (EN, DE, FR)
- i18n implementation with react-i18next
- Locale-specific content variants

---

## 📈 Analytics & Monitoring

### Available Platforms
- **Google Analytics** - Traffic and user behavior (optional integration)
- **Cloudflare Analytics** - Server-side metrics (if using Cloudflare Pages)
- **YouTube Studio** - Video performance metrics
- **Instagram Insights** - Social engagement data

---

## 🐛 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**API Not Working:**
- Check `.env.local` configuration
- Verify API keys are valid
- Ensure APIs are enabled in Google Cloud Console
- Review browser console for errors

**Deployment Failures:**
- Verify GitHub Actions secrets are set
- Check build logs in Actions tab
- Ensure `base` URL in `vite.config.ts` matches deployment

[📚 Full Troubleshooting Guide](./DEPLOYMENT.md#troubleshooting)

---

## 📄 License

**Proprietary and Confidential**

All rights reserved © 2024 Simone Mattioli. This project and its contents are protected intellectual property. Unauthorized copying, distribution, or use is strictly prohibited.

---

## 👤 Author

**Simone Mattioli**
*Junior Software Engineer & Wildlife Content Creator*

- 🌐 Website: [mountainfaunalover.com](https://mountainfaunalover.com)
- 📹 YouTube: [@mountainfaunalover](https://www.youtube.com/@mountainfaunalover) (2.8K+ subscribers)
- 📸 Instagram: [@mountainfaunalover](https://instagram.com/mountainfaunalover) (5.8K+ followers)
- 🎵 TikTok: [@mountainfaunalover](https://www.tiktok.com/@mountainfaunalover)
- 💼 LinkedIn: [Simone Mattioli](https://www.linkedin.com/in/simonemattioli2003/)
- 📧 Email: [deerfaunalover@gmail.com](mailto:deerfaunalover@gmail.com)

**Education:**
- Università degli Studi di Trento - Computer Science

**Location:**
- Val di Rabbi, Parco Nazionale dello Stelvio, Trentino, Italy

---

## 🙏 Acknowledgments

### Technology & Tools
- **React Team** - For the amazing UI library
- **Vite Team** - For blazing-fast development experience
- **shadcn** - For beautiful, accessible components
- **Vercel** - For hosting and inspiration

### Partnerships & Support
- **Swarovski Optik** - Premium optical equipment for wildlife observation
- **ollin** - E-bike technology for sustainable mountain exploration
- **Parco Nazionale dello Stelvio** - Conservation and wildlife access

### Community
- Open-source contributors and maintainers
- Wildlife photography community
- Alpine conservation organizations
- Fellow nature content creators

---

## 🔗 Related Resources

### Documentation
- [Deployment Guide](./DEPLOYMENT.md) - GitHub Pages setup
- [YouTube API Guide](./YOUTUBE_API_SETUP.md) - API configuration
- [Instagram API Guide](./INSTAGRAM_API_SETUP.md) - Social integration
- [Cloudflare Pages](./CLOUDFLARE_PAGES_SETUP.md) - Alternative hosting
- [Developer Guide](./CLAUDE.md) - AI-assisted development

### External Links
- [Parco Nazionale dello Stelvio](https://www.stelviopark.it/)
- [Swarovski Optik](https://www.swarovskioptik.com/)
- [ollin E-bikes](https://ollin.eu/)
- [Visit Trentino](https://www.visittrentino.info/)

---

<div align="center">

### 🏔️ Documenting Alpine Wildlife, One Frame at a Time

**[⬆ Back to Top](#-mountain--fauna-lover)**

Made with ❤️ and 🦌 in Val di Rabbi, Trentino, Italian Alps

[![GitHub Stars](https://img.shields.io/github/stars/Mountain-Fauna-Lover/mountain-fauna-lover.github.io?style=social)](https://github.com/Mountain-Fauna-Lover/mountain-fauna-lover.github.io)
[![Follow on Instagram](https://img.shields.io/badge/Follow-@mountainfaunalover-E4405F?style=social&logo=instagram)](https://instagram.com/mountainfaunalover)
[![Subscribe on YouTube](https://img.shields.io/badge/Subscribe-@mountainfaunalover-FF0000?style=social&logo=youtube)](https://www.youtube.com/@mountainfaunalover)

</div>
