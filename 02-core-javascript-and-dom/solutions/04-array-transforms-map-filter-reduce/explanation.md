# Explanation: Drill 04 — The Big 5 Higher-Order Array Transformations

## Why Functional Pipelines Beat Imperative Loops

1. **Declarative Readability**:
   - In imperative loops, you manage indexes `let i = 0; i < len; i++`, initialize empty arrays outside, and push items manually.
   - Higher-order methods express **intent**: "I want to map this array into this format" or "I want to reduce this into a total".

2. **The Power of `reduce` for Data Grouping**:
   - `reduce((acc, item) => ..., {})` is the standard pattern for turning lists into dictionary maps (grouping by category, status, or model).
   - `acc[trace.model] = (acc[trace.model] || 0) + trace.costUsd` gracefully handles initializing keys on their first encounter.

3. **Short-Circuiting with `some` and `every`**:
   - Unlike `forEach` or `map` (which always traverse every item), `.some()` halts the instant it finds a match, and `.every()` halts the instant a condition fails, running in $O(1)$ best-case time.
