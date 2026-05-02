import React from 'react';
import { useTranslation } from 'react-i18next';
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
        accentColor="#C586C0"
        accentColorTo="#569CD6"
      />

      <div className="relative mt-8">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-accent-experience via-accent-experience/50 to-transparent" />
        {/* Mobile vertical line — left-7 = center of w-14 node (56px / 2 = 28px) */}
        <div className="md:hidden absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-experience via-accent-experience/50 to-transparent" />

        <div className="space-y-12">
          {workExperienceData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`group flex items-start md:items-center md:justify-between w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-5/12 hidden md:block" />

                <div className="z-10 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-3xl md:rounded-full glass shadow-xl shadow-accent-experience/20 border-2 border-accent-experience/30 group-hover:scale-110 transition-transform duration-300 ease-out flex-shrink-0">
                  <div className="p-3 bg-accent-experience/10 text-accent-experience rounded-2xl md:rounded-full">
                    {getIcon(item.iconName, 28)}
                  </div>
                </div>

                <div className="flex-1 md:flex-none md:w-5/12 ml-4 md:ml-0 z-10">
                  <GlassCard
                    delay={0.2 + index * 0.1}
                    glowColor={item.glowColor}
                    className="relative overflow-visible group hover:-translate-y-2 transition-transform duration-300 border-l-4 border-l-accent-experience"
                  >
                    <div className="flex flex-col mb-4 gap-2">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <h3 className="text-heading text-xl md:text-2xl text-accent-experience">
                            {t(item.roleKey)}
                          </h3>
                          <h4 className="text-heading text-lg text-editor-fg">
                            {t(item.companyKey)}
                          </h4>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-experience/10 text-accent-experience whitespace-nowrap h-fit">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};
