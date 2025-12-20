// CREATE ELEMENT
const buatElemen = (tag, isi) => {
    const elemen = document.createElement(tag)
    elemen.textContent = isi
    document.body.appendChild(elemen)
}

// CREATE ELEMENT WITH DEFAULT PARAM
const buatElemenButton = (isi = "KLIK") => {
    const button = document.createElement('button')
    const textNode = document.createTextNode(isi)
    button.appendChild(textNode)
    document.body.appendChild(button)
}

// OBJECT ENTRIES
const obj1 = (props = {}) => props // HASIL => { id: 'id1', class: 'class1' }
const obj2 = (props = {}) => Object.entries(props) // HASIL => [ [ 'id', 'id1' ], [ 'class', 'class1' ] ]
const resultObj1 = obj1({ id: "id1", class: "class1" })
const resultObj2 = obj2({ id: "id1", class: "class1" })

// OBJECT ENTRIES WITH FOREACH 
const list1 = (props = {}) => Object.entries(props).map((v, i,) => `I:(${i}) V:(${v})`).join()
const list2 = (props = {}) => Object.entries(props).map(([k, v], i,) => `I:(${i}). K:(${k}) V:(${v})`)
const list3 = (props = {}) => Object.entries(props).map(([k, v], i,) => `I:(${i}). K:(${k}) V:(${v})`).join('\n')
const resultList1 = list1({ id: "id1", class: "class1" }) // Array [] pada Param Value nya : I:(0) V:(id,id1),I:(1) V:(class,class1)
const resultList2 = list2({ id: "id1", class: "class1" }) // TANPA JOIN : [ 'I:(0). K:(id) V:(id1)', 'I:(1). K:(class) V:(class1)' ]
const resultList3 = list3({ id: "id1", class: "class1" }) // DENGAN JOIN : I:(0). K:(id) V:(id1) , I:(1). K:(class) V:(class1)

console.log("================================================"); console.log(resultList1);
console.log("================================================"); console.log(resultList2);
console.log("================================================"); console.log(resultList3);

// CREATE ELEMENT WITH ATRIBUT  

const contohEleman = (tag, isi) => {
    const elemen = document.createElement(tag)
    elemen.textContent = isi
    document.body.appendChild(elemen)
}

contohEleman('p', 'HALO SEMUA')
contohEleman('Button', 'klik disini')

const contohTombol = (isi = "DISINI") => {
    const tombol = document.createElement('button')
    const textNode = document.createTextNode(isi)
    tombol.appendChild(textNode)
    document.body.appendChild(tombol)
}

contohTombol()

const paragraf = (parag) => {
    const elemen = document.createElement('p')
    elemen.textContent = parag
    document.body.appendChild(elemen)
}

paragraf('ini hanya contoh')

const div = document.createElement('div')

div.setAttribute("class", "kotak")
div.style.background = "red"
div.style.padding = "20px"

div.textContent = "INI LATIHAN DISINI DENGAN KOTAK" 

document.body.appendChild(div)

const img = document.createElement('img')

img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-M-CgwcjY0sezGJoy78rRiHdXKBhXabQxvg&s")
img.setAttribute("alt", "Gambar Foto Grafer")
img.setAttribute("width", "150")

document.body.appendChild(img)

const pencet = document.createElement('button')

pencet.setAttribute("id", "tombolKlik")
pencet.setAttribute("claas", "btn-primay")

pencet.textContent = "Klik Disina"

document.body.appendChild(pencet)


const paragraf1 = (parag) => {
    const elemen = document.createElement('h1')
    elemen.textContent = parag
    document.body.appendChild(elemen)
}

paragraf('=================================================')

const buatElemen1 = (tag, artibut) => {
    const elemen = document.createElement(tag)
    elemen.textContent = "INI CONTOH "
    Object.entries(artibut).forEach(([k, v]) => {
        elemen.setAttribute(k, v)
    })
    document.body.appendChild(elemen)

}

buatElemen1('h1', { id: "id1", class: "class1" })
buatElemen1("p", { id: "id2", class: "class2" })

//================================================== 

const buatElemen21 = (tag, node, atribut = {}) => {
    const elemen = document.createElement(tag)
    const text = document.createTextNode(node)
    elemen.append1Child(text)
    Object.entries(atribut).forEach(([k, v]) => {
        elemen.setAttribute(k, v)
    })
    document.body.appendChild(elemen)

}

// buatElemen2('h1', "COBA", { id: "id1", class: "class1", })
// buatElemen2('p', "Bismillah Bisa", { id: "id2", class: "class2" })
// buatElemen2('img')

// const product = { id: 1, name: "Laptop", price: 7000 };

// for (const [k, v] of Object.entries(product)) {
//     console.log(k, ":", v);

// }

// CREATE ELEMENT WITH ATRIBUT
const buatElemen3 = (tag, node, atributs = {}) => {
    const elemen = document.createElement(tag)
    const text = document.createTextNode(node)
    elemen.appendChild(text)
    Object.entries(atributs).forEach(([k, v]) => {
        elemen.setAttribute(k, v)
    })
    document.body.appendChild(elemen)
}

