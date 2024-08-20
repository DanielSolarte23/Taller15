// Importa la clase `Reserva` desde el archivo 'Reserva.js'.
import Reserva from './Reserva.js';

// Importa la clase `GestorReservas` desde el archivo 'Gestor.js'.
import GestorReservas from './Gestor.js';

// Agrega un event listener al botón con id `reservarh` que se ejecutará cuando se haga clic.
document.querySelector('#reservarh').addEventListener('click', () => {
  
  // Obtiene el valor del input con id `nombre-huesped` y lo almacena en la variable `nombreHuesped`.
  let nombreHuesped = document.querySelector('#nombre-huesped').value;
  
  // Obtiene el valor del input con id `fecha-checkin` y lo almacena en la variable `fechaCheckin`.
  let fechaCheckin = document.querySelector('#fecha-checkin').value;
  
  // Obtiene el valor del input con id `fecha-checkout` y lo almacena en la variable `fechaCheckout`.
  let fechaCheckout = document.querySelector('#fecha-checkout').value;
  
  // Crea una nueva instancia de la clase `Reserva` con los valores obtenidos.
  let reserva = new Reserva(nombreHuesped, fechaCheckin, fechaCheckout);
  
  // Crea una nueva instancia de la clase `GestorReservas`.
  let GR = new GestorReservas();
  
  // Llama al método `agregarReserva` del gestor de reservas para agregar la nueva reserva.
  GR.agregarReserva(reserva);
  
  // Actualiza el contenido del elemento con id `lista-reservas` mostrando la lista de reservas.
  document.querySelector('#lista-reservas').innerText = GR.listarReservas();
});
