import React, { useState, useEffect, useRef } from 'react';
import { Code, Zap, Brain, Coffee, Gamepad2, Music, Globe, User, MapPin, Calendar, Download, Sparkles, Rocket, Heart, Target, Mail, Github, Linkedin } from 'lucide-react';
import CyberpunkTitle from './CyberpunkTitle';

const CyberpunkAbout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [currentFact, setCurrentFact] = useState(0);
  const sectionRef = useRef(null);

  const profileData = {
    name: "Mohamed Sekkar",
    age: 23,
    location: "Kenitra, Morocco",
    role: "Full-Stack Developer",
    email: "mohamedsekkar1110@gmail.com"
  };

  const skills = [
    { name: "React & Frontend", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Laravel & Backend", level: 90, color: "from-green-500 to-emerald-500" },
    { name: "UI/UX Design", level: 85, color: "from-purple-500 to-pink-500" },
    { name: "DevOps & Cloud", level: 80, color: "from-orange-500 to-red-500" }
  ];

  const funFacts = [
    "🎮 I code better after a gaming session",
    "☕ Coffee is my debugging fuel",
    "🎵 Lo-fi music = peak productivity",
    "🚀 Always learning something new",
    "🌍 Dream of global impact through code"
  ];

  // Intersection Observer
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

  // Rotate fun facts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Inline styles for guaranteed green dot
  const greenDotStyles = {
    position: 'absolute',
    bottom: '8px',
    right: '8px',
    width: '24px',
    height: '24px',
    backgroundColor: '#10b981', // Green-500
    borderRadius: '50%',
    border: '4px solid #000000',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(16, 185, 129, 0.4)',
    animation: 'greenPulse 2s ease-in-out infinite'
  };

  const whiteDotStyles = {
    width: '8px',
    height: '8px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    animation: 'whitePulse 2s ease-in-out infinite'
  };

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-red-500/15 to-orange-500/15 rounded-full blur-3xl" />
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

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <CyberpunkTitle 
            title="ABOUT ME"
            gradient="from-orange-400 via-red-400 to-orange-500"
            glowColor="text-orange-500"
            glitchColor="text-red-500"
            leftIcon={User}
            rightIcon={Brain}
            leftIconColor="text-orange-400"
            rightIconColor="text-red-400"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Profile */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="bg-black/40 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Profile Image */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src="https://res.cloudinary.com/dylpck2et/image/upload/v1752367825/sugar_copy_2_tdpniz.jpg" 
                      alt="Mohamed Sekkar"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute inset-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur opacity-50"></div>
                  
                  {/* GUARANTEED GREEN STATUS INDICATOR WITH INLINE STYLES */}
                  <div style={greenDotStyles}>
                    <div style={whiteDotStyles}></div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-3xl font-bold text-white mb-2">{profileData.name}</h3>
                  <p className="text-orange-400 font-medium text-lg mb-3">{profileData.role}</p>
                  
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{profileData.location}</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{profileData.age} years old</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center md:justify-start gap-4 mt-4">
                    <a href="https://github.com/Mosugar" target="_blank" rel="noopener noreferrer" 
                       className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a href="https://www.linkedin.com/in/mohamedsekkar/" target="_blank" rel="noopener noreferrer"
                       className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a href={`mailto:${profileData.email}`}
                       className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="bg-black/40 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-500">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-orange-400" />
                <h4 className="text-white font-bold">Fun Fact</h4>
              </div>
              <p className="text-gray-300 text-lg font-mono text-center py-2">
                {funFacts[currentFact]}
              </p>
            </div>
          </div>

          {/* Right Side - About & Skills */}
          <div className="space-y-8">
            {/* Bio */}
            <div className="bg-black/40 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-500">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Rocket className="w-6 h-6 text-orange-400" />
                Who Am I?
              </h4>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a <span className="text-orange-400 font-semibold">23-year-old Full-Stack Developer</span> from 
                  Kenitra, Morocco, passionate about transforming ideas into digital realities.
                </p>
                <p>
                  With <span className="text-orange-400 font-semibold">5+ years of coding experience</span>, I specialize 
                  in React, Laravel, and modern web technologies. I believe every great application starts with 
                  understanding the problem it solves.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new frameworks, contributing to open source, 
                  or planning the next big project that could make a difference.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-black/40 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-500">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6 text-orange-400" />
                Core Skills
              </h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-orange-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out ${hoveredSkill === index ? 'animate-pulse' : ''}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations for Green Dot */}
      <style jsx>{`
        @keyframes greenPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.8), 0 0 40px rgba(16, 185, 129, 0.4);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
            box-shadow: 0 0 30px rgba(16, 185, 129, 1), 0 0 60px rgba(16, 185, 129, 0.6);
          }
        }
        
        @keyframes whitePulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
};

export default CyberpunkAbout;