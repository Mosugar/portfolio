# Revue des études de cas

Ce fichier liste, projet par projet, ce que Claude a **déduit** en rédigeant `src/data/projects.js`, et ce que tu dois vérifier.
Quand un projet est validé, passe son `draft` à `false` et supprime sa section ici.

Règle suivie : aucun chiffre, statistique, résultat business ou témoignage inventé. Les résultats se limitent à « Site en ligne » quand rien d'autre n'est vérifiable.

Sources utilisées : les sites en ligne (pages, sections, balises, langue, responsive à 375 px), tes projets Behance, et le code quand il était accessible (repos `hiba`, `toufaiq`, `WARDD-V3`, `Stretched_web`, `STRETCHEDLAST`, `nexly`, `dentist`).

## Statut de chaque projet (confirmé par toi le 24/11/2026)

| Statut | Projets | Dans le portfolio |
|---|---|---|
| Mes entités Wardd (cofondateur) | **Wardd Studio** : l'agence de marketing 360° (ancien warddstudio.com, hors ligne, visible sur Behance). **Wardd Music** : le studio de musique (warddstudio.ma, repo `WARDD-V3`) | Pas de champ client. Secteurs « Marketing & communication » et « Musique » |
| Réalisé avec Wardd Studios | ElJamai Couture | « Réalisé avec Wardd Studios » dans le rôle |
| Clients freelance | Repère RH, CSBA Law Firm, Smiley Dentist, Gourmet & Grove, Tirryaq (UI/UX design) | « Projet freelance » dans le rôle, champ « Client » affiché |
| Employeur | Stretched Web (poste de Développeur Frontend) | Pas de secteur |
| Projets personnels | Recur, Nexly | « Projet personnel », pas de secteur |
| Projets d'apprentissage | Pristine Dental, TL Global | Type « Projet personnel · Apprentissage », pas de champ client, aucun formulaire ni prise de rendez-vous présentés, pas de secteur |

Chiffres calculés : **13 projets réalisés**, **8 secteurs couverts** (formation et recrutement, marketing et communication, mode, musique, juridique, santé, restauration, livres).

---

## ⚠️ À savoir avant tout

- **Ton parcours ne correspond plus aux études de cas.** Dans `translations.js`, l'entrée Wardd Studios dit « frontend/backend et SEO pour des clients dans la mode, le médical et le juridique », et « À propos » parle de clients « dans la mode, la musique, le médical et le juridique ». Or CSBA (juridique) et Smiley (médical) sont maintenant des projets **freelance**. Ton entrée « Développeur Full-Stack Freelance » couvre mai – nov. 2023, alors que ces projets sont datés de 2024. Ce sont tes textes : je n'y ai pas touché. À corriger de ton côté, ou dis-moi comment les reformuler.
- **Smiley Dentist (client) : le formulaire « استشرنا » n'envoie rien.** Dans le code (`components/Contact.jsx`, repo `dentist`) comme en ligne : `<form action="">` sans gestionnaire d'envoi, et les champs nom et téléphone n'ont pas d'attribut `name`. Un envoi recharge simplement la page. Vérifié sans soumettre le formulaire. Le cabinet perd peut-être des demandes. Le portfolio ne présente pas ce formulaire.
- **CSBA Law Firm (client) : le formulaire de rendez-vous n'envoie rien non plus**, avec le même code. Le portfolio ne le présente plus.
- **Formulaires de Pristine Dental et TL Global** : ils n'envoient rien non plus (`alert` / délai simulé). Ce sont des projets d'apprentissage, et le portfolio n'en parle pas.
- **Pristine Dental (projet d'apprentissage)** : le site en ligne affiche un vrai nom de praticienne (« Dr. Hiba Guelida »), un numéro de téléphone et le titre « Dentiste Kenitra ». Un patient pourrait le prendre pour le site officiel d'un cabinet. Faut-il ajouter une mention « projet de démonstration » ou retirer ces informations ? Le site a aussi des erreurs React d'hydratation dans la console (#418, #423, #425).
- **Stretched Web** : la page `/work` de l'agence présente **Lawyer Sulaiman (CSBA), Smiley et Gourmet Grove** parmi ses réalisations, alors que ce sont tes projets freelance. Un recruteur qui visite les deux sites pourrait s'interroger. L'exemple `/work/smiley` a été retiré de l'étude de cas Stretched Web.

---

## Projets non brouillons (textes à toi, déjà validés)

Seuls les **résumés en 1 phrase** (`summary`) et les **types** (`type`) ont été écrits par Claude. Les traductions anglaises de Repère RH aussi.

- **Repère RH** : vérifier la traduction anglaise. « Contexte et besoin » a été reformulé à partir de ton résumé.
- **ElJamai Couture** : rôle « Réalisé avec Wardd Studios, l'agence de marketing 360° que j'ai cofondée, avec Ali Yara ». Les captures viennent de ton projet Behance (le site est hors ligne). On y voit aussi une version arabe, une connexion Google / Apple et des filtres taille / prix : à ajouter à « Ce que j'ai construit » si c'est toi qui les as faits.
- **Recur** : `recur-api` est ajouté en 2ᵉ bouton « Code », mais l'étude de cas dit « 100 % hors ligne, sans compte ». À expliquer en une phrase (à quoi sert l'API ?) ou à retirer.

