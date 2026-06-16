export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  date: string;
  bullets: string[];
}

export const experiences: Record<'en' | 'es', ExperienceItem[]> = {
  en: [
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
  ],
  es: [
    {
      company: 'Globant',
      location: 'Buenos Aires',
      role: 'Backend .NET Developer',
      date: 'Ago 2023 – Dic 2025',
      bullets: [
        'Construcción y mantenimiento de servicios backend escalables y APIs REST con .NET Framework y Core para aplicaciones empresariales de alto tráfico.',
        'Colaboración con equipos multifuncionales para definir requerimientos y entregar funcionalidades a tiempo.',
        'Diagnóstico y resolución de cuellos de botella de rendimiento, mejorando tiempos de respuesta y confiabilidad del sistema.',
        'Liderazgo en revisiones de código y mentoría, fomentando una cultura de calidad y mejora continua.',
      ],
    },
    {
      company: 'UADE',
      location: 'Buenos Aires',
      role: 'Fullstack .NET Developer',
      date: 'Oct 2022 – Ago 2023',
      bullets: [
        'Diseño, desarrollo y despliegue de aplicaciones web fullstack con .NET y frameworks de frontend modernos.',
        'Traducción de requerimientos de negocio complejos a soluciones técnicas robustas.',
        'Ingeniería de esquemas de base de datos seguros y capas de acceso a datos para garantizar la integridad.',
        'Implementación de mejoras continuas de UX que aumentaron la satisfacción del usuario.',
      ],
    },
    {
      company: 'Soulit',
      location: 'Buenos Aires',
      role: 'Fullstack .NET Developer',
      date: 'May 2017 – Sep 2022',
      bullets: [
        'Arquitectura y entrega de soluciones fullstack para una cartera diversa de aplicaciones empresariales.',
        'Integración de servicios de terceros y APIs de pago, expandiendo las capacidades de la plataforma.',
        'Gestión del SDLC completo, desde requerimientos y arquitectura hasta QA y paso a producción.',
        'Migración de sistemas legacy a entornos .NET modernos, reduciendo la deuda técnica significativamente.',
      ],
    },
  ]
};
