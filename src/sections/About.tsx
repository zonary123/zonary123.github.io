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
      <SectionTitle title={t('about.title')} />

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
        <div className="grid gap-4">
          <GlassCard
            delay={0.3}
            glowColor="rgba(86,156,214,0.5)"
            className="hover:-translate-y-1 transition-transform border-l-4 border-l-accent-about"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-accent-about/20 ring-2 ring-accent-about/30">
                <Database className="text-accent-about" size={28} />
              </div>
              <h3 className="text-heading text-lg text-accent-about">
                {t('about.card_backend_title')}
              </h3>
            </div>
            <p className="text-body text-editor-muted">
              {t('about.card_backend_desc')}
            </p>
          </GlassCard>

          <GlassCard
            delay={0.4}
            glowColor="rgba(78,201,176,0.5)"
            className="hover:-translate-y-1 transition-transform border-l-4 border-l-accent-formation"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-accent-formation/20 ring-2 ring-accent-formation/30">
                <Zap className="text-accent-formation" size={28} />
              </div>
              <h3 className="text-heading text-lg text-accent-formation">
                {t('about.card_performance_title')}
              </h3>
            </div>
            <p className="text-body text-editor-muted">
              {t('about.card_performance_desc')}
            </p>
          </GlassCard>

          <GlassCard
            delay={0.5}
            glowColor="rgba(220,220,170,0.5)"
            className="hover:-translate-y-1 transition-transform border-l-4 border-l-accent-skills"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-accent-skills/20 ring-2 ring-accent-skills/30">
                <Layers className="text-accent-skills" size={28} />
              </div>
              <h3 className="text-heading text-lg text-accent-skills">
                {t('about.card_fullstack_title')}
              </h3>
            </div>
            <p className="text-body text-editor-muted">
              {t('about.card_fullstack_desc')}
            </p>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  );
};
