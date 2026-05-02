import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  delay = 0,
  glowColor = '#569CD6',
  style,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      style={
        {
          '--hover-glow': glowColor,
          ...style,
        } as React.CSSProperties
      }
      className={cn(
        'relative overflow-visible group transition-all duration-300 hover:-translate-y-2 hover:z-20 rounded-lg',
        'bg-editor-sidebar border border-editor-border',
        'p-4 sm:p-6',
        'shadow-[0_2px_8px_rgba(15,23,42,0.06),0_4px_16px_rgba(15,23,42,0.04)] dark:shadow-xl',
        className,
      )}
    >
      {/* IDE panel border */}
      <div className="absolute inset-0 border border-editor-border rounded-lg pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
      <div
        className="absolute inset-0 border-2 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          borderColor: 'var(--hover-glow)',
          boxShadow: `inset 0 0 8px ${glowColor}, 0 0 14px ${glowColor}`,
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent via-white/[0.04] dark:via-white/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};
