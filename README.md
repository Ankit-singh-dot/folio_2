# Ankit Raj, portfolio

A single-column personal site with a dark mode, built with Next.js 16, Tailwind CSS 4 and Lenis.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

Almost all edits happen in `content/site.ts`, which holds the words, links, projects and pull request statuses. Images are in `public/`.

Set `NEXT_PUBLIC_SITE_URL` to the production URL when deploying. On Vercel it's picked up automatically.
