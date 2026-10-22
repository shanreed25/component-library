# React Component Library

**A small library of reusable React components built with TypeScript and Vite. The app shows each component on its own tab, with examples of different prop combinations and of components working together.**

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── App.tsx                  # Parent component: tabs, state, and all example usage
├── components/
│   ├── AlertBox/            # AlertBox.tsx
│   ├── UserProfileCard/     # UserProfileCard.tsx
│   └── ProductDisplay/      # ProductDisplay.tsx
├── data/
│   ├── users.ts             # 8 sample User objects
│   └── products.ts          # 8 sample Product objects
├── types/
│   └── index.ts             # Interfaces for the data and for each component's props
└── assets/
    └── no-image-available.svg  # Fallback image for products with no imageUrl
```

