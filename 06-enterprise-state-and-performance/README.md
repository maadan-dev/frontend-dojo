# Module 06: Enterprise State, Performance & AI Capstone 🏆

> **Talent Nation Alignment:** Module 13 — Enterprise State & Performance (Lessons 113.1 to 125.1) + AI Interval 6.1  
> **Prerequisites:** Modules 01 through 05

---

## 🎯 1. `useReducer` & Finite State Machines (Lessons 116.1 to 118.1)

When component state involves multiple sub-values or complex transitions, `useState` causes impossible intermediate states (e.g. `isLoading === true` and `isError === true` at the same time).

A **Reducer** is a pure function:
$$(\text{currentState}, \text{action}) \implies \text{nextState}$$

```javascript
function agentReducer(state, action) {
  switch (action.type) {
    case 'START_PROMPT':
      return { status: 'STREAMING', prompt: action.payload, output: '', error: null };
    case 'APPEND_TOKEN':
      return { ...state, output: state.output + action.payload };
    case 'FINISH_STREAM':
      return { ...state, status: 'COMPLETE' };
    case 'ERROR':
      return { ...state, status: 'ERROR', error: action.payload };
    default:
      return state;
  }
}
```

---

## 🌐 2. The Context API & Provider Pattern (Lessons 113.1 to 115.1)

When state is needed across widely separated branches of a component tree (e.g. current user, AI model settings, theme), passing props down through 5 layers of intermediate components is called **Prop Drilling**.

The **Context API** allows you to broadcast state globally to any descendant:
1. `createContext(defaultValue)`
2. `<AgentContext.Provider value={{ model, setModel }}>`
3. Custom Consumer Hook: `useAgent()` using `useContext(AgentContext)`

---

## ⚡ 3. Performance & Memoization (Lessons 122.1 to 125.1)

React is fast by default. Never optimize prematurely. But when rendering large lists of AI tokens or heavy charts, three tools prevent wasteful re-computations:

1. **`React.memo(Component)`**:
   - Skips re-rendering a child component if its incoming props have not changed.
2. **`useMemo(() => expensiveMath(data), [data])`**:
   - Caches the **result of a calculation** across re-renders.
3. **`useCallback(fn, deps)`**:
   - Caches the **function definition itself** across re-renders so child components relying on reference equality don't re-render unnecessarily.

---

## 🥋 Drills in this Module

Inside [`drills/`](file:///C:/Users/user/Documents/GitHub/frontend-dojo/06-enterprise-state-and-performance/drills):
1. `01-usereducer-agent-state-machine`: Explicit finite state machine for streaming LLM responses.
2. `02-context-api-agent-provider`: Global state management for model parameters and theme.
3. `03-performance-memo-and-callback`: Eliminating wasted child re-renders with `useMemo` and `useCallback`.
4. `04-production-ai-chat-capstone`: **The Final Capstone**: Synthesizing all 6 modules into a production-grade AI streaming chat interface!
