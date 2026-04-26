 /**Ejercicio 20: Reemplazo de Array */

    let numeros = [ 10, 20, 30, 40, 50];
    
    let nuevoValor20 = parseInt(prompt("ingresa un nuevo numero:"));
    let posicion20 = parseInt(prompt("Ingresa la posicion a reemplazar (0 a 4);"));

    let contenedor20 = document.getElementById("ejercicio20");

    
    
    if (posicion20 >= 0 && posicion20 < numeros20.length) {
        numeros20[posicion20] = nuevoValor20;
    } else {
        contenedor20.innerHTML = "Posicion invalida. <br>";
    }
    /**mostrar array final */
    contenedor20.innerHTML += "<h3>array final:</h3>"
    
    for (let i = 0; i < numeros.length; i++) {
        contenedor20.innerHTML += numeros[i] + "<br>";
    }