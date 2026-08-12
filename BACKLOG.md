# Project Maintainability Backlog & Improvement Roadmap

## Executive Summary

The project is a lightweight, performant, and clean personal portfolio built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. The baseline codebase is highly maintainable with low complexity and zero unnecessary external dependencies.

This backlog outlines architectural enhancements, code quality refactors, and feature additions to elevate the project to production-grade standards.

---

## Technical Observations & Key Areas for Improvement

### 1. Architectural: Single Source of Truth for MDX Content
- **Current State:** Article metadata (`title`, `date`, `readTime`, `description`) is stored statically in `lib/content.ts`, while the corresponding prose lives in `content/articles/[slug].mdx`.
- **Impact:** Adding or updating an article requires updating two separate files. Metadata drift can occur if `.mdx` titles or dates change without updating `lib/content.ts`.
- **Target State:** Move article metadata into YAML frontmatter inside each `.mdx` file. Validate frontmatter at build time using `gray-matter` and `zod` schema validation to automatically synthesize article listings and metadata.

### 2. Styling: Design Tokens & CSS Structure
- **Current State:** Tailwind CSS v4 is configured, but `app/globals.css` contains over 700 lines of custom CSS rule sets with hardcoded hex colors (e.g., `#0a0a09`, `#e8e4dc`, `rgba(232, 228, 220, 0.12)`) repeated dozens of times.
- **Impact:** Changing color palettes, tuning contrast ratios, or adding dark/light theme support requires manually updating hundreds of lines across CSS files.
- **Target State:** Consolidate design tokens into CSS Custom Properties (`:root` variables) or standard Tailwind utility classes to simplify site-wide styling changes.

### 3. Standards: Component Naming & DX Refactor
- **Current State:** React components use explicit `Component` suffixes (e.g., `IntroComponent`, `WorkComponent`, `SectionHeaderComponent`).
- **Impact:** Verbose naming that diverges from standard Next.js / React community conventions.
- **Target State:** Rename exports and file usages to concise names (`Intro`, `Work`, `Writing`, `Videos`, `SectionHeader`, `Header`, `Footer`).

### 4. Error Handling: MDX Dynamic Imports Safety
- **Current State:** `app/writing/[slug]/page.tsx` dynamically imports MDX files using `@/content/articles/${article.slug}.mdx`.
- **Impact:** If an MDX file is missing or misspelled relative to the slug list, Next.js throws an unhandled runtime module resolution exception.
- **Target State:** Wrap dynamic `import()` in a `try/catch` block and gracefully call `notFound()` if the file cannot be loaded.

### 5. SEO, Metadata & Discoverability
- **Current State:** RSS feed exists (`/rss.xml`), but sitemap generation, Open Graph images, Twitter card preview metadata, and explicit `metadataBase` are missing.
- **Impact:** Sharing links on social media displays fallback preview cards, and search engine indexing is not optimized.
- **Target State:** Implement `app/sitemap.ts`, set `metadataBase` in root layout, and configure Open Graph / Twitter image generation.

### 6. Repository Hygiene & Developer Tooling
- **Current State:**
  - `tsconfig.json` includes `.next/types/**/*.ts`, which can trigger false-positive `tsc` type errors on stale build caches.
  - `README.md` contains unedited `create-next-app` boilerplate referencing unused fonts.
- **Target State:** Clean up `tsconfig.json` paths and rewrite `README.md` to reflect actual project setup, structure, and commands.

---

## Improvement Roadmap & Actionable To-Do List

> **Estimation Note:** Timelines reflect an AI-assisted development workflow (human developer guiding and reviewing AI code generation in real-time).

### Phase 1: High Priority (P0) — Content Architecture & Robustness
*Goal: Eliminate dual maintenance for MDX articles and ensure fail-safe routing.*

- [ ] **[P0] Implement MDX Frontmatter & Zod Schema Validation**
  - Install/configure `gray-matter` and `zod`.
  - Migrate metadata from `lib/content.ts` into YAML frontmatter in `content/articles/*.mdx`.
  - Update `lib/content.ts` to parse frontmatter dynamically with type-safe Zod schema validation.
  - *Estimated Time:* 30 – 45 mins

- [ ] **[P0] Graceful MDX Dynamic Import & 404 Handling**
  - Wrap dynamic MDX imports in `app/writing/[slug]/page.tsx` with `try/catch`.
  - Invoke `notFound()` on resolution failure.
  - *Estimated Time:* 10 – 15 mins

---

### Phase 2: Medium Priority (P1) — Styling, DX & SEO
*Goal: Improve maintainability of styles, adopt standard conventions, and boost SEO.*

- [ ] **[P1] Design Token Extraction (`globals.css`)**
  - Extract repeating colors and spacing into `:root` CSS custom variables (`--bg-primary`, `--text-primary`, `--border-subtle`, `--accent-color`).
  - Replace hardcoded hex/rgba values across `globals.css` with CSS variables.
  - *Estimated Time:* 30 – 40 mins

- [ ] **[P1] Component Naming Refactor**
  - Rename `*Component` exports to standard concise names (`Intro`, `Work`, `Writing`, `Videos`, `Header`, `Footer`, `SectionHeader`).
  - Update imports across `app/page.tsx`, `app/layout.tsx`, and component files.
  - *Estimated Time:* 15 – 20 mins

- [ ] **[P1] Add `app/sitemap.ts` & Metadata Configuration**
  - Create dynamic `sitemap.ts` combining static routes (`/`, `/writing`) and dynamic article slugs.
  - Set `metadataBase` and default Open Graph / Twitter card tags in `app/layout.tsx`.
  - *Estimated Time:* 20 – 30 mins

---

### Phase 3: Low Priority (P2) — Repository Hygiene & Polish
*Goal: Clean up config files, documentation, and build diagnostics.*

- [ ] **[P2] Clean Up `tsconfig.json` & Build Pipeline**
  - Exclude or adjust `.next/types` inclusion in `tsconfig.json` to prevent stale build type errors during `tsc --noEmit`.
  - Verify `npm run lint` and `npm run build` pass cleanly.
  - *Estimated Time:* 10 – 15 mins

- [ ] **[P2] Update Project `README.md`**
  - Replace `create-next-app` default README with actual project description, tech stack details, and command documentation.
  - *Estimated Time:* 10 – 15 mins

---

## Timeline & Effort Summary

| Priority | Scope | AI-Assisted Dev Time | Standard Human-Only Time |
| :--- | :--- | :--- | :--- |
| **P0** | Frontmatter + Dynamic imports | ~45 – 60 mins | ~3 – 4 hours |
| **P1** | Design tokens, component renaming, SEO | ~65 – 90 mins | ~4 – 5 hours |
| **P2** | Repository hygiene, tsconfig, README | ~20 – 30 mins | ~1.5 hours |
| **Total** | **Full Backlog Implementation** | **~2.5 – 3 hours** | **~8.5 – 10.5 hours** |
