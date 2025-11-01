'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fadeInUp } from '@/lib/animations';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
              filter === category
                ? 'bg-[var(--color-secondary)] text-white shadow-lg scale-105'
                : 'bg-[var(--color-surface)] text-[var(--color-muted)] hover:bg-[var(--color-surface)]/80 hover:text-[var(--color-content)]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={`/projects/${project.id}`}>
              <Card className="overflow-hidden bg-white border-[var(--color-border)] hover:border-[var(--color-secondary)] transition-all duration-300 group cursor-pointer h-full">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-[var(--color-secondary)] text-white">
                    {project.year}
                  </Badge>
                </div>

                <div className="p-6">
                  <Badge
                    variant="outline"
                    className="mb-3 border-[var(--color-secondary)] text-[var(--color-secondary)]"
                  >
                    {project.category}
                  </Badge>

                  <h3 className="text-xl font-bold text-[var(--color-content)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[var(--color-muted)] text-sm mb-3">
                    {project.location}
                  </p>

                  <p className="text-[var(--color-muted)] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
