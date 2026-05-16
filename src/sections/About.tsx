import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { SectionWrapper } from '../components/SectionWrapper';
import { Database, Zap, Layers } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="about">
      <SectionTitle
        title={t('about.title')}
      />

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Main description card */}
        <GlassCard
          delay={0.2}
          className="h-full border-l-4 border-l-accent-about"
        >
          <div className="space-y-6 text-base text-editor-fg">
            <p className="text-body">{t('about.description1')}</p>
            <p className="text-body">{t('about.description2')}</p>
            <p className="text-body">{t('about.description3')}</p>
            <p className="text-body font-medium text-accent-about">
              {t('about.description4')}
            </p>
          </div>
        </GlassCard>

        {/* Feature cards - now directly in grid, not nested */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1">
          <GlassCard
            delay={0.3}
            glowColor="rgba(86,156,214,0.4)"
            className="border-l-4 border-l-accent-about group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-accent-about/10 ring-1 ring-accent-about/30 group-hover:bg-accent-about/20 transition-colors">
                <Database className="text-accent-about" size={28} />
              </div>
              <h3 className="text-heading text-xl text-accent-about">
                {t('about.card_backend_title')}
              </h3>
            </div>
            <p className="text-body text-editor-fg">
              {t('about.card_backend_desc')}
            </p>
          </GlassCard>

          <GlassCard
            delay={0.4}
            glowColor="rgba(78,201,176,0.4)"
            className="border-l-4 border-l-accent-formation group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-accent-formation/10 ring-1 ring-accent-formation/30 group-hover:bg-accent-formation/20 transition-colors">
                <Zap className="text-accent-formation" size={28} />
              </div>
              <h3 className="text-heading text-xl text-accent-formation">
                {t('about.card_performance_title')}
              </h3>
            </div>
            <p className="text-body text-editor-fg">
              {t('about.card_performance_desc')}
            </p>
          </GlassCard>

          <GlassCard
            delay={0.5}
            glowColor="rgba(220,220,170,0.4)"
            className="border-l-4 border-l-accent-skills group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-accent-skills/10 ring-1 ring-accent-skills/30 group-hover:bg-accent-skills/20 transition-colors">
                <Layers className="text-accent-skills" size={28} />
              </div>
              <h3 className="text-heading text-xl text-accent-skills">
                {t('about.card_fullstack_title')}
              </h3>
            </div>
            <p className="text-body text-editor-fg">
              {t('about.card_fullstack_desc')}
            </p>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  );
};
