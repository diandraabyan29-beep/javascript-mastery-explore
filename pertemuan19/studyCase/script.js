const title = document.getElementById("page-title")
const btn = document.getElementById("btn-change")

btn.addEventListener("click", () => {
    title.innerText = "Selamat Datang di kelak DOM"
})

const input = document.getElementById("name-input")
const preview = document.getElementById("name-preview")

input.addEventListener("keyup", () => {
    const v = input.value.trim()
    preview.textContent = v === "" ? "(Belum Ada)" : v
})

const decs = document.getElementById("decs")
const toggleBtn = document.getElementById("toggle-btn")
let visible = true

toggleBtn.addEventListener("click", () => {
    visible = !visible
    decs.style.display = visible ? "block" : "none"
    toggleBtn.innerText = visible ? "Sembunyikan" : "Tampilkan"
})

const countEl = document.getElementById("count")
const incBtn = document.getElementById("inc")
let count = 0

incBtn.addEventListener("click", () => {
    count++
    countEl.innerText = count
})

const input1 = document.getElementById("task-inout")
const btn2 = document.getElementById("add-task")
const list = document.getElementById("task-list")

btn2.addEventListener("click", () => {
    if (!input1.value.trim()) return
    const li = document.createElement("li")
    li.textContent = input1.value
    list.appendChild(li)
    input1.value = ""
})

const menu = document.getElementById("menu")

menu.addEventListener("click", (e) => {
    if (!e.target.classList.contains("menu-item")) return
    document.querySelectorAll(".menu-item").forEach((item) => item.classList.remove("active"))
    e.target.classList.add("active")
})

const nama = document.getElementById("nama")
const save = document.getElementById("save")
const err = document.getElementById("error")
const res = document.getElementById("result")

save.addEventListener("click", () => {
    const value = nama.value.trim()
    if (!value) {
        err.textContent = "Nama tidak boleh kosong"
        res.textContent = ""
        return
    }
    err.textContent = ""
    res.textContent = `hai ${value}!`
})

const photo = document.getElementById("photo")
const btn3 = document.getElementById("change-photo")

let toggle = false

btn3.addEventListener("click", () => {
    toggle = !toggle
    photo.src = toggle ? "img2.jpg" : "img1.jpg"
})

const cb = document.getElementById("ready")
const status = document.getElementById("status")

cb.addEventListener("click", () => {
    status.textContent = cb.checked ? "Mantap! kamu siap belajar" : "Yuk niatkan dulu"
})

const data = [
    { name: "Ahmad", score: 80 },
    { name: "Zaid", score: 65 },
    { name: "Bilal", score: 75 }
]

const tbody = document.getElementById("tbody")

data.forEach((item, i) => {
    const tr = document.createElement("tr")
    tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${item.name}</td>
        <td>${item.score}</td>
    `
    tbody.appendChild(tr)
})
