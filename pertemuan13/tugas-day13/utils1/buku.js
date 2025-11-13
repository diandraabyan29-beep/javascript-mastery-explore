export default{
    hitungHalaman: (tebal,halaman) => tebal/halaman,
    cariBuku: (judulBuku, cetakan ) => judulBuku.find(m => m.cetakan === cetakan),
    bukuMahal: (judulBuku) => judulBuku.map(m => m.kategori > 1000000)
}

export const judul = (teks) => teks[0].judul
export const penulis = (teks) => teks[0].penulis