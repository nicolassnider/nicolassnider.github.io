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
