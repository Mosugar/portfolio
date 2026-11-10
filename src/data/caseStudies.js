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
    period: { fr: 'Wardd Studios · Nov. 2026', en: 'Wardd Studios · Nov 2026' },
    tag: { fr: 'Site vitrine · Full-Stack', en: 'Showcase website · Full-Stack' },
    problem: {
      fr: "Un studio d'enregistrement avait besoin d'un site pour présenter le studio, son histoire (de 2016 à aujourd'hui), son travail et les projets qu'il a produits, et permettre aux clients de réserver des sessions.",
      en: 'A recording studio needed a website to present the studio, its story (2016 to today), its work and the projects it produced, and to let clients book sessions.',
    },
    role: {
      fr: 'Conception et développement de cette version du site, seul : UI, intégration, réservation, assistant IA et bilingue FR/AR. Ali Yara, cofondateur de Wardd Studios, avait contribué aux versions précédentes.',
      en: 'Designed and built this version of the site on my own: UI, front-end build, booking, AI assistant and the bilingual FR/AR setup. Ali Yara, co-founder of Wardd Studios, contributed to earlier versions.',
    },
    // From the site's package.json and README (WARDD-V3)
    stack: ['Next.js', 'React', 'Tailwind CSS', 'GSAP', 'Motion', 'Anthropic API', 'Spotify Web API', 'YouTube oEmbed', 'FormSubmit', 'Vercel'],
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
    challenge: {
      fr: "Un seul site en français et en arabe. La langue vient de l'URL (/ et /ar, via l'i18n de Next.js) et fixe lang et dir sur la page : la mise en page passe en RTL, les flèches et icônes directionnelles sont inversées (variantes rtl: de Tailwind), et les carrousels qui dépendent du sens de défilement restent volontairement en LTR. L'arabe utilise IBM Plex Sans Arabic, le latin Inter. Les champs du formulaire et du chat sont en dir=\"auto\" pour gérer le texte mixte, tandis que l'e-mail et le téléphone restent en LTR. L'assistant IA passe par une route API côté serveur, la clé n'est donc jamais exposée au navigateur. Son prompt est construit à partir d'un seul fichier de connaissances (services, packs, horaires, réservation), partagé avec un mode hors ligne qui répond si l'API n'est pas disponible. L'historique envoyé est limité et chaque IP a un nombre de requêtes par minute plafonné.",
      en: "One site in French and Arabic. The language comes from the URL (/ and /ar, through Next.js i18n) and sets lang and dir on the page: the layout switches to RTL, directional arrows and icons are mirrored (Tailwind rtl: variants), and carousels that depend on scroll direction deliberately stay LTR. Arabic uses IBM Plex Sans Arabic, Latin text uses Inter. Form and chat inputs use dir=\"auto\" to handle mixed-direction text, while email and phone fields stay LTR. The AI assistant goes through a server-side API route, so the key is never exposed to the browser. Its prompt is built from a single knowledge file (services, packs, opening hours, booking), shared with an offline mode that answers when the API isn't available. The history sent is capped and each IP has a per-minute request limit.",
    },
    result: {
      fr: 'Mis en ligne en novembre 2026. Dès la première semaine, environ 6 clients ont pris contact via le site.',
      en: 'Launched in November 2026. In the first week, around 6 clients got in touch through the site.',
    },
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
    role: {
      fr: "Projet réalisé avec Ali Yara au sein de Wardd Studios, l'agence créative que nous avons cofondée : frontend, backend, paiements et SEO de la boutique.",
      en: 'Built with Ali Yara at Wardd Studios, the creative agency we co-founded: frontend, backend, payments and SEO for the store.',
    },
    stack: ['React', 'Laravel (PHP)', 'MySQL', 'Stripe', 'Apple Pay'],
    features: {
      fr: ['Paiement Stripe', 'Apple Pay', 'SEO'],
      en: ['Stripe checkout', 'Apple Pay', 'SEO'],
    },
    challenge: {
      fr: "Intégrer Stripe et Apple Pay pour une boutique qui vend aux Émirats : gérer la devise du marché, vérifier le domaine auprès d'Apple Pay pour afficher le bouton de paiement, et confirmer les paiements côté serveur via les webhooks Stripe plutôt que de se fier au retour du navigateur.",
      en: "Integrating Stripe and Apple Pay for a store selling to the UAE: handling the market's currency, verifying the domain with Apple Pay so the payment button can show, and confirming payments on the server through Stripe webhooks instead of relying on the browser redirect.",
    },
    result: {
      fr: 'Boutique livrée au client et mise en ligne pour le marché des Émirats, avec paiement par carte et Apple Pay. Le client a depuis fait évoluer le site ; la version que nous avons réalisée est visible sur Behance.',
      en: 'Store delivered to the client and launched for the UAE market, with card and Apple Pay checkout. The client has since changed the site; the version we built is on Behance.',
    },
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
    result: {
      fr: 'En cours de test, pas encore publié sur les stores. Le code source est public sur GitHub.',
      en: 'In testing, not yet published on the stores. The source code is public on GitHub.',
    },
    screenshotAspect: 'aspect-[9/19]',
    screenshots: [
      { src: '/images/recur/home.webp', label: { fr: 'Accueil', en: 'Home' } },
      { src: '/images/recur/add.webp', label: { fr: 'Ajout', en: 'Add subscription' } },
      { src: '/images/recur/stats.webp', label: { fr: 'Statistiques', en: 'Stats' } },
      { src: '/images/recur/settings.webp', label: { fr: 'Réglages', en: 'Settings' } },
    ],
  },
];
