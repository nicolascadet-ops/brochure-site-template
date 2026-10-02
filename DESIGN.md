---
name: Hartley & Webb
description: Brochure site template for an independent professional-services firm; paper, ink and one claret.
colors:
  claret: "#6b1d2a"
  claret-deep: "#521520"
  on-claret: "#f6eded"
  on-claret-muted: "#d9bfc3"
  ink: "#161514"
  ink-2: "#47433f"
  ink-3: "#6b6661"
  paper: "#fbfbfa"
  stone: "#f3f2ef"
  line: "#d9d5ce"
  white: "#ffffff"
  error: "#a3261b"
  success: "#1f6b3a"
typography:
  display:
    fontFamily: "Libre Caslon Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(3rem, 7.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Libre Caslon Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(2.2rem, 4.4vw, 3.6rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Libre Caslon Display, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(1.7rem, 2.6vw, 2.3rem)"
    fontWeight: 400
    lineHeight: 1.08
  figure:
    fontFamily: "Libre Caslon Display, Iowan Old Style, Georgia, serif"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 1.2
    fontFeature: "lnum"
  body:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  lede:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Public Sans, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  square: "2px"
spacing:
  gutter: "24px"
  sm: "16px"
  md: "32px"
  lg: "64px"
  section: "128px"
  section-tight: "96px"
components:
  button-primary:
    backgroundColor: "{colors.claret}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.claret-deep}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "0 22px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.claret}"
    rounded: "{rounded.square}"
    padding: "0 22px"
    height: "48px"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "12px 14px"
    height: "48px"
  callback-card:
    backgroundColor: "{colors.paper}"
    padding: "32px"
    width: "420px"
  band:
    backgroundColor: "{colors.claret}"
    textColor: "{colors.on-claret}"
    padding: "112px 0"
---

# Design System: Hartley & Webb

## Overview

**Creative North Star: "The Letterhead"**

The site reads like a good firm's stationery: off-white paper, near-black ink, one deep claret, and big Caslon headings set with confidence. Authority comes from type scale and restraint, not ornament. Structure is drawn with hairline rules: lists, tables, quotes and contact details sit between thin lines rather than inside boxed cards. Photography is real places and real faces; portraits are greyscale at rest and take on colour on hover.

Density is calm and generous. Sections breathe (128px vertical padding on desktop), copy runs in a measured column, and prices are stated openly in claret serif figures so the reader sees cost as a first-class fact. Motion is nearly absent: the only authored moment is the call-back card settling onto the hero photo on load. There are no scroll reveals.

To customise the template, change the custom properties at the top of `styles.css`. The palette, both typefaces and the container width live there; everything else reads from them.

**Key Characteristics:**
- Paper and stone grounds, ink text, a single claret accent for actions, prices and the closing band.
- Libre Caslon Display (400 only) for every heading and figure; Public Sans for everything else.
- Square 2px corners, 1px hairline rules, no cards.
- One shadowed object on the whole site: the hero call-back card.
- One load animation; hover feedback is small and functional.

## Colors

A warm neutral paper system with one dark wine accent; colour is scarce so that claret always means "act here" or "this is the price".

### Primary
- **Claret** (`--claret`): primary buttons, active nav underline and text, prices and fee figures, timeline years, list tick-rules, focus ring, text selection, form focus border, and the full-bleed closing band.
- **Deep Claret** (`--claret-2`): hover state of primary buttons only.
- **Claret Petal** (`--on-claret`) and **Muted Petal** (`--on-claret-2`): body text and secondary text/outline borders on the claret band. Headings on the band are pure white.

### Neutral
- **Ink** (`--ink`): text, the dark topbar and footer grounds, the heavier top rule that opens a ruled list, outline button stroke.
- **Ink 2** (`--ink-2`): secondary prose (ledes, section intros, list descriptions).
- **Ink 3** (`--ink-3`): captions, roles, labels, consent text, the brand tagline.
- **Paper** (`--paper`): page ground, header, the call-back card.
- **Stone** (`--stone`): alternating section ground and row-hover fill.
- **Line** (`--line`): every hairline divider, input stroke, jump-link border.
- **White**: input fields and jump links sit on pure white so they lift slightly off paper.

