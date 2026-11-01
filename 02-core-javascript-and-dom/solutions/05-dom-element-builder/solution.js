/**
 * Master Solution: Drill 05 — Safe DOM Element Creation & XSS Prevention
 */

export function createMessageNode(messageData) {
  const article = document.createElement('article');
  article.classList.add('chat-card', messageData.sender);
  article.dataset.id = messageData.id;

  const header = document.createElement('header');
  header.className = 'sender-tag';
  header.textContent =
    messageData.sender.charAt(0).toUpperCase() + messageData.sender.slice(1);

  const p = document.createElement('p');
  p.className = 'message-body';
  // Safe: textContent escapes HTML entities automatically
  p.textContent = messageData.text;

  const time = document.createElement('time');
  time.className = 'timestamp';
  time.textContent = messageData.timestamp;

  article.appendChild(header);
  article.appendChild(p);
  article.appendChild(time);

  return article;
}

export function mountMessageList(messages, containerElement) {
  // Clear previous children
  containerElement.replaceChildren();

  // Fragment batch append for high rendering performance
  const fragment = document.createDocumentFragment();
  messages.forEach((msg) => {
    fragment.appendChild(createMessageNode(msg));
  });

  containerElement.appendChild(fragment);
}
