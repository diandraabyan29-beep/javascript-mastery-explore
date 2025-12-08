export function init() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const user = document.getElementById("loginUser").value;
        const pass = document.getElementById("loginPass").value;

        const savedUser = localStorage.getItem("username");
        const savedPass = localStorage.getItem("password");

        if (user === savedUser && pass === savedPass) {
            alert("Login berhasil!");
            localStorage.setItem("isLogin", "true");
            window.location.href = "home.html";
        } else {
            alert("Username atau password salah!");
        }
    });
}
