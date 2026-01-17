# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 application using the App Router with React 19.

### Tech Stack
- **Framework**: Next.js 16 with App Router (React Server Components enabled)
- **Styling**: Tailwind CSS v4 with `tw-animate-css` for animations
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives
- **Animations**: GSAP with @gsap/react for text animations
- **Icons**: Lucide React

### Key Patterns
- **Path aliases**: Use `@/*` imports (e.g., `@/components`, `@/lib/utils`)
- **Component organization**: Page sections live in `components/layout/{section}/` with an `index.tsx` barrel export
- **UI components**: shadcn components in `components/ui/`, installed via `npx shadcn@latest add [component]`
- **Static data**: Constants and configuration in `lib/data.ts`
- **Utility functions**: `cn()` helper in `lib/utils.ts` for Tailwind class merging

### Fonts
Three fonts configured via `next/font/google` in `app/layout.tsx`:
- Geist Sans (`--font-geist-sans`)
- Geist Mono (`--font-geist-mono`)
- Orbitron (`--font-orbitron`) - primary brand font

### Theming
- CSS variables defined in `app/globals.css` using OKLCH color space
- Dark mode support via `.dark` class
- Brand accent color: red-700 for CTAs
