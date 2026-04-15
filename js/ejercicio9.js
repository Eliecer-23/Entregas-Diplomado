/** ejerrcicio 9: suma acumulativa */
    
     let N = parseInt(prompt("ingresa un numero para sumar desde 1 hasta N:"));
     let suma = 0;

     for (let i = 1; i <= N; i++) {
        suma += i;
     }
    document.write(" La suma desde 1 hasta " + N + " es: " + suma + "<br>");

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