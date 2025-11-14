export const proses = (daftarMenu) => {
    return daftarMenu.sort((a, b) => a.harga - b.harga);
};
