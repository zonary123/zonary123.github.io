import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { Code2, Server, TerminalSquare } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle title={t('about.title')} />
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <GlassCard delay={0.2} className="h-full">
            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
              <p>{t('about.description1')}</p>
              <p>{t('about.description2')}</p>
              <p>{t('about.description3')}</p>
              <p className="font-medium text-slate-900 dark:text-slate-100">{t('about.description4')}</p>
            </div>
          </GlassCard>

          <div className="grid gap-6">
            <GlassCard delay={0.3} className="h-full">
              <div className="flex flex-col h-full">
                <div className="p-4 rounded-xl bg-primary-500/10 text-primary-500 flex items-center gap-3 w-full mb-4">
                  <Server size={24} />
                  <h4 className="font-bold text-lg md:text-xl">Backend Architecture</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mt-auto">Diseño de sistemas robustos y eficientes para entornos de alta exigencia.</p>
              </div>
            </GlassCard>
            
            <GlassCard delay={0.4} className="h-full">
              <div className="flex flex-col h-full">
                <div className="p-4 rounded-xl bg-accent-500/10 text-accent-500 flex items-center gap-3 w-full mb-4">
                  <TerminalSquare size={24} />
                  <h4 className="font-bold text-lg md:text-xl">Performance Focus</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mt-auto">Optimización en single-thread y manejo de asincronía avanzada.</p>
              </div>
            </GlassCard>

            <GlassCard delay={0.5} className="h-full">
              <div className="flex flex-col h-full">
                <div className="p-4 rounded-xl bg-blue-500/10 text-blue-500 flex items-center gap-3 w-full mb-4">
                  <Code2 size={24} />
                  <h4 className="font-bold text-lg md:text-xl">Full Stack Flexibility</h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mt-auto">Capacidad para integrarse end-to-end con fluidez en todo el stack.</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};