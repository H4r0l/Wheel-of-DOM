// import { default as Swal } from "sweetalert2";

let victimas = [];

const eliminarVictima = (eliminar) => {
    let borrar = eliminar.target.id;
    victimas = victimas.filter((victima) => victima.id != borrar);
    guardarEnStorage(victimas);
    render();
};

let agregarVictima = document.getElementById("agregar");

agregarVictima.addEventListener("click", (ingresar) => {
    ingresar.preventDefault();
    let inputVictimas = document.getElementById("inputVictima");

    let ingresoVictima = victimas.length;

    let nombreVictima = inputVictimas.ariaValueMax;
    if (inputVictimas.value == "") {
        alert("ingrese el nombre de una victima");
    } else {
        victimas.push({
            id: ingresoVictima,
            playName: nombreVictima,
            isDead: false,
        });
    }
    inputVictimas.value = "";
    render();
    guardarEnStorage(victimas);
})

const render = () => {
    let htmlVictimas = ``;

    let totalVictimas = document.getElementById("listaVictimas");
    
    victimas.forEach(
        (victima) =>
        (htmlVictimas += `<li >
                <p class="victima">${victima.playName} </p>
                <button id="borrarVictima" class="borraVictima" id="${victima.id}">caneca</button>
            </li>"`)
    );
    totalVictimas.innerHTML = htmlVictimas;
    borrarButton();
};
const borrarButton = (e) => {
    let eliminaVictima = document.querySelectorAll(".borraVictima");

    eliminaVictima.forEach((botonCaneca) =>
        botonCaneca.addEventListener("click", eliminarVictima)
    );
};

render();

function guardarEnStorage(object) {
    let victimaLocal = object;

    localStorage.setItem("victimasKey", JSON.stringify(victimaLocal));
}

class Juego {

    constructor() {
        this.init();
    }


    init() {
        this.mensajeVentanaInicio();
    }


    mensajeVentanaInicio() {
        Swal.fire({
            imageUrl: '/src/pixil-frame-alerts.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            title: '¡Bienvenido!',
            text: "Ingresa los nombres de las victimas:",
            input: 'text',
            inputLabel: 'Nombre de la victima',
            inputPlaceholder: 'Nombre:',
            // inputAttributes: {
            //     autocapitalize: 'off'
            // },
            showCancelButton: true,
            confirmButtonColor: '#034C8C',
            cancelButtonColor: '#D9AD29',
            confirmButtonText: 'Agregar',
            cancelButtonText: 'Inicio',
            backdrop: '#939292'
            

        });
    }

    
}

const game = new Juego();


    

