import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  accentColor?: string;
  accentColorTo?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  icon: Icon,
  accentColor,
  accentColorTo = '#4ec9b0',
}) => {
  const gradientStyle: React.CSSProperties | undefined = accentColor
    ? {
        backgroundImage: `linear-gradient(to right, ${accentColor}, ${accentColorTo})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }
    : undefined;
  return (
    <div className="text-center mb-12 md:mb-16">
      {/* Icon with subtle decoration */}
      {Icon && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-editor-border" />
          <div className="p-2.5 rounded-lg bg-editor-sidebar border border-editor-border">
            <Icon size={22} className="text-syntax-blue" />
          </div>
          <div className="h-px w-8 bg-editor-border" />
        </motion.div>
      )}

      {/* Title - display font */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="text-display text-2xl md:text-3xl lg:text-4xl mb-3"
      >
        {accentColor ? (
          <span style={gradientStyle}>{title}</span>
        ) : (
          <span className="text-gradient">{title}</span>
        )}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="text-body text-base md:text-lg text-editor-muted max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
