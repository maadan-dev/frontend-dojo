# Explanation: Drill 02 — Promise Chaining, Error Handling & Finally

## Key Promise Mechanics

1. **Returning Inside `.then()` Automatically Wraps Values in a Promise**:
   - When you return `{ id, status: 'SUCCESS' }` inside `.then()`, JavaScript automatically wraps it into a resolved Promise for the next handler.
   - If you throw `throw new Error(...)`, JavaScript automatically rejects the Promise and jumps straight to the nearest `.catch()`.

2. **The Inviolability of `.finally()`**:
   - Regardless of whether the Promise resolved cleanly or threw a violent error, `.finally()` is guaranteed to execute.
   - This makes it the single best place to reset loading spinners, release database locks, or abort hanging network connections.
