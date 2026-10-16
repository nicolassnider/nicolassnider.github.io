interface CaseStudy {
  problem: string;
  contribution: string;
  solution: string;
  result: string;
}

export type ProjectCategory = 'all' | 'web' | 'iot' | 'devops';

export interface Project {
  id: string;
  title: string;
  summary: string;
  category?: 'web' | 'iot' | 'devops';
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
  digigym: {
    github: 'https://github.com/nicolassnider/digi-gym_public'
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
    }
  ]
};
