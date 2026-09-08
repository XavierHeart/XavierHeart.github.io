# Junjie Wu Personal Website

This repository hosts the source code for Junjie Wu's personal academic website. The site presents research interests, publications, education, research experience, academic service, and selected project work.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- next-intl

## Local Development

```bash
npm install
npm run dev
```

The development server starts at `http://localhost:3000`.

## Build

```bash
npm run build
```

The build command exports an English-only static site to `out/`. Legacy Chinese page URLs redirect to their English equivalents.

## GitHub Pages Deployment

This repository is configured for GitHub Pages through GitHub Actions. Pushes to `main` run:

```bash
npm ci
npm run lint
npm run build
```

The workflow uploads the generated `out/` directory to GitHub Pages. The default site URL is `https://xavierheart.github.io/`.

## Project Structure

- `src/i18n/messages/`: English profile, publication, and section content
- `src/app/[locale]/`: localized page routes and layout
- `src/data/site.ts`: global site metadata
- `public/`: static assets, including avatar and resume PDF
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow
- `scripts/prepare-github-pages.mjs`: static export preparation script
