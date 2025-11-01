import heroSlidesData from '@/data/hero-slides.json';
import servicesData from '@/data/services.json';
import projectsData from '@/data/projects.json';
import testimonialsData from '@/data/testimonials.json';
import statsData from '@/data/stats.json';
import featuresData from '@/data/features.json';

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: { text: string; href: string };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const heroSlides: HeroSlide[] = heroSlidesData.map(slide => ({
  ...slide,
  cta: { text: slide.ctaText, href: slide.ctaHref }
}));

export const services: Service[] = servicesData;
export const projects: Project[] = projectsData;
export const testimonials: Testimonial[] = testimonialsData;
export const stats: Stat[] = statsData;
export const whyChooseUs: Feature[] = featuresData.whyChooseUs;
