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
/**fin del ejercicio 6 */
