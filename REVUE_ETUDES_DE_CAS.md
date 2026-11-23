# Revue des études de cas

Ce fichier liste, projet par projet, ce que Claude a **déduit** en rédigeant `src/data/projects.js`, et ce que tu dois vérifier.
Quand un projet est validé, passe son `draft` à `false` et supprime sa section ici.

Règle suivie : aucun chiffre, statistique, résultat business ou témoignage inventé. Les résultats se limitent à « Site en ligne » quand rien d'autre n'est vérifiable.

Sources utilisées : le site en ligne (pages, sections, balises, langue, responsive à 375 px), et le code quand il était accessible (repos `hiba`, `toufaiq`, `WARDD-V3`, `Stretched_web`, `STRETCHEDLAST`).

---

## ⚠️ À savoir avant tout

- **Formulaires qui n'envoient rien** : sur **Pristine Dental** (`components/Contact.jsx` affiche juste une `alert`) et **TL Global** (`Contact.jsx` simule un délai de 2 s puis affiche « succès »), les messages des visiteurs ne partent nulle part. Les clients perdent peut-être des demandes. À ta demande, le portfolio ne parle pas de ces formulaires du tout (retirés des textes de ces deux projets).
- **Pristine Dental** : erreurs React d'hydratation dans la console du site en ligne (#418, #423, #425).
- **Stretched Web** : la page `/work` de l'agence présente **Lawyer Sulaiman (CSBA), Smiley, Gourmet Grove et Wardd Studio** comme ses propres réalisations. Si CSBA et Gourmet & Grove ont été faits pendant ton poste chez Stretched Web, ton rôle sur ces projets est peut-être différent de « Conception et développement du site ».

---

## Projets non brouillons (textes à toi, déjà validés)

Seuls les **résumés en 1 phrase** (`summary`) et les **types** (`type`) ont été écrits par Claude. Les traductions anglaises de Repère RH aussi.

- **Repère RH** : vérifier la traduction anglaise. « Contexte et besoin » a été reformulé à partir de ton résumé.
- **Wardd Studio** : stack corrigée en « Spotify oEmbed » (le code n'utilise pas l'API Web). Le défi a été découpé en deux (bilingue RTL / assistant IA), texte inchangé.
- **Recur** : `recur-api` est ajouté en 2ᵉ bouton « Code », mais l'étude de cas dit « 100 % hors ligne, sans compte ». À expliquer en une phrase (à quoi sert l'API ?) ou à retirer.
- **ElJamai Couture** : les captures viennent de ton projet Behance (le site est hors ligne). On y voit aussi une version arabe, une connexion Google / Apple et des filtres taille / prix : à ajouter à « Ce que j'ai construit » si c'est toi qui les as faits.

---

## Nexly (projet phare, brouillon)

Repo `Mosugar/nexly` **privé** : pas de bouton « Code ». Le code a été lu pour établir la stack et les défis, sans rien en publier.

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Année, client, rôle | 2026 · projet personnel · conception et développement complet | Ta consigne. Repo créé le 22/11/2026 |
| Stack | Next.js 15, React 19, TypeScript, Tailwind CSS 4, Supabase (Postgres, Realtime), WebRTC, TensorFlow.js, nsfwjs, next-intl, Cloudflare Workers, OpenNext | `package.json` et README |
| Contexte | Omegle « avec la sécurité au centre » | Déduit de la page d'accueil et de la page Sécurité. Pas de mention de la fermeture d'Omegle |
| Défi 1 | File d'attente Postgres, `FOR UPDATE SKIP LOCKED`, présence toutes les ~1 s, seuls les clients vus dans les 6 s sont associés, priorité intérêts > langue > pays, pas de ré-association immédiate | Vérifié (`match_user`, migration `round2`) |
| Défi 2 | WebRTC pair-à-pair, signalisation par canal Supabase Realtime privé par salle, identifiants TURN temporaires via une route serveur | Vérifié (`engine.ts`, `api/turn`). Relais TURN : **oui, actif en production via Cloudflare** (ta réponse), mentionné dans l'étude de cas |
| Défi 3 | Détection de nudité sur l'appareil de celui qui regarde, modèle téléchargé au lancement d'un chat vidéo. Ban auto seulement après plusieurs personnes différentes, le détecteur ne bannit jamais seul, limite de signalements par heure | Vérifié (`nsfw.ts`, `submit_report`) |
| Défi 4 | Déploiement OpenNext sur Workers, secrets dans Wrangler et jamais dans `.env` | Vérifié (README, `wrangler.jsonc`) |
| Résultat | « En ligne depuis novembre 2026, en développement actif. » + badge « En cours » sur la carte | Ta consigne. Aucun chiffre d'utilisation cité. Domaine personnalisé : **pas pour l'instant** (`workers.dev`) |
| Captures | Accueil (desktop et mobile), fonctionnalités, page Sécurité, version arabe | Uniquement les pages publiques : aucun chat lancé, ni caméra ni vérification de l'âge |

## Pristine Dental (autres projets, brouillon)

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Année | 2025 | Repo `hiba` créé le 21/08/2025 |
| Client | Cabinet dentaire à Kénitra | Site en ligne. **Vrai client ou démo ? Freelance ou Wardd Studios ?** |
| Rôle | Conception et développement du site | Valeur par défaut demandée |
| Stack | Next.js 14, React, Tailwind CSS, Lucide, Vercel | `package.json` |
| Défi 1 | WhatsApp pré-rempli, liens `tel:`, CTA répétés | Vérifié dans le code et le site |
| Défi 2 | SEO local via l'API metadata de Next.js | Vérifié (title/description). Pas d'image Open Graph ni de JSON-LD sur le site |
| Défi 3 | FAQ en accordéon, aucun débordement à 375 px | Vérifié |
| Résultat | « Site en ligne. » | — |

