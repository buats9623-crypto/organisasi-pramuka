# DESIGN RULES — ANTI AI-SLOP / ANTI VIBE-CODED UI

## PURPOSE

These rules apply to the ENTIRE project.

The goal is to prevent the website from looking like a generic
AI-generated, template-generated, or "vibe-coded" website.

The website should feel intentionally designed by a human.

These rules do NOT mean:

- make everything minimal
- remove all color
- remove all animation
- remove all gradients
- remove all icons
- remove all rounded corners
- remove all modern UI patterns

The goal is:

> Every visual decision must have a reason.

Prefer intentional design over default AI patterns.

---

# 1. NO DEFAULT AI AESTHETIC

Do not automatically fall into common AI-generated design patterns.

Avoid combining multiple familiar AI patterns such as:

- purple/blue gradients
- gradient hero text
- colorful cards
- glassmorphism
- excessive rounded corners
- excessive shadows
- generic badges
- emoji headings
- three icon boxes in a row
- generic SaaS layouts
- excessive fade-in animations
- cursor-following effects
- generic buzzword copy
- random grain overlays
- excessive decorative elements

Using one of these patterns is not automatically forbidden.

The problem is using them without a clear design purpose.

---

# 2. GRADIENTS

Do NOT use gradients by default.

Especially avoid:

- purple → blue gradients
- blue → purple gradients
- purple → pink gradients
- colorful hero gradients
- gradient hero text
- gradient buttons
- gradient cards
- gradient borders
- gradient chart fills
- gradient blobs

Never add a gradient simply because it looks:

- modern
- premium
- futuristic
- cool

A gradient is allowed only when it supports the established art direction
and has a clear visual purpose.

If a flat color communicates the same thing more clearly,
prefer the flat color.

---

# 3. GRADIENT HERO TEXT

Do not automatically apply gradient text to:

- hero headings
- section headings
- names
- large statements

Gradient typography must have a specific artistic reason.

Prefer strong typography, contrast, scale, composition, or spacing
to create emphasis.

---

# 4. COLOR SYSTEM

Use a restrained and intentional color palette.

Establish:

- primary background
- primary text
- secondary text
- border
- surface
- ONE primary accent color

Additional colors may exist when they have semantic meaning.

Do NOT introduce colors merely for decoration.

Avoid:

- purple card
- green card
- orange card
- blue card
- pink card

when those colors do not communicate anything.

---

# 5. COLOR MUST HAVE MEANING

Use color to communicate:

- interaction
- active state
- selected state
- success
- warning
- error
- category
- emphasis
- brand identity

Do not use color simply because:

> "The section looks empty."

If a color has no communicative or compositional purpose,
consider removing it.

---

# 6. DECORATIVE COLOR

Do not assign different colors to repeated components just
to make them visually interesting.

Avoid:

- colorful statistic cards
- pastel feature tiles
- random colored icon containers
- rainbow-like UI systems
- multiple accent colors competing for attention

The primary accent should remain recognizable throughout the project.

---

# 7. ICONS

# ICON USAGE — STRICT RULE

Icons are NOT decorative filler.

Do NOT use Lucide icons or any other icon library by default.

Avoid the common AI-generated pattern:

- Lucide icon above every heading
- Lucide icon inside every card
- one icon for every skill
- one icon for every statistic
- one icon inside every button
- one icon inside every navigation item
- three icon boxes in a row
- colorful icon containers
- circular icon backgrounds everywhere
- decorative icon + title + description repeated across sections

Do NOT add an icon simply because a component looks empty.

Before adding an icon, ask:

> Does this icon communicate information that cannot be
> communicated equally well through typography, layout, or spacing?

If the answer is NO:

DO NOT USE THE ICON.

---

## When Icons ARE Appropriate

Icons may be used when they provide clear semantic or functional meaning.

Good examples:

- GitHub icon → GitHub link
- LinkedIn icon → LinkedIn link
- Mail icon → email/contact action
- External-link icon → external destination
- Arrow icon → navigation/action
- Menu icon → mobile navigation
- Close icon → close/dismiss
- Search icon → search
- Play icon → play media
- Download icon → download action

Functional icons should remain simple and consistent.

---

## Portfolio Content

Do NOT automatically represent every skill with a Lucide icon.

For example, avoid:

[Code icon] HTML
[Palette icon] CSS
[Terminal icon] JavaScript
[Server icon] Networking

if the icons do not add meaningful information.

