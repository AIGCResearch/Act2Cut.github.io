# Site Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate all content and animations from `site/` into `act2cut-website/`, refactoring the monolithic `index.astro` into focused Astro components with scroll-spy navigation and cinematic visual enhancements.

**Architecture:** `index.astro` becomes a thin orchestrator importing 6 section components + rewritten Navigation. All cinematic effects (animated grain, vignette, scanlines, flicker, scroll reveal) are pure CSS keyframes + vanilla IntersectionObserver. No new dependencies.

**Tech Stack:** Astro 5, Tailwind CSS 3, TypeScript, vanilla JS (IntersectionObserver)

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Modify | `src/styles/global.css` | Add cinematic keyframes + utility classes |
| Modify | `src/layouts/Layout.astro` | Add vignette + scanlines overlays, scroll reveal script |
| Modify (rewrite) | `src/components/Navigation.astro` | Scroll-spy sticky nav |
| Create | `src/components/HeroSection.astro` | Title, authors, buttons, video + flicker/letterbox/timecode |
| Create | `src/components/AbstractSection.astro` | Abstract text |
| Create | `src/components/OverviewSection.astro` | Demo video, architecture, qualitative results (filmstrip) |
| Create | `src/components/DatasetSection.astro` | Pipeline, statistics bars, sample grid |
| Create | `src/components/BenchmarkSection.astro` | ActCutBench, VistoryBench, VBench tables |
| Create | `src/components/CitationSection.astro` | BibTeX block |
| Modify (refactor) | `src/pages/index.astro` | Thin orchestrator — imports only |

---

## Task 1: Cinematic CSS utilities in global.css

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Read the current file**

Run: `cat src/styles/global.css`

- [ ] **Step 2: Append cinematic utilities**

Append to `src/styles/global.css`:

```css
/* ── Cinematic keyframes ─────────────────────────── */
@keyframes grain {
  0%,100% { transform: translate(0,0); }
  10%     { transform: translate(-2%,-3%); }
  20%     { transform: translate(3%,2%); }
  30%     { transform: translate(-1%,4%); }
  40%     { transform: translate(4%,-2%); }
  50%     { transform: translate(-3%,1%); }
  60%     { transform: translate(2%,3%); }
  70%     { transform: translate(-4%,-1%); }
  80%     { transform: translate(1%,-4%); }
  90%     { transform: translate(3%,2%); }
}

@keyframes flicker {
  0%   { filter: brightness(1); }
  8%   { filter: brightness(0.95); }
  18%  { filter: brightness(1.02); }
  32%  { filter: brightness(0.97); }
  48%  { filter: brightness(1.01); }
  68%  { filter: brightness(0.98); }
  100% { filter: brightness(1); }
}

/* ── Global overlays ─────────────────────────────── */
.scanlines {
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.03) 2px,
    rgba(0,0,0,0.03) 4px
  );
}

/* ── Film-strip divider ──────────────────────────── */
.film-strip-divider {
  height: 20px;
  background: repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 12px,
    rgba(255,255,255,0.06) 12px,
    rgba(255,255,255,0.06) 18px,
    transparent 18px,
    transparent 30px
  );
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  margin: 0 0;
}

/* ── Scroll reveal ───────────────────────────────── */
[data-reveal] {
  opacity: 0;
  transform: translateY(32px) scale(0.97);
  transition:
    opacity 800ms cubic-bezier(0.16,1,0.3,1),
    transform 800ms cubic-bezier(0.16,1,0.3,1);
}
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* ── Stat bar fill (triggered by parent .is-visible) */
.stat-bar-fill {
  height: 2px;
  background: linear-gradient(to right, #ff4d4d, #ffb84d);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 1.1s cubic-bezier(0.16,1,0.3,1);
  border-radius: 2px;
}
[data-reveal].is-visible .stat-bar-fill {
  transform: scaleX(var(--fill-w, 1));
}

/* ── Act marker ──────────────────────────────────── */
.act-marker {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  background: linear-gradient(to right, #ff4d4d, #ffb84d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
}

/* ── Grain animation class ───────────────────────── */
.animate-grain {
  animation: grain 8s steps(2) infinite;
}

/* ── Hero flicker ────────────────────────────────── */
.animate-flicker {
  animation: flicker 0.6s ease-out 1 forwards;
}

/* ── Nav underline slide ─────────────────────────── */
.nav-underline {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(to right, #ff4d4d, #ffb84d);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 300ms cubic-bezier(0.16,1,0.3,1);
}
.nav-link-active .nav-underline { transform: scaleX(1); }
.nav-link-active { color: white !important; }

/* ── Chromatic aberration on card hover ──────────── */
.chroma-hover:hover h3 {
  text-shadow:
    -1px 0 rgba(230,57,70,0.4),
     1px 0 rgba(74,144,226,0.4);
}
```

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add cinematic CSS keyframes and utility classes"
```

---

## Task 2: Update Layout.astro — overlays + scroll reveal script

**Files:**
- Modify: `src/layouts/Layout.astro`

- [ ] **Step 1: Read the current file**

Run: `cat src/layouts/Layout.astro`

- [ ] **Step 2: Replace Layout.astro entirely**

```astro
---
import '../styles/global.css';

interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!doctype html>
<html lang="en" class="dark scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="Act2Cut: Continuous Next-Shot Video Narrative Match on Action-Cut" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <title>{title}</title>
  </head>
  <body class="min-h-screen text-white font-sans antialiased bg-black selection:bg-white/30 selection:text-white">

    <!-- Fixed background layer -->
    <div class="fixed inset-0 w-full h-full -z-50 pointer-events-none">
      <div class="absolute inset-0 bg-black/60 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1440407876336-62333a6f010f?q=80&w=2942&auto=format&fit=crop"
        class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
        alt=""
      />
      <!-- Animated film grain -->
      <div
        class="absolute inset-0 z-20 opacity-20 animate-grain"
        style="background-image:url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E&quot;);"
      ></div>
    </div>

    <!-- Global vignette -->
    <div
      class="fixed inset-0 pointer-events-none z-40"
      style="background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%);"
    ></div>

    <!-- Scanlines overlay -->
    <div class="fixed inset-0 pointer-events-none z-40 scanlines opacity-[0.6]"></div>

    <slot />

    <!-- Scroll reveal observer -->
    <script>
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
    </script>
  </body>
</html>
```

- [ ] **Step 3: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "feat: add cinematic overlays (vignette, scanlines, animated grain) to Layout"
```

---

## Task 3: Rewrite Navigation.astro

**Files:**
- Modify: `src/components/Navigation.astro`

- [ ] **Step 1: Write Navigation.astro**

```astro
---
const navItems = [
  { label: 'Abstract',  href: '#abstract'  },
  { label: 'Overview',  href: '#overview'  },
  { label: 'Dataset',   href: '#dataset'   },
  { label: 'Benchmark', href: '#benchmark' },
  { label: 'Citation',  href: '#citation'  },
];
---

<nav id="main-nav" class="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
  <div class="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
    <a href="#" class="text-[11px] font-black tracking-[0.22em] uppercase text-white/90 shrink-0">
      Act<em class="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d] not-italic">2</em>Cut
    </a>
    <div class="flex items-center gap-0.5 overflow-x-auto" style="scrollbar-width:none;">
      {navItems.map(item => (
        <a
          href={item.href}
          data-nav-link
          class="nav-link-item relative px-3 py-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 hover:text-white/70 transition-colors duration-200 whitespace-nowrap"
        >
          {item.label}
          <span class="nav-underline"></span>
        </a>
      ))}
    </div>
  </div>
</nav>

<script>
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]');
  const sections = document.querySelectorAll<HTMLElement>('section[id]');

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(link => {
        const active = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('nav-link-active', active);
      });
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });

  sections.forEach(s => spy.observe(s));
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Navigation.astro
git commit -m "feat: rewrite Navigation with scroll-spy and red gradient active state"
```

