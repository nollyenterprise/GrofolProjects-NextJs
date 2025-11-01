/* eslint-disable react/no-unescaped-entities */
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/heading';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/lib/content';
import * as Icons from 'lucide-react';
import {
  ArrowLeft,
  CheckCircle,
  Shield,
  Award,
  Users,
  Target,
  Zap,
  Clock
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    notFound();
  }

  const ServiceIcon = Icons[service.icon as keyof typeof Icons] as any;

  const serviceDetails = {
    process: [
      {
        step: "1. Initial Consultation",
        description: "We meet with your team to understand project requirements, objectives, and constraints."
      },
      {
        step: "2. Technical Assessment",
        description: "Our engineers conduct thorough site surveys and technical feasibility studies."
      },
      {
        step: "3. Design & Planning",
        description: "We develop detailed engineering designs and comprehensive project plans."
      },
      {
        step: "4. Implementation",
        description: "Expert execution of all project phases with rigorous quality control."
      },
      {
        step: "5. Testing & Commissioning",
        description: "Comprehensive testing and smooth handover with full documentation."
      },
      {
        step: "6. Ongoing Support",
        description: "Continued maintenance and technical support for optimal performance."
      }
    ],
    benefits: [
      {
        icon: Shield,
        title: "Quality Assurance",
        description: "ISO-certified processes ensuring highest quality standards"
      },
      {
        icon: Award,
        title: "Expert Team",
        description: "Highly qualified engineers with decades of combined experience"
      },
      {
        icon: Clock,
        title: "On-Time Delivery",
        description: "Proven track record of meeting project deadlines"
      },
      {
        icon: Target,
        title: "Custom Solutions",
        description: "Tailored approaches to meet specific project requirements"
      }
    ],
    industries: [
      "Oil & Gas",
      "Power Generation",
      "Marine & Maritime",
      "Manufacturing",
      "Infrastructure",
      "Renewable Energy"
    ]
  };

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
          <Link href="/services" className="inline-flex items-center text-white hover:text-white/80 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <ServiceIcon className="w-8 h-8 text-white" />
              </div>
              <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                Professional Service
              </Badge>
            </div>
            <Heading as="h1" className="text-white mb-6">
              {service.title}
            </Heading>
            <p className="text-xl text-white/90 leading-relaxed">
              {service.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[var(--color-bg)]">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <Heading as="h2" className="text-[var(--color-content)] mb-6">
                  Service Overview
                </Heading>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
                  Our {service.title.toLowerCase()} services represent the pinnacle of engineering excellence
                  in the industry. With years of experience and a commitment to innovation, we deliver solutions
                  that exceed expectations and drive operational success.
                </p>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                  We work closely with clients to understand their unique challenges and develop customized
                  approaches that optimize performance, reduce costs, and ensure long-term reliability.
                </p>
              </div>

              <div>
                <Heading as="h2" className="text-[var(--color-content)] mb-6">
                  Key Features & Capabilities
                </Heading>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <Card key={idx} className="p-4 border-l-4 border-l-[var(--color-secondary)]">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                        <p className="text-[var(--color-content)] font-medium">{feature}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <Heading as="h2" className="text-[var(--color-content)] mb-6">
                  Our Process
                </Heading>
                <div className="space-y-4">
                  {serviceDetails.process.map((item, idx) => (
                    <Card key={idx} className="p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] text-white flex items-center justify-center font-bold flex-shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold text-[var(--color-content)] mb-2">
                            {item.step}
                          </h3>
                          <p className="text-[var(--color-muted)]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <Heading as="h2" className="text-[var(--color-content)] mb-6">
                  Why Choose Us
                </Heading>
                <div className="grid sm:grid-cols-2 gap-6">
                  {serviceDetails.benefits.map((benefit, idx) => (
                    <Card key={idx} className="p-6">
                      <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center mb-4">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--color-content)] mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-[var(--color-muted)]">
                        {benefit.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-[var(--color-content)] mb-6">
                  Request This Service
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-[var(--color-surface)] rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-[var(--color-secondary)]" />
                      <h4 className="font-semibold text-[var(--color-content)]">Expert Team</h4>
                    </div>
                    <p className="text-sm text-[var(--color-muted)]">
                      Highly qualified engineers and technicians
                    </p>
                  </div>

                  <div className="p-4 bg-[var(--color-surface)] rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5 text-[var(--color-secondary)]" />
                      <h4 className="font-semibold text-[var(--color-content)]">Certified</h4>
                    </div>
                    <p className="text-sm text-[var(--color-muted)]">
                      ISO standards and industry certifications
                    </p>
                  </div>

                  <div className="p-4 bg-[var(--color-surface)] rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-[var(--color-secondary)]" />
                      <h4 className="font-semibold text-[var(--color-content)]">Fast Delivery</h4>
                    </div>
                    <p className="text-sm text-[var(--color-muted)]">
                      Efficient execution without compromising quality
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="secondary" size="lg" className="w-full" asChild>
                    <Link href="/quote">
                      Get a Quote
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full" asChild>
                    <Link href="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
                  <h4 className="font-semibold text-[var(--color-content)] mb-3 text-sm">
                    Industries Served:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {serviceDetails.industries.map((industry, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 gradient-mesh">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              Ready to Get Started?
            </Heading>
            <p className="text-lg text-[var(--color-muted)] mb-8">
              Let's discuss how our {service.title.toLowerCase()} services can help you achieve
              your project goals with excellence and efficiency.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
