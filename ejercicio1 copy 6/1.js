class Tarea {
  // Define una propiedad estática `tareas` que es un array vacío. 
  // Esta propiedad es compartida por todas las instancias de la clase `Tarea`.
  static tareas = []; 

  // Constructor que inicializa una tarea con un nombre y una descripción.
  constructor(nombre, descripcion) {
    this._nombre = nombre;  // Asigna el valor del parámetro `nombre` a la propiedad privada `_nombre`.
    this._descripcion = descripcion;  // Asigna el valor del parámetro `descripcion` a la propiedad privada `_descripcion`.
  }

  // Método getter para obtener el nombre de la tarea.
  getNombre() {
    return this._nombre;  // Devuelve el valor de la propiedad `_nombre`.
  }

  // Método setter para modificar el nombre de la tarea.
  setNombre(nombre) {
    this._nombre = nombre;  // Establece un nuevo valor para la propiedad `_nombre`.
  }

  // Método getter para obtener la descripción de la tarea.
  getDescripcion() {
    return this._descripcion;  // Devuelve el valor de la propiedad `_descripcion`.
  }

  // Método setter para modificar la descripción de la tarea.
  setDescripcion(descripcion) {
    this._descripcion = descripcion;  // Establece un nuevo valor para la propiedad `_descripcion`.
  }

  // Método para mostrar el nombre y la descripción de la tarea.
  mostrar() {
    return this._nombre + this._descripcion;  // Devuelve una cadena que combina el nombre y la descripción.
  }

  // Método estático para agregar una tarea al array `tareas`.
  static agregarTarea(tarea) {
    this.tareas.push(tarea);  // Agrega la tarea al array `tareas`.
  }

  // Método estático para mostrar todas las tareas agregadas.
  static mostrarTareas() {
    let resultado = '';  // Inicializa una cadena vacía para almacenar el resultado.
    for (let i = 0; i < this.tareas.length; i++) {  // Itera sobre todas las tareas en el array `tareas`.
        let tarea = this.tareas[i];  // Obtiene la tarea actual.
        resultado += tarea.mostrar();  // Agrega la cadena devuelta por `mostrar` al resultado.
    }
    return resultado;  // Devuelve la cadena resultante con todas las tareas.
  }
}

// Selecciona el botón con id `agregarTarea` y agrega un evento `click`.
document.querySelector('#agregarTarea').addEventListener('click', () => {
    
    // Obtiene el valor del input con id `nombre-tarea` y lo almacena en la variable `nombre`.
    let nombre = document.querySelector('#nombre-tarea').value;
    
    // Obtiene el valor del input con id `descripcion-tarea` y lo almacena en la variable `descripcion`.
    let descripcion = document.querySelector('#descripcion-tarea').value;
    
    // Crea una nueva instancia de la clase `Tarea` con `nombre` y `descripcion`.
    let tarea = new Tarea(nombre, descripcion);
  
    // Agrega la nueva tarea al array estático `tareas`.
    Tarea.agregarTarea(tarea);
    
    // Selecciona la lista donde se mostrarán las tareas.
    let lista = document.querySelector('#lista-tareas');
    
    // Crea un nuevo elemento `li` para representar la tarea.
    let item = document.createElement('li');
    
    // Establece el texto del elemento `li` como el resultado del método `mostrar` de la tarea.
    item.innerText = tarea.mostrar();
    
    // Agrega el elemento `li` a la lista.
    lista.appendChild(item);
});