---

## Task 4: Create HeroSection.astro

**Files:**
- Create: `src/components/HeroSection.astro`

Content extracted from `src/pages/index.astro` lines 44–108, enhanced with letterbox bars, timecode, and flicker trigger.

- [ ] **Step 1: Write HeroSection.astro**

```astro
---
const authors = [
  { name: 'Cailin Zhuang', affil: '1,2*' },
  { name: 'Yaoqi Hu',      affil: '3*'   },
  { name: 'Zheng Dong',    affil: '3'    },
  { name: 'Shiwen Zhang',  affil: '4'    },
  { name: 'Haibin Huang',  affil: '4†'   },
  { name: 'Chi Zhang',     affil: '4†'   },
  { name: 'Xuelong Li',    affil: '4†'   },
];

const affiliations = [
  { id: '1', name: 'ShanghaiTech University' },
  { id: '2', name: 'AIGC Research, China Telecom' },
  { id: '3', name: 'Chongqing University of Technology' },
  { id: '4', name: 'Institute of Artificial Intelligence, China Telecom (TeleAI)' },
];
---

<!-- HEADER / TITLE -->
<header class="text-center space-y-10 mt-16 mb-12 px-4 animate-flicker">
  <div data-reveal>
    <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] max-w-5xl mx-auto">
      <span class="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d] mb-4">Act2Cut</span>
      <span class="block mb-1">Continuous <span class="font-normal italic text-white/90">Next-Shot</span> Video</span>
      <span class="block whitespace-nowrap">Narrative Match on <span class="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">Action-Cut</span></span>
    </h1>
  </div>

  <div class="space-y-6" data-reveal style="transition-delay:100ms">
    <div class="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[17px]">
      {authors.map(author => (
        <span class="font-medium text-white/90">
          {author.name}<sup class="text-white/70 ml-0.5">{author.affil}</sup>
        </span>
      ))}
    </div>
    <div class="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[15px] text-white/60">
      {affiliations.map(affil => (
        <span><sup class="mr-0.5">{affil.id}</sup>{affil.name}</span>
      ))}
    </div>
    <div class="text-[13px] text-white/40 mt-4 font-light">
      * Equal contributions. &nbsp;&nbsp;&nbsp; † Corresponding authors.
    </div>
  </div>

  <!-- ACTION BUTTONS -->
  <div class="flex justify-center gap-6 pt-10" data-reveal style="transition-delay:200ms">
    <a href="#" class="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 transition-all duration-300 flex items-center gap-2.5 text-sm font-medium backdrop-blur-md group">
      <svg class="w-4 h-4 opacity-70 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
      Paper
    </a>
    <a href="#" class="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 transition-all duration-300 flex items-center gap-2.5 text-sm font-medium backdrop-blur-md group">
      <svg class="w-4 h-4 opacity-70 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
      Code
    </a>
    <a href="#" class="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 transition-all duration-300 flex items-center gap-2.5 text-sm font-medium backdrop-blur-md group">
      <svg class="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      Video
    </a>
  </div>
</header>

<!-- HERO VIDEO with letterbox + timecode -->
<section class="rounded-[2rem] overflow-hidden border border-white/20 bg-black/40 backdrop-blur-xl shadow-2xl relative group aspect-[21/9] flex items-center justify-center" data-reveal style="transition-delay:300ms">
  <!-- Light leak top-left -->
  <div class="absolute -top-10 -left-10 w-64 h-64 rounded-full pointer-events-none z-10"
    style="background: radial-gradient(circle, rgba(255,77,77,0.15) 0%, transparent 70%); mix-blend-mode: screen;"></div>

  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>

  <!-- Letterbox bars -->
  <div class="absolute top-0 left-0 right-0 h-8 bg-black z-20 pointer-events-none shadow-[0_4px_12px_rgba(0,0,0,0.6)]"></div>
  <div class="absolute bottom-0 left-0 right-0 h-8 bg-black z-20 pointer-events-none shadow-[0_-4px_12px_rgba(0,0,0,0.6)]"></div>

  <!-- Play button -->
  <div class="absolute inset-0 flex items-center justify-center z-20">
    <button class="w-24 h-24 rounded-full bg-[#ff4d4d]/90 hover:bg-[#ff4d4d] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-[0_0_40px_rgba(255,77,77,0.5)] backdrop-blur-md">
      <svg class="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
    </button>
  </div>

  <img src="https://images.unsplash.com/photo-1578589318433-39b5de440c3f?q=80&w=2939&auto=format&fit=crop" class="w-full h-full object-cover opacity-70 mix-blend-luminosity transform group-hover:scale-105 transition-transform duration-[10s]" alt="Demo Video Placeholder">

  <div class="absolute bottom-12 left-8 z-20">
    <div class="flex items-center gap-3 mb-2">
      <span class="px-3 py-1 rounded-full border border-[#ff4d4d]/50 bg-[#ff4d4d]/20 text-red-200 text-xs font-medium backdrop-blur-md">Match on Action</span>
    </div>
    <h2 class="text-3xl font-bold tracking-tight text-white">Continuous Narrative Generation</h2>
    <p class="text-white/70 font-light mt-1 max-w-xl">Demonstrating seamless shot transitions ensuring physical logic and action continuity across cinematic cuts.</p>
  </div>

  <!-- Timecode decoration -->
  <div class="absolute bottom-12 right-8 z-20 font-mono text-[11px] text-white/15 tracking-widest select-none pointer-events-none">
    00:00:24:00
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/HeroSection.astro
git commit -m "feat: create HeroSection with letterbox, timecode, and flicker"
```

---

## Task 5: Create AbstractSection.astro

**Files:**
- Create: `src/components/AbstractSection.astro`

Content extracted from `src/pages/index.astro` lines 110–118.

- [ ] **Step 1: Write AbstractSection.astro**

```astro
---
---

<section id="abstract" class="rounded-3xl p-8 md:p-12 border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl space-y-6">
  <div class="flex items-center gap-3 mb-2">
    <span class="act-marker">ACT Ⅰ</span>
  </div>
  <h2 class="text-2xl font-semibold tracking-tight text-white/90 mb-4">Abstract</h2>

  <p class="text-lg leading-relaxed text-white/90 font-light text-justify" data-reveal>
    Achieving cinematic coherence in video generation requires more than just identity or scene consistency—it demands <strong class="font-semibold text-white">Action Continuity</strong>. In filmmaking, the Match on Action (Action-Cut) technique is essential for narrative flow. Current multi-shot models frequently suffer from action reset, instantaneous flickering, or disruptions in physical logic during abrupt shot transitions.
  </p>
  <p class="text-lg leading-relaxed text-white/90 font-light text-justify" data-reveal style="transition-delay:100ms">
    We introduce <strong class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d]">Act2Cut</strong>, the first specialized framework for continuous action-driven multi-shot video generation. Act2Cut introduces <strong class="font-semibold text-white">Transitional Boundary Residual (TBR)</strong> and <strong class="font-semibold text-white">GLoS-RoPE</strong> to enhance adjacent shot spatio-temporal coherence, alongside <strong class="font-semibold text-white">Shot Causal Mask (SCM)</strong> and <strong class="font-semibold text-white">Hierarchical Context Mask (HCM)</strong> to achieve global temporal causality and local element isolation. It unifies Text-to-Video, Image-to-Video, and Video-to-Video generation into a single native pass.
  </p>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/AbstractSection.astro
git commit -m "feat: create AbstractSection with act marker and scroll reveal"
```

