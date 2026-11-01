# Drill 02: Global State with Context API & Custom Provider 🌐

## 🎯 Objective
Create a global `AgentConfigContext` with an ergonomic provider component and a custom consumer hook (`useAgentConfig`) that enforces safe usage boundaries.

## 📋 Requirements
Inside `AgentConfigContext.jsx`:
1. Creates `AgentConfigContext = React.createContext(null)`.
2. `AgentConfigProvider({ children, initialModel = 'gemini-3.8-flash', initialTemp = 0.7 })`:
   - Manages state `model` and `temperature`.
   - Wraps `children` in `AgentConfigContext.Provider` providing `{ model, setModel, temperature, setTemperature }`.
3. Custom Hook `useAgentConfig()`:
   - Reads context via `useContext(AgentConfigContext)`.
   - **Safety Check**: If context is `null` (meaning hook was called outside the Provider), throws:
     `new Error('useAgentConfig must be used within an AgentConfigProvider')`.
   - Otherwise, returns the context value.

## 🧪 Verification
```bash
npx vitest 06-enterprise-state-and-performance/drills/02-context-api-agent-provider
```
