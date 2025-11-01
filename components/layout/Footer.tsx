import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowRight,
  Instagram,
} from 'lucide-react';
import { Container } from './Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Power & Renewable Energy', href: '/services/power-renewable' },
    { name: 'Marine Equipment', href: '/services/marine-equipment' },
    { name: 'Oil & Gas', href: '/services/oil-gas' },
    { name: 'Engineering & EPIC', href: '/services/engineering' },
  ],
  resources: [
    { name: 'Projects', href: '/projects' },
    { name: 'Case Studies', href: '/projects' },
    { name: 'Industry Insights', href: '/about' },
    { name: 'Certifications', href: '/about#certifications' },
  ],
};

import socials from '@/data/socials.json';

export function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-bg)] pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={'/images/grofol.png'}
                width={170}
                height={170}
                style={{height: 'auto'}}
                alt='Grofol Logo'
              />
            </div>
            <p className="text-[var(--color-muted)] mb-6 max-w-md">
              Leading Nigerian engineering, oil & gas, and industrial consulting
              company delivering world-class power, marine, and renewable energy
              solutions across Africa.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[var(--color-muted)]">
                <Mail className="w-5 h-5 text-[var(--color-secondary)]" />
                <a
                  href="mailto:info@grofolprojects.com"
                  className="hover:text-[var(--color-secondary)] transition-colors"
                >
                  info@grofolprojects.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-[var(--color-muted)]">
                <Phone className="w-5 h-5 text-[var(--color-secondary)]" />
                <a
                  href="tel:+2341234567890"
                  className="hover:text-[var(--color-secondary)] transition-colors"
                >
                  +234 123 456 7890
                </a>
              </div>
              <div className="flex items-start gap-3 text-[var(--color-muted)]">
                <MapPin className="w-5 h-5 text-[var(--color-secondary)] mt-1" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[var(--color-content)] font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-muted)] hover:text-[var(--color-secondary)] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[var(--color-content)] font-semibold mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-muted)] hover:text-[var(--color-secondary)] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[var(--color-content)] font-semibold mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-muted)] hover:text-[var(--color-secondary)] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[var(--color-bg)] rounded-2xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-[var(--color-content)] mb-2">
              Stay Updated
            </h3>
            <p className="text-[var(--color-muted)] mb-6">
              Subscribe to our newsletter for industry insights and project
              updates
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[var(--color-surface)] border-[var(--color-surface)] text-[var(--color-content)]"
              />
              <Button variant="secondary" type="submit">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-[var(--color-bg)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--color-muted)] text-sm">
              © {new Date().getFullYear()} Grofol Projects Limited. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/102964453"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-secondary)] hover:bg-[var(--color-surface)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/grofolprojectslimited"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-secondary)] hover:bg-[var(--color-surface)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/GrofolProjects"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-secondary)] hover:bg-[var(--color-surface)] transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/profile.php?id=61559822753554&_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-secondary)] hover:bg-[var(--color-surface)] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              {socials.map((v: any, i: number)=>{
                return (
                  <a
                    href={v.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-secondary)] hover:bg-[var(--color-surface)] transition-all duration-300"
                    aria-label={v.title}
                    key={i}
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
