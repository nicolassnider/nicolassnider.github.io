import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { experiences } from '../data/experience';
import { ui } from '../data/ui';
import type { I18nProps } from '../types';

export default function Experience({ lang }: I18nProps) {
  const t = ui[lang];
  const experienceData = experiences[lang];

  return (
    <section id="experience" className="py-20 relative border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading number="01" title={t['section.experience']} colorClass="bg-blue-600" />
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-gray-700 before:to-transparent">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Timeline marker */}
              <div
                className={`relative flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-gray-950 ${
                  exp.isCurrent ? 'bg-blue-600' : 'bg-blue-500'
                } shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}
              >
                {exp.isCurrent && (
                  <span className="absolute w-full h-full rounded-full bg-blue-400 opacity-60 animate-ping"></span>
                )}
                <div className="w-2.5 h-2.5 rounded-full bg-white relative z-10"></div>
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/80 dark:bg-gray-900/50 backdrop-blur-md border border-gray-200/70 dark:border-gray-800/70 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 rounded-full border border-blue-200/50 dark:border-blue-800/50">
                    {exp.date}
                  </span>

                  <div className="flex items-center gap-2">
                    {exp.isCurrent && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-800 dark:bg-green-950/60 dark:text-green-300 border border-green-200 dark:border-green-800">
                        {t['experience.current']}
                      </span>
                    )}
                    {exp.tagKey && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                        {t[exp.tagKey]}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center justify-between text-sm mt-1">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {exp.company}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 flex items-center text-xs">
                      <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-blue-500 dark:text-blue-400 font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
