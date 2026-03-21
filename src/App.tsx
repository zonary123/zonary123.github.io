import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Formation } from './sections/Formation';
import { WorkExperience } from './sections/WorkExperience';
import { Skills } from './sections/Skills';

const Projects = lazy(() => import('./sections/Projects').then(m => ({ default: m.Projects })));
const TechnicalExperience = lazy(() => import('./sections/TechnicalExperience').then(m => ({ default: m.TechnicalExperience })));
const Certificates = lazy(() => import('./sections/Certificates').then(m => ({ default: m.Certificates })));
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));

function App() {
  return (
    <div className="min-h-screen relative flex flex-col overflow-x-hidden">

      <BackgroundEffects />

      <Navbar />

      <main className="flex-grow pt-24">
        <Hero />
        <About />
        <Formation />
        <WorkExperience />
        <Skills />
        <Suspense fallback={
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
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
