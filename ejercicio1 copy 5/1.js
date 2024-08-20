class Producto {
  // El constructor define las propiedades `nombre` y `precio` del objeto Producto.
  constructor(nombre, precio) {
    this.nombre = nombre;  // Asigna el valor del parámetro `nombre` a la propiedad `nombre` del objeto.
    this.precio = precio;  // Asigna el valor del parámetro `precio` a la propiedad `precio` del objeto.
  }

  // Método que devuelve una cadena con el nombre y el precio del producto.
  mostrar() {
    return this.nombre + this.precio; // Devuelve la combinación del nombre y el precio como un solo string.
  }
}

// Crea un array vacío para almacenar los productos.
let productos = [];

// Se agrega un evento `click` al botón con id `agregarProducto`.
document.querySelector('#agregarProducto').addEventListener('click', () => {
    
    // Obtiene el valor del input con id `nombre-producto` y lo almacena en la variable `nombre`.
    let nombre = document.querySelector('#nombre-producto').value;
    
    // Obtiene el valor del input con id `precio-producto`, lo convierte a número y lo almacena en la variable `precio`.
    let precio = parseFloat(document.querySelector('#precio-producto').value);

    // Crea un nuevo objeto `Producto` con los valores de `nombre` y `precio`.
    let producto = new Producto(nombre, precio);
    
    // Agrega el nuevo producto al array `productos`.
    productos.push(producto);

    // Selecciona la lista con id `productos-lista` donde se mostrará el producto.
    let lista = document.querySelector('#productos-lista');
    
    // Crea un nuevo elemento `li` para agregarlo a la lista.
    let item = document.createElement('li');
    
    // Establece el texto del elemento `li` como la cadena devuelta por el método `mostrar` del producto.
    item.innerText = producto.mostrar();
    
    // Agrega el nuevo elemento `li` a la lista.
    lista.appendChild(item);
});
