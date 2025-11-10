🟢 LEVEL EASY (1–8) — Dasar-dasar

1. Array Destructuring Dasar
Ambil dua nilai pertama dari array const angka = [10, 20, 30, 40].

2. Skip Nilai Tertentu
Ambil hanya elemen ke-1 dan ke-3 dari array [5, 10, 15, 20].

3. Default Value
Ambil nilai dari [8], tapi beri default nilai2 = 100 bila tidak ada elemen kedua.

4. Object Destructuring Dasar
Ambil properti nama dan usia dari:

const orang = { nama: "Dina", usia: 20, kota: "Bandung" };


5. Rename saat Destructuring
Ambil usia lalu ubah jadi variabel umur.

6. Nested Destructuring (Objek di dalam Objek)
Ambil kota dari:

const siswa = { biodata: { nama: "Rama", kota: "Malang" } };


7. Spread Operator untuk Array
Gabungkan dua array [1,2,3] dan [4,5,6] jadi satu array baru.

8. Spread Operator untuk Objek
Gabungkan dua objek:

const a = { nama: "Ali" };
const b = { umur: 18 };

🟡 LEVEL MEDIUM (9–17) — Aplikasi Praktis

9. Rest Parameter pada Function
Buat fungsi jumlah(...angka) yang menjumlahkan semua argumen.

10. Gunakan Destructuring di Parameter Function
Buat fungsi yang menerima objek {nama, umur} dan menampilkan kalimat “Nama saya ..., umur saya ...”.

11. Gunakan Rest pada Array
Pisahkan nilai pertama dan sisanya dari array [10, 20, 30, 40].

12. Gunakan Spread untuk Clone Array
Buat salinan dari array const arr = [1, 2, 3] tanpa referensi yang sama.

13. Gabungkan Data Siswa
Gabungkan:

const data1 = { nama: "Budi", kelas: "XII" };
const data2 = { jurusan: "IPA", nilai: 90 };


14. Gunakan Spread untuk Menambahkan Item Baru
Tambahkan "apel" ke array const buah = ["mangga", "jeruk"];.

15. Destructuring Array dari Function Return
Fungsi getNilai() mengembalikan [85, 90, 95]. Ambil hanya dua pertama.

16. Gunakan Rest Parameter untuk Hitung Rata-rata
Fungsi rataRata(...nilai) menghitung rata-rata berapa pun jumlah inputnya.

17. Gunakan Spread untuk Menyalin Objek Lalu Ubah Nilai Tertentu
Ambil objek siswa dan ubah properti nilai menjadi 100 tanpa mengubah data asli.

🔵 LEVEL HARD (18–25) — Studi Kasus Kompleks

18. Destructuring di Dalam Loop
Dari array objek:

const siswa = [
  { nama: "Rama", nilai: 90 },
  { nama: "Ali", nilai: 85 }
];


Gunakan destructuring di dalam .forEach() untuk cetak “Rama — 90”.

19. Combine Spread + Rest dalam Function
Buat fungsi gabungDanHitung(arr1, arr2, ...angkaTambahan) yang menggabungkan 2 array lalu menambah semua angka tambahan.

20. Nested Destructuring dari Data API
Ambil city dari:

const data = { user: { address: { city: "Jakarta", zip: 12345 } } };


21. unakan Destructuring untuk Tukar Nilai
Tukar isi variabel a dan b tanpa variabel sementara.

22. Gunakan Spread untuk Menyebar Nilai dalam Array Function
Misal Math.max(...angka) — buat program yang mengambil nilai tertinggi dari input array menggunakan spread.

23. Gunakan Rest untuk Mengelompokkan Sisa Properti
Dari objek:

const siswa = { nama: "Rafi", nilai: 90, kelas: "XI", jurusan: "IPA" };


Ambil nama dan sisanya jadikan satu objek lain info.

24. Gabungkan Data Array Objek dengan Spread
Gabungkan dua array siswa dan urutkan berdasarkan nilai tertinggi.

25. Mini Project — Evaluasi Siswa

Gunakan destructuring untuk ambil nama & jurusan

Gunakan spread untuk tambah properti rataRata: 88

Gunakan rest operator untuk menghitung rata-rata nilai ujian

Cetak hasil akhir:

#1 Ahmad (IPA) — Rata-rata 88