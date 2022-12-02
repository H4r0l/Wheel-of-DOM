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

const sacrificarButton = document.getElementById("sacrificar");
sacrificarButton.addEventListener("click", animacionMuerte);

let sonidoMuere = new Audio("../sonidos/horror.mp3")

function animacionMuerte() {
    if (listaVivos.length > 0) {
        setTimeout(soloKill, 1700, victimaSacrificada);
        open.classList.remove('vibrate_kill');
        // sonidoMuere.play(1)
        fallecidoGif();
        horca();
        changeGiff(true);
        

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
        ImageWigth: '200px',
        html: '<h1 class=""> ${nombreMuerto} Fue Sacrificada </h1>',
        confirmButtonColor: '#034C8C',
        confirmButtonText: 'SEGUIR SACRIFICANDO',
        backdrop: '#034C8C',
        position: 'center',
    });
    confirmButton.addEventListener("click", () => {
        modal_container.classList.remove("show");
        imgPlayer.classList.add("shadow");
    });
    modal_container.classList.add("show");
};
const open = document.getElementById("sacrificar");

function gameOver() {
    console.log("aquie aparece el pupup")
    function showModal(){
        Swal.fire({
        imageUrl: '/src/pixil-frame-alerts.png',
        ImageWigth: '200px',
        html: '<h1 class=""> Ya No Hay Nadie <br></br> Para Sacrificar </h1>',
        confirmButtonColor: '#034C8C',
        confirmButtonText: 'EMPEZAR DE NUEVO ',
        backdrop: '#034C8C',
        position: 'center',
        imageUrl: '/src/logos.png',
        imageHeight: '250px',
        });
        setTimeout(showModal, 2000)
        fallecidoGit();
        horca();
        changeGiff(true);
    };
};
//animacion duracion 
const imgPlayer = document.getElementById("animacion");
let sonidoHorca = new Audio("../sonidos/inicio.piratas.mp3")

function fallecidoGit() {
    imgPlayer.classList.remove("transleft");
    imgPlayer.classList.add("transdown");
    setTimeout( 1700);
    sonidoHorca.play();
};
// animacion de censurado 
const censurado = document.getElementById("animacion");

function changeGiff(instruccion, nombreMuerto) {
    if (instruccion == true) {
        censurado.innerHTML = '<img id="animacion" src="src/logo-lily.png"></img>'
    } else {
        censurado.innerHTML = '<img id="animacion" src="src/logo-sofi.png"><h1>${nombreMuerto}</h1>'
    }
}


// class alertaMuerto {
//     constructor() {
//         this.muerte();
//     };
//     muerte() {
//         this.mensajeVentanaMuerte();
//     };
//     mensajeVentanaMuerte() {
//         Swal.fire({
//             imageUrl: '/src/pixil-frame-alerts.png',
//             ImageWigth: '200px',
//             html: '<h1 class=""> $ Fue Sacrificada </h1>',
//             confirmButtonColor: '#034C8C',
//             confirmButtonText: 'SEGUIR SACRIFICANDO',
//             backdrop: '#034C8C',
//             position: 'center',


            

//         });
//     };
// }










// const game = new Juego();