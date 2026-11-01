# Drill 04: Custom Hooks — useChatHistory & LocalStorage Persistence 💾

## 🎯 Objective
Create a custom hook `useChatHistory(storageKey)` that maintains conversation messages in state while automatically synchronizing them with the browser's `localStorage`.

## 📋 Requirements
Inside `useChatHistory.js`:
1. Initializes `messages` state by reading from `window.localStorage.getItem(storageKey)`. If none exists or JSON parsing fails, defaults to `[]`.
2. Syncs `messages` into `localStorage` whenever `messages` or `storageKey` changes.
3. Provides helper methods:
   - `addMessage({ sender, text })`: Appends a new message `{ id: Date.now().toString(), sender, text }`.
   - `clearHistory()`: Sets messages to `[]`.
4. Returns an object: `{ messages, addMessage, clearHistory }`.

## 🧪 Verification
```bash
npx vitest 05-routing-and-state-architecture/drills/04-custom-hook-use-chat-history
```
