# Explanation: Drill 02 — Stateful Token Counter & Functional Updates

## The Asynchronous State Batching Trap

In React 18, all state updates inside event handlers are **batched**:
```javascript
// TRAP: Both calls read tokens as 0!
setTokens(tokens + 1); // queues update with value: 0 + 1
setTokens(tokens + 1); // queues update with value: 0 + 1
// Outcome: tokens becomes 1!

// SOLUTION: Functional updater function
setTokens(prev => prev + 1); // queues updater: 0 -> 1
setTokens(prev => prev + 1); // queues updater: 1 -> 2
// Outcome: tokens becomes 2!
```
Whenever your next state depends on your previous state, **always use the functional form `prev => ...`**.
