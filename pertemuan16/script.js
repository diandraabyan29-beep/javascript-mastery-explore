
// 🟢 Easy (1–7)

// 1. Anda membuat Promise untuk memeriksa apakah koneksi internet tersedia. Apa status awal Promise sebelum hasil diketahui?
const koneksi = new Promise(function(resolve, reject){
    let tersedia = true;

    if(tersedia){
        resolve("Jaringan Tersambung")
    }else{
        reject("Jaringan Tidak Tersedia")
    }
})

console.log(koneksi);

// 2. Sebuah Promise yang memeriksa stok barang di database berhasil menemukan barang. Apa status Promise setelah berhasil?
const barang = new Promise(function(resolve, reject){
    let namaBarang = true;

    if(namaBarang){
        resolve("Barang tersedia")
    }else{
        reject("Barang tidak ditemukan")
    }
})
console.log(barang);

// 3. Jika Promise gagal karena server tidak merespons, status apa yang terjadi?
const janji = new Promise(function(resolve, reject){
    // logika asynchronos
    let sukses = false;
    if(sukses){
        resolve("Data behasil")
    }else{
        reject("Gagal mengambil data")
    }
})

console.log(janji)

// 4. Buat contoh Promise sederhana yang menunggu 2 detik lalu mengembalikan "Data berhasil diambil". Apa status sebelum dan sesudah 2 detik?
const janji1 = new Promise(function(resolve, reject){
    let jika = true;
    setTimeout(()=>{
        if (jika){
            resolve("Data berhasil diambil")
        }else{
            reject("Data Gagal diambil")
        }
    },2000)

})
console.log(janji1);


// 5. Jika Promise.resolve("OK") dipanggil, status langsung berubah menjadi apa?
const p = Promise.resolve("OK")

p.then((hasil)=> {
    console.log(`Status: Fulfilled ${hasil}`);
    
})


const y = Promise.resolve("AMAN")

y.then((jadinya)=>{
    console.log(`Status: Fulfilled ${jadinya}`);
    
})

const a = Promise.resolve("BAGUS")

a.then((untuk)=>{
    console.log(`Status: Failled ${untuk}`);
    
})


// 6. Jika Promise.reject("Error") dipanggil, status langsung berubah menjadi apa?
const r = Promise.reject("Eror")

r.then((bukti)=>{
    console.log(`Status: Fulfilled ${bukti}`);
    
})

.catch((eror)=>{
    console.log(`Status: Reject ${eror}`);
    
})

const janji2 = new Promise(function(resolve,reject){
    let maka = true

    setTimeout(()=>{
        if(maka){
            resolve(`RESOLVE: BERHASIL`)
        }else{
            reject(`REJECT:GAGAL`)
        }
    },2000)
})

.then((hasilJanji)=>{
    console.log(`INI DI THEN 1 ${hasilJanji}`);11
    
})

.catch((alasanDitolak)=>{
    console.log(`tidak di terima ${alasanDitolak}`);
    
})

console.log(janji2);

// 7. Dalam kasus Promise untuk cek login, apa status jika user belum memasukkan password?
const cekLogin = new Promise(function(resolve,reject){
    let password = ""

    if(password === ""){
        console.log("Status menungu pasword...");
        
    }else if (password === "12345"){
        resolve("Login berhasil")
    }else{
        reject("Login Gagal")
    }
})

cekLogin
.then((hasil)=> console.log(`status: Failled ${hasil}`))
.catch((eror)=> console.log(`status: Failled ${eror}`))

// =========================================================
// 🟡 Medium (8–14)

// 8. Anda membuat Promise untuk membaca file. File ditemukan dan dibaca dengan sukses. Apa status akhir Promise?
const bacaFile = new Promise(function(resolve,reject){
    let fileAnda = true;

    if(fileAnda){
        resolve("File Berahasi Dibaca")
    }else{
        reject("File Tidak DItemukan")
    }
})

bacaFile
.then((hasil)=> console.log(`status: Failled ${hasil}`))
.catch((eror)=> console.log(`status: Failled ${eror}`))


// 9. Jika file tidak ditemukan, bagaimana status Promise dan bagaimana cara menanganinya?



// 10. Buat Promise yang menunggu input user. Apa status Promise sebelum user menekan tombol?
// Promise menunggu input user
const tungguInput = new Promise((resolve, reject) => {
  const tombol = document.getElementById("btnLogin");

  tombol.addEventListener("click", () => {
    let password = document.getElementById("password").value;

    if (password) {
      resolve("Input diterima ");
    } else {
      reject("Password belum diisi ");
    }
  });
});

console.log("Status awal: Pending ⏳");

tungguInput
  .then((hasil) => console.log("Status: Fulfilled →", hasil))
  .catch((error) => console.log("Status: Rejected →", error));


// 11. Dalam Promise.all([p1, p2, p3]), jika semua berhasil, apa status keseluruhan?
const p1 = Promise.resolve("Data 1");
const p2 = Promise.resolve("Data 2");
const p3 = Promise.resolve("Data 3");

Promise.all([p1, p2, p3])
  .then((hasil) => {
    console.log("Status: Fulfilled →", hasil);
  })
  .catch((error) => {
    console.log("Status: Rejected →", error);
  });


