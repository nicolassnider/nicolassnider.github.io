import React, { useState, useMemo, useEffect } from 'react';
import { projects } from '../data/projects';
import type { ProjectCategory } from '../data/projects';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ProjectCard';
import type { UiStrings } from './ProjectCard';
import { ui } from '../data/ui';
import type { I18nProps } from '../types';

export default function Projects({ lang }: I18nProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const t = ui[lang];
  const projectData = projects[lang];

  const categoryCounts = useMemo(() => {
    if (!projectData) return { all: 0, web: 0, iot: 0, devops: 0 };
    return {
      all: projectData.length,
      web: projectData.filter((p) => p.category === 'web').length,
      iot: projectData.filter((p) => p.category === 'iot').length,
      devops: projectData.filter((p) => p.category === 'devops').length
    };
  }, [projectData]);

  const filteredProjects = useMemo(() => {
    if (!projectData) return [];
    if (selectedCategory === 'all') return projectData;
    return projectData.filter((p) => p.category === selectedCategory);
  }, [projectData, selectedCategory]);

  // Refresh AOS after filtering to ensure remounted cards are animated
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as unknown as { AOS?: { refresh: () => void } }).AOS) {
      (window as unknown as { AOS: { refresh: () => void } }).AOS.refresh();
    }
  }, [filteredProjects]);

  if (!projectData || projectData.length === 0) return null;

  const filterOptions: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t['projects.all'] },
    { id: 'web', label: t['projects.category.web'] },
    { id: 'iot', label: t['projects.category.iot'] },
    { id: 'devops', label: t['projects.category.devops'] }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50/50 dark:bg-gray-900/20 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-10">
          <SectionHeading number="02" title={t['section.projects']} colorClass="bg-purple-500" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-base md:text-lg mt-3" data-aos="fade-up" data-aos-delay="100">
            {t['section.projects.desc']}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10" data-aos="fade-up" data-aos-delay="150">
          {filterOptions.map((option) => {
            const count = categoryCounts[option.id];
            const isSelected = selectedCategory === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedCategory(option.id)}
                aria-pressed={isSelected}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${
                  isSelected
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20 scale-105'
                    : 'bg-white/80 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60'
                }`}
              >
                <span>{option.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                    isSelected
                      ? 'bg-purple-800/60 text-white'
                      : 'bg-gray-200/80 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} t={t as UiStrings} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
