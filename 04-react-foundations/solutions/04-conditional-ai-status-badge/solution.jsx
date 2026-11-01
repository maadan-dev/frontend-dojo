import React from 'react';

/**
 * Master Solution: Drill 04 — Conditional UI Rendering with Ternaries & Logical Operators
 */

export function AgentStatusBadge({ status, retryCount = 0 }) {
  return (
    <div data-testid="status-badge" className={`badge ${status.toLowerCase()}`}>
      {status === 'THINKING' && <span className="spinner">Thinking...</span>}
      {status === 'STREAMING' && (
        <span className="pulsing-dot">Streaming Tokens...</span>
      )}
      {status === 'ERROR' && (
        <>
          <span className="error-text">Failed to respond</span>
          {retryCount > 0 && (
            <small data-testid="retry-info">Retries left: {retryCount}</small>
          )}
        </>
      )}
      {status === 'COMPLETE' && <span className="success-text">Done</span>}
      {status === 'IDLE' && <span className="idle-text">Standby</span>}
    </div>
  );
}
