import React, { useState, useRef, useEffect, memo, useCallback } from "react";
import { ExternalLink, Eye, Code, Palette } from 'lucide-react';

// Updated cardDetails with TL Global project
const cardDetails = [
  {
    id: 1,
    name: "TL Global",
    img: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/tl_global_screenshot.png",
    url: "https://toufaiq.vercel.app/",
    target: "_blank",
    hex: "#10B981"
  },
  {
    id: 2,
    name: "ElJamai Couture",
    img: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/d-clubArtboard_1_cjqxkq.png",
    url: "https://eljamaicouture.ae",
    target: "_blank",
    hex: "#8B5CF6"
  },
  {
    id: 3,
    name: "Wardd Studio",
    img: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/wardd_cover_two_u2j8hi_ahpexf.webp",
    url: "https://warddstudio.com",
    target: "_blank",
    hex: "#F59E0B"
  },
  {
    id: 4,
    name: "Stretched Web",
    img: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/Stretched_1_hjoiei.jpg",
    url: "https://stretched-web.vercel.app",
    target: "_blank",
    hex: "#3B82F6"
  },
  {
    id: 5,
    name: "Wardd Music",
    img: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/wardd_music_02__xgryox.jpg",
    url: "https://www.warddmusic.com/",
    target: "_blank",
    hex: "#EF4444"
  },
  {
    id: 6,
    name: "CSBA Law Firm",
    img: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/lawyer_eto36c.webp",
    url: "https://lawyer-sulaiman.vercel.app/",
    target: "_blank",
    hex: "#059669"
  },
  {
    id: 7,
    name: "Pristine Dental Center",
    img: "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/pristine_dental_screenshot.png",
    url: "https://pristinedentalcenter.vercel.app/",
    target: "_blank",
    hex: "#06B6D4"
  },
  {
    id: 8,
    name: "Gourmet & Grove",
    img: "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/gg_u096hn.webp",
    url: "https://gourmet-grove.vercel.app/",
    target: "_blank",
    hex: "#F97316"
  }
];

