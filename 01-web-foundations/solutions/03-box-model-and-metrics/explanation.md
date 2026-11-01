# Explanation: Drill 03 — The CSS Box Model & Sizing Metrics

## The Math Behind `box-sizing`

### 1. The Default Legacy Behavior (`content-box`):
$$\text{Rendered Width} = \text{width} + \text{padding-left} + \text{padding-right} + \text{border-left} + \text{border-right}$$
If you set `width: 50%`, the padding and border are added **outside** that 50%. Putting two 50% cards side by side means:
$$\text{Total Width} = (50\% + \text{padding}) + (50\% + \text{padding}) = 100\% + 2 \times \text{padding} > 100\%$$
This breaks multi-column layouts.

### 2. The Modern Standard (`border-box`):
$$\text{Rendered Width} = \text{width} \quad (\text{padding and borders are absorbed inside})$$
The browser shrinks the inner content box so the card occupies exactly 50% of the parent width. Two 50% cards will always total 100%, fitting side by side cleanly.