---

## Task 6: Create OverviewSection.astro

**Files:**
- Create: `src/components/OverviewSection.astro`

Merges `site/overview.html` content (method cards with full descriptions, filmstrip qualitative results) with existing architecture section from `index.astro`.

- [ ] **Step 1: Write OverviewSection.astro**

```astro
---
const methodCards = [
  {
    abbr: 'TBR',
    title: 'Transitional Boundary Residual',
    desc: `Enhances spatial and kinetic consistency at the edit point between adjacent shots. Ensures the terminal frame of shot <em>n</em> and the initial frame of shot <em>n+1</em> maintain rigorous 3D spatial alignment and smooth momentum continuity, preventing visual "popping" at hard cuts.`
  },
  {
    abbr: 'GLoS-RoPE',
    title: 'Global-Local Shot RoPE',
    desc: `Decouples temporal position encoding across shot boundaries. Global tokens carry sequence-level context while local tokens remain precisely positioned within their own shot — enabling cross-shot coherence without RoPE bleed between unrelated frames.`
  },
  {
    abbr: 'SCM',
    title: 'Shot Causal Mask',
    desc: `Applies a unidirectional causal constraint in self-attention so that shot <em>x<sub>i</sub></em> can attend to the history of <em>x<sub>i−1</sub></em>, but not vice versa. Prevents "semantic leakage" where future shot compositions contaminate earlier frames.`
  },
  {
    abbr: 'HCM',
    title: 'Hierarchical Context Mask',
    desc: `Partitions cross-attention into global, relational, and local windows. Global tokens act as universal anchors; per-shot cinematic language remains independently modulated, ensuring precise control over "what happens" vs. "how it is framed" for each shot.`
  },
];

const t2v_items = [
  { num: 'T01', action: 'Character is tying up her hair. Shot 1 → Shot 2 (Match on Action).' },
  { num: 'T02', action: 'Character walks toward another character across the room.' },
  { num: 'T03', action: 'Character performs a dance move with arm and leg coordination.' },
  { num: 'T04', action: 'Character sits down and opens a book on the table.' },
  { num: 'T05', action: 'Character crouches down to pick up an object from the floor.' },
  { num: 'T06', action: 'Character turns and looks out of the window thoughtfully.' },
  { num: 'T07', action: 'Two characters face each other; character 1 speaks while character 2 listens.' },
  { num: 'T08', action: 'Character runs through a narrow corridor, turns a corner.' },
  { num: 'T09', action: 'Character reaches for something on the top shelf, struggles briefly.' },
  { num: 'T10', action: 'Character enters a room, pauses, and looks around taking in the scene.' },
];

const i2v_items = [
  { num: 'I01', action: 'Given first frame — character tying hair, action continues through cut.' },
  { num: 'I02', action: 'Given first frame — character standing up from chair, Mid-Shot → Close-Up.' },
  { num: 'I03', action: 'Given first frame — two characters shaking hands; Cut-In on hands.' },
  { num: 'I04', action: 'Given first frame — character writing at desk, zoom from Wide to MCU.' },
  { num: 'I05', action: 'Given first frame — character opening a door and stepping through.' },
  { num: 'I06', action: 'Given first frame — character pouring drink, Over-Shoulder reaction shot.' },
  { num: 'I07', action: 'Given first frame — character throwing an object, Cut-Out to wide establishing.' },
  { num: 'I08', action: 'Given first frame — character pointing; Cut-In to detail of finger.' },
  { num: 'I09', action: 'Given first frame — outdoor scene, character climbing stairs, Low-Angle to Eye-Level.' },
  { num: 'I10', action: 'Given first frame — character reading, slow pan to close-up on face expression.' },
];

const v2v_items = [
  { num: 'V01', action: 'Given prev-shot clip — character standing up; predict Match on Action cut to next shot.' },
  { num: 'V02', action: 'Given prev-shot clip — character crouching down; Shot-Reverse-Shot prediction.' },
  { num: 'V03', action: 'Given prev-shot clip — character approaching table; Cut-In to hands on object.' },
  { num: 'V04', action: 'Given prev-shot clip — complex fight sequence; multi-step action continuation.' },
  { num: 'V05', action: 'Given prev-shot clip — two-character scene; predict reaction shot with correct framing.' },
  { num: 'V06', action: 'Given prev-shot clip — OOD anime style; character dodging; zero-shot generalization.' },
  { num: 'V07', action: 'Given prev-shot clip — group shot, character action decoupling across multiple subjects.' },
  { num: 'V08', action: 'Given prev-shot clip — extreme close-up, character blinking; predict complementary wide shot.' },
  { num: 'V09', action: 'Given prev-shot clip — character walking outdoors; Dutch angle to Eye-Level continuity.' },
  { num: 'V10', action: 'Given prev-shot clip — 14B model scaling test; complex sequence with 5 shots.' },
];
---

<section id="overview" class="space-y-12">

  <!-- Section header -->
  <div data-reveal>
    <span class="act-marker">ACT Ⅱ</span>
    <h2 class="text-3xl font-semibold tracking-tight flex items-center gap-3 mt-1">
      <span class="inline-block w-1 h-7 bg-gradient-to-b from-[#ff4d4d] to-[#ffb84d] rounded-sm" style="transform: skewX(-6deg);"></span>
      Method &amp; Results
    </h2>
    <p class="text-white/50 text-sm mt-2">Demo video, architecture overview, and qualitative comparison.</p>
  </div>

  <!-- Demo video placeholder -->
  <div class="rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl relative aspect-video flex items-center justify-center" data-reveal style="transition-delay:100ms">
    <div class="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white/40">
      <div class="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
        <svg class="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </div>
      <span class="text-[9px] tracking-[0.28em] uppercase font-semibold">Demo Video — Replace with actual video</span>
    </div>
  </div>

  <!-- Architecture diagram placeholder -->
  <div class="rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg relative flex items-center justify-center text-white/30 p-8" style="aspect-ratio:16/7;" data-reveal style="transition-delay:150ms">
    <div class="text-center">
      <div class="text-[10px] tracking-[0.28em] uppercase font-semibold mb-1">Architecture Diagram</div>
      <div class="text-[11px] text-white/20 italic">Fig. 3 — Replace with actual figure</div>
    </div>
  </div>

  <div class="film-strip-divider"></div>

  <!-- Method cards -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
    {methodCards.map((card, i) => (
      <div
        class="rounded-3xl p-8 border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg hover:bg-white/5 hover:border-[#ff4d4d]/30 transition-all duration-300 chroma-hover"
        data-reveal
        style={`transition-delay:${i * 80}ms`}
      >
        <span class="text-[10px] font-bold tracking-[0.28em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d] block mb-2">{card.abbr}</span>
        <h3 class="text-xl font-semibold mb-3 text-white">{card.title}</h3>
        <p class="text-sm text-white/70 leading-relaxed font-light" set:html={card.desc}></p>
      </div>
    ))}
  </div>

  <div class="film-strip-divider"></div>

  <!-- Qualitative Results tabs -->
  <div>
    <div data-reveal>
      <span class="text-[10px] font-bold tracking-[0.28em] uppercase text-white/40 block mb-2">Qualitative Results</span>
      <h3 class="text-2xl font-semibold tracking-tight mb-6">Generated Sequences vs. Baseline</h3>
    </div>

    <!-- Tab bar -->
    <div class="flex gap-0 border-b border-white/10 mb-8" data-reveal style="transition-delay:80ms">
      <button class="overview-tab-btn active-tab px-0 mr-9 py-4 text-[11px] font-bold tracking-[0.18em] uppercase border-b-2 border-transparent transition-all duration-200 whitespace-nowrap" data-tab="otab-t2v">Text → Video</button>
      <button class="overview-tab-btn px-0 mr-9 py-4 text-[11px] font-bold tracking-[0.18em] uppercase border-b-2 border-transparent transition-all duration-200 text-white/40 hover:text-white whitespace-nowrap" data-tab="otab-i2v">Image → Video</button>
      <button class="overview-tab-btn px-0 mr-9 py-4 text-[11px] font-bold tracking-[0.18em] uppercase border-b-2 border-transparent transition-all duration-200 text-white/40 hover:text-white whitespace-nowrap" data-tab="otab-v2v">Video → Video</button>
    </div>

    <!-- T2V panel -->
    <div id="otab-t2v" class="overview-tab-panel grid grid-cols-1 md:grid-cols-2 gap-0.5">
      {t2v_items.map((item, i) => (
        <div class="bg-white/[0.03] border border-white/[0.08] p-5 hover:border-white/20 transition-all duration-300" data-reveal style={`transition-delay:${i * 50}ms`}>
          <div class="flex items-start gap-3 mb-3">
            <span class="text-[9px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d] pt-0.5 shrink-0">{item.num}</span>
            <span class="text-[13px] text-white/60 leading-snug italic">{item.action}</span>
          </div>
          <!-- Filmstrip: MSM-14B -->
          <div class="mt-2">
            <div class="text-[8px] font-semibold tracking-[0.18em] uppercase text-white/30 mb-1.5">MSM-14B</div>
            <div class="grid grid-cols-3 gap-0.5">
              {['S1-end','S2-start','S2-end'].map(label => (
                <div class="aspect-video bg-black/40 border border-white/[0.08] rounded-sm flex items-center justify-center">
                  <span class="text-[7px] tracking-[0.15em] text-white/30 uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <!-- Filmstrip: Ours -->
          <div class="mt-2">
            <div class="text-[8px] font-semibold tracking-[0.18em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d] mb-1.5">★ Act2Cut (Ours)</div>
            <div class="grid grid-cols-3 gap-0.5">
              {['S1-end','S2-start','S2-end'].map(label => (
                <div class="aspect-video bg-black/40 border border-[#ff4d4d]/25 rounded-sm flex items-center justify-center">
                  <span class="text-[7px] tracking-[0.15em] text-white/40 uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    <!-- I2V panel -->
    <div id="otab-i2v" class="overview-tab-panel hidden grid grid-cols-1 md:grid-cols-2 gap-0.5">
      {i2v_items.map((item, i) => (
        <div class="bg-white/[0.03] border border-white/[0.08] p-5 hover:border-white/20 transition-all duration-300" data-reveal style={`transition-delay:${i * 50}ms`}>
          <div class="flex items-start gap-3 mb-3">
            <span class="text-[9px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d] pt-0.5 shrink-0">{item.num}</span>
            <span class="text-[13px] text-white/60 leading-snug italic">{item.action}</span>
          </div>
          <div class="mt-2">
            <div class="text-[8px] font-semibold tracking-[0.18em] uppercase text-white/30 mb-1.5">MSM-14B</div>
            <div class="grid grid-cols-3 gap-0.5">
              {['S1-end','S2-start','S2-end'].map(label => (
                <div class="aspect-video bg-black/40 border border-white/[0.08] rounded-sm flex items-center justify-center">
                  <span class="text-[7px] tracking-[0.15em] text-white/30 uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div class="mt-2">
            <div class="text-[8px] font-semibold tracking-[0.18em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d] mb-1.5">★ Act2Cut (Ours)</div>
            <div class="grid grid-cols-3 gap-0.5">
              {['S1-end','S2-start','S2-end'].map(label => (
                <div class="aspect-video bg-black/40 border border-[#ff4d4d]/25 rounded-sm flex items-center justify-center">
                  <span class="text-[7px] tracking-[0.15em] text-white/40 uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    <!-- V2V panel -->
    <div id="otab-v2v" class="overview-tab-panel hidden grid grid-cols-1 md:grid-cols-2 gap-0.5">
      {v2v_items.map((item, i) => (
        <div class="bg-white/[0.03] border border-white/[0.08] p-5 hover:border-white/20 transition-all duration-300" data-reveal style={`transition-delay:${i * 50}ms`}>
          <div class="flex items-start gap-3 mb-3">
            <span class="text-[9px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d] pt-0.5 shrink-0">{item.num}</span>
            <span class="text-[13px] text-white/60 leading-snug italic">{item.action}</span>
          </div>
          <div class="mt-2">
            <div class="text-[8px] font-semibold tracking-[0.18em] uppercase text-white/30 mb-1.5">MSM-14B</div>
            <div class="grid grid-cols-3 gap-0.5">
              {['S1-end','S2-start','S2-end'].map(label => (
                <div class="aspect-video bg-black/40 border border-white/[0.08] rounded-sm flex items-center justify-center">
                  <span class="text-[7px] tracking-[0.15em] text-white/30 uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div class="mt-2">
            <div class="text-[8px] font-semibold tracking-[0.18em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d] mb-1.5">★ Act2Cut (Ours)</div>
            <div class="grid grid-cols-3 gap-0.5">
              {['S1-end','S2-start','S2-end'].map(label => (
                <div class="aspect-video bg-black/40 border border-[#ff4d4d]/25 rounded-sm flex items-center justify-center">
                  <span class="text-[7px] tracking-[0.15em] text-white/40 uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

</section>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll<HTMLButtonElement>('.overview-tab-btn');
    const panels = document.querySelectorAll<HTMLElement>('.overview-tab-panel');

    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        tabs.forEach(b => {
          b.classList.remove('active-tab', 'text-transparent', 'bg-clip-text', 'bg-gradient-to-r', 'from-[#ff4d4d]', 'to-[#ffb84d]', 'border-[#ff4d4d]');
          b.classList.add('text-white/40', 'border-transparent');
        });
        btn.classList.add('active-tab', 'text-transparent', 'bg-clip-text', 'bg-gradient-to-r', 'from-[#ff4d4d]', 'to-[#ffb84d]', 'border-[#ff4d4d]');
        btn.classList.remove('text-white/40', 'border-transparent');

        panels.forEach(p => p.classList.add('hidden'));
        const target = document.getElementById(btn.dataset.tab!);
        if (target) {
          target.classList.remove('hidden');
          target.style.opacity = '0';
          requestAnimationFrame(() => {
            target.style.transition = 'opacity 500ms ease-in-out';
            target.style.opacity = '1';
          });
        }
      });
    });

    // Initialize active tab style
    const firstTab = document.querySelector<HTMLButtonElement>('.overview-tab-btn.active-tab');
    if (firstTab) {
      firstTab.classList.add('text-transparent', 'bg-clip-text', 'bg-gradient-to-r', 'from-[#ff4d4d]', 'to-[#ffb84d]', 'border-[#ff4d4d]');
      firstTab.classList.remove('text-white/40');
    }
  });
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/OverviewSection.astro
git commit -m "feat: create OverviewSection with demo video, architecture, filmstrip qualitative results"
```

