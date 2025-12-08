// modules/prayerSchedule.js

import { 
    searchCity, getDailySchedule, getMonthlySchedule 
} from "./api.js";

import { 
    getTodayForApi, getTodayForDisplay, getNextPrayer 
} from "./utils.js";

import { appState } from "../main.js";

const input = document.querySelector(".search-row input");
const btn = document.querySelector(".search-row .btn");

const headerDate = document.querySelector(".prayer-header-main");
const headerLocation = document.querySelector(".prayer-header-sub");

const listTimes = document.querySelectorAll(".prayer-time");
const labels = document.querySelectorAll(".prayer-label");

const nextPill = document.querySelector(".pill h2");

btn.addEventListener("click", async () => {
    const keyword = input.value.trim();
    if (!keyword) return alert("Masukkan nama kota!");

    btn.textContent = "Mencari...";
    btn.disabled = true;

    try {
        const kota = await searchCity(keyword);

        if (kota.data.length === 0)
            throw new Error("Kota tidak ditemukan");

        const { id, lokasi, daerah } = kota.data[0];

        appState.cityId = id;
        appState.cityName = lokasi;

        const todayApi = getTodayForApi();
        const jadwal = await getDailySchedule(id, todayApi);

        headerDate.textContent = `Hari ini • ${getTodayForDisplay()}`;
        headerLocation.textContent = `${lokasi} — ${daerah}`;

        const data = jadwal.data.jadwal;

        const fields = ["imsak","subuh","terbit","dhuha","dzuhur","ashar","maghrib","isya"];

        fields.forEach((f, i) => {
            if (listTimes[i]) listTimes[i].textContent = data[f];
            if (labels[i]) labels[i].textContent = f.charAt(0).toUpperCase() + f.slice(1);
        });

        const next = getNextPrayer(data, new Date());
        nextPill.textContent = `Sholat berikutnya: ${next.nama} (${next.waktu})`;

        loadMonthly(id);

    } catch (err) {
        alert(err.message);
    }

    btn.textContent = "Pilih Lokasi";
    btn.disabled = false;
});

async function loadMonthly(cityId, year, month) {
  const monthData = await getMonthlySchedule(cityId, year, month);

  if (!monthData || !monthData.data || !Array.isArray(monthData.data.jadwal)) {
    console.error("Format data salah:", monthData);
    return;
  }

  const list = monthData.data.jadwal;

  const minggu1 = list.slice(0, 7);
  const minggu2 = list.slice(7, 14);
  const minggu3 = list.slice(14, 21);
  const minggu4 = list.slice(21, 28);

  renderWeeklyTable("week1", minggu1);
  renderWeeklyTable("week2", minggu2);
  renderWeeklyTable("week3", minggu3);
  renderWeeklyTable("week4", minggu4);
}
