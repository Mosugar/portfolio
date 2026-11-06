import React, { useEffect, useState } from 'react';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Footer from './components/Footer.jsx';
import Work from './components/Work.jsx';
import GlobalBackground from './components/Layout.jsx';
import ExperienceHistory from './components/ExperienceHistory.jsx';
import Navigation from './components/CyberpunkNavigation.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import SEO from './components/SEO.jsx';
import TourGuide from './components/TourGuide.jsx';
import IntroAnimation from './components/IntroAnimation.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = '#09090f';
    document.documentElement.style.backgroundColor = '#09090f';
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <LanguageProvider>
      <IntroAnimation />
      <div className={`app-container ${visible ? 'visible' : ''}`}>
        <SEO />
        <GlobalBackground>
          <Navigation />
          <TourGuide />
          <main>
            <Hero />
            <About />
            <Skills />
            <ExperienceHistory />
            <Resume />
            <Work />
            <Footer />
          </main>
        </GlobalBackground>
      </div>
    </LanguageProvider>
  );
}

export default App;
