---
name: Locamage
description: A light-mode public brand system for asking questions of satellite imagery.
colors:
  primary: "#1664f0"
  primary-hover: "#1055cc"
  primary-active: "#0d47b3"
  background: "#f8fafc"
  surface: "#ffffff"
  surface-alt: "#eef3f8"
  foreground: "#10141f"
  muted: "#4f5f72"
  dim: "#6b7788"
  stroke: "#d7e0ea"
  stroke-strong: "#aebdcd"
typography:
  display:
    fontFamily: "Alliance No2, Mona Sans, system-ui, sans-serif"
    fontSize: "clamp(3.625rem, 9vw, 6rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Alliance No2, Mona Sans, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.8vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.005em"
  body:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.20em"
rounded:
  none: "0px"
spacing:
  page-x: "clamp(24px, 5vw, 80px)"
  section-y: "clamp(80px, 9vw, 120px)"
  button-x: "26px"
  button-y: "13px"
  card-x: "28px"
  card-y: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.button-y} {spacing.button-x}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.button-y} {spacing.button-x}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
    padding: "{spacing.button-y} {spacing.button-x}"
  capability-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.none}"
    padding: "0"
---

# Design System: Locamage

## 1. Overview

**Creative North Star: "Daylight Operations Map"**

Locamage's light-mode system should feel like a clear operational map spread across a bright desk: open, exact, and ready for scrutiny. It keeps the existing sharp geometry, Alliance No2 display voice, and electric signal blue, but replaces the classified-terminal mood with daylight legibility. The page should invite general visitors in without lowering the seriousness of the technology.

The system rejects the anti-references named in `PRODUCT.md`: generic SaaS polish, gradient blobs, rounded card walls, cheerful AI mascots, chat-bubble tropes, vague "unlock insights" copy, consumer AI gloss, and overly dark intelligence-terminal drama. Light mode is not an inversion of the old void palette; it needs its own logic, with satellite imagery treated as evidence rather than atmosphere.

**Key Characteristics:**
- Crisp white and cool-gray surfaces with strong ink text.
- Electric signal blue used as a precise action and wayfinding color, not decoration.
- Zero-radius, hairline-separated components that feel instrument-grade.
- Image-led sections where satellite or geospatial visuals carry proof.
- Readable, public-facing copy that explains capability without GIS jargon.

## 2. Colors

The Cool Daylight palette uses a white operational canvas, cool gray support surfaces, dark ink text, and one electric signal blue accent.

### Primary
- **Electric Signal Blue:** The single action and wayfinding color. Use it for primary buttons, links, focus rings, active dots, and sparse section labels. Its power comes from restraint.
- **Deep Signal Blue:** Hover and pressed states for primary actions. Use only as a state color, never as a second brand accent.

### Neutral
- **Daylight Canvas:** The page background. It should read as clean daylight, not cream, parchment, or warm SaaS beige.
- **White Surface:** Primary panels, nav, cards, and content blocks.
- **Survey Gray:** Alternate sections and quiet panels that need separation without shadow.
- **Operational Ink:** Headlines, primary body text, and high-priority labels.
- **Measured Muted:** Supporting text. This must remain dark enough for WCAG AA on both white and Survey Gray surfaces.
- **Coordinate Dim:** Metadata, footer detail, and low-priority labels. Do not use it for body copy.
- **Hairline Stroke:** Dividers, card boundaries, nav borders, and grid lines.
- **Strong Stroke:** Focus-adjacent borders, active separators, or dense data boundaries.

### Named Rules

**The Daylight-Is-Not-Beige Rule.** The background is cool and clear. Do not drift into cream, sand, ivory, parchment, or warm-tinted near-white.

**The One Signal Rule.** Electric Signal Blue should occupy less than 10% of a screen. It marks actions and orientation; it does not flood surfaces.

**The Evidence-First Image Rule.** Satellite imagery must stay readable in light mode. Never fade card images into white or wash hero imagery with opaque white overlays.

## 3. Typography

**Display Font:** Alliance No2, with Mona Sans and system sans fallbacks.
**Body Font:** Mona Sans, with system sans fallbacks.
**Label/Mono Font:** Mona Sans, spaced uppercase where labels are needed.

**Character:** The pairing is precise and editorial without becoming magazine-like. Alliance No2 gives public-facing authority at large sizes; Mona Sans carries the explanatory work with technical clarity.

