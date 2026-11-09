// Case studies shown in the Works section.
// Every fact here comes from the experience entries, project data or the
// project's own README. Anything that couldn't be verified is a TODO —
// TODO fields are shown (dashed, labelled) in dev and hidden in production.

export const TODO = (note) => ({ todo: note });

export const caseStudies = [
  {
    id: 'scorelift',
    name: 'ScoreLift',
    url: 'https://scorelift.fr/',
    img: '/images/scorelift.png',
    period: { fr: 'Avr. 2026 – Présent', en: 'Apr 2026 – Present' },
    tag: { fr: 'App mobile · React Native', en: 'Mobile app · React Native' },
    problem: {
      fr: "Les athlètes et clubs ont besoin d'un espace commun pour suivre leurs performances, suivre la communauté et participer à des compétitions.",
      en: 'Athletes and clubs need one place to track performance, follow their community and take part in competitions.',
    },
    problemTodo: TODO('Describe the exact problem ScoreLift solves for its users (who are they, what was missing before?).'),
    role: {
      fr: "Développeur Full Stack chez ScoreLift (L'École du Tigre), en télétravail. Développement de l'app mobile iOS et Android en React Native et intégration des APIs REST avec l'équipe backend Java.",
      en: "Full Stack Developer at ScoreLift (L'École du Tigre), remote. Building the iOS and Android app in React Native and integrating REST APIs with the Java backend team.",
    },
    roleTodo: TODO('Team size, what you own end to end, and which screens/features you personally built.'),
    stack: ['React Native', 'TypeScript', 'REST API', 'Java (backend team)'],
    features: {
      fr: ["Profils d'athlètes", "Fil d'actualité", 'Suivi des performances', 'Classements', 'Tournois'],
      en: ['Athlete profiles', 'News feed', 'Performance tracking', 'Rankings', 'Tournaments'],
    },
    challenge: null,
    challengeTodo: TODO('One hard technical problem you solved (e.g. feed performance, offline state, API contract with the Java team) and how.'),
    result: null,
    resultTodo: TODO('Outcome: release status, number of users/testers, store availability, any measurable result.'),
  },
  {
    id: 'eljamai',
    name: 'ElJamai Couture',
    url: 'https://eljamaicouture.ae',
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
    resultTodo: TODO('Launch date, orders/traffic, client feedback. Note: eljamaicouture.ae was unreachable on 2026-11-09 — confirm it is live.'),
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
    // TODO: export the screenshots to public/images/recur/ (see list in the summary)
    screenshots: [
      { src: '/images/recur/home.webp', label: { fr: 'Accueil', en: 'Home' } },
      { src: '/images/recur/add.webp', label: { fr: 'Ajout', en: 'Add subscription' } },
      { src: '/images/recur/stats.webp', label: { fr: 'Statistiques', en: 'Stats' } },
      { src: '/images/recur/settings.webp', label: { fr: 'Réglages', en: 'Settings' } },
    ],
  },
];
