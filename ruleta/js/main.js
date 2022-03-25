/* Hacer una ruleta básica donde salga un número al azar entre 0 y 36. El usuario debe apostar
por un único número mediante un input. Luego de pulsar “Jugar!”
 debe mostrar el número que salió, el número apostado y si ganó o perdió. */

 "use strict"

 let input = document.querySelector("#input")
 let btnJugar = document.querySelector("#btnJugar");
btnJugar.addEventListener("click", comparar);

function comparar(){
   
    let mensaje = document.querySelector(".mensaje");
    let numero = document.querySelector("#azar");
    let azar = parseInt(Math.random()*37);
    mensaje.innerHTML = " ";
    numero.innerHTML = azar;


    if(azar === parseInt(input.value)){
        mensaje.innerHTML = "felicidades ganaste pete"
    }else{
        mensaje.innerHTML = "segui intentando fracasado"
    }
}