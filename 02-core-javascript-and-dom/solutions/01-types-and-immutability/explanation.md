# Explanation: Drill 01 — Types & Immutability Patterns

## Why Immutability is the Foundation of React

1. **The Equality Check Problem**:
   - In JavaScript, `===` on objects compares **memory references**, not object properties.
   - If you mutate an object:
     ```javascript
     state.temperature = 0.9;
     // Old reference === New reference -> React thinks nothing changed!
     ```
   - React will skip re-rendering because it performs a fast $O(1)$ reference equality check `prevProps === nextProps`.

2. **Spread Operator (`...`)**:
   - Creates a new shallow copy. For top-level changes, `{ ...obj, key: val }` is fast and memory-efficient.

3. **Native `structuredClone()`**:
   - Until recently, developers used `JSON.parse(JSON.stringify(obj))` for deep copies (which broke on Dates, Maps, Sets, and circular references).
   - Modern JavaScript now has `structuredClone()`, a fast native C++ algorithm built directly into the V8/browser runtime.
