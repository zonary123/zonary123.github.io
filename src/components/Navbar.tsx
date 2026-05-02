import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import {
  Moon,
  Sun,
  Menu,
  X,
  Terminal,
  Check,
  ChevronDown,
  Globe,
} from 'lucide-react';
import { useScroll } from '../hooks/useScroll';

const LANGUAGES = [
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
];

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const isScrolled = useScroll(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const currentLang =
    LANGUAGES.find((l) => i18n.language.startsWith(l.code)) || LANGUAGES[0];

  const setLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangOpen(false);
  };

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.formation'), href: '#formation' },
    { name: t('nav.workExperience'), href: '#workExperience' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.certificates'), href: '#certificates' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none px-4 pt-4">
      <nav
        className={`pointer-events-auto w-full max-w-6xl transition-all duration-300 ${
          isScrolled
            ? 'glass rounded-lg py-3 px-4 md:px-8 shadow-2xl border border-[#3e3e42]'
            : 'bg-transparent py-4 px-2 md:px-8 rounded-none border border-transparent shadow-none'
        }`}
      >
        <div className="flex justify-between items-center w-full">
          <a
            href="#home"
            className="font-bold text-xl text-gradient tracking-tighter hover:scale-105 transition-transform flex items-center gap-2 font-mono"
          >
            <Terminal size={20} className="text-[#569CD6]" />
            <span>zonary123</span>
          </a>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-mono hover:text-[#569CD6] transition-colors leading-none py-1 text-[#858585]"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-2 border-l border-[#3e3e42] pl-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-[#2a2d2e] text-[#858585] hover:text-[#d4d4d4] transition-colors font-mono text-sm"
                >
                  <Globe size={16} />
                  <span className="font-semibold uppercase">
                    {currentLang.code}
                  </span>
                  <ChevronDown size={14} />
                </button>

                {isLangOpen && (
                  <div className="absolute top-full right-0 mt-2 py-2 rounded-lg bg-[#252526] border border-[#3e3e42] shadow-xl min-w-[120px]">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`w-full flex items-center gap-3 px-4 py-2 hover:bg-[#2a2d2e] transition-colors text-sm ${
                          currentLang.code === lang.code
                            ? 'text-[#d4d4d4]'
                            : 'text-[#858585]'
                        }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span className="font-mono font-semibold">
                          {lang.label}
                        </span>
                        {currentLang.code === lang.code && (
                          <Check size={14} className="ml-auto text-[#4EC9B0]" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dark/Light Toggle */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-[#2a2d2e] text-[#858585] hover:text-[#d4d4d4] transition-colors"
                aria-label={
                  theme === 'dark'
                    ? t('theme.switch_to_light')
                    : t('theme.switch_to_dark')
                }
              >
                {theme === 'dark' ? (
                  <Sun size={18} className="text-[#DCDCAA]" />
                ) : (
                  <Moon size={18} className="text-[#569CD6]" />
                )}
                {theme === 'dark' ? (
                  <span>{t('theme.switch_to_light')}</span>
                ) : (
                  <span>{t('theme.switch_to_dark')}</span>
                )}
                <span className="font-mono text-sm hidden sm:inline">
                  {theme === 'dark' ? t('theme.light') : t('theme.dark')}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-[#2a2d2e] rounded-md"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden ide-panel absolute top-[80px] left-4 right-4 rounded-lg py-6 px-6 flex flex-col space-y-3 shadow-2xl pointer-events-auto max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-sm hover:text-[#569CD6] py-3 border-b border-[#3e3e42] last:border-0 text-[#d4d4d4]"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Language Selector */}
          <div className="pt-4 border-t border-[#3e3e42]">
            <p className="text-[#858585] text-xs font-mono mb-2">{`// ${t('nav.language')}`}</p>
            <div className="flex gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-mono flex-1 ${
                    currentLang.code === lang.code
                      ? 'bg-[#2a2d2e] text-[#d4d4d4]'
                      : 'text-[#858585] hover:bg-[#2a2d2e]'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Dark/Light Toggle */}
          <div className="pt-4 border-t border-[#3e3e42]">
            <p className="text-[#858585] text-xs font-mono mb-2">{`// ${t('nav.theme')}`}</p>
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-md bg-[#2a2d2e] text-[#d4d4d4] w-full"
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={20} className="text-[#DCDCAA]" />{' '}
                  <span>{t('theme.switch_to_light')}</span>
                </>
              ) : (
                <>
                  <Moon size={20} className="text-[#569CD6]" />{' '}
                  <span>{t('theme.switch_to_dark')}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
