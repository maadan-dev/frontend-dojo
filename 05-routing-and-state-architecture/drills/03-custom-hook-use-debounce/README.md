# Drill 03: Custom Hooks — Building useDebounce for AI Queries 🔍

## 🎯 Objective
Create a custom hook `useDebounce(value, delayMs = 300)` that delays updating a debounced value until the user pauses typing, preventing excessive AI API invocations.

## 📋 Requirements
Inside `useDebounce.js`:
1. Manages internal state `debouncedValue`, initialized to `value`.
2. Sets up a `useEffect` watching `[value, delayMs]`:
   - Sets a timer via `setTimeout` to update `debouncedValue` to `value` after `delayMs`.
   - **Cleanup**: Returns a cleanup function calling `clearTimeout` so if the user types another keystroke before `delayMs` elapses, the previous timer is cancelled!
3. Returns `debouncedValue`.

## 🧪 Verification
```bash
npx vitest 05-routing-and-state-architecture/drills/03-custom-hook-use-debounce
```
