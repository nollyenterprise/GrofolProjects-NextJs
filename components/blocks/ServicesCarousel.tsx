'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Card } from '@/components/ui/card';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

interface ServicesCarouselProps {
  services: Service[];
}

export function ServicesCarousel({ services }: ServicesCarouselProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {services.map((service) => {
        const IconComponent = Icons[service.icon as keyof typeof Icons] as any;

        return (
          <motion.div key={service.id} variants={staggerItem}>
            <Link href={`/services/${service.id}`}>
              <Card className="h-full p-6 bg-[var(--color-surface)] border-[var(--color-surface)] hover:border-[var(--color-secondary)] transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-2xl">
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {IconComponent && (
                      <IconComponent className="w-8 h-8 text-[var(--color-surface)]" />
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[var(--color-content)] mb-3 group-hover:text-[var(--color-secondary)] transition-colors">
                  {service.title}
                </h3>

                <p className="text-[var(--color-muted)] mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-[var(--color-muted)]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center text-[var(--color-secondary)] font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <Icons.ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
