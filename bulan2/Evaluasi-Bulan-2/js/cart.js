let cart = [];

export function addToCart(item) {
  cart.push(item);
}

export function removeFromCart(index) {
  cart.splice(index, 1);
}

export function getCart() {
  return cart;
}

export function clearCart() {
  cart = [];
}
