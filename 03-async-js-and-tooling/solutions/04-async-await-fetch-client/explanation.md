# Explanation: Drill 04 — Production Fetch Client with Async/Await & AbortController

## Why `response.ok` and `AbortController` Matter

1. **The `fetch()` Status Trap**:
   - `fetch()` only rejects if there is a DNS failure, offline network, or CORS rejection.
   - A `404 Not Found`, `401 Unauthorized`, or `500 Internal Server Error` is considered a successful HTTP response by `fetch()`.
   - Always check `response.ok` (which returns `true` for status codes 200–299).

2. **Cleaning up Timers in `finally`**:
   - If the request finishes in 200ms and timeout was 5000ms, failing to `clearTimeout(timerId)` leaves an orphaned timer ticking in the Node/browser event loop.
   - Placing `clearTimeout` in a `finally` block ensures it is cleaned up immediately upon completion.
