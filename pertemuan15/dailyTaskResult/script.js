
// Latihan Mandiri
// 1. Buat fungsi `prosesData` yang menerima data dan callback. Cetak datanya, lalu jalankan callback-nya.
// 2. Gunakan `setTimeout` untuk mensimulasikan delay dan tampilkan teks "Proses selesai" setelah 3 detik.
// 3. Buat fungsi yang mencetak angka dari 1 sampai 5, dan setelah selesai mencetak semua angka, panggil callback yang mencetak "Selesai mencetak".

function prosesData(data, callback){
    console.log("data:", data);
    callback()  
}

prosesData ("Belajar callback",function(){
    console.log("Callback dijalankan!");
    
})

setTimeout(function(){
    console.log("Proses selesai");
},3000)

function cetakAngka(callback){
    for(let i = 1; i = 5; i++){
        console.log(i);
    }
   callback()
}

cetakAngka(function(){
    console.log("Selesai mencetak");
})