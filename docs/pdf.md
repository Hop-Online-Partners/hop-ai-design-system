# Hop AI Brand: PDF Reference

## Library Choice

Use **reportlab** for creating PDFs from scratch. Use **fpdf2** as an alternative if
reportlab is unavailable.

## Color Values for ReportLab

```python
from reportlab.lib.colors import HexColor

PRIMARY       = HexColor('#FE3D3E')
SECONDARY     = HexColor('#7D3EFE')
TERTIARY      = HexColor('#97EAD2')
TEXT_PRIMARY   = HexColor('#282A3E')
TEXT_SECONDARY = HexColor('#6B7280')
BG_SURFACE    = HexColor('#FFFFFF')
BG_ELEVATED   = HexColor('#F9FAFB')
BORDER        = HexColor('#E5E7EB')
```

## Typography in PDFs

### Font Registration

```python
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

# Register Work Sans and Inter if .ttf files are available
# Otherwise fall back to Helvetica (headings) and Helvetica (body)

FONT_HEADING = 'Helvetica-Bold'  # Fallback for Work Sans
FONT_BODY = 'Helvetica'          # Fallback for Inter

# If Google Fonts are installed:
# pdfmetrics.registerFont(TTFont('WorkSans', 'WorkSans-Bold.ttf'))
# pdfmetrics.registerFont(TTFont('Inter', 'Inter-Regular.ttf'))
# FONT_HEADING = 'WorkSans'
# FONT_BODY = 'Inter'
```

### Type Scale for PDFs

| Element    | Font           | Size (pt) | Color        |
|------------|----------------|-----------|--------------|
| Title      | Heading font   | 28        | text.primary |
| Heading 1  | Heading font   | 20        | text.primary |
| Heading 2  | Heading font   | 16        | text.primary |
| Heading 3  | Heading font   | 13        | text.primary |
| Body       | Body font      | 11        | text.primary |
| Caption    | Body font      | 9         | text.secondary |

## ReportLab Paragraph Styles

```python
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER

styles = {
    'title': ParagraphStyle(
        'HopTitle',
        fontName=FONT_HEADING,
        fontSize=28,
        leading=34,
        textColor=TEXT_PRIMARY,
        spaceAfter=12,
    ),
    'heading1': ParagraphStyle(
        'HopH1',
        fontName=FONT_HEADING,
        fontSize=20,
        leading=26,
        textColor=TEXT_PRIMARY,
        spaceAfter=10,
        spaceBefore=16,
    ),
    'heading2': ParagraphStyle(
        'HopH2',
        fontName=FONT_HEADING,
        fontSize=16,
        leading=20,
        textColor=TEXT_PRIMARY,
        spaceAfter=8,
        spaceBefore=12,
    ),
    'body': ParagraphStyle(
        'HopBody',
        fontName=FONT_BODY,
        fontSize=11,
        leading=16.5,  # 1.5x line height
        textColor=TEXT_PRIMARY,
        spaceAfter=6,
    ),
    'caption': ParagraphStyle(
        'HopCaption',
        fontName=FONT_BODY,
        fontSize=9,
        leading=13,
        textColor=TEXT_SECONDARY,
    ),
}
```

## Page Layout

- Page size: Letter (8.5" x 11")
- Margins: 1 inch all sides (72 points)
- Header: Logo top-left, optional title top-right in caption style
- Footer: Page number centered, "Hop AI — Confidential" in caption style

### Adding Logo to PDF

```python
from reportlab.lib.units import inch

# Draw logo on canvas
canvas.drawImage(
    'path/to/skill/assets/hop-ai-logo.png',
    x=72,              # 1 inch from left
    y=720,             # near top of letter page
    width=0.5 * inch,
    height=0.5 * inch,
    preserveAspectRatio=True,
    mask='auto',
)
```

## Table Styling

```python
from reportlab.platypus import Table, TableStyle
from reportlab.lib import colors

def brand_table_style():
    return TableStyle([
        # Header row
        ('BACKGROUND', (0, 0), (-1, 0), TEXT_PRIMARY),
        ('TEXTCOLOR', (0, 0), (-1, 0), BG_SURFACE),
        ('FONTNAME', (0, 0), (-1, 0), FONT_HEADING),
        ('FONTSIZE', (0, 0), (-1, 0), 10),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 8),
        ('TOPPADDING', (0, 0), (-1, 0), 8),

        # Data rows
        ('FONTNAME', (0, 1), (-1, -1), FONT_BODY),
        ('FONTSIZE', (0, 1), (-1, -1), 10),
        ('TEXTCOLOR', (0, 1), (-1, -1), TEXT_PRIMARY),
        ('BOTTOMPADDING', (0, 1), (-1, -1), 6),
        ('TOPPADDING', (0, 1), (-1, -1), 6),

        # Alternating row colors
        ('ROWBACKGROUNDS', (0, 1), (-1, -1), [BG_SURFACE, BG_ELEVATED]),

        # Grid
        ('GRID', (0, 0), (-1, -1), 0.5, BORDER),
        ('LINEBELOW', (0, 0), (-1, 0), 1.5, PRIMARY),
    ])
```

## Accent Elements

### Colored divider line
```python
canvas.setStrokeColor(PRIMARY)
canvas.setLineWidth(2)
canvas.line(72, y_position, 540, y_position)  # Full-width line
```

### Callout box
```python
# Draw a filled rectangle with elevated background
canvas.setFillColor(BG_ELEVATED)
canvas.setStrokeColor(BORDER)
canvas.roundRect(72, y, 468, height, 8, fill=1, stroke=1)

# Add colored left border
canvas.setFillColor(PRIMARY)
canvas.rect(72, y, 4, height, fill=1, stroke=0)
```
