# Legacy Brand Guide

## Purpose

This document captures the existing portfolio's visual and UX identity so the site can be rebuilt without losing its character.

The goal is not to preserve every implementation detail. The goal is to preserve the feel: calm, code-native, thoughtful, and trustworthy.

## UX Framing

### Inferred target audience

- Hiring managers reviewing technical credibility quickly
- Recruiters scanning for role fit and professionalism
- Potential clients or collaborators deciding whether to reach out

### Likely visitor mindset

- Curious but impatient
- Looking for proof of skill fast
- Trying to understand both technical competence and personal fit

### Core user job

Answer three questions with minimal friction:

1. Who is Justus?
2. What kind of work does he do?
3. Is he someone I should contact?

### Current UX strengths

- The site communicates a distinct developer identity immediately
- The tone is personal without becoming casual or playful
- The content structure covers credibility, work samples, tools, and contact
- The dark interface and restrained motion create a composed first impression

### Current UX friction

- The home page splits attention between projects and toolkit instead of driving one primary next step
- The strongest story is spread across separate routes, so visitors assemble the narrative themselves
- Contact is always present, but the value proposition leading into it is fairly light
- Some interaction patterns feel implementation-led rather than user-led, especially overlays, modals, and mobile navigation

## Brand Essence

### Brand statement

A grounded software developer portfolio that feels like a carefully arranged workspace: technical, calm, human, and dependable.

### Brand attributes

- Analytical
- Intentional
- Reliable
- Low-ego
- Craft-aware
- Human-centered

### Personality

The brand reads as a developer who cares about systems, clarity, and real-world usefulness. It is not flashy, trend-driven, or performative. It signals maturity through restraint.

### Voice and tone

- Direct, not salesy
- Thoughtful, not academic
- Confident, not loud
- Personal, not overly intimate
- Practical, not abstract

## Visual Identity

### Overall look

The current site is a dark editorial portfolio filtered through a code-editor lens.

Its distinctiveness comes from combining three ideas:

- A matte charcoal interface
- HTML-inspired annotation details
- One muted green accent used with discipline

### Signature motifs to preserve

- Handwritten HTML-like section tags such as home, nav, contact, and footer
- Bracketed active navigation treatment
- Custom monogram logo in the navigation
- Circular black-and-white profile portrait
- Dark nested panels with subtle elevation changes
- Green used as a signal color rather than a decorative color

## Color System

### Extracted legacy palette

- Canvas: #111111
- Primary surface: #161616
- Secondary surface: #222222
- Panel surface: #1d1d1d
- High-emphasis text: #f0f0f0
- Primary text: #dadada
- Secondary text: #ababab
- Annotation gray: #474545
- Primary accent: #295928
- Link accent: #449a42
- Warning: #d43a3a

### Color direction

This is a low-glare, low-saturation palette. It feels more like a studio or terminal than a marketing site.

The emotional effect is:

- Dark enough to feel technical
- Soft enough to avoid harshness
- Green enough to imply growth, logic, and focus rather than hype

### Rebuild color rule

Keep the palette close, but make it more systematic:

- 60% charcoal background and base surfaces
- 30% stepped graphite panels and containers
- 10% muted green for interactive emphasis

### Rebuild recommendation

- Preserve the dark neutral family almost exactly
- Slightly refine the green so it reads cleaner on modern displays
- Keep bright white out of the UI except in very rare highlight moments
- Use the annotation gray only for decorative or code-like accents, not important content

### Modernized surface direction

The rebuild can absolutely introduce a more current Apple-like surface treatment, but it should be interpreted as a material upgrade, not a brand reset.

That means:

- Keep the original charcoal palette as the base layer
- Add subtle translucency only on selected surfaces such as navigation, cards, and overlays
- Use soft edge highlights and low-opacity borders to create depth
- Avoid bright frosted white panels that would break the original mood

The intended effect is smoked glass over graphite, not floating white glass over a generic dark UI.

