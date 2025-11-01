function umur() {
    let umur = prompt("Berapa umur Anda?");

    if (umur < 13) {
        console.log("Anak-anak");
    } else if (umur >= 13 && umur < 20) {
        console.log("Remaja");
    } else if (umur >= 20 && umur < 45) {
        console.log("Dewasa");
    } else if (umur >= 45) {
        console.log("Lansia");
    } else {
        console.log("Masukkan umur yang valid!");
    }
}


function nilai() {
    let nilai = prompt ("Nilai Apa Yang Kamu Dapatkan?")

    if( nilai >= 95){
         console.log("A")
    } else if (nilai >= 85 && nilai < 95 ){
        console.log("B")
    } else if (nilai >= 75 && nilai < 85){
        console.log("C")
    } else if (nilai < 75){
        console.log("D")
    } else {
        console.log("Masukan Nila dengan tepat")
    }  
       
    
}

function harian(){
    alert ("Apa Yang Akan Kamu Lukukan Di hari Ini?")
    let harian = prompt ("Tentukan Harinya")

    switch (harian) {
        case "senin":
            console.log("Hari Ini Jadwal Kamu Pakai Baju Putih")
            break;
        case "selasa":
            console.log("Kamu Akan Belajar Codding")
            break;
        case "rabu":
            console.log("Harus Menggunakan Batik")
            break;
        case "kamis":
            console.log("Kamu Harus Bersiap")
            break;
        case "jumaat":
            console.log("Persiapan Sholat Juma'at")
            break 
        case "sabtu":
            console.log("Mencuci Baju")
            break;
        case "minggu":
            console.log("Istirahat")
            break;
    
        default:
            break;
    }
}


function cekrank(){
    let levelrank = prompt ("Apa Rank Anda Sekarang")
    let levelgame = prompt ("Level Berapa Anda Anda Sekarang")

    if (levelrank === 'warior'){
        console.log("Pengguna Warior");

        if (levelgame < 5){
            console.log("New Bie")
        }else if (levegame >= 5 && levelgame < 10){
            console.log("pemula")
        }else {
            console.log("GAAJE LU")
        }
    

    } else if (levelrank === 'master'){
        console.log("Pengguna Master")

        if(levelgame >= 10 && levelgame < 15){
            console.log('Oke Lah')
        }else if(levelgame >= 15 && levelgame < 20){
            console.log('lumayan')
        }else {
            console.log('SENG GENAH')
        }
        
        
    }else if(levelrank === 'grand master'){
        console.log("Pengguna Grand Master")

        if(levelgame >= 25 &&  levelgame < 30 ){
            console.log('Semangat Ya')
        }else if(levelgame >= 35 && levelgame < 40){
            console.log('Ayo Bentar Lagi')
        }else{
            console.log('Ayo Jangan Bercanda')
        }


    }else if (levelrank === 'epick'){
        console.log('Pengguna Epick')

        if(levelgame >= 45 && levelgame < 50){
            console.log('Hebat')
        }else if(levelgame >= 55 && levelgame < 60){
            console.log('Eidan')
        }else{
            console.log('Serius')
        }


    }
    
}
    
    
