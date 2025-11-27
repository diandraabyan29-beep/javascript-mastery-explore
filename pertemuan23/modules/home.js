export function init() {
    const name = localStorage.getItem("username");
    document.getElementById("userDisplay").innerText = name;

    const todoInput = document.getElementById("todoText");
    const addBtn = document.getElementById("addTodoBtn");
    const todoList = document.getElementById("todoList");

    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    function renderTodos() {
        todoList.innerHTML = "";
        todos.forEach((t, index) => {
            const li = document.createElement("li");

            li.innerHTML = `
                <span>${t}</span>
                <button class="deleteBtn" data-index="${index}">Hapus</button>
            `;

            todoList.appendChild(li);
        });
    }

    addBtn.addEventListener("click", () => {
        const text = todoInput.value.trim();
        if (text === "") return;

        todos.push(text);
        localStorage.setItem("todos", JSON.stringify(todos));

        todoInput.value = "";
        renderTodos();
    });

    todoList.addEventListener("click", (e) => {
        if (e.target.classList.contains("deleteBtn")) {
            const index = e.target.dataset.index;
            todos.splice(index, 1);
            localStorage.setItem("todos", JSON.stringify(todos));
            renderTodos();
        }
    });

    renderTodos();

    window.logout = function() {
        localStorage.removeItem("isLogin");
        window.location.href = "index.html";
    };
}
