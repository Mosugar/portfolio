// src/components/Services.jsx - Enhanced Mobile Version
import React, { useRef, useEffect, useState } from 'react';
import { Code, Palette, Zap, Globe, Database, Smartphone, Server, Brush, ArrowRight, Sparkles, Cloud, Brain, Rocket, Shield } from 'lucide-react';
import CyberpunkTitle from './CyberpunkTitle';
import styles from '../styles/services.module.css';

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Crafting modern, responsive web applications with cutting-edge technologies. From React frontends to Laravel backends, I build scalable solutions that perform exceptionally.",
      gradient: "from-orange-500 via-red-500 to-orange-600",
      glowColor: "rgba(255, 102, 0, 0.8)",
      features: ["React & Next.js", "Laravel & PHP", "RESTful APIs", "Database Design"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development", 
      description: "Creating intuitive mobile experiences that engage users and drive results. Native performance with modern development approaches for iOS and Android platforms.",
      gradient: "from-blue-500 via-purple-500 to-blue-600",
      glowColor: "rgba(59, 130, 246, 0.8)",
      features: ["React Native", "Progressive Web Apps", "Cross-platform", "App Store Optimization"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Building scalable, secure cloud solutions that grow with your business. From deployment to monitoring, complete DevOps mastery with industry best practices.",
      gradient: "from-green-500 via-emerald-500 to-green-600",
      glowColor: "rgba(34, 197, 94, 0.8)",
      features: ["AWS & Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring & Analytics"]
    },
    {
      icon: Database,
      title: "Backend Architecture",
      description: "Designing robust, scalable backend systems that handle millions of requests. Security, performance, and reliability at the core of every solution.",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      glowColor: "rgba(168, 85, 247, 0.8)",
      features: ["API Development", "Database Optimization", "Security Implementation", "Performance Tuning"]
    },
    {
      icon: Brush,
      title: "UI/UX Design",
      description: "Creating beautiful, user-centered designs that convert visitors into customers. Every pixel crafted with purpose and precision for maximum impact.",
      gradient: "from-pink-500 via-rose-500 to-pink-600",
      glowColor: "rgba(236, 72, 153, 0.8)",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"]
    },
    {
      icon: Rocket,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies that drive business growth. From concept to execution, your success is my mission and priority.",
      gradient: "from-yellow-500 via-orange-500 to-yellow-600",
      glowColor: "rgba(251, 191, 36, 0.8)",
      features: ["Business Analysis", "Technical Consulting", "Project Management", "Growth Optimization"]
    }
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getCardTransform = (index) => {
    const offset = index - currentSlide;
    const translateX = offset * (isMobile ? 360 : 350);
    const scale = Math.abs(offset) === 0 ? 1 : 0.85;
    const rotateY = isMobile ? 0 : offset * 5;
    const translateZ = Math.abs(offset) === 0 ? 0 : -50;
    const opacity = Math.abs(offset) > 2 ? 0 : Math.abs(offset) === 0 ? 1 : 0.6;
    
    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity: opacity,
      zIndex: Math.abs(offset) === 0 ? 20 : 10 - Math.abs(offset)
    };
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.servicesSection} ${isInView ? styles.inView : ''}`}
    >
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.glowOrb1}></div>
        <div className={styles.glowOrb2}></div>
        <div className={styles.gridPattern}></div>
      </div>

      <div className={styles.container}>
        {/* Title */}
        <CyberpunkTitle 
          title="SERVICES"
          gradient="from-orange-400 via-red-400 to-orange-500"
          glowColor="text-orange-500"
          glitchColor="text-red-500"
          leftIcon={Sparkles}
          rightIcon={Zap}
          leftIconColor="text-orange-400"
          rightIconColor="text-red-400"
        />

        {/* Services Carousel */}
        <div className={styles.carouselContainer}>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`${styles.navButton} ${styles.prevButton}`}
            aria-label="Previous service"
          >
            <ArrowRight size={isMobile ? 20 : 24} className={styles.navIcon} />
          </button>

          <button
            onClick={nextSlide}
            className={`${styles.navButton} ${styles.nextButton}`}
            aria-label="Next service"
          >
            <ArrowRight size={isMobile ? 20 : 24} className={styles.navIcon} />
          </button>

          {/* Cards Container */}
          <div className={styles.cardsContainer}>
            <div className={styles.cardsWrapper}>
              {services.map((service, index) => (
                <div
                  key={index}
                  ref={el => cardsRef.current[index] = el}
                  className={`${styles.serviceCard} ${index === currentSlide ? styles.activeCard : ''}`}
                  style={getCardTransform(index)}
                >
                  <div className={styles.cardContent}>
                    {/* Icon */}
                    <div className={`${styles.iconContainer} bg-gradient-to-br ${service.gradient}`}>
                      <service.icon className={styles.cardIcon} strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <p className={styles.cardDescription}>{service.description}</p>
                      
                      {/* Features List */}
                      <div className={styles.featuresList}>
                        {service.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className={styles.featureTag}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Glow Effect */}
                  <div 
                    className={styles.cardGlow}
                    style={{ background: `radial-gradient(circle, ${service.glowColor} 0%, transparent 70%)` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots - Hidden on Mobile */}
        {!isMobile && (
          <div className={styles.pagination}>
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;