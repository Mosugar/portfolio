// src/App.jsx - Fixed with smooth transition
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import MatrixRain from './components/MatrixRain.jsx';
import Footer from './components/Footer.jsx';
import Work from './components/Work.jsx';
import Services from './components/Services.jsx';
import GlobalBackground from './components/Layout.jsx';
import ExperienceHistory from './components/ExperienceHistory.jsx';
import CyberpunkNavigation from './components/CyberpunkNavigation.jsx';
import CyberpunkLoader from './components/CyberpunkLoader.jsx';
import About from './components/About.jsx';
// import UIUXPortfolio from './components/UIUXPortfolio.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    // Start fade out of loader
    setIsLoading(false);
    
    // Show content with delay for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  // Set dark background immediately to prevent white flash
  useEffect(() => {
    document.body.style.backgroundColor = '#0a0a0a';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.backgroundColor = '#0a0a0a';
    
    return () => {
      // Cleanup
      document.body.style.backgroundColor = '';
      document.documentElement.style.backgroundColor = '';
    };
  }, []);

  if (isLoading) {
    return <CyberpunkLoader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`app-container ${showContent ? 'visible' : ''}`}>
      <GlobalBackground>
        <CyberpunkNavigation />
        
        <div id="home">
          <Hero />
        </div>

        <MatrixRain />
        
        <div id="about">
          <About />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="services">
          <Services />
        </div>
        
        <div id="experience">
          <ExperienceHistory/>
        </div>
        {/* <div id="ui-ux">
        <UIUXPortfolio />
        </div> */}
        
        <div id="works">
          <Work />
        </div>
        
        <div id="contact">
          <Footer />
        </div>
        
        
      </GlobalBackground>

      <style jsx>{`
        .app-container {
          opacity: 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 50%, #0a0a0a 100%);
          min-height: 100vh;
          transition: opacity 0.8s ease-in;
        }
        
        .app-container.visible {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}

export default App;