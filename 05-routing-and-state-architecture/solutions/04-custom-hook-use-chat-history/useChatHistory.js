import { useState, useEffect } from 'react';

/**
 * Master Solution: Drill 04 — Custom Hooks: useChatHistory
 */

export function useChatHistory(storageKey = 'ai_chat_history') {
  const [messages, setMessages] = useState(() => {
    try {
      const item = window.localStorage.getItem(storageKey);
      return item ? JSON.parse(item) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(messages));
    } catch (e) {
      console.error('Failed to sync to localStorage:', e);
    }
  }, [messages, storageKey]);

  const addMessage = ({ sender, text }) => {
    const newMsg = {
      id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      sender,
      text,
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  const clearHistory = () => {
    setMessages([]);
  };

  return {
    messages,
    addMessage,
    clearHistory,
  };
}
