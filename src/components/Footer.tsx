import React from 'react';
import { useTranslation } from 'react-i18next';
import { PERSONAL } from '../data/constants';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-[#3e3e42] bg-[#1e1e1e]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-[#858585] text-sm font-mono">
            <span className="text-[#6A9955]">//</span> &copy; {currentYear}{' '}
            {PERSONAL.name} ({PERSONAL.alias})
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-[#2a2d2e] text-[#858585] hover:text-[#d4d4d4] transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={PERSONAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-[#2a2d2e] text-[#858585] hover:text-[#d4d4d4] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${PERSONAL.email}`}
              className="p-2 rounded-md hover:bg-[#2a2d2e] text-[#858585] hover:text-[#d4d4d4] transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* PDF Download */}
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#252526] border border-[#3e3e42] hover:bg-[#2a2d2e] text-[#858585] hover:text-[#d4d4d4] transition-colors text-sm font-mono"
          >
            <FileText size={16} />
            <span>{t('footer.export_pdf')}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
