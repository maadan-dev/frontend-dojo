# Explanation: Drill 04 — Custom Hooks: useChatHistory

## Lazy Initial State (`useState(() => ...)`)

Notice this critical optimization:
```javascript
const [messages, setMessages] = useState(() => {
  const item = window.localStorage.getItem(storageKey);
  return item ? JSON.parse(item) : [];
});
```
- If you passed `useState(JSON.parse(window.localStorage.getItem(...)))` directly, JavaScript would execute `localStorage.getItem` and `JSON.parse` **on every single re-render of the component**, degrading performance!
- Passing a callback function `useState(() => ...)` tells React: "Only execute this expensive parsing logic ONCE when the component first mounts."
