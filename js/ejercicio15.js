/**ejercicio 15: Buscador de nombres */

    let nombre = ["Ana", "Luis", "Carlos", "Maria", "Jorge"];
    let buscar = prompt("Ingresar un nombre para buscaar:");
    let encontrado = false;

    /**validacion de entrada */
    if (buscar !== null) {
        buscar = buscar.trim();
    }

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].toLowerCase() === buscar.toLowerCase()) {
            encontrado = true;
            break;
        }
    }

    let contenedor = document.getElementById("ejercicio15");

    if (encontrado) {
        contenedor.innerHTML = 
        `el nombre <strong>${buscar}</strong> si en la lista.<br>`;
        } else {
        contenedor.innerHTML = 
        ` el nombre <strong>${buscar}</strong> no esta en la lista. <br>`
        }
