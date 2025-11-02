/* eslint-disable react/no-unescaped-entities */
'use client';

import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/heading';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { CheckCircle, Clock, Users, Shield } from 'lucide-react';

import contactdetails from '@/data/contact-details.json';
import { useToast } from '@/hooks/use-toast';

export default function QuotePage() {

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    projectLocation: '',
    timeline: '',
    budget: '',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const res = await fetch('/api/quote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const result = await res.json();

        if (res.ok) {
          toast({
            title: 'Quote Request Sent!',
            description: 'Your project details have been submitted successfully.',
          });
          setIsSubmitted(true);
        } else {
          toast({
            title: 'Submission Failed',
            description: result.error || 'Please try again later.',
          });
        }
      } catch (err) {
        console.error(err);
        toast({
          title: 'Error',
          description: 'An unexpected error occurred. Please try again.',
        });
      } finally {
        setIsSubmitting(false);
      }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-mesh">
        <Container>
          <Card className="max-w-2xl mx-auto p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[var(--color-secondary)]" />
            </div>
            <Heading as="h2" className="text-[var(--color-content)] mb-4">
              Quote Request Received!
            </Heading>
            <p className="text-lg text-[var(--color-muted)] mb-6">
              Thank you for your interest in our services. Our team will review your request
              and get back to you within 24 hours with a detailed quote.
            </p>
            <p className="text-sm text-[var(--color-muted)] mb-8">
              We've sent a confirmation email to <strong>{formData.email}</strong>
            </p>
            <Button variant="secondary" size="lg" onClick={() => setIsSubmitted(false)}>
              Submit Another Request
            </Button>
          </Card>
        </Container>
      </div>
    );
  }

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
              Request a Quote
            </Badge>
            <Heading as="h1" className="text-white mb-6">
              Get a Detailed Project Quote
            </Heading>
            <p className="text-xl text-white/90 leading-relaxed">
              Tell us about your project and our team will provide a comprehensive quote
              tailored to your specific requirements and timeline.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-[var(--color-bg)]">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+234 XXX XXX XXXX"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        placeholder="Your Company Ltd."
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select
                      required
                      value={formData.serviceType}
                      onValueChange={(value) => handleChange('serviceType', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="power-renewable">Power & Renewable Energy</SelectItem>
                        <SelectItem value="marine-equipment">Marine Equipment</SelectItem>
                        <SelectItem value="oil-gas">Oil & Gas Procurement</SelectItem>
                        <SelectItem value="facility-safety">Facility & Safety</SelectItem>
                        <SelectItem value="engineering">Engineering & EPIC</SelectItem>
                        <SelectItem value="consulting">Technical Consulting</SelectItem>
                        <SelectItem value="other">Other / Multiple Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectLocation">Project Location *</Label>
                      <Input
                        id="projectLocation"
                        placeholder="Lagos, Nigeria"
                        required
                        value={formData.projectLocation}
                        onChange={(e) => handleChange('projectLocation', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Project Timeline *</Label>
                      <Select
                        required
                        value={formData.timeline}
                        onValueChange={(value) => handleChange('timeline', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (1-3 months)</SelectItem>
                          <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                          <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                          <SelectItem value="long">Long-term (12+ months)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget Range</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => handleChange('budget', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                        <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                        <SelectItem value="tbd">To be determined</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Please provide details about your project requirements, scope, specifications, and any other relevant information..."
                      rows={6}
                      required
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                    />
                    <p className="text-xs text-[var(--color-muted)]">
                      The more details you provide, the more accurate our quote will be.
                    </p>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      variant="secondary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                    </Button>
                  </div>

                  <p className="text-xs text-center text-[var(--color-muted)]">
                    By submitting this form, you agree to our terms of service and privacy policy.
                    We'll only use your information to respond to your quote request.
                  </p>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-[var(--color-content)] mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--color-secondary)] font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-content)] mb-1">
                        Review
                      </h4>
                      <p className="text-sm text-[var(--color-muted)]">
                        Our team reviews your requirements within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--color-secondary)] font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-content)] mb-1">
                        Assessment
                      </h4>
                      <p className="text-sm text-[var(--color-muted)]">
                        We may contact you for additional details if needed
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--color-secondary)] font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-content)] mb-1">
                        Detailed Quote
                      </h4>
                      <p className="text-sm text-[var(--color-muted)]">
                        Receive a comprehensive quote with timeline and pricing
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[var(--color-secondary)] font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-content)] mb-1">
                        Consultation
                      </h4>
                      <p className="text-sm text-[var(--color-muted)]">
                        Schedule a meeting to discuss the proposal in detail
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-[var(--color-secondary)]/5 to-[var(--color-primary)]/5">
                <h3 className="text-lg font-semibold text-[var(--color-content)] mb-4">
                  Why Choose Grofol?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[var(--color-content)]">Fast Response</p>
                      <p className="text-xs text-[var(--color-muted)]">24-hour quote turnaround</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[var(--color-content)]">Expert Team</p>
                      <p className="text-xs text-[var(--color-muted)]">Decades of combined experience</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[var(--color-content)]">Quality Assured</p>
                      <p className="text-xs text-[var(--color-muted)]">ISO certified processes</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 text-center">
                <p className="text-sm text-[var(--color-muted)] mb-4">
                  Need immediate assistance?
                </p>
                <p className="text-lg font-semibold text-[var(--color-content)] mb-2">
                  {contactdetails.phone[0].value}
                </p>
                <p className="text-sm text-[var(--color-muted)]">
                  {contactdetails.email[0].value}
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
