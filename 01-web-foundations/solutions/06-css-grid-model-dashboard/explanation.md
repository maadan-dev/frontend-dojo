# Explanation: Drill 06 — Modern Layouts: The CSS Grid AI Metrics Dashboard

## Key Grid Mechanics

1. **`grid-column: 1 / -1`**:
   - `1` is the leftmost grid line.
   - `-1` refers to the rightmost grid line (the trailing boundary).
   - Setting `1 / -1` makes an element (like a header or banner) span across all existing columns, regardless of whether there are 2, 4, or 12 columns in the grid.

2. **The Magic of `repeat(auto-fit, minmax(220px, 1fr))`**:
   - `minmax(220px, 1fr)` ensures a card is never squished below `220px`, but can expand freely (`1fr`) if extra space is available.
   - `auto-fit` tells the browser: "Calculate how many 220px tracks can fit into the current container width. If 3 fit, make 3 columns. If on a mobile phone only 1 fits, collapse gracefully to 1 column."
   - This achieves full responsiveness without writing media queries.
