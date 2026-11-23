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
    stack: ['Next.js', 'React', 'Tailwind CSS', 'GSAP', 'Motion', 'Anthropic API', 'Spotify Web API', 'YouTube oEmbed', 'FormSubmit', 'Vercel'],
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
];
