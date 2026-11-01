# Drill 04: CSS Selectors, Combinators & Specificity 🎯

## 🎯 Objective
Master modern CSS selectors and combinators, targeting elements precisely according to the CSS specificity cascade without relying on `!important`.

## 📝 Background
In complex UI applications (especially component libraries and design systems), poorly constructed selectors cause styling collisions or specificity wars. Knowing how to target immediate children (`>`), direct siblings (`+`), and pseudo-states (`:focus-visible`, `:disabled`) is essential.

## 📋 Requirements
Inside `selectors.css`, write the exact selector rules to achieve the following:

1. **Direct Child Combinator (`>`)**:
   - Style only `li` elements that are *direct children* of `.agent-list` (do not affect nested sub-lists). Give them `padding: 12px 0;`.
2. **Adjacent Sibling Combinator (`+`)**:
   - Style any paragraph `<p>` that appears *immediately after* an `<h2>` heading. Give it `font-weight: bold;` and `color: #333;`.
3. **Attribute Selector**:
   - Target input elements with `type="password"`. Give them `border: 2px solid crimson;`.
4. **Pseudo-Class `:disabled`**:
   - Target any button in its `:disabled` state. Give it `opacity: 0.5;` and `cursor: not-allowed;`.
5. **Pseudo-Class `:nth-child(even)`**:
   - Target even rows (`tr:nth-child(even)`) inside a table body `tbody`. Give them `background-color: #f2f2f2;`.
6. **No `!important` Rule**:
   - You must NOT use `!important` anywhere in your stylesheet.

## 🧪 Verification
Run tests in your terminal:
```bash
npm test 01-web-foundations/drills/04-css-selectors-and-specificity
```
