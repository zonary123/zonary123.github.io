import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../components/SectionTitle';
import { GlassCard } from '../components/GlassCard';
import { Github, Linkedin, Mail, Send, Copy, Check } from 'lucide-react';

export const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  
  // Define el correo aquí, ya que no cambia con el idioma
  const CONTACT_EMAIL = "carlosvarasalonso10@gmail.com";
  // Si mailto falla a nivel OS, abrir Gmail Web directamente es una gran alternativa
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-slate-100/50 dark:bg-dark-800/50">
      <div className="container mx-auto max-w-4xl text-center">
        <SectionTitle title={t('contact.title')} subtitle={t('contact.description')} />
        
        <GlassCard className="max-w-2xl mx-auto mt-8 p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
            <a href="https://github.com/zonary123" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Github size={32} className="text-slate-700 dark:text-slate-300" />
              <span className="font-medium text-sm">GitHub</span>
            </a>
            
            <a href="https://www.linkedin.com/in/carlos-varas-alonso-7324a72b2/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Linkedin size={32} className="text-blue-600" />
              <span className="font-medium text-sm">LinkedIn</span>
            </a>
            
            <button onClick={handleCopyEmail} className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer border-none bg-transparent">
              <Mail size={32} className="text-primary-500" />
              <span className="font-medium text-sm">Email</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-primary-500/30 hover:scale-[1.02] w-full sm:w-auto"
            >
              {t('contact.btn')} <Send size={20} />
            </a>
            
            <button 
              onClick={handleCopyEmail}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all border-2 w-full sm:w-auto hover:scale-[1.02] ${
                copied 
                  ? 'bg-green-500/10 text-green-600 dark:text-green-500 border-green-500/50' 
                  : 'glass text-slate-700 dark:text-slate-300 border-transparent hover:border-slate-300 dark:hover:border-slate-600 hover:bg-white/40 dark:hover:bg-slate-800/60'
              }`}
            >
              {copied ? (
                <><Check size={20} /> {t('contact.copied')}</>
              ) : (
                <><Copy size={20} /> {t('contact.copy_email')}</>
              )}
            </button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};