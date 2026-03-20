export interface FormationItem {
  id: string;
  titleKey: string;
  institutionKey: string;
  startYear: string;
  endYear: string | 'present';
  descriptionKey?: string;
  iconName: 'network' | 'graduation' | 'game' | 'shield';
  color: string;
  bg: string;
  glowColor: string;
}

export const formationData: FormationItem[] = [
  {
    id: 'cybersecurity',
    titleKey: 'formation.items.cybersecurity',
    institutionKey: 'formation.institutions.cybersecurity',
    descriptionKey: 'formation.explanations.cybersecurity',
    startYear: '2025',
    endYear: 'present',
    iconName: 'shield',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    glowColor: 'rgba(34,197,94,0.6)',
  },
  {
    id: 'videogames',
    titleKey: 'formation.items.videogames',
    institutionKey: 'formation.institutions.videogames',
    descriptionKey: 'formation.explanations.videogames',
    startYear: '2024',
    endYear: '2025',
    iconName: 'game',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    glowColor: 'rgba(236,72,153,0.6)',
  },
  {
    id: 'dam',
    titleKey: 'formation.items.dam',
    institutionKey: 'formation.institutions.dam',
    descriptionKey: 'formation.explanations.dam',
    startYear: '2022',
    endYear: '2024',
    iconName: 'graduation',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    glowColor: 'rgba(168,85,247,0.6)',
  },
  {
    id: 'smr',
    titleKey: 'formation.items.smr',
    institutionKey: 'formation.institutions.smr',
    descriptionKey: 'formation.explanations.smr',
    startYear: '2020',
    endYear: '2022',
    iconName: 'network',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    glowColor: 'rgba(59,130,246,0.6)',
  },
];
