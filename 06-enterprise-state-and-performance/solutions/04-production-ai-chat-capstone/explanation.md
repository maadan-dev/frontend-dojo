# Explanation: Drill 04 (Capstone) — Production AI Streaming Chat Studio

## Architecture Breakdown

This Capstone synthesizes all foundational pillars of frontend engineering for AI:

1. **State Machine (`chatReducer`)**:
   - Explicitly transitions from `IDLE` ──► `STREAMING` ──► `COMPLETE` or `ERROR`.
   - Prevents duplicate prompts while inference is in flight (`disabled={state.status === 'STREAMING'}`).

2. **Real-Time Token Streaming**:
   - `STREAM_TOKEN` continuously appends chunks to `currentChunk`.
   - The streaming bubble uses `aria-live="polite"` so accessibility tools announce the response gracefully.
   - The blinking cursor (`▋`) provides visual feedback that generation is ongoing.

3. **Auto-Scroll UX (`useRef`)**:
   - Listening to both `state.messages` and `state.currentChunk` ensures the viewport automatically glides downwards as words stream onto the screen.

4. **Error Isolation**:
   - If an API quota is exceeded or network drops mid-stream, `STREAM_FAIL` mounts an accessible error banner without crashing the application or erasing the conversation history.
