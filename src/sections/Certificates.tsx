import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { SectionWrapper } from '../components/SectionWrapper';
import { certificatesData } from '../data/certificates';
import { Award, ExternalLink } from 'lucide-react';

export const Certificates = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="certificates">
      <SectionTitle title={t('certificates.title')} subtitle={t('certificates.description')} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {certificatesData.map((cert, index) => (
          <GlassCard 
            key={cert.id} 
            delay={0.2 + index * 0.1} 
            glowColor={cert.glowColor}
            className="flex flex-col h-full hover:border-accent-500/50 transition-all duration-300 group hover:-translate-y-2 border-none"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-accent-500/10 text-accent-500 shrink-0 group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>
              <div className="flex-1 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-1 group-hover:text-accent-400 transition-colors">
                  {t(cert.titleKey)}
                </h3>
                <h4 className="text-base text-slate-600 dark:text-slate-400 font-medium mb-4">
                  {t(cert.issuerKey)}
                </h4>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {t(cert.dateKey)}
                  </span>
                  {cert.url && cert.url !== '#' && (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-accent-500 hover:text-accent-400 transition-colors">
                      {t('certificates.view')} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};
