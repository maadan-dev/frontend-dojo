# Explanation: Drill 05 — Controlled Form Inputs & Event Handling

## Why React Prefers Controlled Components

1. **Single Source of Truth**:
   - In uncontrolled forms, the DOM stores the input value in its internal state, while React holds separate state. This causes desynchronization.
   - In a controlled component, React state is the **only source of truth**. The input displays whatever `promptText` is in state.

2. **Instant Dynamic Derivation**:
   - Notice that character count doesn't need its own state: `{promptText.length}` is **derived state** calculated instantly on every render.
   - Never store values in `useState` if they can be trivially computed from existing state.
