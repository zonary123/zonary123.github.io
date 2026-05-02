import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Formation } from './sections/Formation';
import { WorkExperience } from './sections/WorkExperience';
import { Skills } from './sections/Skills';

// Lazy load below-the-fold sections for better LCP
const Projects = lazy(() =>
  import('./sections/Projects').then((m) => ({ default: m.Projects })),
);
const TechnicalExperience = lazy(() =>
  import('./sections/TechnicalExperience').then((m) => ({
    default: m.TechnicalExperience,
  })),
);
const Certificates = lazy(() =>
  import('./sections/Certificates').then((m) => ({ default: m.Certificates })),
);
const Contact = lazy(() =>
  import('./sections/Contact').then((m) => ({ default: m.Contact })),
);

// IDE-style loading fallback
const SectionLoader = () => (
  <div className="min-h-[40vh] flex items-center justify-center">
    <div className="flex items-center gap-3 px-6 py-4 rounded-lg ide-panel">
      <div className="w-3 h-3 rounded-full bg-[#569CD6] animate-pulse" />
      <div
        className="w-3 h-3 rounded-full bg-[#C586C0] animate-pulse"
        style={{ animationDelay: '0.2s' }}
      />
      <div
        className="w-3 h-3 rounded-full bg-[#4EC9B0] animate-pulse"
        style={{ animationDelay: '0.4s' }}
      />
      <span className="text-code text-editor-muted ml-2">
        loading section...
      </span>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen relative flex flex-col overflow-x-hidden bg-editor-bg text-editor-fg">
      <BackgroundEffects />

      <Navbar />

      <main className="flex-grow pt-24">
        <Hero />
        <About />
        <Formation />
        <WorkExperience />
        <Skills />
        <Suspense fallback={<SectionLoader />}>
          <Projects />
          <TechnicalExperience />
          <Certificates />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