---

## Wardd Studio · l'agence (projet phare, brouillon)

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Ce que c'est | L'ancien site de l'agence de marketing 360° (warddstudio.com) | Ta consigne. Site hors ligne : lien « Voir sur Behance », pas de bouton « Voir le site » |
| Année | 2024 – 2025 | **Supposée** : ta période à l'agence. Le projet Behance est publié le 17/06/2025 |
| Rôle | Cofondateur & Responsable Développement | Ta consigne. **Qu'as-tu fait sur ce site précisément** (design, développement, tout) ? |
| Stack | React, HTML/CSS, SQL, Figma | Outils déclarés sur ton projet Behance. Le code n'est dans aucun de tes repos (`warddvisuals` est un modèle de tableau de bord admin, `warddprivate` est vide) |
| Contexte | Présenter les services de l'agence aux entreprises (clips, événements, design, développement web et mobile, coaching et contenu réseaux sociaux) et faire réserver un appel | Ta liste de services + le bouton « Book a call » visible sur la capture |
| Fonctionnalités | Accueil vidéo, présentation, carrousel des réalisations, démarche en 6 étapes, équipe et valeurs, logos des références, témoignages | Lu sur la capture Behance (une seule image pleine page, découpée en 5 vues) |
| Défis techniques | **Aucun** (section masquée) | Sans le code, impossible de vérifier un défi technique. Donne-m'en 1 ou 2 si tu veux cette section |
| Non repris | « +300 stories », « 100+ projets lancés » | Chiffres affichés par l'agence sur son site, pas un résultat du projet |
| Résultat | Le site a accompagné l'activité de l'agence ; hors ligne le temps de construire le nouveau, visible sur Behance | Ta consigne |

## Wardd Music · le studio de musique (brouillon)

Contenu repris de l'ancienne étude de cas « Wardd Studio » (qui décrivait warddstudio.ma, déjà validée), plus les deux défis musique vérifiés dans le code.

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Ce que c'est | warddstudio.ma, le site du studio de musique de Wardd (enregistrement, mixage, mastering, production) | Ta consigne. Bouton « Code » vers `WARDD-V3` (public, vérifié sans secret) |
| Type, client, rôle | « Studio de musique Wardd · Next.js », pas de champ client, « Cofondateur, conception et développement du site, seul » | Ta consigne + la précision « seul » reprise de l'ancien texte validé |
| Défis 1 et 2 | Bilingue FR/AR (RTL) et assistant IA | Textes déjà validés, inchangés |
| Défis 3 et 4 | Un seul lecteur Spotify chargé (données récupérées côté serveur) ; ISR toutes les 12 h avec délai max et repli | Vérifiés dans le code (`lib/spotify.js`, `lib/youtube.js`, `pages/index.jsx`) |
| Résultat | Mis en ligne en novembre 2026, environ 6 clients la première semaine | Ta donnée, déjà validée |
| **Brouillon ?** | Le projet est en `draft: true` à cause des défis 3 et 4 | En production, un brouillon n'affiche que le résumé, la stack et les captures. **Si tu valides les défis 3 et 4, passe `draft` à `false`** pour réafficher tout le contenu (assistant IA, RTL…) |
| Mise en avant | Wardd Music est dans « Autres projets » | Wardd Studio (projet phare) n'a plus de défis techniques ; Wardd Music est désormais le projet Wardd le plus riche. Les échanger ? |

