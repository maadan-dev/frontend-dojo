# Drill 03: Performance Optimization with useMemo, useCallback & React.memo ⚡

## 🎯 Objective
Prevent wasteful child re-renders and cache computationally expensive operations using `React.memo`, `useMemo`, and `useCallback`.

## 📝 Background
In React, when a parent component re-renders, **all of its children re-render by default**, even if their props haven't changed! If you pass an inline arrow function `<Child onClick={() => doSomething()} />`, a fresh function object is created on every render, breaking `React.memo` because the prop reference changes.

## 📋 Requirements
Inside `exercise.jsx`:
1. `LogItem`:
   - A component that renders a log message.
   - Must be wrapped in `React.memo` so it only re-renders when its props (`log`, `onSelect`) actually change.
2. `LogAnalyzer({ logs, onSelectLog })`:
   - Parent component with an internal counter state (`tick`) incremented via a button.
   - `expensiveMetrics`: Uses `useMemo` to calculate the total token count of all `logs` so it does NOT recalculate on every counter tick!
   - `handleSelect`: Uses `useCallback` to wrap `(id) => onSelectLog(id)` with dependency `[onSelectLog]`, ensuring the function reference remains stable across ticks.

## 🧪 Verification
```bash
npx vitest 06-enterprise-state-and-performance/drills/03-performance-memo-and-callback
```
