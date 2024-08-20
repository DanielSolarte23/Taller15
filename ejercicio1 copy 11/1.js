// Clase Area que representa una área con una lista de vendedores.
class Area {
  // Constructor que inicializa el área con un nombre y una lista vacía de vendedores.
  constructor(nombre) {
    this.nombre = nombre;        // Asigna el valor del parámetro `nombre` a la propiedad `nombre`.
    this.vendedores = [];        // Inicializa la propiedad `vendedores` como un array vacío.
  }

  // Método para agregar un vendedor a la lista de vendedores del área.
  agregarVendedor(vendedor) {
    this.vendedores.push(vendedor);  // Agrega el vendedor al array de vendedores.
  }

  // Método para mostrar los detalles de todos los vendedores en el área.
  mostrarVendedores() {
    let resultado = '';  // Inicializa una variable para almacenar los detalles de los vendedores.
    for (let i = 0; i < this.vendedores.length; i++) {  // Recorre la lista de vendedores.
      let vendedor = this.vendedores[i];
      resultado += vendedor.mostrarDetalles();  // Agrega los detalles del vendedor al resultado.
    }
    return resultado;  // Devuelve la cadena con los detalles de todos los vendedores.
  }
}

// Clase Vendedor que representa a un vendedor con nombre y ID.
class Vendedor {
  // Constructor que inicializa el vendedor con nombre e ID.
  constructor(nombre, id) {
    this.nombre = nombre;  // Asigna el valor del parámetro `nombre` a la propiedad `nombre`.
    this.id = id;          // Asigna el valor del parámetro `id` a la propiedad `id`.
  }

  // Método para mostrar los detalles del vendedor (solo el nombre).
  mostrarDetalles() {
    return this.nombre;  // Devuelve el nombre del vendedor.
  }

  // Método para calcular la comisión del vendedor basada en las ventas.
  calcularComision(ventas) {
    return ventas * 0.1;  // Calcula la comisión como el 10% de las ventas.
  }
}

// Clase VendedorInterno que extiende la clase Vendedor con un salario base adicional.
class VendedorInterno extends Vendedor {
  // Constructor que inicializa el vendedor interno con nombre, ID y salario base.
  constructor(nombre, id, salarioBase) {
    super(nombre, id);         // Llama al constructor de la clase base `Vendedor`.
    this.salarioBase = salarioBase;  // Asigna el valor del parámetro `salarioBase` a la propiedad `salarioBase`.
  }

  // Método para mostrar los detalles del vendedor interno (nombre + salario base).
  mostrarDetalles() {
    return super.mostrarDetalles() + ' ' + this.salarioBase;  // Devuelve el nombre del vendedor y el salario base.
  }

  // Método para calcular la comisión del vendedor interno (comisión base + 200).
  calcularComision(ventas) {
    return super.calcularComision(ventas) + 200;  // Calcula la comisión base y le suma 200.
  }
}

// Clase VendedorExterno que extiende la clase Vendedor con gastos de transporte adicionales.
class VendedorExterno extends Vendedor {
  // Constructor que inicializa el vendedor externo con nombre, ID y gastos de transporte.
  constructor(nombre, id, gastosTransporte) {
    super(nombre, id);         // Llama al constructor de la clase base `Vendedor`.
    this.gastosTransporte = gastosTransporte;  // Asigna el valor del parámetro `gastosTransporte` a la propiedad `gastosTransporte`.
  }

  // Método para mostrar los detalles del vendedor externo (nombre + gastos de transporte).
  mostrarDetalles() {
    return super.mostrarDetalles() + ' ' + this.gastosTransporte;  // Devuelve el nombre del vendedor y los gastos de transporte.
  }

  // Método para calcular la comisión del vendedor externo (comisión base - 50).
  calcularComision(ventas) {
    return super.calcularComision(ventas) - 50;  // Calcula la comisión base y le resta 50.
  }
}

// Crea instancias de las áreas y vendedores.
let areaNorte = new Area('Norte');  // Crea un nuevo área llamada 'Norte'.
let areaSur = new Area('Sur');      // Crea un nuevo área llamada 'Sur'.
let vendedorInterno1 = new VendedorInterno('Ana Gómez', 2, 1500);  // Crea un nuevo vendedor interno.
let vendedorExterno1 = new VendedorExterno('Luis Fernández', 3, 300);  // Crea un nuevo vendedor externo.

// Agrega los vendedores a las áreas correspondientes.
areaNorte.agregarVendedor(vendedorInterno1);  // Agrega el vendedor interno al área 'Norte'.
areaSur.agregarVendedor(vendedorExterno1);  // Agrega el vendedor externo al área 'Sur'.

// Array que contiene las áreas.
let ar = [areaNorte, areaSur];

// Añade un event listener al botón con id `md` para mostrar detalles de los vendedores al hacer clic.
document.querySelector('#md').addEventListener('click', () => {
  for (let i = 0; i < ar.length; i++) {  // Recorre el array de áreas.
    let detalles = ar[i].mostrarVendedores();  // Obtiene los detalles de los vendedores en el área.
    document.querySelector('#detalles').innerText += ar[i].nombre + ': ' + detalles + '\n';  // Muestra el nombre del área y los detalles de los vendedores.
  }
});

// Añade un event listener al botón con id `mc` para mostrar comisiones al hacer clic.
document.querySelector('#mc').addEventListener('click', () => {
  for (let j = 0; j < ar.length; j++) {  // Recorre el array de áreas.
    let are = ar[j];
    let totalComisiones = '';  // Inicializa una variable para almacenar las comisiones.
    for (let i = 0; i < are.vendedores.length; i++) {  // Recorre la lista de vendedores en el área.
      let vendedor = are.vendedores[i];
      let comision = vendedor.calcularComision(1000);  // Calcula la comisión con 1000 como valor de ventas.
      totalComisiones += vendedor.nombre + ': ' + comision + '\n';  // Agrega el nombre del vendedor y la comisión al resultado.
    }
    document.querySelector('#comisiones').innerText += are.nombre + ':\n' + totalComisiones + '\n';  // Muestra el nombre del área y las comisiones de los vendedores.
  }
});