---

## Task 7: Create DatasetSection.astro

**Files:**
- Create: `src/components/DatasetSection.astro`

Merges existing dataset content from `index.astro` (lines 120–153) with `site/dataset.html` pipeline, statistics bars, and sample grid.

- [ ] **Step 1: Write DatasetSection.astro**

```astro
---
const pipelineSteps = [
  { n: '1', title: 'Source Collection',      desc: 'Large-scale video corpus from diverse genres, styles, and cinematographic traditions' },
  { n: '2', title: 'AC Detection',           desc: 'SCBO algorithm identifies action-cut boundaries with boundary-residual optimization' },
  { n: '3', title: 'Shot Segmentation',      desc: 'Audio-video segmentation into shot-level clips with precise boundary frame extraction' },
  { n: '4', title: 'Hierarchical Annotation',desc: 'Global scene + character captions; local static/dynamic cinematography; shot-relation labels' },
  { n: '5', title: 'Quality Filtering',      desc: 'LLM-based annotation verification and expert review to ensure label accuracy and clip quality' },
];

const statGroups = [
  {
    title: 'By Visual Style',
    bars: [
      { label: 'Live Action / Realistic', w: 0.72 },
      { label: '2D Animation / Anime',    w: 0.55 },
      { label: '3D CGI',                  w: 0.38 },
      { label: 'Documentary / Non-Fiction', w: 0.22 },
      { label: 'Other / Mixed',            w: 0.12 },
    ]
  },
  {
    title: 'By Shot Count per Sequence',
    bars: [
      { label: '2-Shot', w: 0.65 },
      { label: '3-Shot', w: 0.82 },
      { label: '4-Shot', w: 0.45 },
      { label: '5-Shot', w: 0.28 },
      { label: '6+ Shot', w: 0.15 },
    ]
  },
  {
    title: 'By Action Complexity',
    bars: [
      { label: 'Simple (Single action)',      w: 0.58 },
      { label: 'Medium (Action sequence)',    w: 0.75 },
      { label: 'Complex (Coordinated motion)', w: 0.42 },
      { label: 'Multi-Character',             w: 0.35 },
      { label: 'Out-of-Domain (OOD)',          w: 0.18 },
    ]
  },
];

const samples = [
  { label: 'Live Action · 2-Shot · Simple Action',    caption: 'Match on Action: Hair-tying (ECU→MCU)' },
  { label: 'Anime · 3-Shot · Medium Action',           caption: 'Shot-Reverse-Shot: Dialogue scene' },
  { label: '3D CGI · 2-Shot · Complex Action',         caption: 'Cut-In: Fighting sequence with strike' },
  { label: 'Live Action · 4-Shot · Multi-Character',   caption: 'Group Shot → Two Shot → Close-Up' },
  { label: 'Anime · 2-Shot · Simple Action',           caption: 'Over-Shoulder: Character handing object' },
  { label: 'Live Action · 5-Shot · Complex Action',    caption: 'Dance choreography, Low-Angle series' },
  { label: 'Documentary · 2-Shot · Simple Action',     caption: 'Cut-Out: Subject exiting frame, Wide Shot' },
  { label: '3D CGI · 3-Shot · Medium Action',          caption: 'Walk cycle through environment, pan-follow' },
];
---

<section id="dataset" class="space-y-12">

  <!-- Section header -->
  <div data-reveal>
    <span class="act-marker">ACT Ⅲ</span>
    <h2 class="text-3xl font-semibold tracking-tight flex items-center gap-3 mt-1">
      <span class="inline-block w-1 h-7 bg-gradient-to-b from-[#ff4d4d] to-[#ffb84d] rounded-sm" style="transform: skewX(-6deg);"></span>
      Large-Scale Dataset: ActCutVid-200k
    </h2>
    <p class="text-white/50 text-sm mt-2">Large-scale multi-shot video corpus with hierarchical cinematographic annotation.</p>
  </div>

  <!-- Data collection overview (from index.astro) -->
  <div class="rounded-3xl p-8 md:p-12 border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl" data-reveal style="transition-delay:80ms">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div class="space-y-6">
        <h3 class="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d]">Data Collection &amp; Processing</h3>
        <p class="text-sm text-white/80 leading-relaxed font-light">
          Sourced from films, TV series, and AI-generated content (Sora2, Seedance2.0). We utilize <strong class="text-white">TransNetV2</strong> with our novel <strong class="text-white">Similarity Clustering Boundary Optimizer (SCBO)</strong> via CLIP/DINO to precisely calibrate shot boundaries.
        </p>
        <ul class="space-y-3 text-sm text-white/70 font-light">
          <li class="flex items-start gap-3">
            <svg class="w-5 h-5 text-[#ffb84d] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>0-4 Likert Scale:</strong> Assessed via Gemini-3-Pro, distinguishing between Strong Action-Cut (Score 4) and Weak Action-Cut (Score 1-3).</span>
          </li>
          <li class="flex items-start gap-3">
            <svg class="w-5 h-5 text-[#ffb84d] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span><strong>Hierarchical Annotations:</strong> Decoupled cinematographic shot-language including Global (Env, Scene, Style), Local (Static/Dynamic Cinematography), and Relational prompts.</span>
          </li>
        </ul>
      </div>
      <div class="bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col justify-center relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-br from-[#ff4d4d]/10 to-transparent opacity-50"></div>
        <h4 class="text-lg font-medium text-white mb-4 relative z-10">Hierarchical Prompting Example</h4>
        <div class="space-y-4 text-xs font-mono text-white/60 relative z-10">
          <div><span class="text-white/90">Global:</span> Soft, warm sunlight filters through large windows...</div>
          <div><span class="text-white/90">Local (Static):</span> Shot 1: Medium Close-Up. Shot 2: Over-the-Shoulder.</div>
          <div><span class="text-white/90">Action:</span> [Character 1] is tying up her hair.</div>
          <div><span class="text-white/90">Transition:</span> Hard Cut, Cut-Out. Shot Reverse Shot.</div>
        </div>
      </div>
    </div>
  </div>

  <div class="film-strip-divider"></div>

  <!-- Construction pipeline -->
  <div data-reveal style="transition-delay:100ms">
    <h3 class="text-xl font-semibold mb-8 text-white/80">Construction Pipeline</h3>
    <div class="relative flex items-start gap-0 overflow-x-auto pb-2">
      <!-- Connecting line -->
      <div class="absolute top-6 left-8 right-8 h-px bg-gradient-to-r from-[#ff4d4d]/30 to-[#ffb84d]/30 pointer-events-none"></div>
      {pipelineSteps.map((step, i) => (
        <div class="flex-1 min-w-[140px] px-4 flex flex-col items-center text-center relative z-10">
          <div class="w-12 h-12 rounded-full border border-[#ff4d4d]/40 bg-black flex items-center justify-center text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d] mb-5 hover:border-[#ff4d4d] transition-colors">
            <span class="text-[#ffb84d]">{step.n}</span>
          </div>
          <div class="text-sm font-semibold text-white mb-2">{step.title}</div>
          <div class="text-xs text-white/50 leading-relaxed">{step.desc}</div>
        </div>
      ))}
    </div>
  </div>

  <div class="film-strip-divider"></div>

  <!-- Statistics bars -->
  <div>
    <h3 class="text-xl font-semibold mb-8 text-white/80" data-reveal>Statistics</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      {statGroups.map((group, gi) => (
        <div data-reveal style={`transition-delay:${gi * 100}ms`}>
          <div class="text-sm font-semibold text-white mb-6 pb-3 border-b border-white/10">{group.title}</div>
          {group.bars.map(bar => (
            <div class="mb-4">
              <div class="flex justify-between items-baseline mb-1.5">
                <span class="text-[13px] text-white/60">{bar.label}</span>
                <span class="text-[11px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d]">—%</span>
              </div>
              <div class="h-0.5 bg-white/[0.07] rounded overflow-hidden">
                <div class="stat-bar-fill" style={`--fill-w:${bar.w};`}></div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>

  <div class="film-strip-divider"></div>

  <!-- Sample data grid -->
  <div>
    <h3 class="text-xl font-semibold mb-8 text-white/80" data-reveal>Sample Data</h3>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-0.5">
      {samples.map((s, i) => (
        <div class="bg-white/[0.03] border border-white/[0.07] overflow-hidden hover:border-[#ff4d4d]/30 transition-all duration-300" data-reveal style={`transition-delay:${i * 60}ms`}>
          <div class="aspect-video bg-black/50 flex items-center justify-center border-b border-white/[0.07]">
            <span class="text-[9px] tracking-[0.12em] text-white/30 uppercase font-medium">S1→S2</span>
          </div>
          <div class="p-3">
            <div class="text-[11px] text-white/60 leading-relaxed">{s.label}</div>
            <div class="text-[10px] text-white/40 mt-0.5">{s.caption}</div>
          </div>
        </div>
      ))}
    </div>
  </div>

</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/DatasetSection.astro
git commit -m "feat: create DatasetSection with pipeline, statistics bars, sample grid"
```

