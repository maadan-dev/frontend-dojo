# Explanation: Drill 02 — Direct DOM Manipulation & Auto-Scrolling with useRef

## Why `useRef` Over Direct `document.getElementById`

1. **Component Encapsulation**:
   - If you have two chat windows on screen (e.g. comparing two models side-by-side) and you use `document.getElementById('bottom')`, both windows fight over the same single ID!
   - `useRef` binds strictly to the specific instance of that component, ensuring multi-instance safety.

2. **No Re-renders on Ref Changes**:
   - Setting `ref.current = 10` modifies the property in place silently. React does not trigger a re-render cycle, preventing expensive layout recalculations.
