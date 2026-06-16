export interface NavLink {
  id: string;
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { id: 'experience', name: 'Experience', href: '#experience' },
  { id: 'projects', name: 'Projects', href: '#projects' },
  { id: 'skills', name: 'Skills', href: '#skills' },
  { id: 'education', name: 'Education', href: '#education' },
];
