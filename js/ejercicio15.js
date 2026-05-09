/**ejercicio 15: Buscador de nombres */

let nombres = ["Ana", "Luis", "Carlos", "Maria", "Jorge"];
let buscar = prompt("Ingresar un nombre para buscar:");

/**validacion de entrada */
if (buscar === null) {
    alert("Cancelaste la busqueda.");
} else {
    buscar = buscar.trim();

    if (buscar === "") {
        alert("No ingresaste ningun nombre.");
    } else {
        let textoBusqueda = buscar.toLowerCase();

        let encontrado = nombres.some(
            nombre => nombre.toLowerCase() === textoBusqueda
        );

        let contenedor = document.getElementById("ejercicio15");

        contenedor.innerHTML = encontrado
            ? `El nombre <strong>${buscar}</strong> SI esta en la lista.<br>`
            : `El nombre <strong>${buscar}</strong> NO esta en la lista.<br>`;
    }
}