export default class Admin{
    constructor(nombre){
        //tipo ya definido desde el constructor
        this.tipo = 'Administrador';
        this.nombre = nombre
    }
    mostrarInfo(){
        return `Nombre: ${this.nombre} Tipo: ${this.tipo}`
    }

}