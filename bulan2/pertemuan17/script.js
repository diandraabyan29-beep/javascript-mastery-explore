function getUser(...datas){
    return new Promise((suc,er)=>{
        setTimeout(()=>{
            if(DataTransfer.length){
                er("Data kurang dari 3")
            }else{
                suc(`OK data di terima ${datas}`)
            }
        },2000)
    })
}

async function showUser(){
    const user = await getUser("data1","data2","data3","data4","data5")
    console.log(`user: ${user}`)
}
showUser()

// 🟢 Easy Level (7 Study Case)
// 1. Menunggu Promise sederhana
async function heloo(){
    return "Hello World"
}
heloo().then(console.log)

// 2. Menunggu delay dengan setTimeout (dibungkus Promise)
function delay(ms){
    return new Promise( resolve => setTimeout(resolve('test'), ms))
}

async function run(){
    console.log("mulai");
   await delay(1000);
    console.log("Selesai setelah 1 detik" );   
}

run()


// 3. Fetch data JSON sederhana
async function getUser() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let user = await res.json();
  console.log(user.name);
}
getUser();

// 4. Error handling sederhana
async function broken() {
  try {
    let res = await fetch("https://wrong.url");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error tertangkap:", err.message);
  }
}
broken();

// 5. Menggunakan await untuk operasi matematika dengan Promise
function tambah(a, b) {
  return new Promise(resolve => resolve(a + b));
}

async function hitung() {
  let hasil = await tambah(5, 7);
  console.log("Hasil:", hasil);
}
hitung();

// 6. Loop dengan await
async function loop() {
  for (let i = 1; i <= 3; i++) {
    await new Promise(r => setTimeout(r, 500));
    console.log("Step", i);
  }
}
loop();

// 7. Return value dari async function
async function greet() {
  return "Halo Diandra!";
}
(async () => {
  let pesan = await greet();
  console.log(pesan);
})();

// ===========================================

async function getSemuaSurat() {
    try{
        const response = await fetch ("https://api.myquran.com/v2/quran/surat/semua")
        const semuaSurat = await response.json()
        console.log(semuaSurat.data[100].audio_url);
        
    }catch(e){
        console.log(`Hasil Error: ${e.message}`);
    }
}

getSemuaSurat()


// 🟡 Medium Level (7 Study Case)
// 8. Multiple await berurutan
async function proses() {
  let a = await Promise.resolve(10);
  let b = await Promise.resolve(20);
  console.log("Total:", a + b);
}
proses();

// 9. Parallel dengan Promise.all
async function parallel() {
  let [user, post] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts/1").then(r => r.json())
  ]);
  console.log(user.name, "-", post.title);
}
parallel();


// 10. Error di salah satu Promise
async function testError() {
  try {
    let [ok, fail] = await Promise.all([
      Promise.resolve("Berhasil"),
      Promise.reject("Gagal")
    ]);
    console.log(ok, fail);
  } catch (err) {
    console.error("Error:", err);
  }
}
testError();

// 11. Async function dalam event handler
document.querySelector("#btn").addEventListener("click", async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let todo = await res.json();
  console.log(todo.title);
});

// 12. Chaining async function
async function step1() { return 5; }
async function step2(x) { return x * 2; }

async function run() {
  let hasil = await step2(await step1());
  console.log("Hasil:", hasil);
}
run();

// 13. Try...catch dengan finally
async function coba() {
  try {
    throw new Error("Ada masalah");
  } catch (err) {
    console.error("Ditangkap:", err.message);
  } finally {
    console.log("Selesai blok try-catch");
  }
}
coba();


// 14. Async function di dalam class
class Api {
  async getData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    return await res.json();
  }
}

(async () => {
  let api = new Api();
  let data = await api.getData();
  console.log(data.title);
})();





























