import { describe, it, expect, beforeEach } from 'vitest';
import { createMessageNode, mountMessageList } from './exercise.js';

describe('Drill 05: Safe DOM Element Creation & XSS Prevention', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  it('createMessageNode safely constructs article without executing XSS payload', () => {
    const maliciousPayload = '<img src="x" onerror="alert(1)">';
    const message = {
      id: 'm-42',
      sender: 'user',
      text: maliciousPayload,
      timestamp: '11:15 AM',
    };

    const node = createMessageNode(message);

    expect(node.tagName.toLowerCase()).toBe('article');
    expect(node.classList.contains('chat-card')).toBe(true);
    expect(node.classList.contains('user')).toBe(true);
    expect(node.dataset.id).toBe('m-42');

    const header = node.querySelector('.sender-tag');
    expect(header.textContent).toBe('User');

    const body = node.querySelector('.message-body');
    expect(body.textContent).toBe(maliciousPayload);
    // Crucial security assertion: NO img tag was injected into DOM!
    expect(body.querySelector('img')).toBeNull();

    const time = node.querySelector('time.timestamp');
    expect(time.textContent).toBe('11:15 AM');
  });

  it('mountMessageList clears previous content and appends all items', () => {
    container.innerHTML = '<p>Old content</p>';

    const messages = [
      { id: '1', sender: 'user', text: 'Hello', timestamp: '10:00 AM' },
      { id: '2', sender: 'assistant', text: 'Hi there!', timestamp: '10:01 AM' },
    ];

    mountMessageList(messages, container);

    expect(container.querySelectorAll('.chat-card').length).toBe(2);
    expect(container.textContent).not.toContain('Old content');
  });
});