---

## Task 8: Create BenchmarkSection.astro

**Files:**
- Create: `src/components/BenchmarkSection.astro`

Content from `site/benchmark.html`. Three benchmark tables: ActCutBench (global + cinematography sub-benches), VistoryBench, VBench.

- [ ] **Step 1: Write BenchmarkSection.astro**

```astro
---
---

<section id="benchmark" class="space-y-12">

  <!-- Section header -->
  <div data-reveal>
    <span class="act-marker">ACT Ⅳ</span>
    <h2 class="text-3xl font-semibold tracking-tight flex items-center gap-3 mt-1">
      <span class="inline-block w-1 h-7 bg-gradient-to-b from-[#ff4d4d] to-[#ffb84d] rounded-sm" style="transform: skewX(-6deg);"></span>
      Benchmark Results
    </h2>
    <p class="text-white/50 text-sm mt-2">ActCutBench, VistoryBench, and VBench evaluation. <span class="text-[#ffb84d]">★</span> = Act2Cut (Ours).</p>
  </div>

  <!-- ActCutBench: Global Content Sub-Bench -->
  <div class="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden" data-reveal style="transition-delay:80ms">
    <div class="p-8 border-b border-white/10">
      <span class="inline-block text-[9px] font-bold tracking-[0.32em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d] border border-[#ff4d4d]/30 px-2.5 py-1 mb-3">ActCutBench — Global Content Sub-Bench</span>
      <p class="text-sm text-white/60 leading-relaxed max-w-2xl">
        Evaluates narrative consistency (NC), visual coherence (VC), action continuity (AC), subject correctness (SC), and aesthetics (Aes) across generated multi-shot sequences. All metrics ↑ higher is better.
      </p>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse text-xs whitespace-nowrap">
        <thead>
          <tr class="text-white/40 border-b border-white/10">
            <th class="px-4 py-3 font-normal text-left" rowspan="2">Method</th>
            <th class="px-4 py-3 font-normal text-left" rowspan="2">Base Model</th>
            <th class="px-3 py-2 text-center text-[9px] tracking-widest text-[#ffb84d]/80 border-b border-[#ffb84d]/20 bg-[#ff4d4d]/5" colspan="5">NC ↑</th>
            <th class="px-3 py-2 text-center text-[9px] tracking-widest text-[#ffb84d]/80 border-b border-[#ffb84d]/20 bg-[#ff4d4d]/5" colspan="4">VC ↑</th>
            <th class="px-3 py-2 text-center text-[9px] tracking-widest text-[#ffb84d]/80 border-b border-[#ffb84d]/20 bg-[#ff4d4d]/5" colspan="2">AC ↑</th>
            <th class="px-3 py-2 text-center text-[9px] tracking-widest text-[#ffb84d]/80 border-b border-[#ffb84d]/20 bg-[#ff4d4d]/5" colspan="2">SC ↑</th>
            <th class="px-3 py-2 text-center font-normal" rowspan="2">Aes ↑</th>
          </tr>
          <tr class="text-white/30 border-b border-white/10 text-center">
            <th class="px-2 py-2 font-normal">Env</th><th class="px-2 py-2 font-normal">Sce</th><th class="px-2 py-2 font-normal">Sty</th><th class="px-2 py-2 font-normal">CS</th><th class="px-2 py-2 font-normal">CA/OM</th>
            <th class="px-2 py-2 font-normal">Env/Sce</th><th class="px-2 py-2 font-normal">Sty</th><th class="px-2 py-2 font-normal">CS</th><th class="px-2 py-2 font-normal">CA/OM</th>
            <th class="px-2 py-2 font-normal">CA</th><th class="px-2 py-2 font-normal">OM</th>
            <th class="px-2 py-2 font-normal">CC</th><th class="px-2 py-2 font-normal">CID</th>
          </tr>
        </thead>
        <tbody class="text-white/60">
          <tr class="bg-white/[0.03] border-b border-white/[0.05]">
            <td class="px-4 py-2 text-[9px] tracking-widest text-white/30 uppercase font-semibold" colspan="15">Open-Source Methods — ActCutBench</td>
          </tr>
          {['HoloCine-14B / Wan2.2-T2V-14B','MSM-1.3B / Wan2.1-TI2V-1.3B','MSM-14B / Wan2.1-T2V-14B'].map(row => {
            const [method, model] = row.split(' / ');
            return (
              <tr class="border-b border-white/[0.05] hover:bg-white/[0.04] transition-colors">
                <td class="px-4 py-3">{method}</td>
                <td class="px-4 py-3 text-white/30 text-[11px]">{model}</td>
                {Array(13).fill(null).map(() => <td class="px-2 py-3 text-center font-mono">—</td>)}
              </tr>
            );
          })}
          <tr class="border-b border-white/[0.05] bg-[#ff4d4d]/[0.08] hover:bg-[#ff4d4d]/[0.12] transition-colors">
            <td class="px-4 py-3 font-bold text-white border-l-2 border-[#ff4d4d]">★ Act2Cut (Ours)</td>
            <td class="px-4 py-3 text-white/50 text-[11px]">Wan2.2-TI2V-5B</td>
            {Array(13).fill(null).map(() => <td class="px-2 py-3 text-center font-mono text-[#ffb84d] font-semibold">—</td>)}
          </tr>
          <tr class="bg-white/[0.03] border-b border-white/[0.05]">
            <td class="px-4 py-2 text-[9px] tracking-widest text-white/30 uppercase font-semibold" colspan="15">ActCutBench-Lite — Ablation</td>
          </tr>
          <tr class="border-b border-white/[0.05] bg-[#ff4d4d]/[0.08]">
            <td class="px-4 py-3 font-bold text-white border-l-2 border-[#ff4d4d]">★ Act2Cut (full)</td>
            <td class="px-4 py-3 text-white/50 text-[11px]">Wan2.2-TI2V-5B</td>
            {Array(13).fill(null).map(() => <td class="px-2 py-3 text-center font-mono text-[#ffb84d] font-semibold">—</td>)}
          </tr>
          {['w/o GLoS-RoPE','w/o TBR','w/o SCM','w/o HCM'].map(ablation => (
            <tr class="border-b border-white/[0.05] hover:bg-white/[0.04] transition-colors">
              <td class="px-4 py-3 text-white/70">{ablation}</td>
              <td class="px-4 py-3 text-white/30 text-[11px]">Wan2.2-TI2V-5B</td>
              {Array(13).fill(null).map(() => <td class="px-2 py-3 text-center font-mono">—</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  <!-- ActCutBench: Cinematography Sub-Bench -->
  <div class="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden" data-reveal style="transition-delay:100ms">
    <div class="p-8 border-b border-white/10">
      <span class="inline-block text-[9px] font-bold tracking-[0.32em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d] border border-[#ff4d4d]/30 px-2.5 py-1 mb-3">ActCutBench — Cinematography Sub-Bench</span>
      <p class="text-sm text-white/60 leading-relaxed max-w-2xl">
        Evaluates adherence to static cinematography (SC), dynamic cinematography (DC), and relation cinematography (RC) specifications per generated shot.
      </p>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse text-xs whitespace-nowrap">
        <thead>
          <tr class="text-white/40 border-b border-white/10">
            <th class="px-4 py-3 font-normal text-left" rowspan="2">Method</th>
            <th class="px-4 py-3 font-normal text-left" rowspan="2">Base Model</th>
            <th class="px-3 py-2 text-center text-[9px] tracking-widest text-[#ffb84d]/80 border-b border-[#ffb84d]/20 bg-[#ff4d4d]/5" colspan="8">Static Cinematography (SC) ↑</th>
            <th class="px-3 py-2 text-center text-[9px] tracking-widest text-[#ffb84d]/80 border-b border-[#ffb84d]/20 bg-[#ff4d4d]/5" colspan="3">Dynamic (DC) ↑</th>
            <th class="px-3 py-2 text-center text-[9px] tracking-widest text-[#ffb84d]/80 border-b border-[#ffb84d]/20 bg-[#ff4d4d]/5" colspan="3">Relation (RC) ↑</th>
          </tr>
          <tr class="text-white/30 border-b border-white/10 text-center">
            {['SS','LT','FF','FV','AE','AA','AD','DoF','CM','CZ','CR','ST','Cont.','Narr.'].map(h => (
              <th class="px-2 py-2 font-normal">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody class="text-white/60">
          <tr class="bg-white/[0.03] border-b border-white/[0.05]">
            <td class="px-4 py-2 text-[9px] tracking-widest text-white/30 uppercase font-semibold" colspan="16">Open-Source Methods — ActCutBench</td>
          </tr>
          {['HoloCine-14B / Wan2.2-T2V-14B','MSM-1.3B / Wan2.1-TI2V-1.3B','MSM-14B / Wan2.1-T2V-14B'].map(row => {
            const [method, model] = row.split(' / ');
            return (
              <tr class="border-b border-white/[0.05] hover:bg-white/[0.04] transition-colors">
                <td class="px-4 py-3">{method}</td>
                <td class="px-4 py-3 text-white/30 text-[11px]">{model}</td>
                {Array(14).fill(null).map(() => <td class="px-2 py-3 text-center font-mono">—</td>)}
              </tr>
            );
          })}
          <tr class="border-b border-white/[0.05] bg-[#ff4d4d]/[0.08] hover:bg-[#ff4d4d]/[0.12] transition-colors">
            <td class="px-4 py-3 font-bold text-white border-l-2 border-[#ff4d4d]">★ Act2Cut (Ours)</td>
            <td class="px-4 py-3 text-white/50 text-[11px]">Wan2.2-TI2V-5B</td>
            {Array(14).fill(null).map(() => <td class="px-2 py-3 text-center font-mono text-[#ffb84d] font-semibold">—</td>)}
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- VistoryBench -->
  <div class="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden" data-reveal style="transition-delay:120ms">
    <div class="p-8 border-b border-white/10">
      <span class="inline-block text-[9px] font-bold tracking-[0.32em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d] border border-[#ff4d4d]/30 px-2.5 py-1 mb-3">VistoryBench — Story Visualization</span>
      <p class="text-sm text-white/60 leading-relaxed max-w-2xl">
        Comprehensive benchmark for story visualization across character consistency, scene coherence, and narrative fidelity metrics.
      </p>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse text-xs whitespace-nowrap">
        <thead>
          <tr class="text-white/40 border-b border-white/10">
            <th class="px-4 py-3 font-normal">Method</th>
            <th class="px-4 py-3 font-normal">Base Model</th>
            <th class="px-4 py-3 font-normal text-center">Char. Consist. ↑</th>
            <th class="px-4 py-3 font-normal text-center">Scene Coher. ↑</th>
            <th class="px-4 py-3 font-normal text-center">Style Consist. ↑</th>
            <th class="px-4 py-3 font-normal text-center">Narrative ↑</th>
            <th class="px-4 py-3 font-normal text-center">Overall ↑</th>
          </tr>
        </thead>
        <tbody class="text-white/60">
          {['HoloCine-14B / Wan2.2-T2V-14B','MSM-14B / Wan2.1-T2V-14B'].map(row => {
            const [method, model] = row.split(' / ');
            return (
              <tr class="border-b border-white/[0.05] hover:bg-white/[0.04] transition-colors">
                <td class="px-4 py-3">{method}</td>
                <td class="px-4 py-3 text-white/30 text-[11px]">{model}</td>
                {Array(5).fill(null).map(() => <td class="px-4 py-3 text-center font-mono">—</td>)}
              </tr>
            );
          })}
          <tr class="border-b border-white/[0.05] bg-[#ff4d4d]/[0.08]">
            <td class="px-4 py-3 font-bold text-white border-l-2 border-[#ff4d4d]">★ Act2Cut (Ours)</td>
            <td class="px-4 py-3 text-white/50 text-[11px]">Wan2.2-TI2V-5B</td>
            {Array(5).fill(null).map(() => <td class="px-4 py-3 text-center font-mono text-[#ffb84d] font-semibold">—</td>)}
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- VBench -->
  <div class="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden" data-reveal style="transition-delay:140ms">
    <div class="p-8 border-b border-white/10">
      <span class="inline-block text-[9px] font-bold tracking-[0.32em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#ffb84d] border border-[#ff4d4d]/30 px-2.5 py-1 mb-3">VBench — Video Quality</span>
      <p class="text-sm text-white/60 leading-relaxed max-w-2xl">
        Holistic evaluation covering video quality, semantic alignment, temporal consistency, and perceptual fidelity for generated video sequences.
      </p>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse text-xs whitespace-nowrap">
        <thead>
          <tr class="text-white/40 border-b border-white/10">
            <th class="px-4 py-3 font-normal">Method</th>
            <th class="px-4 py-3 font-normal">Base Model</th>
            <th class="px-4 py-3 font-normal text-center">Quality ↑</th>
            <th class="px-4 py-3 font-normal text-center">Semantic ↑</th>
            <th class="px-4 py-3 font-normal text-center">Temporal ↑</th>
            <th class="px-4 py-3 font-normal text-center">Aesthetic ↑</th>
            <th class="px-4 py-3 font-normal text-center">Total ↑</th>
          </tr>
        </thead>
        <tbody class="text-white/60">
          {['HoloCine-14B / Wan2.2-T2V-14B','MSM-14B / Wan2.1-T2V-14B'].map(row => {
            const [method, model] = row.split(' / ');
            return (
              <tr class="border-b border-white/[0.05] hover:bg-white/[0.04] transition-colors">
                <td class="px-4 py-3">{method}</td>
                <td class="px-4 py-3 text-white/30 text-[11px]">{model}</td>
                {Array(5).fill(null).map(() => <td class="px-4 py-3 text-center font-mono">—</td>)}
              </tr>
            );
          })}
          <tr class="bg-[#ff4d4d]/[0.08]">
            <td class="px-4 py-3 font-bold text-white border-l-2 border-[#ff4d4d]">★ Act2Cut (Ours)</td>
            <td class="px-4 py-3 text-white/50 text-[11px]">Wan2.2-TI2V-5B</td>
            {Array(5).fill(null).map(() => <td class="px-4 py-3 text-center font-mono text-[#ffb84d] font-semibold">—</td>)}
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Chart placeholder -->
    <div class="p-8 border-t border-white/[0.05]">
      <div class="rounded-2xl border border-white/[0.07] bg-white/[0.02] h-48 flex flex-col items-center justify-center gap-2 text-white/20">
        <span class="text-[9px] tracking-[0.25em] uppercase font-semibold">Metric Visualization Chart</span>
        <span class="text-[10px] text-white/15">Replace with radar / bar chart when data is available</span>
      </div>
    </div>
  </div>

</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/BenchmarkSection.astro
git commit -m "feat: create BenchmarkSection with ActCutBench, VistoryBench, VBench tables"
```

