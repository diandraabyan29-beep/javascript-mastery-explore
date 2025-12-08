// Latihan Mandiri
// 1.Buat object bernama `buku` dengan properti: `judul`, `pengarang`, `tahunTerbit`
// 2.Tambahkan properti baru bernama `penerbit`
// 3.Ubah nilai `tahunTerbit`
// 4.Hapus properti `pengarang`
// 5.Tampilkan semua isi object menggunakan looping

const book = {
    judul : "Thing And Grow Rich",
    pengarang : "Napoleon Hill",
    tahunTerbit: 1973,
}

book["penerbit"] = "Gramedia"
book["tahunTerbit"] = "2019"
delete book.pengarang

for (let key in book){
    console.log(`pada key ${key} valuenya ${book[key]}`)
}

//=============================================

let bukuFavorit = {
    judul : "Clean Code",
    penulis : "Robert C. Martin",
    tahun : 2008
}

// 1. Tambahkan properti "Kategori" dengan nilai "Pemprograman"
bukuFavorit["kategori"] = ': Prinsip dan praktik penulisan kode yang bersih'
// 2. Ubah Tahun Menjadi 2010
bukuFavorit["tahun"] = 2010
// 3. Hapus Properti "penulis"
delete bukuFavorit.penulis
// 4. Tampilkan seluruh isi object  menggunakan `for...in`
for (let key in bukuFavorit){
    console.log(`key ${key} valuenya ${bukuFavorit[key]}`)
}


// LEVEL 1
const santriBaru = [
  "Ahmad Fauzan",
  "Muhammad Rizky",
  "Fathur Rahman",
  "Abdul Malik",
  "Hasan Al-Basri",
  "Khalid Ramadhan",
  "Zaidan Al-Farisi",
  "Ridwan Hakim",
  "Lukman Hakim",
  "Hilmi Maulana"
];

santriBaru.push("Febian Hakaf","Ahmad Irsyad","Nazal Ihsan")
santriBaru.shift()

const santriHadir =[
  "Muhammad Rizky",
  "Fathur Rahman",
  "Abdul Malik",
  "Hasan Al-Basri",
  "Khalid Ramadhan",
  "Zaidan Al-Farisi",
  "Ridwan Hakim",
  "Lukman Hakim",
  "Hilmi Maulana",
  "Febian Hakaf",
  "Ahmad Irsyad",
  "Nazal Ihsan"
]

console.table(santriBaru);
console.log("Total Santri Yang Hadir:",santriHadir.length)

// LEVEL 2
// Daftar santri dan nilainya
const santri = [
  { nama: "Muhammad Rizky", nilai: 85 },
  { nama: "Fathur Rahman", nilai: 78 },
  { nama: "Abdul Malik", nilai: 90 },
  { nama: "Hasan Al-Basri", nilai: 70 },
  { nama: "Khalid Ramadhan", nilai: 88 },
  { nama: "Zaidan Al-Farisi", nilai: 92 },
  { nama: "Ridwan Hakim", nilai: 65 },
  { nama: "Lukman Hakim", nilai: 80 },
  { nama: "Hilmi Maulana", nilai: 75 },
  { nama: "Febian Hakaf", nilai: 68 },
  { nama: "Ahmad Irsyad", nilai: 100 },
  { nama: "Nazal Ihsan", nilai: 82 }
];

// 1. forEach() — Tampilkan semua nilai
console.log("Daftar nilai santri:");
santri.forEach((data, index) => {
  console.table(`${index + 1}. ${data.nama} - Nilai: ${data.nilai}`);
});

// 2. map() — Tambah bonus nilai
const santriBonus = santri.map(s => {
  return {
    nama: s.nama,
    nilai: s.nilai + 5
  };
});

console.log("Nilai santri setelah bonus:");
santriBonus.forEach((data, index) => {
  console.table(`${index + 1}. ${data.nama} - Nilai: ${data.nilai}`);
});

// 3. filter() — Ambil yang nilainya ≥ 90
const santriLulus = santri.filter(s => s.nilai >= 90);

console.log("Santri Dengan Nilai > 90:") 
santriLulus.forEach((s,i) => {
    console.log(`${i+1}.${s.nama} - Nilai ${s.nilai}`)
});

// 4. reduce() — Hitung rata-rata
const totalNilai = santri.reduce((total,s) => total + s.nilai, 0)
const rataRata = totalNilai/ santri.length;

console.log(`Rata-rata nilai santri: ${rataRata.toFixed(2)}`)

// 5. find() — Cari yang dapat nilai sempurna (100)
const nilaiSempurna = santri.find(s => s.nilai === 100)

if(nilaiSempurna){
    console.log(`Santri yang mendapatkan nilai sempurna: ${nilaiSempurna.nama} (${nilaiSempurna.nilai})`)
}else{
    console.log(`tidak ada santri yang mendapatkan nilai sempurna.`)
}

// ==============================================

const siswa = [
  { nama: "Ahmad", bidang: "Fullstack", poin: 97 },
  { nama: "Zain", bidang: "Frontend", poin: 95 },
  { nama: "Rafi", bidang: "Backend", poin: 89 },
  { nama: "Fahri", bidang: "UI/UX", poin: 92 },
  { nama: "Hafidz", bidang: "Fullstack", poin: 85 },
  { nama: "Ridwan", bidang: "Frontend", poin: 90 },
  { nama: "Hilmi", bidang: "Backend", poin: 88 },
  { nama: "Taufiq", bidang: "Fullstack", poin: 96 },
  { nama: "Ilham", bidang: "UI/UX", poin: 91 },
  { nama: "Dimas", bidang: "Frontend", poin: 87 }
];

siswa.sort((a,b) => b.poin - a.poin)

console.log("Urutan Nilai Tertinggi")
siswa.forEach((s, i) => {
  console.log(`#${i + 1} ${s.nama} - ${s.bidang} ${s.poin} poin`)
})

const  limaTerbaik = siswa.slice(0, 5)

console.log("5 point tertinggi")
limaTerbaik.forEach((s,i)=> {
  console.log(`#${i+1} ${s.nama}-${s.bidang}${s.poin}poin`)
})

const totalPoint =siswa.reduce((total,s) => total + s.poin,0)

const rataRataPoin = totalPoint/siswa.length

console.log(`rata rata nilai siswa: ${rataRataPoin.toFixed(2)}`)




