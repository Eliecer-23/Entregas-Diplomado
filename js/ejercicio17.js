/** Ejercicio 17: Lista de estudiantes */

let estudiantes17 = [];

/** pedir datos de 3 estudiantes */
for (let i = 1; i <= 3; i++) {
    let nombre = prompt("Nombre del estudiante " + i + ":");

    let nota;
    do {
        nota = parseFloat(prompt("Nota del estudiante " + i + " (1 a 5):"));
    } while (isNaN(nota) || nota < 1 || nota > 5);

    estudiantes17.push({
        nombre: nombre,
        nota: nota
    });
}

/**mostrar en html */
let contenedor17 = document.getElementById("ejercicio17");

let salida17 = "<h3>Lista de estudiantes:</h3>";

for (let i = 0; i < estudiantes17.length; i++) {
    salida17 += `${estudiantes17[i].nombre} - Nota: ${estudiantes17[i].nota}<br>`;
}

/**insertar una sola vez */
contenedor17.innerHTML = salida17;

/**Mostrar alerta */
for (let i = 0; i < estudiantes17.length; i++) {
    alert(`El estudiante ${estudiantes17[i].nombre} su nota final es: ${estudiantes17[i].nota}`);
}