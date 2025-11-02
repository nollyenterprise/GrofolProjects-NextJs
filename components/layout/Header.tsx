'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Container } from './Container';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import servicesData from "@/data/services.json";
export const services = servicesData.map((service) => ({
  name: service.title,
  href: `/services/${service.id}`,
}));

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    submenu: services,
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass-effect'
          : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-sm'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2 group">
            {isScrolled
            ?<Image
              src={'/images/grofol.png'}
              width={175}
              height={175}
              style={{height: 'auto'}}
              alt='Grofol Logo'
            />:<Image
              src={'/images/grofol-white.png'}
              width={175}
              height={175}
              style={{height: 'auto'}}
              alt='Grofol Logo'
            />}
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() =>
                  item.submenu && setActiveSubmenu(item.name)
                }
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium hover:text-[var(--color-secondary)] transition-colors duration-200 flex items-center gap-1",
                    isScrolled ? "text-[var(--color-content)]" : "text-white"
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>

                <AnimatePresence>
                  {item.submenu && activeSubmenu === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2 w-64"
                    >
                      <div className="glass-effect rounded-2xl shadow-2xl py-2 border border-[var(--color-surface)]">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-[var(--color-content)] hover:text-[var(--color-secondary)] hover:bg-[var(--color-surface)] transition-all duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/quote">Get Quote</Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 hover:text-[var(--color-secondary)] transition-colors",
              isScrolled ? "text-[var(--color-content)]" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0.9, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block px-4 py-1 text-base font-medium text-[var(--color-content)] hover:text-[var(--color-secondary)] hover:bg-[var(--color-surface)] rounded-xl transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-1 text-sm text-[var(--color-muted)] hover:text-[var(--color-secondary)] transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-2 px-4 pt-4">
                  <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
                    <Link href="/quote">Get Quote</Link>
                  </Button>
                  <Button variant="secondary" asChild onClick={() => setIsOpen(false)}>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
