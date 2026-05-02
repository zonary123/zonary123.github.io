import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: any;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  icon: Icon,
}) => {
  return (
    <div className="text-center mb-12 md:mb-16">
      {/* Icon with subtle decoration */}
      {Icon && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-[#3e3e42]" />
          <div className="p-2.5 rounded-lg bg-[#252526] border border-[#3e3e42]">
            <Icon size={22} className="text-[#569CD6]" />
          </div>
          <div className="h-px w-8 bg-[#3e3e42]" />
        </motion.div>
      )}

      {/* Title - clean and bold */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 tracking-tight text-[#d4d4d4]"
      >
        {title}
      </motion.h2>

      {/* Subtitle - clean */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#858585] max-w-2xl mx-auto text-base md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
