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

      {/* Single subtle gradient orb - consistent IDE blue */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-30%] left-[-20%] w-[60%] h-[60%] rounded-full bg-[#569CD6]/[0.03] blur-[200px]" />
        <div className="absolute bottom-[-30%] right-[-20%] w-[60%] h-[60%] rounded-full bg-[#4EC9B0]/[0.02] blur-[200px]" />
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
