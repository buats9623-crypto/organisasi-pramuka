# Design System

Premium Utilitarian Minimalism, layered over the client's locked teal identity.

## The One Decision That Shaped Everything

The protocol specifies a warm monochrome palette. PRD section 5 binds the visual
identity tightly to the client's teal. **Teal wins**, per client instruction.

So the protocol was applied to everything *except* the one thing it could not own:
the accent colour. Warm monochrome became the **canvas and structure**. Teal
stayed the **single accent**, used only where it carries meaning.

The result is that the teal reads as a deliberate signal against a quiet
neutral field, rather than one more colour competing for attention.

## Colour

```
Canvas          #F7F6F3   warm bone, page background
Surface         #FFFFFF   cards
Surface sunk    #FBFBFA   image wells, inset areas
Hairline        #EAEAEA   the only border weight on the page

Text primary    #172C29   never pure black
Text secondary  #647873

Accent          #39CFC0   teal, PRD primary
Accent ink      #0E7A6E   teal for text on light
Deep            #123D36   section backgrounds, primary buttons
```

Muted pastels, tags only: `pastel-greenBg` `#EDF3EC` on `#346538`,
`blueBg` `#E1F3FE` on `#1F6C9F`, `yellowBg` `#FBF3DB` on `#956400`,
`redBg` `#FDEBEC` on `#9F2F2D`.

## Type

| Role | Face | Where |
|---|---|---|
| Display | Newsreader | Hero headline and section headlines only |
| Sans | Plus Jakarta Sans | Body, UI, buttons, everything else |
| Mono | Geist Mono | Figures, counters, metadata strips |

Newsreader is an editorial serif, which is what makes the neutral palette read
as considered rather than empty. It is used sparingly: headlines carry it,
nothing else does.

Hero: `text-hero` 2.75rem, `text-hero-md` 3.75rem, `text-hero-lg` 4.75rem.
Tight tracking down to `-0.04em` at the largest size, line height 1.0.

## Shape

One rule, no exceptions:

- Cards and surfaces: `10px`, `1px solid #EAEAEA`
- Buttons: `6px`
- Tags and filters: pill
- Circular icon buttons (lightbox controls only): `rounded-full`

No shadows beyond `0 2px 8px rgba(0,0,0,0.04)` on hover, which is 4% opacity and
tinted, never black.

## Layout

Content is constrained to `max-w-shell` (80rem) with prose blocks at `65ch`.
All seven content sections use `py-24 md:py-32`.

Nine sections, nine layout families, so nothing repeats:

1. Hero: full-bleed photo, bottom-left text, editorial serif
2. About: 5/7 split, sticky image column
3. Philosophy: 7/5 bento, one wide lead tile
4. Visi dan misi: 5/7 split, hairline mission list, 3-col pillar grid
5. Kegiatan: filter pills + 3-col card grid
6. Galeri: 4-col asymmetric grid, first tile spans 2x2
7. Kepengurusan: three hairline-separated groups
8. Bergabung: bordered container inside canvas
9. Footer: 4-column, mono metadata strip

## Motion

Quiet, near-imperceptible. Framer Motion drives four places; everything else is
CSS. Shared curves and durations live in `src/lib/motion.ts` so the
library-driven and CSS-driven motion share one timing system.

**Where the library earns its weight:**

| Location | Technique | What it communicates |
|---|---|---|
| Hero | Parent/child variants, one sequence | Deliberate entrance order |
| Kegiatan filter | `layout` + `AnimatePresence popLayout` | Which cards moved, not just that something changed |
| Lightbox | `AnimatePresence` enter/exit | Where the photo came from and went |
| Nav underline | `layoutId="nav-underline"` | Which section you are in |

**Deliberately static:** About, Filosofi, Visi dan misi, Galeri, Kepengurusan,
Bergabung. These are read-content. Fading text in while someone reads it delays
comprehension, and blanket per-section reveals are the pattern that makes a page
read as generated.

- Hover: 200ms `cubic-bezier(0.16, 1, 0.3, 1)`, gated behind
  `@media (hover: hover) and (pointer: fine)`
- Hero entrance: 600ms, 12px rise, 70ms stagger, 100ms lead-in
- Filter layout: 220ms, survivors slide to their new grid cell
- Lightbox: 200ms overlay fade, 200ms frame at `scale(0.95)` to `scale(1)`
- Drawer: 300ms `cubic-bezier(0.32, 0.72, 0, 1)`, exits the way it entered
- Ambient hero warmth: 24s drift, 5% opacity, fixed and pointer-events-none
- All `transform` values are full strings, not `x`/`y`/`scale` shorthands, so
  framer-motion writes a GPU-composited transform
- `useReducedMotion()` gates every JS animation. Under reduced motion the
  opacity fade survives and all movement is dropped. The CSS block and the JS
  hook are complementary, not redundant.

## Photography

`filter: saturate(0.72) contrast(1.04) brightness(1.02)` on every image, so the
documentary photos sit inside the warm neutral field instead of fighting it.
A 4% fixed grain layer ties the whole page together.

## Deliberate Omissions

- **Dark mode.** The protocol does not require it, the PRD does not mention it,
  and the palette is a light brand system. Not shipped.
- **Scroll-reveal animations.** The protocol asks for them. They were rejected:
  fading text in on a public institution's informational content is decorative
  motion on read-content, which the animate gate exists to prevent.
- **WebP conversion.** Images are still `.jfif` at the original path, per the
  asset rules. Converting them is a real performance win and needs a decision.
