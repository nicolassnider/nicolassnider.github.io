import React from 'react';
import { projects } from '../data/projects';
import SectionHeading from './ui/SectionHeading';
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
            <div 
              key={project.id} 
              className="group bg-white/70 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/50 dark:border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div className="relative h-48 sm:h-64 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors">
                    {project.title}
                  </h3>
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-purple-600 dark:text-gray-200 dark:hover:text-purple-400 transition-colors"
                      aria-label="View source code on GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                    </a>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.summary}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2 uppercase tracking-wider">{t['projects.features']}</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-purple-500 mr-2 mt-0.5">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
