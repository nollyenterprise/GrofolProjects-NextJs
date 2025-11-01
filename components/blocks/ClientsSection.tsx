'use client';

import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/heading';
import { Badge } from '@/components/ui/badge';
import { LogoCarousel } from './LogoCarousel';
import clients from '@/data/clients.json';

export function ClientsSection() {
  return (
    <section className="py-24 bg-[var(--color-bg)]">
      <Container>
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] border-[var(--color-secondary)]/30">
            Trusted By Industry Leaders
          </Badge>
          <Heading as="h2" className="text-[var(--color-content)] mb-4">
            Our Valued Clients
          </Heading>
          <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto">
            We are proud to partner with leading organizations across Nigeria and West Africa,
            delivering excellence in every project we undertake.
          </p>
        </div>

        <LogoCarousel logos={clients} speed={40} />

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--color-muted)] max-w-2xl mx-auto">
            Join these industry leaders who trust Grofol Projects for their engineering and procurement needs.
            From oil and gas to renewable energy, we deliver solutions that drive success.
          </p>
        </div>
      </Container>
    </section>
  );
}
