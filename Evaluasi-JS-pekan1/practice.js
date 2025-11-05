// Practice
// Tugas 2: => "Terkadang paham ajh belom mencukupi, jadi coba dari apa yang kamu pahami sejauh ini tolong berikan contoh contoh implementasinya semua itu dengan code code yang bisa anda tuliskan tanpa ada yang tertinggal sedikitpun skill yang sudah anda kuasai sejauh ini"

// 📌 Code/Fitur/Fungsi/Program/Sistem yang persis mirip semisal sudah pernah di gunakan dalam sesi kelas tidak di anggap sebagai orisinil maka nilai akan mempengaruhi

// Contoh Implementasi JavaScript Dasar

// 1. Variabel dan Tipe Data
let nama = "Andi";
let umur = 25;
let pernahBelajar = true;

// 2. Fungsi
function sapaPengguna(nama) {
    return `Halo, ${nama}! Selamat datang di dunia JavaScript.`;
}
console.log(sapaPengguna(nama));

// 3. Struktur Kontrol
function kelas() {
    let kelas = prompt("Masukkan Kelas Anda:");

    if (kelas >= 1 && kelas <= 6) {
        console.log("Kelas SD");
    }else if (kelas >= 7 && kelas <= 9) {
        console.log("Kelas SMP");
    }if (kelas >= 10 && kelas <= 12) {
        console.log("Kelas SMA");
    } 

}

// 4. Perulangan
function hitungMundur() {
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}

// 5. var, let, const
function contohVarLetConst() {
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(x, y, z);
}

// 6. FORM F1
document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("1");

    const laptop = document.getElementById("laptop").value.trim();
    const harga = document.getElementById("harga").value.trim();

    if (!laptop || !harga) {
        alert("Laptop dan harga wajib diisi.");
        return;
    }
});

function f1(laptop, harga) {
    const output = document.getElementById("outputBox");
    output.innerText += `F1: Laptop ${laptop} harganya ${harga}\n`;
}


// 7. FORM F2
document.getElementById("F2").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("2");

    const sepatu = document.getElementById("nama").value.trim();
    const botol = document.getElementById("alamat").value.trim();

    if (!sepatu || !botol) {
        alert("Sepatu dan botol wajib diisi.");
        return;
    }

});

function f2(sepatu, botol) {
    const output = document.getElementById("outputBox");
    output.innerText += `F2: Sepatu ${sepatu} botolnya ${botol}\n`;
}

