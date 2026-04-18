 /**Ejercicio 20: Reemplazo de Array */

    let numeros = [ 10, 20, 30, 40, 50];
    
    let nuevovalor = parseInt(prompt("ingresa un nuevo numero:"));
    let posicion = parseInt(prompt("Ingresa la posicion a reemplazar (0 a 4);"));

    if (posicion >= 0 && posicion < numeros.length) {
        numeros[posicion] = nuevoValor;
    } else {
        document.write("Posicion invalida. <br>");
    }
    document.write("<h3>Array Final:</h3>");
    for (let i = 0; i < numeros.length; i++) {
        document.write(numeros[i] + "<br>");
    }