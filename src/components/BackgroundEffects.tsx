import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const BackgroundEffects: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      {/* Base background - solid IDE color */}
      <div
        className={`fixed inset-0 z-[-6] ${isDark ? 'bg-[#16181d]' : 'bg-[#f3f6fb]'}`}
      />

      {/* Subtle noise texture */}
      <div
        className="fixed inset-0 z-[-5] pointer-events-none"
        style={{
          opacity: isDark ? 0.04 : 0.015,
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* Colorful gradient orbs - multi-color for vibrancy */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {/* Blue orb - top left */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[150px]"
          style={{
            backgroundColor: isDark
              ? 'rgb(86 156 214 / 0.08)'
              : 'rgb(86 156 214 / 0.15)',
          }}
        />
        {/* Cyan orb - bottom right */}
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px]"
          style={{
            backgroundColor: isDark
              ? 'rgb(78 201 176 / 0.08)'
              : 'rgb(78 201 176 / 0.15)',
          }}
        />
        {/* Magenta orb - top right */}
        <div
          className="absolute top-[10%] right-[-5%] w-[30%] h-[30%] rounded-full blur-[120px]"
          style={{
            backgroundColor: isDark
              ? 'rgb(197 134 192 / 0.06)'
              : 'rgb(197 134 192 / 0.1)',
          }}
        />
        {/* Yellow orb - bottom left */}
        <div
          className="absolute bottom-[20%] left-[-5%] w-[25%] h-[25%] rounded-full blur-[100px]"
          style={{
            backgroundColor: isDark
              ? 'rgb(220 220 170 / 0.05)'
              : 'rgb(220 220 170 / 0.09)',
          }}
        />
        {/* Orange orb - center top */}
        <div
          className="absolute top-[-10%] left-[40%] w-[30%] h-[30%] rounded-full blur-[120px]"
          style={{
            backgroundColor: isDark
              ? 'rgb(206 145 120 / 0.05)'
              : 'rgb(206 145 120 / 0.09)',
          }}
        />
      </div>

      {/* Grid pattern - subtle */}
      <div
        className="fixed inset-0 z-[-4] pointer-events-none"
        style={{
          opacity: isDark ? 0.03 : 0.05,
          backgroundImage: `linear-gradient(to right, ${isDark ? '#4b5563' : '#cbd5e1'} 1px, transparent 1px),
                            linear-gradient(to bottom, ${isDark ? '#4b5563' : '#cbd5e1'} 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
    </>
  );
};
