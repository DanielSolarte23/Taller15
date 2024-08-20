export default class Usuario{
    constructor(nombre){
        //tipo ya definido desde el contructor
        this.tipo = 'Usuario';
        this.nombre = nombre;
    }

    mostrarInfo(){
        return `Nombre: ${this.nombre} Tipo: ${this.tipo}`
    }
}