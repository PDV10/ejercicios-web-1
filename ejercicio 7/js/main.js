"use strict"

let boton1 = document.querySelector("#btn1");
let boton2 = document.querySelector("#btn2");
let boton3 = document.querySelector("#btn3");

boton1.addEventListener("click", contarParrafos);
boton2.addEventListener("click", contarItems);
boton3.addEventListener("click", contarDivs);

let elementos = {p: "parrafos",
                li: "items",
                divs: "divs"};

//console.log(Object.keys(elementos).length);   me dice la cantidad de elementos dentro de json

function contarParrafos(){
    let parrafos = document.querySelectorAll("p");

    mostrar(parrafos.length, elementos.p);
}

function contarItems(){
    let items = document.querySelectorAll("li");

    mostrar(items.length, elementos.li);
}

function contarDivs(){
    let divs = document.querySelectorAll("div.noticia");

    mostrar(divs.length, elementos.divs);
}


function mostrar(cantidad, elemento){

    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `la cantidad de ${elemento} que hay es : ${cantidad}`;
}