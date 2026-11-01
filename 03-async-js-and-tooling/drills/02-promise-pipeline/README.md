# Drill 02: Promise Chaining, Error Handling & Finally 📜

## 🎯 Objective
Chain asynchronous operations sequentially using Promise `.then()`, catch errors gracefully with `.catch()`, and guarantee execution of cleanup logic using `.finally()`.

## 📋 Requirements
Inside `exercise.js`, implement `processPromptPipeline(fetchFn, promptId, cleanupFn)`:
1. Calls `fetchFn(promptId)` which returns a Promise resolving to `{ id, text }`.
2. Validates `text`: If `text.trim().length < 5`, throws/rejects with `new Error('Prompt too short')`.
3. If valid, transforms the payload by appending `[ENRICHED]` to `text` and returns `{ id, text: `${text} [ENRICHED]`, status: 'SUCCESS' }`.
4. If any error occurs at any point in the pipeline, catches it and returns `{ id: promptId, status: 'ERROR', message: error.message }`.
5. In **all** cases (success or failure), calls `cleanupFn()` via `.finally()`.

## 🧪 Verification
```bash
npx vitest 03-async-js-and-tooling/drills/02-promise-pipeline
```
