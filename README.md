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


## Component Composition
- [X] Create example usage of components working together.
- [X] Demonstrate prop passing between components.
- [X] Show how to handle component nesting.

> The Products tab shows all three ideas from the Component Composition tasks in one place

- **Prop passing:** `App` passes `onAddToCart={() => handleAddToCart(product)}` to each in-stock `ProductDisplay`
- When Add To Cart is clicked, `handleAddToCart` updates three pieces of state in `App`: `cartItems`, `addedProduct`, and `showAddedToCartAlert`
- React re-renders, and `App` passes the added product's name down to an `AlertBox` as its `message`, and `cartItems.length` inside it as children
- **Nesting:** the `AlertBox` is passed as `children` of the `ProductDisplay` it belongs to, so it renders inside that card
- The alert only renders on the card whose `product.id` matches `addedProduct.id`, so only one card shows it at a time. Its X button sets `showAddedToCartAlert` back to `false`

### Props Usage
- [X] Document any special prop handling or requirements.

> The data only flows one way, from App down into the components, and a component never changes its own props
- `App.tsx` is the parent
- `App.tsx` renders the `AlertBox`, `UserProfileCard`, and `ProductDisplay` components
- `App.tsx` passes each component data through props
- Each component uses those props to decide what to show on the page, mainly through conditional rendering
- Shape of the props is defined in `types/index.ts`


## Component Testing
- [X] Test different prop combinations.
- [X] Verify that components render correctly with various props.

### users.ts
> This file exports `users`, an array of 8 `User` objects, which are defined in the `User` interface. Below are some values you can change to check specific branches of the component logic

|Change|What you should see|
|---|---|
|Remove `avatarUrl` from u001|A letter avatar with "A"|
|Remove `avatarUrl` from u001 and set `name: "ava martinez"` (lowercase)|The letter avatar still shows "A" and the heading shows "Ava Martinez", because `capName` capitalizes each word|
|`name: ""`|An empty circle and a blank heading|
|`id: "u010"`|The even branch, since the last character is `0`|
|`id: "u00a"`|The **odd** branch, showing "Last Login: a hours ago". `Number("a")` is `NaN`, and `NaN % 2 === 0` is false|
|A very long `email`|Shows whether the text overflows the card|

The `"u010"` and `"u00a"` cases show that the even/odd logic only looks at the **last character** of the id. Ids like `"u012"` and `"u002"` are both treated as even, and a last login of "2 hours ago" comes from the id rather than real data.

Two users have no `avatarUrl`: **u004 Noah Williams** and **u008 James Wilson**. You can use them to check how `UserProfileCard` looks when there's no avatar. u004's name is stored as `"noah Williams"` to check that `capName` works.

### products.ts
> This file exports `products`, an array of 8 `Product` objects, which are defined in the `Product` interface

|Change|What you should see|
|---|---|
|Remove `imageUrl` from p001|The no-image-available placeholder|
|`inStock: false` on p001|"Out Of Stock", no description, and the Get Back In Stock Notification button|
|`price: 5`|`$5.00`|
|Click Add To Cart on the same product twice|The alert stays on that card and the item count goes up|
|Click Add To Cart on a different product|The alert moves to the new card|
|Pass `showStockStatus={false}` to a `ProductDisplay` in `App.tsx`|The In Stock / Out Of Stock label disappears|

**p005 USB-C Charging Hub** has no `imageUrl` and a price of `39.99999`, so it checks both the image fallback and the price formatting. **p003** and **p008** are out of stock.