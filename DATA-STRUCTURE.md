# Data Structure & Content Management

This document explains the JSON-based data structure for Grofol Projects Limited website content management.

## Overview

All website content is stored in **JSON files** within the `/data` directory and accessed through TypeScript modules for type safety and extensibility.

## Directory Structure

```
/data
├── hero-slides.json      # Homepage hero slider content
├── services.json         # Service offerings
├── projects.json         # Portfolio projects
├── testimonials.json     # Client testimonials
├── stats.json           # Company statistics
└── features.json        # Feature highlights by category

/lib
└── content.ts           # TypeScript module that imports and exports all data
```

## Data Files

### 1. `/data/hero-slides.json`

Homepage hero slider slides with call-to-action buttons.

**Structure:**
```json
[
  {
    "id": 1,
    "title": "Main headline text",
    "subtitle": "Small text above title",
    "description": "Paragraph description text",
    "image": "https://image-url.jpg",
    "ctaText": "Button text",
    "ctaHref": "/link-path"
  }
]
```

**Fields:**
- `id` (number) - Unique identifier
- `title` (string) - Main heading displayed prominently
- `subtitle` (string) - Small text above the title
- `description` (string) - Descriptive paragraph
- `image` (string) - Background image URL
- `ctaText` (string) - Call-to-action button text
- `ctaHref` (string) - Call-to-action button link

**To Add a New Slide:**
```json
{
  "id": 5,
  "title": "Your New Slide Title",
  "subtitle": "Your Subtitle",
  "description": "Your description text here.",
  "image": "https://images.pexels.com/photos/YOUR-IMAGE.jpeg",
  "ctaText": "Learn More",
  "ctaHref": "/your-link"
}
```

### 2. `/data/services.json`

Service offerings with icons and feature lists.

**Structure:**
```json
[
  {
    "id": "service-slug",
    "title": "Service Name",
    "description": "Brief service description",
    "icon": "LucideIconName",
    "features": [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ]
  }
]
```

**Fields:**
- `id` (string) - URL-friendly slug (e.g., "power-renewable")
- `title` (string) - Service name
- `description` (string) - Brief description (2-3 sentences)
- `icon` (string) - Lucide React icon name (e.g., "Zap", "Ship", "Droplet")
- `features` (string[]) - Array of key features

**Available Icons:** Zap, Ship, Droplet, Shield, Settings, Briefcase, Award, Building, CheckCircle, TrendingUp, Globe, GraduationCap, Trophy, Lightbulb, Clock, Headphones

**To Add a New Service:**
```json
{
  "id": "new-service",
  "title": "New Service Name",
  "description": "Brief description of your new service offering.",
  "icon": "Cog",
  "features": [
    "Key feature 1",
    "Key feature 2",
    "Key feature 3",
    "Key feature 4"
  ]
}
```

### 3. `/data/projects.json`

Portfolio of completed projects with filtering support.

**Structure:**
```json
[
  {
    "id": 1,
    "title": "Project Name",
    "category": "Service Category",
    "location": "City, Country",
    "year": "2024",
    "image": "https://image-url.jpg",
    "description": "Brief project description"
  }
]
```

**Fields:**
- `id` (number) - Unique identifier
- `title` (string) - Project name
- `category` (string) - Must match service categories for filtering
- `location` (string) - Project location
- `year` (string) - Year completed
- `image` (string) - Featured image URL
- `description` (string) - Brief project description

**Valid Categories:**
- "Power & Renewable"
- "Marine Equipment"
- "Oil & Gas"
- "Facility & Safety"
- "Engineering & EPIC"

**To Add a New Project:**
```json
{
  "id": 7,
  "title": "Your Project Name",
  "category": "Power & Renewable",
  "location": "Lagos, Nigeria",
  "year": "2024",
  "image": "https://images.pexels.com/photos/YOUR-IMAGE.jpeg",
  "description": "Brief description of the project and its outcomes."
}
```

### 4. `/data/testimonials.json`

Client testimonials and reviews.

**Structure:**
```json
[
  {
    "id": 1,
    "name": "Client Name",
    "position": "Job Title",
    "company": "Company Name",
    "content": "Testimonial text content",
    "rating": 5
  }
]
```

**Fields:**
- `id` (number) - Unique identifier
- `name` (string) - Client's full name
- `position` (string) - Job title
- `company` (string) - Company name
- `content` (string) - Testimonial text (2-3 sentences)
- `rating` (number) - Star rating (1-5)

**To Add a New Testimonial:**
```json
{
  "id": 4,
  "name": "John Doe",
  "position": "CEO",
  "company": "Tech Solutions Ltd",
  "content": "Your testimonial text goes here. Should be authentic and specific.",
  "rating": 5
}
```

### 5. `/data/stats.json`

