import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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

      <div className="relative mt-20">
        {/* Main vertical timeline line - Animated Gradient Spine */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px]">
          <div className="absolute inset-0 bg-editor-border/30 rounded-full" />
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: '100%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-formation/50 to-transparent rounded-full shadow-[0_0_15px_rgba(78,201,176,0.3)]" 
          />
        </div>

        {/* Mobile vertical line */}
        <div className="md:hidden absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent-formation/40 to-transparent" />

        <div className="space-y-24">
          {formationData.map((item, index) => {
            const isPresent = item.endYear === 'present';
            
            return (
              <div
                key={item.id}
                className={`relative flex items-start md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-5/12" />

              {/* Hoverable Group Container */}
              <div className={`flex flex-1 md:flex-none md:w-7/12 items-center group ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                {/* Center node with horizontal connector */}
                <div className="relative z-10 flex items-center justify-center">
                  {/* Horizontal connecting line to card - visible on desktop */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '3rem' }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] transition-all duration-300 group-hover:w-16 z-0 ${index % 2 === 0 ? 'right-full' : 'left-full'}`}
                    style={{ 
                      backgroundImage: `linear-gradient(${index % 2 === 0 ? 'to left' : 'to right'}, ${item.glowColor.replace(/, [\d.]+\)$/, ', 0.6)')}, transparent)` 
                    }}
                  />

                  {/* Node circle - solid bg so the vertical line runs cleanly between nodes */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20, 
                      delay: 0.3 + index * 0.1 
                    }}
                    className="relative flex items-center justify-center w-14 h-14 rounded-full bg-editor-bg shadow-xl ring-4 transition-all duration-500 group-hover:scale-110 border-2 z-10"
                    style={{
                      borderColor: item.glowColor.replace(/[\d.]+\)$/, '0.6)'),
                      boxShadow: `0 0 25px ${item.glowColor.replace(/[\d.]+\)$/, '0.15)')}`,
                    }}
                  >
                    {isPresent && (
                      <div 
                        className="absolute inset-0 rounded-full animate-pulse-glow"
                        style={{ backgroundColor: item.glowColor.replace(/[\d.]+\)$/, '0.4)') }}
                      />
                    )}
                    
                    <div
                      className="relative p-2.5 rounded-full z-10"
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
                  </motion.div>
                </div>

                {/* Card with connecting styling */}
                <motion.div 
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex-1 md:flex-none md:w-full md:px-8 z-10"
                >
                  <GlassCard
                    delay={0}
                    glowColor={item.glowColor}
                    className="relative overflow-visible border-l-4 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl"
                    style={{
                      borderLeftColor: item.glowColor.replace(
                        /,\s*[\d.]+\)$/,
                        ', 0.8)',
                      ),
                    }}
                  >
                    <span
                      className="inline-block px-3 py-1 mb-4 text-xs font-bold rounded-full border border-current transition-colors duration-300"
                      style={{
                        backgroundColor: item.glowColor.replace(
                          /,\s*[\d.]+\)$/,
                          ', 0.15)',
                        ),
                        color: item.glowColor.replace(/,\s*[\d.]+\)$/, ', 1)'),
                      }}
                    >
                      {item.startYear} -{' '}
                      {isPresent ? t('common.present') : item.endYear}
                    </span>

                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-heading text-xl font-bold tracking-tight">{t(item.titleKey)}</h3>
                      {item.descriptionKey && (
                        <div className="relative group/tooltip flex items-center cursor-help">
                          <HelpCircle
                            size={18}
                            className="text-editor-muted hover:text-editor-fg transition-colors"
                          />

                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[300px] p-4 bg-editor-sidebar/95 backdrop-blur-xl border border-editor-border text-editor-fg text-sm leading-relaxed rounded-2xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 z-20 shadow-2xl pointer-events-none text-center transform translate-y-2 group-hover/tooltip:translate-y-0">
                            {t(item.descriptionKey)}
                            <div
                              className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent"
                              style={{ borderTopColor: 'rgba(30, 41, 59, 0.95)' }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <h4 className="text-body text-base text-editor-muted font-medium">
                      {t(item.institutionKey)}
                    </h4>
                  </GlassCard>
                </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
