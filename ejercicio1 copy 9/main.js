// Clase Habitacion que representa una habitación con número y precio.
class Habitacion {
  // Constructor que inicializa la habitación con un número y un precio.
  constructor(numero, precio) {
    this.numero = numero;  // Asigna el valor del parámetro `numero` a la propiedad `numero`.
    this.precio = precio;  // Asigna el valor del parámetro `precio` a la propiedad `precio`.
  }

  // Método para mostrar los detalles de la habitación.
  mostrarDetalles() {
    // Devuelve una cadena que combina el número y el precio de la habitación.
    return `Número: ${this.numero}, Precio: ${this.precio}`;
  }
}

// Clase HabitacionSimple que hereda de Habitacion y representa una habitación simple.
class HabitacionSimple extends Habitacion {
  // Constructor que inicializa una habitación simple con número y precio.
  constructor(numero, precio) {
    super(numero, precio);  // Llama al constructor de la clase base `Habitacion` para inicializar número y precio.
    this.tipo = 'Simple';  // Establece el tipo de habitación como 'Simple'.
  }
}

// Clase HabitacionDoble que hereda de Habitacion y representa una habitación doble.
class HabitacionDoble extends Habitacion {
  // Constructor que inicializa una habitación doble con número y precio.
  constructor(numero, precio) {
    super(numero, precio);  // Llama al constructor de la clase base `Habitacion` para inicializar número y precio.
    this.tipo = 'Doble';  // Establece el tipo de habitación como 'Doble'.
  }
}

// Agrega un event listener al botón con id `agregarHabitacion` que se ejecutará cuando se haga clic.
document.querySelector('#agregarHabitacion').addEventListener('click', () => {
  
  // Obtiene el valor del input con id `tipo-habitacion` y lo almacena en la variable `tipo`.
  let tipo = document.querySelector('#tipo-habitacion').value;
  
  // Obtiene el valor del input con id `numero-habitacion`, lo convierte a número entero y lo almacena en la variable `numero`.
  let numero = parseInt(document.querySelector('#numero-habitacion').value);
  
  // Obtiene el valor del input con id `precio-habitacion`, lo convierte a número flotante y lo almacena en la variable `precio`.
  let precio = parseFloat(document.querySelector('#precio-habitacion').value);

  // Variable para almacenar la instancia de la habitación que se creará.
  let habitacion;
  
  // Crea una instancia de `HabitacionSimple` si el tipo es 'simple'.
  if (tipo === 'simple') {
    habitacion = new HabitacionSimple(numero, precio);
  // Crea una instancia de `HabitacionDoble` si el tipo es 'doble'.
  } else if (tipo === 'doble') {
    habitacion = new HabitacionDoble(numero, precio);
  } 
  
  // Crea un nuevo elemento de lista (`<li>`) para mostrar los detalles de la habitación.
  let item = document.createElement('li');
  
  // Establece el texto del elemento de lista con los detalles de la habitación.
  item.innerText = habitacion.mostrarDetalles();
  
  // Agrega el nuevo elemento de lista a la lista con id `lista-habitaciones`.
  document.querySelector('#lista-habitaciones').appendChild(item);
});
