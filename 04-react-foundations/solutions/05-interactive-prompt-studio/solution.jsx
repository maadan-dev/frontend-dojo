import React, { useState } from 'react';

/**
 * Master Solution: Drill 05 — Controlled Form Inputs & Event Handling
 */

export function PromptStudio({ onSubmitPrompt }) {
  const [promptText, setPromptText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = promptText.trim();
    if (trimmed.length === 0) return;

    if (typeof onSubmitPrompt === 'function') {
      onSubmitPrompt(trimmed);
    }
    setPromptText('');
  };

  const isInvalid = promptText.trim().length === 0;

  return (
    <form data-testid="prompt-form" onSubmit={handleSubmit}>
      <input
        data-testid="prompt-input"
        type="text"
        value={promptText}
        onChange={(e) => setPromptText(e.target.value)}
        placeholder="Type your prompt..."
      />
      <span data-testid="char-count">{promptText.length} / 200</span>
      <button type="submit" data-testid="submit-btn" disabled={isInvalid}>
        Send
      </button>
    </form>
  );
}
