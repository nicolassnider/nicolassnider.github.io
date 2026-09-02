# Nicolás Snider - Personal Portfolio

Personal portfolio website built with Astro, React, and TailwindCSS.

## 🚀 Features

- **Modern Tech Stack**: Built with Astro v7, React 19, and TailwindCSS v4
- **Responsive Design**: Fully responsive layout that works on all devices
- **Animations**: Smooth scroll animations using AOS (Animate On Scroll)
- **Multi-language Support**: English and Spanish language support
- **SEO Optimized**: Includes sitemap generation and proper meta tags
- **TypeScript**: Full TypeScript support for type safety

## 📁 Project Structure

```text
/
├── public/
│   ├── Nicolas_Snider_CV_EN.pdf
│   ├── Nicolas_Snider_CV_ES.pdf
│   ├── favicon.ico
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/       # React components (Hero, Experience, Projects, etc.)
│   ├── data/            # Data files (experience, projects, skills, education)
│   ├── layouts/         # Astro layout components
│   ├── pages/           # Page routes
│   ├── styles/          # Global styles
│   ├── config.ts        # Site configuration
│   └── types.ts         # TypeScript type definitions
├── astro.config.mjs     # Astro configuration
├── package.json
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, using `pnpm`:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm run dev`            | Starts local dev server at `localhost:4321`      |
| `pnpm run build`          | Build your production site to `./dist/`          |
| `pnpm run preview`        | Preview your build locally, before deploying     |
| `pnpm run lint`           | Run ESLint to check code quality                 |
| `pnpm run knip`           | Run Knip to detect unused files and dependencies |
| `pnpm run astro ...`      | Run CLI commands like `astro add`, `astro check` |

## 🛠️ Tech Stack

- **Framework**: Astro 7
- **UI Library**: React 19
- **Styling**: TailwindCSS 4
- **Package Manager**: pnpm
- **Animations**: AOS 2.3.4
- **Linting & Quality**: ESLint and Knip
- **TypeScript**: Full TypeScript support

## 📄 Content Sections

- **Hero**: Introduction, call-to-action, and CV download
- **Experience**: Work experience timeline
- **Projects**: Featured projects with descriptions and links
- **Skills**: Technical skills and technologies
- **Education**: Academic background and languages

## 🚀 Deployment

This site is designed to be deployed as a static site on GitHub Pages via `.github/workflows/deploy.yml`.

