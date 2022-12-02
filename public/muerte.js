// import { default as Swal } from "sweetalert2";

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
            showCancelButton: true,
            confirmButtonColor: '#034C8C',
            confirmButtonText: 'Eliminado',
            backdrop: '#939292'
            

        });
    }

    
}

const game = new Juego();