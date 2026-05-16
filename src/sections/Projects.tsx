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
  ].filter(
    (cat) =>
      cat.id === 'all' || projectsData.some((p) => p.category === cat.id),
  );

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

      <div className="mb-10 sm:mb-12 -mx-1 px-1 overflow-x-auto">
        <div className="flex w-max min-w-full justify-start sm:justify-center gap-2 sm:gap-3 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as 'all' | Category)}
              className={`px-4 sm:px-5 py-2 text-sm md:text-base rounded-full text-label whitespace-nowrap transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-accent-projects text-white shadow-lg shadow-accent-projects/30'
                  : 'glass hover:bg-editor-hover text-editor-muted hover:text-accent-projects'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{
                duration: 0.35,
                delay: idx * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassCard
                glowColor={
                  CATEGORY_GLOW[project.category] ?? 'rgba(59,130,246,0.5)'
                }
                className="h-full flex flex-col group transition-all duration-500 border-l-4 border-l-accent-projects overflow-visible hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-projects/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                
                <div className="relative mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-projects mb-2 block opacity-80 group-hover:opacity-100 transition-opacity">
                    {t(`projects.categories.${project.category}`)}
                  </span>
                  <h3 className="text-heading text-2xl mb-3 group-hover:text-accent-projects transition-colors flex items-center justify-between">
                    {project.title}
                    <div className="w-8 h-8 rounded-full bg-accent-projects/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                      <ExternalLink size={16} className="text-accent-projects" />
                    </div>
                  </h3>
                  <p className="text-body text-sm text-editor-muted group-hover:text-editor-fg transition-colors leading-relaxed">
                    {t(`projects.items.${project.id}.description`)}
                  </p>
                </div>

                <div className="relative flex flex-wrap gap-2 mb-6 mt-auto pt-6">
                  {project.technologies.map((tech) => (
                    <SkillBadge key={tech} skill={tech} />
                  ))}
                </div>

                <div className="relative flex flex-wrap gap-4 pt-4 border-t border-editor-border/50 mt-auto text-editor-muted">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="text-label text-sm flex items-center gap-2 hover:text-accent-projects transition-all hover:translate-x-1"
                    >
                      <Github size={18} /> {t('projects.view_source')}
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="text-label text-sm flex items-center gap-2 hover:text-accent-projects transition-all hover:translate-x-1"
                    >
                      <ExternalLink size={18} /> {t('projects.view_demo')}
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
