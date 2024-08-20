//Define la clase producto
class Producto {
    //contructor con atrubutos nombre y cantidad
    constructor(nombre, cantidad) {
        //agrega cantidad a this.cantidad
        this._nombre = nombre
        //verifica si cantidad es mayor o igual a cero
        if (cantidad >= 0) {
            //si se cumple la anterior condicion agregar el valor de cantidad a this._cantidad
            this._cantidad = cantidad;
            //sino se cumple
        } else {
            //establece le valor de This._cantidad en 0
            this._cantidad = 0
        }
    }

    //muestra el valor de this._nombre
    getNombre() {
        return this._nombre
    }

    //Permite cambiar el valor de this._nombre
    setNombre(nombre) {
        this._nombre = nombre
    }
    //muestra el valor de this._cantidad
    getCantidad() {
        return this._cantidad;
    }
    //agrega una cantidad a this._cantidad pero antes hace una validacion y tiene como parametro **cantidad**
    agregarCantidad(cantidad) {
        //valida si cantidad es mayor a cero
        if (cantidad > 0) {
            //si se cumple la condicion a this._cantidad le adiciona con += el nuevo valor de cantidad
            this._cantidad += cantidad;
        }
    }
    //metodo para retirar cantidad la cual realiza una validacion y tiene como parametro **cantidad**
    retirarCantidad(cantidad) {
        //valida si el parametro pasado ¡cantidad! es mayor a cero y que this._cantidad - cantidad sea >= 0 esto para evitar valores negativos
        if (cantidad > 0 && this._cantidad - cantidad >= 0) {

            //realiza el decremento quitantole a this._cantidad -= el valor del parametro cantidad
            this._cantidad -= cantidad;
        }
    }
}

//declara una variable sin inicializar llamada producto
let producto;
//llama al nodo con id #llamarP y le agrega un evento click
document.querySelector('#agregarP').addEventListener('click', () => {
    //en una vcariable llamada nombre con el metodo .value toma el valor del input
    let nombre = document.getElementById('nombre').value;
    //en una vcariable llamada cantidad con el metodo .value toma el valor del input
    let cantidad = parseInt(document.getElementById('cantidad').value);

    //crea un objeto producto y declara la instancia new Producto pasando como valores de this._nombre y this._cantidad el valor de las variables enteriormente declaradas nombre y cantidad
    producto = new Producto(nombre, cantidad);
    //captura el nodo con id 'producto-info y con el metodo innerText concatena el metodo de getNombre el cual muestra el nombre y el metodo get.cantidad el cual muestra la cantidad
      document.getElementById('producto-info').innerText =  producto.getNombre()+ " "  + producto.getCantidad(); 
  })

