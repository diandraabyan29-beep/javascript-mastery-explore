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

const countEl1 = document.getElementById("count")
const btnPlus = document.getElementById("btn-plus")
const msgEl = document.getElementById("msg")
let count1 = 0

btnPlus.addEventListener("click", () => {
    count1++
    countEl1.textContent = count1

    if (count1 >= 5) {
        msgEl.textContent = "Wah, rajin juga! 🔥"
    } else {
        msgEl.textContent = ""
    }

    if (count1 % 10 === 0) {
        msgEl.textContent = "🎉 Hebat! Sudah sampai kelipatan 10!"
    }

    if (count1 > 30) {
        countEl1.style.color = "red"
    } else {
        countEl1.style.color = ""
    }
})

 const input2 = document.getElementById("todo-input")
const addBtn = document.getElementById("todo-add")
const list2 = document.getElementById("todo-list")
const info = document.getElementById("todo-info")

function updateInfo() {
  const total = list2.querySelectorAll("li").length
  const done = list2.querySelectorAll("li.done").length
  info.textContent = `Total: ${total}, Selesai: ${done}`
}

addBtn.addEventListener("click", () => {
  const text = input2.value.trim()
  if (!text) return

  const li = document.createElement("li")
  li.textContent = text

  const delBtn = document.createElement("button")
  delBtn.textContent = "Hapus"

  delBtn.addEventListener("click", (e) => {
    e.stopPropagation()
    li.remove()
    updateInfo()
  })

  li.addEventListener("click", () => {
    li.classList.toggle("done")
    updateInfo()
  })

  li.appendChild(delBtn)
  list2.appendChild(li)
  input2.value = ""
  updateInfo()
})

const search = document.getElementById("search")
const list3 = document.getElementById("santri-list")
const infoSantri = document.getElementById("info")

search.addEventListener("keyup", () => {
  const q = search.value.toLowerCase()
  let countShown = 0

  list3.querySelectorAll("li").forEach((li) => {
    const name = li.textContent
    const lowerName = name.toLowerCase()
    const match = lowerName.includes(q)

    if (match) {
      const regex = new RegExp(`(${q})`, "gi")
      li.innerHTML = name.replace(regex, "<mark>$1</mark>")
      li.style.display = "list-item"
      countShown++
    } else {
      li.style.display = "none"
    }
  })

  infoSantri.textContent =
    countShown === 0 ? "Tidak ada santri ditemukan" : `Ditemukan ${countShown} santri`
})


const tabs = document.getElementById("tabs");
const contents = document.querySelectorAll("[data-tab-content]");

tabs.addEventListener("click", (e) => {
  const tab = e.target.dataset.tab;
  if (!tab) return;

  tabs.querySelectorAll("[data-tab]").forEach((t) => t.classList.remove("active"));

  e.target.classList.add("active");
  contents.forEach((c) => {
    c.style.display = c.dataset.tabContent === tab ? "block" : "none";
  });
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const q = faq.querySelector(".question");
  const a = faq.querySelector(".answer");
  const icon = faq.querySelector(".icon");

  q.addEventListener("click", () => {

    faqs.forEach((f) => {
      f.querySelector(".answer").style.display = "none";
      f.querySelector(".icon").textContent = "+";
    });

    const isVisible = a.style.display === "block";
    if (!isVisible) {
      a.style.display = "block";
      icon.textContent = "-";
    }
  });
});

const rating = document.getElementById("rating");
const ratingText = document.getElementById("rating-text");
let current = 0;

const descriptions = {
  1: "Buruk",
  2: "Kurang",
  3: "Cukup",
  4: "Bagus",
  5: "Luar biasa"
};

function setActive(r) {
  rating.querySelectorAll(".star").forEach((star) => {
    const value = Number(star.dataset.value);
    star.classList.toggle("active", value <= r);
  });
}

rating.addEventListener("click", (e) => {
  if (!e.target.classList.contains("star")) return;
  current = Number(e.target.dataset.value);
  setActive(current);
  ratingText.textContent = `Rating: ${current}/5 (${descriptions[current]})`;
});

rating.addEventListener("mouseover", (e) => {
  if (!e.target.classList.contains("star")) return;
  const hoverValue = Number(e.target.dataset.value);
  setActive(hoverValue);
  ratingText.textContent = `Rating: ${hoverValue}/5 (${descriptions[hoverValue]})`;
});

rating.addEventListener("mouseout", () => {
  setActive(current);
  ratingText.textContent = current
    ? `Rating: ${current}/5 (${descriptions[current]})`
    : "Belum ada rating";
});


const mainImg = document.getElementById("main-img");
const caption = document.getElementById("caption");
const thumbs = document.getElementById("thumbs");

thumbs.addEventListener("click", (e) => {
  if (!e.target.classList.contains("thumb")) return;

  thumbs.querySelectorAll(".thumb").forEach((t) => t.classList.remove("active-thumb"));

  e.target.classList.add("active-thumb");

  mainImg.classList.add("fade-out");
  setTimeout(() => {
    mainImg.src = e.target.src;
    caption.textContent = e.target.dataset.caption;
    mainImg.classList.remove("fade-out");
    mainImg.classList.add("fade-in");
    setTimeout(() => mainImg.classList.remove("fade-in"), 500); 
  }, 300);
});

const btn4 = document.getElementById("theme-btn");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    btn4.textContent = "☀️ Pakai Light Mode";
  } else {
    document.body.classList.remove("dark");
    btn4.textContent = "🌙 Pakai Dark Mode";
  }
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

btn4.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  const theme = isDark ? "dark" : "light";
  applyTheme(theme);
});

