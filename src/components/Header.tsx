import React, { useState, useEffect, useRef } from 'react';
import { AUTHOR_NAME } from '../config';
import { navLinks } from '../data/nav';
import { ui } from '../data/ui';
import type { I18nProps } from '../types';

export default function Header({ lang }: I18nProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const t = ui[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Scroll spy logic
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 140; // Offset for header height

      let currentSection = '';
      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        // Return focus to menu button
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Close mobile menu when entering desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/85 dark:bg-gray-950/80 backdrop-blur-md shadow-sm py-3.5 border-b border-gray-200/60 dark:border-gray-800/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href={lang === 'en' ? '/' : '/es'}
          className="text-xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
        >
          {AUTHOR_NAME}
          <span className="text-purple-600 dark:text-purple-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label={t['a11y.mainNav']} className="hidden md:flex gap-2 items-center">
          {navLinks.map((link) => {
            const labelKey = `nav.${link.id}` as keyof typeof t;
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium px-3.5 py-1.5 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/90 dark:bg-blue-950/50 font-semibold shadow-xs'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/60 dark:hover:bg-gray-900/60'
                }`}
              >
                {t[labelKey] || link.name}
              </a>
            );
          })}

          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 border-l border-gray-200 dark:border-gray-800 pl-4 ml-2">
            <a
              href="/"
              aria-label={lang === 'en' ? 'Current language: English' : 'Switch to English'}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                lang === 'en'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                  : 'text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              EN
            </a>
            <span className="text-gray-300 dark:text-gray-700 select-none">|</span>
            <a
              href="/es"
              aria-label={lang === 'es' ? 'Idioma actual: Español' : 'Cambiar a Español'}
              className={`text-xs font-bold px-2 py-1 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                lang === 'es'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                  : 'text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              ES
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button & Lang Switcher */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-1">
            <a
              href="/"
              className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                lang === 'en'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                  : 'text-gray-400'
              }`}
            >
              EN
            </a>
            <span className="text-gray-300 dark:text-gray-700 text-xs">|</span>
            <a
              href="/es"
              className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                lang === 'es'
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                  : 'text-gray-400'
              }`}
            >
              ES
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? t['a11y.closeMenu'] : t['a11y.openMenu']}
            className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Overlay */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label={t['a11y.mobileNav']}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-gray-200/80 dark:border-gray-800/80 shadow-xl py-5 px-6 flex flex-col gap-2 transition-all duration-200"
        >
          {navLinks.map((link) => {
            const labelKey = `nav.${link.id}` as keyof typeof t;
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={handleLinkClick}
                className={`text-base font-medium px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 font-semibold'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900'
                }`}
              >
                {t[labelKey] || link.name}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
