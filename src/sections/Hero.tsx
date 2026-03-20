import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Mail, ArrowRight, User } from 'lucide-react';
import profileImage from '../assets/profile.webp';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden px-6 pt-20 md:pt-28 pb-12">
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
        
        <div className="flex-1 space-y-8 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary-500 mb-2">{t('hero.greeting')}</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
              <span className="text-slate-900 dark:text-white">Carlos Varas Alonso</span>
              <br />
              <span className="text-gradient">zonary123</span>
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
              {t('hero.role')}
            </h3>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto md:mx-0"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <a href="#projects" className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-primary-500/25">
              {t('hero.cta_projects')} <ArrowRight size={18} />
            </a>
            <a href="https://github.com/zonary123" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full glass glass-hover font-medium flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Github size={20} /> GitHub
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full glass glass-hover font-medium flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <Mail size={20} /> {t('hero.cta_contact')}
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-shrink-0 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 dark:from-primary-600 dark:to-accent-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-multiply dark:mix-blend-screen" />
          
          <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-white/20 dark:border-white/10 glass shadow-2xl shadow-primary-500/10 overflow-hidden flex flex-col items-center justify-center bg-slate-100 dark:bg-dark-800">

            <img src={profileImage} alt="Carlos Varas Alonso" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-accent-500/20 backdrop-blur-md border border-white/20 animate-pulse" />
          <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-primary-500/20 backdrop-blur-md border border-white/20 animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>

      </div>
    </section>
  );
};