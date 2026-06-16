export interface Project {
  id: string;
  title: string;
  summary: string;
  image: string;
  tags: string[];
  features: string[];
}

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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ]
};
