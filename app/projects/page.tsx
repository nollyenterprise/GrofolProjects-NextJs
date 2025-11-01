/* eslint-disable react/no-unescaped-entities */
'use client';

import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/heading';
import { Badge } from '@/components/ui/badge';
import { ProjectsGrid } from '@/components/blocks/ProjectsGrid';
import { projects } from '@/lib/content';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 gradient-accent overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 hover:bg-white/30 text-white border-white/30">
              Our Portfolio
            </Badge>
            <Heading as="h1" className="text-white mb-6">
              Delivering Excellence Across Africa
            </Heading>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our diverse portfolio of successfully completed projects spanning power & renewable energy,
              marine equipment, oil & gas, and industrial engineering sectors.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[var(--color-bg)]">
        <Container>
          <div className="text-center mb-16">
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              Featured Projects
            </Heading>
            <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto">
              From large-scale solar installations to offshore equipment supply, each project demonstrates our
              commitment to quality, safety, and timely delivery.
            </p>
          </div>

          <ProjectsGrid projects={projects} />
        </Container>
      </section>

      <section className="py-16 gradient-mesh">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              Have a Project in Mind?
            </Heading>
            <p className="text-lg text-[var(--color-muted)] mb-8">
              Let's discuss how we can bring your industrial engineering project to life with our
              proven expertise and commitment to excellence.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl gradient-secondary text-white font-semibold hover:shadow-xl hover:shadow-[var(--color-secondary)]/20 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
