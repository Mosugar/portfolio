import { useEffect } from 'react';

const SEO = ({
  title = "Mohamed Sekkar | Full-Stack Developer | Paris, France",
  description = "Full-Stack Developer based in Paris, France. 3+ ans à construire de vrais produits — React, Laravel, React Native. Disponible en alternance 2026.",
  keywords = "Mohamed Sekkar, Full Stack Developer, React Developer, Laravel Developer, React Native, alternance 2026, Web Developer Paris, Web Developer France, MoSugar",
  image = "https://res.cloudinary.com/dylpck2et/image/upload/v1752367825/sugar_copy_2_tdpniz.jpg",
  url = "https://mohamedsekkar.dev",
  type = "website",
  section = "",
  index = true,
  follow = true
}) => {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', `${index ? 'index' : 'noindex'}, ${follow ? 'follow' : 'nofollow'}`);

    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', url, true);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }

    if (section) {
      addSectionStructuredData(section, title, description, url);
    }

  }, [title, description, keywords, image, url, type, section, index, follow]);

  return null;
};

const addSectionStructuredData = (section, title, description, url) => {
  const existingScript = document.querySelector(`script[data-section="${section}"]`);
  if (existingScript) {
    existingScript.remove();
  }

  let structuredData;

  switch (section) {
    case 'about':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": title,
        "description": description,
        "url": url,
        "mainEntity": {
          "@type": "Person",
          "name": "Mohamed Sekkar",
          "jobTitle": "Full-Stack Developer",
          "description": "24-year-old Full-Stack Developer based in Paris, Île-de-France"
        }
      };
      break;

    case 'skills':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Technical Skills",
        "description": description,
        "url": url,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "React.js" },
          { "@type": "ListItem", "position": 2, "name": "Laravel" },
          { "@type": "ListItem", "position": 3, "name": "JavaScript" },
          { "@type": "ListItem", "position": 4, "name": "PHP" },
          { "@type": "ListItem", "position": 5, "name": "MySQL" }
        ]
      };
      break;

    case 'services':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Web Development Services",
        "description": description,
        "url": url,
        "provider": {
          "@type": "Person",
          "name": "Mohamed Sekkar"
        },
        "serviceType": [
          "Web Development",
          "Frontend Development",
          "Backend Development",
          "UI/UX Design",
          "Full-Stack Development"
        ]
      };
      break;

    case 'works':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": title,
        "description": description,
        "url": url,
        "about": {
          "@type": "CreativeWork",
          "name": "Portfolio Projects"
        }
      };
      break;

    case 'contact':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": title,
        "description": description,
        "url": url,
        "mainEntity": {
          "@type": "ContactPoint",
          "contactType": "Professional Services",
          "email": "mohamedsekkar1110@gmail.com",
          "areaServed": "Worldwide"
        }
      };
      break;

    default:
      return;
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-section', section);
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

export default SEO;
