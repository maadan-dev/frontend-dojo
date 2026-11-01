# Explanation: Drill 02 — Accessible AI Prompt Form & Live Regions

## Key Insights

1. **`aria-describedby` vs `label`**:
   - `label` identifies **what** the input is.
   - `aria-describedby` points to secondary guidance text (e.g., character limits, format tips, error messages).
   - Screen readers announce the label first, then pause and read the description hint.

2. **Why `aria-live="polite"` is Crucial for AI**:
   - Streaming text updates the DOM constantly (multiple times per second).
   - If you used `aria-live="assertive"`, the screen reader would violently interrupt whatever it was saying on every single incoming token!
   - `polite` queues announcements gracefully, waiting for the user to pause.
   - `aria-atomic="true"` ensures the screen reader announces the entire updated message unit rather than fragmented phonetic snippets.
