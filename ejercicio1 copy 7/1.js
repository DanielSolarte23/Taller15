// Clase Documento que representa un documento con un título y contenido.
class Documento {
    // Constructor que inicializa el documento con un título y contenido.
    constructor(titulo, contenido) {
        this.titulo = titulo;  // Asigna el valor del parámetro `titulo` a la propiedad `titulo`.
        this.contenido = contenido;  // Asigna el valor del parámetro `contenido` a la propiedad `contenido`.
    }
    
    // Método para mostrar el título y el contenido del documento.
    mostrar() {
        // Devuelve una cadena que incluye el título y el contenido del documento.
        return `Título: ${this.titulo}, Contenido: ${this.contenido}`;
    }
}

// Clase GestorDocumentos que maneja una colección de documentos.
class GestorDocumentos {
    // Constructor que inicializa el gestor con un array vacío de documentos.
    constructor() {
        this.documentos = [];  // Inicializa la propiedad `documentos` como un array vacío.
    }

    // Método para agregar un documento al array de documentos.
    agregarDocumento(documento) {
        this.documentos.push(documento);  // Agrega el documento al array `documentos`.
    }

    // Método para listar todos los documentos almacenados.
    listarDocumentos() {
        let resultado = '';  // Inicializa una cadena vacía para almacenar el resultado.
        // Itera sobre todos los documentos en el array `documentos`.
        for (let i = 0; i < this.documentos.length; i++) {
            let doc = this.documentos[i];  // Obtiene el documento actual.
            resultado += doc.mostrar();  // Agrega la cadena devuelta por `mostrar` al resultado.
        }
        return resultado;  // Devuelve la cadena resultante con todos los documentos.
    }
}

// Crea una nueva instancia de la clase Documento con título 'Doc1' y contenido 'Contenido del Documento 1'.
let doc1 = new Documento('Doc1', 'Contenido del Documento 1');

// Crea una nueva instancia de la clase Documento con título 'Doc2' y contenido 'Contenido del Documento 2'.
let doc2 = new Documento('Doc2', 'Contenido del Documento 2');

// Crea una nueva instancia de la clase GestorDocumentos para gestionar los documentos.
let gestor = new GestorDocumentos();

// Agrega el documento `doc1` al gestor de documentos.
gestor.agregarDocumento(doc1);

// Agrega el documento `doc2` al gestor de documentos.
gestor.agregarDocumento(doc2);

// Muestra en la consola la lista de documentos gestionados por el `gestor`.
console.log(gestor.listarDocumentos());
