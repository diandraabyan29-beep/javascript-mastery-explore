const f1 = () => "Ini F1 dari format.js"

function masak(menuUtama, ...pelengkap) {
       return `
Menu utama: ${menuUtama}
Pelengkap: ${pelengkap}
   `     
}



export {f1,masak}