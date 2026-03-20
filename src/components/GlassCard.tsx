import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0, glowColor = 'rgba(59, 130, 246, 0.4)' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={`glass-card rounded-2xl p-6 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 ${className}`}
      style={{
        '--hover-glow': glowColor
      } as React.CSSProperties}
    >
      {/* Default Subtle Border */}
      <div className="absolute inset-0 border border-slate-200/50 dark:border-white/10 rounded-2xl pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
      
      {/* Neon Glow Border Effect */}
      <div 
        className="absolute inset-0 border-2 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
        style={{ 
          borderColor: 'var(--hover-glow)',
          boxShadow: 'inset 0 0 15px var(--hover-glow), 0 0 20px var(--hover-glow)'
        }} 
      />

      {/* Glossy Highlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 dark:from-white/0 dark:via-white/5 dark:to-white/0 pointer-events-none" />
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};
