// Clase GestorReservas que maneja una colección de reservas.
class GestorReservas {
    // Constructor que inicializa el gestor con un array vacío de reservas.
    constructor() {
        this.reservas = [];  // Inicializa la propiedad `reservas` como un array vacío para almacenar las reservas.
    }

    // Método para agregar una reserva al array de reservas.
    agregarReserva(reserva) {
        this.reservas.push(reserva);  // Agrega la reserva proporcionada al array `reservas`.
    }

    // Método para listar todas las reservas almacenadas en formato de texto.
    listarReservas() {
        let resultado = '';  // Inicializa una cadena vacía para almacenar el resultado.
        // Itera sobre todas las reservas en el array `reservas`.
        for (let i = 0; i < this.reservas.length; i++) {
            let reserva = this.reservas[i];  // Obtiene la reserva actual.
            resultado += reserva.mostrarDetalles();  // Agrega la cadena devuelta por `mostrarDetalles` al resultado.
        }
        return resultado;  // Devuelve la cadena resultante con todos los detalles de las reservas.
    }
}

// Exporta la clase GestorReservas para que pueda ser importada en otros módulos.
export default GestorReservas;
