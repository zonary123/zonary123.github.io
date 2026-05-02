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
      className="min-h-[85vh] flex items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-20 md:pt-28 pb-12"
    >
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-10">
        <div className="flex-1 space-y-6 sm:space-y-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* IDE-style greeting */}
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <Terminal size={20} className="text-syntax-blue" />
              <span className="text-code text-syntax-green">{`// ${t('hero.greeting')}`}</span>
            </div>

            <h1 className="text-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              <span className="text-editor-fg">{PERSONAL.name}</span>
              <br />
              <span className="text-gradient">{PERSONAL.alias}</span>
              <span className="animate-cursor-blink text-syntax-blue">_</span>
            </h1>

            <p className="text-heading text-xl md:text-2xl text-editor-muted">
              {t('hero.role')}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body text-base sm:text-lg md:text-xl text-editor-muted max-w-2xl mx-auto md:mx-0"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center md:justify-start gap-4 w-full md:w-auto"
          >
            {/* Primary CTA - Large gradient button */}
            <a
              href="#projects"
              className="group relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-accent-about via-accent-formation to-accent-about bg-[length:200%_100%] hover:bg-[position:100%_0] text-white font-bold text-base sm:text-lg transition-all duration-500 flex items-center justify-center gap-3 shadow-xl shadow-accent-about/40 hover:shadow-accent-about/60 hover:scale-[1.02] sm:hover:scale-105 ring-2 ring-white/20 overflow-hidden w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative text-label">
                {t('hero.cta_projects')}
              </span>
              <ArrowRight
                size={20}
                className="relative group-hover:translate-x-1 transition-transform"
              />
            </a>

            {/* Secondary buttons row */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-5 py-3 rounded-xl bg-editor-sidebar hover:bg-accent-projects/20 border-2 border-accent-projects/40 hover:border-accent-projects font-semibold flex flex-1 sm:flex-none items-center justify-center gap-2 text-accent-projects transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-lg hover:shadow-accent-projects/20"
              >
                <div className="p-1.5 rounded-lg bg-accent-projects/20 group-hover:bg-accent-projects/30 transition-colors">
                  <Github size={18} />
                </div>
                <span className="text-label">{t('hero.github_btn')}</span>
              </a>
              <a
                href="#contact"
                className="group px-5 py-3 rounded-xl bg-editor-sidebar hover:bg-accent-contact/20 border-2 border-accent-contact/40 hover:border-accent-contact font-semibold flex flex-1 sm:flex-none items-center justify-center gap-2 text-accent-contact transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-lg hover:shadow-accent-contact/20"
              >
                <div className="p-1.5 rounded-lg bg-accent-contact/20 group-hover:bg-accent-contact/30 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-label">{t('hero.cta_contact')}</span>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-shrink-0 relative group"
        >
          {/* Animated glow background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-about via-accent-formation to-accent-skills rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 animate-pulse-slow" />
          <div className="absolute -inset-4 bg-gradient-to-r from-accent-about/20 via-accent-formation/20 to-accent-skills/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Rotating ring effect */}
          <div className="absolute -inset-3 rounded-full border-2 border-dashed border-accent-about/30 animate-spin-slow" />
          <div className="absolute -inset-6 rounded-full border border-accent-formation/20" />

          {/* Main profile container */}
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full border-[6px] border-editor-sidebar shadow-2xl shadow-black/50 overflow-hidden bg-editor-sidebar ring-4 ring-accent-about/20 group-hover:ring-accent-formation/40 transition-all duration-500">
            <img
              src={profileImage}
              alt={PERSONAL.name}
              width={352}
              height={352}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="eager"
              fetchPriority="high"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent-about/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Animated ping indicator */}
          <div
            className="absolute top-2 right-2 md:top-4 md:right-4"
            aria-hidden="true"
          >
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-accent-formation opacity-75 animate-ping"
              style={{ width: '16px', height: '16px' }}
            />
            <span className="relative inline-flex w-4 h-4 rounded-full bg-accent-formation ring-4 ring-accent-formation/30" />
          </div>

          {/* Online badge */}
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-editor-sidebar border-2 border-accent-formation shadow-xl shadow-accent-formation/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-formation opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-formation" />
            </span>
            <span className="text-code text-accent-formation font-bold text-sm">
              {t('hero.online')}
            </span>
          </div>

          {/* Decorative corner accents */}
          <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-accent-about rounded-tl-2xl" />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-accent-formation rounded-br-2xl" />
        </motion.div>
      </div>
    </section>
  );
};
