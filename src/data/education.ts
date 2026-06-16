export interface AcademicInfo {
  institution: string;
  degree: string;
  location: string;
  date: string;
}

export interface LanguageInfo {
  name: string;
  level: string;
  colorTheme: 'green' | 'blue' | 'purple';
}

export const academic: Record<'en' | 'es', AcademicInfo> = {
  en: {
    institution: 'Universidad del Salvador (USAL)',
    degree: 'Bachelor of Science in Computer Engineering',
    location: 'Buenos Aires, Argentina',
    date: 'Jan 2010 – Jul 2021',
  },
  es: {
    institution: 'Universidad del Salvador (USAL)',
    degree: 'Ingeniería en Informática',
    location: 'Buenos Aires, Argentina',
    date: 'Ene 2010 – Jul 2021',
  }
};

export const languages: Record<'en' | 'es', LanguageInfo[]> = {
  en: [
    { name: 'Spanish', level: 'Native', colorTheme: 'green' },
    { name: 'English', level: 'C2 Advanced', colorTheme: 'blue' },
  ],
  es: [
    { name: 'Español', level: 'Nativo', colorTheme: 'green' },
    { name: 'Inglés', level: 'C2 Avanzado', colorTheme: 'blue' },
  ]
};
