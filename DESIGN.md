---
name: Study Agent
description: "Chat with a local AI, inside Obsidian"
colors:
  primary: "#8b5cf6"
  primary-light: "#a78bfa"
  primary-hover: "#7c3aed"
  primary-deep: "#6d28d9"
  primary-text: "#c4b5fd"
  vault-night: "#0f0e17"
  vault-soft: "#16141f"
  vault-card: "#1c1930"
  vault-border: "#2e2a4a"
  vault-code: "#12101d"
  vault-text: "#fffffe"
  vault-muted: "#b8b5cc"
  warn-amber: "#f59e0b"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.2rem, 5vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.9rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
    lineHeight: 1.4
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  xs: "4px"
  sm: "8px"
  md: "12px"
  card: "14px"
  pill: "999px"
spacing:
  sm: "8px"
  md: "18px"
  lg: "24px"
  section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary-hover}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "13px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "13px 24px"
  button-ghost:
    backgroundColor: "{colors.vault-card}"
    textColor: "{colors.vault-text}"
    rounded: "{rounded.md}"
    padding: "13px 24px"
  card:
    backgroundColor: "{colors.vault-card}"
    textColor: "{colors.vault-text}"
    rounded: "{rounded.card}"
    padding: "24px"
  badge:
    backgroundColor: "{colors.vault-card}"
    textColor: "{colors.vault-muted}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
---

# Design System: Study Agent

## Overview

**Creative North Star: "The Midnight Vault"**

The site is a quiet obsidian vault after hours: deep indigo-black surfaces, one restrained purple accent, and nothing competing for attention. It should feel like opening Obsidian at night — familiar, focused, and trustworthy — because the product promise is local-first privacy. Every design choice defers to that: calm over loud, precise over decorative, restrained over expressive.

Density is low and breathing room is generous. The system uses flat tonal layering (successive dark purples) instead of shadows, a single accent used sparingly, and a native system font stack so the page renders instantly with no webfont dependency. Motion is minimal and purposeful — a soft pulse on the thinking indicator, a one-pixel lift on buttons — and always respects reduced-motion.

**Key Characteristics:**
- Dark vault surfaces with one accent, used rarely
- Flat tonal layering; shadows only on screenshots and chat panels
- Native system type; hierarchy from size and weight only
- Refined and restrained components; no decoration for its own sake
- Accessible by default: focus rings, skip link, reduced-motion support

## Colors

A single-accent dark palette. Obsidian Purple is the only chromatic voice; everything else is a step in the indigo-black tonal ladder.

### Primary

