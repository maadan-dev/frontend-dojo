# Explanation: Drill 03 — Custom Hooks: useDebounce

## Debouncing Mechanics

1. **How the Cleanup Cancels Pending Runs**:
   - Every time `value` changes (the user types a letter), React re-evaluates the component.
   - Before running the new `useEffect`, React executes the **previous effect's cleanup function**: `clearTimeout(handler)`.
   - As long as the user keeps typing within the 300ms window, the timer is destroyed and recreated before it ever fires! Only when the user stops typing for 300ms does `setDebouncedValue` execute.
