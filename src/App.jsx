// src/App.jsx - Updated with SEO integration
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
import SEO from './components/SEO.jsx';
import AnimatedHeroTitle from './components/AnimatedHeroTitle';
import CreativeResume from './components/CreativeResume.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

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

  // Track current section for dynamic SEO
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'services', 'experience', 'works', 'contact'];
      let current = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? '' : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }
      
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic SEO content based on current section
  const getSEOContent = () => {
    const baseUrl = "https://mohamedsekkar.dev";
    
    switch (currentSection) {
      case 'about':
        return {
          title: "About Mohamed Sekkar - Full-Stack Developer from Morocco | Portfolio",
          description: "Learn about Mohamed Sekkar, a 23-year-old Full-Stack Developer from Kenitra, Morocco. Specializing in React, Laravel, and modern web technologies with 5+ years of experience.",
          url: `${baseUrl}#about`,
          section: 'about'
        };
      case 'skills':
        return {
          title: "Technical Skills - React, Laravel, PHP | Mohamed Sekkar Portfolio",
          description: "Explore Mohamed Sekkar's technical skills including React.js, Laravel, PHP, JavaScript, MySQL, UI/UX Design, and modern web development technologies.",
          url: `${baseUrl}#skills`,
          section: 'skills'
        };
      case 'services':
        return {
          title: "Web Development Services - React & Laravel Expert | Mohamed Sekkar",
          description: "Professional web development services including frontend development, backend development, UI/UX design, and full-stack solutions using React and Laravel.",
          url: `${baseUrl}#services`,
          section: 'services'
        };
      case 'experience':
        return {
          title: "Professional Experience - Full-Stack Developer | Mohamed Sekkar",
          description: "View Mohamed Sekkar's professional experience as Head of Development at Wardd Studios, IT Development specialist, and freelance full-stack developer.",
          url: `${baseUrl}#experience`,
          section: 'experience'
        };
      case 'works':
        return {
          title: "Portfolio Projects - Web Development Work | Mohamed Sekkar",
          description: "Explore Mohamed Sekkar's portfolio showcasing professional web development projects including ElJamai Couture, Wardd Studio, Stretchedweb, and more.",
          url: `${baseUrl}#works`,
          section: 'works'
        };
      case 'contact':
        return {
          title: "Contact Mohamed Sekkar - Hire Full-Stack Developer | Get Quote",
          description: "Get in touch with Mohamed Sekkar for your web development projects. Available for freelance work worldwide. Contact for React, Laravel, and full-stack development services.",
          url: `${baseUrl}#contact`,
          section: 'contact'
        };
      default:
        return {
          title: "Mohamed Sekkar - Full-Stack Developer | React, Laravel & Modern Web Development",
          description: "Experienced Full-Stack Developer specializing in React, Laravel, PHP, and modern web technologies. Creating scalable web applications and stunning UI/UX designs. Available for freelance projects in Morocco and worldwide.",
          url: baseUrl,
          section: ''
        };
    }
  };

  if (isLoading) {
    return (
      <>
        <SEO {...getSEOContent()} />
        <CyberpunkLoader onComplete={handleLoadingComplete} />
      </>
    );
  }

  return (
    <div className={`app-container ${showContent ? 'visible' : ''}`}>
      <SEO {...getSEOContent()} />
      <GlobalBackground>
        <CyberpunkNavigation />
        
        <main>
          <section id="home" aria-label="Homepage">
            <Hero />
          </section>

          <MatrixRain />
          
          <section id="about" aria-label="About Mohamed Sekkar">
            <About />
          </section>
          
          <section id="skills" aria-label="Technical Skills">
            <Skills />
          </section>
          <section aria-label="Animated Title">
            <AnimatedHeroTitle/>
          </section>
          
          {/* <section id="services" aria-label="Development Services">
            <Services />
          </section> */}
          <section id="creativeresume" aria-label="Development Services">
            <CreativeResume />
          </section>
          <section id="experience" aria-label="Professional Experience">
            <ExperienceHistory/>
          </section>
          
          <section id="works" aria-label="Portfolio Projects">
            <Work />
          </section>
          
          <section id="contact" aria-label="Contact Information">
            <Footer />
          </section>
        </main>
        
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