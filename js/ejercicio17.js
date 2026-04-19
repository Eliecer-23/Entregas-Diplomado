/** Ejercicio 17: Lista de estudiantes */

    let estudiantes = [];

    /** pedir datos de 3 estudiantes */

    for (let i = 1; i <= 3; i++) {
        let nombre = prompt("Nombre del estudiante" + i + ":");
        let nota = parseFloat(prompt("Nota del estudiante " + i + ":"));

        let estudiante = {
            nombre: nombre,
            nota: nota
        };

        estudiantes.push(estudiante);

    } 
    /**mostrar en html */
    let contenedor = document.getElementById("ejercicio17");

    contenedor.innerHTML = "<h3>lis de estudiantes:</h3";
        
    for (let i = 0; i < estudiantes.length; i++) {
        contenedor.innerHTML +=
            `${estudiantes[i].nombre} - nota: ${estudiantes[i].nota} <br>`
  } 