buatElemen3('h1', "BAMBANG NGODING", { id: "tagH1", class: "class3", style: "font-size:70px" })
buatElemen3('button', 'KLik disini', { id: "btn1", })


// const hide = (tag) => document.getElementById(tag).setAttribute('class', "hide")
// const unHide = (tag) => document.getElementById(tag).setAttribute('class', "display")


// if (prompt('ngoding') == "iya") {
//     unHide('tagH1')
// } else {
//     hide('tagH1')
// }


// STEP (Create Elemnent)
const buatTag = (tag) => document.createElement(tag)
/////////////////////////////////////////////////////////////////

// STEP (Create Node)
const buatNode = (node) => document.createTextNode(node)
/////////////////////////////////////////////////////////////////


// STEP (Add Event Listener)
const buatEventListn = (elemen, namEvent, handler) => {
    elemen.addEventListener(namEvent, handler)
}
/////////////////////////////////////////////////////////////////


// STEP (Set Single Attribute)
const buatSatuAttribute = (tag, key, value) => {

    // Validasi untuk EVENT LISTENER
    if (key.startsWith('on') && typeof value === 'function') {
        const namaEvent = key.substring(2).toLowerCase();
        buatEventListn(tag, namaEvent, value)
        return;
    }

    // Untuk ATRIBUT BIASA
    tag.setAttribute(key, value)
}
/////////////////////////////////////////////////////////////////


// STEP (Set Banyak Attribute)
const tanganiBanyakAttribute = (tag, att = {}) => Object.entries(att).forEach(([k, v]) => buatSatuAttribute(tag, k, v))
/////////////////////////////////////////////////////////////////


// STEP (Set Ke Body di HTML)
const addKeBody = (tag) => document.body.appendChild(tag)
/////////////////////////////////////////////////////////////////




// CUSTOM MANIPULASI DALAM MEMBUAT ELEMEN DENGAN BEBRBAGAI DOM
//////////////////////////////////////////////////////
const buatElemen2 = (tag, node, atributs = {}) => {

    let elemen = buatTag(tag)

    if (node) {
        let text = buatNode(node)
        elemen.appendChild(text)
    }

    if (atributs) {
        tanganiBanyakAttribute(elemen, atributs)
    }

    addKeBody(elemen)
}
/////////////////////////////////////////////////////



// REST PARAM
const jumlahkan = (...angka) => angka.reduce((a, b) => a + b)



// CREATE ELEMENT WITH (TAG,ATTRIBUTE,CHILDREN)







// RUANG EKSKUSI PEMANGGILAN BERBAGAI FUNCTION YANG SUDAH DI BUAT
//////////////////////////////////////////////////////////////////////////////////////

buatElemen2('button', 'EL', { id: "1", class: 'neon-glow-btn', style: 'margin:5px', onClick: () => tanyaMauBikinButtonBerapa() })
buatElemen2('button', 'ABYAN', { id: "1", class: 'neon-glow-btn', style: 'margin:5px', onClick: () => abyan() })


///////
const tanyaNama = () => {
    const nama = prompt('SIAPA  KAU?')
    if (nama) {
        alert(`Ouh Anda Adalah si ${nama}`)
    }
}

/////// STUDY CASE ERROR
const tanyaMauBikinButtonBerapa = () => {
    const total = prompt('Mau Bikin Button Berapa cuy?')

    if (total >= 1) {
        for (let i = 0; i < total; i++) {
            buatElemen2('button', `Button Ke ${i + 1}`, { id: `id${i + 1}`, class: 'neon-glow-btn', style: 'margin:5px',onclick:() => alert(`Saya Button Ke ${i+1}`) })
        }
    }
}

const abyan = () => {
    const total = parseInt(prompt('Mau Bikin Button Berapa cuy?'), 10)

    if (total >= 1) {
        for (let i = 0; i < total; i++) {
            buatElemen2('button', `Button ke ${i + 1}`,{id: `${i + 1}`,class: 'neon-glow-btn',style: 'margin:5px,',onclick:() => alert(`Saya Button Ke ${i+1}`)})
        }
    }
}


const btn = document.getElementById('btn1')
btn.addEventListener('click', function () {
    alert('Tombol berhasil Di klik')
})
const btn1 = document.getElementById('tombolKlik')
btn1.addEventListener('click', function () {
    alert('Tombol berhasil Di klik')
})

// CREATE ELEMENT WITH (TAG,ATTRIBUTE,CHILDREN)


function pasangDataset(elemen, datasetObject) {
  // datasetObject misal: { id: '123', role: 'card' }
  Object.assign(elemen.dataset, datasetObject);
}

function prosesSatuProp(elemen, key, value) {
  if (key.startsWith('on') && typeof value === 'function') {
    const namaEvent = key.substring(2).toLowerCase();
    pasangEventListener(elemen, namaEvent, value);
  } else if (key === 'className') {
    pasangClassName(elemen, value);
  } else if (key === 'dataset' && typeof value === 'object') {
    pasangDataset(elemen, value);
  } else {
    elemen.setAttribute(key, value);
  }
}

