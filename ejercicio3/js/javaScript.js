"use strict";

let btnCambiar = document.querySelector("#cambiar");
btnCambiar.addEventListener("click", cambiar);


function cambiar(){
    
    let titulo = document.querySelector(".titulo");
    titulo.classList.toggle("agregado");
}

