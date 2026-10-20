# Paradise Nursery

Paradise Nursery is a React and Redux Toolkit plant-shopping demo. Browse plants by category, add products to a cart, change quantities, remove items, and view a live subtotal.

## Features

- Landing page with a “Get Started” button
- About Us page
- Plant catalogue with three categories and six plants per category
- Product cards with image, name, description, price, and Add to Cart button
- Shared navigation on the Plants and Cart pages
- Redux Toolkit cart state with quantity and subtotal calculations
- Increase, decrease, and remove controls in the cart
- Checkout button with a “Coming Soon” message
- Continue Shopping link

## Run locally

You need Node.js (18 or newer) and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

To check a production build:

```bash
npm run build
```

## Main files

- `src/App.jsx` — routes, landing page, and shared navigation
- `src/App.css` — styling and landing-page background image
- `src/AboutUs.jsx` — company information
- `src/CartSlice.jsx` — Redux Toolkit shopping-cart slice
- `src/ProductList.jsx` — plant catalogue
- `src/CartItem.jsx` — shopping cart page
- `src/main.jsx` — React and Redux setup

## Notes

Plant photos are loaded from Unsplash URLs, so an internet connection is needed to display them. This is a learning project and checkout is a demo only.
