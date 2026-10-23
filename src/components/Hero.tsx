import React from 'react';
import { AUTHOR_NAME, AUTHOR_EMAIL, AUTHOR_GITHUB, AUTHOR_LINKEDIN } from '../config';
import { ui } from '../data/ui';
import type { I18nProps } from '../types';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Hero({ lang }: I18nProps) {
  const t = ui[lang];

  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-28 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-14">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            {t['hero.location']}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            {t['hero.greeting']}{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              {AUTHOR_NAME}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            {t['hero.title']}
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
            {t['hero.description']}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            {/* Primary CTA */}
            <a
              href={`mailto:${AUTHOR_EMAIL}`}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {t['hero.contact']}
            </a>

            {/* Secondary CTA: CV Download */}
            <a
              href={lang === 'es' ? '/Nicolas_Snider_CV_ES.pdf' : '/Nicolas_Snider_CV_EN.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/80 dark:bg-gray-900/60 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium rounded-xl border border-gray-300 dark:border-gray-700 transition-all duration-200 hover:-translate-y-0.5 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <svg
                className="w-4 h-4 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {t['hero.downloadCv']}
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href={AUTHOR_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 bg-white/80 dark:bg-gray-900/60 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-200 hover:-translate-y-0.5 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>

              <a
                href={AUTHOR_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 bg-white/80 dark:bg-gray-900/60 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 rounded-xl border border-gray-200 dark:border-gray-800 transition-all duration-200 hover:-translate-y-0.5 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <GitHubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Circular Avatar with Glow */}
        <div className="relative group shrink-0" data-aos="zoom-in" data-aos-delay="150">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 opacity-40 group-hover:opacity-75 blur-xl transition-opacity duration-500"></div>
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]">
            <img
              src="/images/avatar.png"
              alt={t['hero.avatarAlt']}
              width="224"
              height="224"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