- **Obsidian Purple** (#8b5cf6): The primary accent. The brand mark and links. Its rarity is the point — it marks the one action or idea that matters on the screen.
- **Obsidian Purple Light** (#a78bfa): Gradient partner and link color; the lighter face of the accent for text on dark surfaces.
- **Obsidian Purple Hover** (#7c3aed): Primary-button background. Chosen so white button text passes WCAG AA (5.7:1).
- **Obsidian Purple Deep** (#6d28d9): Primary-button hover state and deep end of the brand-mark gradient.
- **Obsidian Purple Text** (#c4b5fd): Emphasis text inside badges and step numbers on dark surfaces.

### Neutral

- **Vault Night** (#0f0e17): Page background. The deepest surface.
- **Vault Soft** (#16141f): Secondary background — footer and alternating bands.
- **Vault Card** (#1c1930): Cards, ghost buttons, badges, tables, chat bubbles. The working surface.
- **Vault Border** (#2e2a4a): All 1px borders and dividers.
- **Vault Code** (#12101d): Code blocks, slightly darker than cards to read as inset.
- **Vault White** (#fffffe): Primary text.
- **Ashen Lavender** (#b8b5cc): Muted text — body copy inside cards, captions, secondary nav.
- **Warn Amber** (#f59e0b): Warning callout border only. Never a general accent.

### Named Rules

**The One Voice Rule.** Obsidian Purple is the only chromatic accent. If a screen needs emphasis beyond the accent, use weight, size, or placement — never a second hue.

**The Tonal Ladder Rule.** Surfaces step through Vault Night → Vault Soft → Vault Card → Vault Code. Don't introduce a surface outside this ladder.

## Typography

**Display Font:** System UI stack (`ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`)
**Body Font:** Same system stack
**Label/Mono Font:** `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` for code only

**Character:** Native and quiet. No webfont, no display serif, no novelty — hierarchy comes from size, weight, and spacing alone, so the site feels like a well-kept vault: legible, fast, and unobtrusive.

### Hierarchy

- **Display** (700, clamp(2.2rem, 5vw, 3.6rem), 1.08, -0.02em): Hero H1 only. Tight tracking; the accent phrase is solid Obsidian Purple Light — never gradient text.
- **Headline** (700, 1.9rem, 1.3, -0.01em): Section H2s.
- **Title** (700, 1.2rem, 1.4): Card and sub-section headings (H3).
- **Body** (400, 1rem, 1.65): All reading copy. Prose measures stay near 65–75ch via a 780px prose container.
- **Label** (600, 0.85rem, 1.4): Nav, badges, code-block headers, captions, table headers.

### Named Rules

**The Native Type Rule.** No webfonts. If a future display face is ever adopted, it must be a deliberate exception (see PRODUCT.md brand commitments), not a default.

**The Quiet Hierarchy Rule.** Emphasis is size and weight only — no uppercase labels, no letterspaced kickers, no italic display text.

## Layout

A centered, single-column reading layout inside a 1120px container with 24px side padding. Landing sections stack vertically with 48px rhythm; the hero is centered with 72px top padding. Content grids are 3-up and 2-up, collapsing to a single column below 860px. The screenshot/chat pairing on the home page is a 1.15fr / 0.85fr split that also stacks on mobile. Docs pages use a 780px prose measure. The header is sticky with a blurred translucent background; the footer is a 4-column grid collapsing to 2 columns on mobile.

## Elevation & Depth

Flat by default. Depth is conveyed by tonal layering — each surface is a step lighter than the one beneath it — plus 1px Vault Border strokes. Shadows exist only where a screenshot or chat panel needs to feel like a raised object floating over the page.

### Shadow Vocabulary

- **Panel Lift** (`box-shadow: 0 24px 60px rgba(0,0,0,.45)`): Screenshot frames and the chat mock only. Reads as "this is a product capture", not UI chrome.

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. The only shadow in the system is Panel Lift, reserved for product captures.

## Shapes

Gently curved, consistently. Cards, code blocks, chat panels, and screenshot frames use a 14px radius; buttons use 12px; small controls (code-copy buttons, nav links) use 8px; badges and pills are fully rounded. Chat bubbles are asymmetric — the tail corner drops to 4px on the sender's side. Borders are 1px Vault Border everywhere; there are no borderless cards and no sharp corners.

## Components

### Buttons

Refined and restrained. Generous padding, medium weight, a one-pixel lift on hover — presence without noise.

- **Shape:** 12px radius (10px for the small variant)
- **Primary:** Obsidian Purple Hover background (#7c3aed, 5.7:1 with white), white text, 13px 24px padding
- **Hover / Focus:** Background deepens to #7c3aed and translates up 1px; focus shows a 2px Obsidian Purple outline offset 3px
- **Ghost:** Vault Card background with a 1px Vault Border; hover lightens to #241f42

### Chips / Badges

- **Style:** Vault Card background, Ashen Lavender text, 1px Vault Border, fully rounded, 5px 12px padding, 0.82rem
- **State:** Provider pills add a semantic tint — green for Local, amber for Cloud — the only place non-accent color appears

### Cards / Containers

- **Corner Style:** 14px radius
- **Background:** Vault Card (#1c1930)
- **Shadow Strategy:** None (Flat-By-Default Rule)
- **Border:** 1px Vault Border
- **Internal Padding:** 24px

### Inputs / Fields

No text inputs in the current system. The chat input is a display-only mock (Ashen Lavender placeholder text, model label right-aligned in Obsidian Purple Text). The code-copy button is the only small control: Vault Card background, 1px border, 8px radius, 5px 12px padding.

### Navigation

- **Style:** Sticky header, translucent Vault Night background with backdrop blur, 1px bottom border. Brand mark is the 36px Study Agent logo (`public/images/logo.png`) — purple crystal over an open book with a circuit-brain, on a dark rounded square.
- **States:** Links are Ashen Lavender, hover to Vault White on an Obsidian Purple tint; the current page gets the tint plus an inset border ring and `aria-current="page"`.
- **Mobile:** Nav wraps below the brand; no hamburger in the current system.

### Chat Mock (signature)

The home-page illustration of the sidebar: a Vault Code panel with a traffic-light title bar, a right-aligned Obsidian Purple user bubble, a bordered Vault Card assistant bubble with a muted list, a pulsing "Thinking…" indicator, and a bottom input row with the live `Provider · model` label in Obsidian Purple Text. It is the one place the product's own UI is depicted; keep it faithful to the real sidebar.

### Screenshot Frame

A Vault Code panel with traffic-light bar and an 828×465 product screenshot. Panel Lift shadow. Captions are centered Ashen Lavender at 0.9rem.

## Do's and Don'ts

### Do:

- **Do** keep the accent to one voice per screen — primary CTA, brand mark, or hero phrase, not all three at once.
- **Do** step surfaces through the tonal ladder (Night → Soft → Card → Code) and separate them with 1px Vault Border strokes.
- **Do** let Panel Lift shadow appear only on screenshot frames and the chat mock.
- **Do** use the system stack and size/weight hierarchy; keep prose near 65–75ch.
- **Do** honor reduced-motion (pulse and smooth scroll off) and visible focus rings on every interactive element.
- **Do** use the stroke SVG icon set (1.8px, `currentColor`, Obsidian Purple Text) for feature icons.

### Don't:

- **Don't** introduce a second accent hue (beyond the semantic Local/Cloud pills and the Warn Amber callout edge).
- **Don't** add shadows to cards, buttons, or nav — flat tonal layering carries depth.
- **Don't** load a webfont or use uppercase letterspaced labels without a deliberate brand exception.
- **Don't** use gradient text — emphasis comes from weight, size, or solid accent color.
- **Don't** use emoji or unicode glyphs as icons; draw stroke SVGs instead.
- **Don't** use a thick colored edge (border-left/right above 1px) on callouts or cards; use a full 1px border.
- **Don't** use sharp corners or borderless cards; 14px radius and 1px borders are the form language.
- **Don't** invent testimonials, benchmarks, or evidence — PRODUCT.md forbids fabricating them, and the visual system must not imply them.
