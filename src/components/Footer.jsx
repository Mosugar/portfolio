import React from 'react';
import { Heart, Github, Linkedin, Clock, ArrowRight, Mail } from 'lucide-react';

// SVG Logo Component
const MoSugarLogo = ({ className }) => (
  <svg 
    className={className}
    viewBox="0 0 129.79 27.71" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="currentColor">
      <path d="M26.16,1.81v18.28h-3.41v-10.06l-4.66,10.06h-1.79l-4.65-10.11v10.12h-3.41V1.81h3.07l5.9,12.54L23.09,1.81h3.07Z"/>
      <path d="M32.05,19.58c-1-.57-1.77-1.38-2.33-2.42-.56-1.04-.83-2.24-.83-3.59s.28-2.53.85-3.58c.56-1.05,1.34-1.86,2.33-2.44.99-.58,2.12-.87,3.38-.87s2.4.29,3.39.86,1.78,1.38,2.34,2.43.85,2.25.85,3.6-.28,2.52-.85,3.56-1.34,1.85-2.34,2.43-2.13.87-3.39.87-2.4-.29-3.39-.86h-.01ZM37.64,16.31c.55-.68.82-1.59.82-2.73s-.27-2.06-.82-2.74-1.28-1.03-2.2-1.03-1.63.34-2.17,1.03-.82,1.6-.82,2.74.27,2.05.81,2.73c.54.68,1.26,1.01,2.18,1.01s1.65-.34,2.2-1.01Z"/>
      <path d="M54.83,19.73c-1.15-.48-2.07-1.17-2.74-2.07-.68-.9-1.05-1.97-1.12-3.2h3.72c.1.88.52,1.59,1.24,2.12s1.66.79,2.82.79c1.09,0,1.96-.22,2.6-.66s.96-1.05.96-1.83c0-1.13-.8-1.87-2.39-2.24l-3.75-.81c-1.54-.35-2.73-.92-3.56-1.72s-1.25-1.83-1.25-3.1c0-1.09.29-2.05.86-2.89.57-.83,1.39-1.48,2.46-1.95s2.31-.7,3.73-.7c2.12,0,3.84.51,5.18,1.52,1.34,1.01,2.07,2.43,2.21,4.25h-3.69c-.17-1.8-1.39-2.71-3.64-2.71-1.04,0-1.86.19-2.47.57s-.91.92-.91,1.61c0,.55.2.99.6,1.3.4.31,1.02.56,1.87.75l3.62.81c3.31.71,4.97,2.36,4.97,4.94,0,1.21-.3,2.27-.91,3.16s-1.47,1.57-2.58,2.04c-1.11.47-2.4.7-3.88.7s-2.79-.24-3.94-.71v.03Z"/>
      <path d="M80.7,7.02v13.08h-2.73l-.36-1.85c-.94,1.46-2.39,2.18-4.37,2.18-1.51,0-2.64-.46-3.41-1.37-.76-.91-1.14-2.35-1.14-4.33v-7.72h3.46v7.72c0,.83.19,1.45.56,1.86s.89.61,1.55.61c.83,0,1.53-.31,2.11-.94s.86-1.51.86-2.65v-6.61h3.48v.02Z"/>
      <path d="M96.26,7.02v12.02c0,2.41-.58,4.21-1.74,5.41-1.16,1.2-2.75,1.79-4.76,1.79-1.77,0-3.21-.42-4.32-1.25s-1.73-2.09-1.87-3.77h3.22c.14.64.46,1.14.96,1.51s1.12.55,1.85.55c.99,0,1.77-.34,2.34-1.01.57-.68.86-1.6.86-2.76v-.52c-.94.97-2.14,1.46-3.62,1.46-1.21,0-2.29-.29-3.21-.86s-1.65-1.38-2.16-2.42c-.51-1.04-.77-2.25-.77-3.62s.27-2.6.82-3.64,1.27-1.83,2.18-2.38,1.89-.82,2.95-.82c.83,0,1.61.17,2.33.52.72.35,1.32.82,1.81,1.43l.26-1.64h2.87ZM92.8,12.19c-.19-.75-.54-1.33-1.05-1.76-.51-.42-1.15-.64-1.91-.64-.99,0-1.77.34-2.35,1.03s-.87,1.6-.87,2.74.29,2.05.87,2.73,1.37,1.01,2.38,1.01c.76,0,1.41-.2,1.94-.59s.86-.94,1-1.65v-2.89.02Z"/>
      <path d="M108.87,8.04c.99.91,1.48,2.29,1.48,4.15v7.91h-2.73l-.34-1.74c-.38.55-.95,1.04-1.69,1.46s-1.6.62-2.55.62c-1.37,0-2.47-.35-3.3-1.04-.83-.69-1.25-1.63-1.25-2.81,0-1.02.34-1.85,1.01-2.47.68-.62,1.62-1.1,2.82-1.42s2.73-.58,4.56-.77v-.18c0-.75-.19-1.3-.56-1.66s-.91-.55-1.6-.55-1.24.18-1.62.53c-.39.36-.58.8-.58,1.34h-3.46c0-.9.24-1.71.73-2.43.49-.72,1.16-1.28,2.03-1.69.87-.41,1.86-.61,2.97-.61,1.73,0,3.09.46,4.08,1.37h0ZM105.83,17.19c.57-.48.93-1.13,1.07-1.95v-1.04c-1.61.09-2.82.31-3.63.68-.81.36-1.21.88-1.21,1.56,0,.49.17.85.51,1.11.34.25.78.38,1.31.38.73,0,1.38-.24,1.95-.73h0Z"/>
      <path d="M121.53,6.73l-.16,3.48c-.33-.14-.76-.21-1.30-.21-.57,0-1.12.13-1.65.4-.53.27-.96.65-1.29,1.16s-.49,1.08-.49,1.74v6.79h-3.49V7.01h2.89l.29,1.85c.99-1.46,2.45-2.18,4.4-2.18.29,0,.56.02.81.05h0Z"/>
    </g>
  </svg>
);

