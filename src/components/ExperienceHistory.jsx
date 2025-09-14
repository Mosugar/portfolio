import React, { useRef, useEffect, useState } from "react";
import { Briefcase, MapPin, Calendar, ExternalLink, Code, Palette } from 'lucide-react';
import styles from "../styles/experience.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CyberpunkTitle from "./CyberpunkTitle";

const ExperienceHistory = () => {
  const experienceRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Updated experience data with completed Wardd Studios
  const experiences = [
    {
      id: 1,
      title: "Computer Engineering and Digitalization",
      company: "The National School of Applied Sciences",
      location: "On-site",
      period: "Sep 2024 - october 2025",
      type: "current",
      description: "Developing software solutions combining computer engineering and digital transformation. Handling system design and digital optimization.",
      tech: ["Python", "VirtualBox", "Django", "Docker"],
      icon: Code
    },
    {
      id: 2,
      title: "Head of Development & Founder",
      company: "Wardd Studios",
      location: "On-site",
      period: "June 2024 - January 2025",
      type: "completed", // Changed from "current" to "completed"
      description: "Successfully led development team and built scalable web applications. Collaborated with cross-functional teams to deliver high-quality solutions and established strong development processes.",
      tech: ["React", "Laravel", "MySQL", "Team Leadership"],
      icon: Code
    },
    {
      id: 3,
      title: "IT Development and Network Specialist",
      company: "Miage",
      location: "On-site", 
      period: "Sep 2023 - Feb 2025",
      type: "recent",
      description: "Developing full-stack web applications using modern technologies. Working on both frontend and backend systems with focus on network infrastructure.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      icon: Code
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "Stretched Web",
      location: "Remote",
      period: "June 2023 - August 2023",
      type: "previous",
      description: "Focused on creating responsive and interactive user interfaces with modern frontend technologies.",
      tech: ["React", "TypeScript", "Tailwind", "GSAP"],
      icon: Code
    },
    {
      id: 5,
      title: "Freelance Full-Stack Developer",
      company: "Independent",
      location: "Remote",
      period: "May 2023 - November 2023",
      type: "previous",
      description: "Delivered end-to-end web solutions for various clients, specializing in modern web technologies and responsive design.",
      tech: ["React", "Laravel", "Tailwind", "MySQL"],
      icon: Code
    }
  ];

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // GSAP animations
  useEffect(() => {
    if (!isInView) return;

    gsap.registerPlugin(ScrollTrigger);
    const experienceEl = experienceRef.current;

    if (experienceEl) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: experienceEl,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
      });

      // Animate experience cards
      tl.fromTo(
        `.${styles.experienceCard}`,
        {
          y: 50,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        }
      );

      // Animate timeline line
      tl.fromTo(
        `.${styles.timelineLine}`,
        {
          scaleY: 0
        },
        {
          scaleY: 1,
          duration: 1,
          ease: "power2.out"
        },
        "-=0.5"
      );
    }
  }, [isInView]);

  return (
    <section className={styles.experienceSection} ref={experienceRef}>
      {/* Background elements */}
      <div className={styles.backgroundGrid}></div>
      <div className={styles.glowOrb1}></div>
      <div className={styles.glowOrb2}></div>
      
      {/* Top gradient */}
      <div className={styles.topGradient}></div>

      {/* Title */}
      <div className={styles.titleContainer}>
        <CyberpunkTitle 
          title="EXPERIENCES"
          gradient="from-orange-400 via-red-400 to-orange-500"
          glowColor="text-orange-500"
          glitchColor="text-red-500"
          leftIcon={Briefcase}
          rightIcon={Calendar}
          leftIconColor="text-orange-400"
          rightIconColor="text-red-400"
        />
      </div>

      {/* Experience Timeline */}
      <div className={styles.timelineContainer}>
        <div className={styles.timelineLine}></div>
        
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`${styles.experienceCard} ${styles[exp.type]}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  <exp.icon className={styles.cardIcon} />
                </div>
                <div className={styles.headerInfo}>
                  <h3 className={styles.jobTitle}>{exp.title}</h3>
                  <div className={styles.companyInfo}>
                    <span className={styles.company}>{exp.company}</span>
                    <div className={styles.locationPeriod}>
                      <span className={styles.location}>
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span className={styles.period}>
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.cardBody}>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.techStack}>
                  {exp.tech.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.cardGlow}></div>
            <div className={styles.timelineNode}></div>
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle}></div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceHistory;