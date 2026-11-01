# Drill 06: Event Flow, Bubbling & Event Delegation 🌊

## 🎯 Objective
Implement high-performance event handling on dynamic lists using the **Event Delegation** pattern, capturing click events across multiple action buttons via a single parent listener.

## 📝 Background
In AI applications, agent action tools and message cards are constantly mounted and removed dynamically. If you attach an `addEventListener` to every button on every card:
1. You leak memory when cards are removed without cleaning up listeners.
2. Newly created cards don't have listeners unless you manually attach them again.
3. Attaching hundreds of listeners degrades scrolling and rendering performance.

With **Event Delegation**, you attach **ONE** listener to the parent container. When a child button is clicked, the event **bubbles up** to the parent, where `event.target.closest()` identifies the target.

## 📋 Requirements
Inside `exercise.js`:

Implement `setupToolHub(containerElement, onAction)`:
1. Attaches a **single** `'click'` event listener to `containerElement`.
2. Inspects clicked targets using `event.target.closest('[data-action]')`.
3. If an action element was clicked:
   - Reads the action string from `data-action` (e.g. `'execute'` or `'delete'`).
   - Finds the parent card (`.tool-card`) and reads its `data-id`.
   - If the action is `'delete'`, removes that `.tool-card` element from the DOM.
   - Invokes `onAction({ action, toolId })`.
4. If a click occurred outside any `[data-action]` button (e.g. clicking card background or whitespace), do nothing.
5. Returns a cleanup function that removes the event listener from `containerElement` to prevent memory leaks.

## 🧪 Verification
Run tests in your terminal:
```bash
npm test 02-core-javascript-and-dom/drills/06-event-delegation-action-hub
```