Prefer strong typography, logos, labels, or visual composition
when they communicate the skill better.

---

## Repeated Icons

Avoid repeated icon patterns such as:

ICON + TITLE + DESCRIPTION
ICON + TITLE + DESCRIPTION
ICON + TITLE + DESCRIPTION

especially when repeated three or more times.

If multiple items require icons, ensure that:

- the icons have a genuine semantic purpose
- they belong to the same visual system
- they do not become the primary visual focus
- they do not require colorful backgrounds
- they do not overpower the content

---

## Icon Style

Do not mix multiple icon styles without reason.

Avoid combining:

- Lucide
- Font Awesome
- random SVG icons
- emoji
- colorful illustrations

in the same component system.

If an icon is necessary, prefer one coherent icon language.

---

## Icon Priority

Content has priority over icons.

The hierarchy should generally be:

CONTENT
↓
TYPOGRAPHY
↓
LAYOUT
↓
ICON (when useful)

Never:

ICON
↓
DECORATION
↓
CONTENT

---

## Final Icon Check

Before completing a section, ask:

[ ] Did I add a Lucide icon simply because there was empty space?
[ ] Does every icon communicate something?
[ ] Are icons being repeated unnecessarily?
[ ] Does every card have an icon?
[ ] Does every skill have an icon?
[ ] Does every statistic have an icon?
[ ] Are icon containers being used only for decoration?
[ ] Would the design be clearer without some of these icons?

If an icon does not provide meaningful information,
REMOVE IT.

# 8. EMOJIS

Do NOT automatically place emojis inside:

- headings
- section titles
- buttons
- badges
- navigation
- feature cards

Avoid patterns such as:

"Welcome 👋"

"Skills 🚀"

"Let's build something 🔥"

unless the content and visual identity specifically call for it.

---

# 9. CARDS

Cards are NOT the default solution for content organization.

Do not put everything inside cards.

Before creating a card, ask:

> Does this content actually need to be separated
> from the surrounding content?

If not, consider:

- whitespace
- typography
- dividers
- borders
- imagery
- grid composition
- positioning

instead.

---

# 10. REPETITIVE CARDS

Avoid automatically creating:

- 3 identical cards
- 4 identical cards
- 6 identical cards
- repeated statistic cards
- repeated feature cards

Do not create a card grid simply because it is easy to generate.

If cards are necessary, establish hierarchy.

The most important item may be:

- larger
- more prominent
- visually stronger

Secondary items can be quieter.

---

# 11. VISUAL HIERARCHY

Every section must have a clear hierarchy.

The user's eye should know:

1. What to look at first
2. What to look at second
3. What information is supporting content

Do NOT make every element equally strong.

Avoid giving equal visual weight to:

- headings
- cards
- buttons
- badges
- icons
- statistics
- descriptions

Every section should have a clear focal point.

---

# 12. TYPOGRAPHIC HIERARCHY

Typography should establish hierarchy naturally.

Use differences in:

- font size
- weight
- line height
- letter spacing
- width
- contrast
- position

Do not make everything:

- huge
- bold
- centered
- uppercase

Do not use typography as decoration without purpose.

---

# 13. FONTS

Do not automatically use:

- Inter
- Roboto
- system-ui

simply because they are common defaults.

Font choice should support the project's visual identity.

Do not automatically combine trendy font pairs such as:

- Space Grotesk + Instrument Serif
- Grotesk + italic serif

unless the combination genuinely fits the established art direction.

Typography should feel intentional rather than copied from a design trend.

---

# 14. SERIF ITALIC ACCENTS

Do not automatically add italic serif text to:

- hero headings
- individual words
- section titles
- decorative statements

especially when used only to create a "creative portfolio" aesthetic.

Use it only when it supports the actual visual identity.

---

# 15. BORDER RADIUS

Do NOT use large border-radius values everywhere.

Avoid:

- giant rounded cards
- giant rounded sections
- rounded images everywhere
- pill-shaped everything
- identical 24px/32px radius across all components

Radius should be intentional.

Use different levels of radius where appropriate:

- larger surfaces → moderate radius
- cards → moderate/tight radius
- inputs → smaller radius
- small controls → tighter radius

Do not blindly apply one radius value everywhere.

---

# 16. SHADOWS

Do NOT add shadows automatically.

Avoid:

- shadow on every card
- shadow on every button
- shadow on every input
- shadow on every badge
- shadow on every image
- shadow on every section

A shadow should communicate elevation.

