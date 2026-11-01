# Explanation: Drill 01 — Semantic DOM Tree Architecture

## Key Takeaways

1. **Accessibility & Screen Reader Landmarks**:
   - Screen readers allow visually impaired users to jump directly to landmarks on a page by hitting shortcut keys (e.g., jump directly to `<main>` or `<nav>`).
   - If an application uses `<div class="main">` instead of `<main>`, this landmark is invisible to assistive tools.

2. **The `aria-label` attribute on `<nav>`**:
   - A single web page often has multiple navigation bars (top nav, sidebar nav, footer links).
   - Adding `aria-label="Main Navigation"` allows screen readers to announce: *"Navigation: Main Navigation"* rather than a generic *"Navigation"*, giving clear context to the user.

3. **`<article>` vs `<section>`**:
   - An `<article>` must make complete sense on its own if distributed outside the site (like an RSS feed or syndicated post).
   - A `<section>` is a generic thematic subsection inside a larger document.
