# Drill 01: The Event Loop & Microtask Queue 🔄

## 🎯 Objective
Trace the exact execution order of synchronous code, Promise microtasks, and macrotask timers (`setTimeout`).

## 📋 Requirements
Inside `exercise.js`:
1. `predictExecutionOrder()`:
   Given the following snippet:
   ```javascript
   console.log('1: Sync Start');
   setTimeout(() => console.log('2: Macrotask Timer'), 0);
   Promise.resolve().then(() => console.log('3: Microtask Promise 1'));
   queueMicrotask(() => console.log('4: Microtask Queue'));
   Promise.resolve().then(() => console.log('5: Microtask Promise 2'));
   console.log('6: Sync End');
   ```
   Return an array of the printed strings in their exact chronological execution order.
2. `scheduleMicrotask(callback)`:
   Ensure `callback` is queued as a microtask using `queueMicrotask` or `Promise.resolve().then()`.

## 🧪 Verification
```bash
npx vitest 03-async-js-and-tooling/drills/01-event-loop-and-microtasks
```
