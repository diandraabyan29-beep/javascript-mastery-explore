

// Default Notification
function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

function clearOutput() {
    document.getElementById("outputBox").innerText = "";
}

function addNewPharaghraph() {
    const random = `\n======================\n`;
    const output = document.getElementById("outputBox");
    output.innerText += `${random}`;
}

let dataSantri = [
    "bambang",
    21,
    true,
    "dodi",
    "euis",
    "febri",
    "gusti",
    "hani",
    "indri",
    "joko",
    "karti",
    "lala",
    "mama",
    "nana",
    "ocha",
    "pipi",
    "qori",
    "rani",
    "siti",
    "tata",
    "uusi",
    "vivi",
    "wati",
    "xeni",
    "yuni",
    "zaki",
]
let dataSantri2 = [
    'Data1', "Data2", 'Data3', 'Data4', 'Data5']

function logggingNama(nama, alamat, rek) {
    let result = `Nama Kamu ${nama} \n Alamat kamu di ${alamat} \n Rek kamu ${rek}`;
    // return "Ini Hasil Return"
    return result
}

// console.log(logggingNama("Bambang", "jakarta", "09876654321"));



// =======================================


// >>>>>>>>>>>>>>>>>>>>>   FORM F1
document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("1")
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const operator = document.getElementById("operator").value;

    if (!firstNumber || !secondNumber || !operator) {
        alert("Masukan Angka / Opeator");
    } else {
        f1(firstNumber, secondNumber, operator)
    }

});

// Deklartif
function f1(angkaPertama, angkaKedua, operator) {
    togglePopup("1");
    let result;
    const a = Number(angkaPertama);
    const b = Number(angkaKedua);

    if (isNaN(a) || isNaN(b) && !a || !b) {
        console.log("Input harus berupa angka");
        return;
    }

    switch (operator) {
        case "*":
            result = a * b;
            break;
        case "+":
            result = a + b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            console.log("Operator tidak valid");
            return;
    }

    const output = document.getElementById("outputBox");
    output.innerText += `F1: Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}`;
    togglePopup("1");
    return result;
}

// Ekpresif
// const f1 = function (angkaPertama, angkaKedua, operator) {
//     togglePopup("1");
//     let result;
//     const a = Number(angkaPertama);
//     const b = Number(angkaKedua);

//     if (isNaN(a) || isNaN(b) && !a || !b) {
//         console.log("Input harus berupa angka");
//         console.log(typeof a);
//         console.log(typeof b);

//         return;
//     }

//     switch (operator) {
//         case "*":
//             result = a * b;
//             break;
//         case "+":
//             result = a + b;
//             break;
//         default:
//             console.log("Operator tidak valid");
//             return;
//     }

//     const output = document.getElementById("outputBox");
//     output.innerText += `Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}`;
//     togglePopup("1");
//     return result;
// }

// arrow function
// const funct1 =  (angkaPertama, angkaKedua,) => angkaPertama * angkaKedua;

// =============================================================


// LOOPING 
function f3(data) {
    for (start = 0; start < data.length; start++) {
        if (start % 2 != 0) {
            console.log(`${start + 1} Genap >>> ${data[start]}`);
            // console.log((start + 1) + " Genap >>>" + data[start]);
        } else {
            console.log(`${start + 1} Ganjil >>> ${data[start]}`);
        }
    }
}

// f3(dataSantri2)
// console.log(`\n ========== \n`);
// f3(dataSantri)


document.getElementById("F2").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("2")
    const nama = document.getElementById("nama").value;

    if (!nama) {
        alert("Silahkan masukan nama");
        togglePopup("2")
    } else {
        salamCheckReligi(nama)
        togglePopup("2")

    }

});

let tagOutput = document.getElementById('outputBox');

function salamCheckReligi(nama) {
    togglePopup("2")
    if(nama.includes("muhammad")){
        tagOutput.innerText += `Hello ${nama} Assalamualaikum Brother`;
        return `Hello ${nama} Assalamualaikum Brtoher`
    } else {
        tagOutput.innerText += `Hello ${nama} Ada yang bisa di bantu \n`;
        return `Hello ${nama} Brtoher`
    }
}


// SCOPER AND ALL THINGS

// var a = 10 // GLOBAL SCOPE
// console.log(a)


// 1. Buat variabel di global dan akses di dalam fungsi.
let nama = "true";

function jenis(){
    console.log (nama);
}

jenis();

// 2. Uji coba hoisting dengan `var`, `let`, dan `const`
// console.log (a);
// var a = 10 // Hoisting terjadi pada var

// let b = 20;// No Hoisting

// const c = 30;// No Hoisting

// 3. Buat fungsi closure yang menyimpan nilai saldo dan bisa menambahkan saldo baru
function buatAkunSaldo() {
  let saldo = 0; 

  function tambahSaldo(jumlah) {
    saldo += jumlah;
    console.log(`Saldo sekarang: Rp${saldo}`);
  }

  return tambahSaldo; 
}

const akunZahran = buatAkunSaldo();

akunZahran(10000); 
akunZahran(5000);  
akunZahran(2000);  

// latihan lagi
function buatAkunSaldo(){
    let saldo = 0;


    function tambahSaldo(jumlah){
        saldo += jumlah;
        console.log(`Saldo sekarang: Rp${saldo}`);
    }

return tambahSaldo;
}

const akunBambang = buatAkunSaldo();

akunBambang(20000);
akunBambang(15000);
akunBambang(5000);

// let a = 10

// function testScope() {
//     let y = 20;
//     console.log(a);
//     console.log(y);
// }

// console.log(a);
// // console.log(y); EROR

// let b = 30;

// function testScale (){
//     let c = 40;
//     console.log(b);
//     console.log(c);
// }

// console.log(b);

function catatanPengeluaran(){
    let totalPengeluaran = 0;

    function tambahPengeluaran(jumlah){
        totalPengeluaran += jumlah;
        console.log(`Total pengeluaran: Rp${totalPengeluaran}`);
    }

    return tambahPengeluaran;
}

const pengeluaranHarian = catatanPengeluaran();

pengeluaranHarian(5000);
pengeluaranHarian(15000);
pengeluaranHarian(2500);

// =======================================
function pencatatanPengeluaran() {
  let total = 0;

  return {
    tambah: function (jumlah) {
      total += jumlah;
      console.log(`Tambah Rp${jumlah}. Total: Rp${total}`);
    },
    lihatTotal: function () {
      console.log(`Total pengeluaran: Rp${total}`);
    }
  };
}

const catatan = pencatatanPengeluaran();

catatan.tambah(10000);
catatan.tambah(25000);
catatan.lihatTotal(); 

// >>>>>>>>>>>>>>>>>>>>> 
function pencatatanPengeluaran() {
  let total = 0;

  return {
    tambah: function(jumlah) {
      total += jumlah;
      console.log(`Tambah Rp${jumlah}. Total: Rp${total}`);
    },
    lihatTotal: function() {
      console.log(`Total pengeluaran: Rp${total}`);
    }
  };
}

const catatan1 = pencatatanPengeluaran();

catatan1.tambah(10000);
catatan1.tambah(500000);
catatan1.lihatTotal();