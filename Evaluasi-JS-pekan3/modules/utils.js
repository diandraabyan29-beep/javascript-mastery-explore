

export function padZero(n) {
    return n < 10 ? "0" + n : n;
}

export function getTodayForApi() {
    const d = new Date();
    const y = d.getFullYear();
    const m = padZero(d.getMonth() + 1);
    const day = padZero(d.getDate());
    return `${y}-${m}-${day}`;
}

export function getTodayForDisplay() {
    const d = new Date();

    const hari = [
        "Minggu", "Senin", "Selasa", "Rabu",
        "Kamis", "Jumat", "Sabtu"
    ];

    const bulan = [
        "Januari", "Februari", "Maret", "April",
        "Mei", "Juni", "Juli", "Agustus",
        "September", "Oktober", "November", "Desember"
    ];

    const h = hari[d.getDay()];
    const t = padZero(d.getDate());
    const b = bulan[d.getMonth()];
    const y = d.getFullYear();

    return `${h}, ${t} ${b} ${y}`;
}

export function getNextPrayer(jadwal, now) {
    const urutan = ["Subuh", "Dzuhur", "Ashar", "Maghrib", "Isya"];

    for (let nama of urutan) {
        const time = jadwal[nama.toLowerCase()]; 
        if (!time) continue;

        const [hh, mm] = time.split(":");
        const t = new Date(now);
        t.setHours(hh, mm, 0);

        if (t > now) return { nama, waktu: time };
    }

    return { nama: "Selesai semua", waktu: "--:--" };
}

export async function safeFetch(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Gagal fetch API: " + url);
    return res.json();
}

export function getThisYearMonth() {
    const d = new Date();
    return {
        year: d.getFullYear(),
        month: d.getMonth() + 1
    };
}