<div align="center">

# Mohamed Sekkar — Portfolio

**Full Stack Developer · Java / Spring Boot · React / React Native · Laravel**

[![Live site](https://img.shields.io/badge/Live-mohamedsekkar.com-6366F1?style=for-the-badge)](https://www.mohamedsekkar.com)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

<!-- Add a screenshot of the site in /docs and uncomment the line below -->
<!-- <img src="docs/preview.png" alt="Portfolio preview" width="100%" /> -->

</div>

---

## About

My personal portfolio, where I present my experience, my skills and the projects I've built.
I'm currently studying for the **Concepteur Développeur d'Applications** professional title (Bac+3) at SCHOLIA and looking for a **12-month work-study position (alternance)** in Île-de-France.

👉 **Live:** [www.mohamedsekkar.com](https://www.mohamedsekkar.com)

## Features

- **Sections:** Home, About, Skills, Experience, Works, Contact
- **Intro animation** — full-screen animated robot ("Sugar") with typewriter greeting, with opt-in voice narration via Web Speech API
- **Interactive guided tour** — Sugar follows the visitor through each section with contextual commentary
- **Sound effects** — procedural bubble sounds on skill hover via Web Audio API
- **Animated components** — project carousel, profile card with holographic tilt, spotlight cards, physics-driven folder, WebGL distortion image, electric-border canvas effect
- **FR / EN language toggle** — full content translated, no library
- **Resume** available to download directly from the site
- **Responsive** design for desktop, tablet and mobile
- **SEO** meta tags (Open Graph, Twitter Card, JSON-LD structured data)

## Tech stack

| Category | Library / Tool |
|---|---|
| Framework | React 19 |
| Build tool | Vite 7 |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS 4, CSS Modules |
| Animations | Framer Motion, GSAP + ScrollTrigger |
| 3D / WebGL | Three.js, raw WebGL2 (custom GLSL shaders) |
| Physics | Matter.js |
| Icons | Lucide React |
| Forms | Formspree (@formspree/react) |
| i18n | React Context — custom, FR / EN |
| Browser APIs | Web Audio API, Web Speech API |

## Getting started

```bash
git clone https://github.com/Mosugar/porfolio.git
cd porfolio
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

### Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   # UI sections and reusable components
  context/      # React context providers
  hooks/        # Custom hooks
  i18n/         # Translations
  pages/        # Pages
  styles/       # Global and component styles
  utils/        # Helpers
public/         # Static assets (images, resume)
```

## Contact

- Portfolio: [mohamedsekkar.com](https://www.mohamedsekkar.com)
- LinkedIn: [linkedin.com/in/mohamedsekkar](https://linkedin.com/in/mohamedsekkar)
- Behance: [behance.net/mohamed_sekkar](https://www.behance.net/mohamed_sekkar)
- Email: sekkarmohamedd@gmail.com

---

© Mohamed Sekkar. The code is visible for reference. Personal content (photos, resume, texts and design) may not be reused without permission.
