
import { Project, Skill, NavItem } from './types';

export const SITE_CONFIG = {
  name: "Aarush Dayal",
  role: "Full Stack ML Engineer",
  bio: "I build digital experiences that bleed excellence. Specialized in high-performance Machine Learning applications and Reliable systems. Based in New Delhi , open for global remote work.",
  email: "aarushdayal@hotmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Nexus',
    description: 'A decentralized trading platform with real-time websocket data visualization using D3.js and WebGL.',
    tags: ['React', 'WebGL', 'Node.js', 'Socket.io'],
    imageUrl: 'https://picsum.photos/800/600?grayscale&blur=2',
    github: '#',
    link: '#'
  },
  {
    id: '2',
    title: 'Crimson Core',
    description: 'Enterprise-grade system for high-throughput data analysis and visualization for legal documents.',
    tags: ['TypeScript', 'Node.js', 'Python', 'FastAPI'],
    imageUrl: 'https://picsum.photos/800/601?grayscale&blur=2',
    github: '#',
    link: '#'
  },
  {
    id: '3',
    title: 'Void Walker Engine',
    description: 'A custom 3D game engine built for the web, focusing on atmospheric lighting and shadow rendering.',
    tags: ['Three.js', 'React-Three-Fiber', 'GLSL'],
    imageUrl: 'https://picsum.photos/800/602?grayscale&blur=2',
    github: '#',
    link: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 98, category: 'frontend' },
  { name: 'TypeScript', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'Node.js', level: 88, category: 'backend' },
  { name: 'n8n', level: 90, category: 'backend' },
  { name: 'PostgreSQL', level: 85, category: 'backend' },
  { name: 'Docker ', level: 80, category: 'tools' },
  { name: 'Git / CI/CD', level: 90, category: 'tools' },
];
