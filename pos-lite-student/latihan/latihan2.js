
const f1 = (nama) => nama ? `nama ${nama}` : `nama: Empty`
const f2 = (alamat) => alamat ? `alama ${alamat}` : `alamat: Empty`

const dataNama = (nama = '', alamat = '') => {
    let a = nama
    let b = alamat

    return `${a} | ${b}`
}

console.log(dataNama("Maman","Kidul"));

// =====================================

// ⭐ LEVEL 1 — Dasar: Membuat Elemen Sederhana

const coba = (tag,Attribute,node) => {
    const elemen = document.createElement(tag)
    const teks = document.createTextNode(node)
    elemen.appendChild(teks)
    Object.entries(Attribute).forEach(([k,v])=>{
        elemen.setAttribute(k,v)
    })
    document.body.appendChild(elemen)
} 

coba('p', {}, "Hello Dunia")


// =========================

// ⭐ LEVEL 2 — Atribut Dasar
const coba1 = (tag, Attribute, node) => {
    const elemen = document.createElement(tag)
    const teks = document.createTextNode(node)
    elemen.appendChild(teks)

    Object.entries(Attribute).forEach(([k,v])=>{
        elemen.setAttribute(k, v)
    })

    document.body.appendChild(elemen)
} 

coba1('button', { id: "btn1" }, "Klik Aku")

// =======================

// ⭐ LEVEL 3 — Event Listener

const coba3 = (tag, Attribute, node) => {
    const elemen = document.createElement(tag)
    const teks = document.createTextNode(node)
    elemen.appendChild(teks)

  Object.entries(Attribute).forEach(([k, v]) => {
    if (typeof v === "function") {
      elemen[k] = v
    } else {
      elemen.setAttribute(k, v)
    }
  })

    document.body.appendChild(elemen)

}

coba3('button',{ onclick: () => alert("Halo!") },"Tekan Aku")
coba3('button',{ onclick: () => alert("Halo!") },"Tekan Aku")

// =======================
const coba11 = (tag,Attribute,node) => {
    const elemen = document.createElement(tag)
    const text = document.createTextNode(node)
    elemen.appendChild(text)

  Object.entries(Attribute).forEach(([k,v]) => {
    if (typeof v === "function"){
        elemen[k] = v
    }else{
        elemen.setAttribute(k, v)
    }
  })

    document.body.appendChild(elemen)
}

coba11('button',{ onclick: () => alert("Appa") },"Tekan Aku")

// =========================
 const coba12 = (tag, Attribute, node ) => {
    const elemen = document.createElement(tag)
    const text = document.createTextNode(node)
    elemen.appendChild(text)

    Object.entries(Attribute).forEach(([k,v])=>{
        if(typeof v === "function"){
            elemen [k] = v
        }else {
            elemen.setAttribute(k,v)
        }
    })
    document.body.appendChild(elemen)

 }
 coba12('button',{ onclick: () => alert("Appa") },"JAL DEMEK")

// ================================

// ⭐ LEVEL 4 — Dataset
const coba4 = (tag, Attribute, node) => {
    const elemen = document.createElement(tag)
    const text = document.createTextNode(node)
    elemen.appendChild(text)

    Object.entries(Attribute).forEach(([k,v]) => {
        if (k === "dataset" && typeof v === "object"){
            Object.entries(v).forEach(([dk, dv])=>{
                elemen.dataset[dk] = dv
            })
        }else if(typeof v === "function"){
            elemen [k] =v
        }else{
            elemen.setAttribute(k,v)
        }
    })
    document.body.appendChild(elemen)
}

coba4("div",
  {
    class: 'produk',
    dataset: { id:'A1', nama:'Aqua', harga:'3000' }
  },
  "Produk Aqua")

// ========================================

const coba41 = (tag,Attribute,node)=>{
    const elemen = document.createElement(tag)
    const text = document.createTextNode(node)
    elemen.appendChild(text)

    Object.entries(Attribute).forEach(([k,v])=>{
        if(k === "dataset" && typeof v === "object"){
            Object.entries(v).forEach(([dk,dv])=>{
                elemen.dataset[dk] = dv
            })
        }else if(typeof v === "function"){
            elemen[k] = v

            elemen.setAttribute(k,v)
        }
    })
    document.body.appendChild(elemen)
}

coba41("div",{class:'produk',id:'A2',nama:'Enak',harga:'15000'},"Nama sebuah makanan")

// ======================================
const coba42 = (tag,Attribute,node) => {
    const elemen = document.createElement(tag)
    const text = document.createTextNode(node)
    elemen.appendChild(text)

    Object.entries(Attribute).forEach(([k,v])=>{
        if(k === "dataset" && v === "object"){
            Object.entries(v).forEach(([dk,dv])=>{
                elemen[dk] = dv
            })
        }else if (typeof v === "function"){
            elemen[k] = v
        }else{
            elemen.setAttribute(k,v)
        }
    })
    document.body.appendChild(elemen)
}

coba42("h1",{id:"A3",class:"produk"},"Ini Hanya latihanan dari soal yang diberikan oleh AI")

// =====================================
const coba43 = (tag, Attribute,node) => {
    const elemen = document.createElement(tag)
    const text = document.createTextNode(node)
    elemen.appendChild(text)

    Object.entries(Attribute).forEach(([k,v])=>{
        if(k === "dataset" && v === "object"){
            Object.entries(v).forEach(([dk,dv])=>{
                elemen[dk] = dv
            })
        }else if (typeof v === "function"){
            elemen[k] = v
        }else{
            elemen.setAttribute(k,v)
        }
    })
    document.body.appendChild(elemen)
}

coba43("h2",{id:"A4", class:"prduk"},"Ini masih percobaan belum lancar")

// ================================

// =======================================
// ⭐ LEVEL 5 — Nested Element (Parent + Children)




 function buatElemen(tag, props = {}, ...children) {
    const elemen = document.createElement(tag);

    if (props) {
        Object.entries(props).forEach(([key, value]) => {
            
            if (key.startsWith('on') && typeof value === 'function') {
                const namaEvent = key.substring(2).toLowerCase();
                elemen.addEventListener(namaEvent, value);
            } 
            else if (key === 'className') {
                elemen.className = value;
            } 
            else if (key === 'dataset' && typeof value === 'object') {
                Object.assign(elemen.dataset, value);
            }
            else {
                elemen.setAttribute(key, value);
            }
        });
    }

    children.forEach(anak => {
        if (typeof anak === 'string' || typeof anak === 'number') {
            elemen.appendChild(document.createTextNode(anak));
        } 
        else if (anak instanceof Node) {
            elemen.appendChild(anak);
        }
        else if (Array.isArray(anak)) {
            anak.forEach(c => {
                if (c) elemen.appendChild(c);
            });
        }
    });

    return elemen;
}

 



































