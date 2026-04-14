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

        /**calculadora basica */

        let calculadoraBasica = prompt(" selecciona la operacion: 1. suma, 2. resta, 3. multiplicacion, 4. division ");
        let operacion = parseInt(calculadoraBasica);

        console.log("Usted escogio la opcion:",operacion);
        alert(` usted escogio la opcion: ${operacion} `);
        let numero1 = 20;
        let numero2 = 5;

        if(isNaN(operacion)){
            alert(" ingresa un numero valido");
            console.log("ingrese un numero valido");
        } else {
            switch(operacion) {
                case 1:
                    let suma = numero1 + numero2;
                    alert("operacion suma $"+ suma);
                    console.log("operacion suma $"+ suma);
                    break;

                case 2:
                    let resta = numero1 - numero2;
                    alert("operacion resta $" + resta);
                    console.log("operacion resta $"+ resta);
                    break;

                case 3:
                    let multiplicacion = numero1 * numero2;
                    alert("operacion multiplicacion $"+ multiplicacion);
                    console.log("operacion multiplicacion $"+ multiplicacion);
                    break

                case 4:
                    let division= numero1 / numero2;
                    alert("operacion division $"+ division);
                    console.log("operacion division $"+ division);
                    break;

                default:
                alert("Opción inválida, debe ser entre 1 y 4");
                console.log(" Opción inválida, debe ser entre 1 y 4");
                break;
    }
}

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
}
/**fin ejercicio 7 */

    /**fin Validacion Condicionales */

    /**nevel 2 */
    /**inicio de bucles */ 

    /**el mismo ejercico de tres formas */
/**Inicio ejerccion 7 */
{
    /**for */
for (let i = 10; i >= 1; i-- ) {
    document.write("Numero: " + i + "<br>");
    }
}

{
    /**while */
let i = 10;
while (i >= 1) {
    document.write("Numero: "+ i + "<br>");
    i--;
    }
}

{
/**do while*/
let i = 10;
do {
    document.write("Numero: " + i + "<br>");
    i--;
    } while (i >= 1);
}

{
    /** ejerrcicio 9: suma acumulativa */
    
     let N = parseInt(prompt("ingresa un numero para sumar desde 1 hasta N:"));
     let suma = 0;

     for (let i = 1; i <= N; i++) {
        suma += i;
     }
    document.write(" La suma desde 1 hasta " + N + " es: " + suma + "<br>");
}
{
    let N = parseInt(prompt("ingresa un numero para sumar desde 1 hasta N:"));
    let suma = 0;
    let i = 1;

     while (i <= N) {
        suma += i;
        i++;
     }

      document.write(" La suma desde 1 hasta " + N + " es: " + suma + "<br>");
}

{
    let N = parseInt(prompt("ingresa un numero para sumar desde 1 hasta N:"));
    let suma = 0;
    let i = 1;

    do {
       suma += i;
        i++; 
    } while (i <N);

    document.write(" La suma desde 1 hasta " + N + " es: " + suma + "<br>");
}

{
    /**ejercicio 10: Buscador de Multiplos */

    for(let i = 1; i <= 50; i++){
        if (i % 5 === 0) {
            document.write("Multiplo de 5: " +i + "<br>");
        }
    }
}

{
    let = 1;

    while (i <=50) {
        if ( i % 5 === 0) {
           document.write("Multiplo de 5: " +i + "<br>"); 
        }
        i++;
    }
}

{
    let = 1;

    do {
        if (i % 5 === 0) {
            document.write("Multiplo de 5: " +i + "<br>");  
        }
        i++;
    } while (i <= 50);
}

