// Every project shown in Works and on its /projets/:slug case study page, in display order.
// Texts are { fr, en }. Images live in public/images/projets/<slug>/ (see scripts/capture.mjs).
//
// draft: true → texts written from what the live site and its code show, still to be checked
// by Mohamed (see REVUE_ETUDES_DE_CAS.md). Never put invented numbers or client results here.
//
// featured   big card on the home page; the others go in the compact "Autres projets" list
// url        live site (null when there is none) · linkLabel: translation key when the link isn't the live site (e.g. Behance)
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
  {
    slug: 'wardd-studio',
    name: 'Wardd Studio',
    featured: true,
    draft: false,
    year: '2026',
    url: 'https://warddstudio.ma/',
    repos: [{ label: 'WARDD-V3', url: 'https://github.com/Mosugar/WARDD-V3' }],
    type: { fr: 'Site vitrine · Next.js', en: 'Showcase website · Next.js' },
    summary: {
      fr: "Site d'un studio d'enregistrement : histoire, packs, réservation de sessions et assistant IA, en français et en arabe.",
      en: "Website for a recording studio: story, packs, session booking and an AI assistant, in French and Arabic.",
    },
    client: {
      fr: "Wardd Studios, studio d'enregistrement que j'ai cofondé",
      en: 'Wardd Studios, the recording studio I co-founded',
    },
    role: {
      fr: 'Conception et développement de cette version du site, seul : UI, intégration, réservation, assistant IA et bilingue FR/AR. Ali Yara, cofondateur de Wardd Studios, avait contribué aux versions précédentes.',
      en: 'Designed and built this version of the site on my own: UI, front-end build, booking, AI assistant and the bilingual FR/AR setup. Ali Yara, co-founder of Wardd Studios, contributed to earlier versions.',
    },
    // From the site's package.json and README (WARDD-V3)
    stack: ['Next.js', 'React', 'Tailwind CSS', 'GSAP', 'Motion', 'Anthropic API', 'Spotify oEmbed', 'YouTube oEmbed', 'FormSubmit', 'Vercel'],
    context: {
      fr: "Un studio d'enregistrement avait besoin d'un site pour présenter le studio, son histoire (de 2016 à aujourd'hui), son travail et les projets qu'il a produits, et permettre aux clients de réserver des sessions.",
      en: 'A recording studio needed a website to present the studio, its story (2016 to today), its work and the projects it produced, and to let clients book sessions.',
    },
    built: {
      fr: [
        'Présentation du studio et frise de son histoire',
        'Services et packs (Étudiant, Pro, Premium)',
        'Sorties et clips vidéo',
        'Artistes',
        'Demandes de réservation traitées par e-mail',
        'Assistant IA (« Assistant Wardd ») intégré via une API pour aider les clients',
        'Bilingue français / arabe (RTL)',
        'UI/UX moderne et simple',
      ],
      en: [
        'Studio presentation and history timeline',
        'Services and packs (Étudiant, Pro, Premium)',
        'Releases and music videos',
        'Artists',
        'Booking requests handled by email',
        'AI assistant (“Assistant Wardd”) integrated through an API to help clients',
        'Bilingual French / Arabic (RTL)',
        'Modern, simple UI/UX',
      ],
    },
    challenges: [
      {
        title: { fr: 'Un seul site en français et en arabe', en: 'One site in French and Arabic' },
        text: {
          fr: "La langue vient de l'URL (/ et /ar, via l'i18n de Next.js) et fixe lang et dir sur la page : la mise en page passe en RTL, les flèches et icônes directionnelles sont inversées (variantes rtl: de Tailwind), et les carrousels qui dépendent du sens de défilement restent volontairement en LTR. L'arabe utilise IBM Plex Sans Arabic, le latin Inter. Les champs du formulaire et du chat sont en dir=\"auto\" pour gérer le texte mixte, tandis que l'e-mail et le téléphone restent en LTR.",
          en: "The language comes from the URL (/ and /ar, through Next.js i18n) and sets lang and dir on the page: the layout switches to RTL, directional arrows and icons are mirrored (Tailwind rtl: variants), and carousels that depend on scroll direction deliberately stay LTR. Arabic uses IBM Plex Sans Arabic, Latin text uses Inter. Form and chat inputs use dir=\"auto\" to handle mixed-direction text, while email and phone fields stay LTR.",
        },
      },
      {
        title: { fr: 'Un assistant IA sûr et toujours disponible', en: 'A safe, always-available AI assistant' },
        text: {
          fr: "L'assistant IA passe par une route API côté serveur, la clé n'est donc jamais exposée au navigateur. Son prompt est construit à partir d'un seul fichier de connaissances (services, packs, horaires, réservation), partagé avec un mode hors ligne qui répond si l'API n'est pas disponible. L'historique envoyé est limité et chaque IP a un nombre de requêtes par minute plafonné.",
          en: "The AI assistant goes through a server-side API route, so the key is never exposed to the browser. Its prompt is built from a single knowledge file (services, packs, opening hours, booking), shared with an offline mode that answers when the API isn't available. The history sent is capped and each IP has a per-minute request limit.",
        },
      },
    ],
    result: {
      fr: 'Mis en ligne en novembre 2026. Dès la première semaine, environ 6 clients ont pris contact via le site.',
      en: 'Launched in November 2026. In the first week, around 6 clients got in touch through the site.',
    },
    cover: shot('wardd-studio', 'accueil', 'desktop', 'Accueil', 'Home page'),
    gallery: [
      shot('wardd-studio', 'accueil', 'desktop', 'Accueil', 'Home page'),
      shot('wardd-studio', 'accueil-mobile', 'mobile', 'Accueil sur mobile', 'Home page on mobile'),
      shot('wardd-studio', 'arabe', 'desktop', 'Version arabe (RTL)', 'Arabic version (RTL)'),
      shot('wardd-studio', 'reservation', 'desktop', 'Réservation de session', 'Session booking'),
      { src: '/images/wardd/story.webp', kind: 'desktop', label: { fr: 'Notre histoire', en: 'Our story' } },
      { src: '/images/wardd/packs.webp', kind: 'desktop', label: { fr: 'Packs', en: 'Packs' } },
    ],
  },
  {
    slug: 'recur',
    name: 'Recur',
    featured: true,
    draft: false,
    year: '2026',
    url: null,
    repos: [
      { label: 'recur', url: 'https://github.com/Mosugar/recur' },
      { label: 'recur-api', url: 'https://github.com/Mosugar/recur-api' },
    ],
    type: { fr: 'Application mobile · Expo · React Native', en: 'Mobile app · Expo · React Native' },
    summary: {
      fr: "Application mobile de suivi d'abonnements : totaux, paiements à venir et rappels, 100 % hors ligne et sans compte.",
      en: 'Subscription tracker mobile app: totals, upcoming payments and reminders, fully offline with no account.',
    },
    client: { fr: 'Projet personnel', en: 'Personal project' },
    role: {
      fr: 'Projet personnel conçu et développé de bout en bout : architecture, UI, logique métier et tests.',
      en: 'Personal project, designed and built end to end: architecture, UI, business logic and tests.',
    },
    stack: ['Expo', 'React Native', 'TypeScript (strict)', 'Expo Router', 'NativeWind', 'Reanimated', 'expo-sqlite', 'Zustand', 'expo-notifications', 'i18next', 'Jest'],
    context: {
      fr: "Les abonnements s'accumulent et les renouvellements arrivent par surprise. Recur montre ce que l'on paie, et quand.",
      en: 'Subscriptions pile up and renewals come as a surprise. Recur shows what you pay, and when.',
    },
    built: {
      fr: ['Totaux mensuels et annuels', 'Paiements des 7 prochains jours', 'Rappel la veille de chaque paiement', 'Statistiques par catégorie (donut SVG animé)', 'Mode sombre', 'FR / EN', '100 % hors ligne, sans compte'],
      en: ['Monthly & yearly totals', 'Payments due in the next 7 days', 'Reminder the day before each payment', 'Spending by category (animated SVG donut)', 'Dark mode', 'FR / EN', '100% offline, no account'],
    },
    challenges: [
      {
        title: { fr: "Des calculs de dates et d'argent fiables", en: 'Reliable date and money math' },
        text: {
          fr: "Les prix sont stockés en centimes (entiers) pour éviter les erreurs de virgule flottante. La prochaine date de paiement n'est jamais stockée : elle est calculée à partir de la première date et du cycle, et les fins de mois sont gérées (un abonnement du 31 janvier se renouvelle le 28/29 février). Cette logique vit dans des fonctions pures, séparées de l'UI et testées avec Jest.",
          en: "Prices are stored in cents (integers) to avoid floating-point errors. The next payment date is never stored: it's computed from the first payment date and the billing cycle, and month-end edge cases are handled (a subscription billed on Jan 31 renews on Feb 28/29). This logic lives in pure functions, separated from the UI and unit-tested with Jest.",
        },
      },
    ],
    result: {
      fr: 'En cours de test, pas encore publié sur les stores. Le code source est public sur GitHub.',
      en: 'In testing, not yet published on the stores. The source code is public on GitHub.',
    },
    cover: { src: '/images/recur/home.webp', kind: 'mobile', label: { fr: 'Accueil', en: 'Home' } },
    gallery: [
      { src: '/images/recur/home.webp', kind: 'mobile', label: { fr: 'Accueil', en: 'Home' } },
      { src: '/images/recur/add.webp', kind: 'mobile', label: { fr: 'Ajout', en: 'Add subscription' } },
      { src: '/images/recur/stats.webp', kind: 'mobile', label: { fr: 'Statistiques', en: 'Stats' } },
      { src: '/images/recur/settings.webp', kind: 'mobile', label: { fr: 'Réglages', en: 'Settings' } },
    ],
  },
  {
    slug: 'eljamai-couture',
    name: 'ElJamai Couture',
    featured: true,
    draft: false,
    year: '2024 – 2025',
    // The client has replaced the site, so the work now lives on Behance
    url: 'https://www.behance.net/gallery/228344479/Eljamaicoutureae',
    linkLabel: 'visitBehance',
    repos: [],
    type: { fr: 'E-commerce · Laravel', en: 'E-commerce · Laravel' },
    summary: {
      fr: 'Boutique en ligne d’une maison de couture pour le marché des Émirats, avec paiement par carte et Apple Pay.',
      en: 'Online store for a couture house selling to the UAE market, with card and Apple Pay checkout.',
    },
    client: { fr: 'Maison de couture · Wardd Studios', en: 'Couture fashion house · Wardd Studios' },
    role: {
      fr: "Projet réalisé avec Ali Yara au sein de Wardd Studios, l'agence créative que nous avons cofondée : frontend, backend, paiements et SEO de la boutique.",
      en: 'Built with Ali Yara at Wardd Studios, the creative agency we co-founded: frontend, backend, payments and SEO for the store.',
    },
    stack: ['React', 'Laravel (PHP)', 'MySQL', 'Stripe', 'Apple Pay'],
    context: {
      fr: "Une maison de couture avait besoin d'une boutique en ligne pour vendre sur le marché des Émirats arabes unis.",
      en: 'A couture fashion house needed an online store to sell to the UAE market.',
    },
    built: {
      fr: ['Paiement Stripe', 'Apple Pay', 'SEO'],
      en: ['Stripe checkout', 'Apple Pay', 'SEO'],
    },
    challenges: [
      {
        title: { fr: 'Paiements pour le marché des Émirats', en: 'Payments for the UAE market' },
        text: {
          fr: "Intégrer Stripe et Apple Pay pour une boutique qui vend aux Émirats : gérer la devise du marché, vérifier le domaine auprès d'Apple Pay pour afficher le bouton de paiement, et confirmer les paiements côté serveur via les webhooks Stripe plutôt que de se fier au retour du navigateur.",
          en: "Integrating Stripe and Apple Pay for a store selling to the UAE: handling the market's currency, verifying the domain with Apple Pay so the payment button can show, and confirming payments on the server through Stripe webhooks instead of relying on the browser redirect.",
        },
      },
    ],
    result: {
      fr: 'Boutique livrée au client et mise en ligne pour le marché des Émirats, avec paiement par carte et Apple Pay. Le client a depuis fait évoluer le site ; la version que nous avons réalisée est visible sur Behance.',
      en: 'Store delivered to the client and launched for the UAE market, with card and Apple Pay checkout. The client has since changed the site; the version we built is on Behance.',
    },
    cover: shot('eljamai-couture', 'accueil', 'desktop', 'Accueil', 'Home page'),
    gallery: [
      shot('eljamai-couture', 'accueil', 'desktop', 'Accueil', 'Home page'),
      shot('eljamai-couture', 'collection', 'desktop', 'Collection avec filtres', 'Collection with filters'),
      shot('eljamai-couture', 'connexion', 'desktop', 'Connexion et création de compte', 'Sign-in and sign-up'),
    ],
  },
  {
    slug: 'pristine-dental',
    name: 'Pristine Dental',
    featured: true,
    draft: true,
    year: '2025',
    url: 'https://pristinedentalcenter.vercel.app/',
    repos: [],
    type: { fr: 'Site vitrine · Next.js', en: 'Showcase website · Next.js' },
    summary: {
      fr: 'Site d’un cabinet dentaire à Kénitra : présentation de la praticienne et des soins, FAQ et prise de contact directe par téléphone ou WhatsApp.',
      en: 'Website for a dental practice in Kénitra: the dentist and her treatments, an FAQ and direct contact by phone or WhatsApp.',
    },
    client: { fr: 'Cabinet dentaire à Kénitra (Maroc)', en: 'Dental practice in Kénitra (Morocco)' },
    role: { fr: 'Conception et développement du site.', en: 'Designed and built the website.' },
    stack: ['Next.js 14', 'React', 'Tailwind CSS', 'Lucide', 'Vercel'],
    context: {
      fr: 'Un cabinet dentaire veut présenter sa praticienne et ses soins, rassurer les futurs patients avant leur première visite et leur permettre de prendre rendez-vous facilement.',
      en: 'A dental practice wants to introduce its dentist and treatments, reassure future patients before their first visit and make it easy for them to book an appointment.',
    },
    built: {
      fr: [
        'Présentation de la praticienne',
        '6 soins : orthodontie, soins dentaires, blanchiment, implantologie, parodontologie, dentisterie esthétique',
        'Avis de patients et section Instagram avec vidéos',
        'Conseils et FAQ de 7 questions',
        'Bouton WhatsApp avec message pré-rempli et numéros cliquables',
        'Formulaire de contact et carte Google Maps',
      ],
      en: [
        "The dentist's profile",
        '6 treatments: orthodontics, dental care, whitening, implants, periodontics, cosmetic dentistry',
        'Patient reviews and an Instagram section with videos',
        'Advice and a 7-question FAQ',
        'WhatsApp button with a pre-filled message and tap-to-call numbers',
        'Contact form and Google Maps',
      ],
    },
    challenges: [
      {
        title: { fr: 'Prendre rendez-vous en un geste', en: 'Booking in one tap' },
        text: {
          fr: "Sur mobile, un patient veut appeler ou écrire tout de suite. Le bouton WhatsApp ouvre une conversation avec un message déjà rédigé pour la praticienne, les numéros sont en liens tel: et l'appel à « Prendre rendez-vous » revient dans l'en-tête et dans les sections clés.",
          en: 'On mobile, a patient wants to call or write right away. The WhatsApp button opens a chat with a message already written to the dentist, phone numbers are tel: links, and the “Book an appointment” call to action appears in the header and key sections.',
        },
      },
      {
        title: { fr: 'Être trouvé localement', en: 'Getting found locally' },
        text: {
          fr: "Le titre et la description de la page (API metadata de Next.js) ciblent la recherche « dentiste Kénitra » et reprennent le nom de la praticienne, les soins principaux et le numéro du cabinet.",
          en: "The page title and description (Next.js metadata API) target the “dentist Kénitra” search and include the dentist's name, the main treatments and the practice's phone number.",
        },
      },
      {
        title: { fr: 'Une page longue qui reste lisible sur mobile', en: 'A long page that stays readable on mobile' },
        text: {
          fr: "Tout tient sur une seule page (soins, avis, Instagram, FAQ, contact). Les réponses de la FAQ sont repliées en accordéon, et la mise en page passe en une colonne sur mobile sans aucun défilement horizontal à 375 px.",
          en: 'Everything sits on one page (treatments, reviews, Instagram, FAQ, contact). FAQ answers are collapsed in an accordion, and the layout switches to a single column on mobile with no horizontal scrolling at 375 px.',
        },
      },
    ],
    result: { fr: 'Site en ligne.', en: 'Site live.' },
    cover: shot('pristine-dental', 'accueil', 'desktop', 'Accueil', 'Home page'),
    gallery: [
      shot('pristine-dental', 'accueil', 'desktop', 'Accueil', 'Home page'),
      shot('pristine-dental', 'accueil-mobile', 'mobile', 'Accueil sur mobile', 'Home page on mobile'),
      shot('pristine-dental', 'soins', 'desktop', 'Les soins', 'Treatments'),
      shot('pristine-dental', 'contact', 'desktop', 'Contact', 'Contact'),
    ],
  },
  {
    slug: 'tl-global',
    name: 'TL Global',
    featured: false,
    draft: true,
    year: '2025',
    url: 'https://toufaiq.vercel.app/',
    repos: [],
    type: { fr: 'Site vitrine · React', en: 'Showcase website · React' },
    summary: {
      fr: "Site d'une entreprise d'aménagement intérieur et de rénovation au Maroc : services, réalisations filtrables et demande de projet.",
      en: 'Website for an interior design and renovation company in Morocco: services, filterable projects and a project request form.',
    },
    client: { fr: "Entreprise d'aménagement intérieur et de rénovation (Maroc)", en: 'Interior design and renovation company (Morocco)' },
    role: { fr: 'Conception et développement du site.', en: 'Designed and built the website.' },
    stack: ['React 19', 'Create React App', 'CSS', 'Vercel'],
    context: {
      fr: "Une entreprise d'aménagement intérieur veut montrer la qualité de ses réalisations, présenter ses services et recevoir des demandes de projet déjà qualifiées (type de travaux, budget).",
      en: 'An interior design company wants to show the quality of its work, present its services and receive project requests that are already qualified (type of work, budget).',
    },
    built: {
      fr: [
        '6 services : aménagement intérieur, rénovation, design, mobilier sur mesure, finitions, gestion de projet',
        "Présentation de l'entreprise et de l'équipe",
        '6 réalisations filtrables par catégorie (résidentiel, commercial, rénovation)',
        'Formulaire de demande de projet avec type de projet et budget estimé en MAD',
        'Bouton WhatsApp et carte Google Maps',
      ],
      en: [
        '6 services: interior fit-out, renovation, design, custom furniture, finishes, project management',
        'Company and team presentation',
        '6 projects filterable by category (residential, commercial, renovation)',
        'Project request form with project type and estimated budget in MAD',
        'WhatsApp button and Google Maps',
      ],
    },
    challenges: [
      {
        title: { fr: 'Des réalisations faciles à parcourir', en: 'Projects that are easy to browse' },
        text: {
          fr: 'Les réalisations se filtrent par catégorie sans rechargement de page : le filtre actif est un simple état React, et la grille se met à jour instantanément.',
          en: 'Projects can be filtered by category without reloading the page: the active filter is plain React state, and the grid updates instantly.',
        },
      },
      {
        title: { fr: 'Des animations sans bibliothèque', en: 'Animations without a library' },
        text: {
          fr: "Toutes les animations (apparitions, effets de survol, flottements) sont écrites en CSS avec des @keyframes, sans bibliothèque d'animation, ce qui garde le JavaScript léger.",
          en: 'Every animation (reveals, hover effects, floating elements) is written in CSS with @keyframes, with no animation library, which keeps the JavaScript light.',
        },
      },
      {
        title: { fr: 'Des demandes déjà qualifiées', en: 'Requests that arrive qualified' },
        text: {
          fr: "Le formulaire demande le type de projet et une fourchette de budget en dirhams, pour que l'entreprise sache tout de suite à quel type de chantier elle a affaire.",
          en: 'The form asks for the project type and a budget range in dirhams, so the company knows right away what kind of job it is dealing with.',
        },
      },
    ],
    result: { fr: 'Site en ligne.', en: 'Site live.' },
    cover: shot('tl-global', 'accueil', 'desktop', 'Accueil', 'Home page'),
    gallery: [
      shot('tl-global', 'accueil', 'desktop', 'Accueil', 'Home page'),
      shot('tl-global', 'accueil-mobile', 'mobile', 'Accueil sur mobile', 'Home page on mobile'),
      shot('tl-global', 'realisations', 'desktop', 'Réalisations filtrables', 'Filterable projects'),
      shot('tl-global', 'contact', 'desktop', 'Demande de projet', 'Project request'),
    ],
  },
  {
    slug: 'wardd-music',
    name: 'Wardd Music',
    featured: false,
    draft: true,
    year: '2026',
    url: 'https://warddstudio.ma/#tracks',
    repos: [{ label: 'WARDD-V3', url: 'https://github.com/Mosugar/WARDD-V3' }],
    type: { fr: 'Musique · Next.js', en: 'Music · Next.js' },
    summary: {
      fr: 'La partie musique du site Wardd : dernières sorties avec lecteur Spotify, clips YouTube et artistes passés au studio.',
      en: 'The music side of the Wardd website: latest releases with a Spotify player, YouTube music videos and artists who recorded at the studio.',
    },
    client: { fr: 'Wardd Studios · label et studio musical', en: 'Wardd Studios · music label and studio' },
    role: { fr: 'Conception et développement de la partie musique du site.', en: 'Designed and built the music side of the website.' },
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Spotify oEmbed', 'YouTube oEmbed', 'Vercel'],
    context: {
      fr: 'Le studio produit des titres et des clips pour ses artistes. Il voulait les mettre en avant sur son site et donner envie de les écouter, sans quitter la page.',
      en: 'The studio produces tracks and music videos for its artists. It wanted to showcase them on its website and make people want to listen, without leaving the page.',
    },
    built: {
      fr: [
        'Dernières sorties, dans le même ordre que la playlist Wardd sur Spotify',
        'Lecteur Spotify intégré pour le titre sélectionné',
        'Clips YouTube avec lecteur et liste',
        'Artistes passés en cabine',
        'Liens vers Spotify et la chaîne YouTube',
      ],
      en: [
        'Latest releases, in the same order as the Wardd playlist on Spotify',
        'Built-in Spotify player for the selected track',
        'YouTube music videos with a player and a list',
        'Artists who recorded at the studio',
        'Links to Spotify and the YouTube channel',
      ],
    },
    challenges: [
      {
        title: { fr: 'Pas de mur de lecteurs Spotify', en: 'No wall of Spotify players' },
        text: {
          fr: "Afficher chaque sortie avec un lecteur Spotify aurait chargé des dizaines d'iframes lourdes. Le titre, l'artiste et la pochette de chaque sortie sont donc récupérés côté serveur (getStaticProps), et le site affiche sa propre interface : un seul lecteur Spotify est chargé, celui du titre sélectionné.",
          en: "Showing every release with a Spotify player would have loaded dozens of heavy iframes. The title, artist and cover of each release are fetched on the server instead (getStaticProps), and the site renders its own UI: only one Spotify player is loaded, for the selected track.",
        },
      },
      {
        title: { fr: 'Des données toujours à jour, sans risque de panne', en: 'Always fresh data, without the risk of breaking' },
        text: {
          fr: "La page est régénérée toutes les 12 heures (ISR), donc une nouvelle sortie apparaît sans redéploiement : il suffit d'ajouter son identifiant Spotify. Chaque appel a un délai maximal et est protégé : si Spotify ou YouTube ne répond pas, la page s'affiche quand même avec un visuel de remplacement.",
          en: "The page is regenerated every 12 hours (ISR), so a new release shows up without a redeploy: you only add its Spotify ID. Every request has a timeout and is guarded: if Spotify or YouTube doesn't answer, the page still renders with a placeholder.",
        },
      },
    ],
    result: { fr: 'En ligne sur warddstudio.ma.', en: 'Live on warddstudio.ma.' },
    cover: shot('wardd-music', 'sorties', 'desktop', 'Dernières sorties', 'Latest releases'),
    gallery: [
      shot('wardd-music', 'sorties', 'desktop', 'Dernières sorties', 'Latest releases'),
      shot('wardd-music', 'sorties-mobile', 'mobile', 'Sorties sur mobile', 'Releases on mobile'),
      shot('wardd-music', 'clips', 'desktop', 'Clips', 'Music videos'),
      shot('wardd-music', 'artistes', 'desktop', 'Artistes', 'Artists'),
    ],
  },
  {
    slug: 'csba-law-firm',
    name: 'CSBA Law Firm',
    featured: false,
    draft: true,
    year: '2024',
    url: 'https://lawyer-sulaiman.vercel.app/',
    repos: [],
    type: { fr: 'Site vitrine · Next.js · Arabe (RTL)', en: 'Showcase website · Next.js · Arabic (RTL)' },
    summary: {
      fr: "Site en arabe d'un cabinet d'avocats et de notaires en Arabie saoudite : services juridiques, équipe, FAQ et demande de rendez-vous.",
      en: 'Arabic website for a law and notary firm in Saudi Arabia: legal services, team, FAQ and appointment requests.',
    },
    client: { fr: "Cabinet d'avocats en Arabie saoudite", en: 'Law firm in Saudi Arabia' },
    role: { fr: 'Conception et développement du site.', en: 'Designed and built the website.' },
    stack: ['Next.js', 'React', 'next/image', 'Vercel'],
    context: {
      fr: "Un cabinet d'avocats veut inspirer confiance, présenter clairement ses domaines d'intervention et son équipe, et permettre aux clients de demander un rendez-vous, le tout en arabe.",
      en: 'A law firm wants to inspire trust, clearly present its practice areas and its team, and let clients request an appointment, all in Arabic.',
    },
    built: {
      fr: [
        '6 services juridiques : conseil, création de sociétés, boutiques en ligne, droit du travail, contentieux, recouvrement',
        'Section des réalisations du cabinet',
        "Présentation de l'équipe",
        'Formulaire de demande de rendez-vous et FAQ',
        'Carte Google Maps, WhatsApp et réseaux sociaux',
      ],
      en: [
        '6 legal services: advice, company formation, online stores, employment law, litigation, debt recovery',
        "The firm's achievements section",
        'Team presentation',
        'Appointment request form and FAQ',
        'Google Maps, WhatsApp and social links',
      ],
    },
    challenges: [
      {
        title: { fr: 'Un site entièrement en arabe, de droite à gauche', en: 'A fully Arabic, right-to-left site' },
        text: {
          fr: "La page est déclarée en arabe (lang=\"ar\", dir=\"rtl\") : toute la mise en page se lit de droite à gauche, du menu aux formulaires. La police Cairo a été choisie pour sa bonne lisibilité en arabe, aux petites comme aux grandes tailles.",
          en: 'The page is declared as Arabic (lang="ar", dir="rtl"): the whole layout reads right to left, from the menu to the forms. The Cairo font was chosen for how readable it is in Arabic, at small and large sizes.',
        },
      },
      {
        title: { fr: 'Des visuels lourds qui chargent vite', en: 'Heavy visuals that still load fast' },
        text: {
          fr: "Les grandes photos du site passent par next/image, qui les sert redimensionnées et dans un format moderne selon l'écran du visiteur.",
          en: "The site's large photos go through next/image, which serves them resized and in a modern format for each visitor's screen.",
        },
      },
      {
        title: { fr: 'Le même site sur mobile', en: 'The same site on mobile' },
        text: {
          fr: 'Sur mobile, la navigation passe dans un menu burger et les sections se réorganisent en une colonne, sans défilement horizontal à 375 px.',
          en: 'On mobile, navigation moves into a burger menu and sections stack into a single column, with no horizontal scrolling at 375 px.',
        },
      },
    ],
    result: { fr: 'Site en ligne.', en: 'Site live.' },
    cover: shot('csba-law-firm', 'accueil', 'desktop', 'Accueil', 'Home page'),
    gallery: [
      shot('csba-law-firm', 'accueil', 'desktop', 'Accueil', 'Home page'),
      shot('csba-law-firm', 'accueil-mobile', 'mobile', 'Accueil sur mobile', 'Home page on mobile'),
      shot('csba-law-firm', 'services', 'desktop', 'Services juridiques', 'Legal services'),
      shot('csba-law-firm', 'rendez-vous', 'desktop', 'Demande de rendez-vous', 'Appointment request'),
    ],
  },
  {
    slug: 'gourmet-grove',
    name: 'Gourmet & Grove',
    featured: false,
    draft: true,
    year: '2024',
    url: 'https://gourmet-grove.vercel.app/',
    repos: [],
    type: { fr: 'Site vitrine · Next.js', en: 'Showcase website · Next.js' },
    summary: {
      fr: "Site d'une brasserie parisienne à Rabat : ambiance en vidéo, carte en ligne, galerie et réservation par téléphone ou e-mail.",
      en: 'Website for a Parisian-style brasserie in Rabat: video atmosphere, online menu, gallery and booking by phone or email.',
    },
    client: { fr: 'Brasserie à Rabat (Maroc)', en: 'Brasserie in Rabat (Morocco)' },
    role: { fr: 'Conception et développement du site.', en: 'Designed and built the website.' },
    stack: ['Next.js', 'React', 'next/image', 'Vercel'],
    context: {
      fr: "Un restaurant veut faire ressentir son ambiance avant même la visite, montrer sa carte et ses plats, et faciliter la réservation.",
      en: 'A restaurant wants people to feel its atmosphere before they even visit, show its menu and dishes, and make booking easy.',
    },
    built: {
      fr: [
        "Page d'accueil avec vidéo plein écran",
        'Pages À propos et Carte, avec les catégories (boissons, café, pâtisserie, desserts) et les prix',
        'Galerie de photos',
        "Présentation de l'équipe (gérant et chefs)",
        'Réservation par téléphone ou e-mail, carte Google Maps et réseaux sociaux',
      ],
      en: [
        'Home page with a full-screen video',
        'About and Menu pages, with categories (drinks, coffee, pastries, desserts) and prices',
        'Photo gallery',
        'Team presentation (manager and chefs)',
        'Booking by phone or email, Google Maps and social links',
      ],
    },
    challenges: [
      {
        title: { fr: 'Une vidéo plein écran dès l’arrivée', en: 'A full-screen video from the first second' },
        text: {
          fr: "L'accueil s'ouvre sur une vidéo plein écran. Un écran « Bienvenue » s'affiche pendant le chargement, pour que le visiteur ne voie jamais une page à moitié chargée.",
          en: 'The home page opens on a full-screen video. A “Bienvenue” screen shows while it loads, so visitors never see a half-loaded page.',
        },
      },
      {
        title: { fr: 'Une carte lisible sur tous les écrans', en: 'A menu that reads well on every screen' },
        text: {
          fr: 'La carte a sa propre page, organisée par catégories, avec les prix alignés. Sur mobile, la navigation passe dans un menu burger, sans défilement horizontal à 375 px.',
          en: 'The menu has its own page, organised by category, with aligned prices. On mobile, navigation moves into a burger menu, with no horizontal scrolling at 375 px.',
        },
      },
    ],
    result: { fr: 'Site en ligne.', en: 'Site live.' },
    cover: shot('gourmet-grove', 'accueil', 'desktop', 'Accueil', 'Home page'),
    gallery: [
      shot('gourmet-grove', 'accueil', 'desktop', 'Accueil', 'Home page'),
      shot('gourmet-grove', 'accueil-mobile', 'mobile', 'Accueil sur mobile', 'Home page on mobile'),
      shot('gourmet-grove', 'menu', 'desktop', 'La carte', 'The menu'),
      shot('gourmet-grove', 'galerie', 'desktop', 'Galerie de photos', 'Photo gallery'),
    ],
  },
  {
    slug: 'stretched-web',
    name: 'Stretched Web',
    featured: false,
    draft: true,
    year: '2023',
    url: 'https://stretched-web.vercel.app/',
    repos: [],
    type: { fr: "Site d'agence · Next.js · GSAP", en: 'Agency website · Next.js · GSAP' },
    summary: {
      fr: "Site d'une agence web créative : accueil animé, portfolio de réalisations avec une page par projet, services et studio.",
      en: 'Website for a creative web agency: animated home page, project portfolio with one page per project, services and studio.',
    },
    client: { fr: 'Stretched Web, agence web · poste de Développeur Frontend', en: 'Stretched Web, web agency · Frontend Developer role' },
    role: { fr: 'Développeur Frontend (juin – août 2023).', en: 'Frontend Developer (June – August 2023).' },
    stack: ['Next.js 14', 'React', 'GSAP', 'ScrollTrigger', 'Tailwind CSS', 'Vercel'],
    context: {
      fr: "Une agence web doit prouver son savoir-faire dès son propre site : il doit être animé et soigné, montrer ses réalisations et donner envie de la contacter.",
      en: 'A web agency has to prove its skills on its own website: it must be animated and polished, show its work and make people want to get in touch.',
    },
    built: {
      fr: [
        "Écran d'accueil animé et page d'accueil avec réalisations récentes et avis clients",
        'Portfolio : liste des réalisations avec leurs prestations, et une page par projet',
        'Pages Services, Studio et Contact',
        'Données structurées (JSON-LD Organization) et Open Graph',
      ],
      en: [
        'Animated intro screen and home page with recent work and client testimonials',
        'Portfolio: list of projects with their services, and one page per project',
        'Services, Studio and Contact pages',
        'Structured data (JSON-LD Organization) and Open Graph',
      ],
    },
    challenges: [
      {
        title: { fr: 'Des animations liées au défilement', en: 'Scroll-driven animations' },
        text: {
          fr: "Les titres et les sections s'animent au fil du défilement avec GSAP et son extension ScrollTrigger, pour un rendu fluide sans alourdir la lecture.",
          en: 'Headings and sections animate as you scroll with GSAP and its ScrollTrigger plugin, for a smooth feel that doesn’t get in the way of reading.',
        },
      },
      {
        title: { fr: 'Une page par réalisation', en: 'One page per project' },
        text: {
          fr: 'Chaque réalisation a sa propre URL (/work/crib, /work/smiley…), construite sur le même gabarit : ajouter un projet ne demande pas de créer une nouvelle page à la main.',
          en: 'Every project has its own URL (/work/crib, /work/smiley…), built on the same template: adding a project doesn’t mean hand-building a new page.',
        },
      },
    ],
    result: { fr: 'Site en ligne.', en: 'Site live.' },
    cover: shot('stretched-web', 'accueil', 'desktop', 'Accueil', 'Home page'),
    gallery: [
      shot('stretched-web', 'accueil', 'desktop', 'Accueil', 'Home page'),
      shot('stretched-web', 'accueil-mobile', 'mobile', 'Accueil sur mobile', 'Home page on mobile'),
      shot('stretched-web', 'realisations', 'desktop', 'Réalisations', 'Work'),
      shot('stretched-web', 'services', 'desktop', 'Services', 'Services'),
    ],
  },
];
