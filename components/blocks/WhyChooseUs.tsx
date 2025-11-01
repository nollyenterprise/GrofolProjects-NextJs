'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Card } from '@/components/ui/card';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseUsProps {
  features: Feature[];
}

export function WhyChooseUs({ features }: WhyChooseUsProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {features.map((feature, index) => {
        const IconComponent = Icons[feature.icon as keyof typeof Icons] as any;

        return (
          <motion.div key={index} variants={staggerItem}>
            <Card className="p-6 bg-[var(--color-surface)] border-[var(--color-surface)] hover:border-[var(--color-secondary)] transition-all duration-300 group h-full transform hover:scale-105 hover:shadow-2xl">
              <div className="mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {IconComponent && (
                    <IconComponent className="w-7 h-7 text-[var(--color-surface)]" />
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-content)] mb-3 group-hover:text-[var(--color-secondary)] transition-colors">
                {feature.title}
              </h3>

              <p className="text-[var(--color-muted)] leading-relaxed">
                {feature.description}
              </p>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
