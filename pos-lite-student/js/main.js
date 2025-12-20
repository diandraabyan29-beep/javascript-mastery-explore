// 1. Import alat yang sudah kita buat dari 'Lobby' (index.js)
// Perhatikan kita pakai relative path './'
import * as utils from './utils/index.js';
import * as db from './db/index.js';

console.log("Mesin POS Lite dinyalakan..."); // Cek di Console Browser (F12)

let keranjang = [];

// 2. Ambil wadah dari index.html
const wadahAplikasi = document.getElementById('aplikasi');

// Style yang lebih rapi
const styleContainer = 'display: flex; align-items: start; flex-wrap: wrap; gap: 20px; padding:10px';

wadahAplikasi.setAttribute('style',styleContainer)

wadahAplikasi.appendChild(utils.buatElemen('h2',{ style: 'text-align:center; color:blue; width:100%;' },'Katalog Produk'));

let cari = 'susu';

const hasilCari = db.myProduct.filter(item =>item.nama.toLowerCase().includes(cari));

console.log(hasilCari);

utils.renderBanyakKartu(wadahAplikasi, db.myProduct)

console.log(utils.hitungDiskon(10000, 10))

document.body.appendChild(utils.buatElemen('div',{style:'margin-top:40px;text-align:center;width:100%;',onClick: () => alert('Copyright 2024')},'Diandra Abyan Zahran'));
