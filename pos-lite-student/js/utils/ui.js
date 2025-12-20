import * as utils from './index.js';
import * as db from './../db/index.js';

// Render satu kartu produk
export const renderSingleKartu = (products = {}) => {
  return utils.buatElemen('div',{ className: 'kartu-produk',style: 'border:1px solid black; padding:20px; max-width:300px; border-radius:8px;'
 },

    // Badge Kategori
    utils.buatElemen('span', { style: 'background:#eee; padding:4px 8px; border-radius:4px; font-size:12px;' },products.kategori),

    // Nama + Badge Minuman
    utils.buatElemen('h2',{ style: 'color:brown; margin-top:0;' },products.nama,products.kategori === 'Minuman'? utils.buatElemen('span', { style: 'font-size:14px; margin-left:6px;' }, '🥤 SEGAR'): null),

    // Harga (warna dinamis)
    utils.buatElemen('h3',{ style: `color:${products.harga > 20000 ? 'red' : 'green'}` },utils.ubahMataUang(products.harga)),

    // Stok
    utils.buatElemen('h4',{ style: `color:${products.stok > 0 ? 'blue' : 'gray'}` },products.stok > 0 ? `Stok ${products.stok}` : 'Stok habis'),

    // Tombol beli
    utils.buatElemen('button',{
        className: 'tombol-beli',
        style: 'background:blue; color:white; border:none; padding:10px 20px; cursor:pointer; border-radius:4px; width:100%;',
        onClick: () =>
          products.stok > 0
            ? alert(`Kamu membeli ${products.nama} seharga ${utils.ubahMataUang(products.harga)}`)
            : alert('Maaf, stok habis')
      },
      products.stok > 0 ? 'Beli' : 'Habis'
    )
  );
};

// Render banyak kartu
export const renderBanyakKartu = (elemen, products) => products.forEach(p => elemen.appendChild(renderSingleKartu(p)));
