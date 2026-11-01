import React, { useState } from 'react';

/**
 * Master Solution: Drill 02 — Stateful Token Counter & Functional Updates
 */

export function TokenCounter({ initialTokens = 0, costPerToken = 0.002 }) {
  const [tokens, setTokens] = useState(initialTokens);

  const handleAdd1 = () => {
    setTokens((prev) => prev + 1);
  };

  const handleDouble = () => {
    setTokens((prev) => prev * 2);
  };

  const handleBatchAdd3 = () => {
    // Functional updates chain correctly even when queued in the same event
    setTokens((prev) => prev + 1);
    setTokens((prev) => prev + 1);
    setTokens((prev) => prev + 1);
  };

  const handleReset = () => {
    setTokens(initialTokens);
  };

  const totalCost = (tokens * costPerToken).toFixed(4);

  return (
    <div className="token-counter">
      <div>
        Tokens: <span data-testid="token-count">{tokens}</span>
      </div>
      <div>
        Total Cost: <span data-testid="total-cost">${totalCost}</span>
      </div>

      <div className="button-group">
        <button data-testid="btn-add-1" onClick={handleAdd1}>
          Add 1
        </button>
        <button data-testid="btn-add-double" onClick={handleDouble}>
          Double
        </button>
        <button data-testid="btn-batch-add-3" onClick={handleBatchAdd3}>
          Add 3
        </button>
        <button data-testid="btn-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
