// 🟢 EASY LEVEL
// 1. Mengambil Data User Sederhana
async function getUser() {
  try {
    const res = await fetch("https://dummyjson.com/users/1");
    const data = await res.json();
    
    const userInfo = {
        name: `${data.firstName} ${data.lastName}`,
        umur: data.umur
    } 

    console.log(`nama ${userInfo.name}`);
    console.log(`umur ${userInfo.umur}`);
    
    localStorage.setItem("user_1", JSON.stringify(userInfo))

    console.log("Data berhasil di simpan ke local storage")
   }catch(error) {
    console.error("Gagal mengambil data:", error);
  }
}

getUser()

// 2. Menangani Error Ketika API Tidak Ditemukan
async function loadErrorExample() {
    try{
        const res = await fetch ("https://dummyjson.com/halaman-yang-tidak-ada")

        if (!res.ok){
            throw new Error("Halaman tidak di temukan()404")
        }

        const data = await res.json()
        console.log(data);
        
    }catch (error){
        console.log(error.message);

        localStorage.setItem("Lasr error", error.message)
        
        alert(`Terjadi kesalahan ${error.message}`)
    }
    
}

// 3. Fetch → json() → Menampilkan Daftar Judul Produk
async function getProducts(){
    try{
        const res = await fetch ("https://dummyjson.com/products")
        const data = await res.json()

        const filtered = products.filter(p=> p.price >100)

        const titles = filtered.map(p=> p.title)
        console.log("Produk dengan harga > 100", titles)

        const price = filtered.map(p=> p.price)

        localStorage.setItem("Produk harga",JSON.stringify(price))
        console.log("Daftar harga berhasil di simpan ke localStorage!")
    }catch(error){
        console.log("Gagal mengambil data",error);
        
    }

}

getProducts()

// 4. Refactor Callback ke async/await
function loadDataPromise(){
    return new Promise((resolve,rejact)=> {
        setTimeout(()=>{
            const succes = Math.random()>0.5
            if (succes){
                resolve("Data siap")
            }else{
                rejact(new Error("Gagal mengambil data"))
            }              
        },1000)
    })
}

async function run(){
    try{
        const hasil = await loadDataPromise()
        console.log(hasil)
    }catch(error){
        console.error("Terjadi kesalahan", error.message)
    }

}
run()

// 5. Fungsi Delay Menggunakan Promise + Async
function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function runSteps() {
  console.log("Step 1 mulai");
  await delay(500);
  console.log("Step 1 selesai");

  console.log("Step 2 mulai");
  await delay(1500);
  console.log("Step 2 selesai");

  console.log("Step 3 mulai");
  await delay(2000);
  console.log("Step 3 selesai");

  const selesaiWaktu = new Date().toLocaleTimeString();

  localStorage.setItem("last_finish_time", selesaiWaktu);

  console.log("Semua step selesai pada:", selesaiWaktu);
}

runSteps();


// 6. Fetch Data Cart + Simpan ke localStorage
async function loadCart() {
  const res = await fetch("https://dummyjson.com/carts/1");
  const cart = await res.json();

  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("Cart berhasil disimpan!");
}

function showCart() {
  const cartData = localStorage.getItem("cart");

  if (!cartData) {
    console.log("Cart belum ada di localStorage");
    return;
  }

  const cart = JSON.parse(cartData)
  console.log("Isi cart:", cart.products);

  const totalHarga = cart.products.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  console.log("Total harga semua barang:", totalHarga);
}

loadCart().then(() => showCart());

// 7. Validasi Input Menggunakan Try/Catch
async function saveName(name) {
  try {
    if (name.length < 3) {
      throw new Error("Nama terlalu pendek");
    }

    const userData = {
      name: name,
      timestamp: new Date().toLocaleString() 
    };

    localStorage.setItem("username", JSON.stringify(userData));
    console.log("Nama disimpan:", userData);

  } catch(error) {
    console.log(error.message);

    localStorage.setItem("error_name", error.message);
    console.log("Error disimpan ke localStorage:", error.message);
  }
}

saveName("Diandra");   
saveName("Di");        

// 8. Filter Data Hasil Fetch
async function getExpensive() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const { products } = await res.json();

    const expensive = products.filter(p => p.price > 300);

    const sorted = expensive.sort((a, b) => b.price - a.price);

    console.log("Produk mahal (harga > 300):", sorted);

    localStorage.setItem("expensive_products", JSON.stringify(sorted));
    console.log("Produk mahal berhasil disimpan ke localStorage!");
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
}

getExpensive();

