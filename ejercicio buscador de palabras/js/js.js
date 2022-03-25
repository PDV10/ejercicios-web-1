"use strict";

let btnGuardar = document.querySelector("#agregar");
btnGuardar.addEventListener("click", guardarPalabra);

let buscador = document.querySelector("#buscador");
buscador.addEventListener("keyup", mostrar);

let lista = document.querySelector("#listaPalabras");

let modelo = [];

function guardarPalabra(){
    let agregar= document.querySelector("#input");
    modelo.push(agregar.value);
    console.log(modelo)
    agregar.value = "" ;
}

function mostrar(){
    let palabraBuscada = buscador.value;
    lista.innerHTML = " ";

   for(let i = 0; i<modelo.length; i++){
        modelo[i];
        if(palabraBuscada.length > 2 && modelo[i].includes(palabraBuscada)){    // con  > 2 : forzamos que aparezcan palabras recien despues de la tercer letra
            lista.innerHTML += `<li>${modelo[i]}</li>`;                         // con .includes() incluimos todas las letras que forman la palabra
        }                                                                       // ej: si agregamos mama, solo con poner mam ya aparece 
   }
}

