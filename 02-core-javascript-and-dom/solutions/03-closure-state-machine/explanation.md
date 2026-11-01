# Explanation: Drill 03 — Closures, Lexical Scope & Private State

## The Mechanics of Closures

1. **How Memory Retains Variables After Return**:
   - Normally, when a function finishes executing, its execution context is popped off the stack and its local variables are garbage collected.
   - However, if an inner function is returned and holds references to outer variables, the JavaScript garbage collector recognizes this reference and **preserves the variable in the Heap**.
   - This creates true encapsulation: `remaining` cannot be tampered with or modified from the outside. Only `consume`, `getRemaining`, and `reset` have access to it.

2. **Connection to React's `useState`**:
   - When a React functional component runs, it calls `const [count, setCount] = useState(0)`.
   - The component function finishes executing and returns JSX.
   - How does `count` stay alive across renders? React's internal fiber node holds the state variable in a closure, pairing it with the component's unique hook index!
