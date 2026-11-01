# Module 05: Routing & State Architecture 🧭

> **Talent Nation Alignment:** Module 12 — Routing & State Architecture (Lessons 102.1 to 112.1)  
> **Prerequisites:** Module 04 (React Foundations)

---

## 🎯 1. Side Effects & `useEffect` (Lessons 102.1 & 103.1)

A React component's primary job is to take props/state and return JSX. Any operation that touches the outside world (network requests, DOM timers, local storage, event subscriptions) is a **Side Effect**.

### The Anatomy of `useEffect`:
```javascript
useEffect(() => {
  // 1. SETUP: Runs after DOM updates
  const timer = setInterval(() => tick(), 1000);

  // 2. CLEANUP: Runs before re-running effect AND when component unmounts
  return () => {
    clearInterval(timer);
  };
}, [dependencies]); // 3. DEPENDENCY ARRAY
```

### The Three Dependency Modes:
| Dependency Array | When It Runs | Use Case |
| :--- | :--- | :--- |
| `useEffect(() => {})` (No array) | Runs **after EVERY render** | Rare; measuring layout or logging |
| `useEffect(() => {}, [])` (Empty) | Runs **ONCE after Mount** | Initial data fetch, global event listener setup |
| `useEffect(() => {}, [modelId])` | Runs **when `modelId` changes** | Synchronizing API calls with props or state |

---

## 🪝 2. Custom Hooks: Abstracting Stateful Logic (Lessons 104.1 & 105.1)

A **Custom Hook** is simply a JavaScript function whose name starts with `use` and that calls other React hooks (`useState`, `useEffect`).

### Returning Arrays vs. Objects:
* **Return an Array** (like `useState`) when callers will likely want to rename variables on destructuring:
  ```javascript
  const [value, setValue] = useLocalStorage('theme', 'dark');
  ```
* **Return an Object** when returning 3 or more properties so callers can destructure by name without worrying about parameter order:
  ```javascript
  const { data, isLoading, error, refetch } = useFetch('/api/models');
  ```

---

## 📌 3. `useRef`: Preserving References Without Re-renders (Lessons 108.1 & 109.1)

`useRef` returns a mutable object `{ current: initialValue }` that persists across renders.

### Two Major Use Cases:
1. **Direct DOM Access**:
   - Grabbing raw DOM nodes (e.g. focusing an input or auto-scrolling to the bottom of an AI chat stream):
     ```javascript
     const endOfMessagesRef = useRef(null);
     endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
     ```
2. **Instance Variables (Silent Values)**:
   - Storing timers, WebSocket connections, or previous values where modifying them **should NOT trigger a component re-render**!

---

## 🥋 Drills in this Module

Inside [`drills/`](file:///C:/Users/user/Documents/GitHub/frontend-dojo/05-routing-and-state-architecture/drills):
1. `01-use-effect-auto-poller`: Periodic model metrics polling with cleanup functions.
2. `02-use-ref-auto-scroller`: Smooth auto-scrolling chat window with `useRef`.
3. `03-custom-hook-use-debounce`: Delaying search input to prevent firing 100 API queries per second.
4. `04-custom-hook-use-chat-history`: Managing local storage persistence of AI chat messages.
