'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Logo {
  id: number;
  name: string;
  logo: string;
  website: string;
  category: string;
}

interface LogoCarouselProps {
  logos: Logo[];
  speed?: number;
}

export function LogoCarousel({ logos, speed = 30 }: LogoCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-8"
        animate={{
          x: isPaused ? undefined : [0, -logos.length * 280],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
        style={{ width: 'fit-content' }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`${logo.id}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a
              href={logo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="relative w-64 h-32 p-3 flex items-center justify-center overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 border-2 border-[var(--color-border)] hover:border-[var(--color-secondary)]">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.logo}
                      alt={logo.name}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    />
                  </div>

                  <div className="absolute inset-0 bg-[var(--color-secondary)]/0 group-hover:bg-[var(--color-secondary)]/5 transition-all duration-300" />

                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 rounded-full bg-[var(--color-secondary)] flex items-center justify-center">
                      <ExternalLink className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-semibold text-[var(--color-content)] truncate">
                    {logo.name}
                  </p>
                  <p className="text-[10px] text-[var(--color-muted)] truncate">
                    {logo.category}
                  </p>
                </div>
              </Card>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
