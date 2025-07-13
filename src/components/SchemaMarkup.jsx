// src/components/SchemaMarkup.jsx
import { useEffect } from 'react';

const SchemaMarkup = ({ type = 'person', data = {} }) => {
  useEffect(() => {
    const addSchemaMarkup = () => {
      // Remove existing schema markup of this type
      const existingScript = document.querySelector(`script[data-schema="${type}"]`);
      if (existingScript) {
        existingScript.remove();
      }

      let schemaData;

      switch (type) {
        case 'person':
          schemaData = getPersonSchema(data);
          break;
        case 'website':
          schemaData = getWebsiteSchema(data);
          break;
        case 'organization':
          schemaData = getOrganizationSchema(data);
          break;
        case 'portfolio':
          schemaData = getPortfolioSchema(data);
          break;
        case 'service':
          schemaData = getServiceSchema(data);
          break;
        case 'review':
          schemaData = getReviewSchema(data);
          break;
        case 'faq':
          schemaData = getFAQSchema(data);
          break;
        case 'breadcrumb':
          schemaData = getBreadcrumbSchema(data);
          break;
        default:
          return;
      }

      if (schemaData) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', type);
        script.textContent = JSON.stringify(schemaData);
        document.head.appendChild(script);
      }
    };

    addSchemaMarkup();
  }, [type, data]);

  return null;
};

// Person Schema for Mohamed Sekkar
const getPersonSchema = (data) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://mohamedsekkar.dev/#person",
  "name": "Mohamed Sekkar",
  "alternateName": "MoSugar",
  "description": "Full-Stack Developer specializing in React, Laravel, PHP, and modern web technologies",
  "url": "https://mohamedsekkar.dev",
  "image": {
    "@type": "ImageObject",
    "url": "https://res.cloudinary.com/dylpck2et/image/upload/v1752367825/sugar_copy_2_tdpniz.jpg",
    "width": 400,
    "height": 400,
    "caption": "Mohamed Sekkar - Full-Stack Developer"
  },
  "sameAs": [
    "https://github.com/Mosugar",
    "https://www.linkedin.com/in/mohamedsekkar/",
    "https://www.behance.net/mohamed_sekkar"
  ],
  "jobTitle": "Full-Stack Developer",
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Full-Stack Developer",
    "description": "Develops complete web applications using modern technologies",
    "skills": [
      "JavaScript",
      "React.js",
      "Laravel",
      "PHP",
      "MySQL",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development"
    ]
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Wardd Studios",
    "url": "https://warddstudio.com",
    "description": "Digital development studio"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Rabat",
    "addressRegion": "Rabat-Salé-Kénitra",
    "addressCountry": "MA",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "34.0209",
      "longitude": "-6.8416"
    }
  },
  "email": "mohamedsekkar1110@gmail.com",
  "nationality": {
    "@type": "Country",
    "name": "Morocco"
  },
  "birthDate": "2001",
  "gender": "Male",
  "knowsLanguage": [
    {
      "@type": "Language",
      "name": "English",
      "alternateName": "en"
    },
    {
      "@type": "Language",
      "name": "French",
      "alternateName": "fr"
    },
    {
      "@type": "Language",
      "name": "Arabic",
      "alternateName": "ar"
    }
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "The National School of Applied Sciences",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MA"
    }
  },
  "award": [
    "Certified Full-Stack Developer",
    "React.js Specialist",
    "Laravel Expert"
  ],
  "knowsAbout": [
    {
      "@type": "Thing",
      "name": "Web Development",
      "description": "Creating modern web applications"
    },
    {
      "@type": "Thing",
      "name": "React.js",
      "description": "Frontend JavaScript library"
    },
    {
      "@type": "Thing",
      "name": "Laravel",
      "description": "PHP web application framework"
    },
    {
      "@type": "Thing",
      "name": "UI/UX Design",
      "description": "User interface and experience design"
    }
  ],
  ...data
});

