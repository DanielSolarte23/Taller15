// Clase Proyecto que representa un proyecto con un nombre y una lista de miembros.
class Proyecto {
    // Constructor que inicializa el proyecto con un nombre.
    constructor(nombre) {
      this.nombre = nombre;  // Asigna el valor del parámetro `nombre` a la propiedad `nombre`.
      this.miembros = [];    // Inicializa una lista vacía de miembros del proyecto.
    }
  
    // Método para agregar un miembro al proyecto.
    agregarMiembro(miembro) {
      // Verifica que el miembro sea una instancia de la clase Miembro.
      if (miembro instanceof Miembro) {
        this.miembros.push(miembro);  // Agrega el miembro a la lista de miembros.
        miembro.agregarProyecto(this);  // Agrega este proyecto a la lista de proyectos del miembro.
      }
    }
  
    // Método para mostrar los detalles del proyecto.
    mostrarDetalles() {
      let miembrosNombres = '';  // Variable para almacenar los nombres de los miembros.
      // Recorre la lista de miembros.
      for (let i = 0; i < this.miembros.length; i++) {
        let nombreMiembro = this.miembros[i].nombre;  // Obtiene el nombre del miembro.
        miembrosNombres += nombreMiembro;  // Añade el nombre a la cadena de nombres.
      }
      // Devuelve el nombre del proyecto seguido de los nombres de los miembros.
      return this.nombre + ': ' + miembrosNombres;
    }
  }
  
  // Clase Miembro que representa un miembro con un nombre y una lista de proyectos.
  class Miembro {
    // Constructor que inicializa el miembro con un nombre.
    constructor(nombre) {
      this.nombre = nombre;  // Asigna el valor del parámetro `nombre` a la propiedad `nombre`.
      this.proyectos = [];   // Inicializa una lista vacía de proyectos del miembro.
    }
  
    // Método para agregar un proyecto al miembro.
    agregarProyecto(proyecto) {
      // Verifica que el proyecto sea una instancia de la clase Proyecto.
      if (proyecto instanceof Proyecto) {
        this.proyectos.push(proyecto);  // Agrega el proyecto a la lista de proyectos del miembro.
      }
    }
  
    // Método para mostrar los detalles del miembro.
    mostrarDetalles() {
      let proyectosNombres = '';  // Variable para almacenar los nombres de los proyectos.
      // Recorre la lista de proyectos.
      for (let i = 0; i < this.proyectos.length; i++) {
        let nombreProyecto = this.proyectos[i].nombre;  // Obtiene el nombre del proyecto.
        proyectosNombres += nombreProyecto;  // Añade el nombre a la cadena de nombres.
      }
      // Devuelve el nombre del miembro seguido de los nombres de los proyectos.
      return this.nombre + ': ' + proyectosNombres;
    }
  }
  
  // Creación de instancias de proyectos y miembros.
  let proyectoAlpha = new Proyecto('Alpha');
  let proyectoBeta = new Proyecto('Beta');
  let miembroSofia = new Miembro('Sofia');
  let miembroLaura = new Miembro('Laura');
  
  // Agrega miembros a los proyectos.
  proyectoAlpha.agregarMiembro(miembroSofia);
  proyectoBeta.agregarMiembro(miembroSofia);
  proyectoBeta.agregarMiembro(miembroSofia);
  
  // Muestra los detalles de los proyectos y miembros.
  console.log(proyectoAlpha.mostrarDetalles());  // Imprime: Alpha: Sofia
  console.log(proyectoBeta.mostrarDetalles());  // Imprime: Beta: SofiaSofia
  console.log(miembroSofia.mostrarDetalles());  // Imprime: Sofia: AlphaBetaBeta
  console.log(miembroLaura.mostrarDetalles());  // Imprime: Laura: (Vacío, ya que Laura no está asociada a ningún proyecto)
  