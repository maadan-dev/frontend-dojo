# Drill 06: Modern Layouts — The CSS Grid AI Metrics Dashboard 📊

## 🎯 Objective
Build a 2D dashboard layout for an AI Evaluation & Metrics system using CSS Grid, template areas, fractional units, and responsive `auto-fit` tracks.

## 📝 Background
While Flexbox is ideal for 1D streams (like chat messages or navigation bars), **CSS Grid excels at 2-dimensional layouts** (orchestrating rows and columns simultaneously). An AI monitoring dashboard needs to display model latency, token throughput, error rates, and GPU utilization across flexible cards.

## 📋 Requirements
Inside `dashboard.css`:

1. **Dashboard App Layout (`.dashboard-container`)**:
   - `display: grid;`
   - Header spanning across the entire top (`grid-column: 1 / -1;`).
   - Define a two-column desktop structure: sidebar (`250px`) and main content area (`1fr`).
   - `gap: 24px;`
   - `min-height: 100vh;`
2. **Metrics Card Grid (`.metrics-grid`)**:
   - `display: grid;`
   - Must use the golden responsive pattern:
     ```css
     grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
     ```
   - `gap: 16px;`
3. **Featured Card (`.metric-card.featured`)**:
   - Must span 2 columns on viewports where multiple columns exist: `grid-column: span 2;`.
4. **Card Styling**:
   - `.metric-card` must have `padding: 20px;`, `border-radius: 8px;`, and `border: 1px solid #e2e8f0;`.

## 🧪 Verification
Run tests in your terminal:
```bash
npm test 01-web-foundations/drills/06-css-grid-model-dashboard
```
