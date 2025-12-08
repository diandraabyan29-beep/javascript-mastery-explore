// ====================================================
// SIMPLE STUDY CASE MANIPULATION ARRAY + OBJECT
// ====================================================

const inputNamaKasir = document.getElementById('namaKasir');
const helloKasir = document.getElementById('pesanKasir');
const tagDaftarProduk = document.getElementById('daftarProduk');
const inputProductId = document.getElementById('productId');
const inputProductName = document.getElementById('productName');
const inputProductHarga = document.getElementById('productPrice');
const ringkasanKeranjang = document.getElementById('ringkasanKeranjang');
const totalBelanjaElemen = document.getElementById('totalBelanja');

const daftarProduk = [
    { id: "001", nama: "Beras 1kg", harga: 15000 },
    { id: "002", nama: "Teh", harga: 8000 },
    { id: "003", nama: "Gula", harga: 5000 },
];

let keranjang = [];

function formatRupiah(angka) {
    return angka.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR"
    });
}

function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

const kasir = { nama: "" };

function simpanKasir() {
    let namaKasir = inputNamaKasir.value.trim();
    if (namaKasir === "") {
        alert("Nama kasir belum diisi.");
        return;
    }
    kasir.nama = namaKasir;
    helloKasir.innerText = "Assalamualaikum 👋 Kak " + kasir.nama + " 😊";
}

function tampilkanProduk() {
    let isi = "";
    for (let i = 0; i < daftarProduk.length; i++) {
        const item = daftarProduk[i];
        isi += `
        <div class="item-produk">
            <button class="button-kontrol" onclick="hapusProduk('${item.id}')">-</button>
            <div>
                <h3>${item.nama}</h3>
                <p>${formatRupiah(item.harga)}</p>
            </div>
            <button class="button-kontrol" onclick="tambahkanKeranjang('${item.id}')">>></button>
        </div>`;
    }
    tagDaftarProduk.innerHTML = isi;
}

function hapusProduk(itemId) {
    const index = daftarProduk.findIndex(a => a.id === itemId);
    if (index !== -1) {
        daftarProduk.splice(index, 1);
        tampilkanProduk();
    }
}

function tambahkanKeranjang(itemId) {
    let itemDitemukan = daftarProduk.find(p => p.id === itemId);
    if (!itemDitemukan) return;

    let ada = keranjang.find(p => p.id === itemId);
    if (ada) {
        ada.jumlah += 1;
    } else {
        keranjang.push({
            id: itemDitemukan.id,
            nama: itemDitemukan.nama,
            harga: itemDitemukan.harga,
            jumlah: 1
        });
    }
    tampilkanKeranjang();
}

function tampilkanKeranjang() {
    if (keranjang.length === 0) {
        ringkasanKeranjang.innerHTML = "<p>Keranjang masih kosong.</p>";
        totalBelanjaElemen.innerText = "Total: Rp 0";
        return;
    }

    let isi = "";
    for (let i = 0; i < keranjang.length; i++) {
        const item = keranjang[i];
        const subtotal = item.harga * item.jumlah;

        isi += `
        <div class="item-keranjang">
            <strong>${item.nama}</strong>
            <p>Harga: ${formatRupiah(item.harga)}</p>
            <p>Jumlah: ${item.jumlah}</p>
            <p>Subtotal: ${formatRupiah(subtotal)}</p>
            <div class="kontrol">
                <button class="button-kontrol" onclick="ubahJumlah('${item.id}', 'tambah')">+</button>
                <button class="button-kontrol" onclick="ubahJumlah('${item.id}', 'kurang')">-</button>
            </div>
        </div>`;
    }

    ringkasanKeranjang.innerHTML = isi;
    totalBelanjaElemen.innerText = "Total: " + formatRupiah(hitungTotal());
}


function ubahJumlah(itemId, aksi) {
    const item = keranjang.find(p => p.id === itemId);
    if (!item) return;

    if (aksi === "tambah") {
        item.jumlah += 1;
    } else if (aksi === "kurang") {
        item.jumlah -= 1;
        if (item.jumlah <= 0) {
            keranjang = keranjang.filter(p => p.id !== itemId);
        }
    }
    tampilkanKeranjang();
}

function hitungTotal() {
    return keranjang.reduce((total, item) => total + (item.harga * item.jumlah), 0);
}

function addProduct() {
    let idItem = inputProductId.value.trim();
    let nameItem = inputProductName.value.trim();
    let priceItem = parseInt(inputProductHarga.value, 10);

    if (!idItem || !nameItem || isNaN(priceItem) || priceItem <= 0) {
        alert("ID, nama, dan harga produk harus diisi dengan benar.");
        return;
    }

    daftarProduk.unshift({ id: idItem, nama: nameItem, harga: priceItem });

    tampilkanProduk();
    togglePopup('1');

    inputProductId.value = "";
    inputProductName.value = "";
    inputProductHarga.value = "";
}

tampilkanProduk();
tampilkanKeranjang();
