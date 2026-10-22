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

## Component Implementation
- [X] Implement each component according to its interface requirements.
- [X] Use proper TypeScript types and interfaces.
- [X] Implement prop validation where appropriate.
- [X] Handle optional props and children correctly.



### AlertBox
> Shows a colored message box. The color comes from the `type` prop
- `AlertBox` can't remove itself from the page, because a component can't change its own props
- The parent keeps a `useState` boolean for each closable alert and stops rendering it when `onClose` sets that boolean to `false`


### UserProfileCard
> Shows a user's avatar, name, email, and role, with an Edit Profile button.
- If `avatarUrl` is missing, the card shows the first letter of the name in a circle instead of an image
- `capName` capitalizes each word of the name, so `"noah Williams"` displays as "Noah Williams"
- The button uses `onClick={() => onEdit?.(user.id)}`


### ProductDisplay
> Shows a product's image, name, price, description, and stock status, with a button that depends on stock.
- If `imageUrl` is missing, the card shows `no-image-available.svg`
- The price is formatted with `toFixed(2)`, so `39.99999` displays as `$40.00`
- In-stock products show an `Add To Cart` button
- Out-of-stock products show a `Get Back In Stock Notification` button that logs a message to the console
