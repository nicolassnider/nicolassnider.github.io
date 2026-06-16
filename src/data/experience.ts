export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  date: string;
  bullets: string[];
}

export const experiences: ExperienceItem[] = [
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
