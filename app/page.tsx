import { HeroSlider } from '@/components/blocks/HeroSlider';
import { ServicesCarousel } from '@/components/blocks/ServicesCarousel';
import { ProjectsGrid } from '@/components/blocks/ProjectsGrid';
import { StatsCounter } from '@/components/blocks/StatsCounter';
import { WhyChooseUs } from '@/components/blocks/WhyChooseUs';
import { TestimonialsCarousel } from '@/components/blocks/TestimonialsCarousel';
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { heroSlides, services, projects, stats, whyChooseUs, testimonials } from '@/lib/content';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ClientsSection } from '@/components/blocks/ClientsSection';
import { PartnersSection } from '@/components/blocks/PartnersSection';

export default function Home() {
  return (
    <>
      <HeroSlider slides={heroSlides} />

      <section className="py-24 gradient-mesh">
        <Container>
          <div className="text-center mb-16">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-4">
              About Grofol Projects
            </p>
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              15+ Years of Industrial & Engineering Excellence
            </Heading>
            <p className="text-[var(--color-muted)] text-lg max-w-3xl mx-auto leading-relaxed">
              We deliver world-class engineering solutions across power, marine, oil & gas, and industrial sectors throughout Africa and beyond.
            </p>
          </div>

          <StatsCounter stats={stats} />
        </Container>
      </section>

      <section className="py-24 bg-[var(--color-bg)]">
        <Container>
          <div className="text-center mb-16">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </p>
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              Comprehensive Engineering Solutions
            </Heading>
            <p className="text-[var(--color-muted)] text-lg max-w-3xl mx-auto">
              From power and renewable energy to marine equipment and oil & gas procurement, we provide end-to-end industrial solutions.
            </p>
          </div>

          <ServicesCarousel services={services} />

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-24 gradient-mesh">
        <Container>
          <div className="text-center mb-16">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-4">
              Featured Projects
            </p>
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              Delivering Results Across Africa
            </Heading>
            <p className="text-[var(--color-muted)] text-lg max-w-3xl mx-auto">
              Explore our portfolio of successful projects spanning power generation, marine installations, and industrial facilities.
            </p>
          </div>

          <ProjectsGrid projects={projects.slice(0, 6)} />

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">
                View All Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[var(--color-bg)]">
        <Container>
          <div className="text-center mb-16">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </p>
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              Engineering Excellence You Can Trust
            </Heading>
            <p className="text-[var(--color-muted)] text-lg max-w-3xl mx-auto">
              We combine technical expertise, global standards, and innovative solutions to deliver exceptional results.
            </p>
          </div>

          <WhyChooseUs features={whyChooseUs} />
        </Container>
      </section>

      <ClientsSection />

      <PartnersSection />

      <section className="py-24 gradient-mesh">
        <Container>
          <div className="text-center mb-16">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-4">
              Client Testimonials
            </p>
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              What Our Clients Say
            </Heading>
            <p className="text-[var(--color-muted)] text-lg max-w-3xl mx-auto">
              Trusted by leading organizations across Nigeria and Africa for our reliability and technical excellence.
            </p>
          </div>

          <TestimonialsCarousel testimonials={testimonials} />
        </Container>
      </section>

      <section className="py-24 bg-[var(--color-surface)] relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              Ready to Start Your Project?
            </Heading>
            <p className="text-[var(--color-muted)] text-lg mb-8">
              Get in touch with our team of engineering experts to discuss your industrial, power, marine, or oil & gas project requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/quote">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
