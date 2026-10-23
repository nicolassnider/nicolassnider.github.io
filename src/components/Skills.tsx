import React from 'react';
import { skillCategories } from '../data/skills';
import SectionHeading from './ui/SectionHeading';
import { ui } from '../data/ui';
import type { I18nProps } from '../types';

export default function Skills({ lang }: I18nProps) {
  const t = ui[lang];
  const categories = skillCategories[lang];

  return (
    <section id="skills" className="py-20 relative border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading number="03" title={t['section.skills']} colorClass="bg-indigo-500" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIdx) => (
            <div
              key={category.id}
              className="bg-white/70 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/60 dark:border-gray-800/60 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={catIdx * 100}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs md:text-sm">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/50">
                        {t[skill.levelKey]}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 transition-all duration-700 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
