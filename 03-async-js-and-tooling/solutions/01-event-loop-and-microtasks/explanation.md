# Explanation: Drill 01 — The Event Loop & Microtask Queue

## Execution Flow Analysis

1. `console.log('1: Sync Start')` runs immediately on the Call Stack.
2. `setTimeout(..., 0)` hands its timer callback off to the browser Web API environment, which places it onto the **Macrotask Task Queue**.
3. The two `Promise.resolve().then(...)` and `queueMicrotask(...)` handlers are appended to the **Microtask Queue**.
4. `console.log('6: Sync End')` runs on the Call Stack.
5. The Call Stack is now empty. The Event Loop prioritizes the **Microtask Queue** and empties tasks 3, 4, and 5.
6. Only when all microtasks are exhausted does the Event Loop reach into the Task Queue to execute task 2.
