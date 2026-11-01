# Explanation: Drill 01 — State Machines & useReducer for Streaming AI

## Why Reducers Prevent UI Glitches

1. **Deterministic State Transitions**:
   - In complex streaming apps, state bugs happen when multiple `useState` setters fire out of order:
     ```javascript
     setIsLoading(false);
     // If the network error fires here, isError and isLoading might contradict!
     setIsError(true);
     ```
   - With `useReducer`, transitions are atomic. An action like `'FAIL_STREAM'` flips `status` to `'ERROR'` and sets `error` in a single immutable tick.
