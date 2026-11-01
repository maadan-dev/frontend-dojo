# Explanation: Drill 03 — Performance Optimization with useMemo, useCallback & React.memo

## The Referential Equality Connection

1. **Why `React.memo` Fails Without `useCallback`**:
   - `React.memo` performs a shallow compare on props: `prevProps.onSelect === nextProps.onSelect`.
   - If `onSelect` is declared as a plain function `const handleSelect = (id) => ...`, every time the parent renders, JavaScript allocates a brand new function pointer in the heap.
   - `prevProps.onSelect === nextProps.onSelect` evaluates to `false`! `React.memo` is defeated, and the child re-renders anyway.
   - `useCallback` keeps the same function instance in memory as long as its dependencies (`[onSelectLog]`) don't change.
