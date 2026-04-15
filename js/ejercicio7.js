/**inicio ejercicio 7 */
/**conversor de monedas */

let valorDolares = parseFloat(prompt("Ingresa el valor en dolarers (USD):"));
let opcion = parseInt(prompt("elige la moneda a convertir: \n1. euros\n2. pesos colombianos\n3. soles peruanos"));

if (isNaN(valorDolares) || isNaN(opcion)) {
    alert =("debe ingresar solo numeros validos.");
    console.log("eroor: entrada no valida.");
} else {
    let resultado = 0;
    let moneda = "";

    switch(opcion) {

        case 1:
            resultado = valorDolares * 0.85; 
            moneda = "euros";
            break;

        case 2:
            resultado = valorDolares * 3700; 
            moneda = "pesos colombianos";
            break;

        case 3:
            resultado = valorDolares * 3.73; 
            moneda = "soles peruanos";
            break;
        default:
            alert("opcion no valida, intenta nuevamente");
            console.log("opcion fuera d erango");
            break;
            
    }
        if (moneda !=="") {
        alert(`$${valorDolares.toFixed(2)} USD equivalen a ${resultado.toFixed(2)} ${moneda}. `);
        console.log(`conversion: ${valorDolares} USD, ${resultado.toFixed(2)} ${moneda} `);
        }