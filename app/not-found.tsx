/* eslint-disable react/no-unescaped-entities */
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-mesh">
      <Container>
        <div className="max-w-2xl mx-auto text-center py-20">
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="text-[200px] font-bold text-[var(--color-secondary)]/10 leading-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Search className="w-24 h-24 text-[var(--color-secondary)] animate-pulse" />
              </div>
            </div>
          </div>

          <Heading as="h1" className="text-[var(--color-content)] mb-4">
            Page Not Found
          </Heading>

          <p className="text-xl text-[var(--color-muted)] mb-8 leading-relaxed">
            We couldn't find the page you're looking for. It might have been moved, deleted,
            or the URL might be incorrect.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/projects">
                <ArrowLeft className="w-5 h-5 mr-2" />
                View Projects
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
            <p className="text-sm text-[var(--color-muted)] mb-4">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <Link href="/about" className="text-[var(--color-secondary)] hover:underline">
                About Us
              </Link>
              <span className="text-[var(--color-muted)]">•</span>
              <Link href="/services" className="text-[var(--color-secondary)] hover:underline">
                Services
              </Link>
              <span className="text-[var(--color-muted)]">•</span>
              <Link href="/careers" className="text-[var(--color-secondary)] hover:underline">
                Careers
              </Link>
              <span className="text-[var(--color-muted)]">•</span>
              <Link href="/contact" className="text-[var(--color-secondary)] hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
