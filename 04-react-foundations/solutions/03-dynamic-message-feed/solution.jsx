import React, { useState } from 'react';

/**
 * Master Solution: Drill 03 — Dynamic Message Feed & The Reconciliation Key Prop
 */

export function MessageFeed({ initialMessages = [] }) {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (idToDelete) => {
    // Immutable filter creates a new array reference
    setMessages((prev) => prev.filter((msg) => msg.id !== idToDelete));
  };

  if (messages.length === 0) {
    return <p data-testid="empty-feed">No messages in conversation.</p>;
  }

  return (
    <ol className="message-list">
      {messages.map((msg) => (
        <li key={msg.id} data-testid={`msg-${msg.id}`} className="feed-item">
          <strong className="sender">{msg.sender}: </strong>
          <span className="content">{msg.text}</span>
          <button
            data-testid={`delete-${msg.id}`}
            onClick={() => handleDelete(msg.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}
