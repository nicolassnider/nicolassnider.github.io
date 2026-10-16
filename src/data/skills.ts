interface SkillItem {
  name: string;
  levelKey: 'skills.mastery.advanced' | 'skills.mastery.proficient';
  percentage: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: SkillItem[];
}

export const skillCategories: Record<'en' | 'es', SkillCategory[]> = {
  en: [
    {
      id: 'backend',
      title: 'Backend & Architecture',
      skills: [
        { name: '.NET (Core / Framework / C#)', levelKey: 'skills.mastery.advanced', percentage: 95 },
        { name: 'RESTful APIs & Microservices', levelKey: 'skills.mastery.advanced', percentage: 92 },
        { name: 'Database Design & SQL (SQL Server / PostgreSQL)', levelKey: 'skills.mastery.advanced', percentage: 90 },
        { name: 'SOLID Principles & Design Patterns', levelKey: 'skills.mastery.advanced', percentage: 95 },
        { name: 'Unit & Integration Testing', levelKey: 'skills.mastery.proficient', percentage: 85 }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend & UI',
      skills: [
        { name: 'React & Vite', levelKey: 'skills.mastery.advanced', percentage: 90 },
        { name: 'Astro & Static Sites', levelKey: 'skills.mastery.advanced', percentage: 90 },
        { name: 'TypeScript & JavaScript', levelKey: 'skills.mastery.proficient', percentage: 88 },
        { name: 'Tailwind CSS', levelKey: 'skills.mastery.advanced', percentage: 92 },
        { name: 'Responsive UI/UX & Accessibility', levelKey: 'skills.mastery.proficient', percentage: 85 }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud, DevOps & Systems',
      skills: [
        { name: 'Docker & Containerization', levelKey: 'skills.mastery.proficient', percentage: 85 },
        { name: 'Firebase (Auth, Firestore, Realtime)', levelKey: 'skills.mastery.advanced', percentage: 90 },
        { name: 'Linux Server Administration', levelKey: 'skills.mastery.proficient', percentage: 82 },
        { name: 'Git & Gitflow Methodology', levelKey: 'skills.mastery.advanced', percentage: 92 },
        { name: 'Nginx, Reverse Proxies & Tailscale', levelKey: 'skills.mastery.proficient', percentage: 84 }
      ]
    },
    {
      id: 'emerging',
      title: 'AI, IoT & Specialized',
      skills: [
        { name: 'AI & LLMs (Gemini, Claude, Vertex AI)', levelKey: 'skills.mastery.proficient', percentage: 85 },
        { name: 'Python & Computer Vision (OpenCV)', levelKey: 'skills.mastery.proficient', percentage: 82 },
        { name: 'IoT & Edge Computing', levelKey: 'skills.mastery.proficient', percentage: 80 },
        { name: 'Home Automation (Home Assistant)', levelKey: 'skills.mastery.proficient', percentage: 88 }
      ]
    }
  ],
  es: [
    {
      id: 'backend',
      title: 'Backend y Arquitectura',
      skills: [
        { name: '.NET (Core / Framework / C#)', levelKey: 'skills.mastery.advanced', percentage: 95 },
        { name: 'APIs RESTful y Microservicios', levelKey: 'skills.mastery.advanced', percentage: 92 },
        { name: 'Diseño de Bases de Datos y SQL (SQL Server / PostgreSQL)', levelKey: 'skills.mastery.advanced', percentage: 90 },
        { name: 'Principios SOLID y Patrones de Diseño', levelKey: 'skills.mastery.advanced', percentage: 95 },
        { name: 'Pruebas Unitarias y de Integración', levelKey: 'skills.mastery.proficient', percentage: 85 }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend y UI',
      skills: [
        { name: 'React y Vite', levelKey: 'skills.mastery.advanced', percentage: 90 },
        { name: 'Astro y Sitios Estáticos', levelKey: 'skills.mastery.advanced', percentage: 90 },
        { name: 'TypeScript y JavaScript', levelKey: 'skills.mastery.proficient', percentage: 88 },
        { name: 'Tailwind CSS', levelKey: 'skills.mastery.advanced', percentage: 92 },
        { name: 'UI/UX Responsivo y Accesibilidad', levelKey: 'skills.mastery.proficient', percentage: 85 }
      ]
    },
    {
      id: 'cloud-devops',
      title: 'Cloud, DevOps y Sistemas',
      skills: [
        { name: 'Docker y Contenerización', levelKey: 'skills.mastery.proficient', percentage: 85 },
        { name: 'Firebase (Auth, Firestore, Realtime)', levelKey: 'skills.mastery.advanced', percentage: 90 },
        { name: 'Administración de Servidores Linux', levelKey: 'skills.mastery.proficient', percentage: 82 },
        { name: 'Git y Metodología Gitflow', levelKey: 'skills.mastery.advanced', percentage: 92 },
        { name: 'Nginx, Proxies Inversos y Tailscale', levelKey: 'skills.mastery.proficient', percentage: 84 }
      ]
    },
    {
      id: 'emerging',
      title: 'IA, IoT y Especializadas',
      skills: [
        { name: 'IA y Modelos de Lenguaje (Gemini, Claude, Vertex AI)', levelKey: 'skills.mastery.proficient', percentage: 85 },
        { name: 'Python y Visión Artificial (OpenCV)', levelKey: 'skills.mastery.proficient', percentage: 82 },
        { name: 'IoT y Edge Computing', levelKey: 'skills.mastery.proficient', percentage: 80 },
        { name: 'Domótica (Home Assistant)', levelKey: 'skills.mastery.proficient', percentage: 88 }
      ]
    }
  ]
};

export const skills: Record<'en' | 'es', string[]> = {
  en: skillCategories.en.flatMap((cat) => cat.skills.map((s) => s.name)),
  es: skillCategories.es.flatMap((cat) => cat.skills.map((s) => s.name))
};
