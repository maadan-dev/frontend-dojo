# Drill 05: Safe DOM Element Creation & XSS Prevention 🛡️

## 🎯 Objective
Programmatically construct, configure, and mount dynamic DOM nodes using secure browser APIs (`document.createElement`, `textContent`, `classList`) to prevent Cross-Site Scripting (XSS).

## 📝 Background
When an AI assistant streams user prompts or markdown output, developers are often tempted to use `element.innerHTML = messageText`. If a prompt contains malicious payloads like `<img src=x onerror=stealSessionTokens()>`, the browser executes it! Production-grade engineering requires safe element creation or sanitized string handling.

## 📋 Requirements
Inside `exercise.js`:

1. `createMessageNode(messageData)`:
   - Takes `{ id: 'msg-1', sender: 'user' | 'assistant', text: string, timestamp: string }`.
   - Returns an HTML `<article>` element configured with:
     - Classes: `chat-card` and the sender type (e.g. `user` or `assistant`).
     - Data attribute: `data-id="${messageData.id}"`.
     - A `<header class="sender-tag">` with `textContent` matching the capitalized sender (e.g., "User" or "Assistant").
     - A `<p class="message-body">` with its text set securely via **`textContent`** (do NOT use `innerHTML`!).
     - A `<time class="timestamp">` containing `messageData.timestamp`.
2. `mountMessageList(messages, containerElement)`:
   - Takes an array of message objects and a target DOM container.
   - Clears any previous children from `containerElement`.
   - Mounts all created message nodes into `containerElement` in order.

## 🧪 Verification
Run tests in your terminal:
```bash
npm test 02-core-javascript-and-dom/drills/05-dom-element-builder
```
