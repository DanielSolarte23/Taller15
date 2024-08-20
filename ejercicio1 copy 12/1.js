// Clase Sede que representa una sede de la compañía con una ubicación.
class Sede {
    // Constructor que inicializa la sede con una ubicación.
    constructor(ubicacion) {
      this.ubicacion = ubicacion;  // Asigna el valor del parámetro `ubicacion` a la propiedad `ubicacion`.
    }
  
    // Método para mostrar los detalles de la sede (solo la ubicación).
    mostrarDetalles() {
      return this.ubicacion;  // Devuelve la ubicación de la sede.
    }
  }
  
  // Clase Compañia que representa una compañía con un nombre y una sede.
  class Compañia {
    // Constructor que inicializa la compañía con un nombre y una ubicación de sede.
    constructor(nombre, ubicacionSede) {
      this.nombre = nombre;  // Asigna el valor del parámetro `nombre` a la propiedad `nombre`.
      this.sede = new Sede(ubicacionSede);  // Crea una nueva instancia de `Sede` con `ubicacionSede` y la asigna a la propiedad `sede`.
    }
  
    // Método para mostrar los detalles de la compañía (nombre y ubicación de la sede).
    mostrarDetalles() {
      return this.nombre + ' - ' + this.sede.mostrarDetalles();  // Devuelve el nombre de la compañía seguido de la ubicación de la sede.
    }
  }
  
  // Crea una instancia de `Compañia` con el nombre 'TechCorp' y una ubicación de sede 'Calle Innovación 456'.
  let compañiaTech = new Compañia('TechCorp', 'Calle Innovación 456');
  
  // Muestra los detalles de la compañía en la consola.
  console.log(compañiaTech.mostrarDetalles());
  