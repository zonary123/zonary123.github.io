import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { SectionWrapper } from '../components/SectionWrapper';
import { formationData } from '../data/formation';
import { getIcon } from '../lib/icons';
import { HelpCircle } from 'lucide-react';

export const Formation = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="formation" maxWidth="max-w-5xl">
      <SectionTitle
        title={t('formation.title')}
        subtitle={t('formation.description')}
      />

      <div className="relative mt-12">
        {/* Main vertical timeline line - thicker and more visible */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-formation via-accent-formation/60 to-accent-formation/20 rounded-full shadow-lg shadow-accent-formation/20" />

        {/* Mobile vertical line */}
        <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-formation via-accent-formation/60 to-accent-formation/20 rounded-full" />

        <div className="space-y-16">
          {formationData.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-5/12" />

              {/* Center node with horizontal connector */}
              <div className="relative z-10 flex items-center justify-center">
                {/* Horizontal connecting line to card - visible on desktop */}
                <div
                  className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 w-12 bg-gradient-to-r from-accent-formation to-accent-formation/30 ${index % 2 === 0 ? 'right-full mr-6' : 'left-full ml-6'}`}
                />

                {/* Node circle */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full glass shadow-xl ring-4 ring-accent-formation/20 border-2 border-accent-formation/40">
                  <div className="p-2.5 rounded-full bg-accent-formation/20 text-accent-formation">
                    {getIcon(item.iconName)}
                  </div>
                </div>
              </div>

              {/* Card with connecting styling */}
              <div className="w-full md:w-5/12 mt-4 md:mt-0 z-10">
                <GlassCard
                  delay={index * 0.1 + 0.2}
                  glowColor={item.glowColor}
                  className="relative hover:-translate-y-2 transition-transform duration-300 group overflow-visible border-l-4 border-l-accent-formation"
                >
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-accent-formation/10 text-accent-formation">
                    {item.startYear} -{' '}
                    {item.endYear === 'present'
                      ? t('common.present')
                      : item.endYear}
                  </span>

                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-heading text-lg">{t(item.titleKey)}</h3>
                    {item.descriptionKey && (
                      <div className="relative group/tooltip flex items-center cursor-help">
                        <HelpCircle
                          size={18}
                          className="text-editor-muted group-hover/tooltip:text-accent-formation transition-colors"
                        />

                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[280px] sm:w-[320px] p-4 bg-editor-bg border border-editor-border text-editor-fg text-sm leading-relaxed rounded-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20 shadow-2xl pointer-events-none text-center">
                          {t(item.descriptionKey)}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-editor-bg" />
                        </div>
                      </div>
                    )}
                  </div>

                  <h4 className="text-body text-sm text-editor-muted mt-1">
                    {t(item.institutionKey)}
                  </h4>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
