
import { safeFetch } from "./utils.js";

const BASE = "https://api.myquran.com/v2";

export function searchCity(keyword) {
    return safeFetch(`${BASE}/sholat/kota/cari/${keyword}`);
}

export function getCityById(id) {
    return safeFetch(`${BASE}/sholat/kota/id/${id}`);
}

export function getDailySchedule(cityId, dateString) {
    return safeFetch(`${BASE}/sholat/jadwal/${cityId}/${dateString}`);
}

export function getMonthlySchedule(cityId, year, month) {
    return safeFetch(`${BASE}/sholat/jadwal/${cityId}/${year}/${month}`);
}

export function getRandomAyat() {
    return safeFetch(`${BASE}/quran/ayat/acak`);
}

export function getRandomHaditsArbain() {
    return safeFetch(`https://api.haditsarbain.com/arbain/acak`);
}

export function getRandomDoa() {
    return safeFetch(`${BASE}/doa/acak`);
}

export function getRandomAsmaulHusna() {
    return safeFetch(`${BASE}/asmaulhusna/acak`);
}