Company statistics displayed on homepage.

**Structure:**
```json
[
  {
    "label": "Stat Description",
    "value": "Number+",
    "icon": "LucideIconName"
  }
]
```

**Fields:**
- `label` (string) - Stat description
- `value` (string) - Stat value (can include symbols like +, %)
- `icon` (string) - Lucide React icon name

**To Add/Update Stats:**
```json
{
  "label": "Countries Served",
  "value": "12+",
  "icon": "Globe"
}
```

### 6. `/data/features.json`

Feature highlights organized by category.

**Structure:**
```json
{
  "whyChooseUs": [
    {
      "title": "Feature Title",
      "description": "Feature description",
      "icon": "LucideIconName"
    }
  ]
}
```

**Fields:**
- `title` (string) - Feature title
- `description` (string) - Feature description (1-2 sentences)
- `icon` (string) - Lucide React icon name

**To Add a New Feature:**
```json
{
  "title": "New Feature",
  "description": "Description of this feature and why it matters.",
  "icon": "Star"
}
```

## TypeScript Integration

All data is imported and typed in `/lib/content.ts`:

```typescript
import heroSlidesData from '@/data/hero-slides.json';
import servicesData from '@/data/services.json';
// ... etc

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaHref: string;
}

export const heroSlides: HeroSlide[] = heroSlidesData;
```

## Using the Data

### In Components

```typescript
import { heroSlides, services, projects, stats, whyChooseUs, testimonials } from '@/lib/content';

export default function Home() {
  return (
    <>
      <HeroSlider slides={heroSlides} />
      <ServicesCarousel services={services} />
      <ProjectsGrid projects={projects} />
      <StatsCounter stats={stats} />
      <WhyChooseUs features={whyChooseUs} />
      <TestimonialsCarousel testimonials={testimonials} />
    </>
  );
}
```

### Type Safety

All data has TypeScript interfaces for type checking:

```typescript
import type { HeroSlide, Service, Project, Testimonial, Stat, Feature } from '@/lib/content';

const mySlide: HeroSlide = {
  id: 1,
  title: "Title",
  // ... TypeScript will ensure all required fields are present
};
```

## Best Practices

### 1. Image URLs
- Use optimized images from Pexels or your CDN
- Recommended size: 1920x1080px for hero slides
- Recommended size: 800x600px for projects
- Use HTTPS URLs

### 2. Text Content
- Keep descriptions concise (2-3 sentences)
- Use active voice
- Include relevant keywords naturally
- Proofread for spelling and grammar

### 3. IDs and Slugs
- Service IDs should be URL-friendly (lowercase, hyphens)
- Numeric IDs should be unique and sequential
- Don't change IDs after deployment (may break links)

### 4. Categories
- Use exact category names for filtering to work
- Match service names in project categories
- Consistent capitalization

### 5. JSON Formatting
- Validate JSON before saving (use a JSON validator)
- Use 2-space indentation
- Keep arrays aligned
- No trailing commas

## Extending the Data

### Adding New Fields

1. Update the JSON file with new field:
```json
{
  "id": 1,
  "title": "Title",
  "newField": "New data"
}
```

2. Update the TypeScript interface in `/lib/content.ts`:
```typescript
export interface YourType {
  id: number;
  title: string;
  newField: string; // Add new field
}
```

3. Update components to use the new field

### Adding New Data Files

1. Create new JSON file in `/data` directory
2. Import it in `/lib/content.ts`
3. Create TypeScript interface
4. Export typed constant

## Validation

To ensure data integrity:

1. **JSON Validation**: Use a JSON validator before saving
2. **TypeScript Checking**: Run `npm run typecheck` to catch type errors
3. **Build Testing**: Run `npm run build` to ensure everything compiles
4. **Visual Testing**: Check the website to verify content displays correctly

## Common Issues

### Issue: New data not showing
**Solution**: Rebuild the project (`npm run build`) and restart dev server

### Issue: Type errors
**Solution**: Ensure JSON structure matches TypeScript interfaces in `/lib/content.ts`

### Issue: Images not loading
**Solution**: Verify image URLs are valid and use HTTPS

### Issue: Icons not displaying
**Solution**: Check icon name matches Lucide React icon names (case-sensitive)

## Image Resources

Free high-quality images:
- [Pexels](https://www.pexels.com/) - Industrial, engineering, energy photos
- [Unsplash](https://unsplash.com/) - Professional photography
- Search terms: "industrial", "engineering", "solar panels", "offshore", "oil rig", "factory"

## Maintenance

- **Regular Updates**: Keep project portfolio current
- **Testimonial Rotation**: Add new testimonials, archive old ones
- **Stats Updates**: Update company statistics annually
- **Content Review**: Review and update descriptions quarterly
