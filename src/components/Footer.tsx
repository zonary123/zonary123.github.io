import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-dark-900/50 backdrop-blur-md">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Carlos Varas Alonso (zonary123). All rights reserved.
        </p>
      </div>
    </footer>
  );
};
