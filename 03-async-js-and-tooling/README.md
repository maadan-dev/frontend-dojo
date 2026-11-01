# Module 03: Asynchronous JavaScript & Modern Tooling ⚡

> **Talent Nation Alignment:** Module 10 — Asynchronous JS & Modern Tooling (Lessons 70.1 to 85.1)  
> **Prerequisites:** Module 02 (Core JavaScript & The DOM Engine)

---

## 🎯 Why Asynchronous JS is the Lifeblood of AI Engineering

In AI engineering, **almost everything is asynchronous**:
1. You make network calls to LLM inference endpoints (which take 500ms to 10s to complete).
2. You stream tokens over Server-Sent Events (SSE) or WebSockets.
3. You parallelize tool executions with `Promise.all()` (e.g., searching the web and querying a vector DB at the same time).

If you don't understand the JavaScript Event Loop, your application will freeze, race conditions will corrupt conversation history, and unhandled promise rejections will crash your app.

---

## ⚙️ 1. The Event Loop, Call Stack & Microtask Queue (Lessons 75.1 & 76.1)

JavaScript is **single-threaded** (only one task runs on the main thread at a time). How does it handle non-blocking asynchronous operations? Through the **Event Loop**:

```
                       ┌────────────────────────────┐
                       │         CALL STACK         │ (Executes current frame)
                       └──────────────┬─────────────┘
                                      │ (Empty?)
           ┌──────────────────────────┴──────────────────────────┐
           ▼                                                     ▼
┌─────────────────────────────┐               ┌─────────────────────────────────────┐
│    MICROTASK QUEUE (VIP)    │               │         TASK QUEUE (MACRO)          │
│ - Promises (.then, catch)   │ ◄── HIGHER ── │ - setTimeout, setInterval           │
│ - queueMicrotask            │     PRIORITY  │ - DOM Events, I/O                   │
└─────────────────────────────┘               └─────────────────────────────────────┘
```

### The Golden Execution Rule:
1. Synchronous code on the **Call Stack** runs first until empty.
2. The Event Loop checks the **Microtask Queue** and empties **ALL microtasks** (Promises).
3. The Event Loop takes **ONE** task from the **Task Queue** (Macrotask).
4. The cycle repeats!

---

## 📜 2. Promises & Chaining (Lessons 70.1, 71.1, 73.1, 74.1)

A **Promise** is an object representing the eventual completion or failure of an asynchronous operation.

### The 3 Promise States:
1. `Pending`: Initial state, neither fulfilled nor rejected.
2. `Fulfilled`: Operation completed successfully (`resolve(value)`).
3. `Rejected`: Operation failed (`reject(error)`).

### Chaining with `.then()`, `.catch()`, and `.finally()`:
```javascript
fetchModelPrediction(prompt)
  .then((res) => res.json())
  .then((data) => displayTokens(data))
  .catch((err) => handleNetworkError(err))
  .finally(() => hideLoadingSpinner()); // Always runs, pass or fail!
```

### Parallel Execution with `Promise.all()`:
When you have multiple independent async operations, running them sequentially wastes time:
```javascript
// BAD: Sequential (Takes 2s + 3s = 5s total)
const webResults = await searchWeb(query);
const vectorResults = await queryVectorDb(query);

// GOOD: Parallel (Takes max(2s, 3s) = 3s total!)
const [webResults, vectorResults] = await Promise.all([
  searchWeb(query),
  queryVectorDb(query)
]);
```

---

## ⏳ 3. Modern `async/await` (Lesson 77.1)

`async/await` is syntactic sugar on top of Promises that makes asynchronous code read like clean, synchronous code:
```javascript
async function executeAgentFlow(query) {
  try {
    const rawResponse = await fetch('/api/agent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    if (!rawResponse.ok) {
      throw new Error(`HTTP Error: ${rawResponse.status}`);
    }

    const payload = await rawResponse.json();
    return payload.answer;
  } catch (error) {
    console.error('Agent failed:', error);
    throw error;
  }
}
```

---

## 🛠️ 4. Modern ES6+ Syntax & Data Transformation (Lessons 79.1 to 82.1)

### Destructuring & Spread/Rest
```javascript
// Object destructuring with aliases & defaults:
const { model: modelName = 'flash', tokens: { prompt, completion } } = response;

// Array spread (immutability) & Rest parameters:
const [primaryModel, ...fallbackModels] = ['gemini-3.8-pro', 'flash', 'claude'];
```

### Optional Chaining (`?.`) & Nullish Coalescing (`??`)
```javascript
// Optional Chaining: Safely accesses deeply nested properties without throwing TypeError
const toolName = response?.choices?.[0]?.message?.tool_calls?.[0]?.name;

// Nullish Coalescing: Only falls back on null or undefined (preserves 0, false, "")
const temperature = userConfig.temperature ?? 0.7; // If temperature is 0, keeps 0!
```

---

## 🥋 Drills in this Module

Inside [`drills/`](file:///C:/Users/user/Documents/GitHub/frontend-dojo/03-async-js-and-tooling/drills):
1. `01-event-loop-and-microtasks`: Predicting and mastering Call Stack vs Microtask execution order.
2. `02-promise-pipeline`: Building robust Promise chains with error recovery and `finally`.
3. `03-parallel-ai-tool-runner`: Using `Promise.all` and `Promise.allSettled` to execute parallel agent tools.
4. `04-async-await-fetch-client`: Building an API client with status verification, timeouts, and error handling.
5. `05-es6-data-transforms`: Modern destructuring, spread/rest, optional chaining, and nullish coalescing.
