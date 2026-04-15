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