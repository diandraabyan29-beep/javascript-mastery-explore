// Latihan Mandiri
// 1. Gunakan destructuring array untuk mengambil nilai dari array `[1, 2, 3, 4]`
// 2. Buat object `mobil` dan destructure properti `merek` dan `tahun`
// 3. Gabungkan dua array menggunakan spread operator
// 4. Buat function yang menerima banyak argumen angka dan mengembalikan jumlahnya menggunakan rest

let angka = [1,2,3,4]

let [a,b,c,d] = angka
console.log(angka)

let mobil = {
    merek: "Subaru",
    tahun: 1999
}

let{merek,umur} = mobil;
console.log(mobil);

let angkaDanMobil = [...angka, {...mobil}]

// console.log(angkaDanMobil)

angkaDanMobil[4].tahun = "2000"
angkaDanMobil[4].merek = "Toyota"
angkaDanMobil[1] = {
    merek: "Dayhatsu",
    tahun: 2019
}

angkaDanMobil[1].merek = "Ferari"

angkaDanMobil.push(["data",1,true,"mobil","amnbil"])

angkaDanMobil[5][2] = {
    mobil: "Mitstubitsu",
    data : [0,2,9,0]
}
console.table(angkaDanMobil);

angkaDanMobil[5][2].data[2] = ["ini ke 3"]

angkaDanMobil.forEach(data => {
    console.log(data);
});

function jumlahkan(...angka){
    let total =0;
    angka.forEach(n=> total += n) 
    return total
}

console.table(jumlahkan(10,20,30));
console.table(jumlahkan(23,24,14,13));
console.table(jumlahkan(162,836,629,618,891));
console.table(jumlahkan(153,173,7183,819,571,617));

// Evaluasi Harian (Studi Kasus)
// Studi Kasus:
// Buat program yang menerima data siswa dari object, lalu pisahkan nilai tertentu dan manipulasi data lainnya:

//===================================================================

let siswa = {
    nama : "rama",
    usia : 17,
    kelas : "XII",
    jurusan : "IPA"
}

// 1. Gunakan destucturing untuk mengambil nama dan kelas 
const {nama,kelas} = siswa;
console.log(`nama ${nama} kelas${kelas}`)

// 2. Gunakan Spreed untuk objeck baru dengan tambahan properti "nilai": 90
const siswaBaru = { ...siswa,nilai: 90}
console.log("Data siswa baru",siswaBaru);

// 3. Buat fungsi yang menerima banyaka nilai ujian dan menghitung rata-ratanya dengan rest operator
function hitungRataRata(...nilai) {
    const total = nilai.reduce((s,i) => s +i, 0 )
    return total/ nilai.length
}

const rata = hitungRataRata(85,80,90,88,84,96,95,87,88,97,67,100);
console.log(`Rata-rata nilai ujian: ${rata.toFixed(2)}`);

//==========================================================================================

// // 🟢 LEVEL EASY (1–8) — Dasar-dasar
// 1.Array Destructuring Dasar
// Ambil dua nilai pertama dari array const angka = [10, 20, 30, 40].

const angka1 = [10,20,30,40]

let [e,f,g,h] = angka1
console.log(e,f);

// 2. Skip Nilai Tertentu
// Ambil hanya elemen ke-1 dan ke-3 dari array [5, 10, 15, 20].

let angka2 = [5, 10, 15, 20]

let [pertama,,ketiga] = angka2
console.log("Elemen ke-1",pertama);
console.log("Elemen ke-3",ketiga);

// 3. Object Destructuring Dasar
// Ambil properti nama dan usia dari:
let warga={
    nama1 : "Romadhon",
    usia : 20,
    asal : "Banjanegara"
}

let {nama1,usia}= warga
console.log(`Nama ${nama1}`);
console.log(`Usia ${usia}`);

// 4. Object Destructuring Dasar
// Ambil properti nama dan usia dari:

// const orang = { nama: "Dina", usia: 20, kota: "Bandung" };
let warga2={
    nama2: "Malik",
    usia2 : 21,
    asal : "Banjanegara"
}

let {nama2,usia2}= warga2
console.log(`Nama ${nama2}`);
console.log(`Usia ${usia2}`);


// 5. Rename saat Destructuring
// Ambil usia lalu ubah jadi variabel umur.
const { usia: umur2 } = warga2;

console.log("Umur:", umur2);


// 6. Nested Destructuring (Objek di dalam Objek)
// Ambil kota dari:

// const siswa = { biodata: { nama: "Rama", kota: "Malang" } };

 const siswa1 = { biodata:
     { nama: "Rama",
       kota: "Malang" 
} }


