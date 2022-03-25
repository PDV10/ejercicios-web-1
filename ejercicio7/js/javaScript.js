let btnAnterior = document.querySelector("#anterior");
let btnSiguiente = document.querySelector("#siguiente");
let img = document.querySelector("img");
let posicion = 0;
btnAnterior.addEventListener("click", anterior);
btnSiguiente.addEventListener("click", siguiente);

let imagenes = [];

for (let i = 0 ; i<6; i++){
    imagenes[i] = `img/pato${i}.jpg`;
}

function anterior(){
/*  posicion === 0 ? posicion = 4 : posicion-- ; */

    if(posicion===0){
        posicion = 4;
    }else{
        posicion--;
    }
    img.src = imagenes[posicion];
}

function siguiente(){
    if(posicion===4){
        posicion =0 ;
    }else{
        posicion++;
    }
   /*  posicion === 4 ? posicion = 0 : posicion ++; */
    img.src = imagenes[posicion];
}