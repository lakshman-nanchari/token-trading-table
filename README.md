# Token Trading Table – Axiom UI Replica

A pixel-accurate frontend implementation of **Axiom Trade’s token discovery table**, built as a frontend-focused take-home assignment.

The goal of this project was to closely replicate the **layout, visual hierarchy, and interactions** of Axiom’s trading table while maintaining clean, scalable React architecture.

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **React + TypeScript**
- **Tailwind CSS**
- **Radix UI** (tooltips & popovers)
- **Local mock data** (no backend)

---

## ✨ Features

- Tab-based filtering:
  - New Pairs
  - Final Stretch
  - Migrated
- Sortable columns:
  - Price
  - 24h %
  - Volume
- Live price simulation with flash effect
- Green / red percentage indicators
- Token row action menu
- Token details modal
- Loading skeleton for improved UX
- Graceful fallback for missing token icons

---

## 🎨 Pixel-Perfect UI Decisions

- Matched row height, spacing, and typography to Axiom’s trading table
- Subtle hover effects and color hierarchy inspired by real trading interfaces
- Compact table density suitable for high-frequency market data
- Sticky table header for better usability
- Skeleton loaders to mimic real data-fetching behavior

---

## 🧠 Icon Handling Strategy

Not all tokens have official icon assets available.

To handle this cleanly and avoid broken asset requests:

- Token data contains **no icon paths**
- Icons are resolved via a centralized **symbol-to-asset registry**
- Tokens without icons gracefully fall back to an initial-letter badge

This approach prevents 404 errors while keeping the UI visually consistent.

---

## 📊 Live Data Simulation

Prices and 24h changes are updated at a fixed interval using controlled random deltas to simulate real-time market behavior, while ensuring prices never go negative.

---

## 📁 Project Structure (Relevant)

src/
├─ components/
│ ├─ table/
│ │ ├─ TokenTable.tsx
│ │ ├─ TokenRow.tsx
│ │ ├─ TokenRowSkeleton.tsx
│ │ ├─ TableHeader.tsx
│ │ └─ TokenIcon.tsx
│ └─ modals/
│ └─ TokenDetailsModal.tsx
├─ lib/
│ ├─ mockTokens.ts
│ ├─ tokenIcons.ts
│ └─ format.ts
└─ types/
└─ token.ts