# Ambient Scrim — Floating Text Readability Design

**Date:** 2026-05-10  
**Goal:** Improve readability of text floating directly on the parallax background without adding frosted-glass boxes, maintaining a cinematic, atmospheric aesthetic.

## Problem

Three categories of text are rendered directly on the parallax background and suffer from legibility issues when the background is complex:

1. **Section headers** — `ACT Ⅱ–Ⅵ` act-marker, h2 title, subtitle paragraph
2. **Hero author block** — author names (`text-white/90`), affiliations (`text-white/60`), footnotes (`text-white/40`)

Constraints: must feel invisible; max opacity of any added overlay is ~0.18 (extremely restrained). No frosted-glass rectangles.

## Solution: `.ambient-scrim` + consistent `section-heading-float`

### Core CSS

A `::before` pseudo-element on the header wrapper produces a feathered radial-gradient overlay that darkens by at most 18% at its center, fading to fully transparent at 70% radius. Positioned with negative inset so edges are well outside the text boundaries.

```css
.ambient-scrim { position: relative; }
.ambient-scrim::before {
  content: '';
  position: absolute;
  inset: -48px -100px;
  background: radial-gradient(
    ellipse 60% 70% at 50% 50%,
    rgba(4, 2, 8, 0.18) 0%,
    rgba(4, 2, 8, 0.08) 45%,
    transparent 70%
  );
  pointer-events: none;
  border-radius: 50%;
  z-index: -1;
}
html:not(.dark) .ambient-scrim::before {
  background: radial-gradient(
    ellipse 60% 70% at 50% 50%,
    rgba(242, 236, 225, 0.22) 0%,
    rgba(242, 236, 225, 0.08) 45%,
    transparent 70%
  );
}
```

The `::before` participates in the parent's `data-reveal` fade-in animation naturally (inherits opacity from parent).

### Pairing with `section-heading-float`

The existing `.section-heading-float` multi-layer text-shadow handles per-glyph edge contrast. The ambient scrim handles the area-level luminance floor, especially for small text where text-shadow blur bleeds. Both are needed.

## Affected Files

| File | Change |
|------|--------|
| `src/styles/global.css` | Add `.ambient-scrim` + light-mode override |
| `src/components/OverviewSection.astro` | Add `ambient-scrim` to header div |
| `src/components/BenchmarkSection.astro` | Add `ambient-scrim` + `section-heading-float` to h2 + p |
| `src/components/ComparisonSection.astro` | Add `ambient-scrim` + `section-heading-float` to h2 + p |
| `src/components/CitationSection.astro` | Add `ambient-scrim` + `section-heading-float` to h2 |
| `src/components/DatasetSection.astro` | Add `ambient-scrim` + `section-heading-float` to h2 |
| `src/pages/index.astro` | Add `ambient-scrim` + `section-heading-float` to Performance Comparison header |
| `src/components/HeroSection.astro` | Extend scrim ellipse vertical axis 62% → 75% |

## Not Affected

- `AbstractSection` — fully inside `glass-card`
- `DataCollectionCard` — fully inside `glass-card`
- All benchmark tables — inside `glass-table-card`
