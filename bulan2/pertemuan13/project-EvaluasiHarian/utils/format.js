export function judul(teks) {
  const kataArray = teks.split(" ");

  const hasil = kataArray.map(kata => 
    kata.charAt(0).toUpperCase() + kata.slice(1)
  ).join(" "); 

  return hasil; 
}
