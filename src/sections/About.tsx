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
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <GlassCard delay={0.2} className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
            <p>{t('about.description1')}</p>
            <p>{t('about.description2')}</p>
            <p>{t('about.description3')}</p>
            <p className="font-medium text-slate-900 dark:text-slate-100">{t('about.description4')}</p>
          </GlassCard>

          <div className="grid gap-6">
            <GlassCard delay={0.3} className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500">
                <Server size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Backend Architecture</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Diseño de sistemas robustos y eficientes para entornos de alta exigencia.</p>
              </div>
            </GlassCard>
            
            <GlassCard delay={0.4} className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent-500/10 text-accent-500">
                <TerminalSquare size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Performance Focus</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Optimización en single-thread y manejo de asincronía avanzada.</p>
              </div>
            </GlassCard>

            <GlassCard delay={0.5} className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                <Code2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Full Stack Flexibility</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Capacidad para integrarse end-to-end con fluidez en todo el stack.</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};