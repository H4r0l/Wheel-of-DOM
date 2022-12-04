// import { default as Swal } from "sweetalert2";

// const { default: Swal } = require("sweetalert2");

let victimas = JSON.parse(localStorage.getItem("victimasKey"));

let listaVivos = victimas;
let listaMuertos = [];
let victimaSacrificada = "";

//aleatorio

function muerteVictima() {
    if (listaVivos.length > 0) {
        
        let listaAleatoria = Math.floor(Math.random() * listaVivos.length);

        let nombreVictimaAMorir = listaVivos[listaAleatoria].playName;

        victimaSacrificada = listaVivos[listaAleatoria].playName;

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
let sonidoHorca = new Audio("../sonidos/inicio.piratas.mp3")

function fallecidoGif() {
    imgPlayer.classList.remove("transleft");
    imgPlayer.classList.add("transdown");
    setTimeout( 1700);
    sonidoHorca.play();
};

const sacrificarButton = document.getElementById("sacrificar");
sacrificarButton.addEventListener("click", animacionMuerte);

let sonidoMuere = new Audio("../sonidos/horror.mp3")

function animacionMuerte() {
    if (listaVivos.length > 0) {
        setTimeout(soloKill, 1700, victimaSacrificada);
        open.classList.remove('vibrate_kill');
        
        fallecidoGif();
        // horca();
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
        ImageWigth: '50px',
        html: '<h1 class=""> ${nombreVictimaAMorir} Fue Sacrificada </h1>',
        confirmButtonColor: '#034C8C',
        confirmButtonText: 'SEGUIR SACRIFICANDO',
        backdrop: `
        #BFBFBF
        left top
        no-repeat
        `,
        position: 'center',
    });
    // modal_container.classList.remove("show");
    imgPlayer.classList.add("shadow");
    
    // modal_container.classList.add("show");
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
        backdrop: `
        #BFBFBF
        left top
        no-repeat
        `,
        position: 'center',
        imageUrl: '/src/logos.png',
        imageHeight: '250px',
        });
        setTimeout(showModal, 2000)
        fallecidoGif();
        // horca();
        changeGiff(true);
    };
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