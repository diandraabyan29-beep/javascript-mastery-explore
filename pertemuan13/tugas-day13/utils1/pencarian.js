export const cariProduk = (daftar, keyword) => {
    return daftar.find(p => p.nama.toLowerCase().includes(keyword.toLowerCase()));
};
