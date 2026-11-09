import React, { lazy, Suspense, useEffect, useState } from 'react';
import Hero from './components/Hero.jsx';
import GlobalBackground from './components/Layout.jsx';
import Navigation from './components/CyberpunkNavigation.jsx';
import About from './components/About.jsx';
import SEO from './components/SEO.jsx';
import IntroAnimation from './components/IntroAnimation.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import Cursor from './components/Cursor.jsx';

// Below-the-fold sections (gsap, carousel, contact form…) load in their own chunks
const Skills = lazy(() => import('./components/Skills.jsx'));
const ExperienceHistory = lazy(() => import('./components/ExperienceHistory.jsx'));
const Resume = lazy(() => import('./components/Resume.jsx'));
const Work = lazy(() => import('./components/Work.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const TourGuide = lazy(() => import('./components/TourGuide.jsx'));

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = '#09090f';
    document.documentElement.style.backgroundColor = '#09090f';
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <LanguageProvider>
      <Cursor />
      <IntroAnimation />
      <div className={`app-container ${visible ? 'visible' : ''}`}>
        <SEO />
        <GlobalBackground>
          <Navigation />
          <Suspense fallback={null}>
            <TourGuide />
          </Suspense>
          <main>
            <Hero />
            <About />
            <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
              <Skills />
              <ExperienceHistory />
              <Resume />
              <Work />
              <Footer />
            </Suspense>
          </main>
        </GlobalBackground>
      </div>
    </LanguageProvider>
  );
}

export default App;