// 12. Dalam Promise.all([p1, p2, p3]), jika salah satu gagal, apa status keseluruhan?
const k1 = Promise.resolve("Data 1");
const k2 = Promise.reject("Error di Data 2");
const k3 = Promise.resolve("Data 3");

Promise.all([p1, p2, p3])
  .then((hasil) => {
    console.log("Status: Fulfilled →", hasil);
  })
  .catch((error) => {
    console.log("Status: Rejected →", error);
  });


// 13. Jika Anda menggunakan Promise.race([p1, p2]) dan p1 selesai lebih cepat, apa status akhir?
const t1 = new Promise((resolve) => {
  setTimeout(() => resolve("p1 selesai duluan "), 100);
});

const t2 = new Promise((resolve) => {
  setTimeout(() => resolve("p2 selesai belakangan"), 500);
});

Promise.race([p1, p2])
  .then((hasil) => console.log("Status: Fulfilled →", hasil))
  .catch((error) => console.log("Status: Rejected →", error));


// 14. Buat studi kasus: Promise untuk cek saldo rekening. Jika saldo cukup → Fulfilled, jika tidak → Rejected. Apa status awal sebelum pengecekan?
const cekSaldo = new Promise((resolve, reject) => {
  let saldo = 100000; // simulasi saldo rekening

  if (saldo >= 100000) {
    resolve("Transaksi berhasil , saldo cukup");
  } else {
    reject("Transaksi gagal , saldo tidak cukup");
  }
});

console.log("Status awal: Pending ⏳");

cekSaldo
  .then((pesan) => console.log("Status: Fulfilled →", pesan))
  .catch((error) => console.log("Status: Rejected →", error));

//   ==========================================================
// 🔴 Hard (15–20)

// 15. Anda membuat Promise untuk API cuaca. API lambat, sehingga Promise tetap dalam status apa selama menunggu?
const apiCuaca = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sukses = true; 
    if (sukses) {
      resolve("Data cuaca berhasil diterima ");
    } else {
      reject("Gagal mengambil data cuaca");
    }
  }, 2500);
});

console.log("Status awal: Pending");

apiCuaca
  .then((hasil) => console.log("Status: Fulfilled →", hasil))
  .catch((error) => console.log("Status: Rejected →", error));

const keadaaCuaca = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const berahsil = false; 
        if(berahsil){
            resolve("Gagal mengambil data cuaca")
        }else{
            reject("Data cuaca berhasil diterima ")
        }
    },2500)
})

console.log("Status awal: Pending");

// 16. Jika API cuaca akhirnya mengembalikan data, status berubah menjadi apa?
const apiCuaca1 = new Promise((resolve, reject) => {
  // simulasi API lambat
  setTimeout(() => {
    const sukses = true; // ubah ke false untuk simulasi error
    if (sukses) {
      resolve("Data cuaca berhasil diterima ");
    } else {
      reject("Gagal mengambil data cuaca ");
    }
  }, 3000); // delay 3 detik
});

console.log("Status awal: Pending ");

apiCuaca
  .then((hasil) => console.log("Status: Fulfilled →", hasil))
  .catch((error) => console.log("Status: Rejected →", error));



// 17. Jika API cuaca gagal karena timeout, status berubah menjadi apa?
const apiCuaca2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Gagal mengambil data cuaca  (timeout)");
  }, 4000);
});

apiCuaca
  .then((hasil) => console.log("Status: Fulfilled →", hasil))
  .catch((error) => console.log("Status: Rejected →", error));


// 18. Dalam Promise.any([p1, p2, p3]), jika salah satu berhasil, apa status keseluruhan?
const n1 = Promise.reject("Error dari p1");
const n2 = Promise.resolve("Data dari p2 ");
const n3 = Promise.reject("Error dari p3");

Promise.any([n1, n2, n3])
  .then((hasil) => console.log("Status: Fulfilled →", hasil))
  .catch((error) => console.log("Status: Rejected →", error));


// 19. Dalam Promise.any([p1, p2, p3]), jika semua gagal, apa status keseluruhan?

const a1 = Promise.reject("Error dari p1");
const a2 = Promise.reject("Error dari p2");
const a3 = Promise.reject("Error dari p3");

Promise.any([a1, a2, a3])
  .then((hasil) => console.log("Status: Fulfilled →", hasil))
  .catch((error) => {
    console.log("Status: Rejected →", error.errors); // AggregateError
  });

// 20. Studi kasus kompleks: Anda membuat Promise untuk proses checkout e-commerce.

// Pending: menunggu konfirmasi pembayaran.

// Fulfilled: pembayaran berhasil diverifikasi.

// Rejected: pembayaran ditolak oleh bank. Jelaskan bagaimana status berubah dalam alur ini.

const checkout = new Promise((resolve, reject) => {
  console.log("Status awal: Pending (menunggu konfirmasi pembayaran)");

  setTimeout(() => {
    const pembayaranBerhasil = true; // ubah ke false untuk simulasi gagal

    if (pembayaranBerhasil) {
      resolve("Pembayaran berhasil diverifikasi");
    } else {
      reject("Pembayaran ditolak oleh bank");
    }
  }, 3000);
});

checkout
  .then((hasil) => console.log("Status: Fulfilled →", hasil))
  .catch((error) => console.log("Status: Rejected →", error));

