"use strict"

let btnCambiar = document.querySelectorAll(".btn-cambiar");
for(let i = 0 ; i < btnCambiar.length; i++){
    btnCambiar[i].addEventListener("click", function(e){
        let div = this.nextElementSibling;
        div.classList.toggle("cambiar")
    });
}

