let data1 = "aloo semua";
let data2 = 189;
let data3 = true;
let data4 = false;
let data5 = ["nama", 23, true,false,174]
let data6 = {
    nama: "Zaid",
    umur: 17,
    kelas: "XIX",
    asal: "Jauh",
    status: false

}

function f1(...datas){
    let object = {}
    if(!datas){
        for(let i = 0; i < datas.length; i++){
            object[`data${i+1}`] = datas[i]
        }
    }
    return object 
}

console.log(f1("Bambang"));


function f2(...datas){
    let object = {}
    datas.forEach((v,i,a)=>{
        object[`data${i+1}`] = v
    })
    return object

}

console.log(f2("Bambang","Zaid","Andi","Budi"));