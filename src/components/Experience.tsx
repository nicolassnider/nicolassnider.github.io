import React from 'react';

const experiences = [
  {
    company: 'Globant',
    location: 'Buenos Aires',
    role: 'Backend .NET Developer',
    date: 'Aug 2023 – Dec 2025',
    bullets: [
      'Built and maintained scalable backend services and REST APIs with .NET Framework & Core, supporting high-traffic enterprise applications.',
      'Partnered with cross-functional teams to define requirements and consistently ship features on schedule.',
      'Diagnosed and resolved performance bottlenecks, improving response times and system reliability.',
      'Led code reviews and mentored peers, building a culture of quality and continuous improvement.',
    ],
  },
  {
    company: 'UADE',
    location: 'Buenos Aires',
    role: 'Fullstack .NET Developer',
    date: 'Oct 2022 – Aug 2023',
    bullets: [
      'Designed, developed, and deployed fullstack web applications with .NET and modern frontend frameworks.',
      'Translated complex business requirements into robust technical solutions.',
      'Engineered secure database schemas and data-access layers to ensure data integrity across all services.',
      'Delivered ongoing UX improvements that boosted user satisfaction and reduced support load.',
    ],
  },
  {
    company: 'Soulit',
    location: 'Buenos Aires',
    role: 'Fullstack .NET Developer',
    date: 'May 2017 – Sep 2022',
    bullets: [
      'Architected and delivered fullstack solutions for a diverse portfolio of business applications, owning features end-to-end.',
      'Integrated third-party services and payment APIs, expanding platform capabilities and opening new revenue streams.',
      'Managed the complete SDLC — from requirements and architecture through QA and production deployment.',
      'Led migration of legacy systems to modern .NET environments, significantly reducing technical debt.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center">
          <span className="w-8 h-1 bg-blue-600 mr-4 rounded-full"></span>
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline line for mobile */}
              <div className="md:hidden absolute left-0 top-2 bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>
              {/* Timeline dot for mobile */}
              <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-blue-600"></div>

              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                <div className="md:col-span-1 mb-4 md:mb-0">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">{exp.date}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {exp.location}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">{exp.company}</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex">
                        <span className="mr-2 text-blue-500">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
