"use strict"

let btnAgregar= document.querySelector("#btnAgregar").addEventListener("click", agregar);
let btnMostrar= document.querySelector("#btnMostrar").addEventListener("click", mostrar);

let arreglo = []
cargarTabla();

function agregar(e){
e.preventDefault();
let inpProducto = document.querySelector("#producto")
let inpPrecio = document.querySelector("#precio")

let productos = {
    producto: inpProducto.value,
    precio: inpPrecio.value,
}

arreglo.push(productos);
}

function mostrar(e){ 
    e.preventDefault();
    let tabla = document.querySelector("#tabla");

    tabla.innerHTML = ""
    cargarTabla()
    for (let i = 0; i < arreglo.length; i++) {
        tabla.innerHTML += `<tr>
                                <td>${arreglo[i].producto}</td>
                                <td>${arreglo[i].precio}</td>
                            </tr>`
        
    }
}

function cargarTabla(){
    tabla.innerHTML += `<thead>
                            <td>Producto</td>
                            <td>Precio</td>
                        </thead>` 

}