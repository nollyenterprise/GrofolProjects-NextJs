import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/heading';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/content';
import * as Icons from 'lucide-react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const serviceCategories = [
  {
    title: "Core Engineering Services",
    description: "Comprehensive engineering solutions from concept to commissioning",
    services: ["Power & Renewable Energy", "Engineering & EPIC"]
  },
  {
    title: "Specialized Equipment",
    description: "Expert procurement and installation of industry-specific equipment",
    services: ["Marine Equipment", "Oil & Gas Procurement"]
  },
  {
    title: "Support Services",
    description: "Essential services for operational excellence and compliance",
    services: ["Facility & Safety", "Technical Consulting"]
  }
];

export default function ServicesPage() {
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
              Our Services
            </Badge>
            <Heading as="h1" className="text-white mb-6">
              Comprehensive Industrial & Engineering Solutions
            </Heading>
            <p className="text-xl text-white/90 leading-relaxed">
              From power generation and marine equipment to oil & gas procurement and facility safety,
              we deliver end-to-end solutions that meet the highest international standards.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[var(--color-bg)]">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {serviceCategories.map((category, idx) => (
              <Card key={idx} className="p-6 border-2 border-[var(--color-border)] hover:border-[var(--color-secondary)] transition-all duration-300">
                <h3 className="text-xl font-bold text-[var(--color-content)] mb-3">
                  {category.title}
                </h3>
                <p className="text-[var(--color-muted)] mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-content)]">
                      <CheckCircle className="w-4 h-4 text-[var(--color-secondary)]" />
                      {service}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 gradient-mesh">
        <Container>
          <div className="text-center mb-16">
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              All Services
            </Heading>
            <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto">
              Explore our complete range of engineering and industrial services designed to
              meet your specific project requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const ServiceIcon = Icons[service.icon as keyof typeof Icons] as any;

              return (
                <Card key={service.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center">
                        {ServiceIcon && <ServiceIcon className="w-7 h-7 text-white" />}
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                <div className="p-6">
                  <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-[var(--color-content)] mb-3 text-sm">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                          <CheckCircle className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full group" asChild>
                    <Link href={`/services/${service.id}`}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[var(--color-bg)]">
        <Container>
          <Card className="p-12 text-center max-w-4xl mx-auto border-2 border-[var(--color-secondary)]">
            <Heading as="h2" className="text-[var(--color-content)] mb-4">
              Need a Custom Solution?
            </Heading>
            <p className="text-lg text-[var(--color-muted)] mb-6 leading-relaxed">
              Every project is unique. Our team of experienced engineers will work with you to
              develop tailored solutions that meet your specific technical and operational requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </div>
  );
}
