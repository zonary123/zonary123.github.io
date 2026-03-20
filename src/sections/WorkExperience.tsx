import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { workExperienceData } from '../data/experience';
import { Briefcase } from 'lucide-react';
import { SkillBadge } from '../components/SkillBadge';

export const WorkExperience = () => {
  const { t } = useTranslation();

  const getExperienceGlow = (idx: number) => {
    const colors = ['rgba(6,182,212,0.6)', 'rgba(168,85,247,0.6)']; // Cyan, Purple
    return colors[idx % colors.length];
  };

  return (
    <section id="workExperience" className="py-24 px-6 relative bg-slate-100/50 dark:bg-dark-800/50">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle title={t('workExperience.title')} subtitle={t('workExperience.description')} />
        
        <div className="space-y-8 mt-16">
          {workExperienceData.map((item, index) => (
            <GlassCard 
              key={item.id} 
              delay={0.2 + index * 0.1} 
              glowColor={getExperienceGlow(index)}
              className="relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 border-none"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500" />
              <div className="flex flex-col md:flex-row gap-6 p-2">
                <div className="hidden md:flex items-start justify-center pt-2">
                  <div className="p-3 rounded-full bg-primary-500/10 text-primary-500 group-hover:scale-110 transition-transform">
                    <Briefcase size={28} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent-500">
                        {t(item.roleKey)}
                      </h3>
                      <h4 className="text-lg font-medium text-slate-700 dark:text-slate-300">
                        {t(item.companyKey)}
                      </h4>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 whitespace-nowrap h-fit">
                      {item.startYear} - {item.endYear === 'present' ? t('common.present') : item.endYear}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {t(item.descriptionKey)}
                  </p>
                  
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map(tech => (
                        <SkillBadge key={tech} skill={tech} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
