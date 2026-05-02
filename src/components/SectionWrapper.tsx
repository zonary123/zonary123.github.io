import React from 'react';
import { cn } from '../lib/utils';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  maxWidth?: 'max-w-5xl' | 'max-w-6xl' | 'max-w-4xl';
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  maxWidth = 'max-w-6xl',
  className,
}) => {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative', className)}
    >
      <div className={cn('container mx-auto', maxWidth)}>{children}</div>
    </section>
  );
};
