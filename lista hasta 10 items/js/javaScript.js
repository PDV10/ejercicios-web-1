"use strict";

let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let input = document.querySelector("#input");

let contenidoLista = [];

function agregar(){
    if(input.value === ""){
        error.innerHTML = "no se puede agregar un elemento vacio";
    }
    else if(contenidoLista.length < 10){
        error.innerHTML = "";
        let valido = comparar();
        if (!valido){
            contenidoLista.push(input.value);
        } 
        mostrar();
    }
    else{
        let error = document.querySelector("#error");
        error.innerHTML = "ya se agregaron 10 palabras";
    }    

   input.value ="";
}   

function mostrar(){
    let lista = document.querySelector("#lista");
    
    lista.innerHTML = " ";
    for (let i = 0; i < contenidoLista.length; i++) { 
        lista.innerHTML += `<li>${contenidoLista[i]}</li>`;
    }
} 

function comparar(){
    for (let i = 0; i < contenidoLista.length; i++) {
        if(input.value === contenidoLista[i]){
            error.innerHTML = "no se pueden agregar 2 palabras iguales";
            return true;
        }
    }
    return false;
}
