// Latihan Mandiri
// 1. Buat array data siswa berisi nama, nilai, dan jurusan. Filter hanya siswa dari jurusan "IPA".
// 2. Ambil nilai siswa yang lebih dari 80.
// 3. Hitung rata-rata nilai seluruh siswa.

const dataSiswa = [
    {id: 1, nama: "Rafif", nilai: 90, jurusan:"IPA"},
    {id: 2, nama: "Febian", nilai: 94, jurusan: "IPA"},
    {id: 3, nama: "Ihsan", nilai: 80, jurusan: "IPS"},
    {id: 4, nama: "Syamil", nilai: 89, jurusan: "IPA"},
    {id: 4, nama: "Andra", nilai: 91, jurusan: "IPS"},
    {id: 4, nama: "Zidan", nilai: 91, jurusan: "IPS"},
    {id: 4, nama: "Hmaka", nilai: 84, jurusan: "MTK"}
]

const filterSiswa =  dataSiswa.filter(a => a.jurusan === "IPA");
console.table("Siswa Jurusan IPA: ",filterSiswa);

const totalNilai = dataSiswa.reduce((v,i)=> i.nilai + v,0)
const rataRataNilai = totalNilai / dataSiswa.length;

console.log(`Rata-rata nilai siswa: ${rataRataNilai.toFixed(2)}`)

// ================================================================

// Evaluasi Harian (Studi Kasus)
// Studi Kasus:
// Buat data array `transaksi` yang berisi objek dengan `namaBarang`, `jumlah`, dan `hargaSatuan`. Tampilkan:
// Daftar barang yang total belanjanya (jumlah × harga) lebih dari 500 ribu
// Total semua belanja
// Array baru yang berisi hanya nama barang dan total belanja

const transaksi = [
    {id: 1, namaBarang: "laptop", jumlah: 2, hargaSatuan: 15000000},
    {id: 2, namaBarang: "smartphone", jumlah: 1, hargaSatuan: 1000000},
    {id: 3, namaBarang: "keyboard", jumlah: 3, hargaSatuan: 130000},
    {id: 4, namaBarang: "mouse", jumlah: 4, hargaSatuan: 57000},
    {id: 5, namaBarang: "headset", jumlah: 1, hargaSatuan: 200000}
]   

const belanjaDiatas500Ribu = transaksi.filter(a => a.jumlah * a.hargaSatuan > 500000);

console.log("Daftar barang dengan total belanja lebih dari 500 ribu: ");
belanjaDiatas500Ribu.forEach(a => console.log(`- ${a.namaBarang}`));
console.log("\n");

const totalSemuaBelanja = transaksi.reduce((total, item) => total + (item.jumlah * item.hargaSatuan0));

console.log(`Total semua belanja: Rp${totalSemuaBelanja.toLocaleString('id-ID')}`);
console.log("\n");

const ringkasanBelanja = transaksi.map(item => {
    return {
        namaBarang: item.namaBarang,
        totalBelanja: item.jumlah * item.hargaSatuan
    };
});

console.log("Ringkasan belanja (nama barang dan total belanja");
console.log(ringkasanBelanja);

