"use strict"

let btnAgregar = document.querySelectorAll(".btnAgregar");

btnAgregar.forEach(element => {
    element.addEventListener("click", agregar);
});



let url = "http://web-unicen.herokuapp.com/api/html ";

let p = document.querySelector("#p");

function agregar(e){
e.preventDefault();
let div = e.target.previousElementSibling;

div.innerHTML = "loading..."

    fetch(url)
        .then(response => {
            response.text().then(respuesta => {
                div.innerHTML = respuesta;
                let btnAjax = document.querySelectorAll(".btn-default")
                btnAjax.forEach(element => {
                    element.addEventListener("click", mostrar);
                });
                
            })
        })
        .catch(error => {
            console.log(error);
            div.innerHTML = "<h1> Error </h1>";
        });
}


function mostrar(){
    alert("entro");
}
