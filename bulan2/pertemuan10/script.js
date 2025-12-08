
const tag1 = document.getElementById("tag1")


let dataSantri1 = ["santri1", "santri2","santri3","santri4","santri5"]

let [san1,,,,san5] = dataSantri1

let dataSantri2 = {
    nama1: "santri obj 1",
    nama2: "santri obj 2",
    nama3: "santri obj 3",
    nama4: "santri obj 4",
    nama5: "santri obj 5"
}

let {nama1,nama2,nama3,nama4,nama5} = dataSantri2;



tag1.innerHTML += `<h1>${san1}</h1>`
// tag1.innerHTML += `<h1>${san2}</h1>`
// tag1.innerHTML += `<h1>${san3}</h1>`
// tag1.innerHTML += `<h1>${san4}</h1>`
tag1.innerHTML += `<h1>${san5}</h1>`

tag1.innerHTML += `<h1>${nama1}</h1>`
tag1.innerHTML += `<h1>${nama2}</h1>`
tag1.innerHTML += `<h1>${nama3}</h1>`
tag1.innerHTML += `<h1>${nama4}</h1>`
tag1.innerHTML += `<h1>${nama5}</h1>`

// SPREAD OPERATOR
let axampleSpread1 = [10,20,30,40,50,]
let exampleSpread2 = [...axampleSpread1,60,70,80,90,100 ]

console.log(exampleSpread2);

let user1 = { nama: "cahya", umur: 19}
let user2 = {...user1, status: "aktif"}

console.log(user2);

function hitung(...angka){
    return angka.reduce((a,b) => a+b)
}

console.log(hitung(1,2,3))

// REST OPERATOR
function fRest( ...item){
    tag1.innerHTML  
    return item
}

console.table(fRest ("Item 1","Item2 ","Item 3","Item 4","Item 5"))