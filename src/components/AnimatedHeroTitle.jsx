import React, { useEffect, useRef } from 'react';

const AnimatedTextSection = () => {
  const creativeRef = useRef(null);
  const fullStackRef = useRef(null);
  const developerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      const sectionTop = rect.top;
      
      // More gradual animation - starts earlier and finishes later
      const startTrigger = windowHeight * 1.2; // Start when section is still below viewport
      const endTrigger = windowHeight * 0.3;   // Finish when section is well into viewport
      
      const animationRange = startTrigger - endTrigger;
      const currentPosition = startTrigger - sectionTop;
      
      // Create smoother, slower progress
      const rawProgress = Math.max(0, Math.min(1, currentPosition / animationRange));
      const progress = smoothEasing(rawProgress); // Apply easing function
      
      if (creativeRef.current && fullStackRef.current && developerRef.current) {
        // Creative slides in from left with larger distance
        const creativeX = -800 + (800 * progress);
        creativeRef.current.style.transform = `translateX(${creativeX}px)`;
        creativeRef.current.style.opacity = progress;
        
        // Full Stack stays centered
        fullStackRef.current.style.opacity = Math.max(0.3, progress);
        
        // Developer slides in from right with larger distance
        const developerX = 800 - (800 * progress);
        developerRef.current.style.transform = `translateX(${developerX}px)`;
        developerRef.current.style.opacity = progress;
      }
    };

    // Smooth easing function for more natural animation
    const smoothEasing = (t) => {
      return t * t * (3.0 - 2.0 * t); // Smoothstep easing
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative py-20 flex items-center justify-center bg-black overflow-hidden">
      {/* Main animated title */}
      <div className="text-center px-4 relative z-10">
        <div className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight tracking-tight">
          {/* Creative - slides from left */}
          <div 
            ref={creativeRef}
            className="block transition-all ease-out"
            style={{ 
              transform: 'translateX(-800px)',
              opacity: 0,
              willChange: 'transform, opacity',
              transitionDuration: '0.1s'
            }}
          >
            Creative
          </div>
          
          {/* Full Stack - stays centered */}
          <div 
            ref={fullStackRef}
            className="block italic transition-opacity ease-out"
            style={{ 
              opacity: 0.3,
              willChange: 'opacity',
              transitionDuration: '0.1s'
            }}
          >
            Full Stack
          </div>
          
          {/* Developer - slides from right */}
          <div 
            ref={developerRef}
            className="block transition-all ease-out"
            style={{ 
              transform: 'translateX(800px)',
              opacity: 0,
              willChange: 'transform, opacity',
              transitionDuration: '0.1s'
            }}
          >
            Developer
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Performance optimizations */
        .transition-all {
          will-change: transform, opacity;
        }
        
        /* Responsive text sizing */
        @media (max-width: 768px) {
          .text-6xl {
            font-size: 3.5rem;
            line-height: 1.1;
          }
        }
        
        @media (max-width: 480px) {
          .text-6xl {
            font-size: 2.8rem;
            line-height: 1.1;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedTextSection;