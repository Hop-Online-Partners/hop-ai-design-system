# Hop AI Brand: Word Document (DOCX) Reference

## Color Values for python-docx

```python
from docx.shared import RGBColor, Pt, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH

# Brand colors
PRIMARY      = RGBColor(0xFE, 0x3D, 0x3E)  # #FE3D3E
SECONDARY    = RGBColor(0x7D, 0x3E, 0xFE)  # #7D3EFE
TERTIARY     = RGBColor(0x97, 0xEA, 0xD2)  # #97EAD2
TEXT_PRIMARY  = RGBColor(0x28, 0x2A, 0x3E)  # #282A3E
TEXT_SECONDARY = RGBColor(0x6B, 0x72, 0x80) # #6B7280
BORDER       = RGBColor(0xE5, 0xE7, 0xEB)  # #E5E7EB
```

## Typography

### Font Assignments

| Element         | Font        | Weight    | Size (pt) | Color        |
|-----------------|-------------|-----------|-----------|--------------|
| Title           | Work Sans   | Bold      | 28        | text.primary |
| Heading 1       | Work Sans   | Bold      | 24        | text.primary |
| Heading 2       | Work Sans   | SemiBold  | 18        | text.primary |
| Heading 3       | Work Sans   | SemiBold  | 14        | text.primary |
| Body            | Inter       | Regular   | 11        | text.primary |
| Caption         | Inter       | Regular   | 9         | text.secondary |

### Applying Styles

```python
from docx import Document

doc = Document()

def style_heading(paragraph, text, level=1):
    """Add a brand-styled heading."""
    paragraph.text = text
    run = paragraph.runs[0]
    run.font.name = 'Work Sans'
    run.font.color.rgb = TEXT_PRIMARY
    if level == 1:
        run.font.size = Pt(24)
        run.font.bold = True
    elif level == 2:
        run.font.size = Pt(18)
        run.font.bold = True
    elif level == 3:
        run.font.size = Pt(14)
        run.font.bold = True

def style_body(paragraph, text):
    """Add brand-styled body text."""
    run = paragraph.add_run(text)
    run.font.name = 'Inter'
    run.font.size = Pt(11)
    run.font.color.rgb = TEXT_PRIMARY
    paragraph.paragraph_format.line_spacing = 1.5
    return run
```

## Page Setup

- Page size: Letter (8.5" x 11") — or A4 for international
- Margins: 1 inch all sides
- Header: Logo (small, ~0.5") in top-left, optional "Hop AI" text in Work Sans
- Footer: Page number centered, in Inter 9pt, text.secondary color

## Adding the Logo

```python
from docx.shared import Inches

# As header image
section = doc.sections[0]
header = section.header
logo_para = header.paragraphs[0]
logo_run = logo_para.add_run()
logo_run.add_picture('path/to/skill/assets/hop-ai-logo.png', width=Inches(0.5))
```

## Table Styling

```python
from docx.oxml.ns import qn
from docx.shared import RGBColor, Pt

def style_table(table):
    """Apply Hop AI branding to a table."""
    # Header row: dark navy background, white text
    for cell in table.rows[0].cells:
        shading = cell._element.get_or_add_tcPr()
        shading_elem = shading.makeelement(qn('w:shd'), {
            qn('w:fill'): '282A3E',
            qn('w:val'): 'clear'
        })
        shading.append(shading_elem)
        for paragraph in cell.paragraphs:
            for run in paragraph.runs:
                run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
                run.font.name = 'Work Sans'
                run.font.bold = True
                run.font.size = Pt(10)

    # Data rows: alternating white / elevated background
    for i, row in enumerate(table.rows[1:], 1):
        fill = 'F9FAFB' if i % 2 == 0 else 'FFFFFF'
        for cell in row.cells:
            shading = cell._element.get_or_add_tcPr()
            shading_elem = shading.makeelement(qn('w:shd'), {
                qn('w:fill'): fill,
                qn('w:val'): 'clear'
            })
            shading.append(shading_elem)
            for paragraph in cell.paragraphs:
                for run in paragraph.runs:
                    run.font.name = 'Inter'
                    run.font.size = Pt(10)
                    run.font.color.rgb = TEXT_PRIMARY
```

## Document Structure Pattern

For reports and long documents, follow this structure:

1. **Cover page**: Title in Work Sans 800, 28pt. Subtitle in Inter. Logo. Date.
2. **Table of contents**: Auto-generated if possible, styled in Inter.
3. **Executive summary**: 1-2 paragraphs max, highlighted with a colored left border (brand.primary).
4. **Section headings**: Work Sans, properly leveled (H1 → H2 → H3).
5. **Body content**: Inter 11pt, 1.5 line spacing.
6. **Callout boxes**: Use a table with single cell, `#F9FAFB` background, for key takeaways.
7. **Footer**: Page numbers, date, "Confidential — Hop AI" in text.secondary.

## Accent Line / Divider

Use a horizontal rule colored with brand.primary (`#FE3D3E`) between major sections:

```python
from docx.oxml.ns import qn

def add_colored_line(doc, color='FE3D3E'):
    """Add a brand-colored horizontal line."""
    paragraph = doc.add_paragraph()
    pPr = paragraph._element.get_or_add_pPr()
    pBdr = pPr.makeelement(qn('w:pBdr'), {})
    bottom = pBdr.makeelement(qn('w:bottom'), {
        qn('w:val'): 'single',
        qn('w:sz'): '12',
        qn('w:color'): color,
        qn('w:space'): '1'
    })
    pBdr.append(bottom)
    pPr.append(pBdr)
```
