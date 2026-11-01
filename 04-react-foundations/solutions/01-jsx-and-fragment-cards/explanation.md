# Explanation: Drill 01 — JSX Architecture, Fragments & Props Composition

## Key Insights

1. **The Purpose of `<React.Fragment>` / `<>`**:
   - In HTML, adding wrapper `<div>` tags just to satisfy syntax rules breaks CSS Grid and Flexbox alignment (the wrapper div becomes the grid item instead of its children).
   - React Fragments tell the compiler: "Treat these children as a single group during evaluation, but insert them directly into the parent DOM without creating any wrapper node."

2. **The Power of `{children}`**:
   - The `children` prop enables **Component Inversion of Control**. Instead of `ModelCard` hardcoding what goes inside its body, any parent component can pass arbitrary text, buttons, or subcomponents inside `<ModelCard>...</ModelCard>`.
