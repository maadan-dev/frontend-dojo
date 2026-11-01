# Explanation: Drill 03 — Parallel AI Tool Execution

## When to Use `Promise.all` vs `Promise.allSettled`

1. **`Promise.all` (All-or-Nothing)**:
   - Use when all tasks are strictly interdependent (e.g., you need both an authentication token AND a session ID to proceed). If either fails, the operation cannot proceed.

2. **`Promise.allSettled` (Fault-Tolerant)**:
   - Essential in AI agent workflows with multiple fallback tools.
   - If a live weather API fails, the agent can still deliver answers using its internal knowledge or a secondary search provider.
