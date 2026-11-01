import React, { useReducer, useState, useRef, useEffect } from 'react';

/**
 * Master Solution: Drill 04 (Capstone) — Production AI Streaming Chat Studio
 */

const initialChatState = {
  status: 'IDLE',
  messages: [],
  currentChunk: '',
  error: null,
};

function chatReducer(state, action) {
  switch (action.type) {
    case 'USER_SUBMIT':
      return {
        ...state,
        status: 'STREAMING',
        error: null,
        currentChunk: '',
        messages: [
          ...state.messages,
          {
            id: `user-${Date.now()}`,
            sender: 'user',
            text: action.payload,
          },
        ],
      };

    case 'STREAM_TOKEN':
      return {
        ...state,
        currentChunk: state.currentChunk + action.payload,
      };

    case 'STREAM_DONE':
      return {
        ...state,
        status: 'IDLE',
        currentChunk: '',
        messages: [
          ...state.messages,
          {
            id: `assistant-${Date.now()}`,
            sender: 'assistant',
            text: action.payload,
          },
        ],
      };

    case 'STREAM_FAIL':
      return {
        ...state,
        status: 'ERROR',
        error: action.payload,
      };

    case 'CLEAR_CONVERSATION':
      return initialChatState;

    default:
      return state;
  }
}

export function AIChatStudio({ onGenerateStream }) {
  const [state, dispatch] = useReducer(chatReducer, initialChatState);
  const [inputText, setInputText] = useState('');
  const bottomSentinelRef = useRef(null);

  // Auto-scroll on new messages or incoming token chunks
  useEffect(() => {
    bottomSentinelRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages, state.currentChunk]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const prompt = inputText.trim();
    if (!prompt || state.status === 'STREAMING') return;

    setInputText('');
    dispatch({ type: 'USER_SUBMIT', payload: prompt });

    try {
      if (typeof onGenerateStream === 'function') {
        const fullResponse = await onGenerateStream(prompt, (chunk) => {
          dispatch({ type: 'STREAM_TOKEN', payload: chunk });
        });
        dispatch({ type: 'STREAM_DONE', payload: fullResponse });
      } else {
        dispatch({ type: 'STREAM_DONE', payload: 'Simulation completed.' });
      }
    } catch (err) {
      dispatch({ type: 'STREAM_FAIL', payload: err.message });
    }
  };

  return (
    <div className="ai-chat-studio">
      <header className="chat-header">
        <h2>AI Streaming Chat Studio</h2>
        <span className={`status-indicator ${state.status.toLowerCase()}`}>
          {state.status}
        </span>
      </header>

      {state.error && (
        <div data-testid="error-banner" className="error-banner">
          {state.error}
        </div>
      )}

      <main className="message-container">
        {state.messages.map((msg) => (
          <article key={msg.id} className={`message-bubble ${msg.sender}`}>
            <strong>{msg.sender === 'user' ? 'You' : 'Assistant'}: </strong>
            <span>{msg.text}</span>
          </article>
        ))}

        {state.status === 'STREAMING' && (
          <article
            className="message-bubble assistant streaming"
            aria-live="polite"
          >
            <strong>Assistant: </strong>
            <span>{state.currentChunk}</span>
            <span className="blinking-cursor">▋</span>
          </article>
        )}

        <div ref={bottomSentinelRef} data-testid="bottom-sentinel" />
      </main>

      <form className="chat-input-bar" onSubmit={handleSubmit}>
        <input
          data-testid="chat-input"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask anything..."
          disabled={state.status === 'STREAMING'}
        />
        <button
          data-testid="chat-send-btn"
          type="submit"
          disabled={state.status === 'STREAMING' || !inputText.trim()}
        >
          Send
        </button>
      </form>
    </div>
  );
}