## Typography

### Existing type behavior

- Primary display and UI font: Roboto Flex
- Decorative annotation font: Bad Script
- Fallbacks in the app entry still lean system-default

### Typographic feel

The typography mixes two signals:

- Variable sans for modern, technical, interface-led clarity
- Loose handwritten script for code annotation and personality

That pairing is the heart of the brand. It creates a balance between systems thinking and human warmth.

### Existing scale characteristics

- Hero headlines are large and assertive
- Body copy is also fairly large, which makes the site feel open and readable
- Section annotations are small, subtle, and atmospheric

### Rebuild typography recommendation

- Keep a variable or highly flexible sans for all primary UI and marketing content
- Keep a handwritten accent font only for annotation moments, never for functional UI
- Tighten the type scale into a more consistent system while preserving the generous reading size
- Use the script font as a signature layer, not as a recurring content style

## Layout and Composition

### Existing layout character

- Single app shell with sticky navigation
- Large framed content sections inside a dark canvas
- Desktop hero uses a split layout with copy on the left and portrait on the right
- Supporting sections rely on dark cards and centered compositions
- Footer and navigation span wider than the content frame to create a shell effect

### Spatial feel

The site uses generous spacing and large sectional blocks. It feels calm and deliberate rather than dense.

### Shapes and edges

- Small border radii, mostly 4px to 5px
- Rectangular panels with occasional soft rounding on images and cards
- Circular portrait as the only major curved moment

### Modernized shape direction

This is one place where the rebuild should evolve.

The original site is slightly sharper and boxier than current interface trends. Updating it with more rounded buttons, cards, and containers will help it feel current, but the rounding should stay disciplined.

Recommended direction:

- Primary buttons: 12px to 16px radius
- Secondary buttons and pills: 14px to 18px radius
- Cards and panels: 16px to 24px radius
- Large shells or glass overlays: 20px to 28px radius

Do not round everything equally. The site should still feel structured and engineered, not soft and playful.

### Rebuild layout recommendation

- Preserve the shell-within-canvas structure
- Preserve generous spacing and a strong central content frame
- Keep the home hero as a split composition on desktop and a stacked composition on mobile
- Use a cleaner spacing system so the composition feels more intentional and less manually positioned

## Interaction Patterns

### Existing behavior

- Page-level fade-in transitions
- Navigation hover underline and active bracket state
- Hover-reveal project overlays
- Modal-based personality cards
- Sticky navigation
- Mobile accordion menu
- Theme toggle concept, although the light theme is unfinished

### Interaction feel

The interface favors restrained motion and low-noise interactions. That suits the brand.

### What to preserve

- Soft fade transitions between major views
- Distinct active-state treatment in navigation
- Interactions that feel quiet and precise rather than animated for their own sake

### What to modernize

- Replace hover-dependent project discovery with always-legible project summaries plus enhanced hover states
- Improve keyboard and focus visibility across custom interactive elements
- Make mobile navigation feel intentional rather than adapted from desktop behavior
- Treat theme switching as either a polished feature or remove it until it is ready

## Content and Storytelling

### Current narrative structure

The site tells a complete story, but not in the strongest order.

Current ingredients:

- Home introduces the person and gives two branching options
- Projects provide proof of work
- Toolkit provides tools and technologies
- About adds personality and self-description
- Contact remains persistently available

### Story the brand is really telling

I build practical software carefully, and I am a thoughtful person to work with.

That is a strong brand story. The rebuild should make it more immediate.

### Rebuild content direction

- Lead with practical value and work credibility first
- Support that with a concise personal profile, not a separate personality dump
- Let tools support the work story instead of competing with it
- Keep the tone modest and concrete

## Brand Tension to Keep

This site works because it holds two opposing traits together:

- Technical and approachable
- Structured and personal
- Dark and warm
- Professional and handcrafted

If the rebuild becomes too polished and generic, it will lose its identity.
If it becomes too literal with code motifs, it will feel dated.

