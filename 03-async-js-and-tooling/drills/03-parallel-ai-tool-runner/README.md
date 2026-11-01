# Drill 03: Parallel AI Tool Execution with Promise.all & Promise.allSettled 🚀

## 🎯 Objective
Execute asynchronous AI tool actions in parallel rather than sequentially, and implement fault-tolerant execution using `Promise.allSettled`.

## 📝 Background
When an AI agent plans a response, it often needs information from multiple independent tools (e.g., retrieving user preferences from a DB, fetching stock prices from an API, and running a calculation in Python).
- If one tool fails under `Promise.all`, the entire batch immediately rejects (all-or-nothing).
- Under `Promise.allSettled`, the engine waits for all tools to finish, separating successful results from errors so the agent can still generate an answer.

## 📋 Requirements
Inside `exercise.js`:

1. `runToolsParallel(tools, query)`:
   - Takes an array of tool objects: `[{ name: 'search', run: async (q) => ... }]`.
   - Executes all `tool.run(query)` concurrently using **`Promise.all`**.
   - Returns an array of `{ tool: tool.name, result }`.
2. `runToolsResilient(tools, query)`:
   - Executes all tools concurrently using **`Promise.allSettled`**.
   - Returns `{ successes: [{ tool, result }], failures: [{ tool, error: error.message }] }`.

## 🧪 Verification
```bash
npx vitest 03-async-js-and-tooling/drills/03-parallel-ai-tool-runner
```
