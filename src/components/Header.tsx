import React, { useState, useEffect } from 'react';
import { AUTHOR_NAME } from '../config';
import { navLinks } from '../data/nav';
import { ui } from '../data/ui';
import type { I18nProps } from '../types';

export default function Header({ lang }: I18nProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = ui[lang];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/70 dark:bg-gray-950/60 backdrop-blur-lg shadow-sm py-4 border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href={lang === 'en' ? '/' : '/es'} className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400 relative z-50">
          {AUTHOR_NAME}.
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const labelKey = `nav.${link.id}` as keyof typeof t;
            return (
              <a
                key={link.id}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                {t[labelKey] || link.name}
              </a>
            );
          })}
          
          <div className="flex items-center gap-2 border-l border-gray-200 dark:border-gray-700 pl-6 ml-2">
            <a href="/" className={`text-sm font-bold ${lang === 'en' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}>EN</a>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <a href="/es" className={`text-sm font-bold ${lang === 'es' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'}`}>ES</a>
          </div>
        </nav>

        {/* Mobile Menu Button & Lang Switcher */}
        <div className="md:hidden relative z-50 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a href="/" className={`text-sm font-bold ${lang === 'en' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>EN</a>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <a href="/es" className={`text-sm font-bold ${lang === 'es' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>ES</a>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 px-2 py-1"
          >
            {isMobileMenuOpen ? (lang === 'es' ? 'Cerrar' : 'Close') : (lang === 'es' ? 'Menú' : 'Menu')}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-100/50 dark:border-gray-800/50 shadow-lg py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const labelKey = `nav.${link.id}` as keyof typeof t;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block py-2"
              >
                {t[labelKey] || link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
