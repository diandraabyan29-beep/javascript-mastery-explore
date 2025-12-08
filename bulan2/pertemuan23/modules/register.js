export function init() {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const user = document.getElementById("regUser").value;
        const pass = document.getElementById("regPass").value;

        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);

        alert("Registrasi berhasil!");
        window.location.href = "login.html";
    });
}
