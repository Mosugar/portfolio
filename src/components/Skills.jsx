import React, { useRef, useEffect, useState, memo } from "react";
import styles from "../styles/skills.module.css";
import { skillGroups } from "../data/skills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/useLanguage";
import { useBubbleSound } from "../hooks/useSound";

const TiltComponent = memo(({ children, perspective = 110, scale = 1.06, className = "" }) => {
  const [tiltStyle, setTiltStyle] = useState({
    transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
    transition: "transform 0.2s ease-out",
  });
  const [glareStyle, setGlareStyle] = useState({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    pointerEvents: "none",
    opacity: 0,
    zIndex: 5,
  });
  const tiltRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!tiltRef.current) return;

    const rect = tiltRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const tiltX = (0.5 - y) * 10;
    const tiltY = (x - 0.5) * 10;

    const glareX = x * 100;
    const glareY = y * 100;

    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`,
      transition: "transform 0.2s ease-out",
    });

    setGlareStyle((prev) => ({
      ...prev,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 80%)`,
      opacity: 0.6,
    }));
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`,
      transition: "transform 0.5s ease-out",
    });

    setGlareStyle((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  return (
    <div
      className={`${styles.tiltContainer} ${className}`}
      ref={tiltRef}
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div style={glareStyle} />
    </div>
  );
});

TiltComponent.displayName = "TiltComponent";

const SkillBubble = memo(({ skill }) => {
  const { icon, name } = skill;
  const isStyledComponents = name === "Styled-components";
  const playPop = useBubbleSound();

  return (
    <TiltComponent>
      <div
        className={styles.skillBubble}
        onMouseEnter={playPop}
      >
        <div className={styles.bubbleContent}>
          <img
            className={isStyledComponents ? styles.styledComponentsIcon : ""}
            src={icon}
            alt={name}
            loading="lazy"
          />
          <span className={styles.skillTooltip}>{name}</span>
        </div>
      </div>
    </TiltComponent>
  );
});

SkillBubble.displayName = "SkillBubble";

const Skills = () => {
  const { t } = useLanguage();
  const skillRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

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

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    gsap.registerPlugin(ScrollTrigger);
    const skillEl = skillRef.current;

    if (skillEl) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillEl,
          start: "30% bottom",
          end: "bottom center",
        },
      });

      tl.from(`.${styles.skillBubble}`, {
        y: 20,
        opacity: 0,
        stagger: {
          each: 0.04,
          from: "random",
        },
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isInView]);

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="mb-4 px-8 text-center">
        <p className="section-label mb-4">{t.skills.label}</p>
        <h2 className="m-0 font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.02em] text-[var(--text)]">
          {t.skills.h2a}<span className="text-[var(--accent-light)]">{t.skills.h2b}</span>
        </h2>
      </div>

      <div className={styles.skillsContent} ref={skillRef}>
        {skillGroups.map((group) => (
          <div key={group.id} className={styles.skillGroup}>
            <h3 className={styles.groupTitle}>{t.skills.groups[group.id]}</h3>
            <div className={styles.bubblesContainer}>
              {group.skills.map((skill) => (
                <SkillBubble key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.skillsBlob}>
        <div className={styles.skillsBlob1}></div>
        <div className={styles.skillsBlob2}></div>
      </div>
    </section>
  );
};

export default Skills;
