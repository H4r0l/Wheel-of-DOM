// import { default as Swal } from "sweetalert2";

const { default: Swal } = require("sweetalert2");

// const { default: Swal } = require("sweetalert2");

let victimas = JSON.parse(localStorage.getItem("victimasKey"));

let listaVivos = victimas;
let listaMuertos = [];
var victimaSacrificada = "";

//aleatorio
console.log(listaVivos)

var medida;
var indice;

function muerteVictima(indice) {

    medida = listaVivos.length + 1;
    indice = Math.floor(Math.random() * medida);

    for (let j = 0; j < listaVivos.length; j++){
        if (indice == j) {
            victimaSacrificada = listaVivos[j];

            console.log(victimaSacrificada);
        }
    }
    return victimaSacrificada;
    
}

function elegido(indice) {
    listaVivos.splice(indice, 1);
    animacionMuerte();
}

// animacion de censurado 
var censurado = document.getElementById("animacionFallece");

function animaCensura(instruccion, victimaSacrificada) {
    if (instruccion == true) {
        censurado.innerHTML = '<img id="animacion" src="src/censurado.png"><h1></h1>';
    } else {
        censurado.innerHTML = '<img id="animacion" src="/animacion.gif"><h1>${victimaSacrificada}</h1>';
        
    }
}



//sacrificar
let sacrificarButton = document.getElementById("sacrificar");
sacrificarButton.addEventListener("click", animacionMuerte);

let sonidoMuere = new Audio("../sonidos/horror.mp3")

function animacionMuerte() {
    if (listaVivos.length > 0) {
        setTimeout(soloKill(victimaSacrificada), 1700);
        sonidoMuere.play()
        animaCensura(true,);
        setTimeout(animaCensura, 1000);
        muerteVictima();
        elegido(indice);

    } else {
        gameOver();
        
    }
};

function soloKill(victimaSacrificada) {
    // Swal.fire(victimaSacrificada, "fue sacrificada");
    Swal.fire({
        imageUrl: '/src/pixil-frame-alerts.png',
        imageHeight: '100px',
        html: '<h1 class="font-PirataOne text-black"> La victima fue Sacrificada </h1>',
        confirmButtonColor: '#034C8C',
        confirmButtonText: 'SEGUIR SACRIFICANDO',
        position: 'center',
        background: '#009FDE',
    });
};

const open = document.getElementById("sacrificar");

function gameOver() {
    console.log("game over")
    function showModal(){
        Swal.fire({
        imageUrl: '/src/pixil-frame-alerts.png',
        html: '<h1 class="font-PirataOne text-black"> Ya No Hay Nadie <br></br> Para Sacrificar </h1>',
        confirmButtonColor: '#034C8C',
        confirmButtonText: 'EMPEZAR DE NUEVO ',
        background: '#009FDE',
        position: 'center',
        // Text: 'creado por:',
        // imageUrl: '/src/logos.png',
        imageHeight: '100px',
        });
    };
    setTimeout(showModal, 2000)
    animaCensura(true,);
};



