import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { SectionWrapper } from '../components/SectionWrapper';
import { projectsData, CATEGORY_GLOW, type Category } from '../data/projects';
import { ExternalLink, Github } from 'lucide-react';
import { SkillBadge } from '../components/SkillBadge';

export const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | Category>('all');

  const categories = [
    { id: 'all', label: t('projects.categories.all') },
    { id: 'minecraft', label: t('projects.categories.minecraft') },
    { id: 'backend', label: t('projects.categories.backend') },
    { id: 'web', label: t('projects.categories.web') },
    { id: 'experiments', label: t('projects.categories.experiments') },
  ];

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <SectionWrapper id="projects">
      <SectionTitle
        title={t('projects.title')}
        subtitle={t('projects.description')}
      />

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id as 'all' | Category)}
            className={`px-5 py-2 text-sm md:text-base rounded-full text-label transition-all duration-300 ${
              filter === cat.id
                ? 'bg-accent-projects text-white shadow-lg shadow-accent-projects/30'
                : 'glass hover:bg-editor-hover text-editor-muted hover:text-accent-projects'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard
                glowColor={
                  CATEGORY_GLOW[project.category] ?? 'rgba(59,130,246,0.5)'
                }
                className="h-full flex flex-col hover:-translate-y-2 group transition-all duration-300 border-none overflow-visible"
              >
                <div className="mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-projects mb-2 block">
                    {t(`projects.categories.${project.category}`)}
                  </span>
                  <h3 className="text-heading text-2xl mb-3 group-hover:text-accent-projects transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body text-sm text-editor-muted">
                    {t(`projects.items.${project.id}.description`)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4">
                  {project.technologies.map((tech) => (
                    <SkillBadge key={tech} skill={tech} />
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-editor-border mt-auto text-editor-muted">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="text-label text-sm flex items-center gap-1 hover:text-accent-projects transition-colors"
                    >
                      <Github size={16} /> {t('projects.view_source')}
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="text-label text-sm flex items-center gap-1 hover:text-accent-experience transition-colors"
                    >
                      <ExternalLink size={16} /> {t('projects.view_demo')}
                    </a>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
};
