// 🟢 EASY LEVEL
// 1. Loading Profil User (Fake Delay)

function loadUserProfile(userName){
    console.log("Status: PENDING... mengambil data user");

    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            if(!userName){
                reject("Username tidak boleh kosong!")
            }else{
                resolve({
                    userName,
                    nama: "Bagas",
                    level: "admin"
                })
            }
        },2000)
    })
    
}

console.log("Memulai proses load profi user");

loadUserProfile("bagas")
 .then((user)=> {
    console.log("Satus: Succes");
    console.log(`Data Use ${user}`);
    
    localStorage.setItem("latUser", JSON.stringify(user))
    console.log("Data user disimpan ke localstroge");
 })

.catch((err) => {
    console.log(" Status: REJECT");
    console.error("Error:", err);
  });

console.log(" Baris ini dijalankan segera setelah pemanggilan Promise (async masih Pending).");

// ========================================================

// 2. Promise Cek Koneksi Internet (Simulasi)
// Study Case Buat Promise yang mensimulasikan cek internet (random berhasil/gagal).

function checkConnection() {
  console.log("Mengecek koneksi... (PENDING)");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isOnline = Math.random() > 0.3; 
      if (isOnline) {
        resolve("Koneksi stabil. ");
      } else {
        reject("Tidak ada koneksi internet. ");
      }
    }, 1000);
  });
}

function getLastConnectionStatus() {
  const status = localStorage.getItem("connection_status");
  if (status) {
    console.log(" Status koneksi terakhir:", status);
    return status;
  } else {
    console.log("Belum ada status koneksi tersimpan.");
    return null;
  }
}


checkConnection()
  .then((message) => {
    console.log("SUCCESS:", message);
    
    localStorage.setItem("connection_status", "online");
    console.log(" Status 'online' disimpan ke localStorage.");
  })
  .catch((error) => {
    console.log("REJECT:", error);

    localStorage.setItem("connection_status", "offline");
    console.log("Status 'offline' disimpan ke localStorage.");
  })
  .finally(() => {
    
    getLastConnectionStatus();
  });

// ==================================================

// 3. Konversi Data ke JSON Setelah Resolve
// Study Case Setelah promise resolve dengan object, convert ke JSON string dalam chaining.

function getSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: "dark",
        language: "id",
        notifications: true
      });
    }, 500);
  });
}

getSettings()
  .then((settings) => {
    console.log("Object settings:", settings);
    return JSON.stringify(settings);
  })
  .then((settingsJSON) => {
    console.log("Settings dalam JSON:", settingsJSON);

    localStorage.setItem("app_settings", settingsJSON);
    console.log("Settings disimpan ke localStorage dengan key 'app_settings'");
  })
  .catch((err) => {
    console.error("Error:", err);
  });

function loadSettingsFromLocal() {
  return new Promise((resolve, reject) => {
    const data = localStorage.getItem("app_settings");
    if (data) {
      resolve(JSON.parse(data));
    } else {
      reject(" Data settings tidak ditemukan di localStorage");
    }
  });
}


loadSettingsFromLocal()
  .then((settings) => {
    console.log("Settings berhasil di-load dari localStorage:", settings);
  })
  .catch((error) => {
    console.error("REJECT:", error);
  });

// ===================================================

// 4. Promise Sederhana Menggunakan Promise.resolve dan Promise.reject
// Study Case

function simulateLogin(isSuccess) {
  if (isSuccess) {
    return Promise.resolve({ status: "ok", token: "ABC123" });
  } else {
    return Promise.reject("Login gagal!");
  }
}

simulateLogin(true) 
  .then((result) => {
    console.log("SUCCESS:", result);

    localStorage.setItem("auth_token", result.token);
    console.log("Token disimpan ke localStorage dengan key 'auth_token'");
  })
  .catch((error) => {
    console.error("REJECT:", error);
  });
// ==================================================

