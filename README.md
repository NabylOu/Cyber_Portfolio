# Nabyl Ouchine — Cybersecurity Portfolio

A modern, dark-themed cybersecurity portfolio built with React + Vite + Tailwind CSS.

## Tech Stack
- React 18
- Vite 5
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Local Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Build
```bash
npm run build
npm run preview
```

## Project Structure
```
public/
  cv/
    Cv_Nabyl_OUCHINE.pdf
  assets/
    icons/
      tryhackme.svg
src/
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Experience.jsx
    Projects.jsx
    Skills.jsx
    Certifications.jsx
    CVSection.jsx
    Contact.jsx
    Footer.jsx
```

## Updating your CV
- Place your PDF at `public/cv/Cv_Nabyl_OUCHINE.pdf`.
- The CV download button in `src/components/CVSection.jsx` links to `/cv/Cv_Nabyl_OUCHINE.pdf`.

## Deployment Notes
- Files under `public/` are served at root. Example: `public/cv/Cv_Nabyl_OUCHINE.pdf` → `/cv/Cv_Nabyl_OUCHINE.pdf`.
- If deploying under a subpath (e.g., GitHub Pages), consider using relative URLs or setting `base` in `vite.config.js`.

## License
This project is for personal portfolio use.
