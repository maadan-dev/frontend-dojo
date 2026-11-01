# Drill 05: Modern Layouts — The Flexbox AI Chat Shell 💬

## 🎯 Objective
Build a professional, responsive 1D flexbox layout for an AI Chat application featuring a pinned header, an auto-scrolling message body, and a sticky input bar.

## 📝 Background
The AI chat interface is the most ubiquitous UI pattern in modern software engineering. It requires precise flexbox alignment:
- The header and prompt bar must **never shrink** (`flex-shrink: 0`).
- The message history must **expand to fill all remaining vertical space** (`flex-grow: 1`) and scroll smoothly (`overflow-y: auto`).
- User messages must align to the right (`align-self: flex-end`), while AI messages align to the left (`align-self: flex-start`).

## 📋 Requirements
Inside `chat.css`:

1. **App Shell (`.chat-shell`)**:
   - `display: flex;`
   - `flex-direction: column;`
   - `height: 100vh;`
   - `overflow: hidden;`
2. **Chat Header (`.chat-header`)**:
   - `display: flex;`
   - `justify-content: space-between;`
   - `align-items: center;`
   - `flex-shrink: 0;`
   - `padding: 16px;`
3. **Message Stream (`.message-stream`)**:
   - `display: flex;`
   - `flex-direction: column;`
   - `flex: 1 1 auto;` (or `flex-grow: 1;`)
   - `overflow-y: auto;`
   - `gap: 16px;`
   - `padding: 20px;`
4. **Message Bubbles (`.message`)**:
   - Common message max-width: `70%;`
   - `.message.user`: Must align to the right using `align-self: flex-end;`
   - `.message.assistant`: Must align to the left using `align-self: flex-start;`
5. **Prompt Bar (`.prompt-bar`)**:
   - `display: flex;`
   - `align-items: center;`
   - `flex-shrink: 0;`
   - `gap: 12px;`
   - `padding: 16px;`
   - The `.prompt-input` must expand to fill all remaining horizontal width using `flex: 1;`.

## 🧪 Verification
Run tests in your terminal:
```bash
npm test 01-web-foundations/drills/05-flexbox-ai-chat-layout
```
