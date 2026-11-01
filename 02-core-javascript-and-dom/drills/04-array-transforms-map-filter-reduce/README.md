# Drill 04: The Big 5 Higher-Order Array Transformations 📊

## 🎯 Objective
Process and analyze raw AI agent invocation logs using JavaScript's primary higher-order functional methods (`map`, `filter`, `reduce`, `find`, `some`, `every`).

## 📝 Background
In React and frontend data processing, imperative `for` loops are avoided. Instead, declarative transformations allow you to format API responses, calculate aggregates, filter search queries, and render UI components immutably in single expressions.

## 📋 Requirements
Inside `exercise.js`, implement the following analytical functions:

1. `filterSuccessfulTraces(traces)`:
   - Uses `.filter()` to return only traces where `status === 'SUCCESS'`.
2. `extractModelMetrics(traces)`:
   - Uses `.map()` to return an array of simplified metric objects:
     ```javascript
     {
       id: trace.id,
       totalTokens: trace.tokens.prompt + trace.tokens.completion,
       latencySec: trace.latencyMs / 1000
     }
     ```
3. `calculateTotalCost(traces)`:
   - Uses `.reduce()` to sum up `costUsd` across all traces, returning a float rounded to 4 decimal places.
4. `groupCostByModel(traces)`:
   - Uses `.reduce()` to return an object aggregating total cost by model name:
     ```javascript
     {
       "gemini-3.8-flash": 0.0450,
       "claude-3-7-sonnet": 0.1200
     }
     ```
5. `hasSlowRequests(traces, thresholdMs)`:
   - Uses `.some()` to check whether *at least one* trace has `latencyMs > thresholdMs`.
6. `isAllWithinBudget(traces, maxCostPerRequest)`:
   - Uses `.every()` to check whether *every single* trace has `costUsd <= maxCostPerRequest`.

## 🧪 Verification
Run tests in your terminal:
```bash
npm test 02-core-javascript-and-dom/drills/04-array-transforms-map-filter-reduce
```
