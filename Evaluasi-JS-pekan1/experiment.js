// Experimental
// Tugas 3: => "Buatlah program-program atau fitur-fitur atau sistem-sistem yang dapat berfungsi berdasarkan pengetahuan dan kemampuan coding yang sudah Anda kuasai sejauh ini. semua Program Program tersebut menunjukkan pemahaman Anda secara menyeluruh tanpa ada yang tertinggal sedikitpun."

// 📌 Code/Fitur/Fungsi/Program/Sistem yang persis mirip semisal sudah pernah di gunakan dalam sesi kelas tidak di anggap sebagai orisinil maka nilai akan mempengaruhi

// Contoh Implementasi JavaScript Lanjutan

// 1. Array dan Manipulasi Array
function manipulasiArray() {
    let buah = ["apel", "pisang", "jeruk"];
    buah.push("mangga");
    console.log(buah);
}

// 2. Objek dan Properti
function buatObjek() {
    let mobil = {
        merk: "Toyota",
        model: "Avanza",
        tahun: 2020,
        info: function() {
            return `${this.merk} ${this.model} (${this.tahun})`;
        }
    }
}

// 3. Fungsi dengan Parameter dan Return
function hitungLuasPersegiPanjang(panjang, lebar) {
    return panjang * lebar;
}
console.log(hitungLuasPersegiPanjang(5, 10));

// 4. Looping 
function f3(kelas) {
    for (let i = 1; i <= kelas; i++) {
        if (i % 2 === 0) {}
            console.log(`${i} Genap`);
    } 
}

// 5. var, let, const dengan Scope
function scopeContoh() {
    if (true) {
        var a = "Saya var";
        let b = "Saya let";
        const c = "Saya const";
    }else {
        console.log(a); // Bisa diakses
        console.log(b); // Error: b is not defined
        console.log(c); // Error: c is not defined
    }
}
scopeContoh();
