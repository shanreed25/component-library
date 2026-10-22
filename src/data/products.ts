import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "p001",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    description: "Over-ear headphones with active noise cancellation and 30-hour battery life.",
    imageUrl: "https://picsum.photos/seed/headphones/400/400",
    inStock: true,
  },
  {
    id: "p002",
    name: "Mechanical Keyboard",
    price: 119.5,
    description: "Tenkeyless keyboard with hot-swappable switches and RGB backlighting.",
    imageUrl: "https://picsum.photos/seed/keyboard/400/400",
    inStock: true,
  },
  {
    id: "p003",
    name: "Ergonomic Office Chair",
    price: 249.0,
    description: "Adjustable mesh chair with lumbar support and 4D armrests.",
    imageUrl: "https://picsum.photos/seed/chair/400/400",
    inStock: false,
  },
  {
    id: "p004",
    name: "Stainless Steel Water Bottle",
    price: 24.95,
    description: "Insulated 32 oz bottle that keeps drinks cold for 24 hours.",
    imageUrl: "https://picsum.photos/seed/bottle/400/400",
    inStock: true,
  },
  {
    id: "p005",
    name: "USB-C Charging Hub",
    price: 39.99999,
    description: "7-in-1 hub with HDMI, SD card reader, and 100W power delivery.",
    inStock: true,
  },
  {
    id: "p006",
    name: "Graphic Drawing Tablet",
    price: 89.0,
    description: "10-inch pen tablet with 8192 pressure levels for digital art.",
    imageUrl: "https://picsum.photos/seed/tablet/400/400",
    inStock: true,
  },
  {
    id: "p007",
    name: "LED Desk Lamp",
    price: 32.49,
    description: "Dimmable lamp with five color temperatures and a USB charging port.",
    imageUrl: "https://picsum.photos/seed/lamp/400/400",
    inStock: true,
  },
  {
    id: "p008",
    name: "Canvas Backpack",
    price: 54.0,
    description: "Water-resistant backpack with a padded 15-inch laptop sleeve.",
    imageUrl: "https://picsum.photos/seed/backpack/400/400",
    inStock: false,
  }
];