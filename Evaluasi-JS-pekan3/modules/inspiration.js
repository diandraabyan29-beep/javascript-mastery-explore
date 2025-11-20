

export function initInspirationFeature() {
  const btn = document.getElementById("btnInspire");
  const out = document.getElementById("inspirationOutput");

  if (!btn || !out) {
    console.warn("Elemen inspirasi tidak ditemukan di HTML");
    return; 
  }

  btn.addEventListener("click", () => {
    const list = [
      "Tetap semangat! Allah bersamamu.",
      "Jangan menyerah, hari ini bisa lebih baik.",
      "Sedikit demi sedikit menjadi bukit.",
      "Allah tidak membebani jiwa melebihi kemampuannya."
    ];

    const random = list[Math.floor(Math.random() * list.length)];
    out.textContent = random;
  });
}