// Website Schema
const getWebsiteSchema = (data) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://mohamedsekkar.dev/#website",
  "name": "Mohamed Sekkar Portfolio",
  "description": "Professional portfolio of Mohamed Sekkar, Full-Stack Developer",
  "url": "https://mohamedsekkar.dev",
  "author": {
    "@type": "Person",
    "name": "Mohamed Sekkar",
    "@id": "https://mohamedsekkar.dev/#person"
  },
  "publisher": {
    "@type": "Person",
    "name": "Mohamed Sekkar",
    "@id": "https://mohamedsekkar.dev/#person"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://mohamedsekkar.dev/?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "mainEntity": {
    "@id": "https://mohamedsekkar.dev/#person"
  },
  "isAccessibleForFree": true,
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "copyrightYear": "2025",
  "copyrightHolder": {
    "@type": "Person",
    "name": "Mohamed Sekkar"
  },
  "inLanguage": "en-US",
  "audience": {
    "@type": "Audience",
    "audienceType": [
      "Potential Clients",
      "Employers",
      "Fellow Developers",
      "Recruiters"
    ]
  },
  ...data
});

// Organization Schema for Wardd Studios
const getOrganizationSchema = (data) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://warddstudio.com/#organization",
  "name": "Wardd Studios",
  "url": "https://warddstudio.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://warddstudio.com/logo.png",
    "width": 200,
    "height": 60
  },
  "description": "Digital development studio specializing in modern web applications",
  "founder": {
    "@type": "Person",
    "name": "Mohamed Sekkar",
    "@id": "https://mohamedsekkar.dev/#person"
  },
  "employee": [
    {
      "@type": "Person",
      "name": "Mohamed Sekkar",
      "jobTitle": "Head of Development & Founder",
      "@id": "https://mohamedsekkar.dev/#person"
    }
  ],
  "foundingDate": "2024-06-01",
  "numberOfEmployees": "1-10",
  "industry": "Web Development",
  "serviceArea": {
    "@type": "Place",
    "name": "Worldwide"
  },
  ...data
});

// Portfolio Schema
const getPortfolioSchema = (data) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Mohamed Sekkar Portfolio Projects",
  "description": "Collection of web development projects by Mohamed Sekkar",
  "url": "https://mohamedsekkar.dev#works",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "CreativeWork",
        "name": "ElJamai Couture",
        "description": "E-commerce website for luxury fashion brand",
        "url": "https://eljamaicouture.ae",
        "image": "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/d-clubArtboard_1_cjqxkq.png",
        "creator": {
          "@type": "Person",
          "name": "Mohamed Sekkar"
        },
        "dateCreated": "2024",
        "keywords": ["e-commerce", "fashion", "React", "Laravel"]
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "CreativeWork",
        "name": "Wardd Studio",
        "description": "Corporate website for digital development studio",
        "url": "https://warddstudio.com",
        "image": "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/wardd_cover_two_u2j8hi_ahpexf.webp",
        "creator": {
          "@type": "Person",
          "name": "Mohamed Sekkar"
        },
        "dateCreated": "2024",
        "keywords": ["corporate", "portfolio", "React", "modern design"]
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "CreativeWork",
        "name": "Stretchedweb",
        "description": "Modern web development agency website",
        "url": "https://stretched-web.vercel.app",
        "image": "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/Stretched_1_hjoiei.jpg",
        "creator": {
          "@type": "Person",
          "name": "Mohamed Sekkar"
        },
        "dateCreated": "2023",
        "keywords": ["agency", "web development", "responsive", "modern"]
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "CreativeWork",
        "name": "Wardd Music",
        "description": "Music streaming and promotion platform",
        "url": "https://www.warddmusic.com/",
        "image": "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/wardd_music_02__xgryox.jpg",
        "creator": {
          "@type": "Person",
          "name": "Mohamed Sekkar"
        },
        "dateCreated": "2024",
        "keywords": ["music", "streaming", "entertainment", "React"]
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "CreativeWork",
        "name": "CSBA Law Firm",
        "description": "Professional website for legal services",
        "url": "https://lawyer-sulaiman.vercel.app/",
        "image": "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/lawyer_eto36c.webp",
        "creator": {
          "@type": "Person",
          "name": "Mohamed Sekkar"
        },
        "dateCreated": "2024",
        "keywords": ["legal", "professional", "law firm", "business"]
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "CreativeWork",
        "name": "Smiley Dental",
        "description": "Modern dental clinic website",
        "url": "https://smiley-dentist.vercel.app/",
        "image": "https://res.cloudinary.com/decjm9mmr/image/upload/q_20,f_auto/post_gyz5fk.png",
        "creator": {
          "@type": "Person",
          "name": "Mohamed Sekkar"
        },
        "dateCreated": "2024",
        "keywords": ["healthcare", "dental", "medical", "appointment"]
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "CreativeWork",
        "name": "Gourmet & Grove",
        "description": "Restaurant and food delivery platform",
        "url": "https://gourmet-grove.vercel.app/",
        "image": "https://res.cloudinary.com/decjm9mmr/image/upload/q_10,f_auto/gg_u096hn.webp",
        "creator": {
          "@type": "Person",
          "name": "Mohamed Sekkar"
        },
        "dateCreated": "2024",
        "keywords": ["restaurant", "food", "delivery", "e-commerce"]
      }
    }
  ],
  ...data
});

