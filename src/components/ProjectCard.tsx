import React, { useState } from 'react';
import type { Project } from '../data/projects';
import IconTooltipLink from './ui/IconTooltipLink';
import GitHubIcon from './icons/GitHubIcon';
import YoutubeIcon from './icons/YoutubeIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import { ui } from '../data/ui';

export type UiStrings = typeof ui.en;

interface ProjectCardProps {
  project: Project;
  t: UiStrings;
  idx: number;
}

export default function ProjectCard({ project, t, idx }: ProjectCardProps) {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  return (
    <div
      className="group bg-white/80 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200/70 dark:border-gray-800/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
      data-aos="fade-up"
      data-aos-delay={idx * 100}
    >
      {/* Cover Image */}
      <div className="relative h-48 sm:h-60 overflow-hidden bg-gray-200 dark:bg-gray-800">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent pointer-events-none"></div>

        {/* Top Badges / Links Overlay */}
        <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white border border-white/20">
            {project.category.toUpperCase()}
          </span>

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
      </div>

      {/* Body Content */}
      <div className="p-6 md:p-7 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
          {project.summary}
        </p>

        {/* Live Demos Bar if present */}
        {project.demoLinks && project.demoLinks.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2.5">
            {project.demoLinks.map((demo) => (
              <a
                key={demo.url}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 px-3.5 py-1.5 rounded-lg border border-blue-200 dark:border-blue-800 transition-all hover:scale-105 shadow-2xs"
              >
                <ExternalLinkIcon className="w-3.5 h-3.5 mr-1.5 text-blue-600 dark:text-blue-400" />
                {demo.label}
              </a>
            ))}
          </div>
        )}

        {/* Case Study Expander Button */}
        <div className="mb-5">
          <button
            type="button"
            onClick={() => setIsCaseStudyOpen((prev) => !prev)}
            aria-expanded={isCaseStudyOpen}
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/50 hover:bg-gray-200/80 dark:hover:bg-gray-800 text-xs font-bold text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700/60 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              {isCaseStudyOpen ? t['projects.hideCaseStudy'] : t['projects.showCaseStudy']}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isCaseStudyOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : 'text-gray-500'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Case Study Details Grid */}
          {isCaseStudyOpen && (
            <div className="mt-3 p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 text-xs space-y-3.5 animate-fadeIn">
              <div>
                <span className="font-bold text-red-600 dark:text-red-400 block mb-0.5">
                  • {t['projects.problem']}
                </span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-3">
                  {project.caseStudy.problem}
                </p>
              </div>

              <div>
                <span className="font-bold text-blue-600 dark:text-blue-400 block mb-0.5">
                  • {t['projects.contribution']}
                </span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-3">
                  {project.caseStudy.contribution}
                </p>
              </div>

              <div>
                <span className="font-bold text-purple-600 dark:text-purple-400 block mb-0.5">
                  • {t['projects.solution']}
                </span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-3">
                  {project.caseStudy.solution}
                </p>
              </div>

              <div>
                <span className="font-bold text-green-600 dark:text-green-400 block mb-0.5">
                  • {t['projects.result']}
                </span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-3 font-medium">
                  {project.caseStudy.result}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Key Features Bullet Points */}
        <div className="mb-5">
          <h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
            {t['projects.features']}
          </h4>
          <ul className="space-y-1.5">
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2 font-bold">▹</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
