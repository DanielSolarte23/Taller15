class Notificador {
  // Constructor de la clase `Notificador`, inicializa un array vacío de `usuarios`.
  constructor() {
    this.usuarios = [];  // Array para almacenar los usuarios suscritos.
  }

  // Método para suscribir un usuario al notificador.
  suscribir(usuario) {
    this.usuarios.push(usuario);  // Agrega un nuevo usuario al array `usuarios`.
  }

  // Método para enviar una notificación a todos los usuarios suscritos.
  notificar(mensaje) {
   for (let i = 0; i < this.usuarios.length; i++) {  // Itera sobre cada usuario suscrito.
    this.usuarios[i].recibirNotificacion(mensaje);  // Llama al método `recibirNotificacion` de cada usuario.
    }
  }
}

class Usuario {
  // Constructor de la clase `Usuario`, recibe un nombre y crea un array vacío de notificaciones.
  constructor(nombre) {
    this.nombre = nombre;  // Asigna el nombre del usuario.
    this.notificaciones = [];  // Array para almacenar las notificaciones recibidas.
  }

  // Método para recibir una notificación y agregarla al array `notificaciones`.
  recibirNotificacion(mensaje) {
    this.notificaciones.push(mensaje);  // Agrega el mensaje de notificación al array.
  }
  
  // Método para obtener la última notificación recibida por el usuario.
  obtenerUltimaNotificacion() {
        return this.notificaciones[this.notificaciones.length - 1];  // Devuelve la última notificación del array.
     }
}

let notificador = new Notificador();  // Crea una instancia del `Notificador`.
let usuarios = [];  // Crea un array vacío para almacenar los usuarios.

document.querySelector('#agregarUsuario').addEventListener('click', () => {
    // Obtiene el valor del input con id `nuevo-usuario` y lo asigna a `nombre`.
    let nombre = document.querySelector('#nuevo-usuario').value;
    
    // Crea un nuevo usuario con el nombre ingresado.
    let usuario = new Usuario(nombre);
    
    // Agrega el nuevo usuario al array `usuarios`.
    usuarios.push(usuario);
    
    // Suscribe el nuevo usuario al notificador.
    notificador.suscribir(usuario);
    
    // Selecciona la lista donde se mostrará el usuario agregado.
    let lista = document.querySelector('#usuarios-lista');
    
    // Crea un nuevo elemento `li` para representar al usuario.
    let item = document.createElement('li');
    
    // Establece el texto del `li` como el nombre del usuario.
    item.innerText = nombre;
    
    // Agrega el `li` a la lista.
    lista.appendChild(item);
});

document.querySelector('#enviarActualizacion').addEventListener('click', () => {
    // Obtiene el mensaje de la actualización del input con id `actualizacion`.
    let mensaje = document.querySelector('#actualizacion').value;
    
    // Envía el mensaje a todos los usuarios suscritos.
    notificador.notificar(mensaje);
    
    // Selecciona la lista donde se mostrarán las actualizaciones.
    let lista = document.querySelector('#actualizaciones-lista');
    
    // Itera sobre cada usuario suscrito para mostrar su última notificación.
    for (let i = 0; i < notificador.usuarios.length; i++) {
    let usuario = notificador.usuarios[i];  // Obtiene el usuario actual.
    let item = document.createElement('li');  // Crea un nuevo elemento `li`.
    
    // Establece el texto del `li` como la última notificación del usuario.
    item.innerText = usuario.obtenerUltimaNotificacion();
    
    // Agrega el `li` a la lista.
    lista.appendChild(item);
}
});
