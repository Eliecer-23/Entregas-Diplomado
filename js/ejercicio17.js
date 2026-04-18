/** Ejercicio 17: Lista de estudiantes */

    let estudiantes = [];

    for (let i = 1; i <= 3; i++) {
        let nombre = prompt("Nombre del estudiante" + i + ":");
        let nota = parseFloat(prompt("Nota del estudiante " + i + ":"));

        let estudiante = {
            nombre: nombre,
            nota: nota
        };

        estudiantes.push(estudiante);

    } 

    document.write("<h3>Lista de estudiantes:<h3>");
    for (let i = 0; i < estudiantes.length; i++) {
        document.write(
            estudiantes[i].nombre + "- Nota:" + estudiantestudiante[i].nota + "<br>");
    }
 