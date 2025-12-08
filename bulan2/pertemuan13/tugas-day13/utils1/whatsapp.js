import { pisah as pisahNamaKontat,gabung as gabungDataKotak } from "./kontak.js";

export function prosesKontak(namaLengkap,nomerTelepon){
    const hasilPisah = pisahNamaKontat(namaLengkap)
    const hasilGabung = gabungDataKotak(namaLengkap,nomerTelepon)

    return {
        hasilGabung,
        hasilPisah
    }

}