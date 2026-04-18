# Hop AI Design System

The official design system for Hop AI — the agency accelerating how B2B marketers leverage AI to create, distribute, and optimize campaigns that convert.

Every visual output should feel **energetic, intentional, and transparent** — a visual embodiment of "smart, human AI."

---

## Quick start

For any HTML/CSS output, drop in the tokens file:

```html
<link rel="stylesheet" href="tokens/colors.css">
<link rel="stylesheet" href="tokens/typography.css">
```

For Tailwind projects, extend with our preset:

```js
// tailwind.config.js
const hopAI = require('./tokens/tailwind.config.js');
module.exports = { presets: [hopAI], /* ... */ };
```

---

## Brand foundations

### Color palette

**Brand accents** (use for CTAs, highlights, supporting accents)

| Token | HEX | Use |
|---|---|---|
| `--brand-primary` | `#FE3D3E` | Buttons, links, highlights, CTAs |
| `--brand-secondary` | `#7D3EFE` | Supporting accent, focus states |
| `--brand-tertiary` | `#97EAD2` | Fresh accent, highlights, tags |

**Text**

| Token | HEX | Use |
|---|---|---|
| `--text-primary` | `#282A3E` | Main body and headings |
| `--text-secondary` | `#6B7280` | Muted / secondary text |

**Surfaces**

| Token | HEX | Use |
|---|---|---|
| `--bg-surface` | `#FFFFFF` | Primary background |
| `--bg-elevated` | `#F9FAFB` | Cards, modals, panels |
| `--border-default` | `#E5E7EB` | Dividers, outlines |

**Tinted section backgrounds** (use sparingly)

| HEX | Use |
|---|---|
| `#F4F4F5` | Neutral light gray sections |
| `#FFF5F5` | Warm / primary-tinted |
| `#F8F5FF` | Cool / secondary-tinted |
| `#FAFEFD` | Fresh / tertiary-tinted |

### Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| H1 | Work Sans | 800 | 60px / 3.75rem |
| H2 | Work Sans | 700 | 50px / 3rem |
| H3 | Work Sans | 600 | 30px / 1.875rem |
| Body | Inter | 400 | 16px / 1rem |
| Label | Inter | 500 | 14px / 0.875rem |

- Line height: 1.5 body, 1.2 headings
- Letter spacing: -0.01em headings, normal body
- Heading color: always `#282A3E`

Load from Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700;800&family=Inter:wght@400;500&display=swap" rel="stylesheet">
```

### Spacing scale

| Token | Value |
|---|---|
| `--space-xs` | 4px |
| `--space-sm` | 8px |
| `--space-md` | 16px |
| `--space-lg` | 24px |
| `--space-xl` | 32px |
| `--space-2xl` | 48px |

### Radius

- `--radius-sm`: 5px (buttons, inputs)
- `--radius-md`: 8px (cards)
- `--radius-lg`: 12px (hero panels)

### Shadow

- `--shadow-sm`: `0 1px 2px rgba(0,0,0,0.05)`
- `--shadow-md`: `0 4px 8px rgba(0,0,0,0.08)`

---

## Components

Working HTML examples live in `/components`:

- `buttons.html` — primary, secondary, ghost
- `cards.html` — card variants (standard, stat, feature)
- `hero-dark.html` — dark hero section pattern
- `data-viz-palette.html` — chart color reference

---

## Templates

Full-page examples of real Hop AI work live in `/templates`. These are the canonical reference for how tokens combine into finished layouts:

- `report-page.html` — AI visibility / GEO report layout
- `battlecard.html` — GEOforge vs. competitor comparison page
- `calculator.html` — interactive ROI calculator

---

## Data visualization palette

Use this ordered palette for charts (Recharts, Chart.js, D3):

1. `#FE3D3E` — primary / most important
2. `#7D3EFE` — secondary
3. `#97EAD2` — tertiary
4. `#282A3E` — fourth series
5. `#6B7280` — baseline / muted

Gradient for hero sections and chart backgrounds: primary → secondary (`#FE3D3E` → `#7D3EFE`).

---

## Logo

The Hop AI logo (`/assets/hop-ai-logo.png`) is dark navy (`#282A3E`) with three circles of decreasing size and a script "ai" letterform.

- Minimum display width: 40px
- Clear space: ≥ 50% of logo width on all sides
- Light backgrounds: use as-is
- Dark backgrounds: invert to white variant
- Never stretch, rotate, or recolor outside dark/white variants

---

## Accessibility

Every output must meet these standards:

1. Text contrast ratio ≥ 4.5:1 against its background (WCAG 2.1 AA)
2. Focus states visible — use `#7D3EFE` for focus rings
3. Text scalable to 200% without layout breakage
4. Never use color alone for status or feedback — pair with icons or text
5. Respect `prefers-reduced-motion` in CSS animations

---

## Format-specific guides

Detailed reference for each output format:

- `/docs/html-react.md` — HTML pages, React components, Tailwind
- `/docs/pptx.md` — PowerPoint presentations
- `/docs/docx.md` — Word documents and reports
- `/docs/pdf.md` — PDF documents
- `/docs/svg.md` — SVG graphics and infographics
- `/docs/markdown.md` — Markdown reports
- `/docs/accessibility.md` — WCAG checklist

---

## About

Built by [Hop AI](https://hopai.com) — a B2B agency specializing in Generative Engine Optimization (GEO), paid media, and AI transformation. Based in Sofia, Bulgaria. Founded 2009.
