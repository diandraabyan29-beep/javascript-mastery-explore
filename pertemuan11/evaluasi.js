const transaksi = [
  { namaBarang: "Laptop", jumlah: 2, hargaSatuan: 8000000 },
  { namaBarang: "Keyboard", jumlah: 10, hargaSatuan: 75000 },
  { namaBarang: "Mouse", jumlah: 10, hargaSatuan: 50000 },
  { namaBarang: "Monitor", jumlah: 3, hargaSatuan: 2500000 },
  { namaBarang: "Headset", jumlah: 5, hargaSatuan: 350000 },
];

// 1. Daftar barang yang total belanjanya (jumlah × harga) lebih dari 500 ribu
const belanjaDiatas500Ribu = transaksi.filter(item => item.jumlah * item.hargaSatuan > 500000);

console.log("Daftar barang dengan total belanja lebih dari 500 ribu:");
belanjaDiatas500Ribu.forEach(item => {
  console.log(`- ${item.namaBarang}`);
});
console.log("\n");


// 2. Total semua belanja
const totalSemuaBelanja = transaksi.reduce((total, item) => total + (item.jumlah * item.hargaSatuan), 0);

console.log(`Total semua belanja: Rp${totalSemuaBelanja.toLocaleString('id-ID')}`);
console.log("\n");


// 3. Array baru yang berisi hanya nama barang dan total belanja
const ringkasanBelanja = transaksi.map(item => {
  return {
    namaBarang: item.namaBarang,
    totalBelanja: item.jumlah * item.hargaSatuan
  };
});

console.log("Ringkasan belanja (nama barang dan total belanja):");
console.log(ringkasanBelanja);
