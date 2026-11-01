# Explanation: Drill 04 — Conditional UI Rendering with Ternaries & Logical Operators

## The Falsy `0` Trap in React

A notorious bug in React is writing:
```jsx
// BUGGY: If count is 0, React renders the literal string "0" onto the screen!
{count && <span>Items: {count}</span>}
```
In JavaScript, `0 && <Element />` evaluates to `0`. React renders numbers directly to the DOM!
To avoid this:
1. Compare explicitly: `{count > 0 && <Element />}`
2. Or use boolean casting: `{Boolean(count) && <Element />}`
3. Or use ternaries: `{count > 0 ? <Element /> : null}`
