// 1) Sintaks & Operator

// Tugas: (harga×qty) → kurangi diskon% → tambah pajak% → hasil akhir (dibulatkan wajar). Langkah: kalikan → diskon → pajak → return total.

function hitunganTotal(harga, qty, diskon, pajak) {
  const subtotal = harga * qty;
  const nilaiDiskon = subtotal * (diskon / 100);
  const hargaSetelahDiskon = subtotal - nilaiDiskon;
  const nilaiPajak = hargaSetelahDiskon * (pajak / 100);
  const total = hargaSetelahDiskon + nilaiPajak;

  return Math.round(total);
}

const input = { harga: 10000, qty: 2, diskon: 10, pajak: 10 };
const hasil = hitunganTotal(input.harga, input.qty, input.diskon, input.pajak);

console.log(hasil);


// =======================================================

// 2) If/Else – Grading
// Fungsi

// function gradeIfElse(nilai) {}
// Tugas: kembalikan salah satu dari "A"|"B"|"C"|"D"|"E". Langkah: if/else bertingkat: A≥90, B≥80, C≥70, D≥60, else E.

// Contoh Hasil

// soal_2:

//   input: {nilai: 95} atau  { nilai: 85 } atau { nilai: 75 } atau { nilai: 65 } atau { nilai: 55 } 

//   expected: 
//   "A" untuk nilai 90-100, 
//   "B" untuk nilai 80-89, 
//   "C" untuk nilai 70-79, 
//   "D" untuk nilai 60-69, 
//   "E" untuk nilai 1-59

function gradeIfElse(nilai) {
    if (nilai >= 90 && nilai <= 100) {
        return "A";
    }else if (nilai >= 80 && nilai <= 89){
        return "B";
    }else if (nilai >= 70 && nilai <= 79){
        return "c";
    }else if (nilai >= 60 && nilai <= 69){
        return "D";
    }else if (nilai >= 25 && nilai <= 59){
        return "E";
    }else{
        return "Nilai Tidak Valid";
    }
}

console.table(gradeIfElse(95));
console.table(gradeIfElse(85));
console.table(gradeIfElse(75));
console.table(gradeIfElse(65));
console.table(gradeIfElse(55));
console.table(gradeIfElse(20));


//============================================= 

// 3) Switch – Kategori User
// Fungsi

// function kategoriSwitch(kode) {}
// Tugas: "S"→Santri, "M"→Mentor, "A"→Admin, selain itu "Tamu". Langkah: gunakan switch(kode) dengan default.

// Contoh Hasil

// soal_3:

//   input: { kode: "M" } atau { kode: "A" } atau { kode: "S" } atau { kode: "X" }

//   expected: 
//   "Mentor" untuk kode "M", 
//   "Admin" untuk kode "A", 
//   "Santri" untuk kode "S", 
//   "Tamu" untuk kode selain "M", "A", "S"

function kategoriSwitch(kode) {
    switch (kode) {
        case "S":
            return "Santri"
        case "M":
            return "Mentor"
        case "A":
            return "Admin"
        default:
            return "Tamu"
    }
}

console.log(kategoriSwitch("S"));
console.log(kategoriSwitch("M"));
console.log(kategoriSwitch("A"));
console.log(kategoriSwitch("C"));


// ===============================================

// 4) For – Jumlah Bilangan Genap
// Fungsi

// function jumlahGenap(arr) {}
// Tugas: jumlahkan semua bilangan genap di arr. Langkah: for indeks, cek n % 2 === 0, akumulasikan.

// Contoh Hasil

// soal_4:

//   input: { arr: [1, 2, 3, 4, 6] }

//   expected: 12

function jumlahGenap(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            total += arr[i];
        }
    }
    return total;
}

console.log(jumlahGenap([1, 2, 3, 4, 6]));


// ===============================================

// 5) For – Akumulasi Sampai Batas (tanpa while)
// Fungsi

// function akumulasiSampai(batas) {}
// Tugas: jumlah 1+2+3+… hingga total tidak melebihi batas. Langkah: for () → jika total + i > batas maka break, selain itu tambahkan.

// Contoh Hasil

// soal_5:

//   input: { batas: 1000 }

//   expected: 1000

function akumulasiSampai(batas) {
    let total = 0;
    for (let i = 1; i <= batas; i++) {
        total += i;
        if (total > batas) {
            break;
        }
    }

}

console.log(akumulasiSampai(1000));


// ===============================================

// 6) Fungsi – Deklaratif vs Ekspresi
// Fungsi

// function luasPersegiPanjang(p,l) {}

// const luasPersegi = function(s) {};
// Tugas: kembalikan luas bangun sesuai rumus. Langkah: implement 2 gaya fungsi (deklaratif & ekspresi).

// Contoh Hasil

// soal_6:

//   input: { p: 5, l: 3, s: 4 }

//   expected: { luasPersegiPanjang: 15, luasPersegi: 16 }

function luasPersegiPanjang(p,l) {
    return p * l;
}

const luasPersegi = function(s) {
    return s * s;
}

console.log(luasPersegiPanjang(5,3));
console.log(luasPersegi(4));


// ==================================

// 7) Array Dasar — Immutable
// Fungsi

// function kelolaAntrian(list, aksi) {}
// Tugas: dukung push/pop/shift/unshift/insert/remove tanpa memutasi input. Langkah: salin dengan spread/slice, kembalikan array baru sesuai type.

// Contoh Hasil

// soal_8:

//   cases:

//     - input: { list: ["Ali"], aksi: { type: "push", payload: "Zaid" } }

//       expected: ["Ali", "Zaid"]

//     - input: { list: ["Ali","Zaid"], aksi: { type: "remove", index: 0 } }

