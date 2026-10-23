# LOSTINNBO — Streetwear Store

Brutalist clothing site built with Next.js 16. Customers browse the drop, pick a size, and order via Instagram DM — no cart, no checkout.

## Stack

- Next.js 16 (App Router) + TypeScript
- Plain CSS (`app/globals.css`) — brutalist design system
- Deployed on Vercel

## Commands

```bash
npm install
npm run dev     # local dev server at http://localhost:3000
npm run build   # production build
```

## Editing products

All merch lives in **`data/products.ts`**. Add an object to the `products` array:

```ts
{
  slug: "new-item",            // URL: /product/new-item
  name: "NEW ITEM",
  price: 40,
  category: "SHIRTS",
  sizes: ["S", "M", "L", "XL"],
  description: "...",
  image: "/products/new-item.svg",  // drop the image in public/products/
  tag: "NEW",                  // optional badge
}
```

## Changing the Instagram handle

In `data/products.ts`, update `INSTAGRAM_HANDLE`. Order buttons link to `https://ig.me/m/<handle>` which opens a DM conversation on any device.

## Replacing placeholder images

Placeholder SVGs are in `public/products/` (regenerate with `node scripts/gen-placeholders.cjs`). Replace them with real photos — keep the same filename or update the `image` path in `data/products.ts`. Recommended: square photos around 1200×1200.

## Deploy to Vercel

1. Push this repo to GitHub (GitHub Desktop works).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Next.js — click **Deploy**.
4. Done. Every push to `main` redeploys automatically.
