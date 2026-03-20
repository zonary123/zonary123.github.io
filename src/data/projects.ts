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
    description: 'Un mod diseñado para parchear errores y problemas de optimización en Cobblemon.',
    technologies: ['Java'],
    category: 'minecraft',
    githubUrl: 'https://github.com/zonary123/CobblemonPatches'
  },
  {
    id: 'ultrautils',
    title: 'UltraUtils',
    description: 'Es mi mod core para mods en minecraft, con muchas funciones útiles.',
    technologies: ['Java'],
    category: 'minecraft',
    githubUrl: 'https://github.com/zonary123/CobbleUtils'
  },
  {
    id: 'wondertrade',
    title: 'WonderTrade',
    description: 'Un mod para intercambiar pokemones con otros jugadores.',
    technologies: ['Java', 'MongoDB'],
    category: 'minecraft',
    githubUrl: 'https://github.com/zonary123/WonderTrade'
  },
  {
    id: 'ultrabattlepass',
    title: 'UltraBattlePass',
    description: 'Un mod que inserta un sistema de battlepass tipico de juegos como fortnite o apex legends',
    technologies: ['Java', 'MongoDB'],
    category: 'minecraft'
  }
];