import Admin from "./Admin.js";
import Usuario from "./usuario.js";

class UsuarioFactory {
    //metodo estatico de crearUsuario el cual permite que podamos utilizar el motodo sin necesidad de crear una instancia
    static crearUsuario(tipo, nombre) {
        //valida si tipo == a "admin"
        if (tipo == 'admin') {
            //retorna una instancia de new admin con el parametro nombre
            return new Admin(nombre);
        }
        //valida si el tipo es usurio
        if (tipo == 'usuario'){
            //retorna en una instancia de new usuario con su parametr nombre
            return new Usuario(nombre);
        }
        
    }
}

export default UsuarioFactory;