---

## Task 9: Create CitationSection.astro

**Files:**
- Create: `src/components/CitationSection.astro`

Content extracted from `src/pages/index.astro` lines 332–348.

- [ ] **Step 1: Write CitationSection.astro**

```astro
---
---

<section id="citation" class="space-y-6 pb-24">
  <div data-reveal>
    <span class="act-marker">ACT Ⅴ</span>
    <h2 class="text-3xl font-semibold tracking-tight mt-1">BibTeX</h2>
  </div>

  <div class="rounded-3xl p-8 border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl relative group" data-reveal style="transition-delay:80ms">
    <!-- Light leak -->
    <div class="absolute -bottom-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
      style="background: radial-gradient(circle, rgba(255,184,77,0.1) 0%, transparent 70%); mix-blend-mode: screen;"></div>

    <div class="absolute top-4 right-4 bg-white/10 hover:bg-white/20 cursor-pointer p-2 rounded-lg backdrop-blur-sm transition-colors border border-white/10" id="copy-bibtex" title="Copy BibTeX">
      <svg class="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
    </div>
    <pre id="bibtex-content" class="text-xs md:text-sm font-mono text-white/70 overflow-x-auto pt-2"><code>@article&#123;zhuang2026act2cut,
  title=&#123;Act2Cut: Continuous Next-Shot Video Narrative Match on Action-Cut&#125;,
  author=&#123;Zhuang, Cailin and Hu, Yaoqi and Dong, Zheng and Zhang, Shiwen and Huang, Haibin and Zhang, Chi and Li, Xuelong&#125;,
  journal=&#123;ACM Transactions on Graphics (TOG)&#125;,
  volume=&#123;1&#125;,
  number=&#123;1&#125;,
  year=&#123;2026&#125;,
  publisher=&#123;ACM New York, NY, USA&#125;
&#125;</code></pre>
  </div>
</section>

<script>
  document.getElementById('copy-bibtex')?.addEventListener('click', () => {
    const text = document.getElementById('bibtex-content')?.textContent ?? '';
    navigator.clipboard.writeText(text);
  });
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/CitationSection.astro
git commit -m "feat: create CitationSection with act marker and copy button"
```

