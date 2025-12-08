// Latihan Mandiri
// 1. Buat Promise untuk mensimulasikan login user, dan resolve jika username benar.

function loginUser(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "diandra") {
        resolve({ username, role: "student" });
      } else {
        reject("Login gagal! Username tidak dikenali.");
      }
    }, 1000);
  });
}

// 2. Buat dua proses chaining: Ambil data user, lalu tampilkan pesan sambutan.

loginUser("diandra")
  .then((user) => {
    console.log("Login berhasil:", user);
    // Simulasi ambil data user
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ ...user, name: "Diandra Abyan Zahran" });
      }, 1000);
    });
  })
  .then((userData) => {
    console.log("Data user:", userData);
    console.log(`Selamat datang, ${userData.name}!`);
  })
  .catch((error) => {

// 3. Buat Promise yang gagal (reject) dan tangani dengan `catch()`.
    console.error("Error:", error);
  });



// Evaluasi Harian (Studi Kasus)
// Studi Kasus:
// 1. Simulasikan proses checkout belanja online:
// 2. Ambil data produk (1 detik)
// 3. Hitung total harga (1 detik)
// Tampilkan hasilnya
// Gunakan Promise dan chaining untuk menyelesaikan kasus di atas.

// 1. Simulasi ambil data produk (1 detik)
function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = [
        { name: "Keyboard", price: 150000 },
        { name: "Mouse", price: 50000 },
        { name: "Headset", price: 200000 }
      ];
      console.log("Data produk berhasil diambil:", products);
      resolve(products);
    }, 1000);
  });
}

// 2. Hitung total harga (1 detik)
function calculateTotal(products) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = products.reduce((sum, item) => sum + item.price, 0);
      console.log("Total harga berhasil dihitung:", total);
      resolve(total);
    }, 1000);
  });
}

// 3. Proses checkout dengan chaining
console.log("Memulai proses checkout...");

getProducts()
  .then((products) => {
    // setelah ambil data produk, lanjut hitung total
    return calculateTotal(products);
  })
  .then((total) => {
    // tampilkan hasil akhir
    console.log("Checkout selesai. Total yang harus dibayar:", total);
  })
  .catch((err) => {
    console.error("Terjadi error:", err);
  })
  .finally(() => {
    console.log("Proses checkout berakhir.");
  });
// ==================================================
