import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { workExperienceData } from '../data/experience';
import { Briefcase, Gamepad2, Server, Monitor, Code } from 'lucide-react';
import { SkillBadge } from '../components/SkillBadge';

export const WorkExperience = () => {
  const { t } = useTranslation();

  const getExperienceGlow = (idx: number) => {
    const colors = ['rgba(6,182,212,0.6)', 'rgba(168,85,247,0.6)']; // Cyan, Purple
    return colors[idx % colors.length];
  };

  const getIcon = (iconName: string, size = 28) => {
    switch(iconName) {
      case 'game': return <Gamepad2 size={size} />;
      case 'server': return <Server size={size} />;
      case 'monitor': return <Monitor size={size} />;
      case 'code': return <Code size={size} />;
      default: return <Briefcase size={size} />;
    }
  };

  return (
    <section id="workExperience" className="py-24 px-6 relative bg-slate-100/50 dark:bg-dark-800/50">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle title={t('workExperience.title')} subtitle={t('workExperience.description')} />
        
        <div className="relative mt-16">
          {/* Línea central del timeline en escritorio */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-200 dark:bg-slate-700" />
          
          <div className="space-y-12">
            {workExperienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
              <div key={item.id} className={`flex flex-col md:flex-row items-center justify-between w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-5/12 hidden md:block" />
                
                {/* Timeline Icon */}
                <div className="z-10 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-3xl md:rounded-full glass shadow-xl shadow-primary-500/20 mb-6 md:mb-0 border border-primary-500/30 group-hover:scale-110 transition-transform">
                  <div className="p-3 bg-gradient-to-br from-primary-500/10 to-accent-500/10 text-primary-500 rounded-2xl md:rounded-full">
                    {getIcon(item.iconName)}
                  </div>
                </div>
                
                <div className="md:w-5/12 w-full z-10">
                  <GlassCard 
                    delay={0.2 + index * 0.1} 
                    glowColor={getExperienceGlow(index)}
                    className="relative overflow-visible group hover:-translate-y-2 transition-transform duration-300 border-none"
                  >
                    <div className="flex flex-col mb-4 gap-2">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
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
                  </GlassCard>
                </div>
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
};
