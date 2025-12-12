import * as utils from './utils/index.js'
import * as db from './db/index.js'

// console.log(utils.f1());
// console.log(db.f1());

// console.log(utils.f2("Mie ayam","Bakso","Pangsit","Sawi","Telur","Ceker"));





// // level 1
// // 1
// const halo = () => `Halo semua`
// console.log(halo());

// // 2

// const tambah = (a,b) => a+b
// console.log(tambah(3,6));

// // 3

// const luasPersegi = (sisi) => sisi*sisi
// console.log(luasPersegi(4));
 
// //  level 2
// // 4

// const cekGenap = (angka) => angka % 2 === 0 ? "Genap" : "Ganjil"
// console.log(cekGenap(2));

// // 5
// const saldoAwal = (saldoAwal, pemasukan, pengeluaran) => saldoAwal + pemasukan - pengeluaran
// console.log(saldoAwal(1000000, 500000, 250000));

// // 6
// const terbesar = (a, b, c) => Math.max(a,b,c)
// console.log(terbesar(5,9,3));

// // level 3
// // 7
// const angka = [21,24,45,9,10]
// const kaliDua = angka.map(v => v *2)
// console.log(kaliDua);

// // 8
// const data = [2,4,10,15,20,25,30]
// const lebihBesar10 = data.filter(v => v >10)
// console.log(lebihBesar10);

// const data1 = [1,2,3,4,5,6,21,13,10]
// const kurangDari10 = data1.filter(v => v <10)
// console.log(kurangDari10);

// 9
// const arr1 = [1,2,3,4,5]
// const total = () =>  arr1.reduce((prevV,currV,currI)=> {
//     console.log(`prevV: ${prevV}, currV: ${currV}, currI: 2${currI}`);
    
    
// },10)

// total();

// const arr2 = [10,15,27,9,11]
// const total2 = arr2.reduce((a,b) => a + b)
// console.log(total2);

// // level 4
// // 10
// const diskon = (harga,diskon) => 
//     harga - (harga * diskon / 100)

// console.log(diskon(54000,17));

// ================================================

// Object Destructuring { } 🎁
// level 1
// 1
// const nama = ["Zahran","Andi"]

// const [nama1, nama2] = nama
// console.log(nama1);
// console.log(nama2);

// // 2
// const buku = { judul: "Program JS", harga:90000 }

// const {judul,harga}= buku
// console.log(judul);
// console.log(harga);

// // 3
// const titik = [10,20,30]

// const [x,y,z,] = titik
// console.log(x);
// console.log(y);
// console.log(z);

// // level 2
// // 4
// const user = {userName:"Faisal",}

// const {userName,role = "meber" } = user
// console.log(userName,role);

// const user2 = {userName2:"Rama"}

// const {userName2,role2 = "admin"} = user2
// console.log(userName2,role2);

// const user3 = {userName3: "Budi"}

// const {userName3, role3 = "guest"} = user3
// console.log(userName3,role3);

// // 5
// const angka1 = [5]

// const [a, b=10, c=15] = angka1
// console.log(a,b,c);

// // level 3
// // 6
// const product = { id: 1, nama: "Keyboard", stok: 50 };

// const  { nama: labelProduk, stok: jumlah }= product
// console.log(labelProduk, jumlah);

// const product2 = {id: 2, nama: "Mouse", stok: 150}

// const {nama: Jeneng, stok: Turah}= product2
// console.log(Jeneng, Turah);

// // 7
// const warna = ["merah", "biru", "hijau"];

// const[ , ,warna3] = warna
// console.log(warna3);

// 8
const profile ={
    nama:"Agus",
    alamat:{
        kota:"Bandung",
        jalan:"Jl. Merdeka No.10"
    }
}

const {alamat: {kota}} = profile
console.log(kota);

const profile2 = {
    nama:"Siti",
    alamat:[
        {kota:"Jakarta"},
        {jalan:"Jl. Sudirman No.20"}
    ]
}

const {alamat:[{kota:kota1}]} =profile2
console.log(kota1);

// // level 4
// // 9
// const data = {
//   nama3: "Zahran",
//   usia: 18,
//   pekerjaan: ["Frontend Dev", "UI Designer"]
// };

// const {nama3, usia, pekerjaan:[ pekerjaanPertama]} = data
// console.log(nama3,usia, pekerjaanPertama);


// const data1 = {
//   nama4: "Bagus",
//   usia1: 20,
//   pekerjaan1: ["Frontend Dev", "UI Designer"]
// };

// const {nama4, usia1, pekerjaan1:[, pekerjaanKedua] }=data1
// console.log(nama4,usia1,pekerjaanKedua);

// // 10
// const akun = { username: "dian123", email: "dian@gmail.com", umur: 19 };

// function tampilkanAkun({username, email, umur}){
//     console.log(`Username: ${username}, Email:${email}, Umur: ${umur}`);
    
// }

// tampilkanAkun(akun);

// // 11
// const siswa = {
//   nama: "Rian",
//   nilai: {
//     mapel: ["IPA", "IPS", "Matematika"],
//     angka: [80, 75, 95]
//   }
// };

// const {nilai: {angka:[,,nilaiMatematika]}} = siswa
// console.log(nilaiMatematika);

// // 12
// const arr = [10, 20, 30, 40, 50];

// const [pertama1, ...sisa1] = arr
// console.log(pertama1);
// console.log(sisa1);


