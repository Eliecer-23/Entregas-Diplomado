/**inicio ejercicio 3 */
/**par o impar */
let numeros = prompt("ingrese en numero para verificar si es par o impar");
let numero = parseInt(numeros);

/** comprobacion */
if(isNaN(numero)){
    alert(" ingrese un numero valido ");
    console.log("ingrese un numero valido");
} else {
    if(numero % 2 === 0){
        alert("el numero es par");
        console.log("el numero es par");
    } else {
        alert("el numero es impar");
        console.log("el numero es impar");
    }
}

/**fin del ejercicio 3 */