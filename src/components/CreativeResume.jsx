import React, { useState, useRef, useEffect } from 'react';
import { FileText, ExternalLink, Sparkles, MapPin, Mail, Github, Linkedin } from 'lucide-react';

// CSS Custom Properties for consistent timing
const ANIMATION_CONFIG = {
  cardDelay: '0.5s',
  textStagger: '0.3s',
  hoverDuration: '0.3s',
  typewriterSpeed: 30
};

const CyberpunkTitle = ({ title }) => (
  <div className="text-center mb-16">
    <h2 className="text-6xl md:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 tracking-tight relative">
      {title}
      <div className="absolute inset-0 text-6xl md:text-8xl font-black text-orange-500 opacity-20 blur-sm">
        {title}
      </div>
    </h2>
    
    <div className="absolute -top-8 -right-8 text-orange-400 animate-bounce">
      <FileText size={32} className="animate-spin" />
    </div>
    <div className="absolute -bottom-8 -left-8 text-red-400 animate-bounce" style={{ animationDelay: '1s' }}>
      <Sparkles size={28} className="animate-pulse" />
    </div>
  </div>
);

// Simplified Typewriter Component
const TypewriterText = ({ text, isVisible }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, ANIMATION_CONFIG.typewriterSpeed);

    return () => clearInterval(timer);
  }, [text, isVisible]);

  return (
    <span>
      {displayedText}
      {!isComplete && isVisible && (
        <span className="animate-pulse text-orange-400 ml-1">|</span>
      )}
    </span>
  );
};

const CleanResumeCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  // Single intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleViewResume = () => {
    window.open('https://drive.google.com/file/d/1LJNX8y3o1EuzG0721QLeyDLU1Mnl21Jj/view?usp=drive_link', '_blank');
  };

  const socialLinks = [
    { 
      href: "https://github.com/Mosugar", 
      icon: Github, 
      label: "GitHub",
      className: "bg-zinc-800 hover:bg-orange-500" 
    },
    { 
      href: "https://www.linkedin.com/in/mohamedsekkar/", 
      icon: Linkedin, 
      label: "LinkedIn",
      className: "bg-blue-600/20 border border-blue-500/30 hover:bg-orange-500 hover:border-orange-500" 
    },
    { 
      href: "https://www.behance.net/mohamed_sekkar", 
      icon: ({ className }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-label="Behance">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
        </svg>
      ),
      label: "Behance", 
      className: "bg-purple-600/20 border border-purple-500/30 hover:bg-orange-500 hover:border-orange-500" 
    },
    { 
      href: "mailto:sekkarmohamedd@gmail.com", 
      icon: Mail, 
      label: "Email",
      className: "bg-red-600/20 border border-red-500/30 hover:bg-orange-500 hover:border-orange-500" 
    }
  ];

  const bioText = "I'm Mohamed Sekkar, a Software Engineering student at ENSA Kenitra and a creator of digital experiences. Beyond my studies, I've already built and launched projects for real-world clients, from luxury fashion e-commerce platforms to creative studio websites.";

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden bg-black">
      {/* Simplified Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-red-500/8 to-orange-500/8 rounded-full blur-3xl" />
      </div>

      {/* Minimal Grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 102, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 102, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="relative">
          <CyberpunkTitle title="RESUME" />
        </div>

        <div className="max-w-lg mx-auto">
          <div 
            ref={cardRef}
            className={`
              relative bg-zinc-900/95 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-8 
              transition-all duration-700 ease-out group overflow-hidden
              hover:border-orange-500/60 hover:shadow-2xl hover:shadow-orange-500/10
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            style={{ transitionDelay: ANIMATION_CONFIG.cardDelay }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            
            {/* Subtle hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="text-center relative z-10">
              
              {/* Profile Image */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-orange-500/50 group-hover:border-orange-500 transition-all duration-300">
                  <img 
                    src="src/assets/img/596d4fdf-7c3d-435f-af91-40d55b84baff.jpg"
                    alt="Mohamed Sekkar"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              </div>

              {/* Name & Title with staggered animation */}
              <div className="mb-6">
                <h2 className={`
                  text-2xl font-bold text-white mb-2 transition-all duration-700
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
                style={{ 
                  transitionDelay: `calc(${ANIMATION_CONFIG.cardDelay} + ${ANIMATION_CONFIG.textStagger})`,
                  textShadow: isHovered ? '0 0 20px rgba(255, 102, 0, 0.3)' : 'none'
                }}>
                  MOHAMED SEKKAR
                </h2>
                
                <p className={`
                  text-orange-400 font-medium text-lg mb-4 transition-all duration-700
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
                style={{ transitionDelay: `calc(${ANIMATION_CONFIG.cardDelay} + ${ANIMATION_CONFIG.textStagger} * 2)` }}>
                  Creative Full Stack Developer
                </p>
                
                <div className={`
                  text-gray-300 text-sm leading-relaxed mb-6 transition-all duration-700
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
                style={{ transitionDelay: `calc(${ANIMATION_CONFIG.cardDelay} + ${ANIMATION_CONFIG.textStagger} * 3)` }}>
                  <TypewriterText text={bioText} isVisible={isVisible} />
                </div>
              </div>

              {/* Contact Info */}
              <div className={`
                space-y-2 text-sm text-gray-300 mb-6 transition-all duration-700
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
              style={{ transitionDelay: `calc(${ANIMATION_CONFIG.cardDelay} + ${ANIMATION_CONFIG.textStagger} * 4)` }}>
                <div className="flex items-center justify-center gap-2 hover:text-orange-400 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-orange-400" />
                  <span>sekkarmohamedd@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-2 hover:text-orange-400 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>Kenitra, Morocco</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className={`
              flex justify-center mb-8 transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: `calc(${ANIMATION_CONFIG.cardDelay} + ${ANIMATION_CONFIG.textStagger} * 5)` }}>
              <button
                onClick={handleViewResume}
                className="
                  relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl 
                  font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2 
                  shadow-lg hover:shadow-orange-500/25 group/button overflow-hidden
                "
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700" />
                <ExternalLink className="w-4 h-4 relative z-10" />
                <span className="relative z-10">View Full Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className={`
              flex justify-center gap-4 pt-6 border-t border-orange-500/20 transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            style={{ transitionDelay: `calc(${ANIMATION_CONFIG.cardDelay} + ${ANIMATION_CONFIG.textStagger} * 6)` }}>
              {socialLinks.map((social, index) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                    hover:scale-110 hover:-translate-y-1 ${social.className}
                  `}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="w-5 h-5 text-white transition-transform duration-200 hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility and Performance Optimizations */}
      <style jsx>{`
        /* Respect user preferences for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Optimize animations for better performance */
        .group:hover .group-hover\\:scale-105 {
          transform: scale(1.05);
          will-change: transform;
        }
        
        .group:hover .group-hover\\:opacity-50 {
          will-change: opacity;
        }
      `}</style>
    </section>
  );
};

export default CleanResumeCard;