// Service Schema
const getServiceSchema = (data) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Full-Stack Web Development Services",
  "description": "Professional web development services including frontend, backend, and UI/UX design",
  "url": "https://mohamedsekkar.dev#services",
  "provider": {
    "@type": "Person",
    "name": "Mohamed Sekkar",
    "@id": "https://mohamedsekkar.dev/#person"
  },
  "serviceType": [
    "Web Development",
    "Frontend Development", 
    "Backend Development",
    "UI/UX Design",
    "Full-Stack Development",
    "React Development",
    "Laravel Development"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://mohamedsekkar.dev#contact",
    "serviceSmsNumber": "+212-XXX-XXXXXX",
    "servicePhone": "+212-XXX-XXXXXX",
    "email": "mohamedsekkar1110@gmail.com"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Frontend Development",
          "description": "React.js, JavaScript, HTML5, CSS3, responsive design",
          "category": "Web Development"
        },
        "price": "Contact for quote",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Backend Development", 
          "description": "Laravel, PHP, MySQL, API development, server-side logic",
          "category": "Web Development"
        },
        "price": "Contact for quote",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "User interface design, user experience optimization, prototyping",
          "category": "Design"
        },
        "price": "Contact for quote",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full-Stack Development",
          "description": "Complete web application development from frontend to backend",
          "category": "Web Development"
        },
        "price": "Contact for quote",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "15",
    "bestRating": "5",
    "worstRating": "1"
  },
  ...data
});

// Review Schema
const getReviewSchema = (data) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Service",
    "name": "Web Development Services by Mohamed Sekkar"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": data.rating || "5",
    "bestRating": "5"
  },
  "name": data.reviewTitle || "Excellent Full-Stack Developer",
  "author": {
    "@type": "Person",
    "name": data.reviewerName || "Client"
  },
  "reviewBody": data.reviewText || "Mohamed delivered exceptional web development services. Professional, skilled, and reliable.",
  "publisher": {
    "@type": "Organization",
    "name": "Mohamed Sekkar Portfolio"
  },
  ...data
});

// FAQ Schema
const getFAQSchema = (data) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Frequently Asked Questions - Mohamed Sekkar",
  "url": "https://mohamedsekkar.dev#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What technologies do you specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I specialize in React.js for frontend development, Laravel and PHP for backend development, MySQL for databases, and modern UI/UX design principles. I also work with JavaScript, TypeScript, Tailwind CSS, and various other modern web technologies."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with international clients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, I work with clients worldwide. I'm available for remote projects and can accommodate different time zones for communication and project delivery."
      }
    },
    {
      "@type": "Question",
      "name": "What is your development process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "My development process includes: 1) Project analysis and planning, 2) UI/UX design and prototyping, 3) Frontend development with React.js, 4) Backend development with Laravel, 5) Testing and optimization, 6) Deployment and launch, 7) Ongoing support and maintenance."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Project timelines vary depending on complexity and requirements. Simple websites take 2-4 weeks, while complex web applications can take 2-6 months. I provide detailed timeline estimates during the project planning phase."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide ongoing support after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, I provide ongoing support, maintenance, and updates after project launch. This includes bug fixes, security updates, feature enhancements, and performance optimizations."
      }
    }
  ],
  ...data
});

// Breadcrumb Schema
const getBreadcrumbSchema = (data) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": data.breadcrumbs || [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://mohamedsekkar.dev"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://mohamedsekkar.dev#about"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Skills",
      "item": "https://mohamedsekkar.dev#skills"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Services",
      "item": "https://mohamedsekkar.dev#services"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Experience",
      "item": "https://mohamedsekkar.dev#experience"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Works",
      "item": "https://mohamedsekkar.dev#works"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "Contact",
      "item": "https://mohamedsekkar.dev#contact"
    }
  ]
});

export default SchemaMarkup;