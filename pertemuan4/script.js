
// FORM F1
document.getElementById("F1").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("1")
    const firstNumber = document.getElementById("firstNumber").value;
    const secondNumber = document.getElementById("secondNumber").value;
    const operator = document.getElementById("operator").value;

    if (!firstNumber || !secondNumber || !operator) {
        alert("Masukan Angka / Opeator");
    } else {
        f1(firstNumber, secondNumber, operator)
    }

});


// Default Notification
function togglePopup(no) {
    document.getElementById(`popupModal${no}`).classList.toggle("hidden");
}

function clearOutput() {
    document.getElementById("outputBox").innerText = "";
}

function addNewPharaghraph() {
    const random = `\n======================\n`;
    const output = document.getElementById("outputBox");
    output.innerText += `${random}`;
}

let dataSantri = [
    "bambang",
    21,
    true,
    "dodi",
    "euis",
    "febri",
    "gusti",
    "hani",
    "indri",
    "joko",
    "karti",
    "lala",
    "mama",
    "nana",
    "ocha",
    "pipi",
    "qori",
    "rani",
    "siti",
    "tata",
    "uusi",
    "vivi",
    "wati",
    "xeni",
    "yuni",
    "zaki",
]
let dataSantri2 = [
    'Data1', "Data2", 'Data3', 'Data4', 'Data5']

function logggingNama(nama, alamat, rek) {
    let result = `Nama Kamu ${nama} \n Alamat kamu di ${alamat} \n Rek kamu ${rek}`;
    // return "Ini Hasil Return"
    return result
}

// console.log(logggingNama("Bambang", "jakarta", "09876654321"));



// =======================================

// Deklartif
function f1(angkaPertama, angkaKedua, operator) {
    togglePopup("1");
    let result;
    const a = Number(angkaPertama);
    const b = Number(angkaKedua);

    if (isNaN(a) || isNaN(b) && !a || !b) {
        console.log("Input harus berupa angka");
        return;
    }

    switch (operator) {
        case "*":
            result = a * b;
            break;
        case "+":
            result = a + b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            console.log("Operator tidak valid");
            return;
    }

    const output = document.getElementById("outputBox");
    output.innerText += `F1: Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}`;
    togglePopup("1");
    return result;
}

// Ekpresif
// const f1 = function (angkaPertama, angkaKedua, operator) {
//     togglePopup("1");
//     let result;
//     const a = Number(angkaPertama);
//     const b = Number(angkaKedua);

//     if (isNaN(a) || isNaN(b) && !a || !b) {
//         console.log("Input harus berupa angka");
//         console.log(typeof a);
//         console.log(typeof b);

//         return;
//     }

//     switch (operator) {
//         case "*":
//             result = a * b;
//             break;
//         case "+":
//             result = a + b;
//             break;
//         default:
//             console.log("Operator tidak valid");
//             return;
//     }

//     const output = document.getElementById("outputBox");
//     output.innerText += `Hasil dari ${angkaPertama} ${operator} ${angkaKedua} = ${result}`;
//     togglePopup("1");
//     return result;
// }
// arrow function
// const funct1 =  (angkaPertama, angkaKedua,) => angkaPertama * angkaKedua;




// LOOPING 
function f3(data) {
    for (start = 0; start < data.length; start++) {
        if (start % 2 != 0) {
            console.log(`${start + 1} Genap >>> ${data[start]}`);
            // console.log((start + 1) + " Genap >>>" + data[start]);
        } else {
            console.log(`${start + 1} Ganjil >>> ${data[start]}`);
        }
    }
}

// f3(dataSantri2)
// console.log(`\n ========== \n`);
// f3(dataSantri)

// FORM F2
document.getElementById("F2").addEventListener("submit", function (e) {
    e.preventDefault();
    togglePopup("2");

    const nama = document.getElementById("nama").value.trim();
    const alamat = document.getElementById("alamat").value.trim();

    if (!nama || !alamat) {
        alert("Nama dan alamat wajib diisi.");
        return;
    }

    f2(nama, alamat);
});

function f2(nama, alamat) {
    const output = document.getElementById("outputBox");
    output.innerText += `F2: Halo ${nama}, kamu tinggal di ${alamat}\n`;
}