const Footer = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <div 
            className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl"
          />
          <div 
            className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-red-500/15 to-orange-500/15 rounded-full blur-3xl"
          />
        </div>
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 102, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 102, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-12">
          <a href="#" className="inline-block group">
            <MoSugarLogo className="h-16 text-white transition-all duration-300 group-hover:text-orange-400 group-hover:scale-105" />
          </a>
        </div>

        {/* Current Time */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full backdrop-blur-sm">
            <Clock className="w-5 h-5 text-orange-400 animate-pulse" />
            <span className="text-white font-mono text-lg tracking-wider">
              {currentTime.toLocaleTimeString('en-US', { 
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </span>
            <span className="text-orange-400 font-mono text-sm">GMT+1</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mb-12">
          <h3 className="text-white text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Transforming bold visions into digital reality through code and creativity.
          </p>
          <a 
            href="mailto:mohamedsekkar1110@gmail.com"
            className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 overflow-hidden inline-flex items-center gap-3"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <span className="relative flex items-center gap-3">
              Let's Work Together
              
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </a>
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <div className="flex justify-center items-center gap-6">
            <a 
              href="https://github.com/Mosugar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-full hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-white group-hover:text-orange-400 transition-colors duration-300" />
              <span className="text-white group-hover:text-orange-400 font-medium">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamedsekkar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-blue-600/20 border border-blue-500/30 rounded-full hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              <span className="text-blue-400 group-hover:text-blue-300 font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
       

        {/* Copyright */}
        <div className="mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent mb-8"></div>
          <p className="text-white text-lg font-medium">
            Copyright © {new Date().getFullYear()}, Designed & Developed with{' '}
            <Heart className="inline w-5 h-5 text-red-500 mx-1 animate-pulse" />
            by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-bold">
              MoSugar
            </span>
          </p>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full opacity-60 animate-ping" />
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-red-400 rounded-full opacity-40 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-50 animate-bounce" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;