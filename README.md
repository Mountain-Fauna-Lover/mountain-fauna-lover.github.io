<div align="center">

# 🏔️ Peak Paths and Paws

### Mountain & Fauna Lover

*Wildlife photography and nature documentation showcasing the beauty of the Italian Alps*

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[Live Demo](https://mountainfaunalover.com) • [Report Bug](../../issues) • [Request Feature](../../issues)

</div>

---

## 📖 About The Project

**Peak Paths and Paws** is a modern, SEO-optimized portfolio and blog website dedicated to wildlife photography and nature documentation in the Italian Alps. Built by Simone Mattioli, the platform showcases:

- 🦌 Wildlife sightings and observations (deer, ibex, chamois, marmots)
- 📸 Professional wildlife photography and videography
- 🎥 YouTube content integration with partner collaborations
- 🏔️ Alpine adventures and exploration in Trentino
- 📝 Educational blog content about Alpine fauna and conservation

### Key Features

- ✨ **Modern UI/UX** - Clean, responsive design with smooth animations
- 🎬 **Video Portfolio** - Integrated YouTube portfolio with category and partner filtering
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- 🔍 **SEO Optimized** - Comprehensive meta tags, structured data, and sitemap
- 🌙 **Dark Mode** - Theme toggle with system preference detection
- ⚡ **Performance** - Fast loading with Vite and optimized assets
- 🌐 **i18n Ready** - Italian language support with proper localization
- ♿ **Accessible** - Built with accessibility best practices

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **bun** - Comes with Node.js

> 💡 **Tip**: Use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage Node.js versions

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/peak-paths-and-paws.git
   cd peak-paths-and-paws
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:8080` (or `http://[::]:8080` for IPv6)

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run build:dev` | Build with development mode |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview production build locally |

---

## 🏗️ Technology Stack

### Core
- **[React 18](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server

### Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives

### Routing & State
- **[React Router v6](https://reactrouter.com/)** - Client-side routing
- **[TanStack Query](https://tanstack.com/query)** - Data fetching and caching

### SEO & Meta
- **[React Helmet Async](https://github.com/staylor/react-helmet-async)** - Document head management
- **Structured Data (JSON-LD)** - Rich search results
- **Open Graph & Twitter Cards** - Social media optimization

### UI Features
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Embla Carousel](https://www.embla-carousel.com/)** - Touch-friendly carousel
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark mode support

---

## 📁 Project Structure

```
peak-paths-and-paws/
├── public/                 # Static assets
│   ├── sitemap.xml        # SEO sitemap
│   ├── robots.txt         # Crawler directives
│   └── favicon.ico        # Site favicon
├── src/
│   ├── assets/            # Images and media
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Navbar.tsx    # Main navigation
│   │   ├── Footer.tsx    # Site footer
│   │   └── SEO.tsx       # SEO component
│   ├── data/              # Data files
│   │   ├── blogPosts.ts           # Blog content
│   │   ├── portfolioVideos.ts     # Portfolio data
│   │   └── structuredData.ts      # Schema.org helpers
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Route pages
│   │   ├── Index.tsx     # Homepage
│   │   ├── About.tsx     # About page
│   │   ├── Portfolio.tsx # Video portfolio
│   │   ├── Blog.tsx      # Blog listing
│   │   └── BlogPost.tsx  # Individual post
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── .gitignore
├── package.json
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite configuration
├── CLAUDE.md              # AI assistant guidelines
└── README.md              # This file
```

---

## 🎨 Design System

### Color Palette
The project uses a custom HSL-based color system defined in CSS variables:
- **Primary**: Nature-inspired green (`#2D5016`)
- **Accent**: Complementary accent colors
- **Muted**: Subtle backgrounds and borders
- Supports both light and dark modes

### Typography
- **Sans-serif**: Inter - Clean, modern body text
- **Serif**: Playfair Display - Elegant headings

---

## 🤝 Partner Collaborations

The portfolio features collaborations with leading outdoor and technology brands:

- **[Swarovski Optik](https://www.swarovskioptik.com/)** - Professional optical equipment
- **[ollin](https://ollin.eu/)** - E-bike adventures and sustainable mobility
- **[Euromix Motors](https://euromixmotors.com/)** - Electric and hybrid vehicles

---

## 📝 Content Management

### Adding Blog Posts
Edit `src/data/blogPosts.ts`:
```typescript
{
  id: "unique-slug",
  title: "Post Title",
  excerpt: "Brief description",
  content: "Full markdown content",
  date: "DD Month YYYY",
  readTime: "X min",
  category: "Category Name"
}
```

### Adding Portfolio Videos
Edit `src/data/portfolioVideos.ts`:
```typescript
{
  id: "video-slug",
  title: "Video Title",
  excerpt: "Short description",
  description: "Full description",
  videoId: "YouTube_Video_ID",
  date: "DD Month YYYY",
  category: "Category",
  partner: "Partner Name", // optional
  location: "Location",
  tags: ["tag1", "tag2"]
}
```

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` folder.

### Hosting Options

This project can be deployed to any static hosting service:

- **[Vercel](https://vercel.com/)** - Zero-config deployment
- **[Netlify](https://www.netlify.com/)** - Continuous deployment
- **[GitHub Pages](https://pages.github.com/)** - Free hosting
- **[Cloudflare Pages](https://pages.cloudflare.com/)** - Fast CDN

### Environment Variables

No environment variables are required for basic deployment. Update the site URL in:
- `src/components/SEO.tsx` - Change `siteUrl`
- `src/data/structuredData.ts` - Update all URL references
- `public/sitemap.xml` - Update domain
- `public/robots.txt` - Update sitemap URL

---

## 🔍 SEO Features

- ✅ Comprehensive meta tags (Open Graph, Twitter Cards)
- ✅ Structured data (JSON-LD) for rich results
- ✅ XML sitemap with video and image entries
- ✅ Robots.txt configuration
- ✅ Canonical URLs
- ✅ Geographic targeting (Trentino, Italy)
- ✅ Language and locale tags (it-IT)
- ✅ Mobile-optimized
- ✅ Fast loading times

---

## 🛠️ Development Guidelines

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent naming conventions
- Keep components small and focused

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/your-feature

# Commit changes
git commit -m "feat: add new feature"

# Push and create PR
git push origin feature/your-feature
```

### Commit Convention
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build process or tool changes

---

## 📄 License

This project is proprietary and confidential. All rights reserved © 2024 Simone Mattioli.

---

## 👤 Author

**Simone Mattioli**

- Website: [mountainfaunalover.com](https://mountainfaunalover.com)
- YouTube: [@mountainfaunalover](https://www.youtube.com/@mountainfaunalover)
- Instagram: [@mountainfaunalover](https://instagram.com/mountainfaunalover)
- TikTok: [@mountainfaunalover](https://www.tiktok.com/@mountainfaunalover)
- LinkedIn: [Simone Mattioli](https://www.linkedin.com/in/simonemattioli2003/)

---

## 🙏 Acknowledgments

- Wildlife photography inspiration from the Parco Nazionale dello Stelvio
- Partner brands: Swarovski Optik, ollin, Euromix Motors
- The open-source community for amazing tools and libraries

---

<div align="center">

**[⬆ Back to Top](#-peak-paths-and-paws)**

Made with ❤️ in the Italian Alps

</div>
