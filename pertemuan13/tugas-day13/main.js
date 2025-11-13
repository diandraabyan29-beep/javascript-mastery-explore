//1. =============================================
import hitungTotal from "./utils1/kasir.js";

const databelanja = [1500,20500,35000,4500,7500]
const total = hitungTotal(databelanja)
console.log(total)

//2. =============================================

import  { ambilNama, asalMahasiswa, jurusanMahsiswa } from "./utils1/mahasiswa.js";

const mahasiswa = {
    nama: "Ahmad",
    asal: "Banjarnegara",
    jurusan: "Al-Quran",
    ipk: 3.5
}

console.log("Nama Mahasiswa:",ambilNama(mahasiswa));
console.log("Asal Mahasiswa:",asalMahasiswa(mahasiswa));
console.log("Jurusan Mahasiswa:",jurusanMahsiswa(mahasiswa))

//3. =============================================

import hitungTotalPoint, { point_Maksimal, point_bonus } from "./utils1/game.js";

const dataPoint = [100,250,125,55,300]

const total1 = hitungTotalPoint(dataPoint)
console.log("Total Point:",total1)
console.log("Poin Maksimal:",point_Maksimal)
console.log("Point Bonus:",point_bonus)

//4. ===============================================

import { prosesKontak } from "./utils1/whatsapp.js";

const namaLengkap = "Bambang"
const nomerTelepon = "0823467183"

const hasil = prosesKontak(namaLengkap,nomerTelepon)
console.log("Hasil Pisah",hasil.hasilPisah);
console.log("Hasil Gabung",hasil.hasilGabung);

//5. ==============================================

// main.js
import bukuKeren, { judul, penulis } from "./utils1/buku.js";

const tentangBuku = [
    {
    judul: "Tafsir Jalalain",
    penulis: "Jalaludin Al Mahali dan Jalalidin As Syuti",
  }
];

console.log(bukuKeren.hitungHalaman(250, 50)); // 5
console.log("Judul Buku:", judul(tentangBuku)); // "Tafsir Jalalain"
console.log("Penulis Buku:", penulis(tentangBuku)); // "Jalaludin Al Mahali dan Jalalidin As Syuti"




