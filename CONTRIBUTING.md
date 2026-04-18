# Contributing to the Hop AI Design System

This repo is the single source of truth for how Hop AI content looks. Changes here cascade into every client deliverable, internal tool, and marketing asset we ship.

## When to update this repo

Update when you are:

- Adding or changing a brand color, font, or spacing value
- Introducing a new component pattern (e.g., a new card variant, a new chart style)
- Adding a new template that reflects a proven, repeatable layout
- Updating the logo or swapping in a new asset

## When NOT to update this repo

- One-off client customizations → keep those in the client's deliverable, not here
- Experiments → iterate in an artifact or a client project first, promote here once it's battle-tested
- Personal style preferences → this is a shared system

## Workflow

1. Create a branch: `git checkout -b feature/your-change`
2. Make the change in the appropriate folder (`tokens/`, `components/`, `templates/`, `docs/`)
3. Open the HTML file in a browser to visually verify
4. Update the README or relevant doc if the change affects how the system is used
5. Open a PR with a before/after screenshot

## File structure conventions

- **`tokens/`** — variables only. No components, no layouts.
- **`components/`** — self-contained, reusable UI primitives. One concept per file.
- **`templates/`** — full-page examples showing how tokens + components combine.
- **`docs/`** — format-specific guidance (HTML, PPTX, DOCX, PDF, SVG, Markdown).
- **`assets/`** — logos and brand asset files.

## Design principles

Every change should reinforce the brand feeling: **energetic, intentional, transparent**.

- Red (`#FE3D3E`) and purple (`#7D3EFE`) are accents, not backgrounds. Use them to direct attention.
- Dark navy (`#282A3E`) carries the weight of the brand. Use it for text and for dark hero sections.
- Fresh mint (`#97EAD2`) is a highlight — never a primary surface.
- Work Sans is confident, not decorative. Keep headings tight (letter-spacing: -0.01em).
- Inter is quiet. Let the content do the talking.

## Release

No formal versioning yet. Bump `package.json` version on material changes and tag the commit.
