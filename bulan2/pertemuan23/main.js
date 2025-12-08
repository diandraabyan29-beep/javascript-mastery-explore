
const page = document.body.dataset.page;

switch (page) {
    case "welcome":
        import("./modules/welcome.js").then(mod => mod.init());
        break;

    case "login":
        import("./modules/login.js").then(mod => mod.init());
        break;

    case "register":
        import("./modules/register.js").then(mod => mod.init());
        break;

    case "home":
        import("./modules/home.js").then(mod => mod.init());
        break;
}
