const products = [
  {
    id: "p-01",
    name: "Minimal Desk Lamp",
    price: 48,
    category: "home",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-02",
    name: "Wireless Earbuds",
    price: 69,
    category: "tech",
    img: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-03",
    name: "Reusable Bottle",
    price: 24,
    category: "lifestyle",
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-04",
    name: "Smart Speaker Mini",
    price: 59,
    category: "tech",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-07",
    name: "4K Smart TV 50\"",
    price: 489,
    category: "tech",
    img: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-08",
    name: "Slimline Laptop 14\"",
    price: 899,
    category: "tech",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-09",
    name: "Smartphone Pro",
    price: 799,
    category: "tech",
    img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-05",
    name: "Aromatherapy Candle",
    price: 18,
    category: "home",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "p-06",
    name: "Canvas Tote",
    price: 32,
    category: "lifestyle",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
  },
];

const productGrid = document.getElementById("product-grid");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearCartBtn = document.getElementById("clear-cart");
const filterButtons = document.querySelectorAll(".filter-btn");
const yearEl = document.getElementById("year");

let cart = {};

const formatCurrency = (value) => `$${value.toFixed(2)}`;

const renderProducts = (filter = "all") => {
  productGrid.innerHTML = "";
  const list = filter === "all" ? products : products.filter((p) => p.category === filter);

  list.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" loading="lazy">
      <h3>${product.name}</h3>
      <p class="price">${formatCurrency(product.price)}</p>
      <button class="add-btn" data-id="${product.id}">Add to cart</button>
    `;
    productGrid.appendChild(card);
  });
};

const renderCart = () => {
  const entries = Object.values(cart);

  if (!entries.length) {
    cartItems.innerHTML = `<p class="empty">No items yet. Add something you love.</p>`;
    cartTotal.textContent = "$0.00";
    cartCount.textContent = "0";
    return;
  }

  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  entries.forEach((item) => {
    total += item.price * item.qty;
    count += item.qty;
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <div class="muted">${item.qty} × ${formatCurrency(item.price)}</div>
      </div>
      <span>${formatCurrency(item.price * item.qty)}</span>
    `;
    cartItems.appendChild(row);
  });

  cartTotal.textContent = formatCurrency(total);
  cartCount.textContent = count;
};

const addToCart = (id) => {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  if (!cart[id]) {
    cart[id] = { ...product, qty: 1 };
  } else {
    cart[id].qty += 1;
  }
  renderCart();
};

const clearCart = () => {
  cart = {};
  renderCart();
};

productGrid.addEventListener("click", (event) => {
  if (event.target.matches(".add-btn")) {
    addToCart(event.target.dataset.id);
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

clearCartBtn.addEventListener("click", clearCart);

document.querySelector(".checkout").addEventListener("click", () => {
  if (!Object.keys(cart).length) {
    alert("Your cart is empty.");
    return;
  }
  alert("Checkout flow is not connected. This is just a demo.");
});

renderProducts();
renderCart();

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

