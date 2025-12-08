// 📝 Latihan Soal (50 Soal)
// Format: campuran easy → medium → advance

// 🟢 EASY (15 soal)

// 1. Apa itu callback dalam JavaScript? Berikan contoh paling sederhana.
//    callback merupakan sebuah fungsi yang dikirim ke argumen fungsi yang lain.
function panggilNama(callback){
    console.log("sedang memproses");
    callback()
}

function halo(){
    console.log("Halo semua");    
}

panggilNama(halo)


// 2. Buat fungsi sapaUser(callback) lalu panggil callback yang mencetak “Halo Santri!”.
function sapaUser(start){
    start()
}

function haloSantri(){
    console.log("Hallo santri");
}

sapaUser(haloSantri)

// 3. Buat contoh callback yang menambah dua angka.
function hitungAngka(a,b,callback){
    callback(a+b)
}

function tampilkanHasil(hasil){
    console.log(`Hasilnya adalah ${hasil}`);
}

hitungAngka(7, 3 , tampilkanHasil)


// 4. Jelaskan kenapa kita harus pakai JSON.stringify di localStorage.
// karena localStorage hanya bisa menyimpan string

// 5. Simpan string “Belajar JS” ke localStorage.
localStorage.setItem("materi", "Belajar JS");

// 6. Ambil data tersebut dari localStorage.
let hasil = localStorage.getItem("materi")
console.log(hasil);


// 7. Simpan array [1,2,3] ke localStorage.
localStorage.setItem("angka", JSON.stringify([1,2,3,]))

// 8. Ambil dan tampilkan kembali array tersebut.
let data = JSON.parse(localStorage.getItem("angka"))
console.log(data);

// 9. Apa itu JSON?
// merupakan singkatan dari JavaScript Object Natation, yaitu format untuk menyimpan data 


// 10. Buat object santri (nama, kelas, nilai) dan simpan ke localStorage.
const santri = {
    nama: "Abyan",
    asal: "Banjarnegara",
    umur: 19
}

localStorage.getItem( "santri",JSON.stringify(santri))

// 11. Buat callback yang memvalidasi input tidak kosong.
function validasiInput(teks, callback){
    if(teks === "" || null === teks || teks === undefined){
        console.log("Input tidak Kosong");
        return; 
    }
   callback() 
}

validasiInput("Abyan", function(hasil){
    console.log("Input valid", hasil);
})


// 12. Buat fungsi tunda(callback) yang menjalankan callback setelah 1 detik.
function tunda(callback){
    setTimeout(()=>{
        callback()
    },10000)
}

tunda(()=>{
    console.log("Ini muncul setelah 10 detik");
})


// 13. Buat fungsi yang menerima array dan callback untuk mengalikan setiap item.
function prosesArray(arr, callback) {
  const hasil = arr.map(callback);
  console.table(hasil);
}

prosesArray([1, 2, 3], function(x) {
  return x * 2;
});

// 14. Buat fungsi hapus item localStorage.
function hapusItem(key){
    localStorage.removeItem(key)
    console.log(`Item ${key} berahsil dihapis`);
}

hapusItem("nama")


// 15. Ambil semua key di localStorage (hint: Object.keys(localStorage))
let semuaKey = Object.keys(localStorage);
console.table(semuaKey);

// 🟡 MEDIUM (20 soal)

// 16. Buat program absensi memakai callback validasi + penyimpanan localStorage.
function validasi(nama, callback) {
    if (!nama || nama.trim() === "") callback("Nama kosong!", null);
    else callback(null, nama.trim());
}

function simpanAbsensi(nama) {
    let data = JSON.parse(localStorage.getItem("absensi")) || [];
    data.push({ nama, waktu: new Date().toLocaleString() });
    localStorage.setItem("absensi", JSON.stringify(data));
}

function absen(nama) {
    validasi(nama, (err, hasil) => {
        if (err) return console.log(err);
        simpanAbsensi(hasil);
    });
}


// 17. Buat to-do list sederhana (add, list).
function addTodo(text) {
    let list = JSON.parse(localStorage.getItem("todo")) || [];
    list.push({ text, done: false });
    localStorage.setItem("todo", JSON.stringify(list));
}

function listTodo() {
    return JSON.parse(localStorage.getItem("todo")) || [];
}


// 18. Buat fungsi edit item to-do pada indeks tertentu.
function editTodo(index, newText){
    let list = listTodo()
    if (list[index]){
        list[index].text = newText;
        localStorage.setItem("todo", JSON.stringify(list))
    }
}

// 19. Buat fungsi hapus item to-do.


