export type Category = 'minecraft' | 'backend' | 'web' | 'experiments';

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

// export const projectsData: Project[] = [
//   {
//     id: 'cobblemon-sync',
//     title: 'Cobblemon Sync System',
//     description: 'Sistema avanzado de sincronización de datos de jugadores entre múltiples servidores de Minecraft usando Redis y MongoDB para asegurar consistencia en tiempo real.',
//     technologies: ['Java', 'Redis', 'MongoDB', 'Minecraft API'],
//     category: 'minecraft',
//     githubUrl: '#'
//   }
// ];

export const projectsData: Project[] = [
];