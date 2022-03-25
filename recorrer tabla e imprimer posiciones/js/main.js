"use strict"

let tabla = document.querySelector("#tabla");

let btnMostrar = document.querySelector("#btnMostrar");
btnMostrar.addEventListener("click", mostrar);

let btnAgregar = document.querySelector("#agregar");
btnAgregar.addEventListener("click", agregar);

cargarTabla();

let ArregloTabla = [
    {
        "nombre": "Barcelona FC",
        "puntos": 98,
        "pj": 35,
        "pg": 32,
        "pe": 2,
        "pp": 1
    },
    {
        "nombre": "Atlético de Madrid", 
        "puntos": 74,
        "pj": 35,
        "pg": 22,
        "pe": 8,
        "pp": 5, 
    },
    { 
        "nombre": "Boca",
        "puntos": 55,
        "pj": 33,
        "pg": 33,
        "pe": 0,
        "pp": 0,
    },
    {
        "nombre": "RiBer",
        "puntos": 0,
        "pj": 35,
        "pg": 0,
        "pe": 0,
        "pp": 35,
    },
    {
        "nombre": "Racing",
        "puntos": 45,
        "pj": 32,
        "pg": 21,
        "pe": 21,
        "pp": 12,
    }
];

function agregar(e){
e.preventDefault(); 
   
let nombre = document.querySelector("#nombre");
let puntos = document.querySelector("#puntos");
let pj = document.querySelector("#pj");
let pg = document.querySelector("#pg");
let pe = document.querySelector("#pe");
let pp = document.querySelector("#pp");

    let equipo = {
        "nombre": nombre.value,
        "puntos": puntos.value,
        "pj": pj.value,
        "pg": pg.value,
        "pe": pe.value,
        "pp": pp.value, 
    }

    ArregloTabla.push(equipo);
}

function mostrar(e){
e.preventDefault();

    tabla.innerHTML = " ";
    cargarTabla();

    for(let i = 0; i<ArregloTabla.length; i++){
        tabla.innerHTML += `<tr>
                                <td>${ArregloTabla[i].nombre}</td>
                                <td>${ArregloTabla[i].puntos}</td>
                                <td>${ArregloTabla[i].pj}</td>
                                <td>${ArregloTabla[i].pg}</td>
                                <td>${ArregloTabla[i].pe}</td>
                                <td>${ArregloTabla[i].pp}</td>
                            </tr>`;
    }
}

function cargarTabla(){
    tabla.innerHTML += `<thead>
                            <td>Nombre</td>
                            <td>Puntos</td>
                            <td>Partidos Jugados</td>
                            <td>Partidos Ganados</td>
                            <td>Partidos Empatados</td>
                            <td>Partidos Perdidos</td>
                        </thead>`;
}