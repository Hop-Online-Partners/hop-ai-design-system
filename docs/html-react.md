# Hop AI Brand: HTML & React Reference

## HTML Boilerplate

Every standalone HTML page should start with this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hop AI — [Page Title]</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700;800&family=Inter:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --brand-primary: #FE3D3E;
      --brand-secondary: #7D3EFE;
      --brand-tertiary: #97EAD2;
      --text-primary: #282A3E;
      --text-secondary: #6B7280;
      --bg-surface: #FFFFFF;
      --bg-elevated: #F9FAFB;
      --border-default: #E5E7EB;
      --font-heading: 'Work Sans', Arial, Helvetica, sans-serif;
      --font-body: 'Inter', -apple-system, 'Segoe UI', sans-serif;
      --radius-sm: 5px;
      --radius-md: 8px;
      --radius-lg: 12px;
      --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
      --shadow-md: 0 4px 8px rgba(0,0,0,0.08);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: var(--font-body);
      color: var(--text-primary);
      background: var(--bg-surface);
      font-size: 16px;
      line-height: 1.5;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-heading);
      color: var(--text-primary);
      line-height: 1.2;
      letter-spacing: -0.01em;
    }

    h1 { font-size: 3.75rem; font-weight: 800; }
    h2 { font-size: 3rem; font-weight: 700; }
    h3 { font-size: 1.875rem; font-weight: 600; }

    a { color: var(--brand-primary); text-decoration: none; }
    a:hover { text-decoration: underline; }

    .btn-primary {
      background: var(--brand-primary);
      color: #fff;
      padding: 12px 24px;
      border: none;
      border-radius: var(--radius-sm);
      font-family: var(--font-body);
      font-weight: 500;
      font-size: 0.875rem;
      cursor: pointer;
      transition: opacity 0.2s;
    }
    .btn-primary:hover { opacity: 0.9; }

    .btn-secondary {
      background: var(--brand-secondary);
      color: #fff;
      padding: 12px 24px;
      border: none;
      border-radius: var(--radius-sm);
      font-family: var(--font-body);
      font-weight: 500;
      font-size: 0.875rem;
      cursor: pointer;
    }

    .btn-ghost {
      background: transparent;
      color: var(--brand-primary);
      padding: 12px 24px;
      border: 1px solid var(--brand-primary);
      border-radius: var(--radius-sm);
      font-family: var(--font-body);
      font-weight: 500;
      cursor: pointer;
    }

    .card {
      background: var(--bg-surface);
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-md);
      padding: 24px;
    }

    .text-muted { color: var(--text-secondary); }

    /* Accessibility */
    :focus-visible {
      outline: 2px solid var(--brand-secondary);
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      * { animation: none !important; transition: none !important; }
    }
  </style>
</head>
<body>
  <!-- Content here -->
</body>
</html>
```

## React Component Pattern

When building React (.jsx) components, use inline styles or a style object with the
brand tokens. Since Tailwind core utilities are available in the artifact environment,
you can also use Tailwind classes — but map them to the brand colors.

```jsx
import { useState } from "react";

const theme = {
  colors: {
    primary: "#FE3D3E",
    secondary: "#7D3EFE",
    tertiary: "#97EAD2",
    textPrimary: "#282A3E",
    textSecondary: "#6B7280",
    bgSurface: "#FFFFFF",
    bgElevated: "#F9FAFB",
    border: "#E5E7EB",
  },
  fonts: {
    heading: "'Work Sans', Arial, sans-serif",
    body: "'Inter', system-ui, sans-serif",
  },
};

export default function HopComponent() {
  return (
    <div style={{ fontFamily: theme.fonts.body, color: theme.colors.textPrimary }}>
      <h1 style={{
        fontFamily: theme.fonts.heading,
        fontWeight: 800,
        fontSize: "3.75rem",
        lineHeight: 1.2,
        letterSpacing: "-0.01em"
      }}>
        Heading
      </h1>
      <p style={{ fontSize: "1rem", lineHeight: 1.5 }}>Body text</p>
      <button style={{
        background: theme.colors.primary,
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "12px 24px",
        fontFamily: theme.fonts.body,
        fontWeight: 500,
        cursor: "pointer",
      }}>
        Get Started
      </button>
    </div>
  );
}
```

## Data Visualization Colors

When building charts (Recharts, Chart.js, D3), use this ordered palette:

1. `#FE3D3E` (primary red) — first series / most important
2. `#7D3EFE` (secondary purple) — second series
3. `#97EAD2` (tertiary mint) — third series
4. `#282A3E` (dark navy) — fourth series
5. `#6B7280` (muted gray) — fifth series / baseline

For gradients: primary → secondary (`#FE3D3E` → `#7D3EFE`) works well for hero
sections and chart backgrounds.

## Layout Patterns

- **Max content width**: 1200px, centered with auto margins
- **Section padding**: 48px (space-2xl) vertical, 24px (space-lg) horizontal
- **Card grid**: Use CSS Grid with `gap: 24px`, columns `repeat(auto-fit, minmax(300px, 1fr))`
- **Header**: Dark navy `#282A3E` background with white text, or white background with navy text
- **Footer**: `#F9FAFB` background with `#6B7280` text

## Dark Sections

For hero banners or feature sections on dark backgrounds:

```css
.dark-section {
  background: #282A3E;
  color: #FFFFFF;
}
.dark-section h1,
.dark-section h2 { color: #FFFFFF; }
.dark-section .text-muted { color: #97EAD2; }
.dark-section .btn-primary { background: #FE3D3E; }
```
