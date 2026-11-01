# Drill 01: State Machines & useReducer for Streaming AI ⚙️

## 🎯 Objective
Model an AI streaming response lifecycle as an explicit Finite State Machine using `useReducer`.

## 📋 Requirements
Inside `agentReducer.js`:
1. Define `initialAgentState`:
   ```javascript
   {
     status: 'IDLE', // 'IDLE' | 'STREAMING' | 'SUCCESS' | 'ERROR'
     tokens: '',
     error: null
   }
   ```
2. Implement `agentReducer(state, action)` handling these action types:
   - `'START_STREAM'`: Returns `{ status: 'STREAMING', tokens: '', error: null }`.
   - `'APPEND_CHUNK'`: Returns `{ ...state, tokens: state.tokens + action.payload }`.
   - `'COMPLETE_STREAM'`: Returns `{ ...state, status: 'SUCCESS' }`.
   - `'FAIL_STREAM'`: Returns `{ ...state, status: 'ERROR', error: action.payload }`.
   - `'RESET'`: Returns `initialAgentState`.
   - Unknown action: Returns current `state` untouched.

## 🧪 Verification
```bash
npx vitest 06-enterprise-state-and-performance/drills/01-usereducer-agent-state-machine
```
