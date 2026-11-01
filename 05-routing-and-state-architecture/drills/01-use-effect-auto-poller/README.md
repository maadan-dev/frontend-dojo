# Drill 01: Side Effects & Polling Cleanup with useEffect ⏱️

## 🎯 Objective
Use `useEffect` to poll an asynchronous AI inference status API periodically, updating component state and implementing a cleanup function to cancel intervals and abort in-flight fetch requests upon unmount.

## 📋 Requirements
Inside `exercise.jsx`, implement `ModelStatusPoller({ pollFn, intervalMs = 1000 })`:
1. Manages state `status` (initial: `'IDLE'`) and `pollCount` (initial: `0`).
2. `useEffect`:
   - Immediately invokes `pollFn()` once on mount.
   - Sets up a `setInterval` that invokes `pollFn()` every `intervalMs` milliseconds.
   - Whenever `pollFn()` resolves, updates `status` with the returned status and increments `pollCount`.
   - **Cleanup**: Returns a cleanup function that cancels the interval (`clearInterval`) when the component unmounts!
3. Render:
   - `<div data-testid="poller-container">`
   - `<span data-testid="status-val">{status}</span>`
   - `<span data-testid="poll-count">{pollCount}</span>`

## 🧪 Verification
```bash
npx vitest 05-routing-and-state-architecture/drills/01-use-effect-auto-poller
```