The right direction is refined code-native minimalism.

## What Must Be Preserved

- Dark charcoal environment
- Restrained green accent strategy
- HTML annotation motif
- Monogram logo or a close evolution of it
- Calm, large-format spacing
- Personal but low-drama tone of voice
- Sense of thoughtful software craft over visual trend-chasing

## What Should Change in the Rebuild

- Stronger visual hierarchy on the home page with one primary CTA
- More consistent spacing and type rhythm
- Better accessibility for focus states and interactive controls
- Cleaner card and project presentation with less reliance on overlays and modals
- More explicit proof of outcomes, not just tools and project names
- Mobile-first refinement rather than desktop adaptation

## Rebuild Style Direction

If the legacy site is the reference, the rebuilt site should feel like this:

A modern developer portfolio inspired by the atmosphere of a code workspace, using matte charcoal surfaces, restrained green signals, large readable typography, precise spacing, softened radii, and a few carefully placed glass-like surfaces that make the experience feel current without losing its original personality.

## Glass Modernization Rules

### The right reference

Use Apple-like glass as a refinement reference for material quality, layering, blur, and softness.

Do not use it as a reference for brand tone.

Apple glass works here only if it is filtered through the existing portfolio identity:

- darker
- more grounded
- more editorial
- more code-native

### Where glass belongs

- Sticky navigation
- Project or content cards
- Modal or dialog shells
- Hover panels or secondary overlays
- Theme or utility controls

### Where glass should be avoided

- Main page background
- Large text blocks where clarity matters most
- Every button and card at once
- Any place where blur would reduce contrast or readability

### Glass styling constraints

- Keep blur subtle to medium, not exaggerated
- Use dark translucent fills instead of pale translucent fills
- Pair blur with hairline borders and soft inner highlights
- Keep shadows diffused and low-contrast
- Let the glass sit inside the original charcoal world, not above it as a separate aesthetic

### Rounded control direction

More rounded buttons are appropriate and will help date the site forward.

The key is to combine rounded controls with the original typography, palette, and restraint so they feel premium rather than trendy.

Recommended behavior:

- Primary CTA buttons should feel soft, solid, and tactile
- Secondary buttons can use tinted glass or low-contrast panel styling
- Inputs can become slightly more rounded than the original design
- Hover states should brighten or lift subtly, not glow loudly

### What would break the original feel

- Bright translucent whites
- Overuse of blur on every component
- Large saturated gradients
- Bubble-like shapes with playful proportions
- Ultra-rounded pills everywhere
- Neon green accents

If the interface starts feeling futuristic, glossy, or luxury-tech, it has moved too far away from the original brand.

## Practical Design Rules for the Rebuild

- Keep the neutral palette dark and soft, never glossy or high-contrast black-and-white
- Use one accent hue only, and make it earn attention
- Use one primary sans family and one decorative annotation family
- Prefer simple surfaces and spacing over visible decoration
- Let typography and composition carry the brand more than effects
- Keep motion subtle, short, and purposeful
- Preserve the coded personality in details, not in every component
- Use glass selectively as a layer treatment, not as the whole visual system
- Increase border radius enough to feel modern, but not enough to feel playful

## Source Files Reviewed

- src/components/App.css
- src/components/App.js
- src/components/Home/Home.js
- src/components/Nav/Nav.js
- src/components/Nav/NavItem.js
- src/components/Nav/NavMobileMenu.js
- src/components/About/About.js
- src/components/About/AboutItem.js
- src/components/Project/Project.js
- src/components/Project/ProjectItem.js
- src/components/Toolkit/Toolkit.js
- src/components/Toolkit/ToolkitItem.js
- src/components/Contact/Contact.js
- src/components/Footer/Footer.js
- src/redux/reducers/about.reducer.js
- src/redux/reducers/project.reducer.js
- src/redux/reducers/tools.reducer.js
- src/redux/reducers/routes.reducer.js
