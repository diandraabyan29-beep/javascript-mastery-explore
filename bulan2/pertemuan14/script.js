const user = {nama: "Ahmad", umur: 20}
const jsonData = JSON.stringify(user)

console.log(jsonData);

const jsonString = `{"nama" : "Ahmad", "umur":20}`
const userObj = JSON.parse(jsonString)

console.log(userObj.nama);

const cekData = {
    "status": "success",
    "data": {
        "id": 1,
        "produk": "Laptop",
        "harga": 15000000
    }
}

localStorage.setItem("user", JSON.stringify({nama: "Andi"}))

console.log(cekData);


