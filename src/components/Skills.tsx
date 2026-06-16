import React from 'react';

const skills = [
  '.NET Backend Development',
  'Frontend Development',
  'Database Design & Management',
  'Fullstack Development',
  'SOLID Principles & Design Patterns',
  'Agile Methodologies',
  'Version Control (Git)',
  'Unit & Integration Testing',
  'Problem-Solving & Critical Thinking',
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center">
          <span className="w-8 h-1 bg-indigo-500 mr-4 rounded-full"></span>
          Skills & Expertise
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm text-gray-800 dark:text-gray-200 font-medium hover:border-indigo-500 dark:hover:border-indigo-400 hover:shadow-md transition-all duration-200 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
