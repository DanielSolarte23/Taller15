// Clase Reserva que representa una reserva de hotel.
class Reserva {
  // Constructor que inicializa una reserva con el nombre del huésped, la fecha de entrada y la fecha de salida.
  constructor(nombreHuesped, fechaCheckin, fechaCheckout) {
    this.nombreHuesped = nombreHuesped;  // Asigna el valor del parámetro `nombreHuesped` a la propiedad `nombreHuesped`.
    this.fechaCheckin = fechaCheckin;  // Asigna el valor del parámetro `fechaCheckin` a la propiedad `fechaCheckin`.
    this.fechaCheckout = fechaCheckout;  // Asigna el valor del parámetro `fechaCheckout` a la propiedad `fechaCheckout`.
  }

  // Método para mostrar los detalles de la reserva.
  mostrarDetalles() {
    // Devuelve una cadena que combina el nombre del huésped y la fecha de salida.
    return this.nombreHuesped + ' - ' + this.fechaCheckout;
  }
}

// Exporta la clase Reserva para que pueda ser importada en otros módulos.
export default Reserva;
