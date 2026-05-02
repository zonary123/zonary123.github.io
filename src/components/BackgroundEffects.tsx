import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <>
      {/* Base background - solid IDE color */}
      <div className="fixed inset-0 z-[-6] bg-[#1e1e1e]" />

      {/* Subtle noise texture */}
      <div
        className="fixed inset-0 z-[-5] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* Colorful gradient orbs - multi-color for vibrancy */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {/* Blue orb - top left */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#569CD6]/[0.08] blur-[150px]" />
        {/* Cyan orb - bottom right */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#4EC9B0]/[0.08] blur-[150px]" />
        {/* Magenta orb - top right */}
        <div className="absolute top-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#C586C0]/[0.06] blur-[120px]" />
        {/* Yellow orb - bottom left */}
        <div className="absolute bottom-[20%] left-[-5%] w-[25%] h-[25%] rounded-full bg-[#DCDCAA]/[0.05] blur-[100px]" />
        {/* Orange orb - center top */}
        <div className="absolute top-[-10%] left-[40%] w-[30%] h-[30%] rounded-full bg-[#CE9178]/[0.05] blur-[120px]" />
      </div>

      {/* Grid pattern - subtle */}
      <div
        className="fixed inset-0 z-[-4] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #3e3e42 1px, transparent 1px),
                            linear-gradient(to bottom, #3e3e42 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
    </>
  );
};
