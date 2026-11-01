# Drill 03: Dynamic Message Feed & The Reconciliation Key Prop 📜

## 🎯 Objective
Render dynamic collections of components using `.map()`, bind stable unique `key` props, handle empty UI states, and implement immutable item deletion.

## 📋 Requirements
Inside `exercise.jsx`, create `MessageFeed({ initialMessages = [] })`:
1. Stores the message array in component state initialized with `initialMessages`.
2. **Empty State**:
   - If the messages array is empty, renders `<p data-testid="empty-feed">No messages in conversation.</p>`.
3. **List Rendering**:
   - If messages exist, maps over them inside an `<ol className="message-list">`.
   - Each `<li>` must have a unique `key={msg.id}` and `data-testid={`msg-${msg.id}`}`.
   - Inside each item, renders:
     - `<strong className="sender">{msg.sender}:</strong>`
     - `<span className="content">{msg.text}</span>`
     - `<button data-testid={`delete-${msg.id}`}>Delete</button>`
4. **Immutable Deletion**:
   - Clicking Delete removes that specific message from state using `.filter()`.

## 🧪 Verification
```bash
npx vitest 04-react-foundations/drills/03-dynamic-message-feed
```
