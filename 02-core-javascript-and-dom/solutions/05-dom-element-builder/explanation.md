# Explanation: Drill 05 — Safe DOM Element Creation & XSS Prevention

## DOM Performance & Security

1. **`textContent` vs `innerHTML`**:
   - `innerHTML` instructs the browser’s HTML parser to interpret the string as raw markup. If the string contains `<script>` or `<img onerror="...">`, malicious code executes with the user's cookies and session tokens.
   - `textContent` treats all characters literally, transforming `<` and `>` into inert text characters without parsing.

2. **`DocumentFragment` & Reflow Batching**:
   - If you append 100 elements directly to `containerElement` one by one in a loop, the browser could trigger 100 layout reflows.
   - By appending elements to an in-memory `document.createDocumentFragment()` first and then appending the fragment once to the DOM, the browser performs **only a single reflow**, increasing rendering performance dramatically.
