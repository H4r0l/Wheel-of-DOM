// import { default as Swal } from "sweetalert2";

// const { default: Swal } = require("sweetalert2");

let victimas = JSON.parse(localStorage.getItem("victimasKey"));


let listaVivos = victimas;
let listaMuertos = [];
let victimaSacrificada = "";

//aleatorio

function muerteVictima() {
    if (listaVivos.length > 0) {
        
        let listaAleatoria = 0 + Math.floor(Math.random() * listaVivos.length);

        let nombreVictimaAMorir = listaVivos[listaAleatoria].playerName;

        victimaSacrificada = listaVivos[listaAleatoria].playerName;

        console.log(nombreVictimaAMorir);

        listaMuertos.push(listaVivos[listaAleatoria]);

        listaVivos.splice(listaAleatoria, 1);

        console.log(listaVivos);
        
        return nombreVictimaAMorir;

    } else {

    }
};
//animacion duracion 
const imgPlayer = document.getElementById("animacion");


function fallecidoGif() {
    imgPlayer.classList.remove("transleft");
    imgPlayer.classList.add("transdown");
    setTimeout( 1700);
    
};

// animacion de censurado 
const censurado = document.getElementById("animacion");

function changeGiff(instruccion, nombreMuerto) {
    if (instruccion == true) {
        censurado.innerHTML = '<img id="animacion" src="src/censurado.png">'
    } else {
        censurado.innerHTML = '<img id="animacion" src/animacion.gif"><h1>${nombreMuerto}</h1>'
    }
}

const sacrificarButton = document.getElementById("sacrificar");
sacrificarButton.addEventListener("click", animacionMuerte);

let sonidoMuere = new Audio("../sonidos/horror.mp3")

function animacionMuerte() {
    if (listaVivos.length > 0) {
        setTimeout(soloKill, 1700, victimaSacrificada);
        open.classList.remove('vibrate_kill');
        sonidoMuere.play()
        fallecidoGif();
        changeGiff(true);
        setTimeout(changeGiff, 1000);

    } else {
        gameOver();
        sacrificarButton.classList.add("shadow")
    }
    console.log(victimaSacrificada)
};

function nuevaVigtima() {
    imgPlayer.classList.remove("shadow");
    imgPlayer.classList.add("transleft");
    imgPlayer.classList.remove("transdown");
    let nombreVictimaAMorir = muerteVictima();
    changeGiff(false, nombreVictimaAMorir);
    open.classList.add('vibrate_kill')
}

function soloKill(nombreMuerto) {
    Swal.fire({
        imageUrl: '/src/pixil-frame-alerts.png',
        imageWigth: '20px',
        html: '<h1 class="font-PirataOne text-black"> La victima fue Sacrificada </h1>',
        confirmButtonColor: '#034C8C',
        confirmButtonText: 'SEGUIR SACRIFICANDO',
        position: 'center',
        background: '#009FDE',
    });
    
    imgPlayer.classList.add("shadow");
    
    
};

const open = document.getElementById("sacrificar");

function gameOver() {
    console.log("aquie aparece el pupup")
    function showModal(){
        Swal.fire({
        imageUrl: '/src/pixil-frame-alerts.png',
        ImageWigth: '50px',
        html: '<h1 class="font-PirataOne text-black"> Ya No Hay Nadie <br></br> Para Sacrificar </h1>',
        confirmButtonColor: '#034C8C',
        confirmButtonText: 'EMPEZAR DE NUEVO ',
        background: '#009FDE',
        position: 'center',
        imageUrl: '/src/logos.png',
        imageHeight: '50px',
        });
        setTimeout(showModal, 1000)
        fallecidoGif();
        changeGiff(true);
    };
};



