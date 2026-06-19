export interface Project {
  id: string;
  title: string;
  summary: string;
  image?: string;
  tags: string[];
  features: string[];
  githubUrl?: string;
  youtubeUrl?: string;
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
      image: '/images/digigym_cover.png',
      tags: ['React', 'Vite', 'Firebase', 'Python', 'OpenCV', 'IoT'],
      features: [
        'Edge Computing with computer vision for real-time tracking',
        'Advanced VBT (Velocity Based Training) metrics',
        'Offline persistence and agile Auth with Firebase',
        'Real-time global leaderboards'
      ],
      githubUrl: URLS.digigym.github
    },
    {
      id: 'corner-click',
      title: 'Corner Click - ITF Tournament App',
      summary: 'A comprehensive web application designed for managing ITF Taekwondo tournaments with live, low-latency scoring.',
      image: '/images/corner_click_cover.png',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Real-time', 'Vite'],
      features: [
        'Bracket management with seeding and byes',
        'Live, low-latency scoring interface for Corner Referees',
        'Role-based access control and frictionless Judge login via PIN',
        'Strict adherence to official ITF Sparring Rules (V2026-1)'
      ],
      githubUrl: URLS.cornerClick.github,
      youtubeUrl: URLS.cornerClick.youtube
    },
    {
      id: 'gupcheck',
      title: 'GupCheck - Digital Pre-evaluations',
      summary: 'A web application designed for ITF Taekwondo schools that digitalizes and centralizes pre-evaluations for Gup (colored belt) students. Replaces paper notes with a unified dashboard.',
      image: '/images/gupcheck_cover.png',
      tags: ['Astro', 'React', 'Firebase', 'Auth', 'Firestore'],
      features: [
        'Mobile-first feedback system for Black Belt evaluators in the Dojang',
        'Unified Dashboard for the Sabum-Nim with consolidated evaluations',
        'Role-based access using Firebase Auth Custom Claims',
        'Comprehensive Audit Logs for system actions'
      ],
      githubUrl: URLS.gupcheck.github
    },
    {
      id: 'fenix-web',
      title: 'Fenix Web',
      summary: 'Official institutional website for Fenix ITF Taekwondo School based in Argentina, providing information about classes, locations, and events.',
      image: '/images/logo-fenix-web.png',
      tags: ['React', 'Web', 'Tailwind CSS'],
      features: [
        'Institutional presentation and school information',
        'Modern, responsive UI/UX tailored for students and parents',
        'Integration with social networks and contact forms'
      ],
      githubUrl: URLS.fenixWeb.github
    },
    {
      id: 'home-media-hub',
      title: 'Home Media & Automation Center',
      summary: 'A cost-effective, secure, and professional smart home hub built on legacy hardware utilizing a containerized architecture with Docker.',
      image: '/images/automate_cover.png',
      tags: ['Docker', 'Home Assistant', 'Node-RED', 'Nginx', 'Prometheus', 'Grafana'],
      features: [
        'Hardware Upcycling for legacy systems',
        'Fully isolated services using Docker Compose',
        'Secure reverse proxy with Nginx and Tailscale',
        'Real-time metrics with Prometheus & Grafana'
      ],
      githubUrl: URLS.homeMediaHub.github
    }
  ],
  es: [
    {
      id: 'digigym',
      title: 'DigiGYM - El Gimnasio Inteligente',
      summary: 'Digitalización de bajo costo del peso libre mediante Visión Artificial e IoT para democratizar el fitness inteligente en gimnasios de barrio.',
      image: '/images/digigym_cover.png',
      tags: ['React', 'Vite', 'Firebase', 'Python', 'OpenCV', 'IoT'],
      features: [
        'Edge Computing con visión por computadora para trackeo en tiempo real',
        'Métricas VBT (Velocity Based Training) avanzadas',
        'Persistencia Offline y Auth ágil con Firebase',
        'Leaderboards globales en tiempo real'
      ],
      githubUrl: URLS.digigym.github
    },
    {
      id: 'corner-click',
      title: 'Corner Click - App de Torneos ITF',
      summary: 'Una aplicación web integral diseñada para gestionar torneos de Taekwondo ITF con puntuación en vivo y de baja latencia.',
      image: '/images/corner_click_cover.png',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Real-time', 'Vite'],
      features: [
        'Gestión de llaves (brackets) con siembra (seeding) y byes',
        'Interfaz de puntuación en vivo y de baja latencia para Jueces de Esquina',
        'Control de acceso basado en roles e inicio de sesión sin fricción vía PIN',
        'Adherencia estricta a las Reglas Oficiales de Combate ITF (V2026-1)'
      ],
      githubUrl: URLS.cornerClick.github,
      youtubeUrl: URLS.cornerClick.youtube
    },
    {
      id: 'gupcheck',
      title: 'GupCheck - Pre-evaluaciones Digitales',
      summary: 'Aplicación web diseñada para escuelas de Taekwondo ITF que digitaliza y centraliza las pre-evaluaciones para estudiantes Gup (cinturones de color). Reemplaza las notas en papel.',
      image: '/images/gupcheck_cover.png',
      tags: ['Astro', 'React', 'Firebase', 'Auth', 'Firestore'],
      features: [
        'Sistema de feedback mobile-first para evaluadores Cinturones Negros en el Dojang',
        'Dashboard unificado para el Sabum-Nim con evaluaciones consolidadas',
        'Control de acceso por roles usando Firebase Auth Custom Claims',
        'Registros de auditoría exhaustivos para acciones del sistema'
      ],
      githubUrl: URLS.gupcheck.github
    },
    {
      id: 'fenix-web',
      title: 'Fenix Web',
      summary: 'Sitio web institucional oficial para la Escuela de Taekwondo ITF Fenix en Argentina, brindando información sobre clases, sedes y eventos.',
      image: '/images/logo-fenix-web.png',
      tags: ['React', 'Web', 'Tailwind CSS'],
      features: [
        'Presentación institucional e información de la escuela',
        'UI/UX moderno y responsivo pensado para alumnos y padres',
        'Integración con redes sociales y formularios de contacto'
      ],
      githubUrl: URLS.fenixWeb.github
    },
    {
      id: 'home-media-hub',
      title: 'Home Media & Automation Center',
      summary: 'Un hub de hogar inteligente rentable, seguro y profesional construido sobre hardware heredado utilizando una arquitectura en contenedores con Docker.',
      image: '/images/automate_cover.png',
      tags: ['Docker', 'Home Assistant', 'Node-RED', 'Nginx', 'Prometheus', 'Grafana'],
      features: [
        'Reutilización de hardware para sistemas heredados',
        'Servicios completamente aislados usando Docker Compose',
        'Proxy inverso seguro con Nginx y Tailscale',
        'Métricas en tiempo real con Prometheus y Grafana'
      ],
      githubUrl: URLS.homeMediaHub.github
    }
  ]
};
