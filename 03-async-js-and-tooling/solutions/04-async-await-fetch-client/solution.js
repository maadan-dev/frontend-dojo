/**
 * Master Solution: Drill 04 — Production Fetch Client with Async/Await & AbortController
 */

export async function sendInferenceRequest(url, payload, options = {}) {
  const controller = new AbortController();
  let timerId;

  if (options.timeoutMs) {
    timerId = setTimeout(() => {
      controller.abort();
    }, options.timeoutMs);
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    return await response.json();
  } finally {
    if (timerId) {
      clearTimeout(timerId);
    }
  }
}
