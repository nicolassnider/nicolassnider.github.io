import React from 'react';
import { academic, languages } from '../data/education';
import SectionHeading from './ui/SectionHeading';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50/50 dark:bg-gray-900/20 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading title="Education & Languages" colorClass="bg-green-500" />
        
        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-up">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-2">Academic</h3>
            <div className="bg-white/70 dark:bg-gray-800/40 backdrop-blur-md p-6 rounded-xl border border-white/50 dark:border-gray-800/50 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">{academic.institution}</h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{academic.degree}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center justify-between mt-4">
                <span>{academic.location}</span>
                <span>{academic.date}</span>
              </p>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-800 pb-2">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang, idx) => (
                <div key={idx} className="bg-white/70 dark:bg-gray-800/40 backdrop-blur-md p-4 rounded-xl border border-white/50 dark:border-gray-800/50 flex justify-between items-center shadow-sm">
                  <span className="font-semibold text-gray-900 dark:text-white">{lang.name}</span>
                  <span className={`px-3 py-1 bg-${lang.colorTheme}-100 text-${lang.colorTheme}-800 dark:bg-${lang.colorTheme}-900/30 dark:text-${lang.colorTheme}-400 text-xs font-bold rounded-full`}>{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
