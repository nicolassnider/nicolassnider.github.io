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
        'Built and maintained scalable backend services and REST APIs with .NET Framework and .NET Core, supporting high-traffic enterprise applications.',
        'Partnered with cross-functional teams to define requirements and consistently shipped features on schedule.',
        'Diagnosed and resolved performance bottlenecks, improving response times and overall system reliability.',
        'Led code reviews and mentored peers, building a culture of quality and continuous improvement.',
      ],
    },
    {
      company: 'UADE',
      location: 'Buenos Aires',
      role: 'Fullstack .NET Developer',
      date: 'Oct 2022 – Aug 2023',
      bullets: [
        'Designed, developed, and deployed fullstack web applications using .NET and modern frontend frameworks.',
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
      role: 'Desarrollador Backend .NET',
      date: 'Ago 2023 – Dic 2025',
      bullets: [
        'Construyó y mantuvo servicios backend y APIs REST escalables con .NET Framework y .NET Core, dando soporte a aplicaciones empresariales de alto tráfico.',
        'Colaboró con equipos multidisciplinarios para definir requerimientos y entregó funcionalidades de forma consistente dentro de los plazos.',
        'Diagnosticó y resolvió cuellos de botella de rendimiento, mejorando los tiempos de respuesta y la confiabilidad general del sistema.',
        'Lideró revisiones de código y mentoreó a otros desarrolladores, fomentando una cultura de calidad y mejora continua.',
      ],
    },
    {
      company: 'UADE',
      location: 'Buenos Aires',
      role: 'Desarrollador Fullstack .NET',
      date: 'Oct 2022 – Ago 2023',
      bullets: [
        'Diseñó, desarrolló y desplegó aplicaciones web fullstack utilizando .NET y frameworks frontend modernos.',
        'Tradujo requerimientos de negocio complejos en soluciones técnicas robustas.',
        'Diseñó esquemas de bases de datos seguros y capas de acceso a datos para garantizar la integridad de la información en todos los servicios.',
        'Entregó mejoras continuas de UX que incrementaron la satisfacción de los usuarios y redujeron la carga de soporte.',
      ],
    },
    {
      company: 'Soulit',
      location: 'Buenos Aires',
      role: 'Desarrollador Fullstack .NET',
      date: 'May 2017 – Sep 2022',
      bullets: [
        'Diseñó y entregó soluciones fullstack para un portafolio diverso de aplicaciones de negocio, siendo responsable de las funcionalidades de punta a punta.',
        'Integró servicios de terceros y APIs de pago, ampliando las capacidades de la plataforma y habilitando nuevas fuentes de ingreso.',
        'Gestionó el ciclo completo de desarrollo de software (SDLC), desde requerimientos y arquitectura hasta QA y despliegue en producción.',
        'Lideró la migración de sistemas legacy a entornos .NET modernos, reduciendo significativamente la deuda técnica.',
      ],
    },
  ]
};
