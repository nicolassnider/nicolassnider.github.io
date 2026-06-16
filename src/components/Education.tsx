import React from 'react';
import { academic, languages } from '../data/education';
import SectionHeading from './ui/SectionHeading';
import { ui } from '../data/ui';
import type { I18nProps } from '../types';

export default function Education({ lang }: I18nProps) {
  const t = ui[lang];
  const academicData = academic[lang];
  const languagesData = languages[lang];

  return (
    <section id="education" className="py-20 bg-gray-50/50 dark:bg-gray-900/20 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading title={t['section.education']} colorClass="bg-green-500" />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-up">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-2">{t['education.academic']}</h3>
            <div className="bg-white/70 dark:bg-gray-800/40 backdrop-blur-md p-6 rounded-xl border border-white/50 dark:border-gray-800/50 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">{academicData.institution}</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{academicData.degree}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center justify-between mt-4">
                <span>{academicData.location}</span>
                <span>{academicData.date}</span>
              </p>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-2">{t['education.languages']}</h3>
            <div className="space-y-4">
              {languagesData.map((langItem, idx) => (
                <div key={idx} className="bg-white/70 dark:bg-gray-800/40 backdrop-blur-md p-4 rounded-xl border border-white/50 dark:border-gray-800/50 flex justify-between items-center shadow-sm">
                  <span className="font-semibold text-gray-900 dark:text-white">{langItem.name}</span>
                  <span className={`px-3 py-1 bg-${langItem.colorTheme}-100 text-${langItem.colorTheme}-800 dark:bg-${langItem.colorTheme}-900/30 dark:text-${langItem.colorTheme}-400 text-xs font-bold rounded-full`}>{langItem.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
