'use strict'

let persona = [];

let total = 0;

let nombre = document.getElementById("inp-nombre");
let apellido = document.getElementById("inp-apellido");
let dni = document.getElementById("inp-dni");
let inpTotal = document.getElementById("total");

let lista = document.getElementById("lista-personas");

let btnAgregar = document.getElementById("btn-agregar");
let btnMostrar = document.getElementById("btn-mostrar");


btnAgregar.addEventListener("click",function(e) {
    e.preventDefault();
    addPersona(persona);
    cleanInputs();
})

btnMostrar.addEventListener("click",function(e) {
    e.preventDefault();
    showPersonas(lista,persona);
    cleanInputs();
})

function addPersona(arrPersona){
    let currentPersona = {
        "Nombre": nombre.value,
        "Apellido": apellido.value,
        "DNI": Number(dni.value)
    }
    persona.push(currentPersona);
    total++;
    inpTotal.innerHTML = `Total: ${total}`;
}

function cleanInputs(){
    nombre.value = "";
    apellido.value = "";
    dni.value = "";
}

function showPersonas(listaPersona, arrPersona){
    listaPersona.innerHTML = "";
    arrPersona.forEach(persona => {
        let liNombre = document.createElement("li");
        liNombre.innerHTML = persona.Nombre;
        let liApellido = document.createElement("li");
        liApellido.innerHTML = persona.Apellido;
        let liDni = document.createElement("li");
        liDni.innerHTML = persona.DNI;

        listaPersona.appendChild(liNombre);
        listaPersona.appendChild(liApellido);
        listaPersona.appendChild(liDni);
        let linea = document.createElement("hr")
        listaPersona.appendChild(linea);
    })
}