//       expected: ["Zaid"]

function kelolaAntrian(list, aksi) {
    const newList = [...list];
    switch (aksi.type) {
        case "push":
            newList.push(aksi.payload);
            return newList
    }    
}

console.log(kelolaAntrian(["Ali"], { type: "push", payload: "Zaid"}));
console.log(kelolaAntrian(["Ali","Zaid"], { type: "remove", index: 0}));

// ==================================

// 9) Map – Kurva Nilai
// Fungsi

// function kurvaNilai(santri, tambah) {}
// Tugas: tambah poin tambah untuk setiap nilai siswa. Langkah: map → buat objek baru {nama, nilaiBaru}.

// Contoh Hasil

// soal_9:

//   input:
//     santri: [ { nama: "Ali", nilai: 70 }, { nama: "Fatimah", nilai: 90 } ]
//     tambah: 5

//   expected:
//     - { nama: "Ali", nilaiBaru: 75 }
//     - { nama: "Fatimah", nilaiBaru: 95 }

function kurvaNilai(santri, tambah) {
  return santri.map(s => ({
    nama: s.nama,
    nilaiBaru: s.nilai + tambah
  }));
}

const santri = [
  { nama: "Ali", nilai: 70 },
  { nama: "Fatimah", nilai: 90 }
];
const tambah = 5;

const hasil1 = kurvaNilai(santri, tambah);
console.log(hasil1);

// ==================================

// 10) Filter + Find
// Fungsi

// function seleksiDanCari(arr, batas, namaDicari) {}
// Tugas: pilih yang nilai ≥ batas, dan cari item bernama namaDicari. Langkah: filter untuk lulus, find untuk temuan (atau null jika tidak ada).

// Contoh Hasil

// soal_10:

//   input:
//     arr: [ { nama: "Ali", nilai: 80 }, { nama: "Zaid", nilai: 60 } ]
//     batas: 70
//     namaDicari: "Ali"

//   expected:
//     lulus: [ { nama: "Ali", nilai: 80 } ]
//     temuan: { nama: "Ali", nilai: 80 }

function seleksiDanCari(arr, batas, namaDicari) {
  const lulus = arr.filter(item => item.nilai >= batas);
  const temuan = arr.find(item => item.nama === namaDicari) || null;

  return { lulus, temuan };
}

const data = [
  { nama: "Ali", nilai: 80 },
  { nama: "Zaid", nilai: 60 }
];

const hasil2 = seleksiDanCari(data, 70, "Ali");

console.log(hasil2);


// ==================================

// 11) Reduce + Rest
// Fungsi

// function analitikNilai(...nilai) {}
// Tugas: kembalikan { total, rata } dari argumen angka tak terbatas. Langkah: jumlah dengan reduce, bagi panjang (0 jika kosong).

// Contoh Hasil

// soal_11:

//   input: { nilai: [80, 90, 70, 100] }

//   expected: { total: 340, rata: 85 }

function analitikNilai(...nilai) {
  const total = nilai.reduce((acc, curr) => acc + curr,
   0);
   const rata = nilai.length === 0 ? 0 : total / nilai.length;
  return { total, rata };
} 

console.log(analitikNilai(80, 90, 70, 100));


// ==================================

// 12) Object – Akses Dinamis (Immutable)
// Fungsi

// function setGetDynamic(obj, key, value) {}
// Tugas: set obj[key]=value pada objek baru dan kembalikan nilainya. Langkah: objBaru = { ...obj, [key]: value } → return { value: objBaru[key], obj: objBaru }.

// Contoh Hasil

// soal_12:

//   input: { obj: { nama: "Ali" }, key: "kelas", value: "A" }

//   expected:
//     value: "A"
//     obj: { nama: "Ali", kelas: "A" }

function setGetDynamic(obj, key, value) {
  const objBaru = { ...obj, [key]: value };
  return {
    value: objBaru[key],
    obj: objBaru
  };
}

console.log(setGetDynamic({ nama: "Ali" }, "kelas", "A"));


// ==================================

// 13) Destructuring (Nested)
// Fungsi

// function ambilDataSantri(s) {}
// Tugas: hasil "Nama (usia) - telp". Langkah: ambil nama, profil.usia, profil.kontak.telp via destructuring.

// Contoh Hasil

// soal_13:

//   input:

//     s:
//       nama: "Ali"
//       profil: { usia: 17, kontak: { telp: "0812" } }

//   expected: "Ali (17) - 0812"

const santri1 = {
  nama: "Ali",
  profil: {
    usia: 17,
    kontak: {
      telp: "0812"
    }
  }
};

console.log(santri1);
 

// ==================================

// 14) Spread & Rest
// Fungsi

// function gabungProfilDanJumlah(admin, asrama, ...nilaiTambahan) {}
// Tugas: gabungkan 2 objek & jumlahkan angka ...nilaiTambahan. Langkah: profilGabung={...admin,...asrama}; totalTambahan=reduce(rest).

// Contoh Hasil

// soal_14:

//   input:
//     admin: { nama: "Ali" }
//     asrama: { kamar: "B12" }
//     nilaiTambahan: [10, 20, 30]

//   expected:
//     profilGabung: { nama: "Ali", kamar: "B12" }
//     totalTambahan: 60


function gabungProfilDanJumlah(admin, asrama, ...nilaiTambahan) {
  const profilGabung = { ...admin, ...asrama };
  const totalTambahan = nilaiTambahan.reduce((total, nilai) => total + nilai, 0);

  return {
    profilGabung,
    totalTambahan
  };
}

// ==================================

// 15) Integrasi Ringkas (Program • Modul • Santri)
// Fungsi
            
                                               
                    





    
                                                         


