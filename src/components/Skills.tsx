import React from 'react';
import { skills } from '../data/skills';
import SectionHeading from './ui/SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading title="Skills & Expertise" colorClass="bg-indigo-500" />
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-3 bg-white/70 dark:bg-gray-800/40 backdrop-blur-md border border-white/50 dark:border-gray-700/50 rounded-lg shadow-sm text-gray-800 dark:text-gray-200 font-medium hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-md cursor-default"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
