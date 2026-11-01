import React, { useRef, useEffect } from 'react';

/**
 * Master Solution: Drill 02 — Direct DOM Manipulation & Auto-Scrolling with useRef
 */

export function AutoScrollChat({ messages = [] }) {
  const bottomSentinelRef = useRef(null);

  useEffect(() => {
    // Smoothly scroll the sentinel into view whenever messages change
    if (bottomSentinelRef.current) {
      bottomSentinelRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="chat-window" style={{ overflowY: 'auto', maxHeight: '400px' }}>
      {messages.map((m) => (
        <div key={m.id} className="chat-msg">
          {m.text}
        </div>
      ))}
      <div ref={bottomSentinelRef} data-testid="bottom-sentinel" />
    </div>
  );
}
