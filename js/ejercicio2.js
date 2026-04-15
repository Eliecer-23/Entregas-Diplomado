/** inicio ejercico 2 */

/**calculadora de helados  */

let calculadoraDeHelados = prompt("seleccione el topping 1. oreo, 2. kitkat, 3. brownie");
let sabor = parseInt(calculadoraDeHelados);

console.log("Usted escogio la opcion:",sabor);
alert(` usted escogio la opcion: ${sabor} `);
    let precioBase = 5;
    let precioFinal = precioBase;

/** comprobacion */
if(isNaN(sabor)){
    alert(" ingresa un numero, no texto ");
}else {
    
switch(sabor){
    case 1:
    precioFinal += 2;
    alert("escogiste oreo $" + precioFinal);
    console.log("topping oreo (+2). precio final:", precioFinal);
    break;

    case 2:
    precioFinal += 3;
    alert("escogiste kitkat $" + precioFinal);
    console.log("topping kitkat (+3). precio final:", precioFinal);
    break;

    case 3:
    precioFinal += 4;
    alert("escogiste brownie $" + precioFinal);
    console.log("topping brownie (+4). precio final:", precioFinal);
    break;

    default:
        alert("opcion no valida, se deja solo precio base");
    break;
    }   
 }  

/* fin ejercicio 2 */