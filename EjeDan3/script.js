// clase ES con su metodo de calcular 
class EnvioEstandar {
    calcular(peso) {
        return peso * 5;
    }
}
// clase Ex con su metodo de calcular 
class EnvioExpress {
    calcular(peso) {
        return peso * 10;
    }
}
// clase EN con su metodo de calcular 
class EnvioNocturno {
    calcular(peso) {
        return peso * 20;
    }
}
//class calculadora con propiedad estrategia 
class CalculadoraEnvio {
    constructor(estrategia) {
        this.estrategia = estrategia;
    }
    //metodo calculador de depo el cual toma un parametro peso y un metodo de las clases de arriba
    calcular(peso) {
        return this.estrategia.calcular(peso);
    }
}

document.querySelector('#calcularEnvio').addEventListener('click', () => {
    //capturar el nodo del input el cual toma el valor del peso y lo transforma a entero
    let peso = parseFloat(document.querySelector('#peso').value)
    //captura del nodo select con cualquiera de las selecciones 
    let tipo = document.querySelector('#opcion-envio').value;

    //variable sin inicializar llamada estrategia la cual almacenara una de las condiciones que se cumplan en el siguente if anidado
    let estrategia;
    //si tipo es igual a estandar
    if (tipo === 'estandar') {
        //inicia la instancia de envioEstandar en la variable estrategia
        estrategia = new EnvioEstandar();
        //si tipo es igual a express
    } else if (tipo === 'express') {
        //inicia la instancia de EnvioExpress en la variable estrategia
        estrategia = new EnvioExpress();
        //si tipo es igual a overnight
    } else if (tipo == 'overnight') {
        //inicia la instancia de EnvioNocturno en la variable estrategia
        estrategia = new EnvioNocturno();
    } else {
        //Muestra un mensaje de error personalizado si no se seleccion ninguna de las opciones anteriores
        throw new Error('Tipo de envío desconocido')
    }

    //inicializa la instancia de new calculadora y la almacena en una variable llamada calculadora creando el objeto calculadora
    let calculadora = new CalculadoraEnvio(estrategia);
    //variable llamada costo la cual toma el objeto calculadora con su metodo calcular con la  variable peso la cual capturaba el nodo del input con el peso
    let costo = calculadora.calcular(peso);
    //captura del nodo p agregandole el valor de ¡costo!
    document.querySelector('#envio-info').innerText = costo;
})