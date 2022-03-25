"use strict"

let btnCambiar = document.querySelector("#btn-cambiar");
btnCambiar.addEventListener("click", cambiar)

 let div = document.querySelector("#div");

function cambiar(){
    div.classList.toggle("cambiar");
}