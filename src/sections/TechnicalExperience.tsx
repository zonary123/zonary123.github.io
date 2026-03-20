import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { SectionWrapper } from '../components/SectionWrapper';
import { CheckCircle2, Cpu } from 'lucide-react';

const APPROACH_TAG_KEYS = ['optimization', 'scalability', 'async', 'architecture'];

export const TechnicalExperience = () => {
  const { t } = useTranslation();
  const bullets = t('experience.bullets', { returnObjects: true }) as string[];

  return (
    <SectionWrapper id="experience" maxWidth="max-w-5xl">
      <SectionTitle title={t('experience.title')} />
      
      <div className="grid md:grid-cols-5 gap-8 items-start">
        
        <div className="md:col-span-3 space-y-6">
          <GlassCard delay={0.2}>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              {t('experience.description')}
            </p>
            
            <ul className="space-y-4">
              {Array.isArray(bullets) && bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary-500 shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 dark:text-slate-300">{bullet}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div className="md:col-span-2">
          <GlassCard delay={0.4} className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-primary-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary-500/20 rounded-lg text-primary-500">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold">{t('experience.approach_title')}</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              {t('experience.approach')}
            </p>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {APPROACH_TAG_KEYS.map(tagKey => (
                <span key={tagKey} className="px-3 py-1 text-xs font-semibold bg-white/50 dark:bg-dark-900/50 rounded-md text-primary-600 dark:text-primary-400">
                  {t(`experience.tags.${tagKey}`)}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
        
      </div>
    </SectionWrapper>
  );
};