## TL Global (brouillon)

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Année | 2025 | Repo `toufaiq` créé le 18/07/2025 |
| Client | Entreprise d'aménagement intérieur et de rénovation (Maroc) | Site en ligne. **Vrai client ou démo ?** |
| Rôle | Conception et développement du site | Valeur par défaut |
| Stack | React 19, Create React App, CSS, Vercel | `package.json` |
| Défi 1 | Filtre des réalisations par catégorie (état React) | Vérifié (`Projects.jsx`) |
| Défi 2 | Animations 100 % CSS (`@keyframes`, aucune bibliothèque) | Vérifié |
| Autre | Le site est déclaré `lang="en"` alors que le contenu est en français, et la section contact a des titres en anglais (« Get in touch ») | À corriger côté client ? |
| Résultat | « Site en ligne. » | L'URL est un sous-domaine `vercel.app` : le client a-t-il son propre domaine ? |

## Wardd Music (brouillon)

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Ce que c'est | La partie musique de warddstudio.ma (sorties, clips, artistes) | Pas de page dédiée : lien vers `warddstudio.ma/#tracks`. **Est-ce bien ce que tu veux montrer, ou l'ancien site warddmusic.com (hors ligne) ?** |
| Année | 2026 | Même code que Wardd Studio (`WARDD-V3`). **À changer si c'est l'ancien site** |
| Client | Wardd Studios · label et studio musical | **Wardd Music = le label de Wardd Studios ?** |
| Rôle | Conception et développement de la partie musique | Déduit |
| Défi 1 | Données récupérées côté serveur (getStaticProps), un seul lecteur Spotify chargé | Vérifié (`lib/spotify.js`, `pages/index.jsx`) |
| Défi 2 | ISR toutes les 12 h, délai max de 8 s et repli si Spotify/YouTube ne répond pas | Vérifié (`revalidate`, `TIMEOUT_MS`) |
| Doublon | Wardd Studio présente aussi « Sorties et clips » et « Artistes » | Garder les deux ou alléger l'un ? |

## CSBA Law Firm (brouillon)

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Année | 2024 | **Supposée** (listé par Stretched Web, dont le site affiche © 2024) |
| Client | Cabinet d'avocats en Arabie saoudite | Site en ligne (« le plus fiable en Arabie saoudite »). **Vrai client ?** |
| Rôle | Conception et développement du site | **Fait chez Stretched Web ? Seul ou en équipe ?** |
| Stack | Next.js, React, next/image, Vercel | Détectée sur le site (pas de code accessible) |
| Défi 1 | Arabe RTL (`lang="ar"`, `dir="rtl"`), police Cairo | Vérifié. « Choisie pour sa lisibilité » est une supposition |
| Défi 2 | Images via next/image | Vérifié |
| Défi 3 | Menu burger, aucun débordement à 375 px | Vérifié |
| Non repris | Les chiffres du site (12 ans, 3 300 actes, 500 affaires…) | Ce sont les chiffres du cabinet, pas un résultat du projet |

## Gourmet & Grove (brouillon)

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Année | 2024 | **Supposée** (listé par Stretched Web) |
| Client | Brasserie à Rabat | Site en ligne. **Vrai client ou démo ?** |
| Rôle | Conception et développement du site | **Fait chez Stretched Web ?** |
| Stack | Next.js, React, next/image, Vercel | Détectée sur le site |
| Défi 1 | Vidéo plein écran + écran « Bienvenue » pendant le chargement | L'écran existe. « Pour ne jamais voir une page à moitié chargée » est une supposition : est-il lié au chargement de la vidéo ou à un minuteur ? |
| Défi 2 | Carte par catégories, menu burger, aucun débordement à 375 px | Vérifié |
| Autre | Le site est déclaré `lang="en"` alors que le contenu est en français | À corriger (`lang="fr"`) si c'est un vrai client |

## Stretched Web (brouillon)

| Point | Ce que j'ai écrit | Source / à vérifier |
|---|---|---|
| Année | 2023 | Ton poste (juin – août 2023). **Mais** le site affiche © 2024 et les repos `Stretched_web` / `STRETCHEDLAST` datent d'avril et juin 2024 : le site en ligne est-il celui de 2023 ? |
| Rôle | Développeur Frontend (juin – août 2023) | Ta consigne |
| Stack | Next.js 14, React, GSAP, ScrollTrigger, Tailwind CSS, Vercel | GSAP et ScrollTrigger vérifiés sur le site en ligne. Locomotive Scroll, three.js et styled-components sont dans `package.json` mais introuvables dans les fichiers JS chargés au démarrage : non cités |
| Défi 1 | Animations au scroll avec GSAP ScrollTrigger | Vérifié (présent dans les fichiers JS) |
| Défi 2 | Une page par réalisation sur le même gabarit (`/work/crib`, `/work/smiley`) | Les URL répondent. « Même gabarit » est déduit de la structure |
| Question | Qu'as-tu fait exactement : tout le site, ou certaines pages / animations ? | — |