const CyberpunkTitle = ({ title, gradient, glowColor, glitchColor, leftIcon, rightIcon, leftIconColor, rightIconColor }) => {
  const [isHovering, setIsHovering] = useState(false);
  const LeftIcon = leftIcon || Code;
  const RightIcon = rightIcon || Palette;

  return (
    <div 
      className="text-center mb-16 relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative">
        <h2 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r ${gradient} tracking-tight relative`}>
          {title}
          <div className={`absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-black ${glowColor} opacity-20 blur-sm`}>
            {title}
          </div>
        </h2>
        
        <div className={`absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-black ${glitchColor} opacity-30 ${isHovering ? 'animate-pulse' : ''}`}>
          <span style={{ transform: 'translate(-2px, -2px)' }}>{title}</span>
        </div>
      </div>

      <div className={`absolute -top-4 md:-top-8 -right-4 md:-right-8 ${leftIconColor} animate-bounce`}>
        <LeftIcon size={32} className="animate-spin" />
      </div>
      <div className={`absolute -bottom-4 md:-bottom-8 -left-4 md:-left-8 ${rightIconColor} animate-bounce`} style={{ animationDelay: '1s' }}>
        <RightIcon size={28} className="animate-pulse" />
      </div>
    </div>
  );
};

// Helper function to determine if a color is light or dark
const isLightColor = (hex) => {
  const color = hex.replace('#', '');
  const namedColors = {
    'white': '#ffffff',
    'black': '#000000',
    'red': '#ff0000',
    'green': '#008000',
    'blue': '#0000ff',
    'yellow': '#ffff00',
    'cyan': '#00ffff',
    'magenta': '#ff00ff',
    'gray': '#808080',
    'grey': '#808080'
  };
  
  const actualColor = namedColors[color.toLowerCase()] || `#${color}`;
  const cleanColor = actualColor.replace('#', '');
  
  const r = parseInt(cleanColor.substring(0, 2), 16);
  const g = parseInt(cleanColor.substring(2, 4), 16);
  const b = parseInt(cleanColor.substring(4, 6), 16);
  
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
};

// Enhanced Project Card with modern design
const ProjectCard = memo(({ card, index, activeItem, handleMouseEnter }) => {
  const isActive = activeItem === index;
  const isSmallScreen = window.innerWidth <= 1150;
  const [isHovered, setIsHovered] = useState(false);
  
  const backgroundColor = (isActive || isSmallScreen) ? card.hex : 'rgba(20, 20, 20, 0.8)';
  const isLight = isLightColor(backgroundColor);
  
  const textColor = isLight ? '#1a1a1a' : '#ffffff';

  return (
    <div
      className={`relative cursor-pointer transition-all duration-500 ease-out group ${
        isActive ? 'active-card' : ''
      }`}
      onClick={() => handleMouseEnter(index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: backgroundColor,
        height: isSmallScreen ? '70vh' : '80vh',
        padding: isSmallScreen ? '20px' : '30px',
        borderRadius: isSmallScreen ? '20px' : '0px',
        border: isSmallScreen ? '1px solid rgba(255, 102, 0, 0.3)' : 'none',
        borderRight: !isSmallScreen ? '2px solid rgba(255, 102, 0, 0.2)' : 'none',
        backdropFilter: 'blur(20px)',
        boxShadow: isActive ? `0 20px 60px ${card.hex}40` : 'none'
      }}
    >
      {/* Holographic border effect */}
      <div 
        className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}
        style={{
          background: `linear-gradient(45deg, ${card.hex}40, transparent, ${card.hex}40)`,
          filter: 'blur(1px)'
        }}
      />

      {/* Scan line effect */}
      <div 
        className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-20' : ''}`}
        style={{
          background: `repeating-linear-gradient(90deg, transparent, transparent 2px, ${card.hex} 2px, ${card.hex} 4px)`
        }}
      />

      {/* Content shown on mobile OR when card is active on desktop */}
      <div className={`${isSmallScreen || isActive ? 'block' : 'hidden'} h-full relative z-10`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold" style={{ color: textColor }}>
              {card.name}
            </h3>
            <span className="text-sm opacity-70 font-mono" style={{ color: textColor }}>
              Project #{String(card.id).padStart(2, '0')}
            </span>
          </div>
          
          <a 
            href={card.url} 
            target={card.target}
            className="group/btn relative overflow-hidden px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 font-medium"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: `2px solid ${card.hex}`,
              color: card.hex,
              backdropFilter: 'blur(10px)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2">
              <Eye className="w-4 h-4" />
              Visit
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>
        </div>

        {/* Project number indicator */}
        <div className="absolute bottom-6 right-6">
          <div 
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono font-bold"
            style={{ 
              borderColor: card.hex,
              backgroundColor: `${card.hex}20`,
              color: card.hex
            }}
          >
            {String(card.id).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Desktop sidebar name */}
      <div className={`${isSmallScreen ? 'hidden' : 'flex'} h-full items-center justify-center transform rotate-180`}>
        <div className="flex flex-col items-center justify-between h-full py-4 writing-mode-vertical">
          <span 
            className="transform rotate-90 font-mono font-bold text-sm tracking-wider"
            style={{ 
              WebkitTextStroke: `1px ${isActive ? card.hex : '#777676'}`,
              color: isActive ? card.hex : 'transparent'
            }}
          >
            {String(card.id).padStart(2, '0')}
          </span>
          
          <h1 
            className="font-black text-2xl tracking-wider" 
            style={{ 
              fontFamily: 'Roboto, sans-serif',
              WebkitTextStroke: `1px ${isActive ? card.hex : '#777676'}`,
              color: isActive ? card.hex : 'transparent',
              writingMode: 'vertical-lr',
              letterSpacing: '4px'
            }}
          >
            {card.name}
          </h1>
        </div>
      </div>

      {/* Active state glow */}
      <div 
        className={`absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-20' : 'opacity-0'}`}
        style={{
          background: `radial-gradient(circle at center, ${card.hex} 0%, transparent 70%)`,
          filter: 'blur(30px)'
        }}
      />
    </div>
  );
});

const ProjectList = memo(({ activeItem, handleMouseEnter }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 lg:h-[80vh] rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
      {cardDetails.map((card, index) => (
        <ProjectCard
          key={card.id}
          card={card}
          index={index}
          activeItem={activeItem}
          handleMouseEnter={handleMouseEnter}
        />
      ))}
    </div>
  );
});

const Works = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleMouseEnter = useCallback((index) => {
    setActiveItem(index);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden min-h-screen">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 102, 0, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 102, 0, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <CyberpunkTitle 
          title="WORKS"
          gradient="from-orange-400 via-red-400 to-orange-500"
          glowColor="text-orange-500"
          glitchColor="text-red-500"
          leftIcon={Code}
          rightIcon={Palette}
          leftIconColor="text-orange-400"
          rightIconColor="text-red-400"
        />

        <ProjectList 
          activeItem={activeItem} 
          handleMouseEnter={handleMouseEnter} 
        />
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .active-card {
          flex: 2;
        }
        
        .active-card:not(.active-card) {
          flex: 1;
        }
        
        @media (min-width: 1024px) {
          .active-card {
            width: 50%;
          }
          
          .active-card ~ div {
            width: calc(50% / 7);
          }
        }
      `}</style>
    </section>
  );
};

export default memo(Works);