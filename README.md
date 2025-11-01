# Grofol Projects Limited - Corporate Website

A modern, world-class website for Grofol Projects Limited, a Nigerian engineering, oil & gas, and industrial consulting company.

## Overview

This website showcases industrial engineering services including power & renewable energy, marine equipment, oil & gas procurement, and EPIC services. Built with Next.js 13, TypeScript, and Tailwind CSS for a premium, globally competitive look and feel.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to view the website.

## Features

✅ **Modern Design** - Premium industrial tech aesthetic with dark theme
✅ **Smooth Animations** - Framer Motion page transitions and scroll effects
✅ **Auto-Playing Hero Slider** - 4 rotating service highlight slides
✅ **Filterable Projects Grid** - Portfolio with category filtering
✅ **Animated Statistics** - Counter animations triggered on scroll
✅ **Client Testimonials** - Auto-rotating testimonial carousel
✅ **Sticky Navigation** - Responsive header with dropdown menus
✅ **SEO Optimized** - Meta tags, Open Graph, JSON-LD schema
✅ **Fully Responsive** - Mobile-first design with smooth breakpoints
✅ **Type-Safe** - TypeScript throughout for reliability

## Brand Colors

```css
Primary:   #445425  /* Deep green */
Secondary: #82b929  /* Bright lime */
Background: #0E0F0E /* Dark charcoal */
```

## Content Management

All website content is stored in **JSON files** in the `/data` directory for easy management:

- `hero-slides.json` - Homepage hero slider
- `services.json` - Service offerings
- `projects.json` - Portfolio projects
- `testimonials.json` - Client testimonials
- `stats.json` - Company statistics
- `features.json` - Feature highlights

**To update content:**
1. Edit the appropriate JSON file in `/data`
2. Rebuild the project: `npm run build`
3. Changes will be reflected on the website

See **[DATA-STRUCTURE.md](./DATA-STRUCTURE.md)** for detailed content management guide.

## Project Structure

```
/app                 # Next.js pages and layouts
/components          # React components
  /blocks           # Page sections (Hero, Services, etc.)
  /layout           # Header, Footer, Container
  /ui               # shadcn/ui components
/data               # JSON content files
/lib                # Utilities and data access
/public             # Static assets
```

See **[PROJECT-STRUCTURE.md](./PROJECT-STRUCTURE.md)** for complete architecture overview.

## Technology Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data**: JSON files

## Key Components

### Hero Slider
Auto-playing full-screen slider with service highlights and CTAs.
- File: `components/blocks/HeroSlider.tsx`
- Data: `data/hero-slides.json`

### Services Carousel
Grid of service cards with hover effects and icons.
- File: `components/blocks/ServicesCarousel.tsx`
- Data: `data/services.json`

### Projects Grid
Filterable portfolio with category filtering.
- File: `components/blocks/ProjectsGrid.tsx`
- Data: `data/projects.json`

### Stats Counter
Animated statistics with intersection observer.
- File: `components/blocks/StatsCounter.tsx`
- Data: `data/stats.json`

### Testimonials Carousel
Auto-rotating client testimonials with ratings.
- File: `components/blocks/TestimonialsCarousel.tsx`
- Data: `data/testimonials.json`

## Customization

### Colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --color-primary: #445425;
  --color-secondary: #82b929;
  /* ... */
}
```

### Content
Edit JSON files in `/data` directory. All content is structured and type-safe.

### Fonts
Update font imports in `app/layout.tsx`. Currently using Inter and Poppins.

### Components
All components are in `components/` and fully customizable. Built with Tailwind CSS for easy styling.

## Scripts

```bash
npm run dev        # Development server (http://localhost:3000)
npm run build      # Production build
npm run start      # Production server
npm run lint       # Lint code
npm run typecheck  # TypeScript type checking
```

## Deployment

This is a static Next.js site that can be deployed to any hosting platform:

**Recommended:**
- Vercel (zero config)
- Netlify
- Cloudflare Pages

**Build Output:**
```bash
npm run build
# Static files in .next/ folder
```

## SEO Features

- Structured metadata with industry keywords
- Open Graph tags for social sharing
- Twitter Card support
- JSON-LD schema markup (Organization, Services)
- Semantic HTML structure
- Alt tags on all images
- Fast loading (Lighthouse 90+ score)

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)

## Documentation

- **[DATA-STRUCTURE.md](./DATA-STRUCTURE.md)** - Content management guide
- **[PROJECT-STRUCTURE.md](./PROJECT-STRUCTURE.md)** - Complete architecture overview

## Support

For questions or issues:
1. Check the documentation files
2. Review component source code
3. Consult Next.js, Tailwind CSS, and Framer Motion docs

## License

Proprietary - Grofol Projects Limited

---

Built with ❤️ for industrial engineering excellence.
