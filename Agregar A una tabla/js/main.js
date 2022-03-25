"use strict"

let btnAgregar = document.getElementById("btn-agregar");
btnAgregar.addEventListener("click", agregar);

let btnVaciar = document.getElementById("btn-vaciar");
btnVaciar.addEventListener("click", vaciar);

let btnEliminar = document.querySelector(".btn-eliminar");

if (btnEliminar) {
    btnEliminar.addEventListener("click", eliminar);
}

let productos = [];

let tabla = document.getElementById("table");

let contador = 0;

function agregar() {
    let producto = document.getElementById("producto").value;
    let precio = document.getElementById("precio").value;

    let j = {
        "producto": producto,
        "precio": precio,
        "id": contador,
    }

    productos.push(j);
    console.log(productos)
    contador++;
    mostrar();
}


function mostrar() {

    tabla.innerHTML = "";

    for (let i = 0; i < productos.length; i++) {
        tabla.innerHTML += `
                            <tr>
                                <td>${productos[i].producto}</td >
                                <td>$${productos[i].precio}</td>
                                <td class="eliminar"><button class="btn-eliminar" atrID="${productos[i].id}">x</button></td>
                            </tr >`
    }


}

function eliminar() {
    console.log("dasd")
}

function vaciar() {
    productos = [];

    tabla.innerHTML = "";
}