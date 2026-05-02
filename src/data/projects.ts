export type Category = 'minecraft' | 'backend' | 'web' | 'experiments';

export const CATEGORY_GLOW: Record<string, string> = {
  minecraft: 'rgba(206,145,120,0.5)', // projects orange
  backend: 'rgba(86,156,214,0.5)', // about blue
  web: 'rgba(197,134,192,0.5)', // experience magenta
  experiments: 'rgba(220,220,170,0.5)', // skills yellow
};

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  category: Category;
  githubUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'cobblemonpatches',
    title: 'CobblemonPatches',
    description: '',
    technologies: ['Java'],
    category: 'minecraft',
    githubUrl: 'https://github.com/zonary123/CobblemonPatches',
  },
  {
    id: 'ultrautils',
    title: 'UltraUtils',
    description: '',
    technologies: ['Java'],
    category: 'minecraft',
    githubUrl: 'https://github.com/zonary123/CobbleUtils',
  },
  {
    id: 'wondertrade',
    title: 'WonderTrade',
    description: '',
    technologies: ['Java', 'MongoDB'],
    category: 'minecraft',
    githubUrl: 'https://github.com/zonary123/WonderTrade',
  },
  {
    id: 'ultrabattlepass',
    title: 'UltraBattlePass',
    description: '',
    technologies: ['Java', 'MongoDB'],
    category: 'minecraft',
  },
];
