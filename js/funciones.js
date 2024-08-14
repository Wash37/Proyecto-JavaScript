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

function buscarClientesPorEstatus(estatus) {
    const clientesEncontrados = [];

    for (let i = 0; i < EstatusClientesRegistrados.length; i++) {
        if (EstatusClientesRegistrados[i] === estatus) {
            clientesEncontrados.push({
                nombre: NombreClientesRegistrados[i],
                estatus: EstatusClientesRegistrados[i],
                balance: BalanceClientesRegistrados[i]
            });
        }
    }

    return clientesEncontrados;
}