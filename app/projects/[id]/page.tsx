/* eslint-disable react/no-unescaped-entities */
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/heading';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/content';
import {
  MapPin,
  Calendar,
  Folder,
  CheckCircle,
  ArrowLeft,
  Users,
  Clock,
  Award
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) {
    notFound();
  }

  const projectDetails = {
    client: 'Confidential',
    duration: '18 months',
    teamSize: '25+ engineers',
    status: 'Completed',
    challenges: [
      'Complex regulatory requirements and compliance standards',
      'Tight project timeline with multiple stakeholders',
      'Integration with existing infrastructure',
      'Remote location logistics and supply chain management'
    ],
    solutions: [
      'Developed comprehensive project management framework',
      'Established strong partnerships with local suppliers',
      'Implemented advanced monitoring and reporting systems',
      'Deployed experienced team with proven track record'
    ],
    outcomes: [
      'Project completed on time and within budget',
      'Zero safety incidents throughout project lifecycle',
      'Exceeded client expectations for quality and performance',
      'Established foundation for future collaboration'
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
          <Link href="/projects" className="inline-flex items-center text-white hover:text-white/80 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            <Badge className="mb-6 bg-white/20 hover:bg-white/30 text-white border-white/30">
              {project.category}
            </Badge>
            <Heading as="h1" className="text-white mb-6">
              {project.title}
            </Heading>
            <p className="text-xl text-white/90 leading-relaxed">
              {project.description}
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
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <Heading as="h2" className="text-[var(--color-content)] mb-6">
                  Project Overview
                </Heading>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed mb-6">
                  This landmark project represents our commitment to delivering excellence in the {project.category.toLowerCase()} sector.
                  Working closely with our client, we successfully implemented cutting-edge solutions that not only met
                  but exceeded project requirements and expectations.
                </p>
                <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                  Our team of experienced engineers and project managers brought together years of expertise to tackle
                  the unique challenges of this project, demonstrating our capability to handle complex, large-scale
                  industrial engineering assignments.
                </p>
              </div>

              <div>
                <Heading as="h2" className="text-[var(--color-content)] mb-6">
                  Challenges & Solutions
                </Heading>

                <div className="space-y-8">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold text-[var(--color-content)] mb-4 flex items-center gap-2">
                      <Folder className="w-5 h-5 text-[var(--color-secondary)]" />
                      Key Challenges
                    </h3>
                    <ul className="space-y-3">
                      {projectDetails.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[var(--color-secondary)] mt-1">•</span>
                          <span className="text-[var(--color-muted)]">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold text-[var(--color-content)] mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)]" />
                      Our Solutions
                    </h3>
                    <ul className="space-y-3">
                      {projectDetails.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[var(--color-secondary)] mt-1">✓</span>
                          <span className="text-[var(--color-muted)]">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>

              <div>
                <Heading as="h2" className="text-[var(--color-content)] mb-6">
                  Project Outcomes
                </Heading>
                <Card className="p-6 border-2 border-[var(--color-secondary)]">
                  <ul className="space-y-3">
                    {projectDetails.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                        <span className="text-[var(--color-content)] font-medium">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 sticky top-24">
                <h3 className="text-xl font-semibold text-[var(--color-content)] mb-6">
                  Project Details
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-[var(--color-muted)] mb-1">Location</p>
                      <p className="font-semibold text-[var(--color-content)]">{project.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-[var(--color-muted)] mb-1">Year Completed</p>
                      <p className="font-semibold text-[var(--color-content)]">{project.year}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-[var(--color-muted)] mb-1">Duration</p>
                      <p className="font-semibold text-[var(--color-content)]">{projectDetails.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-[var(--color-muted)] mb-1">Team Size</p>
                      <p className="font-semibold text-[var(--color-content)]">{projectDetails.teamSize}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-[var(--color-muted)] mb-1">Status</p>
                      <Badge className="bg-[var(--color-secondary)] text-white">
                        {projectDetails.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Folder className="w-5 h-5 text-[var(--color-secondary)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-[var(--color-muted)] mb-1">Category</p>
                      <p className="font-semibold text-[var(--color-content)]">{project.category}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                  <Button variant="secondary" size="lg" className="w-full" asChild>
                    <Link href="/contact">
                      Start Your Project
                    </Link>
                  </Button>
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
              Ready to Start Your Project?
            </Heading>
            <p className="text-lg text-[var(--color-muted)] mb-8">
              Let's discuss how we can bring your vision to life with our proven expertise and
              commitment to excellence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
