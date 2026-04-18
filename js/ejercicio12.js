/** ejercicio 12: Tabla de Potencias*/
    let numero = parseInt(prompt("Ingresa un numero Para calcular sus potencias:"));

    for (let i = 1; i <= 5; i++) {
        let potencia = numero ** i;
        document.write(numero + "elevado a " + i + " = " +potencia + "<br>");
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

 