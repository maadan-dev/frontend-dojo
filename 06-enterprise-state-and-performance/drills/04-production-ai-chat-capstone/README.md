# Drill 04 (Capstone): Production AI Streaming Chat Studio 🏆

## 🎯 The Final Capstone Challenge
Build a complete, accessible, resilient AI Streaming Chat Studio that synthesizes the entire 6-phase curriculum:
- **Module 8**: Flexbox app shell (pinned header, scrolling message feed, fixed prompt bar).
- **Module 9**: Immutable array transformations and safe data handling.
- **Module 10**: Asynchronous token streaming and error handling.
- **Module 11**: Declarative React component composition, unique keys, and conditional status states.
- **Module 12**: `useRef` auto-scrolling to the latest token as text arrives.
- **Module 13**: Explicit Finite State Machine driven by `useReducer`.

---

## 📋 Requirements
Inside `AIChatStudio.jsx`:

1. **State Machine (`useReducer`)**:
   - Initial State:
     ```javascript
     {
       status: 'IDLE', // 'IDLE' | 'STREAMING' | 'ERROR'
       messages: [],   // [{ id, sender: 'user' | 'assistant', text }]
       currentChunk: '',
       error: null
     }
     ```
   - Actions:
     - `'USER_SUBMIT'`: Appends user message to `messages`, transitions `status` to `'STREAMING'`, clears `currentChunk` and `error`.
     - `'STREAM_TOKEN'`: Appends token to `currentChunk`.
     - `'STREAM_DONE'`: Appends completed assistant message to `messages`, resets `currentChunk`, transitions `status` to `'IDLE'`.
     - `'STREAM_FAIL'`: Transitions `status` to `'ERROR'` with error payload.
     - `'CLEAR_CONVERSATION'`: Resets state.

2. **Auto-Scrolling**:
   - Uses `useRef` on a bottom sentinel element.
   - Automatically scrolls into view whenever `messages` or `currentChunk` updates.

3. **Controlled Input Bar**:
   - Accessible `<form>` with `<input>` and `<button type="submit" disabled={isStreaming || !input.trim()}>Send</button>`.
   - Clears input field on submit.

4. **Live Stream Bubble**:
   - When `status === 'STREAMING'`, renders an active assistant bubble with `aria-live="polite"` displaying `{currentChunk}` and a pulsing cursor indicator.

## 🧪 Verification
```bash
npx vitest 06-enterprise-state-and-performance/drills/04-production-ai-chat-capstone
```
