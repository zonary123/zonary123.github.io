import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { formationData } from '../data/formation';
import { GraduationCap, ShieldCheck, MonitorPlay, Network, HelpCircle } from 'lucide-react';

export const Formation = () => {
  const { t } = useTranslation();

  const getIcon = (iconName: string, size = 24) => {
    switch(iconName) {
      case 'network': return <Network size={size} />;
      case 'graduation': return <GraduationCap size={size} />;
      case 'game': return <MonitorPlay size={size} />;
      case 'shield': return <ShieldCheck size={size} />;
      default: return <GraduationCap size={size} />;
    }
  };

  const getFormationGlow = (iconName: string) => {
    switch(iconName) {
      case 'shield': return 'rgba(34,197,94,0.6)'; // text-green-500
      case 'game': return 'rgba(236,72,153,0.6)'; // text-pink-500
      case 'graduation': return 'rgba(168,85,247,0.6)'; // text-purple-500
      case 'network': return 'rgba(59,130,246,0.6)'; // text-blue-500
      default: return 'rgba(59,130,246,0.6)';
    }
  };

  return (
    <section id="formation" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle title={t('formation.title')} subtitle={t('formation.description')} />
        
        <div className="relative mt-16">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-200 dark:bg-slate-700" />
          
          <div className="space-y-12">
            {formationData.map((item, index) => (
              <div key={item.id} className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-5/12 hidden md:block" />
                
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full glass shadow-lg mb-4 md:mb-0">
                  <div className={`p-2 rounded-full ${item.bg} ${item.color}`}>
                    {getIcon(item.iconName)}
                  </div>
                </div>
                
                <div className="md:w-5/12 w-full z-10">
                  <GlassCard 
                    delay={index * 0.1 + 0.2} 
                    glowColor={getFormationGlow(item.iconName)}
                    className="relative hover:-translate-y-2 transition-transform duration-300 group overflow-visible border-none"
                  >
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {item.startYear} - {item.endYear === 'present' ? t('common.present') : item.endYear}
                    </span>
                    
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg md:text-xl font-bold">{t(item.titleKey)}</h3>
                      {item.descriptionKey && (
                        <div className="relative group/tooltip flex items-center cursor-help">
                          <HelpCircle size={18} className="text-slate-400 group-hover/tooltip:text-primary-500 transition-colors" />
                          
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[280px] sm:w-[320px] p-4 bg-slate-900 dark:bg-slate-800 text-slate-100 text-sm leading-relaxed rounded-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20 shadow-2xl pointer-events-none text-center">
                            {t(item.descriptionKey)}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900 dark:border-t-slate-800" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <h4 className="text-slate-600 dark:text-slate-400 font-medium mt-1">{t(item.institutionKey)}</h4>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};