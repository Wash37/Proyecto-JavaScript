function cajeroAutomatico() {
    let option;
    let continuar = true;

    while (continuar) {
        console.log("\nBienvenido al Cajero Automático");
        console.log("1. Detalles de la cuenta");
        console.log("2. Ingresar dinero");
        console.log("3. Retirar dinero");
        console.log("4- Panel de administrador (clave 3737)");
        console.log("5. Salir");
        option = parseInt(prompt("Elija una opción:"));

        switch (option) {
            case 1:
                console.log("Nombre: " + clientePrincipal.nombre);
                console.log("Balance: $" + clientePrincipal.balance);
                console.log("Estatus: " + clientePrincipal.tipo);
                break;
            case 2:
                let ingreso = parseFloat(prompt("Ingrese la cantidad de dinero a depositar:"));
                if (ingreso > 0) {
                    clientePrincipal.balance = IngresoDinero(clientePrincipal.balance, ingreso);
                    console.log("Ha ingresado: $" + ingreso);
                    console.log("Su nuevo balance es: $" + clientePrincipal.balance);
                } else {
                    console.log("Error: La cantidad a ingresar debe ser positiva.");
                }
                break;
            case 3:
                let retiro = parseFloat(prompt("Ingrese la cantidad de dinero a retirar:"));
                if (retiro > 0 && retiro <= clientePrincipal.balance) {
                    clientePrincipal.balance = RetiroDinero(clientePrincipal.balance, retiro)
                    console.log("Ha retirado: $" + retiro);
                    console.log("Su nuevo balance es: $" + clientePrincipal.balance);
                } else if (retiro > clientePrincipal.balance) {
                    console.log("Error: Fondos insuficientes.");
                } else {
                    console.log("Error: La cantidad a retirar debe ser positiva.");
                }
                break;
            case 4:
                let clave = prompt("Ingrese la contraseña")
                if (clave == 3737){
                    console.log("\nClave correcta");
                    console.log("Panel de administrador:");
                    console.log("1. Ver lista de usuarios registrados");
                    console.log("2. Buscar clientes por estatus");
                    console.log("3. Volver al menú principal");
                    let adminOption;
                    adminOption = parseInt(prompt("Elija una opción:"));

                    switch (adminOption) {
                        case 1:
                            console.log("\nLista de usuarios registrados:");
                            for (let i = 0; i < NombreClientesRegistrados.length; i++) {
                                console.log(i + " - Usuario: " + NombreClientesRegistrados[i] + "\n   Estatus: " + EstatusClientesRegistrados[i] + "\n   Balance: " + BalanceClientesRegistrados[i]);
                            }
                            break;
                        case 2:
                            let estatusBusqueda = prompt("Ingrese el estatus a buscar (Administrador, Vip, Miembro):");
                            const resultadosBusqueda = buscarClientesPorEstatus(estatusBusqueda);
                            if (resultadosBusqueda.length > 0) {
                                console.log("\nClientes con estatus " + estatusBusqueda + ":");
                                resultadosBusqueda.forEach((cliente, index) => {
                                    console.log((index + 1) + ". Nombre: " + cliente.nombre + " - Balance: $" + cliente.balance);
                                });
                            } else {
                                console.log("No se encontraron clientes con el estatus " + estatusBusqueda);
                            }
                            break;
                        case 3:
                            console.log("Volviendo al menú principal");
                            break;
                        default:
                            console.log("Porfavor elija una opcion valida.");
                            break;
                    }
                } else {
                    console.log("Clave incorrecta");
                }
                break;
            case 5:
                console.log("Gracias por usar el cajero automático. ¡Adiós!");
                continuar = false;
                break;
            default:
                console.log("Opción no válida. Por favor, elija una opción del 1 al 4.");
                break;
        }

        if (option !== 5) {
            continuar = confirm("¿Desea realizar otra operación?");
        }
    }
}

cajeroAutomatico();

