# Tahsina Mamun Niha | Portfolio

A personal portfolio website showcasing who I am, the skills I have, and the things I have built.

**Live site:** https://tniha10.github.io/my-portfolio/

## About
I'm a Computer Science and Engineering undergraduate at North South University and an aspiring full-stack developer. I enjoy turning ideas into interactive digital tools, and this site holds the projects I have built and what I am currently learning.

## Sections
- **Home**: introduction and quick links
- **About**
- **Skills**
- **Projects**
- **Experience**
- **Education**
- **Contact**

## Built With
- React
- Vite
- CSS 
- ESLint
- Deployed with GitHub Pages

### Prerequisites
- Node.js
- npm (comes with Node.js)

## Project Structure
my-portfolio/
├── .github/            # GitHub configuration (deployment workflow)
├── public/             
├── src/
│   ├── assets/
│   └── components/     # One .jsx and .css file per section
│       ├── Navbar
│       ├── Hero
│       ├── About
│       ├── Skills
│       ├── Projects
│       ├── Experience
│       ├── Education
│       ├── Contact
│       └── Footer
├── index.html
├── vite.config.js
└── package.json

## Deployment
The site is hosted on GitHub Pages at `/my-portfolio/`, so `vite.config.js` sets:
js
base: "/my-portfolio/"

Static files from `public/` must be referenced with the base path, for example:
jsx
<img src={`${import.meta.env.BASE_URL}niha.jpg`} alt="Portrait" />
