// ===============================================
// Modul: Import & Export JavaScript
// ===============================================
//
// Tujuan:
// - Memahami cara mengambil dan menggunakan fungsi/variabel dari file lain
// - Mengenal perbedaan named export, default export, dan import *

// ===============================================
// Import dari berbagai file
// ===============================================

// Named import: ambil item tertentu dari file
import { add as tambah, text as kata } from "./modules/script1.js";

// Default + Named import: ambil ekspor utama dan tambahan
import textScript2, { multyplay as kali } from "./modules/script2.js";

// Named import tunggal
import { min as kurang } from "./modules/script3.js";

// Import semua isi file sebagai objek
import * as script4 from "./modules/script4.js";

// ===============================================
// Ambil elemen HTML tempat menampilkan hasil
// ===============================================
const tagDiv1 = document.getElementById('tagDiv1');

// ===============================================
// Tes hasil import di console
// ===============================================
console.log(kata);
console.log(textScript2());
console.log(script4.b);

// ===============================================
// Fungsi utama untuk menampilkan hasil operasi
// ===============================================
function mengisiTag(a, b) {
    let isi = '';

    let resultAdd = tambah(a, b);       // hasil dari script1
    let resultmultiply = kali(a, b);    // hasil dari script2
    let resultMin = kurang(a, b);       // hasil dari script3

    isi += `<h3>hasil: ${a} + ${b} = ${resultAdd}</h3>`;
    isi += `<h3>hasil: ${a} x ${b} = ${resultmultiply}</h3>`;
    isi += `<h3>hasil: ${a} - ${b} = ${resultMin}</h3>`;
    isi += `<h3>====================</h3>`;

    return isi;
}

// ===============================================
// Tampilkan hasil ke halaman
// ===============================================
tagDiv1.innerHTML += mengisiTag(100, 900);
tagDiv1.innerHTML += mengisiTag(100, 800);
tagDiv1.innerHTML += mengisiTag(100, 700);
tagDiv1.innerHTML += mengisiTag(100, 600);
tagDiv1.innerHTML += mengisiTag(100, 500);

// ===============================================
// Kesimpulan:
// - export → membagikan fungsi/variabel ke file lain
// - import → mengambil fungsi/variabel dari file lain
// - default export → satu per file, tanpa {}
// - named export → bisa banyak, pakai {}
// - import * as → ambil semua isi file sebagai objek
// ===============================================
