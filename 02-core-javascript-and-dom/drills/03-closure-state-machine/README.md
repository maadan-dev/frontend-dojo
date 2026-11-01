# Drill 03: Closures, Lexical Scope & Private State 🔒

## 🎯 Objective
Master JavaScript closures to encapsulate private state, build state machines without ES6 classes, and understand how state persists in memory across function executions.

## 📝 Background
In React, the `useState` and `useEffect` hooks operate via closures: functions remember values from their outer scope even across re-renders. In AI engineering, closures are used to implement token budget enforcement, conversation context accumulators, and API rate limiters.

## 📋 Requirements
Inside `exercise.js`:

1. `createTokenBudget(maxTokens)`:
   - Takes a positive number `maxTokens`.
   - Encapsulates private internal state for `remaining` tokens (do NOT expose `remaining` as a direct property on the returned object!).
   - Returns an object with three methods:
     - `consume(tokens)`: If `tokens <= remaining`, deducts them and returns `{ allowed: true, remaining }`. If `tokens > remaining`, does NOT deduct and returns `{ allowed: false, remaining }`.
     - `getRemaining()`: Returns the current number of remaining tokens.
     - `reset()`: Resets `remaining` back to `maxTokens`.
2. `createRateLimiter(fn, maxCalls)`:
   - Takes a callback function `fn` and a maximum allowed call count `maxCalls`.
   - Returns a wrapper function.
   - For the first `maxCalls` invocations, the wrapper executes `fn(...args)` and returns its result.
   - After reaching `maxCalls`, subsequent invocations must return `null` without calling `fn`.

## 🧪 Verification
Run tests in your terminal:
```bash
npm test 02-core-javascript-and-dom/drills/03-closure-state-machine
```
