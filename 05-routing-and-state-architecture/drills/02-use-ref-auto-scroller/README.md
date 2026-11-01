# Drill 02: Direct DOM Manipulation & Auto-Scrolling with useRef 📌

## 🎯 Objective
Use React's `useRef` hook to reference an in-memory DOM element and trigger smooth auto-scrolling to the bottom of an AI conversation feed whenever new messages arrive.

## 📋 Requirements
Inside `exercise.jsx`, implement `AutoScrollChat({ messages = [] })`:
1. Renders a container `<div className="chat-window">`.
2. Renders all messages inside:
   - `{messages.map(m => <div key={m.id} className="chat-msg">{m.text}</div>)}`
3. Places an empty sentinel element at the very bottom:
   - `<div ref={messagesEndRef} data-testid="bottom-sentinel" />`
4. Uses `useEffect` listening to `[messages]`:
   - Calls `messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })` whenever `messages` updates.

## 🧪 Verification
```bash
npx vitest 05-routing-and-state-architecture/drills/02-use-ref-auto-scroller
```
