// main.js
import { renderMenu, setupCheckout } from "./menu.js";
import { setupRegister, setupLogin } from "./auth.js";

document.addEventListener("DOMContentLoaded", () => {
  setupRegister();
  setupLogin(() => {
    renderMenu();
    setupCheckout();
  });
});
