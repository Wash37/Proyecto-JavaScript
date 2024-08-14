function IngresoDinero (balance, Deposito){
    return balance + Deposito;
}

function RetiroDinero (balance, Deposito){
    return balance - Deposito;
}

function Clientes (nombre, balance, tipo){
    this.nombre = nombre;
    this.balance = balance;
    this.tipo = tipo;
}

const clientePrincipal = new Clientes("Juan", 1000, "Miembro");

const NombreClientesRegistrados = ["Juan", "Mauro", "Martin", "Enzo"];
const EstatusClientesRegistrados = ["Administrador", "Vip", "Miembro", "Vip"] 
const BalanceClientesRegistrados = [1000, 10000, 5000, 1000000]

// const clientePrincipal = new Clientes("Juan", 1000, "Miembro");

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
                    console.log("")
                    console.log("Clave correcta ")
                    console.log("Mostrando la lista de usuarios registrados")
                    for ( let i = 0; i < NombreClientesRegistrados.length; i++){
                        console.log( i + "- Usuario: " + NombreClientesRegistrados[i] + "\n   Estatus: " + EstatusClientesRegistrados[i] + "\n   Balance: " + BalanceClientesRegistrados[i]);
                    }
                }else {
                    console.log("Clave incorrecta")
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
