/**
 * Master Solution: Drill 06 — Event Flow, Bubbling & Event Delegation
 */

export function setupToolHub(containerElement, onAction) {
  function handleClick(event) {
    // Traverse upwards from event.target to find the nearest element with data-action
    const actionEl = event.target.closest('[data-action]');
    if (!actionEl || !containerElement.contains(actionEl)) {
      return;
    }

    const action = actionEl.dataset.action;
    const cardEl = actionEl.closest('.tool-card');
    const toolId = cardEl ? cardEl.dataset.id : null;

    if (action === 'delete' && cardEl) {
      cardEl.remove();
    }

    if (typeof onAction === 'function') {
      onAction({ action, toolId });
    }
  }

  containerElement.addEventListener('click', handleClick);

  // Return cleanup function to detach listener and prevent memory leaks
  return function cleanup() {
    containerElement.removeEventListener('click', handleClick);
  };
}
