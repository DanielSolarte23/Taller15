// Clase Jugador que representa a un jugador con nombre, puntaje y equipo asociado.
class Jugador {
  // Constructor que inicializa un jugador con nombre y equipo.
  constructor(nombre, equipo) {
    this.nombre = nombre;  // Asigna el valor del parámetro `nombre` a la propiedad `nombre`.
    this.puntaje = 0;      // Inicializa la propiedad `puntaje` a 0.
    this.equipo = equipo;  // Asigna el valor del parámetro `equipo` a la propiedad `equipo`.
  }

  // Método para asignar puntos al jugador.
  asignarPuntos(puntos) {
    this.puntaje += puntos;  // Suma el valor del parámetro `puntos` al puntaje actual del jugador.
  }
}

// Clase Equipo que representa un equipo con nombre y una lista de jugadores.
class Equipo {
  // Constructor que inicializa un equipo con nombre.
  constructor(nombre) {
    this.nombre = nombre;        // Asigna el valor del parámetro `nombre` a la propiedad `nombre`.
    this.jugadores = [];         // Inicializa la propiedad `jugadores` como un array vacío.
  }

  // Método para agregar un nuevo jugador al equipo.
  agregarJugador(nombreJugador) {
    let jugador = new Jugador(nombreJugador, this);  // Crea una nueva instancia de Jugador con el nombre del jugador y el equipo actual.
    this.jugadores.push(jugador);  // Agrega el nuevo jugador a la lista de jugadores del equipo.
  }

  // Método para encontrar un jugador en el equipo por nombre.
  encontrarJugador(nombreJugador) {
    for (let i = 0; i < this.jugadores.length; i++) {  // Recorre la lista de jugadores.
      let jugador = this.jugadores[i];
      if (jugador.nombre === nombreJugador) {  // Compara el nombre del jugador con el nombre buscado.
        return jugador;  // Devuelve el jugador si se encuentra.
      }
    }
  }

  // Método para listar un jugador (parece que solo devuelve el primer jugador encontrado).
  listarJugador() {
    for (let i = 0; i < this.jugadores.length; i++) {  // Recorre la lista de jugadores.
      let jugador = this.jugadores[i];
      return jugador;  // Devuelve el primer jugador encontrado.
    }
  }

  // Método para listar los puntajes de todos los jugadores en el equipo.
  listarPuntajes() {
    let resultados = [];  // Inicializa un array para almacenar los resultados.
    for (let i = 0; i < this.jugadores.length; i++) {  // Recorre la lista de jugadores.
      let jugador = this.jugadores[i];
      let resultado = jugador.nombre + ': ' + jugador.puntaje;  // Crea una cadena con el nombre del jugador y su puntaje.
      resultados.push(resultado);  // Agrega el resultado al array de resultados.
    }

    return resultados;  // Devuelve el array con los puntajes de todos los jugadores.
  }
}

// Clase Liga que representa una liga con una lista de equipos.
class Liga {
  // Constructor que inicializa una liga con una lista de equipos vacía.
  constructor() {
    this.equipos = [];  // Inicializa la propiedad `equipos` como un array vacío.
  }

  // Método para agregar un nuevo equipo a la liga.
  agregarEquipo(equipo) {
    this.equipos.push(equipo);  // Agrega el equipo al array de equipos.
    return equipo;  // Devuelve el equipo agregado.
  }

  // Método para obtener un equipo de la liga por nombre.
  obtenerEquipo(nombreEquipo) {
    for (let i = 0; i < this.equipos.length; i++) {  // Recorre la lista de equipos.
      let equipo = this.equipos[i];
      if (equipo.nombre === nombreEquipo) {  // Compara el nombre del equipo con el nombre buscado.
        return equipo;  // Devuelve el equipo si se encuentra.
      }
    }
  }
}

// Crea una nueva instancia de Liga.
let liga = new Liga();

