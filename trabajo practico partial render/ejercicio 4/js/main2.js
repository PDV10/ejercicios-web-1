"use strict"

let btnAgregar = document.querySelectorAll(".btnAgregar");
btnAgregar.forEach(element => {
    element.addEventListener("click", agregar);
});



let url = "http://web-unicen.herokuapp.com/api/html ";
let p = document.querySelector("#p");

async function agregar(e){
e.preventDefault();
let div = e.target.previousElementSibling;

    div.innerHTML = "loading..."

    try {
        let promesa = await fetch(url);

        if(promesa.ok){
            let contenido = await promesa.text()
            div.innerHTML = contenido;
            
            let btnAjax = document.querySelectorAll(".btn-default")  
            btnAjax.forEach(element => {
                   element.addEventListener("click", mostrar);
            });
            
        }
        else{
            p.innerHTML = "error";
        }
        
    } catch (error) {
        console.log(error);
        div.innerHTML = "<h1> Error </h1>";
    }
}


function mostrar(){
    alert("entro");
}