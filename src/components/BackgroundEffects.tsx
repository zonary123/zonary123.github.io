import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <>
      <div
        className="fixed inset-0 z-[-5] opacity-[0.04] dark:opacity-[0.06] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-25%] left-[-15%] w-[60%] h-[60%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[130px] md:blur-[180px] mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-25%] right-[-15%] w-[60%] h-[60%] rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-[130px] md:blur-[180px] mix-blend-multiply dark:mix-blend-screen" />
      </div>
    </>
  );
};
