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

export const academic: AcademicInfo = {
  institution: 'Universidad del Salvador (USAL)',
  degree: 'Bachelor of Science in Computer Engineering',
  location: 'Buenos Aires, Argentina',
  date: 'Jan 2010 – Jul 2021',
};

export const languages: LanguageInfo[] = [
  { name: 'Spanish', level: 'Native', colorTheme: 'green' },
  { name: 'English', level: 'C2 Advanced', colorTheme: 'blue' },
];
