// Every project shown in Works and on its /projets/:slug case study page, in display order.
// Texts are { fr, en }. Images live in public/images/projets/<slug>/ (see scripts/capture.mjs).
//
// draft: true → texts written from what the live site and its code show, still to be checked
// by Mohamed (see REVUE_ETUDES_DE_CAS.md). Never put invented numbers or client results here.
//
// featured   big card on the home page; the others go in the compact "Autres projets" list
// status     'in-progress' shows an "En cours" badge on the card (live, still being improved)
// sector     client's sector, counted in About's "Secteurs couverts" (null: personal project or not counted)
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
    sector: 'formation-recrutement',
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
    draft: true,
    year: '2024 – 2025',
    sector: 'marketing-communication',
    // The agency's old site (warddstudio.com) is offline while the new one is built: the work lives on Behance
    url: 'https://www.behance.net/gallery/228343139/Wardd-studio-httpswwwwarddstudiocom',
    linkLabel: 'visitBehance',
    repos: [],
    type: { fr: 'Agence marketing 360° · Mon agence (cofondateur)', en: '360° marketing agency · My agency (co-founder)' },
    summary: {
      fr: "Le site de Wardd Studio, l'agence de marketing 360° que j'ai cofondée : services, réalisations, démarche et références, pour donner envie aux entreprises de réserver un appel.",
      en: 'The website of Wardd Studio, the 360° marketing agency I co-founded: services, work, approach and clients, to get businesses to book a call.',
    },
    client: null, // my own agency, not a client
    role: { fr: 'Cofondateur & Responsable Développement.', en: 'Co-founder & Head of Development.' },
    // Tools listed on the Behance project (the code isn't in a repository)
    stack: ['React', 'HTML/CSS', 'SQL', 'Figma'],
    context: {
      fr: "Le site vitrine de notre propre agence de marketing 360°. Il devait présenter aux entreprises tout ce que fait l'agence (tournage de clips, événements, design, développement web et mobile, coaching et contenu pour les réseaux sociaux), montrer ses réalisations et sa façon de travailler, et les inciter à réserver un appel.",
      en: "The showcase website of our own 360° marketing agency. It had to present everything the agency does for businesses (music videos, events, design, web and mobile development, social media coaching and content), show its work and the way it works, and get them to book a call.",
    },
    built: {
      fr: [
        "Accueil en vidéo plein écran, avec un bouton « Book a call » dans l'en-tête",
        "Présentation de l'agence",
        'Carrousel des réalisations (« Featured work »)',
        'Démarche en 6 étapes : stratégie, design et motion, développement, marketing, suivi, évolution',
        "Présentation de l'équipe et des valeurs de l'agence",
        'Mur des logos des références et témoignages clients',
      ],
      en: [
        'Full-screen video home page, with a “Book a call” button in the header',
        'Agency introduction',
        'Work carousel (“Featured work”)',
        'A 6-step approach: strategy, design and motion, development, marketing, support, evolution',
        "The agency's team and values",
        'Client logo wall and testimonials',
      ],
    },
    challenges: [],
    result: {
      fr: "Le site a accompagné l'activité de l'agence. Il est aujourd'hui hors ligne, le temps de construire le nouveau site, et reste visible sur Behance.",
      en: "The site supported the agency's work. It is offline for now while the new site is built, and can still be seen on Behance.",
    },
    cover: shot('wardd-studio', 'agence', 'desktop', "L'agence", 'The agency'),
    gallery: [
      shot('wardd-studio', 'accueil', 'desktop', 'Accueil', 'Home page'),
      shot('wardd-studio', 'agence', 'desktop', "L'agence", 'The agency'),
      shot('wardd-studio', 'realisations', 'desktop', 'Réalisations', 'Featured work'),
      shot('wardd-studio', 'demarche', 'desktop', 'Démarche en 6 étapes', '6-step approach'),
      shot('wardd-studio', 'references', 'desktop', 'Références', 'Clients'),
    ],
  },
  {
    slug: 'recur',
    name: 'Recur',
    featured: true,
    draft: false,
    year: '2026',
    sector: null,
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
    sector: 'mode',
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
      fr: "Réalisé avec Wardd Studios, l'agence de marketing 360° que j'ai cofondée, avec Ali Yara : frontend, backend, paiements et SEO de la boutique.",
      en: 'Built with Wardd Studios, the 360° marketing agency I co-founded, with Ali Yara: frontend, backend, payments and SEO for the store.',
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
    slug: 'nexly',
    name: 'Nexly',
    featured: true,
    draft: true,
    status: 'in-progress',
    year: '2026',
    sector: null,
    url: 'https://nexly.nexlychat.workers.dev/',
    repos: [],
    type: { fr: 'Application web · Chat vidéo en temps réel', en: 'Web app · Real-time video chat' },
    summary: {
      fr: 'Chat aléatoire en vidéo ou en texte, alternative à Omegle : mise en relation en temps réel, floutage anti-nudité sur l’appareil et modération, sans compte.',
      en: 'Random video or text chat, an Omegle alternative: real-time matching, on-device nudity blurring and moderation, no account needed.',
    },
    client: { fr: 'Projet personnel', en: 'Personal project' },
    role: { fr: 'Conception et développement complet.', en: 'Designed and built end to end.' },
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Supabase (Postgres, Realtime)', 'WebRTC', 'TensorFlow.js', 'nsfwjs', 'next-intl', 'Cloudflare Workers', 'OpenNext'],
    context: {
      fr: "Les sites de chat aléatoire mettent en relation des inconnus en quelques secondes, mais posent de vrais problèmes de sécurité. Nexly reprend le principe d'Omegle avec la sécurité au centre : 18 ans et plus, aucune vidéo enregistrée, pas de compte, et des protections qui fonctionnent dès la première seconde.",
      en: "Random chat sites connect strangers in seconds, but come with real safety problems. Nexly takes Omegle's idea with safety at its core: 18+, no video ever recorded, no account, and protections that work from the very first second.",
    },
    built: {
      fr: [
        'Chat vidéo (caméra + micro) ou texte seulement, avec un bouton « Suivant »',
        "Mise en relation par centres d'intérêt, langue et pays (facultatifs)",
        "Vérification de l'âge (18+) avant le premier chat",
        'Floutage automatique de la nudité, analysé sur l’appareil de celui qui regarde',
        'Signalement, bannissement automatique et panneau d’administration',
        'Filtre des messages : liens, numéros de téléphone et insultes',
        'Site en français, anglais et arabe (RTL), avec des pages SEO dédiées',
      ],
      en: [
        'Video chat (camera + mic) or text only, with a “Next” button',
        'Matching by interests, language and country (optional)',
        'Age check (18+) before the first chat',
        "Automatic nudity blurring, analysed on the viewer's device",
        'Reporting, automatic bans and an admin panel',
        'Message filter: links, phone numbers and insults',
        'Site in French, English and Arabic (RTL), with dedicated SEO pages',
      ],
    },
    challenges: [
      {
        title: { fr: 'Une mise en relation fiable, sans « fantômes »', en: 'Reliable matching, without “ghosts”' },
        text: {
          fr: "La file d'attente vit dans Postgres et la mise en relation est une fonction SQL. Elle verrouille les lignes avec FOR UPDATE SKIP LOCKED, pour que deux personnes ne soient jamais associées au même partenaire en même temps. Chaque client signale sa présence environ toutes les secondes : seuls ceux vus dans les 6 dernières secondes sont associés, donc un onglet fermé ne devient jamais un partenaire « fantôme ». La fonction privilégie les centres d'intérêt communs, puis la langue et le pays, et évite de remettre ensemble deux personnes qui viennent de se quitter.",
          en: "The waiting queue lives in Postgres and matching is a SQL function. It locks rows with FOR UPDATE SKIP LOCKED, so two people are never paired with the same partner at once. Each client checks in about every second: only those seen in the last 6 seconds get matched, so a closed tab never becomes a “ghost” partner. The function favours shared interests, then language and country, and avoids pairing two people who just left each other.",
        },
      },
      {
        title: { fr: 'De la vidéo en pair-à-pair', en: 'Peer-to-peer video' },
        text: {
          fr: "La vidéo passe directement entre les deux navigateurs (WebRTC) et ne transite par aucun serveur, d'où l'absence d'enregistrement. La négociation de la connexion, les messages, l'indicateur « en train d'écrire » et l'état de la caméra passent par un canal Supabase Realtime privé, propre à chaque conversation. Quand la connexion directe pair-à-pair échoue (réseaux d'entreprise, certains opérateurs mobiles), la vidéo passe par le relais TURN de Cloudflare, actif en production. Une route serveur délivre des identifiants TURN temporaires, jamais inclus dans le code envoyé au navigateur.",
          en: 'Video goes straight between the two browsers (WebRTC) and never through a server, which is why nothing is recorded. Connection setup, messages, the “typing” indicator and camera state go through a private Supabase Realtime channel for each conversation. When a direct peer-to-peer connection fails (corporate networks, some mobile carriers), video goes through Cloudflare’s TURN relay, live in production. A server route hands out short-lived TURN credentials, never shipped in the browser code.',
        },
      },
      {
        title: { fr: 'Une modération qui ne dépend pas de celui qui envoie', en: "Moderation that doesn't depend on the sender" },
        text: {
          fr: "La détection de nudité (nsfwjs sur TensorFlow.js) tourne sur l'appareil de celui qui regarde : celui qui envoie ne peut donc pas la contourner. Le modèle n'est téléchargé qu'au lancement d'un chat vidéo. Côté signalements, les règles sont en base : un compte n'est banni automatiquement qu'après les signalements de plusieurs personnes différentes, les signalements du détecteur ne bannissent jamais seuls, et chaque utilisateur a une limite de signalements par heure pour éviter les abus.",
          en: "Nudity detection (nsfwjs on TensorFlow.js) runs on the viewer's device, so the sender can't get around it. The model is only downloaded when a video chat starts. For reports, the rules live in the database: an account is only banned automatically after reports from several different people, detector reports never ban on their own, and each user has an hourly report limit to prevent abuse.",
        },
      },
      {
        title: { fr: 'Next.js sur Cloudflare Workers', en: 'Next.js on Cloudflare Workers' },
        text: {
          fr: "L'application Next.js est déployée sur Cloudflare Workers grâce à OpenNext. Les secrets serveur restent dans les secrets Cloudflare (Wrangler) et ne sont jamais placés dans les fichiers .env, qu'OpenNext intègre au Worker.",
          en: 'The Next.js app is deployed to Cloudflare Workers through OpenNext. Server secrets stay in Cloudflare secrets (Wrangler) and are never put in .env files, which OpenNext bundles into the Worker.',
        },
      },
    ],
    result: { fr: 'En ligne depuis novembre 2026, en développement actif.', en: 'Live since November 2026, in active development.' },
    cover: shot('nexly', 'accueil', 'desktop', 'Accueil', 'Home page'),
    gallery: [
      shot('nexly', 'accueil', 'desktop', 'Accueil', 'Home page'),
      shot('nexly', 'accueil-mobile', 'mobile', 'Accueil sur mobile', 'Home page on mobile'),
      shot('nexly', 'fonctionnalites', 'desktop', 'Fonctionnalités', 'Features'),
      shot('nexly', 'securite', 'desktop', 'Page Sécurité', 'Safety page'),
      shot('nexly', 'arabe', 'desktop', 'Version arabe (RTL)', 'Arabic version (RTL)'),
    ],
  },
  {
    slug: 'wardd-music',
    name: 'Wardd Music',
    featured: false,
    draft: false,
    year: '2026',
    sector: 'musique',
    url: 'https://warddstudio.ma/',
    repos: [{ label: 'WARDD-V3', url: 'https://github.com/Mosugar/WARDD-V3' }],
    type: { fr: 'Studio de musique Wardd · Next.js', en: 'Wardd music studio · Next.js' },
    summary: {
      fr: "Le site de Wardd Music, le studio de musique de Wardd (enregistrement, mixage, mastering, production) : sorties, packs, réservation de sessions et assistant IA, en français et en arabe.",
      en: "The website of Wardd Music, Wardd's music studio (recording, mixing, mastering, production): releases, packs, session booking and an AI assistant, in French and Arabic.",
    },
    client: null, // Wardd's own music studio, not an outside client
    role: {
      fr: 'Cofondateur, conception et développement du site, seul : UI, intégration, réservation, assistant IA et bilingue FR/AR.',
      en: 'Co-founder; designed and built the website on my own: UI, front-end build, booking, AI assistant and the bilingual FR/AR setup.',
    },
    // From the site's package.json and README (WARDD-V3)
    stack: ['Next.js', 'React', 'Tailwind CSS', 'GSAP', 'Motion', 'Anthropic API', 'Spotify oEmbed', 'YouTube oEmbed', 'FormSubmit', 'Vercel'],
    context: {
      fr: "Wardd Music, le studio de musique de Wardd (enregistrement, mixage, mastering, production), avait besoin d'un site pour présenter le studio, son histoire (de 2016 à aujourd'hui), son travail et les projets qu'il a produits, et permettre aux clients de réserver des sessions.",
      en: "Wardd Music, Wardd's music studio (recording, mixing, mastering, production), needed a website to present the studio, its story (2016 to today), its work and the projects it produced, and to let clients book sessions.",
    },
    built: {
      fr: [
        'Présentation du studio et frise de son histoire',
        'Services et packs (Étudiant, Pro, Premium)',
        'Dernières sorties avec lecteur Spotify intégré, et clips YouTube',
        'Artistes',
        'Demandes de réservation traitées par e-mail',
        'Assistant IA (« Assistant Wardd ») intégré via une API pour aider les clients',
        'Bilingue français / arabe (RTL)',
        'UI/UX moderne et simple',
      ],
      en: [
        'Studio presentation and history timeline',
        'Services and packs (Étudiant, Pro, Premium)',
        'Latest releases with a built-in Spotify player, and YouTube music videos',
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
    result: {
      fr: 'Mis en ligne en novembre 2026. Dès la première semaine, environ 6 clients ont pris contact via le site.',
      en: 'Launched in November 2026. In the first week, around 6 clients got in touch through the site.',
    },
    cover: shot('wardd-music', 'accueil', 'desktop', 'Accueil', 'Home page'),
    gallery: [
      shot('wardd-music', 'accueil', 'desktop', 'Accueil', 'Home page'),
      shot('wardd-music', 'accueil-mobile', 'mobile', 'Accueil sur mobile', 'Home page on mobile'),
      shot('wardd-music', 'arabe', 'desktop', 'Version arabe (RTL)', 'Arabic version (RTL)'),
      shot('wardd-music', 'reservation', 'desktop', 'Réservation de session', 'Session booking'),
      { src: '/images/wardd/story.webp', kind: 'desktop', label: { fr: 'Notre histoire', en: 'Our story' } },
      { src: '/images/wardd/packs.webp', kind: 'desktop', label: { fr: 'Packs', en: 'Packs' } },
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
    sector: 'juridique',
    url: 'https://lawyer-sulaiman.vercel.app/',
    repos: [],
    type: { fr: 'Site vitrine · Next.js · Arabe (RTL)', en: 'Showcase website · Next.js · Arabic (RTL)' },
    summary: {
      fr: "Site en arabe d'un cabinet d'avocats et de notaires en Arabie saoudite : services juridiques, réalisations, équipe et FAQ.",
      en: 'Arabic website for a law and notary firm in Saudi Arabia: legal services, achievements, team and FAQ.',
    },
    client: { fr: "Cabinet d'avocats en Arabie saoudite", en: 'Law firm in Saudi Arabia' },
    role: { fr: 'Projet freelance, à mon compte : conception et développement du site.', en: 'Freelance project, on my own account: designed and built the website.' },
    stack: ['Next.js', 'React', 'next/image', 'Vercel'],
    context: {
      fr: "Un cabinet d'avocats veut inspirer confiance, présenter clairement ses domaines d'intervention et son équipe, et répondre aux questions fréquentes, le tout en arabe.",
      en: 'A law firm wants to inspire trust, clearly present its practice areas and its team, and answer common questions, all in Arabic.',
    },
    built: {
      fr: [
        '6 services juridiques : conseil, création de sociétés, boutiques en ligne, droit du travail, contentieux, recouvrement',
        'Section des réalisations du cabinet',
        "Présentation de l'équipe",
        'FAQ',
        'Carte Google Maps, WhatsApp et réseaux sociaux',
      ],
      en: [
        '6 legal services: advice, company formation, online stores, employment law, litigation, debt recovery',
        "The firm's achievements section",
        'Team presentation',
        'FAQ',
        'Google Maps, WhatsApp and social links',
      ],
    },
    challenges: [
      {
        title: { fr: 'Un site entièrement en arabe, de droite à gauche', en: 'A fully Arabic, right-to-left site' },
        text: {
          fr: "La page est déclarée en arabe (lang=\"ar\", dir=\"rtl\") : toute la mise en page se lit de droite à gauche, du menu au pied de page. La police Cairo a été choisie pour sa bonne lisibilité en arabe, aux petites comme aux grandes tailles.",
          en: 'The page is declared as Arabic (lang="ar", dir="rtl"): the whole layout reads right to left, from the menu to the footer. The Cairo font was chosen for how readable it is in Arabic, at small and large sizes.',
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
    ],
  },
  {
    slug: 'smiley-dentist',
    name: 'Smiley Dentist',
    featured: false,
    draft: true,
    year: '2024',
    sector: 'sante',
    url: 'https://smiley-dentist.vercel.app/',
    repos: [],
    type: { fr: 'Site vitrine · Next.js · Arabe (RTL)', en: 'Showcase website · Next.js · Arabic (RTL)' },
    summary: {
      fr: "Site en arabe d'un cabinet dentaire en Arabie saoudite : soins, conseils, équipe, avis de patients et FAQ, avec des animations au défilement.",
      en: 'Arabic website for a dental practice in Saudi Arabia: treatments, advice, team, patient reviews and FAQ, with scroll animations.',
    },
    client: { fr: 'Cabinet dentaire en Arabie saoudite', en: 'Dental practice in Saudi Arabia' },
    role: { fr: 'Projet freelance, à mon compte : conception et développement du site.', en: 'Freelance project, on my own account: designed and built the website.' },
    stack: ['Next.js 14', 'React', 'CSS Modules', 'Tailwind CSS', 'GSAP', 'ScrollTrigger', 'next/image', 'Vercel'],
    context: {
      fr: "Un cabinet dentaire veut présenter ses soins et son équipe en arabe, rassurer les futurs patients avec des conseils et des avis, et répondre à leurs questions avant le premier rendez-vous.",
      en: 'A dental practice wants to present its treatments and team in Arabic, reassure future patients with advice and reviews, and answer their questions before the first appointment.',
    },
    built: {
      fr: [
        '6 soins : couronnes en céramique, traitements de canal, contrôles réguliers, obturations blanches, soins dentaires, implants',
        'Section de conseils pour la santé bucco-dentaire',
        "Présentation de l'équipe",
        'Carrousel des avis de patients',
        'FAQ de 5 questions en accordéon',
        'Coordonnées, numéros cliquables et carte Google Maps',
      ],
      en: [
        '6 treatments: ceramic crowns, root canals, check-ups, white fillings, dental care, implants',
        'Oral health advice section',
        'Team presentation',
        'Patient review carousel',
        '5-question FAQ in an accordion',
        'Contact details, tap-to-call numbers and Google Maps',
      ],
    },
    challenges: [
      {
        title: { fr: 'Un site entièrement en arabe, de droite à gauche', en: 'A fully Arabic, right-to-left site' },
        text: {
          fr: 'Le document est déclaré en arabe (lang="ar", dir="rtl") : toute la mise en page se lit de droite à gauche. Deux polices arabes, Cairo et Expo Arabic, sont hébergées avec le site.',
          en: 'The document is declared as Arabic (lang="ar", dir="rtl"): the whole layout reads right to left. Two Arabic fonts, Cairo and Expo Arabic, are hosted with the site.',
        },
      },
      {
        title: { fr: 'Des animations au défilement', en: 'Scroll animations' },
        text: {
          fr: "Les titres et les sections (soins, conseils, équipe, avis) apparaissent au fil du défilement grâce à GSAP et ScrollTrigger, et les photos passent par next/image pour être servies à la bonne taille.",
          en: 'Headings and sections (treatments, advice, team, reviews) appear as you scroll thanks to GSAP and ScrollTrigger, and photos go through next/image to be served at the right size.',
        },
      },
    ],
    result: { fr: 'Site en ligne.', en: 'Site live.' },
    cover: shot('smiley-dentist', 'accueil', 'desktop', 'Accueil', 'Home page'),
    gallery: [
      shot('smiley-dentist', 'accueil', 'desktop', 'Accueil', 'Home page'),
      shot('smiley-dentist', 'accueil-mobile', 'mobile', 'Accueil sur mobile', 'Home page on mobile'),
      shot('smiley-dentist', 'soins', 'desktop', 'Les soins', 'Treatments'),
      shot('smiley-dentist', 'equipe', 'desktop', "L'équipe", 'The team'),
      shot('smiley-dentist', 'faq', 'desktop', 'FAQ', 'FAQ'),
    ],
  },
  {
    slug: 'gourmet-grove',
    name: 'Gourmet & Grove',
    featured: false,
    draft: true,
    year: '2024',
    sector: 'restauration',
    url: 'https://gourmet-grove.vercel.app/',
    repos: [],
    type: { fr: 'Site vitrine · Next.js', en: 'Showcase website · Next.js' },
    summary: {
      fr: "Site d'une brasserie parisienne à Rabat : ambiance en vidéo, carte en ligne, galerie et réservation par téléphone ou e-mail.",
      en: 'Website for a Parisian-style brasserie in Rabat: video atmosphere, online menu, gallery and booking by phone or email.',
    },
    client: { fr: 'Brasserie à Rabat (Maroc)', en: 'Brasserie in Rabat (Morocco)' },
    role: { fr: 'Projet freelance, à mon compte : conception et développement du site.', en: 'Freelance project, on my own account: designed and built the website.' },
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
    slug: 'tirryaq',
    name: 'Tirryaq',
    featured: false,
    draft: true,
    year: '2025',
    sector: 'livres',
    url: 'https://www.tirryaq.com/',
    repos: [],
    type: { fr: 'UI/UX design · Freelance', en: 'UI/UX design · Freelance' },
    summary: {
      fr: "Design UI/UX d'une librairie en ligne en arabe, conçu dans Figma : accueil, fiche produit et tunnel de commande en 3 étapes.",
      en: 'UI/UX design for an Arabic online bookstore, made in Figma: home page, product page and a 3-step checkout.',
    },
    client: { fr: 'Librairie en ligne en arabe', en: 'Arabic online bookstore' },
    role: {
      fr: "Projet freelance : UI/UX design de tout le site. Je n'ai pas réalisé le développement.",
      en: "Freelance project: UI/UX design of the whole site. I didn't build it.",
    },
    stack: ['Figma', 'UI design', 'UX design'],
    context: {
      fr: "Une librairie en ligne en arabe voulait une interface claire pour parcourir un grand catalogue, comprendre un livre avant de l'acheter et commander sans se perdre, le tout de droite à gauche.",
      en: 'An Arabic online bookstore wanted a clear interface to browse a large catalogue, understand a book before buying it and check out without getting lost, all right to left.',
    },
    built: {
      fr: [
        "En-tête : recherche, catégories, choix de la langue et de la devise, panier et favoris",
        'Accueil : bannière, rubriques populaires en vignettes rondes et carrousels de produits',
        'Fiche produit : prix et stock, quantité, « Ajouter au panier » et « Acheter maintenant », fiche technique, produits liés et avis',
        'Tunnel de commande en 3 étapes : panier, adresse de livraison, paiement',
        "Toute l'interface pensée de droite à gauche (RTL)",
      ],
      en: [
        'Header: search, categories, language and currency switch, cart and wishlist',
        'Home page: banner, popular categories as round thumbnails and product carousels',
        'Product page: price and stock, quantity, “Add to cart” and “Buy now”, specs, related products and reviews',
        '3-step checkout: cart, delivery address, payment',
        'The whole interface designed right to left (RTL)',
      ],
    },
    challenges: [
      {
        title: { fr: 'Guider la commande pas à pas', en: 'Guiding checkout step by step' },
        text: {
          fr: "La commande est découpée en 3 étapes (panier, adresse, paiement), avec un indicateur de progression en haut de page et un récapitulatif de la commande qui reste à côté du formulaire : on sait toujours où on en est et combien on va payer.",
          en: 'Checkout is split into 3 steps (cart, address, payment), with a progress indicator at the top and an order summary that stays next to the form: you always know where you are and how much you will pay.',
        },
      },
      {
        title: { fr: 'Une fiche produit qui répond avant l’achat', en: 'A product page that answers before you buy' },
        text: {
          fr: "Le prix, le stock et les boutons d'achat sont regroupés dans un même encadré. Les informations qu'un lecteur cherche (pages, langue, ISBN, éditeur, date de publication) sont alignées en icônes sous la description, et les avis sont en bas de page.",
          en: 'Price, stock and buy buttons are grouped in one box. The details a reader looks for (pages, language, ISBN, publisher, publication date) sit as icons under the description, and reviews are at the bottom of the page.',
        },
      },
    ],
    result: {
      fr: 'Maquettes livrées au client. Le site en ligne a été développé séparément (WordPress, WooCommerce) et ne reprend pas toutes les maquettes.',
      en: "Mockups delivered to the client. The live site was built separately (WordPress, WooCommerce) and doesn't follow every mockup.",
    },
    cover: shot('tirryaq', 'maquette-accueil', 'desktop', 'Maquette · Accueil', 'Mockup · Home page'),
    gallery: [
      shot('tirryaq', 'maquette-accueil', 'desktop', 'Maquette · Accueil', 'Mockup · Home page'),
      shot('tirryaq', 'maquette-produit', 'desktop', 'Maquette · Fiche produit', 'Mockup · Product page'),
      shot('tirryaq', 'maquette-panier', 'desktop', 'Maquette · Commande, étape 1 (panier)', 'Mockup · Checkout, step 1 (cart)'),
      shot('tirryaq', 'maquette-paiement', 'desktop', 'Maquette · Commande, étape 3 (paiement)', 'Mockup · Checkout, step 3 (payment)'),
      shot('tirryaq', 'accueil', 'desktop', 'Site en ligne (développé séparément)', 'Live site (built separately)'),
      shot('tirryaq', 'accueil-mobile', 'mobile', 'Site en ligne sur mobile', 'Live site on mobile'),
    ],
  },
  {
    slug: 'stretched-web',
    name: 'Stretched Web',
    featured: false,
    draft: true,
    year: '2023',
    sector: null,
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
          fr: 'Chaque réalisation a sa propre URL (par exemple /work/crib), construite sur le même gabarit : ajouter un projet ne demande pas de créer une nouvelle page à la main.',
          en: 'Every project has its own URL (for example /work/crib), built on the same template: adding a project doesn’t mean hand-building a new page.',
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
  {
    slug: 'pristine-dental',
    name: 'Pristine Dental',
    featured: false,
    draft: true,
    year: '2025',
    sector: null, // learning project, not a client
    url: 'https://pristinedentalcenter.vercel.app/',
    repos: [],
    type: { fr: 'Projet personnel · Apprentissage', en: 'Personal project · Learning' },
    summary: {
      fr: "Site vitrine de cabinet dentaire réalisé pour m'exercer : une longue page de contenu (soins, avis, Instagram, FAQ) rendue lisible sur tous les écrans.",
      en: 'Dental practice website built for practice: a long content page (treatments, reviews, Instagram, FAQ) made readable on every screen.',
    },
    client: null,
    role: { fr: "Conception et développement, en projet personnel d'apprentissage.", en: 'Designed and built as a personal learning project.' },
    stack: ['Next.js 14', 'React', 'Tailwind CSS', 'Lucide', 'Vercel'],
    context: {
      fr: "Projet fait pour pratiquer l'UI et le responsive avec Next.js (App Router) et Tailwind CSS, sur un cas concret : le site vitrine d'un cabinet dentaire, avec beaucoup de contenu à organiser et à garder lisible du mobile au grand écran.",
      en: 'A project to practise UI and responsive design with Next.js (App Router) and Tailwind CSS, on a concrete case: a dental practice website, with a lot of content to organise and keep readable from phone to large screen.',
    },
    built: {
      fr: [
        'Une page unique en sections : présentation, 6 soins, avis, Instagram avec vidéos, conseils et FAQ',
        'FAQ de 7 questions en accordéon',
        'Composants React séparés par section, mis en forme avec Tailwind CSS',
        'Icônes Lucide',
        'Mise en page responsive, du mobile au grand écran',
      ],
      en: [
        'A single page in sections: introduction, 6 treatments, reviews, Instagram with videos, advice and FAQ',
        '7-question FAQ in an accordion',
        'One React component per section, styled with Tailwind CSS',
        'Lucide icons',
        'Responsive layout, from phone to large screen',
      ],
    },
    challenges: [
      {
        title: { fr: 'Une page longue qui reste lisible sur mobile', en: 'A long page that stays readable on mobile' },
        text: {
          fr: "Tout tient sur une seule page. Les réponses de la FAQ sont repliées en accordéon, et la mise en page passe en une colonne sur mobile sans aucun défilement horizontal à 375 px.",
          en: 'Everything sits on one page. FAQ answers are collapsed in an accordion, and the layout switches to a single column on mobile with no horizontal scrolling at 375 px.',
        },
      },
      {
        title: { fr: 'Les métadonnées avec Next.js', en: 'Metadata with Next.js' },
        text: {
          fr: "Le titre et la description de la page sont déclarés avec l'API metadata de l'App Router de Next.js, plutôt qu'à la main dans le HTML.",
          en: "The page title and description are declared with the Next.js App Router metadata API, rather than by hand in the HTML.",
        },
      },
    ],
    result: { fr: "Projet d'apprentissage, en ligne sur Vercel.", en: 'Learning project, live on Vercel.' },
    cover: shot('pristine-dental', 'accueil', 'desktop', 'Accueil', 'Home page'),
    gallery: [
      shot('pristine-dental', 'accueil', 'desktop', 'Accueil', 'Home page'),
      shot('pristine-dental', 'accueil-mobile', 'mobile', 'Accueil sur mobile', 'Home page on mobile'),
      shot('pristine-dental', 'soins', 'desktop', 'Les soins', 'Treatments'),
    ],
  },
  {
    slug: 'tl-global',
    name: 'TL Global',
    featured: false,
    draft: true,
    year: '2025',
    sector: null, // learning project, not a client
    url: 'https://toufaiq.vercel.app/',
    repos: [],
    type: { fr: 'Projet personnel · Apprentissage', en: 'Personal project · Learning' },
    summary: {
      fr: "Site vitrine d'entreprise d'aménagement intérieur réalisé pour m'exercer : réalisations filtrables et animations écrites entièrement en CSS.",
      en: 'Interior design company website built for practice: filterable projects and animations written entirely in CSS.',
    },
    client: null,
    role: { fr: "Conception et développement, en projet personnel d'apprentissage.", en: 'Designed and built as a personal learning project.' },
    stack: ['React 19', 'Create React App', 'CSS', 'Vercel'],
    context: {
      fr: "Projet fait pour pratiquer l'UI et le responsive avec React, sans framework CSS ni bibliothèque d'animation : le site vitrine d'une entreprise d'aménagement intérieur, avec ses services et une galerie de réalisations.",
      en: 'A project to practise UI and responsive design with React, with no CSS framework or animation library: an interior design company website, with its services and a gallery of projects.',
    },
    built: {
      fr: [
        '6 services : aménagement intérieur, rénovation, design, mobilier sur mesure, finitions, gestion de projet',
        "Présentation de l'entreprise et de l'équipe",
        '6 réalisations filtrables par catégorie (résidentiel, commercial, rénovation)',
        'Animations en CSS pur (@keyframes)',
        'Mise en page responsive',
      ],
      en: [
        '6 services: interior fit-out, renovation, design, custom furniture, finishes, project management',
        'Company and team presentation',
        '6 projects filterable by category (residential, commercial, renovation)',
        'Pure CSS animations (@keyframes)',
        'Responsive layout',
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
    ],
    result: { fr: "Projet d'apprentissage, en ligne sur Vercel.", en: 'Learning project, live on Vercel.' },
    cover: shot('tl-global', 'accueil', 'desktop', 'Accueil', 'Home page'),
    gallery: [
      shot('tl-global', 'accueil', 'desktop', 'Accueil', 'Home page'),
      shot('tl-global', 'accueil-mobile', 'mobile', 'Accueil sur mobile', 'Home page on mobile'),
      shot('tl-global', 'realisations', 'desktop', 'Réalisations filtrables', 'Filterable projects'),
    ],
  },
];
