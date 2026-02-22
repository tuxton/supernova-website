<!-- Copilot / AI-agent instructions for contributors and automated agents -->
# Quick instructions for AI coding agents

This repository is a Next.js 16 (app-router) TypeScript site with a small component library and a Shopify theme export. Keep guidance tight and actionable — focus on small, well-scoped edits.

- Project entrypoints:
  - `app/` — Next.js App Router pages and layout (server components by default).
  - `components/` — composed site sections (e.g. `components/sections/hero.tsx`).
  - `ui/` — low-level reusable UI primitives used across sections (shadcn-like).
  - `hooks/` and `lib/` — lightweight helpers (e.g. `hooks/use-toast.ts`, `lib/utils.ts`).
  - `shopify-theme/` — generated Liquid theme code (templates, sections, snippets). Changes here may be part of an export process; be conservative.

- Run / build notes (discoverable):
  - Use the workspace package manager (pnpm is present via `pnpm-lock.yaml`). Typical flow:
    ```bash
    pnpm install
    pnpm dev        # runs `next dev` (see package.json scripts)
    pnpm build
    pnpm start
    ```
  - Linting: `pnpm lint` runs `eslint .` per `package.json`.
  - Next config: `next.config.mjs` sets `typescript.ignoreBuildErrors = true` and `images.unoptimized = true`. Be cautious: the project allows type errors at build time.

- Component conventions to follow (concrete, discoverable patterns):
  - Server vs Client components: the app router uses server components by default. Files that require browser APIs or state include the directive at the top: `"use client"` (examples: `components/sections/navbar.tsx`, `components/sections/faq.tsx`). Only add `"use client"` when necessary.
  - UI primitives live in `ui/`. When creating a new primitive, follow existing naming and props patterns (see `ui/button.tsx`, `ui/input.tsx`). Prefer prop forwarding and consistent className merging (the repo uses `clsx` and `class-variance-authority`).
  - The site composes `components/sections/*` from `ui/` primitives. To change page content, edit the section in `components/sections/` and the page in `app/page.tsx` or `app/layout.tsx`.

- Shopify integration: `shopify-theme/` mirrors site content as Liquid templates. If you change a section's data shape or field names, check for a corresponding `shopify-theme/sections/*.liquid` and update the mapping/export process (avoid making blind changes inside `shopify-theme/` unless you know the export pipeline).

- Styling and theming:
  - Tailwind is used (see `postcss.config.mjs`, `tailwindcss` in devDependencies). Globals are in `styles/globals.css` and `app/globals.css`.
  - Theme provider is in `components/theme-provider.tsx` — use it for persistent theme logic.

- Testing & checks:
  - There are no test scripts in package.json; add tests sparingly and match the project's patterns.
  - Keep TypeScript strictness in mind (tsconfig.json has `strict: true`), but the Next build ignores type errors; prefer to fix types rather than rely on the ignore flag.

- Useful files to open when triaging a change:
  - `package.json` — scripts and deps
  - `next.config.mjs` — Next build flags
  - `tsconfig.json` — TS rules and path aliases (`@/*`)
  - `app/layout.tsx`, `app/page.tsx` — top-level routing and layout
  - `components/theme-provider.tsx`, `components/sections/*`, `ui/*`

If anything here is unclear or you need more context (export pipelines, deployment, environment variables, or the intended Shopify sync workflow), ask and I will expand the instructions or add examples for the specific edit surface.
