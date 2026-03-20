export interface ExperienceItem {
  id: string;
  roleKey: string;
  companyKey: string;
  startYear: string;
  endYear: string | 'present';
  descriptionKey: string;
  technologies: string[];
  iconName: string;
}

export const workExperienceData: ExperienceItem[] = [
  {
    id: 'air_institute',
    roleKey: 'workExperience.items.air_institute.role',
    companyKey: 'workExperience.items.air_institute.company',
    startYear: 'Mar 2024',
    endYear: 'Jun 2024',
    descriptionKey: 'workExperience.items.air_institute.description',
    technologies: ['Unity', 'C#', 'Desarrollo Interactivo'],
    iconName: 'game'
  },
  {
    id: 'heltica',
    roleKey: 'workExperience.items.heltica.role',
    companyKey: 'workExperience.items.heltica.company',
    startYear: 'Mar 2022',
    endYear: 'Jun 2022',
    descriptionKey: 'workExperience.items.heltica.description',
    technologies: ['Soporte IT', 'Windows', 'Hardware'],
    iconName: 'server'
  }
];