### Feedback
- **Error** (#a3261b) and **Success** (#1f6b3a) are used only for form validation messages and borders. They are hard-coded in `styles.css`, not custom properties.

### Named Rules
**The One Accent Rule.** Claret is the only chromatic colour. It marks actions, prices and the closing band; it is never used for decorative fills, icons-for-effect, or body text.

**The Ruled Ground Rule.** Depth between sections comes from switching paper to stone, never from tinted panels or gradients.

## Typography

**Display Font:** Libre Caslon Display (with Iowan Old Style, Georgia, serif)
**Body Font:** Public Sans (with ui-sans-serif, system-ui, Segoe UI, sans-serif)

**Character:** A high-contrast Caslon display cut at weight 400 against a plain, civic sans. The serif carries the voice; the sans stays out of the way. Both are self-hosted in `fonts/`.

### Hierarchy
- **Display** (400, clamp(3rem, 7.4vw, 6rem), 1.08): home hero headline only, max 13ch. Inner-page intros use clamp(2.8rem, 6vw, 5.2rem) at 14ch.
- **Headline** (400, clamp(2.2rem, 4.4vw, 3.6rem), 1.08): section headings, max 16ch; the claret band runs larger (up to 4.2rem).
- **Title** (400, clamp(1.7rem, 2.6vw, 2.3rem)): practice-list items, service names; card and person headings at fixed 26-30px.
- **Figure** (400, 19-34px serif, claret): prices ("From £850 + VAT"), fee callouts, timeline years. Numbers in Caslon are part of the voice.
- **Body** (400, 17px, 1.65): all running text. Long-form service copy caps at 70ch; ledes at 50-56ch.
- **Lede** (400, 18-20px, ink-2): section intros and page-intro paragraphs.
- **Label** (500-600, 13px, 0.12-0.14em, uppercase): table headers, contact-detail terms, footer column headings, in-content subheads on service pages (15px). Labels name data; they never sit above a headline as a tagline.
- **Quote** (400 serif, clamp(1.4rem, 2.2vw, 1.85rem), 1.35): client testimonials.

### Named Rules
**The Single Weight Rule.** Caslon is used at 400 only. Hierarchy comes from size, never from bolding the serif.

**The Priced in Serif Rule.** Fees are always set in Caslon, in claret, with tabular figures in tables. A price is a heading-grade fact, not fine print.

## Layout

A single centred container, `min(1240px, 100% - 48px)`. Sections stack vertically with 128px padding (96px for tight sections and below 820px). Section heads are a two-column grid (heading left, intro right, aligned to the baseline end) that collapses to one column at 820px.

Recurring grids: two-column split (image 5:6 beside text, 80px gap; 4:3 stacked below 880px); four-up people grid (two-up below 960px); two-up quotes; service detail with a 300px sticky aside holding name and price beside a 70ch content column (stacked below 860px); footer at 1.6fr / 1fr / 1fr / 1fr.

Hero: headline and lede in the container, then a full-bleed photo (clamp(360px, 62vh, 640px) tall) with the call-back card overlapping its lower right edge by 72px, aligned to the container's right edge. Below 820px the card stacks under the photo, pulled up 48px. Below 640px a separate mobile crop at 8:7 is served via `<picture>`.

Header is sticky (84px; 72px below 960px). Breakpoints in use: 520, 560, 640, 760, 820, 860, 880, 900, 960px. Spacing rhythm is in roughly 8px steps (16 / 24 / 32 / 48 / 64 / 80 / 96 / 128).

## Elevation & Depth

Flat. Depth is conveyed by ground changes (paper, stone, ink, claret) and 1px rules. Exactly one object casts a shadow: the call-back card, because it physically overlaps the hero photograph.

### Shadow Vocabulary
- **Settled card** (`box-shadow: 0 2px 4px rgb(22 21 20 / .06), 0 24px 48px -16px rgb(22 21 20 / .28)`): the hero call-back card only.
- **Focus halo** (`box-shadow: 0 0 0 3px rgb(107 29 42 / .12)`): form fields on focus, paired with a claret border.

### Named Rules
**The One Lifted Object Rule.** Only an element that overlaps a photograph earns a shadow. Everything else lies flat on the page.

## Shapes

Square. Buttons and inputs use a 2px radius; photographs, sections and the call-back card have no radius at all. Lines are 1px: `--line` for dividers, `--ink` for the top rule that opens a ruled list or quote. List markers are a 12px claret hairline dash, not a glyph. The FAQ toggle is a drawn plus made of two 1px bars whose vertical collapses when open. Icons are inline 1.5px-stroke SVG (arrow, menu, close).

## Components

### Buttons
Quiet and firm.
- **Shape:** near-square (2px), 48px minimum height, 22px horizontal padding, Public Sans 500 at 15px.
- **Primary (claret):** claret fill, white text; deepens to Deep Claret on hover.
- **Outline:** 1px ink stroke, transparent; fills ink with white text on hover. On the claret band the stroke is Muted Petal and the hover fills white with claret text.
- **Light:** white fill, claret text; for use on claret grounds; hover goes to stone.
- **Disabled / sending:** 60% opacity, progress cursor, label reads "Sending…".
- **Focus:** global 2px claret outline, 3px offset (white on the claret band).

### Arrow Link
The secondary call to action: Public Sans 500 text with a 1px current-colour underline and a 20px stroke arrow that slides 4px right on hover.

### Ruled List (practice areas)
Replaces cards. Opens with a 1px ink rule; each row is a three-column grid (title, description plus claret serif price, arrow) separated by `--line` hairlines, 34px vertical padding. Hover fills the row with stone, insets it 20px, and nudges the claret arrow 6px. The same ruled grammar drives the timeline, principles list, FAQ and fee table.

### Inputs / Fields
- **Style:** white fill, 1px `--line` stroke, 2px radius, 48px minimum height, 16px text; labels above at 14px/500.
- **Focus:** border turns claret with a soft claret halo; no outline.
- **Error:** border and message in Error red; the message appears under the field only when `aria-invalid="true"`. The first invalid field receives focus.
- **Success:** status line in Success green after submit.

### Navigation
Dark ink topbar (13px, hours and phone) above a sticky paper header with a 1px bottom rule. Brand is a Caslon wordmark with a small uppercase tagline beneath. Links are 15px Public Sans with a 1px claret underline on hover; the current page is claret. Below 960px the links move into a right-hand sheet (max 360px) that slides in, sets links in 30px Caslon, locks scroll, and closes on Esc.

### Call-back Card (signature)
A paper card with a short Caslon heading, one line of reassurance, and a three-field form, overlapping the hero photo. It is the site's only shadow and only authored animation: on load it rises 28px into place over 1.1s (0.25s delay, `--ease`) while its shadow develops. Disabled under `prefers-reduced-motion`.

### Portraits
4:5 crops, greyscale with slight contrast at rest; colour returns on hover over 0.5s.

### Claret Band
Full-bleed claret closing section: large white Caslon heading, petal body text, and actions aligned right (left below 820px).

## Do's and Don'ts

### Do:
- **Do** retheme through the `:root` custom properties in `styles.css`; keep a single accent.
- **Do** state prices in claret Caslon wherever a service is named.
- **Do** separate items with 1px rules and an ink top rule instead of boxing them.
- **Do** use real photographs of places and people; keep portraits greyscale-to-colour.
- **Do** keep buttons, form fields and the menu toggle at least 48px tall and keep the claret focus outline.
- **Do** keep motion to the single call-back settle (behind `prefers-reduced-motion`) and small hover nudges.

### Don't:
- **Don't** add a second accent colour, gradients, or tinted panels.
- **Don't** wrap content in rounded or shadowed cards; only an element overlapping a photo may cast a shadow.
- **Don't** bold Libre Caslon Display or set body copy in it.
- **Don't** add scroll-triggered reveals or any entrance animation beyond the call-back settle.
- **Don't** put small uppercase taglines above headlines; uppercase labels name data (table heads, contact terms, footer columns).
- **Don't** use gavel, scales-of-justice, or handshake stock imagery, or a navy-and-gold palette.
