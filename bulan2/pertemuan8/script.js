// RECAL SPLICE

let arr = ['Array1', 'Array2', 'Array3', 'Array4']
// console.log(arr);// LENGHT MASIH 4

let hasilSplice = arr.splice(1,1,'jiji','kiki','90909')
// console.log(hasilSplice); // LENGHT MENJADI 1
// fungsi splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
// splice ada 3 parameter :
// 1. indexAwal : index awal yang mau dihapus
// 2. mauDihapusBerapa : mau dihapus berapa element dari indexAwal
// 3. elemenBaru : elemen baru yang mau ditambahkan di posisi indexAwal


// =====================================================
// MANIPULATION ARRAY WITH ONLY METHOD FOR ARRAY
// =====================================================

// 1. `forEach()`
// Digunakan untuk melakukan iterasi terhadap setiap elemen dalam array.

const namaIslami = [
  "Ahmad",
  "Muhammad",
  "Ali",
  "Hassan",
  "Husain",
  "Abdullah",
  "Umar",
  "Usman",
  "Abu Bakar",
  "Khalid",
  "Bilal",
  "Saad",
  "Sulaiman",
  "Yusuf",
  "Ibrahim",
  "Ismail",
  "Idris",
  "Zakariya",
  "Ayyub",
  "Nuh",
  "Musa",
  "Harun",
  "Isa",
  "Yahya",
  "Imran",
  "Luqman",
  "Zaid",
  "Anas",
  "Hamzah",
  "Talha",
  "Safwan",
  "Salman",
  "Rafi",
  "Fahd",
  "Rayan",
  "Amir",
  "Hadi",
  "Azhar",
  "Nabil",
  "Farhan",
  "Ilyas",
  "Jabir",
  "Karim",
  "Latif",
  "Hakim",
  "Zuhair",
  "Rashid",
  "Faisal",
  "Tariq",
  "Samir"
];


namaIslami.forEach((a,b,c)=> {
    // console.log(a);
    
})

let hasilEdit = [];     


// namaIslami.forEach((a,b,c) => { // PARAM (1. Value , 2. Index, 3. Array) 
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);
//     // console.log(`${b+1}. ${c[b]}`);
//     c[b] = a + " SRIT ke " + (b+1);
//     // console.log(`${b+1}. ${namaIslami[b] = a + " SANTRI PIT"};`);
// })

// console.table(namaIslami);
// kedepannya bisa gunakan forEach untuk manipulasi data array tanpa perlu loop lagi dan kegunaan forEach lebih optimal daripada loop biasa
// console.table(namaIslami);
// kegunaan table untuk menampilkan data array dalam bentuk tabel di console

// ================================================

// 2. `map()`
// Mengembalikan array baru dengan nilai yang sudah dimodifikasi.


// namaIslami.forEach((a,b,c) => { // PARAM (1. Value , 2. Index, 3. Array) 
//     // console.log(a);
//     // console.log(b);
//     // console.log(c);
//     // console.log(`${b+1}. ${c[b]}`);
//     c[b] = a + " SRIT ke " + (b+1);
//     // console.log(`${b+1}. ${namaIslami[b] = a + " SANTRI PIT"};`);
// })

// console.table(namaIslami);


let hasilMap = namaIslami.map((v,i,a)=>{
   if(i % 2 == 0) {
     return v + " RIT"
   } else if (i % 2 != 0) {
     return v + " PIT"
   } 
})

// 3. `filter()`
//Mengembalikan array baru hanya dengan elemen yang memenuhi kondisi.
let rit = hasilMap.filter((v)=>{
    return v.includes("RIT");    
})

let pit = hasilMap.filter((v)=>{
    return v.includes("PIT");
})
// fungsi dari filter adalah mengembalikan array baru dengan elemen yang memenuhi kondisi tertentu yang ditentukan dalam fungsi callbacknya

// 4. `reduce()`
// Menggabungkan semua elemen dalam array menjadi satu nilai.
let totalKarakter = namaIslami.reduce((acc, curr) => {
    return acc + curr.length;
}, 0);
console.log(`Total Karakter dari semua nama dalam array adalah : ${totalKarakter}`);
// fungsi dari reduce adalah menggabungkan semua elemen dalam array menjadi satu nilai tunggal berdasarkan logika yang ditentukan dalam fungsi callbacknya

// ================================================
// 5. `find()`
// Mengembalikan elemen pertama yang memenuhi kondisi tertentu.
let findNama = namaIslami.find((v) => {
    return v.startsWith("A");
});
console.log(`Nama pertama yang dimulai dengan huruf A adalah : ${findNama}`);
// fungsi dari find adalah mengembalikan elemen pertama dalam array yang memenuhi kondisi tertentu yang ditentukan dalam fungsi callbacknya

// ================================================


console.group("TABLE DATA ARRAY AWAL");
console.table(namaIslami);
console.groupEnd();

console.group("TABLE DATA ARRAY HASIL MODIFIKASI MAP() ");
console.table(hasilMap);
console.groupEnd();
console.group("TABLE DATA ARRAY HASIL MODIFIKASI FILTER() RIT ");
console.table(rit);
console.groupEnd();
console.group("TABLE DATA ARRAY HASIL MODIFIKASI FILTER() PIT ");
console.table(pit);
console.groupEnd();