// 5. Membungkus setTimeout Jadi Promise (Delay Message)
// Study Case

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Delay ${ms} ms selesai`);
    }, ms);
  });
}

const steps = [];

delay(1000)
  .then(() => {
    console.log("Step 1 selesai");
    steps.push("Step 1 selesai");
    return delay(2000);
  })
  .then(() => {
    console.log("Step 2 selesai");
    steps.push("Step 2 selesai");
    return delay(500);
  })
  .then(() => {
    console.log("Step 3 selesai");
    steps.push("Step 3 selesai");

    localStorage.setItem("steps", JSON.stringify(steps));
    console.log("Steps disimpan ke localStorage:", steps);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

//   ===========================================

// 6. Load Data Produk & Hitung Total Harga (Tanpa Server Nyata)
function loadCart() {
  return new Promise((resolve) => {
    const cart = [
      { name: "Keyboard", price: 150000 },
      { name: "Mouse", price: 50000 },
    ];
    setTimeout(() => resolve(cart), 800);
  });
}

loadCart()
  .then((cart) => {
    console.log("Cart:", cart);

    localStorage.setItem("cart_data", JSON.stringify(cart));
    console.log("Cart disimpan ke localStorage dengan key 'cart_data'");

    let total = 0;
    cart.forEach((item) => (total += item.price));
    return total;
  })
  .then((total) => {
    console.log("Total harga:", total);
  });

function loadCartFromLocal() {
  return new Promise((resolve, reject) => {
    const data = localStorage.getItem("cart_data");
    if (data) {
      const cart = JSON.parse(data);
      let total = 0;
      cart.forEach((item) => (total += item.price));
      resolve({ cart, total });
    } else {
      reject("Cart tidak ditemukan di localStorage");
    }
  });
}

loadCartFromLocal()
  .then(({ cart, total }) => {
    console.log("Cart dari localStorage:", cart);
    console.log("Total harga ulang:", total);
  })
  .catch((err) => console.error("REJECT:", err));
// ====================================================

// 7. Validasi Input Dengan Reject

function saveUsername(username) {
  return new Promise((resolve, reject) => {
    if (!username || username.length < 3) {
      reject("Username minimal 3 karakter!");
    } else {
      localStorage.setItem("username", username);
      resolve(`Username "${username}" berhasil disimpan.`);
    }
  });
}

function loadUserProfile(username) {
  console.log("Status: PENDING... mengambil data user...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!username) {
        reject("Username tidak boleh kosong!");
      } else {
        resolve({
          username,
          name: "Santri Programmer",
          level: "Beginner"
        });
      }
    }, 2000);
  });
}

saveUsername("Abyan") 
  .then((msg) => {
    console.log("SUCCESS:", msg);

    const username = localStorage.getItem("username");

    return loadUserProfile(username);
  })
  .then((user) => {
    console.log("Profil user berhasil di-load:", user);
  })
  .catch((err) => {
    console.error(" REJECT:", err);

    localStorage.setItem("last_error", err);
    console.log("Pesan error disimpan ke localStorage dengan key 'last_error'");
  });
// ================================================

// 8. Menyimpan History Aktivitas ke localStorage
function logActivity(activity) {
  return new Promise((resolve, reject) => {
    
    if (!activity) {
      reject("Gagal menyimpan aktivitas");
      return;
    }

    const now = new Date().toISOString();
    const logItem = { activity, time: now };

    try {
      const existing = JSON.parse(localStorage.getItem("activity_logs") || "[]");
      existing.push(logItem);
      localStorage.setItem("activity_logs", JSON.stringify(existing));

      resolve(logItem);
    } catch (err) {
      reject("Gagal menyimpan aktivitas");
    }
  });
}

logActivity("User membuka dashboard")
  .then((logItem) => {
    console.log("Aktivitas tercatat:", logItem);

    const allLogs = JSON.parse(localStorage.getItem("activity_logs") || "[]");
    return allLogs;
  })
  .then((logs) => {
    console.log("Semua aktivitas yang tercatat:");
    logs.forEach((log, index) => {
      console.log(`${index + 1}. ${log.activity} @ ${log.time}`);
    });
  })
  .catch((err) => {
    console.error("REJECT:", err);

    localStorage.setItem("last_error", err);
    console.log("Pesan error disimpan ke localStorage dengan key 'last_error'");
  });

