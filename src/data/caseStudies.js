// Case studies shown in the Works section.
// Every fact here comes from the experience entries, project data or the
// project's own README. Anything that couldn't be verified is a TODO —
// TODO fields are shown (dashed, labelled) in dev and hidden in production.

export const TODO = (note) => ({ todo: note });

export const caseStudies = [
  {
    id: 'wardd-studio',
    name: 'Wardd Studio',
    url: 'https://warddstudio.ma/',
    img: '/images/wardd-studio.webp',
    period: { fr: 'Wardd Studios', en: 'Wardd Studios' },
    tag: { fr: 'Site vitrine · Full-Stack', en: 'Showcase website · Full-Stack' },
    problem: {
      fr: "Un studio d'enregistrement avait besoin d'un site pour présenter le studio, son histoire (de 2016 à aujourd'hui), son travail et les projets qu'il a produits, et permettre aux clients de réserver des sessions.",
      en: 'A recording studio needed a website to present the studio, its story (2016 to today), its work and the projects it produced, and to let clients book sessions.',
    },
    role: {
      fr: 'Développement du site. Je suis le fondateur de Wardd Studios.',
      en: "Developed the site. I'm the founder of Wardd Studios.",
    },
    roleTodo: TODO('Who did the design? Did you build it alone or with other people?'),
    stack: [],
    stackTodo: TODO('Confirm the stack (frontend framework, backend/API, hosting, AI provider for the assistant, email service for bookings).'),
    features: {
      fr: [
        'Présentation du studio et frise de son histoire',
        'Services et packs (Étudiant, Pro, Premium)',
        'Sorties et clips vidéo',
        'Artistes',
        'Demandes de réservation traitées par e-mail',
        "Assistant IA (« Assistant Wardd ») intégré via une API pour aider les clients",
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
    challenge: null,
    challengeTodo: TODO('Pick one and explain how you solved it: the bilingual FR/AR site with an RTL layout (mirroring, fonts, mixed-direction text), or integrating the AI assistant through an API (prompting, studio data, cost/rate limits).'),
    result: null,
    resultTodo: TODO('Launch date, number of booking requests since launch, client/artist feedback.'),
    screenshotAspect: 'aspect-[16/10]',
    screenshots: [
      { src: '/images/wardd/story.webp', label: { fr: 'Notre histoire', en: 'Our story' } },
      { src: '/images/wardd/packs.webp', label: { fr: 'Packs', en: 'Packs' } },
      { src: '/images/wardd/releases.webp', label: { fr: 'Dernières sorties', en: 'Latest releases' } },
      { src: '/images/wardd/artists.webp', label: { fr: 'Artistes', en: 'Artists' } },
    ],
  },
  {
    id: 'eljamai',
    name: 'ElJamai Couture',
    // The client has replaced the site, so the work now lives on Behance
    url: 'https://www.behance.net/gallery/228344479/Eljamaicoutureae',
    linkLabel: 'visitBehance',
    img: 'https://res.cloudinary.com/decjm9mmr/image/upload/q_80,f_auto/d-clubArtboard_1_cjqxkq.png',
    period: { fr: 'Wardd Studios · 2024 – 2025', en: 'Wardd Studios · 2024 – 2025' },
    tag: { fr: 'E-commerce · Laravel', en: 'E-commerce · Laravel' },
    problem: {
      fr: 'Une maison de couture avait besoin d\'une boutique en ligne pour vendre sur le marché des Émirats arabes unis.',
      en: 'A couture fashion house needed an online store to sell to the UAE market.',
    },
    problemTodo: TODO('What did the client have before, and what did they need most (catalogue size, custom orders, languages)?'),
    role: {
      fr: 'Responsable développement chez Wardd Studios : frontend, backend, paiements et SEO de la boutique.',
      en: 'Head of development at Wardd Studios: frontend, backend, payments and SEO for the store.',
    },
    roleTodo: TODO('Did you work alone or with a designer/other devs? Who handled the design?'),
    stack: ['React', 'Laravel', 'MySQL', 'Stripe', 'Apple Pay'],
    features: {
      fr: ['Paiement Stripe', 'Apple Pay', 'SEO'],
      en: ['Stripe checkout', 'Apple Pay', 'SEO'],
    },
    challenge: null,
    challengeTodo: TODO('A concrete challenge — e.g. Stripe + Apple Pay integration for the UAE (currency, domain verification, webhooks) — and how you solved it.'),
    result: null,
    resultTodo: TODO('Launch date, orders/traffic, client feedback.'),
  },
  {
    id: 'recur',
    name: 'Recur',
    url: 'https://github.com/Mosugar/recur',
    img: '/images/recur-icon.svg',
    period: { fr: 'Projet personnel', en: 'Personal project' },
    tag: { fr: 'Mobile · Expo · React Native', en: 'Mobile · Expo · React Native' },
    problem: {
      fr: "Les abonnements s'accumulent et les renouvellements arrivent par surprise. Recur montre ce que l'on paie, et quand.",
      en: 'Subscriptions pile up and renewals come as a surprise. Recur shows what you pay, and when.',
    },
    role: {
      fr: 'Projet personnel conçu et développé de bout en bout : architecture, UI, logique métier et tests.',
      en: 'Personal project, designed and built end to end: architecture, UI, business logic and tests.',
    },
    stack: ['Expo', 'React Native', 'TypeScript (strict)', 'Expo Router', 'NativeWind', 'Reanimated', 'expo-sqlite', 'Zustand', 'expo-notifications', 'i18next', 'Jest'],
    features: {
      fr: ['Totaux mensuels et annuels', 'Paiements des 7 prochains jours', 'Rappel la veille de chaque paiement', 'Statistiques par catégorie (donut SVG animé)', 'Mode sombre', 'FR / EN', '100 % hors ligne, sans compte'],
      en: ['Monthly & yearly totals', 'Payments due in the next 7 days', 'Reminder the day before each payment', 'Spending by category (animated SVG donut)', 'Dark mode', 'FR / EN', '100% offline, no account'],
    },
    challenge: {
      fr: "Des calculs de dates et d'argent fiables. Les prix sont stockés en centimes (entiers) pour éviter les erreurs de virgule flottante. La prochaine date de paiement n'est jamais stockée : elle est calculée à partir de la première date et du cycle, et les fins de mois sont gérées (un abonnement du 31 janvier se renouvelle le 28/29 février). Cette logique vit dans des fonctions pures, séparées de l'UI et testées avec Jest.",
      en: "Reliable date and money math. Prices are stored in cents (integers) to avoid floating-point errors. The next payment date is never stored: it's computed from the first payment date and the billing cycle, and month-end edge cases are handled (a subscription billed on Jan 31 renews on Feb 28/29). This logic lives in pure functions, separated from the UI and unit-tested with Jest.",
    },
    result: null,
    resultTodo: TODO('Status: published on a store? Test coverage numbers? Who uses it?'),
    screenshotAspect: 'aspect-[9/19]',
    screenshots: [
      { src: '/images/recur/home.webp', label: { fr: 'Accueil', en: 'Home' } },
      { src: '/images/recur/add.webp', label: { fr: 'Ajout', en: 'Add subscription' } },
      { src: '/images/recur/stats.webp', label: { fr: 'Statistiques', en: 'Stats' } },
      { src: '/images/recur/settings.webp', label: { fr: 'Réglages', en: 'Settings' } },
    ],
  },
];
