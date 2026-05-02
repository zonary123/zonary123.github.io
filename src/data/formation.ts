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
    color: 'text-syntax-green',
    bg: 'bg-[#6A9955]/10',
    glowColor: 'rgba(106,153,85,0.6)',
  },
  {
    id: 'videogames',
    titleKey: 'formation.items.videogames',
    institutionKey: 'formation.institutions.videogames',
    descriptionKey: 'formation.explanations.videogames',
    startYear: '2024',
    endYear: '2025',
    iconName: 'game',
    color: 'text-syntax-magenta',
    bg: 'bg-[#C586C0]/10',
    glowColor: 'rgba(197,134,192,0.6)',
  },
  {
    id: 'dam',
    titleKey: 'formation.items.dam',
    institutionKey: 'formation.institutions.dam',
    descriptionKey: 'formation.explanations.dam',
    startYear: '2022',
    endYear: '2024',
    iconName: 'graduation',
    color: 'text-syntax-purple',
    bg: 'bg-[#B267E6]/10',
    glowColor: 'rgba(178,103,230,0.6)',
  },
  {
    id: 'smr',
    titleKey: 'formation.items.smr',
    institutionKey: 'formation.institutions.smr',
    descriptionKey: 'formation.explanations.smr',
    startYear: '2020',
    endYear: '2022',
    iconName: 'network',
    color: 'text-syntax-blue',
    bg: 'bg-[#569CD6]/10',
    glowColor: 'rgba(86,156,214,0.6)',
  },
];
