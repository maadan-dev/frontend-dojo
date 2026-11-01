import { describe, it, expect, vi, beforeEach } from 'vitest';
import { setupToolHub } from './exercise.js';

describe('Drill 06: Event Flow, Bubbling & Event Delegation', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    container.innerHTML = `
      <div class="tool-card" data-id="tool-search">
        <h4>Web Search</h4>
        <button data-action="execute">Run Search</button>
        <button data-action="delete">Remove</button>
      </div>
      <div class="tool-card" data-id="tool-python">
        <h4>Python REPL</h4>
        <button data-action="execute">Run Code</button>
        <button data-action="delete">Remove</button>
      </div>
    `;
  });

  it('delegates execute clicks to onAction with toolId', () => {
    const handleAction = vi.fn();
    setupToolHub(container, handleAction);

    const runBtn = container.querySelector('[data-id="tool-search"] [data-action="execute"]');
    runBtn.click();

    expect(handleAction).toHaveBeenCalledWith({
      action: 'execute',
      toolId: 'tool-search',
    });
  });

  it('delegates delete clicks, removes card from DOM, and notifies onAction', () => {
    const handleAction = vi.fn();
    setupToolHub(container, handleAction);

    const deleteBtn = container.querySelector('[data-id="tool-python"] [data-action="delete"]');
    deleteBtn.click();

    expect(handleAction).toHaveBeenCalledWith({
      action: 'delete',
      toolId: 'tool-python',
    });
    // DOM removal assertion
    expect(container.querySelector('[data-id="tool-python"]')).toBeNull();
    expect(container.querySelectorAll('.tool-card').length).toBe(1);
  });

  it('dynamically added tool cards work immediately without re-binding', () => {
    const handleAction = vi.fn();
    setupToolHub(container, handleAction);

    // Dynamically insert third tool
    const newCard = document.createElement('div');
    newCard.className = 'tool-card';
    newCard.dataset.id = 'tool-bash';
    newCard.innerHTML = `<button data-action="execute">Run Bash</button>`;
    container.appendChild(newCard);

    newCard.querySelector('button').click();
    expect(handleAction).toHaveBeenCalledWith({
      action: 'execute',
      toolId: 'tool-bash',
    });
  });

  it('cleanup function removes event listener', () => {
    const handleAction = vi.fn();
    const cleanup = setupToolHub(container, handleAction);

    cleanup();

    const runBtn = container.querySelector('[data-id="tool-search"] [data-action="execute"]');
    runBtn.click();

    expect(handleAction).not.toHaveBeenCalled();
  });
});