{
    /**ejercicio 11:la clave maestra con while  */

    let clave = prompt("Ingresa la contraseña:")
    const correcta = "SESAMO123";

    while (clave !== correcta) {
        clave = prompt("Contraseña incorrecta. Intenta de nuevo:");
    }
    document.write("Contraseña incorrecta. Intenta de nuevo:");
}
 {
    const correcta = "SESAMO123";
    let clave;
    do {
        clave = prompt("ngresa la contraseña:");
    }while (clave !== correcta);
    document.write("Acceso concedido. Contraseña correcta.");
 }

 {
    /** ejercicio 12: Tabla de Potencias*/
    let numero = parseInt(prompt("Ingresa un numero Para calcular sus potencias:"));

    for (let i = 1; i <= 5; i++) {
        let potencia = numero ** i;
        document.write(numero + "elevado a " + i + " = " +potencia + "<br>");
    }
 }

 {
     let numero = parseInt(prompt("Ingresa un numero Para calcular sus potencias:"));
     let i = 1;

     while (i <= 5) {
    let potencia = numero ** i;
        document.write(numero + "elevado a " + i + " = " +potencia + "<br>");
        i++;  
     }
 }
  {
    let numero = parseInt(prompt("Ingresa un numero Para calcular sus potencias:"));
     let i = 1;
     do {
        let potencia = numero ** i;
        document.write(numero + "elevado a " + i + " = " +potencia + "<br>");
        i++;
     } while (i <= 5);
  }

 {
    /**filtro de positivos: do-while */

    let numero;
    
    do {
        numero = parseInt(prompt("Ingresa un numero (negativo para determinar):"));
        if (numero >= 0) {
            document.write("Numero Ingresado: " + numero +"<br>");
        }

    }while (numero >= 0);

    document.write("Has ingresado un numero negativo. Fin del ejercicio. <br>");

 }

 {
     /**nivel 3: Estructura de datos y logica combinada */
    /**ejercicio 14: el array de compras  */

    let comoras = [];
  
    for (let i = 1; i <=5; i++) {
        let producto = prompt("ingresa el producto " + 1 + ":");
        compras.push(producto);
    }

    document.write("<h3>Lista de compras: </h3>");
    for (let i = 0; i < compras.length; i++) {
        document.write(comoras[i] + "<br>");
    }

 }

 {
    /**ejercicio 15: Buscador de nombres */

    let nombre = ["Ana", "Luis", "Carlos", "Maria", "Jorge"];
    let buscar = prompt("Ingresar un nombre para buscaar:");
    let encontrado = false;

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].toLowercase() === buscar.toLowerCase()) {
            encontrado = true;
            break;
        }
    }
    if (encontrado) {
        document.write(" El nombre " + buscar + "Si esat en la lista . <br>");
    } else {
        document.write(" el nombre " + buscar + " NO esta en la lista. <br>");
    }
 }

 {
    /**Ejercicio 16: Objeto auto */

    let auto = {
        marca: "Toyota",
        modelo: "Corola",
        año: 2018

    };

    let nuevoAño = parseInt(prompt("Ingresa el nuevo año del auto: "));
    auto.año = nuevoAño;
    
    document.write("<h3>auto actualizado: </h3>");
    document.write("Marca: " + auto.marca + "<br>");
    document.write("Modelo: " + auto.modelo + "<br>");
    document.write("Año " + auto.año + "<br>");
 } 

 {
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
 }

 {
    /**ejercicico 18: Carrito con descuento */

    let total = 0;
    let precio;

    do {
        precio = parseFloat(prompt("Ingresa el perecio del produccto (0 para terminar):"));
        if (precio > 0) {
            total += precio;
        }
    } while (precio !== 0);

    if (total > 100) {
        total = total * 0.90; /** 10% descuento */
    }

    document.write("total a pagar: $" + total + "<br>");
 }

 {
    /**ejercicio 19: El menu Infinito */

    let opcion;

    do {
        opcion = parseInt(prompt("Menu:\n1. saludar\n2. Despedirse\n3. salir\nElegir una opcion:"));

        if (opcion === 1) {
            document.write("Hola, Usuario!<br>");
        } else if (opcion ===2) {
            document.write("Adios, Usuario!<br>");
        }
    } while (opcion !== 3);
    document.write("has salido del men. <br>");
 }

 {
    /**Ejercicio 20: Reemplazo de Array */

    let numeros = [ 10, 20, 30, 40, 50];
    
    let nuevovalor = parseInt(prompt("ingresa un nuevo numero:"));
    let posicion = parseInt(prompt("Ingresa la posicion a reemplazar (0 a 4);"));

    if (posicion >= 0 && posicion < numeros.length) {
        numeros[posicion] = nuevoValor;
    } else {
        document.write("Posicion invalida. <br>");
    }
    document.write("<h3>Array Final:</h3>");
    for (let i = 0; i < numeros.length; i++) {
        document.write(numeros[i] + "<br>");
    }
 }