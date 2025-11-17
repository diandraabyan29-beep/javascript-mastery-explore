function sapaUser(nama,...f1){
    let a = f1.map(fn => fn ("INI PARAM")).join(" ")
    return(`hai ${nama}, ${a}`)
}

function setelahSapa(param){
    return param
}

function terimaKasih(){
    return "Terima kasih semua"
}

console.log(sapaUser("Semua",setelahSapa,terimaKasih));


function halo(nama){
    console.log(`Halo ${nama}`);
}

function prosesUser(callback) {
    console.log("Memproses user...");
    callback("Saya")
}
prosesUser(halo)

console.log("1. Ini Log");

setTimeout(function(){
    console.log("2. Ini Telat");
},10000)

console.log("3. Akan ke dua");