## Nexly (projet phare, brouillon)

Repo `Mosugar/nexly` **privé** : pas de bouton « Code ». Le code a été lu pour établir la stack et les défis, sans rien en publier.

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Année, client, rôle | 2026 · projet personnel · conception et développement complet | Ta consigne. Repo créé le 22/11/2026 |
| Stack | Next.js 15, React 19, TypeScript, Tailwind CSS 4, Supabase (Postgres, Realtime), WebRTC, TensorFlow.js, nsfwjs, next-intl, Cloudflare Workers, OpenNext | `package.json` et README |
| Contexte | Omegle « avec la sécurité au centre » | Déduit de la page d'accueil et de la page Sécurité. Pas de mention de la fermeture d'Omegle |
| Défi 1 | File d'attente Postgres, `FOR UPDATE SKIP LOCKED`, présence toutes les ~1 s, seuls les clients vus dans les 6 s sont associés, priorité intérêts > langue > pays, pas de ré-association immédiate | Vérifié (`match_user`, migration `round2`) |
| Défi 2 | WebRTC pair-à-pair, signalisation par canal Supabase Realtime privé par salle, identifiants TURN temporaires via une route serveur | Vérifié (`engine.ts`, `api/turn`). Relais TURN : **oui, actif en production via Cloudflare** (ta réponse) |
| Défi 3 | Détection de nudité sur l'appareil de celui qui regarde, modèle téléchargé au lancement d'un chat vidéo. Ban auto seulement après plusieurs personnes différentes, le détecteur ne bannit jamais seul, limite de signalements par heure | Vérifié (`nsfw.ts`, `submit_report`) |
| Défi 4 | Déploiement OpenNext sur Workers, secrets dans Wrangler et jamais dans `.env` | Vérifié (README, `wrangler.jsonc`) |
| Résultat | « En ligne depuis novembre 2026, en développement actif. » + badge « En cours » | Ta consigne. Domaine personnalisé : **pas pour l'instant** (`workers.dev`) |
| Captures | Accueil (desktop et mobile), fonctionnalités, page Sécurité, version arabe | Uniquement les pages publiques : aucun chat lancé, ni caméra ni vérification de l'âge |

## CSBA Law Firm (client freelance, brouillon)

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Rôle | « Projet freelance, à mon compte : conception et développement du site » | Ta consigne |
| Année | 2024 | **Supposée** (pas de code accessible). Ton entrée freelance du parcours couvre 2023 |
| Client | Cabinet d'avocats en Arabie saoudite | Vrai client (ta confirmation) |
| Stack | Next.js, React, next/image, Vercel | Détectée sur le site |
| Défi 1 | Arabe RTL (`lang="ar"`, `dir="rtl"`), police Cairo | Vérifié. « Choisie pour sa lisibilité » est une supposition |
| Défi 2 | Images via next/image | Vérifié |
| Défi 3 | Menu burger, aucun débordement à 375 px | Vérifié |
| Non repris | Les chiffres du site (12 ans, 3 300 actes, 500 affaires…) | Chiffres du cabinet, pas un résultat du projet |
| Non présenté | Le formulaire de rendez-vous | **Il n'envoie rien** (voir en haut) |

## Smiley Dentist (client freelance, brouillon)

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Rôle | « Projet freelance, à mon compte : conception et développement du site » | Ta consigne |
| Année | 2024 | **Supposée** : repo `dentist` créé le 21/05/2024 |
| Client | Cabinet dentaire en Arabie saoudite | Pays déduit des numéros en +966 ; ville non indiquée |
| Stack | Next.js 14 (Pages Router), React, CSS Modules, Tailwind CSS, GSAP, ScrollTrigger, next/image, Vercel | `package.json` et code. Tailwind est chargé mais peu utilisé |
| Défi 1 | Arabe RTL, polices Cairo et Expo Arabic hébergées avec le site | Vérifié (`_document.js`, dossier `fonts`) |
| Défi 2 | Animations au défilement GSAP + ScrollTrigger, images via next/image | Vérifié (composants `home/*`) |
| Non présenté | Le formulaire de consultation | **Il n'envoie rien** (voir en haut) |

