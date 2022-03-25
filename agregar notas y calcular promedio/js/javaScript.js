"use stict";
let div = document.querySelector("#div");
let input = document.querySelector("#input");
let btnAgregar = document.querySelector("#btn-agregar");
let btnPromedio = document.querySelector("#btn-promedio");
let parrafo = document.querySelector("#promedio");
btnAgregar.addEventListener("click", agregar);
btnPromedio.addEventListener("click", promedio);

let notas = [];
let suma = 0;


function agregar() {

    if (!(isNaN((parseInt(input.value, 0))))) {
        notas.push(parseInt(input.value, 0));
        let p = document.createElement("p");
        p.innerText = input.value;
        div.appendChild(p);
    }

    input.value = "";
}

function promedio() {
    
    for(let i = 0; i<notas.length; i++){
        suma += notas[i]
    }

    let promedio = suma/notas.length;
    console.log(suma)
    parrafo.innerHTML =`el promedio es : ${promedio}` ;
    div.innerHTML = "";
    suma = 0;
}