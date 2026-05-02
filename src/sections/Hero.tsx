import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Mail, ArrowRight, Terminal } from 'lucide-react';
import profileImage from '../assets/profile.webp';
import { PERSONAL } from '../data/constants';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center justify-center relative overflow-hidden px-6 pt-20 md:pt-28 pb-12"
    >
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-8">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* IDE-style greeting */}
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <Terminal size={20} className="text-[#569CD6]" />
              <span className="code-text text-[#6A9955]">{`// ${t('hero.greeting')}`}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 font-mono">
              <span className="text-slate-900 dark:text-[#d4d4d4]">
                {PERSONAL.name}
              </span>
              <br />
              <span className="text-gradient">{PERSONAL.alias}</span>
              <span className="animate-cursor-blink text-[#569CD6]">_</span>
            </h1>

            <h3 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-[#858585] font-mono">
              <span className="code-keyword">const</span>{' '}
              <span className="code-function">role</span>{' '}
              <span className="text-[#d4d4d4]">=</span>{' '}
              <span className="code-string">"{t('hero.role')}"</span>
              <span className="text-[#d4d4d4]">;</span>
            </h3>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-[#858585] max-w-2xl leading-relaxed mx-auto md:mx-0"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-[#569CD6] hover:bg-[#4a8bc4] text-white font-medium transition-all flex items-center gap-2 shadow-lg shadow-[#569CD6]/20 glow-blue"
            >
              <span className="font-mono">{t('hero.cta_projects')}</span>
              <ArrowRight size={18} />
            </a>
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg ide-panel font-medium flex items-center gap-2 text-[#d4d4d4] hover:bg-[#2a2d2e] transition-colors border border-[#3e3e42]"
            >
              <Github size={20} />
              <span className="font-mono">{t('hero.github_btn')}</span>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg ide-panel font-medium flex items-center gap-2 text-[#d4d4d4] hover:bg-[#2a2d2e] transition-colors border border-[#3e3e42]"
            >
              <Mail size={20} />
              <span className="font-mono">{t('hero.cta_contact')}</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-shrink-0 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#569CD6] to-[#4EC9B0] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

          <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full border-4 border-[#3e3e42] shadow-2xl overflow-hidden flex flex-col items-center justify-center bg-[#252526]">
            <img
              src={profileImage}
              alt={PERSONAL.name}
              width={320}
              height={320}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* IDE-style status indicators */}
          <div className="absolute -top-4 -right-4 w-12 h-12 rounded-lg bg-[#252526] border border-[#3e3e42] flex items-center justify-center glow-cyan">
            <span className="w-3 h-3 rounded-full bg-[#4EC9B0] animate-pulse" />
          </div>
          <div className="absolute -bottom-6 -left-6 w-20 h-10 rounded-lg bg-[#252526] border border-[#3e3e42] flex items-center justify-center px-3">
            <span className="code-text text-[#6A9955]">{t('hero.online')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
