function login(){
    let email = prompt("Masukan Email")
    let pw = pr("Masukan Password")
    if(!email || !pw ){
        alert(" Email atau Password Belom Di Isi")// harus mengisi Email Dan Password

    }else if(email == "saya@email.com" && pw == "112233445566"){
        console.log("login Gagal");// ini Email Dan Password yang harus di gunakan
    }else{
        alert("Emali Atau Password anda Salah");
        console.log("Login Gagal");// ini ketikan Email Atau Password Tidak Diisi Atau salah dengan Eamil dan PW yang sudah di tetapkan
    }

}


function cekAksesPengguna() {
    let statusPengguna = prompt("Apa Status Pengguna Anda")
    let levelAkses = prompt("Apa Level akses Anda")

    if (statusPengguna === 'aktif') {
        console.log("Pengguna aktif terdeteksi");
        
        if (levelAkses === 'admin') {
            console.log("Akses diberikan: Admin memiliki semua hak akses");
        } else if (levelAkses === 'moderator') {
            console.log("Akses diberikan: Moderator memiliki akses terbatas");
        } else {
            console.log("Akses diberikan: Pengguna biasa dengan akses standar");
        }
    } else if (statusPengguna === 'nonaktif') {
        console.log("Pengguna tidak aktif, akses dibatasi");
        if (levelAkses === 'admin') {
            console.log("Namun Admin masih bisa mengakses data");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses data");
        } else {
            console.log("Pengguna biasa tidak bisa mengakses data");
        }
    } else if (statusPengguna === 'banned') {
        console.log("Pengguna diblokir");
        if (levelAkses === 'admin') {
            console.log("Admin juga tidak bisa mengakses");
        } else if (levelAkses === 'moderator') {
            console.log("Moderator tidak bisa mengakses");
        } else {
            console.log("Pengguna biasa sangat dibatasi");
        }
    } else {
        console.log("Status pengguna tidak dikenali, akses ditolak");
    }
}// program ini untuk mengecek apakah pengguna aktif, nonaktif, da benned lalu menetukan hak akses dari setiap akses dan status 

// Contoh pemanggilan fungsi
// cekAksesPengguna('aktif', 'admin');
// cekAksesPengguna('nonaktif', 'moderator');
// cekAksesPengguna('banned', 'user');
// cekAksesPengguna('guest', 'user');
                

// EXAMPLE OF SWITCH

function listmakan(){
    if(confirm("Anda Mau MAkan Apa?")){
        let menu = prompt ("Menu Nomer Berapa anda pilih? \n Pilih Menu Di Bawah Ini\n 1. Mie Ayam : 15.000\n 2. Bakso : 20.000\n 3. Soto : 5.000");

        switch (menu) {
            case "1":
                console.log("Adan Pilih Mie Ayam : 15.000");
                break;
            case "2":
                console.log("Anda Pilih Bakso : 20.000");
                break;
            case "3":
                console.log("Anda Pilih Menu Soto : 5.000")
                break;
            default:
                break;
        }
    }
}// program ini untuk menetukan pilihan kita saat telah di berikan pemilih dan akan muncul walaupun kita hanya memilih nomer atau listnya saja


function f1() {
    
    let condition = 13
    let anotherConditon = 35

    if (condition) {
        /// TRUE
    } else if (anotherConditon) {
        // TRUE
    } else {
        // FALSE
    }
}   