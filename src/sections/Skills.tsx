import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { Database, Layout, Server, Settings, Zap } from 'lucide-react';
import { SkillBadge } from '../components/SkillBadge';

export const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.backend'),
      icon: <Server className="text-blue-500 mb-4" size={32} />,
      color: 'rgba(59,130,246,0.6)',
      skills: ['Java', 'Spring Boot', 'C#', 'Node.js']
    },
    {
      title: t('skills.databases'),
      icon: <Database className="text-purple-500 mb-4" size={32} />,
      color: 'rgba(168,85,247,0.6)',
      skills: ['MongoDB', 'MySQL', 'Redis', 'PostgreSQL']
    },
    {
      title: t('skills.frontend'),
      icon: <Layout className="text-pink-500 mb-4" size={32} />,
      color: 'rgba(236,72,153,0.6)',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'TailwindCSS']
    },
    {
      title: t('skills.tools'),
      icon: <Settings className="text-slate-500 mb-4" size={32} />,
      color: 'rgba(100,116,139,0.5)',
      skills: ['Git', 'NPM', 'Docker', 'Kubernetes', 'Linux']
    },
    {
      title: t('skills.specialties'),
      icon: <Zap className="text-yellow-500 mb-4" size={32} />,
      color: 'rgba(234,179,8,0.6)',
      skills: ['Programación Asíncrona', 'Optimización de Rendimiento', 'Sistemas Concurrentes']
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative bg-slate-100/50 dark:bg-dark-800/50">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title={t('skills.title')} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <GlassCard key={idx} delay={idx * 0.1} glowColor={category.color} className="flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 border-none">
              {category.icon}
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map(skill => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};