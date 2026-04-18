# Hop AI Brand: Markdown Reference

## When This Applies

Markdown files don't have native styling, but the Hop AI brand still applies in two ways:

1. **Structure and tone**: Use clear hierarchies, concise language, and brand terminology
2. **Embedded HTML**: When rendering in contexts that support HTML in Markdown (e.g., GitHub,
   rendered documentation), use inline styles with brand colors

## Document Structure

Follow this structure for branded Markdown reports:

```markdown
# [Title in Title Case]

**Prepared by Hop AI** | [Date]

---

## Executive Summary

[1-2 paragraphs max]

## [Section 1]

### [Subsection]

[Content]

## [Section 2]

[Content]

---

*Confidential — Hop AI*
```

## Styled HTML Blocks (for rich Markdown)

When the Markdown will be rendered in a context that supports HTML:

### Callout Box

```html
<div style="background: #F9FAFB; border-left: 4px solid #FE3D3E; padding: 16px 20px; border-radius: 0 8px 8px 0; margin: 16px 0;">
  <strong style="color: #282A3E; font-size: 14px;">Key Insight</strong><br>
  <span style="color: #6B7280; font-size: 14px;">Your callout text here.</span>
</div>
```

### Metric Highlight

```html
<div style="text-align: center; padding: 24px;">
  <span style="font-size: 48px; font-weight: 800; color: #FE3D3E;">42%</span><br>
  <span style="color: #6B7280; font-size: 14px;">Increase in conversion rate</span>
</div>
```

### Colored Badge

```html
<span style="background: #7D3EFE; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 500;">New Feature</span>
```

## Table Formatting

Keep tables clean and minimal:

```markdown
| Metric           | Q1 2026 | Q2 2026 | Change |
|------------------|---------|---------|--------|
| Organic Traffic  | 12,400  | 15,800  | +27%   |
| Conversion Rate  | 3.2%    | 4.1%    | +28%   |
| MQL Volume       | 340     | 425     | +25%   |
```

## Brand Terminology

When writing Markdown content for Hop AI, prefer these terms:

- "AI-first" (not "AI-powered" or "AI-driven")
- "intelligent automation" (not just "automation")
- "human-first" (when emphasizing the human element)
- "campaigns that convert" (not "marketing campaigns")
- "exponential impact" (for results/outcomes)
