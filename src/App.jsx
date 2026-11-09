import React, { lazy, Suspense, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Hero from './components/Hero.jsx';
import GlobalBackground from './components/Layout.jsx';
import Navigation from './components/CyberpunkNavigation.jsx';
import About from './components/About.jsx';
import SEO from './components/SEO.jsx';
import IntroAnimation from './components/IntroAnimation.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { useLanguage } from './context/useLanguage';
import Cursor from './components/Cursor.jsx';

// Below-the-fold sections (gsap, carousel, contact form…) load in their own chunks
const Skills = lazy(() => import('./components/Skills.jsx'));
const ExperienceHistory = lazy(() => import('./components/ExperienceHistory.jsx'));
const Resume = lazy(() => import('./components/Resume.jsx'));
const Work = lazy(() => import('./components/Work.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const TourGuide = lazy(() => import('./components/TourGuide.jsx'));

const SkipLink = () => {
  const { t } = useLanguage();
  return <a href="#main" className="skip-link">{t.a11y.skipToContent}</a>;
};

function App() {
  const [visible, setVisible] = useState(false);
  // While the intro overlay is up, the page behind it must not be reachable with Tab
  const [introOpen, setIntroOpen] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = '#09090f';
    document.documentElement.style.backgroundColor = '#09090f';
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
      <Cursor />
      <IntroAnimation onClose={() => setIntroOpen(false)} />
      <div className={`app-container ${visible ? 'visible' : ''}`} inert={introOpen}>
        <SkipLink />
        <SEO />
        <GlobalBackground>
          <Navigation />
          <Suspense fallback={null}>
            <TourGuide />
          </Suspense>
          <main id="main" tabIndex={-1} className="outline-none">
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
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
