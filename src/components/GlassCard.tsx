import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  delay = 0,
  glowColor = '#569CD6',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        'relative overflow-visible group transition-all duration-300 hover:-translate-y-1 hover:z-50 rounded-lg',
        'bg-white dark:bg-[#252526] border border-slate-200 dark:border-[#3e3e42]',
        'p-6',
        className,
      )}
      style={
        {
          '--hover-glow': glowColor,
        } as React.CSSProperties
      }
    >
      {/* IDE panel border */}
      <div className="absolute inset-0 border border-slate-200 dark:border-[#3e3e42] rounded-lg pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />

      {/* Glow border on hover */}
      <div
        className="absolute inset-0 border-2 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          borderColor: 'var(--hover-glow)',
          boxShadow: `inset 0 0 10px ${glowColor}20, 0 0 15px ${glowColor}30`,
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};
