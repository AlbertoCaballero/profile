# AlbertoCaballero.dev — Personal Portfolio

Personal portfolio for [albertocaballero.dev](https://albertocaballero.dev): intro, selected work, writing, and videos — with full article pages, RSS, and a sitemap.

## Tech Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** with design tokens in `app/globals.css` (`:root` CSS variables)
- **MDX** via `@next/mdx` for article content
- **gray-matter + Zod** for typed frontmatter validation at build time

## Project Structure

```
app/
  layout.tsx          Root layout — fonts, metadata (OG/Twitter, metadataBase)
  page.tsx            Home: Intro, Work, Writing, Videos
  writing/            Article index + [slug] article pages
  sitemap.ts          Dynamic sitemap (/) and /writing + article slugs)
  opengraph-image.tsx Generated OG/Twitter share card (next/og)
  rss.xml/route.ts    RSS feed
components/           Header, Footer, Intro, Work, Writing, Videos, SectionHeader
content/articles/     Article MDX files — metadata lives in YAML frontmatter
lib/
  content.ts          Site config, projects, videos (client-safe — no Node APIs)
  articles.ts         Article loader: parses + validates frontmatter (Node-only)
```

## Commands

```bash
npm run dev      # Start the dev server
npm run build    # Production build (type-checks + validates article frontmatter)
npm run start    # Serve the production build
npm run lint     # ESLint
npx tsc --noEmit # Type check without emitting
```

## Writing an Article

1. Create `content/articles/<slug>.mdx` with YAML frontmatter:

   ```mdx
   ---
   title: "Article title"
   date: "2026-04-14"        # ISO date, quoted (YYYY-MM-DD)
   readTime: 8               # integer minutes
   description: "One-liner used in listings, RSS, and meta tags."
   ---

   Article body…
   ```

2. That's it — the listing page, article pages, RSS feed, and sitemap pick it up automatically.

Frontmatter is validated by Zod at build time: a missing or malformed field fails the build with the offending file path, and an `.mdx` file missing from the content directory renders a 404 rather than crashing. In dev, restart the dev server after adding a new article (the article list is read once at startup).

## Troubleshooting

- **`tsc --noEmit` reports stale route-type errors:** Delete `.next` (generated route types are regenerated on the next `npm run dev`/`build`). The generated `.next/types` globs in `tsconfig.json` are intentionally kept — Next.js 16 manages them to avoid config churn between dev and build.