// FORM F3
document.getElementById("F3").addEventListener("submit", function(e){
    e.preventDefault();
    togglePopup("3");

    const hoby = document.getElementById("Hoby").value.trim();
    const favorit = document.getElementById("Favorit").value.trim();

    if (!hoby || !favorit){
        alert("Hobi & favorit wajib diisi");
        return;
    }

    f3(hoby, favorit);
});

function f3(hoby, favorit){
    const output = document.getElementById("outputBox");
    output.innerText += `F3: Hobi saya adalah ${hoby}, dan favorit saya adalah ${favorit}\n`;
}

 
// FORM F4
document.getElementById("F4").addEventListener("submit", function(e){
    e.preventDefault();
    togglePopup("4");

    const makanan = document.getElementById("Makanan").value.trim();
    const minuman = document.getElementById("Minuman").value.trim();

    if(!makanan || !minuman){
         alert("Makanan dan minuman favorit wajib diisi!");
        return;
    }

    f4(makanan, minuman)
})

function f4(makanan, minuman){
    const output = document.getElementById("outputBox");
    output.innerText += `F4: Makanan Favorit saya ${makanan},dan Minuman Favorit saya ${minuman}\n`
}

// FORM F5
document.getElementById("F5").addEventListener("submit", function(e){
    e.preventDefault();
    togglePopup("5");

    const laptop = document.getElementById("Laptop").value.trim();
    const hp = document.getElementById("Hp").value.trim()

    if(!laptop || !hp){
        alert("Apa Laptop Dan Hp Yang Kamu Gunakan")
        return;
    }

    f5(laptop, hp)
})
function f5 (laptop,hp){
    const output = document.getElementById("outputBox")
    output.innerText += `F5: Laptop Yang Saya Gunakan ${laptop},Hp Yang Saya Gunakan ${hp}`
}

// FORM F6
document.getElementById("F6").addEventListener("submit", function(e){
    e.preventDefault();
    togglePopup("6");

    const tempatfavorit = document.getElementById("tempatFavorit").value.trim();

    if (!tempatfavorit) {
        alert("Tempat favorit wajib diisi!");
        return;
    }

    F6(tempatfavorit);
});

function F6(tempatfavorit) {
    const output = document.getElementById("outputBox");
    output.innerText += `F6: Tempat favorit yang paling sering saya kunjungi adalah ${tempatfavorit}\n`;
}

// FORM F7
document.getElementById("F7").addEventListener("submit", function(e){
    e.preventDefault();
    togglePopup("7");

    const motorImpian = document.getElementById("motorImpian").value.trim();

    if (!motorImpian) {
        alert("Motor impian wajib diisi!");
        return;
    }

    F7(motorImpian);
});

function F7(motorImpian) {
    const output = document.getElementById("outputBox");
    output.innerText += `F7: Motor impian yang ingin saya miliki adalah ${motorImpian}\n`;
}


// FORM F8
document.getElementById("F8").addEventListener("submit", function(e){
    e.preventDefault();
    togglePopup("8");

    const rumahImpian = document.getElementById("RumahImpian").value.trim();

    if (!rumahImpian) {
        alert("Rumah impian wajib diisi!");
        return;
    }

    F8(rumahImpian);
});

function F8(rumahImpian) {
    const output = document.getElementById("outputBox");
    output.innerText += `F8: Rumah impian saya adalah ${rumahImpian}\n`;
}

// FORM F9
document.getElementById("F9").addEventListener("submit", function(e){
    e.preventDefault();
    togglePopup("9");

    const gunungImpian = document.getElementById("gunungImpian").value.trim();

    if (!gunungImpian) {
        alert("Gunung impian wajib diisi!");
        return;
    }

    F9(gunungImpian);
});

function F9(gunungImpian) {
    const output = document.getElementById("outputBox");
    output.innerText += `F9: Gunung impian yang ingin saya daki adalah ${gunungImpian}\n`;
}

// FORM F10
document.getElementById("F10").addEventListener("submit", function(e) {
  e.preventDefault();               
  togglePopup("10");                

  const negaraImpian = document.getElementById("negaraImpian").value.trim();

  if (!negaraImpian) {
    alert("Negara impian wajib diisi!");
    return;
  }

  F10(negaraImpian);
});

function F10(negaraImpian) {
  const output = document.getElementById("outputBox");
  output.innerText += `F10: Negara impian yang ingin saya kunjungi adalah ${negaraImpian}\n`;
}