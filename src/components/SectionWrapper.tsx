import React from 'react';
import { cn } from '../lib/utils';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  alt?: boolean;
  maxWidth?: 'max-w-5xl' | 'max-w-6xl' | 'max-w-4xl';
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  alt = false,
  maxWidth = 'max-w-6xl',
  className,
}) => {
  return (
    <section
      id={id}
      className={cn(
        'py-24 px-6 relative',
        alt && 'bg-slate-100/50 dark:bg-dark-800/50',
        className
      )}
    >
      <div className={cn('container mx-auto', maxWidth)}>
        {children}
      </div>
    </section>
  );
};
