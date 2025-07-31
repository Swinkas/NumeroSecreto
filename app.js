//let parrafo =document.querySelector("p");
//parrafo.innerHTML = "indica un numero del 1 al 10";
let numeroSecreto= 0;
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log (numeroSecreto); //La consola te enseña  cual es el numero secreto 



function AsignarTextoElemento (elemento, texto){
    let elmentoHtml = document.querySelector(elemento);
    elmentoHtml.innerHTML  = texto;
    return;
}

function verificarIntento(){
    //alert("click desde el boton");
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log (intentos);
    //console.log(typeof(numeroDeUsuario));
    
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log (numeroDeUsuario === numeroSecreto);
    if (numeroDeUsuario === numeroSecreto ){
        AsignarTextoElemento("p",`Acertaste el numero en ${intentos}${(intentos === 1) ?" vez" : " veces"}`);   
    document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto 
        if (numeroDeUsuario > numeroSecreto) {
            AsignarTextoElemento("p","El numero secreto es menor");
        } else {
            AsignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja () {
  document.querySelector("#valorUsuario").value = '';
  
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        AsignarTextoElemento ('p','Ya se sortearon todos los numeros posibles');
    } else {
        // si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales () {
    AsignarTextoElemento("h1","Juego del numero secreto");
    AsignarTextoElemento("p",`indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inervalo de numeros 
    //generar el numero aleatorio  
    // inicializar el numero de intentos 
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    
}

condicionesIniciales();


//AsignarTextoElemento("h1","Juego del numero secreto");
//AsignarTextoElemento("p","indica un numero del 1 al 100");