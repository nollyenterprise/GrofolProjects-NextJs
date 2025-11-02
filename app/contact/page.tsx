/* eslint-disable react/no-unescaped-entities */
'use client';

import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/heading';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send
} from 'lucide-react';
import { useState } from 'react';

import contactdetails from '@/data/contact-details.json';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: [
      "Grofol Projects Limited",
      `${contactdetails.address[0].street}`,
      `${contactdetails.address[0].city}, ${contactdetails.address[0].state}`,
      `${contactdetails.address[0].country}`,
    ],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: [
      ...contactdetails.phone.map(p => p.label),
      'Mon - Fri: 8:00 AM - 6:00 PM'
    ]
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: [
      ...contactdetails.email.map(e => e.label),
      'Response within 24 hours'
    ]
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: [
      'Monday - Friday: 8:00 AM - 6:00 PM',
      'Saturday: 9:00 AM - 2:00 PM',
      'Sunday: Closed'
    ]
  }
];

export default function ContactPage() {

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      if (res.ok) {
        toast({
          title: 'Message Sent!',
          description: result.message,
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        toast({
          title: 'Submission Failed',
          description: result.error || 'Failed to send message',
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
      });
    }
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
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-white/20 hover:bg-white/30 text-white border-white/30">
              Get In Touch
            </Badge>
            <Heading as="h1" className="text-white mb-6">
              Let's Discuss Your Project
            </Heading>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to start your next industrial engineering project? Our team of experts is here to help
              you achieve your goals with innovative solutions and exceptional service.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[var(--color-bg)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Heading as="h2" className="text-[var(--color-content)] mb-6">
                Contact Information
              </Heading>
              <p className="text-lg text-[var(--color-muted)] mb-12 leading-relaxed">
                Have questions? We're here to help. Reach out to us through any of the following channels,
                and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-secondary)] transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-secondary flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--color-content)] mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-[var(--color-muted)] text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="p-8 bg-[var(--color-surface)] border-[var(--color-border)]">
                <Heading as="h2" className="text-[var(--color-content)] mb-6">
                  Send Us a Message
                </Heading>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-content)] mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-content)] focus:border-[var(--color-secondary)]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--color-content)] mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-content)] focus:border-[var(--color-secondary)]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-content)] mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+234 XXX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-content)] focus:border-[var(--color-secondary)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[var(--color-content)] mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-content)] focus:border-[var(--color-secondary)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[var(--color-content)] mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-content)] focus:border-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/20"
                    >
                      <option value="">Select a service</option>
                      <option value="power">Power & Renewable Energy</option>
                      <option value="marine">Marine Equipment</option>
                      <option value="oilgas">Oil & Gas Procurement</option>
                      <option value="safety">Facility & Safety Management</option>
                      <option value="engineering">Engineering & EPIC</option>
                      <option value="consulting">Technical Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-content)] mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-content)] focus:border-[var(--color-secondary)]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-secondary text-white hover:shadow-xl hover:shadow-[var(--color-secondary)]/20 transition-all duration-300"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-sm text-[var(--color-muted)] text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 gradient-mesh">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading as="h2" className="text-[var(--color-content)] mb-6">
              Ready to Get Started?
            </Heading>
            <p className="text-lg text-[var(--color-muted)] mb-8">
              Whether you need a consultation or want to start a project immediately, our team is ready
              to provide the expertise and support you need for success.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
