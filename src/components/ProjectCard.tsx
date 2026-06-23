import React from 'react';
import type { Project } from '../data/projects';
import IconTooltipLink from './ui/IconTooltipLink';
import GitHubIcon from './icons/GitHubIcon';
import YoutubeIcon from './icons/YoutubeIcon';

interface ProjectCardProps {
  project: Project;
  t: Record<string, string>;
  idx: number;
}

export default function ProjectCard({ project, t, idx }: ProjectCardProps) {
  return (
    <div 
      className="group bg-white/70 dark:bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/50 dark:border-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 flex flex-col"
      data-aos="fade-up"
      data-aos-delay={idx * 150}
    >
      <div className="relative h-48 sm:h-64 overflow-hidden bg-gray-200 dark:bg-gray-800">
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2 items-center">
            {project.githubUrl && (
              <IconTooltipLink
                href={project.githubUrl}
                ariaLabel={t['projects.viewSource']?.replace('{{project}}', project.title) || `View ${project.title} on GitHub`}
                tooltipText={t['projects.tooltip.github'] || 'GitHub'}
                tooltipId={`tooltip-github-${project.id}`}
                variant="purple"
                icon={<GitHubIcon />}
              />
            )}
            {project.youtubeUrl && (
              <IconTooltipLink
                href={project.youtubeUrl}
                ariaLabel={t['projects.watchVideo']?.replace('{{project}}', project.title) || `Watch ${project.title} on YouTube`}
                tooltipText={t['projects.tooltip.youtube'] || 'Watch Video'}
                tooltipId={`tooltip-youtube-${project.id}`}
                variant="red"
                icon={<YoutubeIcon />}
              />
            )}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
          {project.summary}
        </p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2 uppercase tracking-wider">{t['projects.features']}</h4>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                <span className="text-purple-500 mr-2 mt-0.5">▹</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {project.demoLinks && project.demoLinks.length > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2 uppercase tracking-wider">
              {t['projects.demos'] || 'Demos'}
            </h4>
            <div className="flex flex-wrap gap-4">
              {project.demoLinks.map((demo, i) => (
                <a
                  key={i}
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors bg-purple-50 dark:bg-purple-900/20 px-3 py-1.5 rounded-md border border-purple-100 dark:border-purple-800/50 hover:bg-purple-100 dark:hover:bg-purple-900/40"
                >
                  <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  {demo.label}
                </a>
              ))}
            </div>
          </div>
        )}

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
  );
}
