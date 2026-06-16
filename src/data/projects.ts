export interface Project {
  id: string;
  title: string;
  summary: string;
  image: string;
  tags: string[];
  features: string[];
}

export const projects: Project[] = [
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
    id: 'cornerclick',
    title: 'Corner Click - ITF Tournament App',
    summary: 'A comprehensive web application designed for managing ITF Taekwondo tournaments. Includes real-time scoring, bracket management, and frictionless judge logins.',
    image: '/images/corner_click_cover.png',
    tags: ['Astro', 'React', 'Node.js', 'Express', 'Firebase', 'Netlify'],
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
];
