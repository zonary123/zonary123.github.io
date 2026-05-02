import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { SectionWrapper } from '../components/SectionWrapper';
import { Code2 } from 'lucide-react';

export const TechnicalExperience = () => {
  const { t } = useTranslation();
  const bullets = t('experience.bullets', { returnObjects: true }) as string[];

  return (
    <SectionWrapper id="experience" maxWidth="max-w-5xl">
      <SectionTitle
        title={t('experience.title')}
        accentColor="#569CD6"
        accentColorTo="#9CDCFE"
      />

      <div className="mt-8">
        <GlassCard delay={0.2}>
          <p className="text-body text-lg text-editor-muted mb-6">
            {t('experience.description')}
          </p>

          <ul className="space-y-4">
            {Array.isArray(bullets) &&
              bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Code2 className="text-syntax-blue shrink-0 mt-1" size={20} />
                  <span className="text-body text-editor-fg">{bullet}</span>
                </li>
              ))}
          </ul>
        </GlassCard>
      </div>
    </SectionWrapper>
  );
};
