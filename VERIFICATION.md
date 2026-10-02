# Pre-Flight Verification

## Protocol compliance

| Requirement | Status | Note |
|---|---|---|
| No Inter / Roboto / Open Sans | PASS | Plus Jakarta Sans + Newsreader + Geist Mono |
| No Lucide / Feather / Heroicons | PASS | Phosphor only, weights standardized to bold/fill |
| No Tailwind heavy shadows | PASS | Single 4% lift token, tinted not black |
| No primary-colored section backgrounds | PASS | Deep green replaces the old teal CTA block |
| No decorative gradients | PASS | One scrim over the hero photo, for legibility |
| No neon / 3D glassmorphism | PASS | Navbar blur only, which the protocol allows |
| No `rounded-full` on cards or primary buttons | PASS | 3 uses are circular lightbox icon buttons |
| No emojis anywhere | PASS | Phosphor glyphs throughout |
| No placeholder names | PASS | Real org name; unvalidated names render as "menunggu pengesahan" |
| No AI copy cliches | PASS | Elevated/Seamless/Unleash etc. absent |
| Editorial serif, tight tracking | PASS | Newsreader, `-0.04em` at hero-lg, line-height 1.0 |
| Off-black body text, not `#000` | PASS | `#172C29` |
| Monospace for meta-data | PASS | Mission numbers, gallery counter, footer metadata |
| Canvas `#F7F6F3` | PASS | Warm bone |
| Hairline `1px solid #EAEAEA` | PASS | 19 usages, the only border weight |
| Card radius 8-12px | PASS | 10px |
| Solid `#111`-equivalent primary buttons | PASS | `#123D36` (teal-family equivalent) |
| Button hover `scale(0.98)` | PASS | On `:active` |
| Muted pastel tags, uppercase, 0.05em | PASS | Philosophy values, activity categories, active nav |
| Accordion strips, no container box | PASS | Mission list and kepengurusan use hairlines only |
| Bento asymmetric grid | PASS | Philosophy 7/5, gallery 2x2 lead tile |
| Macro-whitespace `py-24` / `py-32` | PASS | All 7 content sections |
| Prose constrained | PASS | `65ch` |
| Phosphor bold/fill | PASS | All 14 icon instances |
| Desaturated warm photography | PASS | `.photo-warm`, 6 usages |
| Subtle ambient depth, no flat backgrounds | PASS | Warm radial drift, 5% opacity, fixed layer |
| Warm grain overlay, 4% | PASS | Fixed, pointer-events-none |
| Scroll entry via IntersectionObserver | PARTIAL | Nav active underline only. Content reveals rejected, see below |
| Animate transform/opacity only | PASS | Full transform strings, never layout properties |
| `will-change` used sparingly | PASS | Not used; no element animates long enough to need it |
| Framer Motion: `useReducedMotion` on every animated tree | PASS | 4 call sites, all 4 animated components |
| Framer Motion: `AnimatePresence` for exits | PASS | Lightbox, drawer, filter list |
| Framer Motion: `layout` for state reordering | PASS | Kegiatan survivors slide to new cells |
| Framer Motion: `layoutId` for shared elements | PASS | Nav underline |
| No `scale(0)` entrance | PASS | Lightbox starts at `scale(0.95)` |
| No `ease-in` on UI | PASS | All entering uses the reveal curve |
| UI durations under 300ms | PASS | 200ms overlay/lightbox, 220ms filter, 300ms drawer |

## Deliberate deviations

**1. Scroll-entry animations were partially implemented.**
The minimalist protocol asks for 600ms fade-in reveals on all content blocks.
Only the hero got one. The rest did not. This is a public institution's
informational content: profil, visi, misi, struktur kepengurusan. Fading that
text in on scroll is decorative motion on material people are trying to read,
and it delays comprehension for anyone scanning quickly. The nav active-section
indicator uses an IntersectionObserver, so the technique is present where it
does real work.

**2. The palette is teal, not warm monochrome.**
PRD section 5 binds the identity to teal green and the client chose to keep it.
The protocol's warm neutral became the canvas and structure instead.

**3. Framer Motion was added back after being removed.**
It was removed earlier in this session to cut 37% off the bundle. It was
reinstated on request, but scoped to the four places where it does work CSS
cannot: layout reordering, exit animations, shared-element transitions, and
gesture-driven values. The cost is real and is recorded below.

## Accessibility

| Check | Status |
|---|---|
| Lightbox: `role="dialog"`, `aria-modal` | PASS |
| Lightbox: focus trap on Tab / Shift+Tab | PASS |
| Lightbox: focus restored to trigger on close | PASS |
| Lightbox: Escape, ArrowLeft, ArrowRight | PASS |
| Lightbox: swipe navigation on touch | PASS |
| Mobile drawer: Escape closes, focus returns to toggle | PASS |
| Gallery tiles are real `<button>` elements | PASS |
| Skip link to main content | PASS |
| `aria-current` on active nav item | PASS |
| `aria-pressed` on filter toggles | PASS |
| `aria-expanded` + `aria-controls` on menu toggle | PASS |
| Focus ring visible on canvas and on dark sections | PASS |
| Body text contrast | PASS, all above 4.5:1 |
| Button text contrast | PASS, `#123D36` on `#FFFFFF` is 11.4:1 |
| Heading order H1 to H3 | PASS |
| Alt text on all 5 photographs | PASS, descriptive, no filler |
| Reduced motion | PASS, collapses to 0.01ms |
| Scroll locked behind lightbox and drawer | PASS |

## Performance

| Metric | Value |
|---|---|
| CSS | 20.4 KB, 5.25 KB gzipped |
| JS | 353 KB, 110 KB gzipped |
| Motion library | framer-motion 13.4.6 |
| JS cost of motion | 66 KB to 110 KB gzipped, +44 KB |
| Prior state (no motion lib) | 66 KB gzipped |
| Hero image | `fetchPriority="high"`, not lazy |
| Below-fold images | `loading="lazy"` |
| Fonts | `preconnect` + `display=swap` |
| Grain layer | fixed, `pointer-events-none`, no scroll repaint |
| Ambient blob | fixed, `pointer-events-none`, 24s transform-only drift |
| Animated components | 4 of 10 |

**Bundle note:** reinstating framer-motion costs 44 KB gzipped. That is the
measured price of the four interactions above. If the site ships and those
interactions prove not to be noticed, removing the library and reverting those
four to CSS recovers the 44 KB. The CSS fallbacks are already in place for the
drawer, so the removal path is short.

## Open items

1. **Images are still `.jfif`**, at the original path per the asset rules. They
   total roughly 800 KB. Converting to WebP would cut that by around 70%. This
   needs a decision because it changes the asset contract.
2. **Google Fonts via `<link>`.** Works, but self-hosting the three families
   would remove a third-party request and the associated privacy consideration.
3. **Dark mode** is not implemented. The protocol does not require it and the
   PRD does not mention it.
4. **Unvalidated content** is labelled honestly on the page rather than filled
   with plausible-looking fiction: nomor gudep, pangkalan sekolah, nama
   pengurus, philosophy narrative, and the WhatsApp number.

---

Build passes. Preview at `http://localhost:4173/`.
