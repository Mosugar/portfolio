// Every project shown in Works and on its /projets/:slug case study page, in display order.
// Texts are { fr, en }. Images live in public/images/projets/<slug>/ (see scripts/capture.mjs).
//
// draft: true → texts written from what the live site and its code show, still to be checked
// by Mohamed (see REVUE_ETUDES_DE_CAS.md). Never put invented numbers or client results here.
//
// featured   big card on the home page; the others go in the compact "Autres projets" list
// url        live site · linkLabel: translation key when the link isn't the live site (e.g. Behance)
// repos      public repositories only ("Code" buttons)
// cover      main screenshot · gallery: { src, kind: 'desktop' | 'mobile', label }
// built      what was built · quality: SEO / quality checklist (optional)
// challenges { title, text } pairs: the problem and how it was solved

const shot = (slug, file, kind, fr, en) => ({
  src: `/images/projets/${slug}/${file}.webp`,
  kind,
  label: { fr, en },
});

export const projects = [
  {
    slug: 'repere-rh',
    name: 'Repère RH',
    featured: true,
    draft: false,
    year: '2026',
    url: 'https://repererh.com',
    repos: [],
    type: { fr: 'Site vitrine · Laravel', en: 'Showcase website · Laravel' },
    summary: {
      fr: 'Site vitrine pour un cabinet de formation et de recrutement : 10 domaines de formation, formulaires contact et devis avec e-mails automatiques, déployé et maintenu en production.',
      en: 'Showcase website for a training and recruitment firm: 10 training areas, contact and quote forms with automatic emails, deployed and maintained in production.',
    },
    client: {
      fr: 'Cabinet de formation et de recrutement à Casablanca (Maroc) · Freelance',
      en: 'Training and recruitment firm in Casablanca (Morocco) · Freelance',
    },
    role: {
      fr: 'Développeur full-stack, du brief à la mise en ligne et au suivi client.',
      en: 'Full-stack developer, from the brief to launch and ongoing client follow-up.',
    },
    stack: ['Laravel 12', 'PHP 8.3', 'Blade', 'Tailwind CSS 4', 'Alpine.js', 'Vite'],
    context: {
      fr: "Un cabinet de formation et de recrutement basé à Casablanca avait besoin d'un site vitrine pour présenter ses 10 domaines de formation et recevoir des demandes de contact et de devis.",
      en: 'A training and recruitment firm based in Casablanca needed a showcase website to present its 10 training areas and receive contact and quote requests.',
    },
    built: {
      fr: [
        '10 pages de domaines de formation',
        'Catalogue PDF téléchargeable',
        'Bandeau de 12 logos de références',
        'Formulaires contact et devis : validation, anti-spam (honeypot + limite d’envois) et e-mail de confirmation automatique',
        'Liens vers les réseaux sociaux et bouton WhatsApp',
      ],
      en: [
        '10 training area pages',
        'Downloadable PDF catalogue',
        'Strip of 12 client logos',
        'Contact and quote forms: validation, anti-spam (honeypot + rate limit) and automatic confirmation email',
        'Social media links and WhatsApp button',
      ],
    },
    quality: {
      fr: ['Sitemap et robots.txt', 'JSON-LD et Open Graph', 'Redirections 301 et HTTPS', 'Responsive et accessibilité', '61 tests automatisés'],
      en: ['Sitemap and robots.txt', 'JSON-LD and Open Graph', '301 redirects and HTTPS', 'Responsive and accessible', '61 automated tests'],
    },
    challenges: [
      {
        title: { fr: 'Hébergement mutualisé sans SSH ni Node', en: 'Shared hosting with no SSH or Node' },
        text: {
          fr: "Le site tourne sur un hébergement mutualisé cPanel, sans accès SSH ni Node. Les assets sont donc construits en local, le site est envoyé en un paquet en 2 parties, et le dossier public de Laravel est adapté à la structure de l'hébergeur.",
          en: "The site runs on shared cPanel hosting, with no SSH access and no Node. Assets are built locally, the site is uploaded as a 2-part package, and Laravel's public folder is adapted to the host's structure.",
        },
      },
      {
        title: { fr: 'Des e-mails qui arrivent', en: 'Emails that actually arrive' },
        text: {
          fr: "4 boîtes e-mail professionnelles, avec SPF, DKIM et DMARC configurés. Pendant que le certificat du domaine était encore auto-signé, l'envoi SMTP passait par le nom d'hôte du serveur.",
          en: "4 professional mailboxes, with SPF, DKIM and DMARC set up. While the domain's certificate was still self-signed, SMTP went through the server's hostname.",
        },
      },
      {
        title: { fr: 'RGPD et performance', en: 'GDPR and performance' },
        text: {
          fr: 'Google Maps ne se charge qu’après consentement, les images sont en WebP et le site fonctionne sans base de données.',
          en: 'Google Maps only loads after consent, images are WebP and the site runs without a database.',
        },
      },
    ],
    result: {
      fr: 'Site déployé et maintenu en production.',
      en: 'Site deployed and maintained in production.',
    },
    cover: shot('repere-rh', 'accueil', 'desktop', 'Accueil', 'Home page'),
    gallery: [
      shot('repere-rh', 'accueil', 'desktop', 'Accueil', 'Home page'),
      shot('repere-rh', 'accueil-mobile', 'mobile', 'Accueil sur mobile', 'Home page on mobile'),
      shot('repere-rh', 'domaine', 'desktop', 'Page d’un domaine de formation', 'Training area page'),
      shot('repere-rh', 'devis', 'desktop', 'Formulaires contact et devis', 'Contact and quote forms'),
      shot('repere-rh', 'devis-mobile', 'mobile', 'Demande de devis sur mobile', 'Quote request on mobile'),
    ],
  },
];
