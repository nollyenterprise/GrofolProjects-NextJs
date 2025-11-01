/* eslint-disable react/no-unescaped-entities */
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/heading';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Target,
  Eye,
  Award,
  Users,
  Globe,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'About Us - Grofol Projects Limited',
  description: 'Learn about Grofol Projects Limited, a leading Nigerian engineering and industrial services company with 15+ years of excellence in power, marine, oil & gas sectors.',
};

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'We prioritize safety in every project, adhering to international standards and best practices.'
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'Delivering world-class engineering solutions that exceed expectations.'
  },
  {
    icon: Users,
    title: 'Client Focus',
    description: 'Building lasting partnerships through exceptional service and reliability.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Leveraging cutting-edge technology and innovative approaches to solve complex challenges.'
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'Committed to environmentally responsible practices and renewable energy solutions.'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Improvement',
    description: 'Always evolving and improving our processes, skills, and service delivery.'
  }
];

const milestones = [
  {
    year: '2008',
    title: 'Company Founded',
    description: 'Grofol Projects Limited established to serve Nigeria\'s growing industrial sector.'
  },
  {
    year: '2012',
    title: 'ISO Certification',
    description: 'Achieved ISO 9001:2015 certification for quality management systems.'
  },
  {
    year: '2015',
    title: 'Regional Expansion',
    description: 'Expanded operations across West Africa with projects in Ghana, Cameroon, and Benin.'
  },
  {
    year: '2018',
    title: 'Renewable Energy Division',
    description: 'Launched dedicated renewable energy division focusing on solar and wind power.'
  },
  {
    year: '2020',
    title: '100+ Projects Milestone',
    description: 'Successfully completed our 100th major industrial project.'
  },
  {
    year: '2024',
    title: 'Leading Industry Player',
    description: 'Recognized as one of Nigeria\'s top industrial engineering and procurement companies.'
  }
];

export default function AboutPage() {
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
              About Us
            </Badge>
            <Heading as="h1" className="text-white mb-6">
              Engineering Excellence Since 2008
            </Heading>
            <p className="text-xl text-white/90 leading-relaxed">
              Grofol Projects Limited is a leading Nigerian engineering, procurement, and industrial services company
              committed to delivering world-class solutions across power, marine, oil & gas, and industrial sectors.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[var(--color-bg)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <Heading as="h2" className="text-[var(--color-secondary)]">Our Mission</Heading>
              </div>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
                To provide innovative, reliable, and sustainable engineering solutions that empower industries
                across Africa, while maintaining the highest standards of safety, quality, and environmental responsibility.
              </p>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                We are dedicated to building long-term partnerships with our clients by consistently delivering
                exceptional value and exceeding expectations on every project.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <Heading as="h2" className="text-[var(--color-secondary)]">Our Vision</Heading>
              </div>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
                To be recognized as Africa's most trusted and innovative industrial engineering company, setting
                the benchmark for excellence in engineering, procurement, and project delivery.
              </p>
              <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                We envision a future where sustainable industrial development drives economic growth and improves
                quality of life across the continent.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 gradient-mesh">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] border-[var(--color-secondary)]/30">
              Our Values
            </Badge>
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              What Drives Us Forward
            </Heading>
            <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto">
              Our core values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-secondary)] transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 rounded-xl gradient-secondary flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-content)] mb-3">{value.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[var(--color-bg)]">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] border-[var(--color-secondary)]/30">
              Our Journey
            </Badge>
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              15+ Years of Growth & Achievement
            </Heading>
            <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto">
              From our humble beginnings to becoming a leading industrial engineering firm, our journey reflects
              our commitment to excellence and innovation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-secondary)] via-[var(--color-primary)] to-[var(--color-secondary)] transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="inline-block px-6 py-2 rounded-full gradient-secondary text-white font-bold text-lg mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-semibold text-[var(--color-content)] mb-3">{milestone.title}</h3>
                    <p className="text-[var(--color-muted)] leading-relaxed">{milestone.description}</p>
                  </div>

                  <div className="hidden md:block w-6 h-6 rounded-full bg-[var(--color-secondary)] border-4 border-[var(--color-bg)] relative z-10"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 gradient-accent text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading as="h2" className="text-white mb-6">
              Why Choose Grofol Projects?
            </Heading>
            <p className="text-xl text-white/90 leading-relaxed mb-12">
              With over 15 years of proven expertise, 200+ completed projects, and unwavering commitment to excellence,
              we are your trusted partner for industrial engineering solutions across Africa.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">200+</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">8+</div>
                <div className="text-white/80">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
