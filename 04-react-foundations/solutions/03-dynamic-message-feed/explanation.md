# Explanation: Drill 03 — Dynamic Message Feed & The Reconciliation Key Prop

## Why Keys Must Be Stable and Unique

1. **The Virtual DOM Diffing Algorithm**:
   - When state changes, React compares the previous Virtual DOM tree against the newly returned tree.
   - Without keys, React compares children by index. If you delete the first item, React thinks item 0 changed into item 1, item 1 changed into item 2, and the last item was deleted!
   - With `key={msg.id}`, React instantly recognizes: "Only the node with key `1` was removed. Leave all other nodes completely untouched in the real DOM."

2. **Immutable Filtering**:
   - Calling `messages.splice(index, 1)` mutates the existing array in place, which confuses React.
   - `messages.filter(...)` produces a clean, new array with a new memory address, cleanly scheduling the re-render.
