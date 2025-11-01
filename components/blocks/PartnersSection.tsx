'use client';

import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/heading';
import { Badge } from '@/components/ui/badge';
import { LogoCarousel } from './LogoCarousel';
import partners from '@/data/partners.json';

export function PartnersSection() {
  return (
    <section className="py-24 gradient-mesh">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] border-[var(--color-secondary)]/30">
            Strategic Partnerships
          </Badge>
          <Heading as="h2" className="text-[var(--color-content)] mb-4">
            Our Technology Partners
          </Heading>
          <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto">
            We collaborate with world-class technology providers and equipment manufacturers
            to ensure our clients receive the highest quality solutions.
          </p>
        </div>

        <LogoCarousel logos={partners} speed={45} />

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--color-muted)] max-w-2xl mx-auto">
            Our partnerships with global leaders in engineering and technology enable us to deliver
            cutting-edge solutions backed by proven reliability and industry expertise.
          </p>
        </div>
      </Container>
    </section>
  );
}