### Hierarchy
- **Display** (400, fluid 58px-96px, 1.0 line-height): Hero headline only. Keep letter spacing at or above -0.035em; never exceed a 6rem max.
- **Headline** (400, fluid 36px-60px, 1.08 line-height): Section headings, band statements, and contact headlines.
- **Title** (500, 22px, 1.2 line-height): Capability names, market row headings, demo titles, and compact component titles.
- **Body** (400, 17px, 1.8 line-height): Explanatory copy. Keep long prose between 65 and 75 characters per line.
- **Label** (500, 11px, 0.20em tracking, uppercase): Sparse orientation labels and navigation items. Use less often in light mode than the old dark system; repetition makes the page feel scaffolded.

### Named Rules

**The Public Clarity Rule.** If a line requires GIS expertise to parse, rewrite it before changing the type treatment.

**The No-Shouting Display Rule.** Display headings top out at 6rem and letter-spacing never gets tighter than -0.04em.

## 4. Elevation

This system is flat by default. Depth comes from tonal contrast, image hierarchy, and 1px hairline strokes, not decorative shadows. Shadows are prohibited on cards, buttons, and nav at rest; if a future interaction requires emphasis, use a border shift, tonal change, or content motion before adding lift.

### Named Rules

**The Hairline-First Rule.** A surface boundary should be a 1px stroke or a tonal step. If it needs a soft shadow to be legible, the composition is not clear enough.

**The No-Ghost-Card Rule.** Do not pair a 1px border with a wide soft shadow. Pick the border, keep it sharp, and let the layout do the work.

## 5. Components

### Buttons
- **Shape:** Sharp rectangular controls (0px radius).
- **Primary:** Electric Signal Blue fill with white text, uppercase label, 13px 26px padding, and a 1px matching border.
- **Hover / Focus:** Hover deepens to Deep Signal Blue. Focus uses a visible 2px Electric Signal Blue outline with offset; do not rely on color fill alone.
- **Secondary / Ghost:** Transparent fill, Operational Ink text, and Hairline Stroke border. Hover strengthens the border and text color without adding shadow.

### Cards / Containers
- **Corner Style:** Sharp corners only (0px radius).
- **Background:** White Surface on Daylight Canvas, or Survey Gray when a section needs quiet separation.
- **Shadow Strategy:** No shadows. Use Hairline Stroke and image weight for separation.
- **Border:** 1px Hairline Stroke at rest. Strong Stroke is reserved for focus, active, or dense-data boundaries.
- **Internal Padding:** 22px 28px 32px for capability-card bodies; larger narrative panels may use 52px desktop and 32px mobile.

### Navigation
- **Style:** Fixed white or near-white bar with a Hairline Stroke bottom border. Logo uses Alliance No2; links use Mona Sans uppercase labels.
- **States:** Hover and active states move from Muted to Operational Ink or Electric Signal Blue. The mobile menu must preserve wayfinding and keyboard access.
- **Motion:** Hide-on-scroll and mobile menu transitions use `cubic-bezier(.15, 1, .3, 1)` and must respect `prefers-reduced-motion`.

### Labels And Tags
- **Style:** Small uppercase Mona Sans with measured tracking. Electric Signal Blue can mark the section or market, but repeated label-above-heading cadence should be reduced.
- **Use:** Labels are for orientation, not decoration. Do not add a label merely because a section has a heading.

### Image Panels
- **Style:** Imagery is evidence. Use real satellite, map, benchmark, or geospatial visuals with descriptive alt text.
- **Treatment:** Light-mode overlays must preserve contrast and detail. Prefer subtle cool-gray tints or adjacent caption panels over white fade-outs.

## 6. Do's and Don'ts

### Do:
- **Do** use Electric Signal Blue sparingly for primary actions, focus, and wayfinding.
- **Do** keep the body background cool and clear; Daylight Canvas must not become cream, sand, ivory, parchment, or warm SaaS beige.
- **Do** keep all components sharp with 0px radius and 1px hairline dividers.
- **Do** keep text contrast comfortably above WCAG AA, especially muted labels on white and Survey Gray.
- **Do** make imagery carry proof: satellite views, map evidence, benchmark visuals, and specific alt text.
- **Do** use reduced-motion alternatives for hero drift, reveal animations, mobile menu transitions, and image hover treatments.

### Don't:
- **Don't** use generic SaaS polish: gradient blobs, rounded card walls, glass panels, or soft wide shadows.
- **Don't** use cheerful AI mascots, chat-bubble tropes, or consumer AI gloss.
- **Don't** write vague "unlock insights" copy when a concrete geospatial example would be clearer.
- **Don't** make the light-mode surface feel like an inverted dark terminal; redesign overlays and imagery for daylight.
- **Don't** fade satellite images into white or hide their detail under opaque light gradients.
- **Don't** repeat tiny uppercase tracked labels above every section by default.