// Añade un event listener al botón con id `crearEquipo` para manejar el clic.
document.querySelector('#crearEquipo').addEventListener('click', () => {
  let nombre = document.querySelector('#nombre-equipo').value;  // Obtiene el valor del input con id `nombre-equipo`.
  let equipo = new Equipo(nombre);  // Crea una nueva instancia de Equipo con el nombre proporcionado.
  liga.agregarEquipo(equipo);  // Agrega el nuevo equipo a la liga.
  let item = document.createElement('li');  // Crea un nuevo elemento de lista.
  item.innerText = equipo.nombre;  // Establece el texto del elemento de lista con el nombre del equipo.
  document.querySelector('#lista-equipo').appendChild(item);  // Agrega el nuevo elemento de lista a la lista con id `lista-equipo`.
});

// Añade un event listener al botón con id `agregarJugador` para manejar el clic.
document.querySelector('#agregarJugador').addEventListener('click', () => {
  let nombreEquipo = document.querySelector('#nombre-equipo-jugador').value;  // Obtiene el valor del input con id `nombre-equipo-jugador`.
  let nombreJugador = document.querySelector('#nombre-jugador').value;  // Obtiene el valor del input con id `nombre-jugador`.
  let equipo = liga.obtenerEquipo(nombreEquipo);  // Obtiene el equipo correspondiente al nombre proporcionado.
  
  try {
    equipo.agregarJugador(nombreJugador);  // Intenta agregar el nuevo jugador al equipo.
  } catch (error) {
    // Manejo de errores si ocurre algún problema al agregar el jugador (en este caso, no se realiza ninguna acción específica).
  }

  let item = document.createElement('li');  // Crea un nuevo elemento de lista.
  item.innerText = equipo.listarJugador().nombre;  // Establece el texto del elemento de lista con el nombre del primer jugador en el equipo.
  document.querySelector('#lista-jugador').appendChild(item);  // Agrega el nuevo elemento de lista a la lista con id `lista-jugador`.
});

// Añade un event listener al botón con id `asignarPuntos` para manejar el clic.
document.querySelector('#asignarPuntos').addEventListener('click', () => {
  let nombreEquipo = document.querySelector('#nombre-equipo-puntos').value;  // Obtiene el valor del input con id `nombre-equipo-puntos`.
  let nombreJugador = document.querySelector('#nombre-jugador-puntos').value;  // Obtiene el valor del input con id `nombre-jugador-puntos`.
  let puntos = parseInt(document.querySelector('#puntos').value);  // Obtiene el valor del input con id `puntos` y lo convierte a entero.
  let equipo = liga.obtenerEquipo(nombreEquipo);  // Obtiene el equipo correspondiente al nombre proporcionado.
  let jugador = equipo.encontrarJugador(nombreJugador);  // Encuentra el jugador correspondiente al nombre proporcionado.
  jugador.asignarPuntos(puntos);  // Asigna los puntos al jugador.
  document.querySelector('#puntajes').innerText = jugador.puntaje;  // Muestra el puntaje actualizado del jugador en el elemento con id `puntajes`.
});

// Añade un event listener al botón con id `listarPuntajes` para manejar el clic.
document.querySelector('#listarPuntajes').addEventListener('click', () => {
  let nombreEquipo = document.querySelector('#nombre-equipo-listar').value;  // Obtiene el valor del input con id `nombre-equipo-listar`.
  let equipo = liga.obtenerEquipo(nombreEquipo);  // Obtiene el equipo correspondiente al nombre proporcionado.
  let listaPuntajes = equipo.listarPuntajes();  // Obtiene la lista de puntajes del equipo.
  let lista = document.querySelector('#lista-puntajes');  // Obtiene el elemento con id `lista-puntajes`.
  
  // Recorre la lista de puntajes y crea un elemento de lista para cada puntaje.
  for (let i = 0; i < listaPuntajes.length; i++) {
    let puntaje = listaPuntajes[i];  // Obtiene el puntaje actual.
    let item = document.createElement('li');  // Crea un nuevo elemento de lista.
    item.innerText = puntaje;  // Establece el texto del elemento de lista con el puntaje.
    lista.appendChild(item);  // Agrega el nuevo elemento de lista a la lista con id `lista-puntajes`.
  }
});
