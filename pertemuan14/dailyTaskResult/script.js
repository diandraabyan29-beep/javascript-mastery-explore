// Latihan Mandiri
// Buat objek JavaScript berisi data diri (nama, umur, alamat), lalu ubah ke format JSON.
//  Simpan data JSON tersebut di `localStorage` dan tampilkan kembali menggunakan `JSON.parse()`.
// Ambil satu contoh API publik (misal: https://jsonplaceholder.typicode.com/users, dan coba tampilkan datanya di console.


let dataDiri = {
    nama: "Ahmad Jalaludin",
    umur: 19,
    alamat: "Tarim"
}

let dataJSON = JSON.stringify(dataDiri)

localStorage.getItem("dataDiri",dataJSON)

let ambilData = localStorage.getItem("dataDiri")

let hasilParse = JSON.parse(ambilData)

console.log(hasilParse);

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())     // ubah JSON string menjadi object
//     .then(data => {
//         console.log(data);                 // tampilkan datanya
//     })
//     .catch(error => {
//         console.error("Terjadi kesalahan:", error);
//     });



// ========================================================

// Evaluasi Harian (Studi Kasus)
// Studi Kasus:
// Buat halaman HTML sederhana yang menampilkan data produk. Datanya disimpan di dalam `localStorage` dalam format JSON. Ketika halaman dimuat, data dibaca dan ditampilkan sebagai list.

let namaBarang = [
    {id: 1, nama: "Laptop", harga: 9350000},
    {id: 2, nama: "Hp", harga: 3300000},
    {id: 3, nama: "Headseat", harga: 64000}
];

if (!localStorage.getItem("produk")) {
    localStorage.setItem("produk", JSON.stringify(namaBarang));
}

let ambilData1 = JSON.parse(localStorage.getItem("produk"));

let list = document.getElementById("listProduk");

ambilData1.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.nama} - Rp${item.harga}`;
    list.appendChild(li);
});


// ========================================================

let namaSekolah = [
    {id: 1, nama: "SMA 1",spp: 250000},
    {id: 2, nama: "MAN 2",spp: 350000},
    {id: 3, nama: "SMK MUHI 1", spp: 500000}
]

if(!localStorage.getItem("sekolah")){
    localStorage.setItem("sekolah", JSON.stringify(namaSekolah))
}

let ambilData2 = JSON.parse(localStorage.getItem("sekolah"))

let list2 = document.getElementById("listSekolah")

ambilData2.forEach(sekolah => {
    let li1 = document.createElement("li")
    li1.textContent = `${sekolah.nama} - Rp${sekolah.spp}`
    list2.appendChild(li1)
})