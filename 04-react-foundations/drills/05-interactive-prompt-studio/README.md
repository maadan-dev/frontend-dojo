# Drill 05: Controlled Form Inputs & Event Handling ✍️

## 🎯 Objective
Master React's **Controlled Input** pattern, binding form inputs to component state as the single source of truth, handling synthetic form events, and clearing input after submission.

## 📝 Background
In vanilla HTML, inputs maintain their own internal DOM state. In React, **Controlled Components** bind the input's `value` directly to React state and update it via `onChange`. This allows instant character counting, input validation, and programmatic clearing.

## 📋 Requirements
Inside `exercise.jsx`, implement `PromptStudio({ onSubmitPrompt })`:
1. Manages `promptText` state, initialized to `''`.
2. Form markup:
   - `<form data-testid="prompt-form">`
   - Controlled input: `<input data-testid="prompt-input" value={promptText} onChange={...} placeholder="Type your prompt..." />`
   - Character counter: `<span data-testid="char-count">{promptText.length} / 200</span>`
   - Submit button: `<button type="submit" data-testid="submit-btn" disabled={promptText.trim().length === 0}>Send</button>`
3. On Submit:
   - Prevents default browser page reload (`e.preventDefault()`).
   - If `promptText.trim()` is empty, does nothing.
   - Otherwise, invokes `onSubmitPrompt(promptText.trim())` and clears `promptText` back to `''`.

## 🧪 Verification
```bash
npx vitest 04-react-foundations/drills/05-interactive-prompt-studio
```
