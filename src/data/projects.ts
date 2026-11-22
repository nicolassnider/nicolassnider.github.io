interface CaseStudy {
  problem: string;
  contribution: string;
  solution: string;
  result: string;
}

export type ProjectCategory = 'all' | 'web' | 'iot' | 'devops' | 'data';

export interface Project {
  id: string;
  title: string;
  summary: string;
  category?: 'web' | 'iot' | 'devops' | 'data';
  image?: string;
  tags: string[];
  features: string[];
  caseStudy?: CaseStudy;
  githubUrl?: string;
  youtubeUrl?: string;
  demoLinks?: { label: string; url: string }[];
}

// Shared URLs
const URLS = {
  obspred: {
    github: 'https://github.com/nicolassnider/obspred_public'
  },
  digigym: {
    github: 'https://github.com/nicolassnider/digi-gym_public'
  },
  biConsulting: {
    github: 'https://github.com/nicolassnider/bi-consulting-ecommerce-analysis',
    lookerStudio: 'https://datastudio.google.com/reporting/f018ad32-ad7a-4298-bd32-47886943561f/page/5bIDG',
    drive: 'https://drive.google.com/drive/folders/14-8eHduYkfBSQloTnHgG2jChtONxZ7hz'
  },
  cornerClick: {
    github: 'https://github.com/nicolassnider/corner-click_public',
    youtube: 'https://www.youtube.com/watch?v=PEGx46k4s44'
  },
  gupcheck: {
    github: 'https://github.com/nicolassnider/gup-check_public'
  },
  fenixWeb: {
    github: 'https://github.com/nicolassnider/fenix_web_public'
  },
  homeMediaHub: {
    github: 'https://github.com/nicolassnider/home_media_automation_public'
  },
  cancunJournal: {
    github: 'https://github.com/nicolassnider/viaje_cancun',
    demo: 'https://cancuneyn26.netlify.app'
  }
} as const;

