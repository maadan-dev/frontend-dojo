# Drill 04: Conditional UI Rendering with Ternaries & Logical Operators 🚦

## 🎯 Objective
Master conditional rendering in React using JavaScript expressions (ternary operators `? :` and short-circuit `&&` guards) to represent complex AI status states.

## 📝 Background
In AI interfaces, agent states change dynamically between `IDLE`, `THINKING`, `STREAMING`, `ERROR`, and `COMPLETE`. Knowing how to conditionally mount and unmount elements cleanly without nested ugly if/else blocks is a core React skill.

## 📋 Requirements
Inside `exercise.jsx`, implement `AgentStatusBadge({ status, retryCount = 0 })`:
1. Renders a container: `<div data-testid="status-badge" className={`badge ${status.toLowerCase()}`}>`.
2. Uses conditional rendering to display:
   - For `'THINKING'`: `<span className="spinner">Thinking...</span>`
   - For `'STREAMING'`: `<span className="pulsing-dot">Streaming Tokens...</span>`
   - For `'ERROR'`: `<span className="error-text">Failed to respond</span>`
   - For `'COMPLETE'`: `<span className="success-text">Done</span>`
   - For `'IDLE'`: `<span className="idle-text">Standby</span>`
3. **Short-Circuit Logical Guard (`&&`)**:
   - Only when `status === 'ERROR'` AND `retryCount > 0`, render:
     `<small data-testid="retry-info">Retries left: {retryCount}</small>`

## 🧪 Verification
```bash
npx vitest 04-react-foundations/drills/04-conditional-ai-status-badge
```
