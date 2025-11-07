
// Default Notification
function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

// Closure - Switch - IF with Operator - Hoisting - Comparasion & Logical - Looping - 

// ================================================
// EXAMPLE OF AN ARRAY OBJECT
// ================================================

let f1 = function () {
    return "INI F1"
}

let arr = ['String 1', 100]

arr[1] = "Edit" // Cara Edit Spesifik pada element Array

let arr2 = ['String', 10, true, f1(), arr, ["Array1", "Array2"]] // Contoh Array dengan berbagai tipe data termasuk function dan array di dalam array
let arr3 = ['Fulan PIT', 'Andi', "Bambang PIT", "Asep", "Udin PIT"] // Data Array untuk di eksekusi pada function f2


function f2(namaData) {
    console.log(`Oke Array "${namaData}" Akan Di Eksekusi`);
    return function (arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`Hasil Array "${namaData}" pada Loop ke ${i + 1}`);
            console.log(`${i + 1}. ${arr[i]}`);
        }
    }
}
// f2("Data Santri")(arr3)


// ================================================
// FUNCTION MANIPULATION DATA TO ARRAY
// ================================================

let dataSantri = []
const output = document.getElementById('outputBox');

function deleteFisrtArray() {
    dataSantri.shift() // >>> SHIFT() (Delete Only First Element in Array)
    output.innerText = dataSantri
}

function deleteLastArray() {
    dataSantri.pop() // >>> POP() (Delete only Last Element in Array)
    output.innerText = dataSantri
}


document.getElementById("F2").addEventListener("submit", function (e) {
    e.preventDefault();
    const index = document.getElementById("index").value;
    const newData = document.getElementById('new-data').value;
    
    if (!index || !newData) {
        alert("Salah satu Data Belum Ke Input");
    } else {
        edit(index,newData)
    }
});
// FUNCTION untuk mengedit data array berdasarkan index


function edit(index,newData) {
    dataSantri[index] = newData
    output.innerText = dataSantri
    togglePopup("2")
    
}

document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("1")

    const name = document.getElementById("name").value;
    const option = document.getElementById('option').value;

    if (!name || !option) {
        alert("Salah satu Data Belum Ke Input");
    } else {
        manipulationElementArray(name, option)
    }
});
// FUNCTION untuk menambah data array

function manipulationElementArray(data, option) {
    togglePopup('1')
    switch (option) {
        case "pop":
            dataSantri.push(data), // >>>>>> PUSH() (Add New Element in Last Index)
                output.innerText = dataSantri
            break;
        case "unshift":
            dataSantri.unshift(data), // >>>>>> UNSHIFT() (Add New Element in Fisrt Index)
                output.innerText = dataSantri
            break;
        default:
            break;
    }
    console.log(`Data "${data}" berhasil Di tambahkan dengan metode "${option}" ....`);
    console.log(dataSantri);
    togglePopup('1')
}

// ================================================
//  Latihan Mandiri
// 1. Buat array berisi angka 1–10
// 2. Gunakan `map` untuk mengalikan semua angka dengan 5
// 3. Gunakan `filter` untuk mengambil angka genap
// 4. Gunakan `reduce` untuk menjumlahkan semua angka
// 5. Gunakan `find` untuk mencari angka pertama yang lebih dari 8

let angka = [1,2,3,4,5,6,7,8,9,10]

angka.map((v,i,a)=>{
    a[i] = v * 5
});
console.log(`Hasil Map (Mengalikan Semua Angka dengan 5) : ${angka}`);

let angkaGenap = angka.filter((v)=>{
    return v % 2 === 0
});
console.log(`Hasil Filter (Mengambil Angka Genap) : ${angkaGenap}`);

let totalAngka = angka.reduce((acc, curr) => {
    return acc + curr;
});
console.log(`Hasil Reduce (Menjumlahkan Semua Angka) : ${totalAngka}`);

let findAngka = angka.find((v) => {
    return v > 8;
});
console.log(`Hasil Find (Mencari Angka Pertama yang Lebih dari 8) : ${findAngka}`);


// ================================================

// Evaluasi Harian (Studi Kasus)
// Studi Kasus:
// Buat program untuk memproses daftar nilai siswa:

let nilai = [60,75,80,55,90,45];

// 1. gunakan `filter()`untuk mencari nlai lulus(>= 70)
let nilaiLulus = nilai.filter((v)=>{
    return v >= 70;
});

// 2. gunakan `map()` untuk menambahkan komentar "lulus" atau "Gagal"
let komentarNilai = nilai.map((v)=>{
    if(v >= 70) {
        return v + " - Lulus"
    }else if (v < 70) {
        return v + " - Gagal"
    }else{
        return v + " - Tidak Valid"
    }
});
console.log(`Komentar Nilai Siswa : ${komentarNilai}`);

// 3. gunakan `reduce()` untuk menghitung total nilai
let totalNilai = nilai.reduce((acc, curr) => {
    return acc + curr;
});
console.log(`Total Nilai Siswa : ${totalNilai}`);

// 4. cetak hasilnya ke console
console.table("Hasil Evaluasi Nilai Siswa:");
console.table(`Daftar Nilai: ${nilai}`);
console.table(`Nilai Lulus: ${nilaiLulus}`);
console.table(`Komentar Nilai: ${komentarNilai}`);
console.table(`Total Nilai: ${totalNilai}`);

// ================================================

// Kasus 1: Membuat dan Mengakses Array Dasar
// membuat array bernama merk mobil
const merkMobil = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW"];
console.log(merkMobil);
console.log(merkMobil.length)

// Kasus 2: Menambah Elemen dengan push()
merkMobil.push("Audi");
console.log(merkMobil);

// Kasus 3: Menghapus Elemen dengan pop()
const seri =["Series 3", "Series 5", "Series 7"];
const removedSeri = seri.pop();
console.log(seri);
console.log(`Removed Seri: ${removedSeri}`);

// Kasus 4: Iterasi Sederhana dengan forEach()
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(`Number: ${number}`);
});

// Kasus 5: Pencarian dengan includes()
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.includes("Banana"));
console.log(fruits.includes("Mango"));

// Kasus 6: Menambah di Awal dengan unshift()
const colors = ["Red", "Green", "Blue"];
colors.unshift("Yellow");
console.log(colors);

// Kasus 7: Menghapus dari Awal dengan shift()
const cities = ["New York", "Los Angeles", "Chicago"];
const firstCity = cities.shift();
console.log(firstCity);
console.log(cities);

// Kasus 8: Mencari Indeks dengan indexOf()
const phones = ["iPhone", "Samsung", "Xiaomi"];
console.log(phones.indexOf("Samsung"));
console.log(phones.indexOf("Nokia"));

