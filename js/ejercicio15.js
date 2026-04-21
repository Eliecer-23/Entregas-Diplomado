/**ejercicio 15: Buscador de nombres */

    let nombre = ["Ana", "Luis", "Carlos", "Maria", "Jorge"];
    let buscar = prompt("Ingresar un nombre para buscaar:");
    let encontrado = false;

    /**validacion de entrada */
    if (buscar !== null) {
        buscar = buscar.trim();
    }

    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i].toLowerCase() === buscar.toLowerCase()) {
            encontrado = true;
            break;
        }
    }

    let contenedor = document.getElementById("ejercicio15");


    if (encontrado) {
        contenedor.innerHTML = 
        `el nombre <strong>${buscar}</strong> SI esta en la lista.<br>`;
        } else {
        contenedor.innerHTML = 
        ` el nombre <strong>${buscar}</strong> NO esta en la lista. <br>`
        }
