import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, Send, Copy, Check } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { SectionWrapper } from '../components/SectionWrapper';
import { PERSONAL } from '../data/constants';

export const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL.email}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionWrapper id="contact" maxWidth="max-w-4xl" className="text-center">
      <SectionTitle
        title={t('contact.title')}
        subtitle={t('contact.description')}
      />

      <GlassCard className="max-w-2xl mx-auto mt-8 p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-editor-hover transition-colors group"
          >
            <div className="p-3 rounded-full bg-editor-sidebar group-hover:bg-accent-contact/10 transition-colors">
              <Github
                size={28}
                className="text-editor-fg group-hover:text-accent-contact transition-colors"
              />
            </div>
            <span className="text-label text-sm">{t('contact.github')}</span>
          </a>

          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-editor-hover transition-colors group"
          >
            <div className="p-3 rounded-full bg-editor-sidebar group-hover:bg-accent-formation/10 transition-colors">
              <Linkedin
                size={28}
                className="text-syntax-blue group-hover:text-accent-formation transition-colors"
              />
            </div>
            <span className="text-label text-sm">{t('contact.linkedin')}</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-editor-hover transition-colors cursor-pointer border-none bg-transparent group"
          >
            <div className="p-3 rounded-full bg-editor-sidebar group-hover:bg-accent-experience/10 transition-colors">
              <Mail
                size={28}
                className="text-syntax-magenta group-hover:text-accent-experience transition-colors"
              />
            </div>
            <span className="text-label text-sm">{t('contact.email')}</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-contact to-accent-formation hover:opacity-90 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl shadow-accent-contact/40 hover:shadow-accent-contact/60 hover:scale-105 w-full sm:w-auto overflow-hidden ring-2 ring-white/20"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            {t('contact.btn')} <Send size={20} />
          </a>

          <button
            onClick={handleCopyEmail}
            className={`group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 border-2 w-full sm:w-auto hover:scale-105 ${
              copied
                ? 'bg-accent-formation/20 text-accent-formation border-accent-formation ring-2 ring-accent-formation/20'
                : 'glass text-editor-fg border-accent-contact/30 hover:border-accent-contact hover:bg-accent-contact/10 hover:shadow-lg hover:shadow-accent-contact/20'
            }`}
          >
            {copied ? (
              <>
                <Check size={20} /> {t('contact.copied')}
              </>
            ) : (
              <>
                <Copy size={20} /> {t('contact.copy_email')}
              </>
            )}
          </button>
        </div>
      </GlassCard>
    </SectionWrapper>
  );
};
