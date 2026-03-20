import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { projectsData, type Category } from '../data/projects';
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
    { id: 'experiments', label: t('projects.categories.experiments') }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'minecraft': return 'rgba(34,197,94,0.6)'; // Green
      case 'backend': return 'rgba(59,130,246,0.6)'; // Blue
      case 'web': return 'rgba(236,72,153,0.6)'; // Pink
      case 'experiments': return 'rgba(234,179,8,0.6)'; // Yellow
      default: return 'rgba(59,130,246,0.5)';
    }
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title={t('projects.title')} subtitle={t('projects.description')} />
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-5 py-2 text-sm md:text-base rounded-full font-medium transition-all duration-300 ${
                filter === cat.id 
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30' 
                  : 'glass hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard glowColor={getCategoryColor(project.category)} className="h-full flex flex-col hover:-translate-y-2 group transition-all duration-300 border-none">
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-500 mb-2 block">
                      {t(`projects.categories.${project.category}`)}
                    </span>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  
                <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4">
                  {project.technologies.map(tech => (
                    <SkillBadge key={tech} skill={tech} />
                  ))}
                </div>

                  <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-700/50 mt-auto text-slate-500 dark:text-slate-400">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="text-sm font-medium flex items-center gap-1 hover:text-primary-500 transition-colors">
                        <Github size={16} /> {t('projects.view_source')}
                      </a>
                    )}
                    {project.demoUrl && (
                      <a href={project.demoUrl} className="text-sm font-medium flex items-center gap-1 hover:text-accent-500 transition-colors">
                        <ExternalLink size={16} /> {t('projects.view_demo')}
                      </a>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};