Prefer shadows for elements that actually float above the page:

- modal
- dropdown
- popover
- floating navigation
- elevated UI

For normal structure, prefer:

- borders
- contrast
- spacing
- surface differences

---

# 17. GLASSMORPHISM

Do not use glassmorphism as a default visual style.

Avoid automatically combining:

- backdrop blur
- transparent cards
- bright borders
- glowing backgrounds
- heavy shadows

Glass effects may be used when they are part of a deliberate visual concept.

Do not use glassmorphism simply because it makes a design
look "futuristic".

---

# 18. DARK MODE CONTRAST

Do not create dark mode by simply making everything:

- dark gray
- slightly lighter gray
- low contrast

Text and important UI elements must remain readable.

Maintain clear contrast between:

- background
- surface
- primary text
- secondary text
- borders
- interactive elements

Do not sacrifice usability for an aesthetic dark appearance.

---

# 19. BADGES

Do not automatically place a badge above every heading.

Avoid patterns such as:

[AVAILABLE]
BIG HEADLINE

or:

[MY SERVICES]
BIG HEADLINE

when the badge adds no meaningful information.

A badge should communicate something specific:

- status
- category
- state
- metadata
- availability

If it does not communicate information,
remove it.

---

# 20. GENERIC COPY

Never use generic AI-generated marketing copy by default.

Avoid:

- "Welcome back Jordan 👋"
- "Building the future"
- "Transform your ideas"
- "Bring your vision to life"
- "Where creativity meets technology"
- "Take your experience to the next level"
- "Crafting digital experiences"
- "Let's build something amazing"

unless the user explicitly requests such copy.

Use the project's actual identity and content.

For this project, use real information supplied by the user
or existing project files.

Do not invent:

- achievements
- clients
- statistics
- testimonials
- experience
- job titles
- project results

---

# 21. NUMBERS AND DATA

Never use random numbers simply to make the interface look impressive.

Every meaningful number must have context.

When applicable, communicate:

- metric name
- value
- unit
- date
- period
- comparison

Do not display:

"12.5%"

without explaining what it represents.

Never invent statistics.

---

# 22. TABULAR NUMERALS

When displaying multiple numerical values that benefit from alignment,
consider using tabular numerals.

Use them when appropriate for:

- statistics
- prices
- counters
- dates
- numerical lists

Do not use them everywhere unnecessarily.

---

# 23. ANIMATION

Animation must have a purpose.

Do NOT automatically animate every section.

Avoid:

- excessive floating
- random bouncing
- unnecessary scaling
- excessive parallax
- animation on every element
- constant looping animations

Animation should communicate:

- transition
- hierarchy
- interaction
- continuity
- spatial relationships
- information reveal

Prefer subtle, controlled motion.

---

# 24. FADE-IN ON SCROLL

Do not automatically apply fade-in animations to every section.

Avoid:

section 1 → fade in
section 2 → fade in
section 3 → fade in
section 4 → fade in
section 5 → fade in

This quickly becomes predictable and generic.

Use scroll-triggered animation only when it contributes
to the storytelling or composition.

Variation is allowed when intentional.

---

# 25. CURSOR-FOLLOWING EFFECTS

Do not automatically add:

- cursor-following glow
- cursor-following beam
- cursor-following image
- cursor-following spotlight
- cursor-reactive background

These effects should only exist when they contribute
to the interaction concept.

Do not use cursor effects merely to demonstrate that
the website is interactive.

---

# 26. HOVER EFFECTS

Do not make every button and card perform the same hover animation.

Avoid:

hover → fade
hover → scale
hover → shadow

on everything.

Hover states should communicate interaction.

Use appropriate feedback such as:

- color change
- underline
- position shift
- subtle scale
- border change

when it improves usability.

---

# 27. SPACING

Spacing must be systematic.

Avoid:

- random padding
- inconsistent section spacing
- arbitrary gaps
- different spacing for visually identical components

Establish a consistent spacing system.

Related elements should be close.

Unrelated elements should have stronger separation.

Spacing should reinforce hierarchy.

---

# 28. GENERIC SHADCN UI

If shadcn/ui or similar component libraries are used:

Do not leave the default appearance untouched.

Do not simply install components and accept their default
visual styling as the final design.

Adapt:

- spacing
- typography
- radius
- borders
- colors
- states

to the project's design system.

The library should provide functionality and structure,
not determine the entire visual identity.

---

