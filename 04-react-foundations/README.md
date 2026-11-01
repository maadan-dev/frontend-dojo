# Module 04: React Foundations & The Declarative Shift ⚛️

> **Talent Nation Alignment:** Module 11 — React Foundations (Lessons 86.1 to 101.1)  
> **Prerequisites:** Module 01 (Web Foundations), Module 02 (Core JS & DOM), Module 03 (Async JS)

---

## 🎯 The Paradigm Shift: Imperative vs. Declarative

In traditional JavaScript (imperative), you tell the browser **every manual step** to update the screen:
1. Find the element: `document.getElementById('count')`.
2. Parse its text: `parseInt(el.textContent)`.
3. Increment it: `let next = current + 1`.
4. Update the DOM: `el.textContent = next`.

In React (declarative), you describe **what the UI should look like for a given state**:
$$\text{UI} = f(\text{State})$$
When the state changes from `1` to `2`, React's **Reconciliation Engine (Virtual DOM)** automatically computes the minimal difference (diff) and updates the real DOM for you.

---

## 🔬 1. What JSX Really Is (Lessons 86.1, 87.1, 89.1)

JSX is **not** HTML. It is syntactic sugar for `React.createElement`:

```jsx
// What you write:
<div className="chat-card">
  <h1>AI Assistant</h1>
</div>

// What Babel / Vite compiles it to:
React.createElement('div', { className: 'chat-card' },
  React.createElement('h1', null, 'AI Assistant')
);
```

### Why a Component Must Return a Single Root Node:
Because a JavaScript function can only return **one** value!
```jsx
// INVALID: Returning two separate objects without a wrapper
return (
  <header />
  <main />
);

// VALID: Using React Fragment <> (renders zero extra DOM nodes)
return (
  <>
    <header />
    <main />
  </>
);
```

---

## 🧩 2. Components, Props & Composition (Lessons 88.1 to 94.1)

A React Component is simply a JavaScript function that takes **Props** (an object) and returns JSX:

```jsx
// Destructuring props with defaults:
export function MessageCard({ sender = 'user', text, children }) {
  return (
    <article className={`message ${sender}`}>
      <p>{text}</p>
      {/* The special children prop renders anything nested inside <MessageCard>...</MessageCard> */}
      {children}
    </article>
  );
}
```

### The Unidirectional Data Flow:
* Data flows **down** through Props (Parent ──► Child).
* Events flow **up** through Callbacks (Child ──► Parent).
* Props are **read-only / immutable**: A child must never modify `props.text = 'new'`.

---

## ⚡ 3. State (`useState`) vs. Variables (Lessons 96.1, 97.1, 98.1)

```jsx
const [tokensUsed, setTokensUsed] = useState(0);
```

### Why Local Variables Don't Trigger Re-renders:
```javascript
let count = 0;
function increment() {
  count++; // Updates number in memory, but React has NO IDEA this happened!
}
```
`useState` does two things:
1. Preserves the value in memory across re-renders (via a closure inside React).
2. **Schedules a re-render** with React's fiber engine so the screen updates.

### The Asynchronous Batching Trap & Functional Updates:
```javascript
// BUGGY: Both read the stale count value at the start of the render!
setCount(count + 1); // 0 + 1 = 1
setCount(count + 1); // 0 + 1 = 1 -> Final count is 1, NOT 2!

// CORRECT: Functional update passes the latest queued state
setCount(prev => prev + 1);
setCount(prev => prev + 1); // -> Final count is 2!
```

---

## 📜 4. Dynamic Lists & The Reconciliation `key` Prop (Lesson 99.1)

When rendering collections with `.map()`, React requires a unique `key` prop:

```jsx
{messages.map((msg) => (
  <MessageCard key={msg.id} text={msg.content} />
))}
```

> [!CRITICAL]
> **Why NEVER use array index as key for dynamic lists:**  
> If you prepend or delete an item, all array indices shift (`0` becomes `1`, etc.). React's reconciliation engine thinks the identity of every element changed, causing severe UI state bugs, input focus loss, and unnecessary re-renders. Always use stable, unique IDs (`msg.id`).

---

## 🥋 Drills in this Module

Inside [`drills/`](file:///C:/Users/user/Documents/GitHub/frontend-dojo/04-react-foundations/drills):
1. `01-jsx-and-fragment-cards`: JSX rules, fragments, and props destructuring.
2. `02-stateful-token-counter`: `useState`, state batching, and functional updater functions.
3. `03-dynamic-message-feed`: Rendering lists with unique keys, empty states, and message deletion.
4. `04-conditional-ai-status-badge`: Ternaries and logical `&&` conditional UI states.
5. `05-interactive-prompt-studio`: Controlled inputs, submit events, and parent-child communication.
