let currentUser = null;

function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function setupRegister() {
  const form = document.getElementById("register-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;

    const user = { username, password };
    saveUser(user);
    alert("Registrasi berhasil! Silakan login.");
    document.getElementById("register-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
  });

  document.getElementById("to-login").addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("register-section").style.display = "none";
    document.getElementById("login-section").style.display = "block";
  });
}

export function setupLogin(onSuccess) {
  const form = document.getElementById("login-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = getUser();
    if (user && username === user.username && password === user.password) {
      currentUser = user;
      document.getElementById("login-section").style.display = "none";
      document.getElementById("app").style.display = "flex";
      onSuccess();
    } else {
      alert("Username atau password salah!");
    }
  });

  document.getElementById("to-register").addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("login-section").style.display = "none";
    document.getElementById("register-section").style.display = "block";
  });
}

export function getLoginStatus() {
  return currentUser !== null;
}