// 🟡 MEDIUM LEVEL
// 9. POST: Mengirim Data ke API
async function createUser() {
  try {
    const res = await fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Santri",
        age: 20,
        skills: ["HTML", "CSS", "JavaScript"] 
      })
    });

    const response = await res.json();

    console.log("Respons API:", response);

    localStorage.setItem("new_user", JSON.stringify(response));
    console.log("Data user baru berhasil disimpan ke localStorage!");
  } catch(error) {
    console.log("Gagal:", error);
  }
}

createUser();

// 10. PUT: Update Data
async function updateUser(name) {
  try {
    if (!name || name.trim() === "") {
      throw new Error("Nama tidak boleh kosong");
    }

    const res = await fetch("https://dummyjson.com/users/1", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name })
    });

    const data = await res.json();

    console.log("Data hasil update:", data);

    localStorage.setItem("updated_user", JSON.stringify(data));
    console.log("Data berhasil disimpan ke localStorage!");
  } catch (error) {
    console.error("Terjadi error:", error.message);
    localStorage.setItem("update_error", error.message);
  }
}

updateUser("Nama Baru");  
updateUser("");  

// 11. DELETE: Menghapus Data
async function deleteUser() {
  try {
    const res = await fetch("https://dummyjson.com/users/1", { method: "DELETE" });

    if (!res.ok) {
      throw new Error("Gagal menghapus user");
    }

    const data = await res.json();

    console.log("Respons API:", data);

    alert("User terhapus");

    localStorage.setItem("delete_log", JSON.stringify({
      message: "User terhapus",
      response: data,
      timestamp: new Date().toLocaleString()
    }));

    console.log("Log penghapusan disimpan ke localStorage!");
  } catch (error) {
    console.error("Terjadi error:", error.message);

    localStorage.setItem("delete_log", JSON.stringify({
      message: "Error saat menghapus user",
      error: error.message,
      timestamp: new Date().toLocaleString()
    }));
  }
}

deleteUser();

// 12. Fetch → Transform → Simpan
async function transformProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const { products } = await res.json();

    const highRated = products.filter(p => p.rating > 4.5);

    const names = highRated.map(p => p.title.toUpperCase());

    localStorage.setItem("high_rating_products", JSON.stringify(names));

    console.log("Produk dengan rating > 4.5:", names);
    console.log("Data berhasil disimpan ke localStorage!");
  } catch (error) {
    console.error("Gagal mengambil data:", error);
  }
}

transformProducts();


// 13. Gabungan map + filter + reduce
async function analyzeProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    let { products } = await res.json();
    const totalExpensive = products
      .filter(p => p.price > 100)   
      .map(p => p.price)           
      .reduce((a, b) => a + b, 0); 

    console.log("Total harga produk > 100:", totalExpensive);

    localStorage.setItem("total_expensive", totalExpensive);
    console.log("Total harga disimpan ke localStorage!");
  } catch (error) {
    console.error("Terjadi error:", error.message);
  }
}

analyzeProducts();


// 14. Parallel Request (Promise.all)
async function loadDashboard() {
  try {
    const [users, products] = await Promise.all([
      fetch("https://dummyjson.com/users").then(r => r.json()),
      fetch("https://dummyjson.com/products").then(r => r.json())
    ]);

    const dashboard = {
      users,
      products,
      timestamp: new Date().toLocaleString()
    };

    console.log("Dashboard:", dashboard);

    localStorage.setItem("dashboard", JSON.stringify(dashboard));
    console.log("Dashboard berhasil disimpan ke localStorage!");
  } catch (error) {
    console.error("Gagal memuat dashboard:", error.message);
  }
}

loadDashboard();

// 15. Fallback ke localStorage Saat Fetch Gagal
async function loadSettings() {
  try {
    const res = await fetch("/api/settings");
    if (!res.ok) throw new Error("API gagal");
    const settings = await res.json();

    localStorage.setItem("settings", JSON.stringify(settings));
    console.log("Settings dari API:", settings);

    return settings;
  } catch (error) {
    console.warn("Fetch gagal, coba ambil dari localStorage...");

    const localData = localStorage.getItem("settings");
    if (localData) {
      const parsed = JSON.parse(localData);
      console.log("Settings dari localStorage:", parsed);
      return parsed;
    }

    const defaultSettings = {
      theme: "light",
      language: "id",
      notifications: true
    };

    console.log("Menggunakan default settings:", defaultSettings);

    localStorage.setItem("settings", JSON.stringify(defaultSettings));

    return defaultSettings;
  }
}

loadSettings().then(settings => {
  console.log("Settings aktif:", settings);
});

// 16. Modular: File api.js + app.js





