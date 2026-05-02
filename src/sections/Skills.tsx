import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { SectionWrapper } from '../components/SectionWrapper';
import { Database, Layout, Server, Settings, Zap } from 'lucide-react';
import { SkillBadge } from '../components/SkillBadge';

export const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.backend'),
      icon: <Server className="text-accent-about mb-4" size={32} />,
      color: 'rgba(86,156,214,0.5)',
      border: 'border-l-accent-about',
      skills: ['Java', 'Spring Boot', 'C#', 'Node.js'],
    },
    {
      title: t('skills.databases'),
      icon: <Database className="text-accent-formation mb-4" size={32} />,
      color: 'rgba(78,201,176,0.5)',
      border: 'border-l-accent-formation',
      skills: ['MongoDB', 'MySQL', 'Redis', 'PostgreSQL'],
    },
    {
      title: t('skills.frontend'),
      icon: <Layout className="text-accent-projects mb-4" size={32} />,
      color: 'rgba(206,145,120,0.5)',
      border: 'border-l-accent-projects',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'React',
        'TailwindCSS',
      ],
    },
    {
      title: t('skills.tools'),
      icon: <Settings className="text-editor-muted mb-4" size={32} />,
      color: 'rgba(133,133,133,0.4)',
      border: 'border-l-editor-muted',
      skills: ['Git', 'NPM', 'Docker', 'Kubernetes', 'Linux', 'Windows'],
    },
    {
      title: t('skills.specialties'),
      icon: <Zap className="text-accent-skills mb-4" size={32} />,
      color: 'rgba(220,220,170,0.5)',
      border: 'border-l-accent-skills',
      skills: [
        t('skills.specialty_items.async'),
        t('skills.specialty_items.performance'),
        t('skills.specialty_items.concurrent'),
      ],
    },
  ];

  return (
    <SectionWrapper id="skills">
      <SectionTitle title={t('skills.title')} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <GlassCard
            key={idx}
            delay={idx * 0.1}
            glowColor={category.color}
            className={`flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 border-l-4 ${category.border} overflow-visible`}
          >
            {category.icon}
            <h3 className="text-heading text-xl mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};
