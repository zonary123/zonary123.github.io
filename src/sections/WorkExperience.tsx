import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { SectionWrapper } from '../components/SectionWrapper';
import { workExperienceData } from '../data/experience';
import { getIcon } from '../lib/icons';
import { SkillBadge } from '../components/SkillBadge';

export const WorkExperience = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper id="workExperience" maxWidth="max-w-5xl">
      <SectionTitle
        title={t('workExperience.title')}
        subtitle={t('workExperience.description')}
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
            className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-experience/50 to-transparent rounded-full shadow-[0_0_15px_rgba(78,201,176,0.3)]" 
          />
        </div>

        {/* Mobile vertical line */}
        <div className="md:hidden absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent-experience/40 to-transparent" />

        <div className="space-y-12">
          {workExperienceData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`flex items-start md:items-center w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-5/12 hidden md:block" />

                <div className={`flex flex-1 md:flex-none md:w-7/12 items-center group ${isEven ? 'flex-row-reverse' : ''}`}>
                  <div className="relative z-10 flex items-center justify-center">
                    {/* Horizontal connector */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '3rem' }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] transition-all duration-300 group-hover:w-16 z-0 ${isEven ? 'right-full' : 'left-full'}`}
                      style={{ 
                        backgroundImage: `linear-gradient(${isEven ? 'to left' : 'to right'}, ${item.glowColor.replace(/, [\d.]+\)$/, ', 0.6)')}, transparent)` 
                      }}
                    />

                    {/* Node circle */}
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
                      {item.endYear === 'present' && (
                        <div 
                          className="absolute inset-0 rounded-full animate-pulse-glow"
                          style={{ backgroundColor: item.glowColor.replace(/[\d.]+\)$/, '0.4)') }}
                        />
                      )}
                      <div
                        className="relative p-2.5 rounded-full z-10"
                        style={{
                          backgroundColor: item.glowColor.replace(/[\d.]+\)$/, '0.15)'),
                          color: item.glowColor.replace(/[\d.]+\)$/, '0.9)'),
                        }}
                      >
                        {getIcon(item.iconName, 22)}
                      </div>
                    </motion.div>
                  </div>

                  <motion.div 
                    initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex-1 md:flex-none md:w-full md:px-8 z-10"
                  >
                    <GlassCard
                      delay={0}
                      glowColor={item.glowColor}
                      className="relative overflow-visible transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl border-l-4"
                      style={{
                        borderLeftColor: item.glowColor.replace(/,\s*[\d.]+\)$/, ', 0.8)'),
                      }}
                    >
                      <div className="flex flex-col mb-4 gap-2">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                          <div>
                            <h3 
                              className="text-heading text-xl md:text-2xl"
                              style={{ color: item.glowColor.replace(/,\s*[\d.]+\)$/, ', 1)') }}
                            >
                              {t(item.roleKey)}
                            </h3>
                            <h4 className="text-heading text-lg text-editor-fg">
                              {t(item.companyKey)}
                            </h4>
                          </div>
                          <span 
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap h-fit"
                            style={{
                              backgroundColor: item.glowColor.replace(/,\s*[\d.]+\)$/, ', 0.1)'),
                              color: item.glowColor.replace(/,\s*[\d.]+\)$/, ', 1)'),
                            }}
                          >
                            {item.startYear} -{' '}
                            {item.endYear === 'present'
                              ? t('common.present')
                              : item.endYear}
                          </span>
                        </div>
                      </div>

                      <p className="text-body text-editor-muted mb-6">
                        {t(item.descriptionKey)}
                      </p>

                      {item.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <SkillBadge key={tech} skill={tech} />
                          ))}
                        </div>
                      )}
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