# 29. GRAIN / NOISE TEXTURE

Do not automatically place grain/noise over:

- gradients
- backgrounds
- hero sections
- entire pages

just to make the interface look "premium".

Grain may be used when it contributes to a specific visual direction.

If grain is used, keep it subtle and intentional.

Do not use grain to hide a weak visual composition.

---

# 30. DECORATIVE ELEMENTS

Do not add:

- blobs
- circles
- random lines
- glowing shapes
- particles
- abstract objects
- decorative borders

without purpose.

Before adding a decorative element ask:

> What does this element communicate or contribute?

If the answer is only:

> "The page looks empty."

Do not add it.

Fix the composition instead.

---

# 31. LAYOUT

Do not automatically use common AI layouts such as:

Hero
↓
3 feature cards
↓
3 statistics
↓
3 testimonials
↓
CTA card
↓
Footer

The layout must come from the actual content.

Use:

- asymmetry
- varied proportions
- intentional whitespace
- large typography
- imagery
- editorial composition

when appropriate.

Do not force every section into the same visual structure.

---

# 32. DESIGN REFERENCES

When a visual reference is provided:

DO NOT copy it literally.

Analyze:

- composition
- hierarchy
- typography
- spacing
- proportions
- color relationships
- interaction patterns
- visual rhythm

Then adapt those principles to this project's:

- content
- identity
- existing design system
- technical constraints

A reference is inspiration, not a template.

---

# 33. DESIGN CONSISTENCY

Before creating a new section, inspect the existing project.

Identify:

- established colors
- typography
- spacing
- radius
- border treatment
- animation language
- interaction patterns

New sections must feel like part of the same website.

Do not make every section look like it came from
a completely different template.

---

# 34. REMOVE BEFORE ADDING

When a section looks weak, do not immediately add:

- more colors
- more cards
- more icons
- more gradients
- more animation
- more shadows
- more decorative elements

First ask:

> Can something be removed?

Simplification should be considered before decoration.

---

# 35. SELF-AUDIT

After implementing or modifying a section,
perform a visual audit before considering the work complete.

Check:

## Color

[ ] Is there an unnecessary gradient?
[ ] Is gradient text being used without purpose?
[ ] Are there too many accent colors?
[ ] Does every color have meaning?
[ ] Are different cards colored only for decoration?

## Components

[ ] Are cards actually necessary?
[ ] Are there too many identical cards?
[ ] Are icons communicating information?
[ ] Is a badge actually useful?
[ ] Is glassmorphism being used unnecessarily?

## Hierarchy

[ ] Is there one clear focal point?
[ ] Are secondary elements quieter?
[ ] Does everything have equal visual weight?

## Shape

[ ] Are border radii excessive?
[ ] Are everything equally rounded?
[ ] Are shadows being used everywhere?

## Typography

[ ] Is the font choice intentional?
[ ] Is gradient text unnecessary?
[ ] Are serif italics being used only as decoration?
[ ] Is typography creating hierarchy?

## Animation

[ ] Is every section fading in?
[ ] Are cursor effects actually useful?
[ ] Are hover animations repetitive?
[ ] Is animation helping the experience?

## Content

[ ] Is any copy generic?
[ ] Is any information invented?
[ ] Are numbers real and contextualized?
[ ] Are headings meaningful?

## Overall

[ ] Does this look like a generic AI template?
[ ] Could this section belong to another random website?
[ ] Are there unnecessary visual effects?
[ ] Can anything be removed?
[ ] Does the design have a recognizable identity?

---

# 36. FINAL STANDARD

The website should feel:

- intentional
- coherent
- distinctive
- confident
- structured
- human-designed

It should NOT feel:

- template-generated
- randomly colorful
- overly rounded
- overloaded with shadows
- dependent on gradients
- filled with generic marketing copy
- composed of repetitive cards
- decorated without purpose
- overloaded with trendy AI patterns

Remember:

> Modern does not mean gradient.
>
> Premium does not mean glassmorphism.
>
> Interactive does not mean cursor effects everywhere.
>
> Creative does not mean random decoration.
>
> Professional does not mean a grid of cards.
>
> Minimal does not mean empty.
>
> Good design means intentional decisions.

When in doubt:

1. Clarify the purpose.
2. Establish hierarchy.
3. Remove unnecessary decoration.
4. Use color intentionally.
5. Use typography to communicate hierarchy.
6. Add effects only when they improve the experience.
7. Preserve the project's established visual identity.