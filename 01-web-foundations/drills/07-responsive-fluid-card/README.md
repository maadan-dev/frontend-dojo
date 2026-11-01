# Drill 07: Responsive UI & Fluid Typography with Clamp 📱

## 🎯 Objective
Implement a mobile-first responsive design using media queries and fluid typography via CSS `clamp()` so layout and text scale naturally across phones, tablets, and wide monitors.

## 📝 Background
Writing fixed font sizes (`font-size: 32px`) and desktop-first desktop media queries (`@media (max-width: ...)`) produces brittle stylesheets full of overrides. Industry best practice is:
1. **Mobile-First**: Base styles target mobile viewports first. Progressive enhancement is added via `@media (min-width: ...)`.
2. **Fluid Typography**: Using CSS `clamp(min, preferred, max)` eliminates choppy breakpoint jumps by smoothly scaling font sizes relative to viewport width (`vw`).

## 📋 Requirements
Inside `responsive.css`:

1. **Fluid Typography (`h1`)**:
   - The `.hero-title` must use `clamp()` to scale smoothly:
     - Minimum: `1.5rem`
     - Preferred: `4vw + 1rem`
     - Maximum: `3rem`
2. **Mobile-First Card Container (`.card-deck`)**:
   - Base style: `display: flex;` with `flex-direction: column;` and `gap: 16px;`.
3. **Tablet/Desktop Breakpoint (`@media (min-width: 768px)`)**:
   - The `.card-deck` must switch to `flex-direction: row;` and `flex-wrap: wrap;`.
   - Each `.deck-card` within the breakpoint must have `flex: 1 1 calc(50% - 16px);` (fitting two cards per row).
4. **Desktop Breakpoint (`@media (min-width: 1024px)`)**:
   - Each `.deck-card` must adjust to `flex: 1 1 calc(33.333% - 16px);` (fitting three cards per row).

## 🧪 Verification
Run tests in your terminal:
```bash
npm test 01-web-foundations/drills/07-responsive-fluid-card
```
