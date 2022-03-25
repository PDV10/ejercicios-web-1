"use strict"
let contenedorImagen = document.querySelector("#contenedor-imagenes");

let array = [
    {"img": "img/1.jpg"},
    {"img": "img/2.jpg"},
    {"img": "img/3.jpg"}
];

for (let i = 0; i< array.length; i++) {
    contenedorImagen.innerHTML += `<img src="${array[i].img}" alt="" class = "img">`
}

let imgs = document.querySelectorAll(".img");
imgs.forEach(img => {
    img.addEventListener('click', ()=>{cambios(img)} );
});

function cambios(imagen){
    console.log("entro");
    imagen.classList.toggle("cambios");
    
}