---

## Task 10: Refactor index.astro into thin orchestrator

**Files:**
- Modify: `src/pages/index.astro`

Remove all inline content. Import and compose the 6 section components + Navigation.

- [ ] **Step 1: Replace index.astro entirely**

```astro
---
import Layout from '../layouts/Layout.astro';
import Navigation from '../components/Navigation.astro';
import HeroSection from '../components/HeroSection.astro';
import AbstractSection from '../components/AbstractSection.astro';
import OverviewSection from '../components/OverviewSection.astro';
import DatasetSection from '../components/DatasetSection.astro';
import BenchmarkSection from '../components/BenchmarkSection.astro';
import CitationSection from '../components/CitationSection.astro';
---

<Layout title="Act2Cut: Continuous Next-Shot Video Narrative Match on Action-Cut">
  <Navigation />
  <main class="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 flex flex-col gap-16 relative z-10">
    <HeroSection />
    <AbstractSection />
    <OverviewSection />
    <DatasetSection />
    <BenchmarkSection />
    <CitationSection />
  </main>
</Layout>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/index.astro
git commit -m "refactor: index.astro into thin orchestrator composing section components"
```

---

## Task 11: Start dev server and verify

**Files:** None (verification only)

- [ ] **Step 1: Install deps and start dev server**

