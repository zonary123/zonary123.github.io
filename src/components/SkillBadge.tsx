import React, { useState } from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiRedis,
  SiSpringboot,
  SiDocker,
  SiGit,
  SiMysql,
  SiPostgresql,
  SiLinux,
  SiCplusplus,
  SiUnity,
  SiKubernetes,
} from 'react-icons/si';
import { FaJava, FaNpm, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { TbBrandCSharp, TbBrandMinecraft } from 'react-icons/tb';
import { Pickaxe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BiWindows } from 'react-icons/bi';

export const getSkillColor = (skill: string) => {
  const colors: Record<string, string> = {
    HTML: 'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/20',
    CSS: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
    JavaScript:
      'text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    TypeScript:
      'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
    React: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    Tailwind:
      'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    TailwindCSS:
      'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    'Node.js':
      'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20',
    MongoDB:
      'text-green-600 dark:text-green-500 bg-green-600/10 border-green-600/20',
    Redis: 'text-red-600 dark:text-red-400 bg-red-500/10 border-red-500/20',
    Java: 'text-red-600 dark:text-red-400 bg-red-600/10 border-red-600/20',
    'Spring Boot':
      'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20',
    'C#': 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20',
    '.NET':
      'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20',
    Docker:
      'text-blue-500 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
    Kubernetes:
      'text-blue-600 dark:text-blue-500 bg-blue-500/10 border-blue-500/20',
    Git: 'text-orange-600 dark:text-orange-500 bg-orange-500/10 border-orange-500/20',
    MySQL: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
    PostgreSQL:
      'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
    NPM: 'text-red-500 dark:text-red-400 bg-red-500/10 border-red-500/20',
    Linux:
      'text-yellow-600 dark:text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
    Windows:
      'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
    Unity:
      'text-neutral-600 dark:text-neutral-400 bg-neutral-500/10 border-neutral-500/20',
    Minecraft:
      'text-green-700 dark:text-green-500 bg-green-600/10 border-green-600/20',
    'Minecraft API':
      'text-green-700 dark:text-green-500 bg-green-600/10 border-green-600/20',
  };

  return (
    colors[skill] || 'text-editor-fg bg-editor-sidebar border-editor-border'
  );
};

export const getSkillIcon = (skill: string) => {
  switch (skill) {
    case 'HTML':
      return <FaHtml5 className="text-lg" />;
    case 'CSS':
      return <FaCss3Alt className="text-lg" />;
    case 'JavaScript':
      return <SiJavascript className="text-lg" />;
    case 'TypeScript':
      return <SiTypescript className="text-lg" />;
    case 'React':
      return <SiReact className="text-lg" />;
    case 'Tailwind':
    case 'TailwindCSS':
      return <SiTailwindcss className="text-lg" />;
    case 'Node.js':
      return <SiNodedotjs className="text-lg" />;
    case 'MongoDB':
      return <SiMongodb className="text-lg" />;
    case 'Redis':
      return <SiRedis className="text-lg" />;
    case 'Java':
      return <FaJava className="text-lg" />;
    case 'Spring Boot':
      return <SiSpringboot className="text-lg" />;
    case 'C#':
      return <TbBrandCSharp className="text-lg" />;
    case 'C++':
      return <SiCplusplus className="text-lg" />;
    case 'Docker':
      return <SiDocker className="text-lg" />;
    case 'Kubernetes':
      return <SiKubernetes className="text-lg" />;
    case 'Git':
      return <SiGit className="text-lg" />;
    case 'MySQL':
      return <SiMysql className="text-lg" />;
    case 'PostgreSQL':
      return <SiPostgresql className="text-lg" />;
    case 'NPM':
      return <FaNpm className="text-lg" />;
    case 'Linux':
      return <SiLinux className="text-lg" />;
    case 'Windows':
      return <BiWindows className="text-lg" />;
    case 'Unity':
      return <SiUnity className="text-lg" />;
    case 'Minecraft':
      return <TbBrandMinecraft className="text-lg" />;
    case 'Minecraft API':
      return <TbBrandMinecraft size={18} />;
    default:
      return null;
  }
};

export const SkillBadge = ({ skill }: { skill: string }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const descriptionKey = `skills.descriptions.${skill.replace(/\./g, '_')}`;
  const description = t(descriptionKey);
  const hasDescription = description !== descriptionKey;

  return (
    <div
      className={`relative inline-flex items-center transition-all duration-300 ${isHovered ? 'z-[100]' : 'z-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-label border rounded-full transition-all duration-300 hover:brightness-110 shadow-sm cursor-help ${getSkillColor(skill)} ${isHovered ? 'scale-105' : ''}`}
      >
        {getSkillIcon(skill)}
        {skill}
      </span>

      <div
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-[100] pointer-events-none flex flex-col items-center`}
      >
        <AnimatePresence>
          {isHovered && hasDescription && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-52 sm:w-60 p-3 bg-editor-bg/95 backdrop-blur-xl text-editor-fg text-[11px] leading-snug rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] text-center border border-editor-border"
              >
                {description}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 2 }}
                className="border-8 border-transparent border-t-editor-bg/95 -mt-px"
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
