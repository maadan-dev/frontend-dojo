# Explanation: Drill 02 — Global State with Context API & Custom Provider

## Best Practices for Context Design

1. **The Custom Hook Wrapper (`useAgentConfig`)**:
   - Never export raw `AgentConfigContext` to component consumers.
   - Wrapping it in `useAgentConfig` allows you to enforce the safety check (`if (!context) throw...`). If another developer accidentally forgets to wrap the app with `<AgentConfigProvider>`, they get an immediate, descriptive error message instead of an opaque `TypeError: Cannot read properties of null`.
