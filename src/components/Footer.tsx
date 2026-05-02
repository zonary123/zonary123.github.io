import React from 'react';
import { useTranslation } from 'react-i18next';
import { PERSONAL } from '../data/constants';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <footer className="py-8 border-t border-editor-border bg-editor-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-editor-muted text-sm font-mono">
            <span className="text-[#6A9955]">//</span> &copy; {currentYear}{' '}
            {PERSONAL.name} ({PERSONAL.alias})
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-editor-hover text-editor-muted hover:text-editor-fg transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-editor-hover text-editor-muted hover:text-editor-fg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="p-2 rounded-md hover:bg-editor-hover text-editor-muted hover:text-editor-fg transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* PDF Download */}
          <button
            onClick={handleExportPDF}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-projects/10 hover:bg-accent-projects/20 border-2 border-accent-projects/40 hover:border-accent-projects text-accent-projects font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-projects/20"
          >
            <div className="p-1 rounded bg-accent-projects/20 group-hover:bg-accent-projects/30 transition-colors">
              <Download size={18} />
            </div>
            <span>{t('footer.export_pdf')}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
