/* eslint-disable react/no-unescaped-entities */
'use client';

import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/heading';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  Users,
  TrendingUp,
  Heart,
  Shield,
  GraduationCap,
  Zap
} from 'lucide-react';
import Link from 'next/link';

const jobListings = [
  {
    id: 1,
    title: 'Senior Electrical Engineer',
    department: 'Power & Renewable Energy',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead electrical engineering projects for renewable energy installations across West Africa.',
    requirements: [
      'Bachelor\'s degree in Electrical Engineering',
      'Minimum 5 years experience in power systems',
      'PMP or equivalent certification preferred',
      'Experience with solar and wind energy projects'
    ]
  },
  {
    id: 2,
    title: 'Marine Equipment Specialist',
    department: 'Marine Equipment',
    location: 'Port Harcourt, Nigeria',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Manage procurement and installation of marine and offshore equipment.',
    requirements: [
      'Degree in Marine Engineering or related field',
      '3-5 years experience in marine equipment',
      'Knowledge of international marine standards',
      'Strong technical and communication skills'
    ]
  },
  {
    id: 3,
    title: 'Project Manager - Oil & Gas',
    department: 'Oil & Gas',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    experience: '7+ years',
    description: 'Oversee major oil and gas procurement and installation projects.',
    requirements: [
      'Engineering degree with project management certification',
      '7+ years in oil & gas sector',
      'Proven track record managing large-scale projects',
      'Excellent stakeholder management skills'
    ]
  },
  {
    id: 4,
    title: 'Safety Engineer',
    department: 'Facility & Safety',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'Develop and implement safety systems for industrial facilities.',
    requirements: [
      'Degree in Safety Engineering or related field',
      'NEBOSH or equivalent certification',
      '4-6 years experience in industrial safety',
      'Knowledge of ISO safety standards'
    ]
  },
  {
    id: 5,
    title: 'Mechanical Engineer',
    department: 'Engineering & EPIC',
    location: 'Abuja, Nigeria',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Design and supervise mechanical installations for industrial projects.',
    requirements: [
      'Bachelor\'s degree in Mechanical Engineering',
      '3-5 years of relevant experience',
      'Proficiency in CAD software',
      'Strong problem-solving abilities'
    ]
  },
  {
    id: 6,
    title: 'Graduate Trainee - Engineering',
    department: 'Various Departments',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    experience: 'Entry Level',
    description: 'Join our graduate development program and rotate through various engineering departments.',
    requirements: [
      'Recent graduate (within 2 years) in Engineering',
      'First class or Second class upper degree',
      'NYSC certificate or exemption',
      'Strong analytical and learning abilities'
    ]
  }
];

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Salary',
    description: 'Industry-leading compensation packages'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear career progression paths'
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    description: 'Continuous learning opportunities'
  },
  {
    icon: Heart,
    title: 'Health Insurance',
    description: 'Comprehensive medical coverage'
  },
  {
    icon: Users,
    title: 'Team Environment',
    description: 'Collaborative and supportive culture'
  },
  {
    icon: Zap,
    title: 'Challenging Projects',
    description: 'Work on cutting-edge engineering projects'
  }
];

export default function CareersPage() {
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
              Join Our Team
            </Badge>
            <Heading as="h1" className="text-white mb-6">
              Build Your Career With Grofol Projects
            </Heading>
            <p className="text-xl text-white/90 leading-relaxed">
              Join a team of world-class engineers and professionals delivering excellence across Africa's
              industrial and energy sectors. We invest in our people and their growth.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[var(--color-bg)]">
        <Container>
          <div className="text-center mb-16">
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              Why Work With Us?
            </Heading>
            <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto">
              At Grofol Projects, we believe our success is built on the talent and dedication of our team.
              Here's what we offer our employees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6">
                <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-content)] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[var(--color-muted)]">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 gradient-mesh">
        <Container>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] border-[var(--color-secondary)]/30">
              Open Positions
            </Badge>
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              Current Job Openings
            </Heading>
            <p className="text-lg text-[var(--color-muted)] max-w-3xl mx-auto">
              Explore our current vacancies and take the next step in your engineering career.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {jobListings.map((job) => (
              <Card key={job.id} className="p-8 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge className="bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90">
                        {job.department}
                      </Badge>
                      <Badge variant="outline" className="border-[var(--color-border)]">
                        {job.type}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-[var(--color-content)] mb-3">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)] mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {job.experience}
                      </div>
                    </div>

                    <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-[var(--color-content)] mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-[var(--color-muted)] flex items-start gap-2">
                            <span className="text-[var(--color-secondary)] mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:flex-shrink-0">
                    <Button variant="secondary" size="lg" asChild>
                      <Link href={`/careers/${job.id}`}>
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-[var(--color-bg)]">
        <Container>
          <Card className="p-12 text-center max-w-4xl mx-auto border-2 border-[var(--color-secondary)]">
            <Shield className="w-16 h-16 mx-auto mb-6 text-[var(--color-secondary)]" />
            <Heading as="h2" className="text-[var(--color-content)] mb-4">
              Equal Opportunity Employer
            </Heading>
            <p className="text-lg text-[var(--color-muted)] mb-6 leading-relaxed">
              Grofol Projects Limited is an equal opportunity employer. We celebrate diversity and are
              committed to creating an inclusive environment for all employees. We do not discriminate
              based on race, religion, gender, age, disability, or any other protected characteristic.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact HR Department</Link>
            </Button>
          </Card>
        </Container>
      </section>
    </div>
  );
}
