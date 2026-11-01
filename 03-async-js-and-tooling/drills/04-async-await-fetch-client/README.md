# Drill 04: Production Fetch Client with Async/Await & AbortController 🌐

## 🎯 Objective
Build a robust, production-grade HTTP client function for AI inference using `async/await`, status code validation, JSON parsing, and network timeout cancellation via `AbortController`.

## 📝 Background
The native `fetch()` API has a major trap: **it does NOT reject on HTTP 4xx or 5xx error status codes!** It only rejects on total network disconnection. A professional client must check `response.ok`, parse error bodies, and guard against hanging requests with timeouts.

## 📋 Requirements
Inside `exercise.js`, implement `sendInferenceRequest(url, payload, options = {})`:
1. Sends a `POST` request to `url` using `fetch()`.
2. Sets `headers: { 'Content-Type': 'application/json' }`.
3. Serializes `payload` using `JSON.stringify(payload)`.
4. If `options.timeoutMs` is provided:
   - Sets up an `AbortController` that aborts the request if the server takes longer than `timeoutMs`.
5. Checks `response.ok`:
   - If `false`, extracts error text from the response body and throws an error: `new Error(`HTTP ${response.status}: ${errorText}`)`.
6. If `true`, returns the parsed JSON payload via `await response.json()`.

## 🧪 Verification
```bash
npx vitest 03-async-js-and-tooling/drills/04-async-await-fetch-client
```
