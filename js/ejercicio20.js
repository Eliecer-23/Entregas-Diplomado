/**Ejercicio 20: Reemplazo de Array */

let numeros20 = [10, 20, 30, 40, 50];

let nuevoValor20 = parseInt(prompt("Ingresa un nuevo numero:"));
let posicion20 = parseInt(prompt("Ingresa la posicion a reemplazar (0 a 4):"));

let contenedor20 = document.getElementById("ejercicio20");

if (posicion20 >= 0 && posicion20 < numeros20.length) {
    numeros20[posicion20] = nuevoValor20;
    contenedor20.innerHTML = "Reemplazo exitoso.<br>";
} else {
    contenedor20.innerHTML = "Posicion invalida.<br>";
}

/**mostrar array final */
contenedor20.innerHTML += "<h3>Array final:</h3>";

for (let i = 0; i < numeros20.length; i++) {
    contenedor20.innerHTML += numeros20[i] + "<br>";
}