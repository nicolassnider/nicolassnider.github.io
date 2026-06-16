import React from 'react';
import { AUTHOR_NAME, AUTHOR_GITHUB, AUTHOR_LINKEDIN } from '../config';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="max-w-3xl" data-aos="fade-up">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">{AUTHOR_NAME}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
          .NET Developer & Software Engineer
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl">
          Born in Buenos Aires, Argentina, and currently based in Mexico City, Mexico. 
          I build and maintain scalable backend services and architect fullstack solutions.
          Passionate about delivering robust technical solutions, clean code, and great user experiences.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:nicolas.snider@gmail.com"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm shadow-blue-600/20"
          >
            Get in touch
          </a>
          <a
            href={AUTHOR_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-200 dark:border-gray-700 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={AUTHOR_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-200 dark:border-gray-700 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
