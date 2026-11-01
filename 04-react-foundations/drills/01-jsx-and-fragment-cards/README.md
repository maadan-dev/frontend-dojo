# Drill 01: JSX Architecture, Fragments & Props Composition 🧩

## 🎯 Objective
Build functional React components adhering to JSX compilation rules, using fragments `<>` to avoid unnecessary wrapper divs, and composing components using `children`.

## 📋 Requirements
Inside `exercise.jsx`:
1. `ModelCard({ modelName = 'Default Model', provider, children })`:
   - Returns a `<div className="model-card">`.
   - Contains an `<h3>` with `modelName`.
   - If `provider` is supplied, renders a `<span className="provider-tag">{provider}</span>`.
   - Renders `{children}` inside a `<div className="card-body">`.
2. `ModelComparison({ modelA, modelB })`:
   - Renders both models side by side using a single `<React.Fragment>` / `<>` root wrapper (no extra outer container div!).

## 🧪 Verification
```bash
npx vitest 04-react-foundations/drills/01-jsx-and-fragment-cards
```
