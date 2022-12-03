

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

    let nombreVictima = inputVictimas.value;
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
    console.log(victimas)
    console.log(nombreVictima)
})

const render = () => {
    let htmlVictimas = ``;

    let totalVictimas = document.getElementById("listaVictimas");
    
    victimas.forEach(
        (victima) =>
        (htmlVictimas += `<li >
<<<<<<< HEAD
                <p class="victima">${victima.playName} </p>
                <button class="borraVictima" id="${victima.id}" >caneca</button>
=======
                <p class="victima font-pirataOne">${victima.playName} </p>
                <button id="borrarVictima" class="borraVictima" id="${victima.id}">caneca</button>
>>>>>>> e2549154b9d0bf7cd5ebc41a681269921ab69bc0
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




swal({

        title: "¡Bienvenido!",
        text: "Ingresa los nombres de las victimas:",
        content: "input",
        button: {
            text: "Agregar",
            closeModal: false,
        },
        button: {
            text: "Inicio",
            closeModal: false,
        },
    })



