# Accessibility Checklist

Every Hop AI visual output must meet **WCAG 2.1 AA** standards. Use this checklist before shipping.

## Color and contrast

- [ ] Text contrast ratio ≥ **4.5:1** against its background (large text ≥ 3:1)
- [ ] Never rely on color alone to convey meaning — always pair with icons, labels, or text
- [ ] Status colors (success, warning, error) always have a text or icon equivalent
- [ ] Primary text uses `#282A3E` on light backgrounds, `#FFFFFF` on dark
- [ ] Muted text (`#6B7280`) is used only where it passes contrast against its surface

## Focus and interaction

- [ ] All interactive elements have visible focus states (`2px solid #7D3EFE` outline, 2px offset)
- [ ] Focus order follows logical reading order
- [ ] Clickable targets are at least 44×44px (mobile) / 24×24px (desktop dense UI)
- [ ] Hover states are reinforced by focus states (never hover-only)

## Typography

- [ ] Body text is at least 16px (1rem)
- [ ] Line height is at least 1.5 for body, 1.2 for headings
- [ ] Text scales to 200% without layout breakage or clipping
- [ ] No justified text (creates uneven word spacing)
- [ ] Paragraph width ≤ 80 characters where possible

## Motion

- [ ] Animations respect `prefers-reduced-motion: reduce`
- [ ] No auto-playing video with sound
- [ ] No flashing content faster than 3Hz
- [ ] Parallax and scroll-triggered effects have reduced-motion fallbacks

## Semantic structure

- [ ] One `<h1>` per page
- [ ] Heading levels don't skip (no `<h3>` following `<h1>` with no `<h2>`)
- [ ] Landmark elements used: `<header>`, `<main>`, `<nav>`, `<footer>`
- [ ] Form inputs have associated `<label>` elements
- [ ] Buttons use `<button>`, links use `<a>` — never swap

## Images and media

- [ ] All images have `alt` text (empty `alt=""` for decorative)
- [ ] SVG icons have `aria-hidden="true"` when decorative, or `<title>` when informative
- [ ] Charts and data viz have text equivalents (table, caption, or description)
- [ ] Logos have alt text: `alt="Hop AI"` (not "logo" or "image")

## Forms

- [ ] Every input has a visible, persistent label
- [ ] Required fields are marked with text, not just `*`
- [ ] Error messages are linked via `aria-describedby`
- [ ] Inputs have `autocomplete` hints where appropriate

## Reduced-motion CSS snippet

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Testing tools

- **Browser**: Lighthouse (Chrome DevTools → Lighthouse → Accessibility)
- **Contrast**: WebAIM Contrast Checker
- **Screen reader**: VoiceOver (macOS, Cmd+F5) or NVDA (Windows)
- **Keyboard**: Tab through every interactive element, check focus visibility
