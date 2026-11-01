# Drill 02: Stateful Token Counter & Functional Updates ⚡

## 🎯 Objective
Master React's `useState` hook, understand why state updates are asynchronous and batched, and use functional updater forms `setCount(prev => prev + 1)` to prevent race condition bugs.

## 📋 Requirements
Inside `exercise.jsx`, create `TokenCounter({ initialTokens = 0, costPerToken = 0.002 })`:
1. Initializes `tokens` state to `initialTokens`.
2. Displays:
   - `<span data-testid="token-count">{tokens}</span>`
   - `<span data-testid="total-cost">${(tokens * costPerToken).toFixed(4)}</span>`
3. Renders buttons:
   - `<button data-testid="btn-add-1">Add 1</button>`: Increments by 1.
   - `<button data-testid="btn-add-double">Double</button>`: Multiplies tokens by 2 using functional updater `prev => prev * 2`.
   - `<button data-testid="btn-batch-add-3">Add 3</button>`: Must call the state updater 3 times sequentially using functional state updates (`setTokens(p => p + 1)`) so the total always increases by 3 in a single click event.
   - `<button data-testid="btn-reset">Reset</button>`: Resets tokens back to `initialTokens`.

## 🧪 Verification
```bash
npx vitest 04-react-foundations/drills/02-stateful-token-counter
```
