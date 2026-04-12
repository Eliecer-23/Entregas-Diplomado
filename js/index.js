/** inicio Validacion Condicionales */
/** inicio ejercicio 1 */
        /** validador de edad*/

    let solicitudDeEdad1 = ("cuantos años tienes");
    let edad1 = 17;
    let edad2 = 21;

    if(edad1 <18){
        console.log("acceso denegado");
    }else {
        console.log("puede acceder");
    }

    /**validador ingreso */
 if(edad2 >18){
        console.log("Bienvenido");
    }else {
        console.log("no es bienvenido");
    }
/** resultado */
alert(`edad1 es: ${edad1}`);

/* fin ejercicio 1 */


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

/**incio ejercicio 4 */

    /** Dia de la semana */

    let diaDeLaSemana = prompt("ingrese el numero de 1 al 7 para determinar el dia de la semana:");
    let dia = parseInt(diaDeLaSemana);

        if (isNaN(dia)) {
            alert(" ingrese un numero valido ");
            console.log("ingrese un numero valido");
        } else {
            switch (dia) {
        
            case 1:
                alert("lunes");
                    console.log("lunes");
                    break;

            case 2:
                alert("martes");
                    console.log("marte");
                    break;
           
            
             case 3:
                alert("miercoles");
                    console.log("miercoles");
                    break;
             
            case 4:
                alert("jueves");
                    console.log("jueves");
                    break;
                    
            case 5:
                alert("viernes");
                    console.log("viernes");
                    break;

            case 6:
                alert("sabado");
                    console.log("sabado");
                    break;
                
            case 7:
                alert("domingo");
                    console.log("domingo");
                    break;                      
            default: 
            alert("numero invalido es: entre 1 y 7");  
            console.log("numero invalido es: entre 1 y 7");      
                    
            }
        }
        /**fin ejercicio 4 */

        /** inicio ejercicio 5 */

        
    /**fin Validacion Condicionales */