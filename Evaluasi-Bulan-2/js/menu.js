import { menuItems } from "./data.js";
import { addToCart, getCart, removeFromCart, clearCart } from "./cart.js";

export function renderMenu() {
  const menuList = document.getElementById("menu-list");
  menuList.innerHTML = "";

  menuItems.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - Rp ${item.price}
      <button data-id="${item.id}">Tambah</button>
    `;
    menuList.appendChild(li);
  });
  menuList.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      const id = parseInt(e.target.dataset.id);
      const item = menuItems.find(m => m.id === id);
      addToCart(item);
      renderCart();
    }
  });
}

export function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  let total = 0;

  getCart().forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - Rp ${item.price}
      <button data-index="${index}">Hapus</button>
    `;
    cartList.appendChild(li);
  });

  document.getElementById("total").textContent = total;

  cartList.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      const index = parseInt(e.target.dataset.index);
      removeFromCart(index);
      renderCart();
    }
  });
}

export function setupCheckout() {
  document.getElementById("checkout").addEventListener("click", () => {
    const total = document.getElementById("total").textContent;
    if (getCart().length === 0) {
      alert("Keranjang kosong!");
    } else {
      alert("Pesanan berhasil! Total Rp " + total);
      clearCart();
      renderCart();
    }
  });
}
