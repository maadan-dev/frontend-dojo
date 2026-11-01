# Explanation: Drill 02 — Execution Context, Hoisting & The TDZ

## The Anatomy of the Two-Phase Engine

1. **Why `var x = undefined` vs `let/const` TDZ**:
   - In ES5, `var` was hoisted and initialized with `undefined`. If you referenced `x` before `var x = 10;`, it silently evaluated to `undefined` instead of throwing an error. This was a notorious source of bugs.
   - In ES6+, `let` and `const` are hoisted, but **not initialized**. The window between the start of the block and the declaration is called the **Temporal Dead Zone (TDZ)**. Any read or write attempt in this zone throws an immediate, helpful `ReferenceError`.

2. **Function Declarations vs Function Expressions**:
   - `function add() {}` is completely hoisted with its body during the Creation Phase.
   - `const add = () => {}` is treated like any variable: it lives in the TDZ until execution reaches that line.
