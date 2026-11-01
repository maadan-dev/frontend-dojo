# Explanation: Drill 01 — Side Effects & Polling Cleanup with useEffect

## Why the `isSubscribed` Boolean Flag is Essential

1. **Race Conditions & Unmounted State Updates**:
   - If an async API call (`await pollFn()`) takes 800ms, and the user navigates away after 300ms, the component unmounts while the network promise is still in-flight.
   - When the network promise resolves, if you call `setStatus()`, React warns: *"Can't perform a React state update on an unmounted component"*.
   - The boolean flag `isSubscribed = false` inside the cleanup function guarantees that late-resolving promises are silently ignored.
