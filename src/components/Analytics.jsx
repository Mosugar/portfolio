// src/components/Analytics.jsx
import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4 Setup
    const initializeGA4 = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        // Enhanced ecommerce for portfolio tracking
        custom_map: {
          'custom_parameter_1': 'section_viewed'
        }
      });
    };

    // Track page views
    const trackPageView = (page_title, page_location) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title,
          page_location,
          send_page_view: true
        });
      }
    };

    // Track custom events
    const trackEvent = (action, category, label, value) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
          custom_parameter_1: label
        });
      }
    };

    // Track section views
    const trackSectionView = (sectionName) => {
      trackEvent('section_view', 'engagement', sectionName, 1);
    };

    // Track project views
    const trackProjectView = (projectName) => {
      trackEvent('project_view', 'portfolio', projectName, 1);
    };

    // Track contact attempts
    const trackContactAttempt = (method) => {
      trackEvent('contact_attempt', 'lead_generation', method, 1);
    };

    // Track external link clicks
    const trackExternalLink = (url, linkText) => {
      trackEvent('external_link_click', 'engagement', `${linkText} - ${url}`, 1);
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollDepths = [25, 50, 75, 90, 100];
      let maxDepth = 0;

      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

        scrollDepths.forEach(depth => {
          if (scrollPercent >= depth && depth > maxDepth) {
            maxDepth = depth;
            trackEvent('scroll_depth', 'engagement', `${depth}%`, depth);
          }
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const startTime = Date.now();
      
      const sendTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        trackEvent('time_on_page', 'engagement', 'total_time', timeSpent);
      };

      // Send time on page before user leaves
      window.addEventListener('beforeunload', sendTimeOnPage);
      
      // Also send every 30 seconds for active users
      const interval = setInterval(() => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if (timeSpent > 0 && timeSpent % 30 === 0) {
          trackEvent('time_on_page_milestone', 'engagement', `${timeSpent}s`, timeSpent);
        }
      }, 1000);

      return () => {
        window.removeEventListener('beforeunload', sendTimeOnPage);
        clearInterval(interval);
      };
    };

    // Intersection Observer for section tracking
    const setupSectionTracking = () => {
      const sections = document.querySelectorAll('section[id]');
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              const sectionName = entry.target.id || 'home';
              trackSectionView(sectionName);
              
              // Update page title and URL for SPA navigation
              const newTitle = getSectionTitle(sectionName);
              const newUrl = sectionName === 'home' ? 
                window.location.origin : 
                `${window.location.origin}#${sectionName}`;
              
              // Update browser history without triggering navigation
              if (window.location.href !== newUrl) {
                window.history.replaceState({}, newTitle, newUrl);
                document.title = newTitle;
                trackPageView(newTitle, newUrl);
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      sections.forEach(section => sectionObserver.observe(section));
      
      return () => sectionObserver.disconnect();
    };

    // Get section-specific titles
    const getSectionTitle = (sectionName) => {
      const titles = {
        'home': 'Mohamed Sekkar - Full-Stack Developer | React, Laravel & Modern Web Development',
        'about': 'About Mohamed Sekkar - Full-Stack Developer from Morocco | Portfolio',
        'skills': 'Technical Skills - React, Laravel, PHP | Mohamed Sekkar Portfolio',
        'services': 'Web Development Services - React & Laravel Expert | Mohamed Sekkar',
        'experience': 'Professional Experience - Full-Stack Developer | Mohamed Sekkar',
        'works': 'Portfolio Projects - Web Development Work | Mohamed Sekkar',
        'contact': 'Contact Mohamed Sekkar - Hire Full-Stack Developer | Get Quote'
      };
      return titles[sectionName] || titles['home'];
    };

    // Setup click tracking for important elements
    const setupClickTracking = () => {
      // Track project clicks
      document.addEventListener('click', (e) => {
        // Project cards
        if (e.target.closest('.Project__card')) {
          const projectCard = e.target.closest('.Project__card');
          const projectName = projectCard.querySelector('h3')?.textContent || 'Unknown Project';
          trackProjectView(projectName);
        }

        // External links
        if (e.target.closest('a[href^="http"]')) {
          const link = e.target.closest('a');
          const url = link.href;
          const linkText = link.textContent || link.getAttribute('aria-label') || 'External Link';
          trackExternalLink(url, linkText);
        }

        // Contact links
        if (e.target.closest('a[href^="mailto:"]')) {
          trackContactAttempt('email');
        }

        // Social links
        if (e.target.closest('a[href*="linkedin.com"]')) {
          trackEvent('social_click', 'engagement', 'LinkedIn', 1);
        }
        if (e.target.closest('a[href*="github.com"]')) {
          trackEvent('social_click', 'engagement', 'GitHub', 1);
        }
        if (e.target.closest('a[href*="behance.net"]')) {
          trackEvent('social_click', 'engagement', 'Behance', 1);
        }

        // Navigation clicks
        if (e.target.closest('[href^="#"]')) {
          const anchor = e.target.closest('[href^="#"]');
          const section = anchor.getAttribute('href').replace('#', '') || 'home';
          trackEvent('navigation_click', 'engagement', section, 1);
        }
      });
    };

    // Initialize all tracking
    initializeGA4();
    const cleanupScrollTracking = trackScrollDepth();
    const cleanupTimeTracking = trackTimeOnPage();
    const cleanupSectionTracking = setupSectionTracking();
    setupClickTracking();

    // Expose tracking functions globally for manual use
    window.trackEvent = trackEvent;
    window.trackSectionView = trackSectionView;
    window.trackProjectView = trackProjectView;
    window.trackContactAttempt = trackContactAttempt;

    // Performance tracking
    const trackPerformance = () => {
      if ('performance' in window) {
        window.addEventListener('load', () => {
          setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = Math.round(perfData.loadEventEnd - perfData.fetchStart);
            const domContentLoaded = Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart);
            
            trackEvent('page_load_time', 'performance', 'total_load_time', loadTime);
            trackEvent('dom_content_loaded', 'performance', 'dom_ready_time', domContentLoaded);

            // Track Core Web Vitals if available
            if ('web-vitals' in window) {
              // You can add web-vitals library for detailed CWV tracking
            }
          }, 1000);
        });
      }
    };

    trackPerformance();

    // Cleanup function
    return () => {
      cleanupScrollTracking();
      cleanupTimeTracking();
      cleanupSectionTracking();
    };

  }, []);

  return null;
};

export default Analytics;