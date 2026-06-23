import React from 'react';
import { projects } from '../data/projects';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ProjectCard';
import type { UiStrings } from './ProjectCard';
import { ui } from '../data/ui';
import type { I18nProps } from '../types';

export default function Projects({ lang }: I18nProps) {
  const t = ui[lang];
  const projectData = projects[lang];

  if (!projectData || projectData.length === 0) return null;

  return (
    <section id="projects" className="py-20 bg-gray-50/50 dark:bg-gray-900/20 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <SectionHeading title={t['section.projects']} colorClass="bg-purple-500" />
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl text-lg mt-4" data-aos="fade-up" data-aos-delay="100">
            {t['section.projects.desc']}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, idx) => (
            <ProjectCard key={project.id} project={project} t={t as UiStrings} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
