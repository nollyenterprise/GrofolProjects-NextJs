'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoplayInterval?: number;
}

export function TestimonialsCarousel({
  testimonials,
  autoplayInterval = 6000,
}: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [testimonials.length, autoplayInterval]);

  return (
    <div className="relative max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-8 md:p-12 bg-[var(--color-surface)] border-[var(--color-surface)] relative overflow-hidden">
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-[var(--color-secondary)]" />
            </div>

            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[var(--color-secondary)] text-[var(--color-secondary)]"
                    />
                  )
                )}
              </div>

              <p className="text-lg md:text-xl text-[var(--color-content)] leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              <div>
                <p className="text-[var(--color-content)] font-bold text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-[var(--color-secondary)] text-sm">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-[var(--color-muted)] text-sm">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-[var(--color-secondary)]'
                : 'w-2 bg-[var(--color-muted)]/30 hover:bg-[var(--color-muted)]/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
