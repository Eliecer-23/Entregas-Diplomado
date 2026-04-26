/** Ejercicio 17: Lista de estudiantes */

    let estudiantes = [];

    /** pedir datos de 3 estudiantes */

    for (let i = 1; i <= 3; i++) {
        let nombre = prompt("Nombre del estudiante " + i + ":");
       
       
        let nota;
        do {
            nota = parseFloat(prompt("Nota del estudiante " + i + " (1 a 5 ): "));

        } while (isNaN(nota) || nota < 1 || nota > 5);
        
        estudiantes.push({
            nombre: nombre,
            nota: nota
        });
           
    } 
    /**mostrar en html */
    let contenedor = document.getElementById("ejercicio17");

    let salida = "<h3>Lista de estudiantes:</h3>";
    
        
    for (let i = 0; i < estudiantes.length; i++) {
        salida += `${estudiantes[i].nombre} - nota: ${estudiantes[i].nota} <br>`;
     }

     /**insertar una sola vez */
     contenedor.innerHTML = salida;

     /**Mostra alerta */
     for (let i = 0; i < estudiantes.length; i++) {
       alert(`El estudiante ${estudiantes[i].nombre}, su nota final es : ${estudiantes[i].nota}`);
        
  } 