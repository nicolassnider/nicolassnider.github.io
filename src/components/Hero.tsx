import React from 'react';
import { AUTHOR_NAME, AUTHOR_EMAIL, AUTHOR_GITHUB, AUTHOR_LINKEDIN } from '../config';
import { ui } from '../data/ui';
import type { I18nProps } from '../types';

export default function Hero({ lang }: I18nProps) {
  const t = ui[lang];

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="max-w-3xl" data-aos="fade-up">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          {t['hero.greeting']} <span className="text-blue-600 dark:text-blue-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">{AUTHOR_NAME}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
          {t['hero.title']}
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 leading-relaxed max-w-2xl">
          {t['hero.description']}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${AUTHOR_EMAIL}`}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm shadow-blue-600/20"
          >
            {t['hero.contact']}
          </a>
          <a
            href={lang === 'es' ? '/Nicolas_Snider_CV_ES.pdf' : '/Nicolas_Snider_CV_EN.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="px-6 py-3 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-medium rounded-lg border border-blue-200 dark:border-blue-800 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t['hero.downloadCv']}
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
