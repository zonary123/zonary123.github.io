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
        accentColor="#4EC9B0"
        accentColorTo="#9CDCFE"
      />

      <div className="relative mt-12">
        {/* Main vertical timeline line - thicker and more visible */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-formation via-accent-formation/60 to-accent-formation/20 rounded-full shadow-lg shadow-accent-formation/20" />

        {/* Mobile vertical line */}
        {/* Mobile vertical line — left-7 = center of the w-14 node (56px / 2 = 28px) */}
        <div className="md:hidden absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-formation via-accent-formation/60 to-accent-formation/20 rounded-full" />

        <div className="space-y-28">
          {formationData.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex items-start md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-5/12" />

              {/* Center node with horizontal connector */}
              <div className="relative z-10 flex items-center justify-center">
                {/* Horizontal connecting line to card - visible on desktop */}
                <div
                  className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] w-24 bg-gradient-to-r from-accent-formation/80 to-accent-formation/20 ${index % 2 === 0 ? 'right-full mr-2' : 'left-full ml-2'}`}
                />

                {/* Node circle - solid bg so the vertical line runs cleanly between nodes */}
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-editor-bg shadow-xl ring-4 border-2"
                  style={{
                    borderColor: item.glowColor.replace(/[\d.]+\)$/, '0.6)'),
                    boxShadow: `0 0 0 4px ${item.glowColor.replace(/[\d.]+\)$/, '0.15)')}`,
                  }}
                >
                  <div
                    className="p-2.5 rounded-full"
                    style={{
                      backgroundColor: item.glowColor.replace(
                        /[\d.]+\)$/,
                        '0.15)',
                      ),
                      color: item.glowColor.replace(/[\d.]+\)$/, '0.9)'),
                    }}
                  >
                    {getIcon(item.iconName)}
                  </div>
                </div>
              </div>

              {/* Card with connecting styling */}
              <div className="flex-1 md:flex-none md:w-5/12 ml-4 md:ml-0 md:px-4 z-10">
                <GlassCard
                  delay={index * 0.1 + 0.2}
                  glowColor={item.glowColor}
                  className="relative group overflow-visible border-l-4"
                  style={
                    {
                      borderLeftColor: item.glowColor.replace(
                        /,\s*[\d.]+\)$/,
                        ', 0.7)',
                      ),
                    } as React.CSSProperties
                  }
                >
                  <span
                    className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full"
                    style={{
                      backgroundColor: item.glowColor.replace(
                        /,\s*[\d.]+\)$/,
                        ', 0.12)',
                      ),
                      color: item.glowColor.replace(/,\s*[\d.]+\)$/, ', 0.9)'),
                    }}
                  >
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
                          className="text-editor-muted transition-colors"
                          style={{ color: undefined }}
                        />

                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-[280px] sm:w-[320px] p-4 bg-editor-sidebar/95 backdrop-blur-xl border border-editor-border text-editor-fg text-sm leading-relaxed rounded-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all z-20 shadow-[0_10px_30px_rgba(15,23,42,0.2)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.55)] pointer-events-none text-center">
                          {t(item.descriptionKey)}
                          <div
                            className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent"
                            style={{ borderTopColor: 'var(--editor-sidebar)' }}
                          />
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
