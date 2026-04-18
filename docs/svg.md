# Hop AI Brand: SVG Reference

## Color Definitions

Start every SVG with brand color definitions:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs>
    <!-- Brand Colors -->
    <style>
      .brand-primary { fill: #FE3D3E; }
      .brand-secondary { fill: #7D3EFE; }
      .brand-tertiary { fill: #97EAD2; }
      .text-primary { fill: #282A3E; }
      .text-secondary { fill: #6B7280; }
      .bg-surface { fill: #FFFFFF; }
      .bg-elevated { fill: #F9FAFB; }
      .border-default { stroke: #E5E7EB; fill: none; }
    </style>

    <!-- Gradient: Primary to Secondary -->
    <linearGradient id="brand-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FE3D3E" />
      <stop offset="100%" stop-color="#7D3EFE" />
    </linearGradient>

    <!-- Shadow filter -->
    <filter id="shadow-md">
      <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.08"/>
    </filter>
  </defs>
</svg>
```

## Typography

Use Google Fonts import for Work Sans and Inter:

```xml
<defs>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700;800&amp;family=Inter:wght@400;500&amp;display=swap');

    .heading { font-family: 'Work Sans', Arial, sans-serif; font-weight: 700; fill: #282A3E; }
    .body { font-family: 'Inter', system-ui, sans-serif; font-weight: 400; fill: #282A3E; }
    .caption { font-family: 'Inter', system-ui, sans-serif; font-weight: 400; fill: #6B7280; }
  </style>
</defs>
```

### Type Scale for SVG

| Role    | Class     | font-size |
|---------|-----------|-----------|
| Title   | .heading  | 48px      |
| H2      | .heading  | 36px      |
| H3      | .heading  | 24px      |
| Body    | .body     | 16px      |
| Caption | .caption  | 12px      |

## Chart / Data Viz Palette

For pie charts, bar charts, and diagrams, use colors in this order:

```xml
<!-- Series 1 --> <rect fill="#FE3D3E" />
<!-- Series 2 --> <rect fill="#7D3EFE" />
<!-- Series 3 --> <rect fill="#97EAD2" />
<!-- Series 4 --> <rect fill="#282A3E" />
<!-- Series 5 --> <rect fill="#6B7280" />
<!-- Series 6 --> <rect fill="#E5E7EB" />
```

## Component Patterns

### Card

```xml
<g>
  <rect x="20" y="20" width="300" height="200" rx="8" ry="8"
        fill="#FFFFFF" stroke="#E5E7EB" filter="url(#shadow-md)" />
  <text x="40" y="60" class="heading" font-size="24">Card Title</text>
  <text x="40" y="90" class="body" font-size="16">Card body text here.</text>
</g>
```

### Button

```xml
<g>
  <rect x="20" y="20" width="160" height="44" rx="5" fill="#FE3D3E" />
  <text x="100" y="47" text-anchor="middle"
        font-family="Inter" font-size="14" font-weight="500" fill="#FFFFFF">
    Get Started
  </text>
</g>
```

### Accent Divider

```xml
<line x1="0" y1="100" x2="800" y2="100" stroke="#FE3D3E" stroke-width="2" />
```

## Infographic Layout

For infographics, use a 800x1200 viewport (portrait) or 1200x800 (landscape):

- Title at top: Work Sans 800, 48px
- Sections separated by accent lines or alternating tinted backgrounds
- Key metrics: Large numbers in Work Sans 800 + brand.primary color
- Icons: Filled style, `#282A3E` color, abstract/neobrutalist aesthetic
- Footer: Logo + caption text in `#6B7280`
