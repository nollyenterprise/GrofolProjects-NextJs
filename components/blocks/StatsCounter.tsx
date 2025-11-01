'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface Stat {
  label: string;
  value: string;
  icon: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}
      {suffix}
    </div>
  );
}

export function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {stats.map((stat, index) => {
        const IconComponent = Icons[stat.icon as keyof typeof Icons] as any;

        return (
          <motion.div
            key={index}
            variants={staggerItem}
            className="text-center p-6 rounded-2xl bg-[var(--color-surface)] hover:bg-gradient-to-br hover:from-[var(--color-primary)]/20 hover:to-[var(--color-secondary)]/20 transition-all duration-300 group"
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {IconComponent && (
                  <IconComponent className="w-8 h-8 text-[var(--color-surface)]" />
                )}
              </div>
            </div>

            <div className="text-[var(--color-secondary)] mb-2">
              <AnimatedCounter value={stat.value} />
            </div>

            <p className="text-[var(--color-muted)] font-medium">
              {stat.label}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
