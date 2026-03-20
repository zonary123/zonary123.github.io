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

export const projectsData: Project[] = [
  {
    id: 'cobblemonpatches',
    title: 'CobblemonPatches',
    description: 'Mod que corrige errores y mejora el rendimiento de Cobblemon.',
    technologies: ['Java'],
    category: 'minecraft',
    githubUrl: 'https://github.com/zonary123/CobblemonPatches'
  },
  {
    id: 'ultrautils',
    title: 'UltraUtils',
    description: 'Librería core con utilidades compartidas para mis mods de Minecraft.',
    technologies: ['Java'],
    category: 'minecraft',
    githubUrl: 'https://github.com/zonary123/CobbleUtils'
  },
  {
    id: 'wondertrade',
    title: 'WonderTrade',
    description: 'Un mod para intercambiar Pokémon con otros jugadores de forma aleatoria.',
    technologies: ['Java', 'MongoDB'],
    category: 'minecraft',
    githubUrl: 'https://github.com/zonary123/WonderTrade'
  },
  {
    id: 'ultrabattlepass',
    title: 'UltraBattlePass',
    description: 'Un mod que implementa un sistema de Battle Pass típico de juegos como Fortnite o Apex Legends.',
    technologies: ['Java', 'MongoDB'],
    category: 'minecraft'
  }
];