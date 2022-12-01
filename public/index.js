

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







