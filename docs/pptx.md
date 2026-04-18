# Hop AI Brand: PowerPoint (PPTX) Reference

## Bundled Template

The branded PPTX template is at `assets/hop-ai-template.pptx`. Always use it as the
starting point for any presentation. It has 12 slide layouts pre-configured with the
correct fonts, colors, and placeholders.

## How to Use the Template

```python
from pptx import Presentation

# Always start from the branded template
prs = Presentation('path/to/skill/assets/hop-ai-template.pptx')
```

Do NOT create presentations from scratch with `Presentation()` — always load the template
so fonts, masters, and layouts are inherited correctly.

## Slide Dimensions

- Width: 10.0 inches (914400 EMU per inch)
- Height: 5.625 inches
- Aspect ratio: 16:9

## Available Layouts

The template provides these layouts (by index):

| Index | Name              | Use                                      |
|-------|-------------------|------------------------------------------|
| 0     | Title Slide       | Opening/cover slide with hero text       |
| 1     | Section Header    | Divider between major sections           |
| 2     | Title + Body      | Standard content slide                   |
| 3     | Two-Column        | Side-by-side content                     |
| 4     | Title Only        | Slide with just a title, free-form body  |
| 5     | Text-Focused      | Text-heavy content                       |
| 6     | Main Point        | Single key message or statistic          |
| 7     | Section Intro     | Section opener with description          |
| 8     | Caption Only      | Minimal text, image-focused              |
| 9     | Big Number        | Large statistic or metric callout        |
| 10    | Blank             | Empty slide for custom layouts           |
| 11    | Custom Grid       | Complex multi-element layouts            |

## Color Values for python-pptx

```python
from pptx.dml.color import RGBColor

# Brand colors
PRIMARY     = RGBColor(0xFE, 0x3D, 0x3E)  # #FE3D3E - Red
SECONDARY   = RGBColor(0x7D, 0x3E, 0xFE)  # #7D3EFE - Purple
TERTIARY    = RGBColor(0x97, 0xEA, 0xD2)  # #97EAD2 - Mint

# Text colors
TEXT_PRIMARY   = RGBColor(0x28, 0x2A, 0x3E)  # #282A3E - Dark navy
TEXT_SECONDARY = RGBColor(0x6B, 0x72, 0x80)  # #6B7280 - Muted gray

# Backgrounds
BG_SURFACE   = RGBColor(0xFF, 0xFF, 0xFF)  # #FFFFFF
BG_ELEVATED  = RGBColor(0xF9, 0xFA, 0xFB)  # #F9FAFB
BORDER       = RGBColor(0xE5, 0xE7, 0xEB)  # #E5E7EB

# Tinted section backgrounds
BG_NEUTRAL   = RGBColor(0xF4, 0xF4, 0xF5)  # #F4F4F5
BG_WARM      = RGBColor(0xFF, 0xF5, 0xF5)  # #FFF5F5
BG_COOL      = RGBColor(0xF8, 0xF5, 0xFF)  # #F8F5FF
BG_FRESH     = RGBColor(0xFA, 0xFE, 0xFD)  # #FAFEFD
WHITE        = RGBColor(0xFF, 0xFF, 0xFF)
```

## Typography in Slides

### Font Assignments

| Element         | Font        | Weight    | Size (pt) |
|-----------------|-------------|-----------|-----------|
| Slide title     | Work Sans   | Bold (700)| 49        |
| Section header  | Work Sans   | SemiBold  | 27        |
| Subtitle        | Work Sans   | Regular   | 19        |
| Body text       | Inter       | Regular   | 12        |
| Captions/labels | Inter       | Regular   | 10        |
| Small text      | Inter       | Regular   | 7         |

### Applying Fonts in Code

```python
from pptx.util import Pt

def style_heading(run, size_pt=49):
    run.font.name = 'Work Sans'
    run.font.size = Pt(size_pt)
    run.font.bold = True
    run.font.color.rgb = TEXT_PRIMARY

def style_body(run, size_pt=12):
    run.font.name = 'Inter'
    run.font.size = Pt(size_pt)
    run.font.bold = False
    run.font.color.rgb = TEXT_PRIMARY

def style_caption(run, size_pt=10):
    run.font.name = 'Inter'
    run.font.size = Pt(size_pt)
    run.font.color.rgb = TEXT_SECONDARY
```

## Adding the Logo

```python
from pptx.util import Inches

# Add logo to top-left of a slide
slide.shapes.add_picture(
    'path/to/skill/assets/hop-ai-logo.png',
    left=Inches(0.4),
    top=Inches(0.3),
    width=Inches(0.6)  # Height auto-scales
)
```

Place the logo on the title slide and the closing slide at minimum. Keep it small
(~0.5-0.7 inches wide) and in the top-left or bottom-left corner.

## Content Margins

- Left margin: 0.5 inches from slide edge
- Right margin: 0.5 inches from slide edge
- Top margin: 0.48 inches from slide edge
- Max content width: ~9.0 inches
- Spacing between elements: ~0.25 inches

## Slide Design Patterns

### Title Slide
- Large hero heading in Work Sans 800, centered or left-aligned
- Subtitle in Work Sans 400, muted color
- Optional background image or tinted background
- Logo in corner

### Content Slide
- Title at top in Work Sans Bold
- Body text in Inter Regular
- Use bullet points sparingly — prefer short statements
- Accent-colored shapes for callouts

### Data/Metric Slide
- Use the Big Number layout (index 9) for KPIs
- Large number in Work Sans 800, colored with brand.primary
- Label in Inter beneath
- Use tertiary color for positive metrics, primary for urgent ones

### Section Divider
- Use Section Header layout (index 1)
- Tinted background from the tinted palette
- Bold section name centered

## Accent Shape Colors

When adding decorative shapes, cycle through these:
1. `#FE3D3E` — primary red
2. `#7D3EFE` — secondary purple
3. `#97EAD2` — tertiary mint

Use `#282A3E` (dark navy) for backgrounds on dark-themed slides.