## Gourmet & Grove (client freelance, brouillon)

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Rôle | « Projet freelance, à mon compte : conception et développement du site » | Ta consigne |
| Année | 2024 | **Supposée** (pas de code accessible) |
| Client | Brasserie à Rabat | Vrai client (ta confirmation) |
| Stack | Next.js, React, next/image, Vercel | Détectée sur le site |
| Défi 1 | Vidéo plein écran + écran « Bienvenue » pendant le chargement | L'écran existe. « Pour ne jamais voir une page à moitié chargée » est une supposition |
| Défi 2 | Carte par catégories, menu burger, aucun débordement à 375 px | Vérifié |
| Autre | Le site est déclaré `lang="en"` alors que le contenu est en français | **À corriger sur le site du client** (`lang="fr"`) |

## Tirryaq (client freelance, UI/UX design, brouillon)

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Rôle | « Projet freelance : UI/UX design de tout le site. Je n'ai pas réalisé le développement. » | Ta consigne. Aucun repo Tirryaq sur ton GitHub, et le site est un WordPress + WooCommerce (thème eStore) : rien n'indique un développement de ta part |
| Année | 2025 | **Supposée** : projet Behance publié le 17/06/2025 |
| Secteur | Livres | Le site se présente comme une librairie (« كتب 100% أصلية », catégories de livres arabes, anglais, français). Il vend aussi du high-tech (téléphones, ordinateurs, jeux) : « Livres » te convient ? |
| Client | Librairie en ligne en arabe | Déduit du site. Devises dirham marocain et euro sur le site : pays non indiqué |
| Stack | Figma, UI design, UX design | Outil déclaré sur Behance |
| Démarche | En-tête (recherche, langue, devise), accueil en rubriques et carrousels, fiche produit, tunnel de commande en 3 étapes, interface RTL | Lu sur les maquettes Behance |
| Défis | Guider la commande (étapes + récapitulatif), fiche produit qui répond avant l'achat | Choix visibles sur les maquettes ; l'intention est déduite |
| Résultat | Maquettes livrées ; le site en ligne a été développé séparément et ne reprend pas toutes les maquettes | **Constaté** : l'en-tête et la bannière en ligne diffèrent des maquettes. Les captures en ligne sont légendées « développé séparément » |

## Pristine Dental (projet d'apprentissage, brouillon)

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Type | Projet personnel · Apprentissage | Ta consigne. Pas de champ client, pas de secteur |
| Année | 2025 | Repo `hiba` créé le 21/08/2025 |
| Contexte | Projet fait pour pratiquer l'UI et le responsive avec Next.js (App Router) et Tailwind CSS | Ta consigne |
| Retiré | WhatsApp pré-rempli, prise de rendez-vous, SEO local « dentiste Kénitra », carte, capture du formulaire | Rien qui fasse croire à un vrai cabinet |
| Défis | Page longue lisible sur mobile (FAQ en accordéon) ; métadonnées avec l'API metadata de l'App Router | Vérifiés |
| Résultat | « Projet d'apprentissage, en ligne sur Vercel. » | — |

## TL Global (projet d'apprentissage, brouillon)

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Type | Projet personnel · Apprentissage | Ta consigne. Pas de champ client, pas de secteur |
| Année | 2025 | Repo `toufaiq` créé le 18/07/2025 |
| Contexte | Projet fait pour pratiquer l'UI et le responsive avec React, sans framework CSS ni bibliothèque d'animation | Ta consigne + `package.json` |
| Retiré | Bouton WhatsApp, carte, contact, capture du formulaire | — |
| Défis | Filtre des réalisations par catégorie (état React) ; animations 100 % CSS | Vérifiés |
| Résultat | « Projet d'apprentissage, en ligne sur Vercel. » | — |

## Stretched Web (employeur, brouillon)

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Année | 2023 | Ton poste (juin – août 2023). **Mais** le site affiche © 2024 et les repos `Stretched_web` / `STRETCHEDLAST` datent d'avril et juin 2024 : le site en ligne est-il celui de 2023 ? |
| Rôle | Développeur Frontend (juin – août 2023) | Ta consigne |
| Stack | Next.js 14, React, GSAP, ScrollTrigger, Tailwind CSS, Vercel | GSAP et ScrollTrigger vérifiés sur le site en ligne |
| Défis | Animations au scroll avec GSAP ScrollTrigger ; une page par réalisation sur le même gabarit (exemple `/work/crib`) | Vérifiés (« même gabarit » déduit de la structure) |
| Question | Qu'as-tu fait exactement : tout le site, ou certaines pages / animations ? | — |
