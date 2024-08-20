import UsuarioFactory from "./UsuarioFactory.js";


// Evento clock al boton de id crearUsuario
document.querySelector('#crearUsuario').addEventListener('click', ()=>{
    //captura del nodo del select
    let tipo = document.getElementById('tipo-usuario').value;
    //caputura del nodo del input 
    let nombre = document.getElementById('nombre_usuario').value;
    //crea la intancia de Usuario Factory y se agrega a la variable !usuario¡ a la cual se le pasa los valores obtenidos del selec e input capturados anteriormente 
    let usuario = UsuarioFactory.crearUsuario(tipo, nombre);
    //se agrega al nodo con id usuario-info ek metodo del bjeto usuario !mostrarInfo!
    document.querySelector('#usuario-info').innerText = usuario.mostrarInfo();
})