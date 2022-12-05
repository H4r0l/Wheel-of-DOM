
let victimas = [];

const eliminarVictima = (eliminar) => {
    let borrar = eliminar.target.playerName;
    victimas = victimas.filter((victima) => victima.playerName != borrar);
    guardarEnStorage(victimas);
    render();
};

let agregarVictima = document.getElementById("agregar");

agregarVictima.addEventListener("click", (ingresar) => {
    ingresar.preventDefault();
    let inputVictimas = document.getElementById("inputVictima");

    // let ingresoVictima = victimas.length;

    let nombreVictima = inputVictimas.value;
    if (inputVictimas.value == "") {
        setTimeout(alerta, 800);        
    } else {
        victimas.push({
            // id: ingresoVictima,
            playerName: nombreVictima,
            // isDead: false,
        });
    }
    inputVictimas.value = "";
    render();
    guardarEnStorage(victimas);
    console.log(victimas)
    console.log(nombreVictima)
})
//alerta
function alerta() {
    Swal.fire({
        imageUrl: '/src/pixil-frame-alerts.png',
        imageWigth: '20px',
        html: '<h1 class="font-PirataOne text-black"> ingrese el nombre de una victima </h1>',
        confirmButtonColor: '#034C8C',
        position: 'center',
        background: '#009FDE',
    });
    
    imgPlayer.classList.add("shadow");
    
    
};
const render = () => {
    let htmlVictimas = ``;

    let totalVictimas = document.getElementById("listaVictimas");
    
    victimas.forEach(
        (victima) =>
        (htmlVictimas += `<li >
                <p class="victima">${victima.playerName} </p>
                <button class="borraVictima" id="${victima.playerName}" >🗑️</button>
            </li>"`)
    );
    totalVictimas.innerHTML = htmlVictimas;
    borrarButton();
};
const borrarButton = (e) => {
    let eliminaVictima = document.querySelectorAll(".borraVictima");
    console.log(eliminaVictima)
    eliminaVictima.forEach((botonCaneca) =>
        botonCaneca.addEventListener("click", eliminarVictima)
    );
    
};

render();


function guardarEnStorage(object) {
    let victimaLocal = object;

    localStorage.setItem("victimasKey", JSON.stringify(victimaLocal));
}








