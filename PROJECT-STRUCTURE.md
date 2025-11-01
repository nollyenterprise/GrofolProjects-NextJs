# Grofol Projects Limited - Project Structure

Complete overview of the website's architecture and organization.

## Directory Structure

```
grofol-projects/
├── app/                          # Next.js 13 App Router
│   ├── globals.css              # Global styles with CSS variables
│   ├── layout.tsx               # Root layout with Header/Footer
│   └── page.tsx                 # Homepage
├── components/
│   ├── blocks/                  # Page section components
│   │   ├── HeroSlider.tsx      # Auto-playing hero slider
│   │   ├── ServicesCarousel.tsx # Service cards grid
│   │   ├── ProjectsGrid.tsx    # Filterable projects grid
│   │   ├── StatsCounter.tsx    # Animated statistics counter
│   │   ├── WhyChooseUs.tsx     # Feature highlights
│   │   └── TestimonialsCarousel.tsx # Client testimonials
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx          # Sticky navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Container.tsx       # Max-width container wrapper
│   │   └── PageTransition.tsx  # Page transition animations
│   └── ui/                      # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── heading.tsx
│       ├── input.tsx
│       └── ... (40+ UI components)
├── data/                        # JSON data files
│   ├── hero-slides.json        # Hero slider content
│   ├── services.json           # Service offerings
│   ├── projects.json           # Portfolio projects
│   ├── testimonials.json       # Client reviews
│   ├── stats.json              # Company statistics
│   └── features.json           # Feature highlights
├── lib/                         # Utility functions
│   ├── animations.ts           # Framer Motion variants
│   ├── content.ts              # Data imports & TypeScript types
│   ├── seo.ts                  # SEO metadata helpers
│   └── utils.ts                # General utilities
├── public/                      # Static assets
├── DATA-STRUCTURE.md           # Data management guide
├── PROJECT-STRUCTURE.md        # This file
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Technology Stack

### Core Framework
- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **CSS Variables** - Brand color theming
- **shadcn/ui** - Accessible component library

### Animation
- **Framer Motion** - Page transitions and animations
- **Custom animations** - Scroll-triggered effects

### Icons
- **Lucide React** - Modern icon library

### Data Management
- **JSON files** - Structured content storage
- **TypeScript interfaces** - Type-safe data access

## Key Features

### 1. Hero Slider
- **File**: `components/blocks/HeroSlider.tsx`
- **Data**: `data/hero-slides.json`
- Auto-playing carousel with pause on hover
- Smooth fade transitions
- Keyboard accessible
- Responsive CTAs

### 2. Services Carousel
- **File**: `components/blocks/ServicesCarousel.tsx`
- **Data**: `data/services.json`
- Grid layout (3 columns on desktop)
- Hover effects with scale and shadow
- Dynamic icon rendering
- Link to service detail pages

### 3. Projects Grid
- **File**: `components/blocks/ProjectsGrid.tsx`
- **Data**: `data/projects.json`
- Category filtering
- Animated layout shifts
- Hover zoom on images
- Badge indicators

### 4. Stats Counter
- **File**: `components/blocks/StatsCounter.tsx`
- **Data**: `data/stats.json`
- Animated number counting
- Intersection observer triggered
- Icon with gradient background
- Responsive grid layout

### 5. Why Choose Us
- **File**: `components/blocks/WhyChooseUs.tsx`
- **Data**: `data/features.json`
- Feature card grid
- Stagger animations on scroll
- Icon and text layout
- Hover effects

### 6. Testimonials Carousel
- **File**: `components/blocks/TestimonialsCarousel.tsx`
- **Data**: `data/testimonials.json`
- Auto-rotating testimonials
- Star ratings
- Smooth fade transitions
- Dot navigation

## Design System

### Colors (CSS Variables)
```css
:root {
  --color-primary: #445425;    /* Primary green */
  --color-secondary: #82b929;  /* Secondary lime */
  --color-bg: #0E0F0E;        /* Dark background */
  --color-surface: #161816;    /* Card surfaces */
  --color-content: #F5F7F2;   /* Main text */
  --color-muted: #C9D3BF;     /* Muted text */
}
```

### Typography
- **UI Font**: Inter (system font)
- **Heading Font**: Poppins (weights: 400, 600, 700)
- **Line Height**: 150% body, 120% headings
- **Scale**: Tailwind default scale

### Spacing
- **System**: 8px base unit (Tailwind default)
- **Sections**: py-24 (96px vertical padding)
- **Containers**: max-w-7xl (1280px)

### Shadows & Effects
- **Glass Effect**: backdrop-blur with transparency
- **Gradients**: Mesh backgrounds with primary/secondary colors
- **Shadows**: Soft shadows on cards and hover states
- **Borders**: Subtle borders on cards (same as surface color)

## Component Patterns

### Responsive Design
```typescript
// Mobile-first breakpoints
sm: '640px',   // Small tablets
md: '768px',   // Tablets
lg: '1024px',  // Desktop
xl: '1280px',  // Large desktop
```

### Animation Patterns
```typescript
// Framer Motion variants in lib/animations.ts
fadeIn       // Simple fade in
fadeInUp     // Fade in from below
staggerContainer  // Parent for stagger children
staggerItem  // Child with stagger delay
```

### Layout Components
- **Container**: Max-width wrapper with padding
- **Section**: Full-width sections with background
- **Grid**: Responsive grid layouts

## Data Management

### JSON Structure
All content is in `/data` as JSON files:
- Easily editable
- Version controlled
- No database required
- Type-safe through TypeScript

### Content Access
```typescript
// Import from lib/content.ts
import { heroSlides, services, projects } from '@/lib/content';
```

### Type Safety
All data has TypeScript interfaces:
```typescript
export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  // ...
}
```

## SEO Features

### Metadata
- **File**: `app/layout.tsx`
- Structured metadata with keywords
- Open Graph tags
- Twitter Card tags
- JSON-LD schema markup

### Keywords
- "Engineering Services Nigeria"
- "Oil & Gas Procurement Africa"
- "Marine Equipment Nigeria"
- "Power and Renewable Energy Projects"
- "Industrial Solutions Africa"

### Schema Markup
- Organization schema
- Service schema
- Breadcrumb schema

## Performance Optimizations

### Code Splitting
- Route-based splitting (Next.js default)
- Dynamic imports where needed
- Tree-shaking unused code

### Image Optimization
- External URLs (Pexels CDN)
- Lazy loading with native loading="lazy"
- Proper dimensions set

### CSS Optimization
- Tailwind CSS purging
- CSS-in-JS with CSS variables
- No unused styles in production

## Accessibility

### ARIA Labels
- Proper labels on interactive elements
- Screen reader text where needed
- Semantic HTML structure

### Keyboard Navigation
- All interactive elements keyboard accessible
- Focus visible styles
- Tab order logical

### Color Contrast
- WCAG AA compliant
- Sufficient contrast ratios
- High contrast mode support

## Browser Support

### Target Browsers
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)

### Progressive Enhancement
- Core content works without JS
- Enhanced with animations when supported
- Graceful degradation

## Development Workflow

### Commands
```bash
npm run dev       # Development server
npm run build     # Production build
npm run start     # Production server
npm run lint      # Lint code
npm run typecheck # Type checking
```

### File Naming
- **Components**: PascalCase (e.g., `HeroSlider.tsx`)
- **Utilities**: camelCase (e.g., `animations.ts`)
- **Data files**: kebab-case (e.g., `hero-slides.json`)

### Code Style
- ESLint configuration
- Prettier formatting (auto)
- TypeScript strict mode
- React best practices

## Extensibility

### Adding New Content
1. Edit JSON file in `/data`
2. Update TypeScript interface if adding fields
3. Rebuild project
4. No code changes needed for existing fields

### Adding New Sections
1. Create component in `components/blocks`
2. Import in page
3. Add data file if needed
4. Style with Tailwind

### Adding New Pages
1. Create folder in `app/[page-name]`
2. Add `page.tsx`
3. Use existing components
4. Import data as needed

### Theming
- Update CSS variables in `app/globals.css`
- Change Tailwind config for font/spacing
- No component changes needed

## Deployment

### Build Output
- Static site generation (SSG)
- Optimized for CDN deployment
- No server required

### Environment Variables
- None required for basic deployment
- Add for external services if needed

### Hosting Options
- Vercel (recommended)
- Netlify
- Any static host
- Self-hosted

## Maintenance

### Content Updates
- Edit JSON files directly
- Commit to version control
- Rebuild and deploy

### Adding Features
- Create new components
- Follow existing patterns
- Use TypeScript interfaces
- Document in markdown

### Performance Monitoring
- Lighthouse scores
- Core Web Vitals
- Bundle size analysis

## Support & Documentation

- **Data Structure**: See `DATA-STRUCTURE.md`
- **Component Library**: shadcn/ui docs
- **Animation Library**: Framer Motion docs
- **Framework**: Next.js 13 docs
