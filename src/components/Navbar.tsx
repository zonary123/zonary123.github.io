import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Languages, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language.startsWith('es') ? 'en' : 'es');
  };

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.formation'), href: '#formation' },
    { name: t('nav.workExperience'), href: '#workExperience' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.certificates'), href: '#certificates' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none px-4 pt-4">
      <nav className={`pointer-events-auto w-full max-w-6xl transition-all duration-500 ${
        isScrolled 
          ? 'glass rounded-full py-3 px-6 md:px-8 shadow-2xl border border-white/20 dark:border-white/10 dark:shadow-primary-500/5' 
          : 'bg-transparent py-4 px-2 md:px-8 rounded-none border border-transparent shadow-none'
      }`}>
        <div className="flex justify-between items-center w-full">
          <a href="#" className="font-bold text-2xl text-gradient tracking-tighter hover:scale-105 transition-transform">zonary123</a>
        
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-medium hover:text-primary-500 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 border-l border-slate-300 dark:border-slate-700 pl-4">
              <button onClick={toggleLanguage} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors" aria-label="Toggle Language">
                <Languages size={20} />
              </button>
              <button onClick={toggleTheme} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors" aria-label="Toggle Theme">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleLanguage} className="p-2">
              <Languages size={20} />
            </button>
            <button onClick={toggleTheme} className="p-2">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden glass absolute top-[80px] left-4 right-4 rounded-2xl py-6 px-6 flex flex-col space-y-4 shadow-2xl border border-slate-200/50 dark:border-white/10 pointer-events-auto">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-medium text-lg hover:text-primary-400 py-3 border-b border-slate-200 dark:border-slate-800/50 last:border-0"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
