# Rebuild Design Tokens

## Purpose

This token system translates the legacy brand guide into implementation-ready values for the rebuild.

It is designed to preserve the original portfolio's feel while adding a more current material language: softer radii, selective glass surfaces, cleaner hierarchy, and more polished interaction states.

The source token file is [brand/rebuild-tokens.css](brand/rebuild-tokens.css).

## Design Intent

These tokens should produce a UI that feels like:

- a dark workspace
- a little more refined than the current site
- slightly softer and more tactile
- selectively glassy, not generically glassmorphic

If the interface starts feeling glossy, bright, bubbly, or futuristic, the tokens are being misused.

## Token Groups

### Typography

- Sans stack preserves the legacy technical tone with a flexible modern UI font
- Annotation stack preserves the handwritten HTML-tag signature
- Type scale keeps large, readable display sizes without becoming oversized marketing typography

Recommended usage:

- Hero heading: `--font-size-7`
- Section heading: `--font-size-6`
- Card title: `--font-size-4`
- Body copy: `--font-size-1` or `--font-size-2`
- Tags and annotations: `--tag-font-size`

### Color

The color system keeps the original dark palette nearly intact.

- `--color-canvas` is the site background
- `--color-surface-*` tokens create the layered graphite environment
- `--color-accent` and related tokens are the only strong hue family
- `--color-text-*` tokens preserve the original soft contrast

Use accent green for:

- primary CTA states
- key inline links
- focus rings
- selected or active states

Do not use accent green as a large background wash.

Brightness rule:

- avoid pure white (`#ffffff`) in standard UI text and borders
- keep text in off-white and soft gray ranges for long-session readability
- reserve high-contrast highlights for tiny, purposeful moments only

### Glass

The glass tokens are the modernization layer.

Use them sparingly for:

- sticky nav
- elevated cards
- modals
- utility panels

Avoid using glass for:

- the entire page shell
- dense text regions
- every surface on the page at once

Recommended pattern:

- default sections use `--panel-bg`
- featured or floating surfaces use `--panel-glass-*`

### Radii

The new radii are intentionally softer than the legacy site.

- Buttons: `--button-radius`
- Inputs: `--input-radius`
- Standard panels: `--panel-radius`
- Main shells or standout containers: `--shell-radius`

The system is rounded, but still disciplined. Avoid switching everything to `--radius-pill`.

### Shadow and depth

The shadow tokens are diffused and low-contrast. They should suggest depth, not drama.

- `--shadow-sm` and `--shadow-md` are the default UI elevations
- `--shadow-accent` is only for primary actions or accent-led emphasis
- `--shadow-inset-highlight` helps glass or input surfaces feel more tactile

### Motion

Motion should remain subtle and quiet.

- Use `--duration-fast` for hover and press states
- Use `--duration-base` for panel transitions and opacity shifts
- Use `--ease-standard` or `--ease-emphasized` only

Link motion guidance:

- project and navigation links should use short transition feedback (color, border, and subtle transform)
- avoid abrupt state changes on hover and focus

## Suggested Component Mapping

### App shell

- Background: `--color-canvas`
- Main container: `--shell-bg`
- Radius: `--shell-radius`
- Border: `--shell-border`
- Shadow: `--shell-shadow`

### Sticky nav

- Background: `--nav-bg`
- Border: `--nav-border`
- Backdrop filter: `--nav-backdrop`
- Height: `--nav-height-desktop` or `--nav-height-mobile`

### Section panels

- Default section: `--panel-bg`
- Glass feature section: `--panel-glass-bg`
- Radius: `--panel-radius` or `--panel-glass-radius`

### Buttons

- Primary background: `--button-primary-bg`
- Secondary background: `--button-secondary-bg`
- Radius: `--button-radius`
- Height: `--button-height-md` or `--button-height-lg`

### Inputs

- Height: `--input-height`
- Background: `--input-bg`
- Border: `--input-border`
- Focus border: `--input-border-focus`
- Radius: `--input-radius`

## Usage Rules

1. Start every page from the legacy dark palette, not from glass.
2. Use glass on selected layers only, usually one to three key surfaces per view.
3. Keep annotation details subtle so they remain a signature rather than a gimmick.
4. Use the accent color for meaning and action, not decoration.
5. Keep radii consistent within a component family.

## Example CSS Pattern

```css
.page-shell {
  background: var(--shell-bg);
  border: var(--shell-border);
  border-radius: var(--shell-radius);
  box-shadow: var(--shell-shadow);
}

.glass-nav {
  background: var(--nav-bg);
  border: var(--nav-border);
  backdrop-filter: var(--nav-backdrop);
}

.primary-button {
  min-height: var(--button-height-lg);
  padding-inline: var(--button-padding-inline);
  border-radius: var(--button-radius);
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
  box-shadow: var(--button-primary-shadow);
}

.feature-card {
  background: var(--panel-glass-bg);
  border: var(--panel-glass-border);
  border-radius: var(--panel-glass-radius);
  box-shadow: var(--panel-glass-shadow);
  backdrop-filter: var(--panel-glass-backdrop);
}
```

## Next Step

The natural next step is to apply these tokens to a rebuild scaffold so the homepage, nav, cards, and contact form all share the same visual language from the start.