```bash
cd /Users/huyaoqi/Documents/act2cut/act2cut-website && npm install && npm run dev
```

Expected: Dev server starts at `http://localhost:4321` with no build errors.

- [ ] **Step 2: Open browser and verify**

Visit `http://localhost:4321`. Verify:
- Navigation is sticky at top with Act2Cut logo
- Clicking nav links scrolls to correct sections
- Scrolling down highlights the active nav item
- All 6 sections are visible: Abstract, Overview, Dataset, Benchmark, Citation
- Film grain is visibly animated (slight movement)
- Vignette is visible at page corners
- Cards animate in on scroll (opacity + translateY)
- Stat bars in DatasetSection animate their width when scrolled into view
- Tab switching works in OverviewSection (T2V / I2V / V2V)
- Letterbox bars are visible on the hero video
- Timecode `00:00:24:00` is visible bottom-right of hero (faint)

- [ ] **Step 3: Fix any console errors, then commit**

```bash
git add -A
git commit -m "fix: resolve any dev server warnings"
```

---

## Self-Review Checklist

**Spec coverage:**
- ✅ Component refactor (Option B) — Task 10
- ✅ Navigation with scroll-spy — Task 3
- ✅ Animated film grain — Task 2 (Layout.astro)
- ✅ Global vignette — Task 2 (Layout.astro)
- ✅ Scanlines — Task 2 (Layout.astro)
- ✅ Projector flicker — Task 4 (HeroSection.astro), CSS in Task 1
- ✅ Letterbox bars — Task 4
- ✅ Timecode — Task 4
- ✅ Act markers — Tasks 5–9
- ✅ Skewed title accent — Tasks 5–9
- ✅ Chromatic aberration hover — Task 1 (`.chroma-hover`), Task 6
- ✅ Light leak — Tasks 4, 9
- ✅ Cinematic scroll reveal (800ms, cubic-bezier, stagger) — Tasks 1+2
- ✅ Film-strip dividers — Tasks 7, 6
- ✅ Overview method cards (full descriptions from site/) — Task 6
- ✅ Filmstrip qualitative results (T01–T10, I01–I10, V01–V10) — Task 6
- ✅ Dataset pipeline (5 steps) — Task 7
- ✅ Statistics bars (3 groups, animated fill) — Task 7
- ✅ Sample grid (8 samples) — Task 7
- ✅ ActCutBench global + cinematography tables — Task 8
- ✅ VistoryBench table — Task 8
- ✅ VBench table + chart placeholder — Task 8

**Type consistency:** `data-reveal` used consistently; `.stat-bar-fill` + `--fill-w` CSS var used in Task 1 and Task 7; `.film-strip-divider` defined in Task 1 and used in Tasks 6+7; `.act-marker` defined in Task 1 and used in Tasks 5–9.