export const projects: Record<'en' | 'es', Project[]> = {
  en: [
    {
      id: 'digigym',
      title: 'DigiGYM - The Smart Gym',
      summary: 'Low-cost digitalization of free weights using Computer Vision and IoT to democratize smart fitness in neighborhood gyms.',
      category: 'iot',
      image: '/images/digigym_cover.png',
      tags: ['React', 'Vite', 'Firebase', 'Python', 'OpenCV', 'IoT'],
      features: [
        'Edge Computing with computer vision for real-time tracking',
        'Advanced VBT (Velocity Based Training) metrics',
        'Offline persistence and agile Auth with Firebase',
        'Real-time global leaderboards'
      ],
      caseStudy: {
        problem: 'Small and neighborhood gyms cannot afford expensive sensor-equipped machines or commercial Velocity Based Training (VBT) hardware ($2,000+ per station).',
        contribution: 'Architected the edge computer-vision tracking algorithm in Python/OpenCV and designed the real-time cloud sync interface using React and Firebase.',
        solution: 'Implemented low-cost optical camera tracking directly processing barbell velocity at the edge, integrated with offline-first client storage and Firebase cloud synchronization.',
        result: 'Delivered sub-50ms velocity tracking feedback on standard webcams, democratizing advanced strength training metrics at under 10% of commercial hardware cost.'
      },
      githubUrl: URLS.digigym.github
    },
    {
      id: 'obspred',
      title: 'Predictive Labor & Education Observatory',
      summary: 'Predictive intelligence web platform analyzing socioeconomic, labor, and education trends to guide public policies and vocational training across Argentina, Uruguay, and Chile.',
      category: 'data',
      image: '/images/obspred_cover.png',
      tags: ['FastAPI', 'Python', 'Clean Architecture', 'PostgreSQL', 'Docker', 'Data Pipelines'],
      features: [
        'Multidimensional Employability Index (0–100) across strategic productive sectors',
        'Skills Gap Analysis engine contrasting market demand with educational supply',
        'Automated ingestion pipelines for official APIs (World Bank, ILOSTAT, CEPALSTAT, SIMEL)',
        'Strict data lineage and zero-imputation policy ensuring maximum methodological transparency'
      ],
      caseStudy: {
        problem: 'Evidence-based decision-making in employment policies and educational planning is severely hindered by fragmented public statistical records and siloed reporting across the region.',
        contribution: 'Engineered the decoupled backend API in Python/FastAPI using Clean Architecture and SOLID principles, built automated ingestion connectors for international/national data APIs, and designed the relational PostgreSQL schema.',
        solution: 'Architected a scalable, modular RESTful platform integrating live statistical feeds, semantic standardization of occupational taxonomies (ISCO/CIUO), and an auditable employability score computation engine.',
        result: 'Centralized key indicators across 5 strategic sectors and 20 prioritized occupations into actionable, auditable dashboards for public policymakers and educational planners.'
      },
      githubUrl: URLS.obspred.github
    },
    {
      id: 'corner-click',
      title: 'Corner Click - ITF Tournament App',
      summary: 'A comprehensive web application designed for managing ITF Taekwondo tournaments with live, low-latency scoring.',
      category: 'web',
      image: '/images/corner_click_cover.png',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Real-time', 'Vite'],
      features: [
        'Bracket management with seeding and byes',
        'Live, low-latency scoring interface for Corner Referees',
        'Role-based access control and frictionless Judge login via PIN',
        'Strict adherence to official ITF Sparring Rules (V2026-1)'
      ],
      caseStudy: {
        problem: 'Taekwondo tournaments traditionally rely on manual paper scorecards or fragile legacy hardware, causing human counting errors, delays, and lack of spectator visibility.',
        contribution: 'Engineered the end-to-end tournament platform: bracket management engine, referee PIN authentication, and low-latency round timer scoring.',
        solution: 'Built an event-driven real-time scoring system on Firebase and React with separate mobile-optimized views for corner judges and a central spectator/admin board adhering strictly to official ITF Sparring Rules (V2026-1).',
        result: 'Sub-second score propagation across four corner judges simultaneously, eliminating tallying disputes and reducing match changeover times.'
      },
      githubUrl: URLS.cornerClick.github,
      youtubeUrl: URLS.cornerClick.youtube,
      demoLinks: [
        { label: 'Admin Web', url: 'https://cc-web-admin.netlify.app/' },
        { label: 'Judges App', url: 'https://cc-web-judges.netlify.app/' }
      ]
    },
    {
      id: 'bi-consulting-ecommerce',
      title: 'E-Commerce Performance & BI Consulting',
      summary: 'Comprehensive Business Intelligence consulting project diagnosing revenue concentration, demand seasonality, and cross-selling growth strategies for a regional e-commerce firm.',
      category: 'data',
      image: '/images/bi_consulting_cover.png',
      tags: ['Looker Studio', 'Google Sheets', 'Business Intelligence', 'Data Modeling', 'Storytelling'],
      features: [
        'Interactive executive dashboard in Google Looker Studio with real-time KPI tracking',
        'Data auditing, relational schemas, and BUSCARX cross-referencing in Google Sheets',
        'Commercial diagnosis: 55%+ revenue concentration in Electronics and quincenal seasonality',
        'SMART actionable recommendations: cross-selling bundles and mid-month flash campaigns'
      ],
      caseStudy: {
        problem: 'A fast-growing regional e-commerce store suffered from analytical opacity, blind to high revenue concentration risk and severe revenue dips during the second half of the month.',
        contribution: 'Performed end-to-end data auditing, normalized transactional databases, engineered relational models in Google Sheets, built the interactive Looker Studio dashboard, and crafted executive storytelling slides with actionable SMART recommendations.',
        solution: 'Developed a robust data pipeline transforming raw transactions and customer catalogs into consolidated models, designed dimensional drill-down charts and master KPIs, and outlined cross-selling bundle strategies.',
        result: 'Identified critical dependence on high-ticket electronics (over 55% of revenue) and designed a strategic bundle roadmap targeting an average ticket increase from $14,150 to $18,000 ARS.'
      },
      githubUrl: URLS.biConsulting.github,
      demoLinks: [
        { label: 'Looker Studio Dashboard', url: URLS.biConsulting.lookerStudio },
        { label: 'Deliverables & Slides (Drive)', url: URLS.biConsulting.drive }
      ]
    },
    {
      id: 'gupcheck',
      title: 'GupCheck - Digital Pre-evaluations',
      summary: 'A web application designed for ITF Taekwondo schools that digitalizes and centralizes pre-evaluations for Gup (colored belt) students. Replaces paper notes with a unified dashboard.',
      category: 'web',
      image: '/images/gupcheck_cover.png',
      tags: ['Astro', 'React', 'Firebase', 'Auth', 'Firestore'],
      features: [
        'Mobile-first feedback system for Black Belt evaluators in the Dojang',
        'Unified Dashboard for the Sabum-Nim with consolidated evaluations',
        'Role-based access using Firebase Auth Custom Claims',
        'Comprehensive Audit Logs for system actions'
      ],
      caseStudy: {
        problem: 'Martial arts academies accumulated hundreds of handwritten evaluation sheets for belt testing, creating administrative bottlenecks and loss of historical student progress data.',
        contribution: 'Designed the responsive grading workflow, Firebase Custom Claims security rules for role-based permissions, and the Sabum-Nim management dashboard.',
        solution: 'Created a mobile-first Progressive Web App allowing black belt evaluators to grade criteria live on the tatami, feeding instant aggregates and audit trails into the head instructor portal.',
        result: '100% paperless belt grading workflow, reducing post-exam admin workload from hours to minutes with immediate feedback for students.'
      },
      githubUrl: URLS.gupcheck.github,
      demoLinks: [
        { label: 'Live Demo', url: 'https://gup-check.netlify.app/' }
      ]
    },
    {
      id: 'fenix-web',
      title: 'Fenix Web',
      summary: 'Official institutional website for Fenix ITF Taekwondo School based in Argentina, providing information about classes, locations, and events.',
      category: 'web',
      image: '/images/logo-fenix-web.png',
      tags: ['React', 'Web', 'Tailwind CSS'],
      features: [
        'Institutional presentation and school information',
        'Modern, responsive UI/UX tailored for students and parents',
        'Integration with social networks and contact forms'
      ],
      caseStudy: {
        problem: 'The school lacked a centralized, high-performance web portal to communicate class schedules across multiple dojang locations and convert prospective student inquiries.',
        contribution: 'Led UI/UX design, modern responsive frontend implementation, and social network integration.',
        solution: 'Developed a lightweight, high-performance React site optimized for mobile visitors with structured location maps, schedule filters, and direct WhatsApp contact channels.',
        result: 'Significant increase in monthly student inquiries and streamlined access to institutional event announcements.'
      },
      githubUrl: URLS.fenixWeb.github,
      demoLinks: [
        { label: 'Live Demo', url: 'https://fenixtkdweb.netlify.app/' }
      ]
    },
    {
      id: 'home-media-hub',
      title: 'Home Media & Automation Center',
      summary: 'A cost-effective, secure, and professional smart home hub built on legacy hardware utilizing a containerized architecture with Docker.',
      category: 'devops',
      image: '/images/automate_cover.png',
      tags: ['Docker', 'Home Assistant', 'Node-RED', 'Nginx', 'Prometheus', 'Grafana'],
      features: [
        'Hardware Upcycling for legacy systems',
        'Fully isolated services using Docker Compose',
        'Secure reverse proxy with Nginx and Tailscale',
        'Real-time metrics with Prometheus & Grafana'
      ],
      caseStudy: {
        problem: 'Commercial smart home hubs introduce vendor lock-in, recurring subscriptions, and privacy vulnerabilities, while older computing hardware often ends up discarded.',
        contribution: 'Designed containerized service topology, network proxy hardening, and automated telemetry dashboards.',
        solution: 'Upcycled legacy hardware into a private home automation server running Docker Compose, Home Assistant, Node-RED, Tailscale encrypted mesh VPN, and Prometheus/Grafana monitoring.',
        result: 'Achieved 99.9% uptime local home automation with zero external cloud subscriptions and full telemetry observability.'
      },
      githubUrl: URLS.homeMediaHub.github
    },
    {
      id: 'cancun-journal',
      title: 'Cancún 2026 | Bitácora de Viaje de Nico & Erika',
      summary: 'An interactive digital scrapbook and travel journal documenting a 4-day Riviera Maya trip using Astro Islands, Polaroid tilt aesthetics, culinary duels, and EXIF photo matching.',
      category: 'web',
      image: '/images/cancun_cover.png',
      tags: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'Netlify'],
      features: [
        'Interactive Digital Scrapbook with Polaroid tilt aesthetics, tape effects, and handwritten typography',
        'Gamified culinary showdown (Nico vs. Erika) with live confetti animations and localStorage voting',
        'Anecdotes & bloopers carousel featuring interactive reaction counters',
        'Custom vintage digital postcard creator with WhatsApp direct sharing and EXIF Lightroom photo matching'
      ],
      caseStudy: {
        problem: 'Personal travel memories often get lost in fragmented chat albums and static social posts, lacking chronological storytelling, culinary highlights, and personal anecdotes.',
        contribution: 'Designed and engineered an engaging, interactive travel journal utilizing Astro 5 Islands architecture, React 19 interactive widgets, and an automated EXIF metadata pipeline.',
        solution: 'Architected a zero-runtime-overhead static website featuring dynamic client islands for food showdown voting, scrapbook photo tilts, blooper reactions, and Netlify continuous branch previews.',
        result: 'Created a fast, emotionally engaging digital scrapbook balancing portfolio-level frontend engineering standards with a warm, memorable experience for family and friends.'
      },
      githubUrl: URLS.cancunJournal.github,
      demoLinks: [
        { label: 'Live Demo', url: URLS.cancunJournal.demo }
      ]
    }
  ],
  es: [
    {
      id: 'digigym',
      title: 'DigiGYM - El Gimnasio Inteligente',
      summary: 'Digitalización de bajo costo del peso libre mediante Visión Artificial e IoT para democratizar el fitness inteligente en gimnasios de barrio.',
      category: 'iot',
      image: '/images/digigym_cover.png',
      tags: ['React', 'Vite', 'Firebase', 'Python', 'OpenCV', 'IoT'],
      features: [
        'Edge Computing con visión por computadora para trackeo en tiempo real',
        'Métricas VBT (Velocity Based Training) avanzadas',
        'Persistencia Offline y Auth ágil con Firebase',
        'Leaderboards globales en tiempo real'
      ],
      caseStudy: {
        problem: 'Los gimnasios de barrio no pueden costear máquinas con sensores integrados ni hardware comercial de Entrenamiento Basado en Velocidad (VBT) (+$2,000 USD por estación).',
        contribution: 'Diseñé la arquitectura del algoritmo de seguimiento por visión artificial en Python/OpenCV y desarrollé la interfaz de sincronización en tiempo real con React y Firebase.',
        solution: 'Implementé procesamiento de visión artificial en el edge calculando la velocidad de la barra en tiempo real, combinado con persistencia offline y sincronización en la nube.',
        result: 'Logró feedback de velocidad en menos de 50ms usando cámaras estándar, democratizando métricas de fuerza avanzada a menos del 10% del costo comercial.'
      },
      githubUrl: URLS.digigym.github
    },
    {
      id: 'obspred',
      title: 'Observatorio Predictivo Laboral y Educativo',
      summary: 'Plataforma web de inteligencia prospectiva desarrollada con el Gobierno de la Ciudad de Buenos Aires (innova.lab) para anticipar tendencias de empleo, brechas de habilidades y orientar políticas públicas en Argentina, Uruguay y Chile.',
      category: 'data',
      image: '/images/obspred_cover.png',
      tags: ['FastAPI', 'Python', 'Clean Architecture', 'PostgreSQL', 'Docker', 'Data Pipelines'],
      features: [
        'Índice de Empleabilidad multidimensional (0–100) en sectores productivos estratégicos',
        'Motor de detección temprana de brechas de habilidades (demanda laboral vs. oferta formativa)',
        'Pipelines automatizados de ingesta para APIs oficiales (Banco Mundial, OIT/ILOSTAT, CEPALSTAT, SIMEL)',
        'Trazabilidad metodológica estricta y principio de honestidad del dato sin imputaciones arbitrarias'
      ],
      caseStudy: {
        problem: 'La toma de decisiones en formación y empleo se ve obstaculizada por la fragmentación de datos oficiales y la falta de taxonomías homogéneas entre organismos regionales.',
        contribution: 'Diseñé e implementé la arquitectura backend con FastAPI y Python bajo Clean Architecture y principios SOLID, construí los conectores de ingesta a APIs oficiales y modelé la base de datos relacional en PostgreSQL.',
        solution: 'Desarrollé una API modular y escalable con controladores delgados, persistencia asíncrona, validación estricta de contratos con Pydantic y armonización semántica de clasificaciones internacionales (CIUO/ISCO).',
        result: 'Consolidación de métricas de 5 sectores estratégicos y 20 ocupaciones clave en tableros accionables con linaje verificable, facilitando la toma de decisiones basada en evidencia empírica.'
      },
      githubUrl: URLS.obspred.github
    },
    {
      id: 'corner-click',
      title: 'Corner Click - App de Torneos ITF',
      summary: 'Una aplicación web integral diseñada para gestionar torneos de Taekwondo ITF con puntuación en vivo y de baja latencia.',
      category: 'web',
      image: '/images/corner_click_cover.png',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Real-time', 'Vite'],
      features: [
        'Gestión de llaves (brackets) con siembra (seeding) y byes',
        'Interfaz de puntuación en vivo y de baja latencia para Jueces de Esquina',
        'Control de acceso basado en roles e inicio de sesión sin fricción vía PIN',
        'Adherencia estricta a las Reglas Oficiales de Combate ITF (V2026-1)'
      ],
      caseStudy: {
        problem: 'Los torneos de Taekwondo tradicionalmente dependen de planillas en papel o hardware anticuado y frágil, provocando errores humanos, demoras y falta de visibilidad para el público.',
        contribution: 'Diseñé y construí la plataforma integral de torneo: motor de llaves (brackets), autenticación ágil por PIN para árbitros y sistema de puntuación con cronómetro en tiempo real.',
        solution: 'Desarrollé un sistema reactivo en Firebase y React con interfaces móviles optimizadas para jueces de esquina y un panel central para espectadores/mesa de control conforme al reglamento oficial ITF (V2026-1).',
        result: 'Propagación de puntos en menos de un segundo entre cuatro jueces simultáneos, eliminando disputas en el conteo y agilizando las transiciones entre combates.'
      },
      githubUrl: URLS.cornerClick.github,
      youtubeUrl: URLS.cornerClick.youtube,
      demoLinks: [
        { label: 'Web de Administración', url: 'https://cc-web-admin.netlify.app/' },
        { label: 'App de Jueces', url: 'https://cc-web-judges.netlify.app/' }
      ]
    },
    {
      id: 'bi-consulting-ecommerce',
      title: 'Rendimiento E-Commerce & Consultoría BI',
      summary: 'Proyecto integral de Business Intelligence y Analítica Comercial para resolver la opacidad analítica de un e-commerce en expansión, diagnosticando concentración de ventas y estacionalidad.',
      category: 'data',
      image: '/images/bi_consulting_cover.png',
      tags: ['Looker Studio', 'Google Sheets', 'Business Intelligence', 'Modelado de Datos', 'Storytelling'],
      features: [
        'Dashboard interactivo ejecutivo en Google Looker Studio con seguimiento de KPIs clave',
        'Auditoría de datos, modelos relacionales y cruces con BUSCARX en Google Sheets',
        'Diagnóstico comercial: más del 55% de ingresos concentrados en Electrónica y estacionalidad quincenal',
        'Recomendaciones estratégicas SMART: bundles de venta cruzada y promociones de mitad de mes'
      ],
      caseStudy: {
        problem: 'Un e-commerce regional en expansión operaba con opacidad analítica, desconociendo el riesgo de concentración de su catálogo y caídas pronunciadas en la facturación durante la segunda quincena.',
        contribution: 'Realicé la auditoría y saneamiento de datos crudos, modelado relacional en Google Sheets, diseño del dashboard interactivo en Looker Studio y presentación ejecutiva en 7 actos con recomendaciones SMART.',
        solution: 'Diseñé un flujo analítico integral desde fuentes CSV crudas hasta un modelo consolidado y visualización dimensional en Looker Studio con indicadores clave (Facturación, Ticket Promedio y Pedidos).',
        result: 'Se detectó que Electrónica concentra más del 55% de los ingresos y el 70% de las ventas ocurre en los primeros 11 días; se propuso un plan de venta cruzada para elevar el ticket promedio a $18.000 ARS.'
      },
      githubUrl: URLS.biConsulting.github,
      demoLinks: [
        { label: 'Dashboard en Looker Studio', url: URLS.biConsulting.lookerStudio },
        { label: 'Entregables y Presentación (Drive)', url: URLS.biConsulting.drive }
      ]
    },
    {
      id: 'gupcheck',
      title: 'GupCheck - Pre-evaluaciones Digitales',
      summary: 'Aplicación web diseñada para escuelas de Taekwondo ITF que digitaliza y centraliza las pre-evaluaciones para estudiantes Gup (cinturones de color). Reemplaza las notas en papel.',
      category: 'web',
      image: '/images/gupcheck_cover.png',
      tags: ['Astro', 'React', 'Firebase', 'Auth', 'Firestore'],
      features: [
        'Sistema de feedback mobile-first para evaluadores Cinturones Negros en el Dojang',
        'Dashboard unificado para el Sabum-Nim con evaluaciones consolidadas',
        'Control de acceso por roles usando Firebase Auth Custom Claims',
        'Registros de auditoría exhaustivos para acciones del sistema'
      ],
      caseStudy: {
        problem: 'Las academias de artes marciales acumulaban cientos de hojas manuscritas en cada examen de graduación, generando demoras administrativas y pérdida de historial del alumno.',
        contribution: 'Diseñé el flujo de evaluación mobile-first, las reglas de seguridad basadas en roles con Firebase Custom Claims y el panel de control para el Sabum-Nim.',
        solution: 'Creé una aplicación web progresiva y táctil que permite a los evaluadores calificar en vivo en el tatami, sincronizando métricas y registros de auditoría al instante.',
        result: 'Eliminación del 100% del papel en exámenes de graduación, reduciendo el procesamiento administrativo de horas a minutos y brindando feedback inmediato.'
      },
      githubUrl: URLS.gupcheck.github,
      demoLinks: [
        { label: 'Demo en Vivo', url: 'https://gup-check.netlify.app/' }
      ]
    },
    {
      id: 'fenix-web',
      title: 'Fenix Web',
      summary: 'Sitio web institucional oficial para la Escuela de Taekwondo ITF Fenix en Argentina, brindando información sobre clases, sedes y eventos.',
      category: 'web',
      image: '/images/logo-fenix-web.png',
      tags: ['React', 'Web', 'Tailwind CSS'],
      features: [
        'Presentación institucional e información de la escuela',
        'UI/UX moderno y responsivo pensado para alumnos y padres',
        'Integración con redes sociales y formularios de contacto'
      ],
      caseStudy: {
        problem: 'La escuela carecía de un portal web centralizado y de alto rendimiento para comunicar horarios en múltiples sedes y canalizar consultas de nuevos alumnos.',
        contribution: 'Lideré el diseño UI/UX, la implementación del frontend responsivo y la integración con canales sociales.',
        solution: 'Desarrollé un sitio React ultraligero optimizado para dispositivos móviles con mapas de sedes, horarios organizados y contacto directo por WhatsApp.',
        result: 'Aumento notable en consultas mensuales de aspirantes y acceso centralizado a comunicados institucionales y eventos.'
      },
      githubUrl: URLS.fenixWeb.github,
      demoLinks: [
        { label: 'Demo en Vivo', url: 'https://fenixtkdweb.netlify.app/' }
      ]
    },
    {
      id: 'home-media-hub',
      title: 'Home Media & Automation Center',
      summary: 'Un hub de hogar inteligente rentable, seguro y profesional construido sobre hardware heredado utilizando una arquitectura en contenedores con Docker.',
      category: 'devops',
      image: '/images/automate_cover.png',
      tags: ['Docker', 'Home Assistant', 'Node-RED', 'Nginx', 'Prometheus', 'Grafana'],
      features: [
        'Reutilización de hardware para sistemas heredados',
        'Servicios completamente aislados usando Docker Compose',
        'Proxy inverso seguro con Nginx y Tailscale',
        'Métricas en tiempo real con Prometheus y Grafana'
      ],
      caseStudy: {
        problem: 'Los hubs comerciales de domótica imponen suscripciones mensuales, dependencia de la nube y riesgos de privacidad, mientras que equipos informáticos antiguos suelen descartarse.',
        contribution: 'Diseñé la topología de contenedores, la seguridad del proxy de red y los tableros de telemetría automatizada.',
        solution: 'Reutilicé hardware heredado convirtiéndolo en un servidor privado con Docker Compose, Home Assistant, Node-RED, red privada encriptada Tailscale y monitoreo con Prometheus/Grafana.',
        result: '99.9% de disponibilidad operativa en automatización local sin suscripciones a nubes externas y observabilidad total del sistema.'
      },
      githubUrl: URLS.homeMediaHub.github
    },
    {
      id: 'cancun-journal',
      title: 'Cancún 2026 | Bitácora de Viaje de Nico & Erika',
      summary: 'Un cuaderno de viaje interactivo y scrapbook digital que documenta una escapada de 4 días a la Riviera Maya con arquitectura Astro Islands, estética Polaroid, duelo culinario y auto-matching EXIF.',
      category: 'web',
      image: '/images/cancun_cover.png',
      tags: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'Netlify'],
      features: [
        'Scrapbook digital interactivo con estética Polaroid inclinada, efecto cinta adhesiva y tipografía manuscrita',
        'Duelo gastronómico gamificado (Nico vs Erika) con animación de confeti y votación en localStorage',
        'Carrusel de anécdotas y bloopers con contador interactivo de reacciones',
        'Generador de postales vintage para compartir por WhatsApp y auto-matching de fotos por EXIF de Lightroom'
      ],
      caseStudy: {
        problem: 'Los recuerdos de viaje familiares suelen dispersarse en galerías estáticas o chats de mensajería, perdiendo la narrativa cronológica, los detalles culinarios y el humor detrás de escena.',
        contribution: 'Diseñé y construí un diario de viaje interactivo aprovechando la arquitectura de islas de Astro 5, componentes dinámicos en React 19 y un pipeline de extracción de metadatos EXIF.',
        solution: 'Desarrollé una aplicación estática de alto rendimiento con islas interactivas para duelos gastronómicos con confeti, estética visual scrapbook con fotos polaroid inclinadas y despliegue continuo en Netlify.',
        result: 'Logré una experiencia web rápida y emotiva que conjuga ingeniería frontend de nivel profesional con un scrapbook digital cálido y entretenido para compartir en familia.'
      },
      githubUrl: URLS.cancunJournal.github,
      demoLinks: [
        { label: 'Demo en Vivo', url: URLS.cancunJournal.demo }
      ]
    }
  ]
};
