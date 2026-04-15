/**ejercicio 6 */
/** Aprobación y Reprobación */

let nota1= parseFloat(prompt("ingresa la primera nota"));
let nota2 = parseFloat(prompt("ingresa la segunda nota"));
let nota3 = parseFloat(prompt("ingresa la tercera nota"));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("debes ingresar solo numeros validos para las notas");
    console.log("mostrar error: una o más no son validas");
} else {
    let promedio = (nota1 + nota2 + nota3) /3;
    console.log("El promedio es:", promedio.toFixed(2));

    if (promedio >= 6) {
        alert("aprobado con promedio de "+ promedio.toFixed(2));
        console.log("resultado: Aprobado");
    
    } else {
        alert("reprobado con promedio de " + promedio.toFixed(2));
        console.log("resultado reprobado");
    }
}
/**fin ejercicio 6 */