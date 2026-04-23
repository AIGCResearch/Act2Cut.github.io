# Site Migration Design: site/ → act2cut-website/

**Date:** 2026-04-23  
**Status:** Approved

---

## Goal

Migrate all content and animations from `/Users/huyaoqi/Documents/act2cut/site/` into `/Users/huyaoqi/Documents/act2cut/act2cut-website/`, preserving the visual style of `act2cut-website` (red gradients, glassmorphism, deep black) while adding stronger cinematic and artistic touches.

---

## Architecture

### Approach: Component Refactor (Option B)

Refactor the existing monolithic `index.astro` into focused Astro components. `index.astro` becomes a thin orchestrator that composes sections.

### File Structure

```
src/
├── pages/
│   └── index.astro                 ← Thin orchestrator only
├── layouts/
│   └── Layout.astro                ← Unchanged
└── components/
    ├── Navigation.astro            ← Rewrite: scroll-spy sticky nav
    ├── ThemeToggle.astro           ← Unchanged
    ├── HeroSection.astro           ← Extract from index.astro (title/authors/buttons/video)
    ├── AbstractSection.astro       ← Extract from index.astro
    ├── OverviewSection.astro       ← New: method architecture (TBR/GLoS-RoPE/SCM/HCM)
    ├── DatasetSection.astro        ← Merge existing + site/dataset.html content
    ├── BenchmarkSection.astro      ← New: from site/benchmark.html quantitative tables
    └── CitationSection.astro       ← Extract from index.astro (BibTeX)
```

### Navigation Anchors

| Label      | Anchor ID    |
|------------|--------------|
| Abstract   | `#abstract`  |
| Overview   | `#overview`  |
| Dataset    | `#dataset`   |
| Benchmark  | `#benchmark` |
| Citation   | `#citation`  |

---

## Navigation Component

- `position: sticky; top: 0`
- `backdrop-blur-xl` + semi-transparent background (`bg-black/60`)
- Scroll-spy via `IntersectionObserver`: monitors each section, highlights the active nav item
- Active state: red gradient text + a thin red underline that slides in from the left (`scaleX 0→1`, `transform-origin: left`)
- Mobile: collapses to a horizontal scrollable row of pills

---

## Visual Style: Cinematic Enhancements

All enhancements are pure CSS + minimal vanilla JS. No new dependencies.

### Global Atmosphere

| Effect | Implementation |
|--------|----------------|
| Animated film grain | Existing SVG noise layer + `@keyframes grain` with `translate` + `steps(2)` at 8s loop |
| Global vignette | Fixed `radial-gradient` overlay div, `pointer-events: none`, `z-index: 50`, `opacity-60` |
| Scanlines | `repeating-linear-gradient` horizontal lines, `opacity-[0.03]`, fixed overlay |

### Hero Section

| Effect | Implementation |
|--------|----------------|
| Projector flicker | `@keyframes flicker` on `brightness`: `0.95 → 1.02 → 1.0` once on load, 600ms |
| Letterbox bars | Two `div`s with `bg-black h-8` pinned top/bottom of video container, subtle inner glow |
| Timecode | `00:00:24:00` in `font-mono`, `opacity-[0.15]`, bottom-right of hero, decorative only |

### Section Title System

| Effect | Implementation |
|--------|----------------|
| Act markers | Above each section title in order: Abstract=`ACT Ⅰ`, Overview=`ACT Ⅱ`, Dataset=`ACT Ⅲ`, Benchmark=`ACT Ⅳ`, Citation=`ACT Ⅴ`. Style: `tracking-widest text-xs`, red gradient color |
| Skewed title accent | Left accent bar with `skew-x-[-6deg]` red gradient block |
| Sweep on hover | `@keyframes sweep`: `background-position` moves left→right on the accent block |

### Cards & Interaction

| Effect | Implementation |
|--------|----------------|
| Chromatic aberration | On card hover: `text-shadow: -1px 0 rgba(230,57,70,0.4), 1px 0 rgba(74,144,226,0.4)` |
| Light leak | Positioned `div` with `radial-gradient` red/orange, `mix-blend-mode: screen`, `opacity-20`, in Hero and key sections |

### Scroll Reveal (Cinematic)

- Trigger: `IntersectionObserver` with `threshold: 0.1`
- Each animated element starts at: `opacity: 0; transform: translateY(32px) scale(0.97)`
- Transitions to: `opacity: 1; transform: translateY(0) scale(1)`
- Duration: `800ms`, easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Stagger: child elements within a section offset by `100ms` each via `transition-delay`
- Applied via a `data-reveal` attribute + JS that adds `is-visible` class on intersection

### Section Dividers

- Replace `<hr>` with a film-strip divider: a `div` styled via a reusable CSS class (not a separate Astro component)
- `repeating-linear-gradient` with evenly spaced square "perforations"
- Height: `20px`, muted color matching border theme (`border-white/10`)

---

## Content Migration Map

| Source | Destination Component | Notes |
|--------|-----------------------|-------|
| `index.astro` — hero/authors/buttons | `HeroSection.astro` | Direct extract |
| `index.astro` — abstract | `AbstractSection.astro` | Direct extract |
| `index.astro` — architecture cards | `OverviewSection.astro` | Merge with `site/overview.html` |
| `index.astro` — dataset section | `DatasetSection.astro` | Merge with `site/dataset.html` |
| `index.astro` — performance table | `BenchmarkSection.astro` | Merge with `site/benchmark.html` tables |
| `index.astro` — BibTeX | `CitationSection.astro` | Direct extract |
| `site/overview.html` — method/pipeline | `OverviewSection.astro` | Add missing pipeline diagrams/text |
| `site/dataset.html` — stats/tabs | `DatasetSection.astro` | Add statistics and tab content |
| `site/benchmark.html` — all 3 tables | `BenchmarkSection.astro` | ActCutBench, VistoryBench, VBench |

---

## Animations: Implementation Approach

**Strategy:** Rewrite from scratch using Tailwind + modern CSS. Do NOT copy `site/main.js`.

- Scroll reveal: single shared `IntersectionObserver` instance, `data-reveal` attribute marks targets
- Scroll-spy nav: separate `IntersectionObserver` for sections, updates `aria-current` on nav links
- Grain animation: CSS `@keyframes` only, defined in `global.css`
- Flicker / sweep effects: CSS `@keyframes` only, triggered via class or `:hover`
- Stagger: handled via `transition-delay` inline styles set during component render

---

## Out of Scope

- Dark/light mode toggle changes (ThemeToggle.astro stays as-is)
- New content beyond what exists in `site/` and `act2cut-website/`
- New external dependencies or JS frameworks
- Responsive breakpoints beyond what Tailwind already handles
