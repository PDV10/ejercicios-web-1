"use strict"

let inputProducto = document.querySelector("#producto")
let inputPrecio = document.querySelector("#precio")

let btnAgregar = document.querySelector("#agregar")

let btnObtenerTodos = document.querySelector("#Obtenertodos")
let btnObtenerUno = document.querySelector("#ObtenerUno")

let mensaje = document.querySelector("#mensaje");

const url = "https://60c4b776ec8ef800175e0604.mockapi.io/productos";

btnAgregar.addEventListener("click", function(e){
    e.preventDefault();
    let productos = {
        producto : inputProducto.value,
        precio : parseInt(inputPrecio.value, 10),
    }

    agregar(productos);
})

btnObtenerTodos.addEventListener("click", function(e){
    e.preventDefault();
    let productos = {
        producto : inputProducto.value,
        precio : parseInt(inputPrecio.value, 10),
    }
    
    obtenerTodos(productos)
})


function agregar(productos){
    
    fetch(url,{
        method : "post",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify(productos)
    })
    .then(function(r){
        console.log(r);
        mensaje.innerHTML= `se guardo el elemento`;
    })
    .catch(function (e) {
        mensaje.innerHTML= `no se guardo el elemento ${e}`;
    })
}

function obtenerTodos(){
    mensaje.innerHTML = " ";
    fetch(url,{
        method : "get",
    })
    .then(function(r){
        return r.json();
    })
    .then(function(items){
        items.forEach(item => {
            mensaje.innerHTML += `<li>Producto: ${item.producto}</li>
                                  <li>Precio: ${item.precio}</li> 
                                  <li></li>                           
                                `;
        });
    })
    .catch(function (e) {
        mensaje.innerHTML= `no se guardo el elemento ${e}`;
    })
}

function obtenerUno(id){
    
    fetch(url + `/${id}`,{
        method : "get",
    })
    .then(function(r){
        mensaje.innerHTML= `se guardo el elemento`;
    })
    .then(function(items){
        items.forEach(element => {
            mensaje.innerHTML= `no se guardo el elemento ${e}`;
        });
    })
    .catch(function (e) {
        mensaje.innerHTML= `no se guardo el elemento ${e}`;
    })
}