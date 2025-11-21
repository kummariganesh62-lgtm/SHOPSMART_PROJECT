<div align="center">

# ShopSmart

Minimal shopping experience built with **HTML**, **CSS**, and **vanilla JavaScript**.

![ShopSmart preview](https://user-images.githubusercontent.com/placeholder/shopsmart-cover.png)

</div>

## ✨ Features

- Gradient hero with sticky glassmorphic nav and cart button
- Filterable product grid (All / Home / Tech / Lifestyle)
- Product cards injected from JavaScript (includes TV, laptop, phone, etc.)
- Live cart summary: add items, see subtotal, clear cart, mock checkout alert
- Responsive layout with premium hover states and shadows
- Unsplash-hosted imagery + Google Fonts

## 🗂 Project Structure

```
shopsmart/
├─ index.html   # markup for hero, catalog, cart, footer
├─ style.css    # gradients, layout, glassmorphism, responsive tweaks
└─ script.js    # products data, filters, cart logic, checkout alerts
```

## 🚀 Getting Started

1. Clone or download this repository, then open the `shopsmart` folder.
2. Serve locally (optional) or just open `index.html` in your browser.
   ```bash
   cd shopsmart
   npx serve .
   ```
3. Stay online so Google Fonts and Unsplash images can load.

## 🛠 Customization Tips

- **Products:** edit the `products` array in `script.js` to add/remove items.
- **Branding:** swap colors or gradients by editing CSS variables in `style.css`.
- **Images:** replace URLs with local files placed in `shopsmart/assets`.
- **Logic:** hook `addToCart`/`clearCart` into a backend for real orders.

## 📄 License

MIT — free to use for personal or commercial work. Give credit if you can!

---

Enjoy building with ShopSmart. ✨

