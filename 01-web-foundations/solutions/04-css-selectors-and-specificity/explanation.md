# Explanation: Drill 04 — CSS Selectors, Combinators & Specificity

## Key Selector Rules

1. **Child Combinator (`>`) vs Descendant (space)**:
   - `.agent-list li` matches any `li` at any depth inside `.agent-list`. If an `li` contained a nested `ol > li`, both would receive the style.
   - `.agent-list > li` targets only direct children, preventing style pollution in nested lists.

2. **Adjacent Sibling (`+`)**:
   - `h2 + p` targets only the single paragraph immediately following an `h2`. It is ideal for introductory lead paragraphs.

3. **Specificity Math**:
   - Element (`li`): 1 pt
   - Class (`.agent-list`): 10 pts
   - `.agent-list > li` total specificity = 11 pts.
   - Because we structure selectors logically, we never need to resort to `!important`.
