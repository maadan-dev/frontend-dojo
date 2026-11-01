# Explanation: Drill 06 — Event Flow, Bubbling & Event Delegation

## Why React Uses Event Delegation Under the Hood

1. **How Event Bubbling Works**:
   - When a child element (e.g. `<button>`) is clicked, the browser fires the event on the button, then re-fires that event on its parent `<div>`, then its grandparent, all the way to `document` and `window`.
   - By listening on the parent, we capture clicks from **any** descendant element as the event bubbles up.

2. **The `closest()` Selector Method**:
   - If a button contains an icon or bold tag (`<button><svg></svg> <b>Run</b></button>`), `event.target` might be the `<svg>` or `<b>` tag, not the button!
   - `event.target.closest('[data-action]')` gracefully climbs up the tree until it finds the button containing the `data-action` attribute.

3. **React's Synthetic Event System**:
   - In React 17+, React attaches root event listeners to the root DOM container (`#root`), rather than attaching individual listeners to thousands of virtual DOM nodes.
   - When you write `<button onClick={handleClick}>` in React, you are benefiting from the exact event delegation pattern you implemented in this drill!
