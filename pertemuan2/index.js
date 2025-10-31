let nama = "BAMBANG";


// String
let namaVar = "Ini Value String";
let namaVar1 = 'String';
// kegunaan string adalalh untuk menyimpan teks atau kumpulan karakter
// Number / Integer
let namaVar2 = 100;
// kegunaan Number/ Integer untuk menyimpan nilai dari sebuah angka
// Boolean 
let namaVar3 = true ;
let namaVar4 = false ;
// Kegunaan Boolean adalah untuk menyimpan sebuah logika yang hanya memiliki dua kemungkinan
// Null 
let namaVar5 = null;
// kegunaan Null adalah untuk menunjukan bahwa sebuah variable itu koson
// Undifined 
let namaVar6 = undefined; 
let namaVarr5;
// Undifined untuk menambahkan variable yang belum memiliki nilai

// Keguanaan utama dari sebuah let adalah untk mendeklarasi variabel di JavaScript atau tempat menyimpan data yang bisa di ubah


// console.log("Check Value: " +namaVar2);
// console.log("Check Type Data: " + typeof namaVar2);



function namaFunction() {
    console.log("Si "+ nama + " Telah ngisi nama");
    confirm("Oh kamu namanya adalah "+ nama +" kah?")
    namaF2()
}

function namaF2(){
    console.log("Ini Function 2 Berjalan");
}
// Berguna untuk mengecek atau menampilkan teks di dalam konsol 

// 3 OPSI 
// LET - VAR - CONST

// let alamat = prompt("Masukan Alamat Anda");

let a = 90;
let b = a;
let c = b + a;
let d = a + b * c ;

var e = "Halo ";
const f = "Nama ";
let g = "Saya ";
let h = "Bambang ";

let result = e + f + g + h;

console.log(result);
// console.log((90*180)+90);


function add(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) + Number(b)
    console.log("Hasil dari "+ a +"+"+ b +" Adalah " + result);
}

function minus(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) - Number(b)
    console.log("Hasil dari "+ a +"-"+ b +" Adalah " + result);
}

function multiply(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) * Number(b)
    console.log("Hasil dari "+ a +"x"+ b +" Adalah " + result);
}

function devide(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) / Number(b)
    console.log("Hasil dari "+ a +"/"+ b +" Adalah " + result);
}

function modulus(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) % Number(b)
    console.log("Sisa Bagi dari "+ a +" Di Bagi "+ b +" Sisanya " + result);
}

function exponen(){
    let a = prompt("Masukan Angka Pertama");
    let b = prompt("Masukan Angka Kedua");
    let result = Number(a) ** Number(b)
    console.log("Hasil dari "+ a +" Pangkat "+ b +" Adalah " + result);
}
    
// disini saya belajar cara membuat sebuah kalkulator dasar

// let w = "10"
// console.log(w);
// console.log(typeof w);
// // let ww = Number(w);
// let ww = + w
// console.log(ww);
// console.log(typeof ww);

// OPERATOR PERBANDINGAN 

let m = 10;
let n = 10 ;

// > | < | == | != | >= | <= | === | !== 

let v = m !== n;

// (&&) | (||) | (!) | 

// && hanya true apabila kondisi sama sama true 
// console.log(true && true); // TRUE
// console.log(5 > 4 && 9 < 10 )
// console.log(false && true); // FALSE
// console.log(12 != 12 && "45" !== 45);
// console.log(true && false); // FALSE
// maksud dari (&&) adalah jadi apa bila true dan true bertemu maka hasilnya akan true tapi ini hanya apabila true saling bertemu tapi kalau true bertemu dengan false maka hasilnya akan tetap true

// (||) BISA TRUE APABILA SALAH SATU KONDISI TRUE
// console.log(true || false); // TRUE
// console.log(false || true); // TRUE
// console.log(false || false); // FALSE
// console.log(true || true); // TRUE
// maksud dari atau (||) ini yang penting ada true maka hasilnya akan tetap terue mau itu true ketemu false maka hasilnya tetap true

// (!) BISA MEMBALIKAN FAKTA
let data = "Santri";

if(data != "Santri" ) {

}

// console.log(!true);
// NOT (!) adalah sebuah kebalikn dari hasil yang biasa kita dapat


let x = m == n && m >= n ; // TRUE 
//


// console.log(typeof x);
// console.log(x);

// OPERATOR COMPARASION FOR >> GREATER THEN (>)
// console.log(5 > 5); // False
// console.log(6 > 5); // True 
// console.log(6 > 90); // False 
// console.log(5 >= 5); // True

// OPERATOR COMPARASION FOR >> LESS THEN (<)
// console.log(5 < 5); // False
// console.log(5 <= 5); // True


function checkUmur(){
    let data = prompt("Santri Mana ?")
    // let result = + umur 

    if(data != "PIT") {
       console.log("Anda Bukan Santri");
       console.log(data != "PIT");
    } else {
        console.log("Oke Santri");
        console.log(data != "PIT");
    }

    if(data == "PIT") {
        console.log("Oke Santri");
        console.log(data != "PIT");
    } else {
       console.log("Anda Bukan Santri");
       console.log(data != "PIT");
    }

    if(!data){
        console.log(!data);
        console.log(data);
        console.warn("Anda Belom Ngisi Data");
    } else {
        console.log(!data);
        console.log(data);
        console.log("Oke Data Di terima");
    }
}

console.log(70 > 90 && 23 < 90 && !true || 87 > 67 && 54 < 90 && !true); // 