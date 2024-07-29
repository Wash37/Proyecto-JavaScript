let balance = 1000; // Balance inicial

function cajeroAutomatico() {
    let option;
    let continuar = true;

    while (continuar) {
        console.log("\nBienvenido al Cajero Automático");
        console.log("1. Ver balance");
        console.log("2. Ingresar dinero");
        console.log("3. Retirar dinero");
        console.log("4. Salir");
        option = parseInt(prompt("Elija una opción:"));

        switch (option) {
            case 1:
                console.log("Su balance actual es: $" + balance);
                break;
            case 2:
                let ingreso = parseFloat(prompt("Ingrese la cantidad de dinero a depositar:"));
                if (ingreso > 0) {
                    balance += ingreso;
                    console.log("Ha ingresado: $" + ingreso);
                    console.log("Su nuevo balance es: $" + balance);
                } else {
                    console.log("Error: La cantidad a ingresar debe ser positiva.");
                }
                break;
            case 3:
                let retiro = parseFloat(prompt("Ingrese la cantidad de dinero a retirar:"));
                if (retiro > 0 && retiro <= balance) {
                    balance -= retiro;
                    console.log("Ha retirado: $" + retiro);
                    console.log("Su nuevo balance es: $" + balance);
                } else if (retiro > balance) {
                    console.log("Error: Fondos insuficientes.");
                } else {
                    console.log("Error: La cantidad a retirar debe ser positiva.");
                }
                break;
            case 4:
                console.log("Gracias por usar el cajero automático. ¡Adiós!");
                continuar = false;
                break;
            default:
                console.log("Opción no válida. Por favor, elija una opción del 1 al 4.");
                break;
        }

        if (option !== 4) {
            continuar = confirm("¿Desea realizar otra operación?");
        }
    }
}

cajeroAutomatico();
