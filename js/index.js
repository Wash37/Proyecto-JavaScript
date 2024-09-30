let balance;
let tipo = "vip";
let balanceInicial = false;

if (localStorage.getItem("balance")) {
    balance = parseFloat(localStorage.getItem("balance"));
    balanceInicial = true;
} else {
    balance = 1000
}


localStorage.setItem("estatus", tipo);

const nombre = document.querySelector('#buttonName');
const main = document.getElementsByTagName("main")[0];

function iniciarProceso() {
    nombre.onchange = () => {
        let nombreLocal = nombre.value;
        localStorage.setItem("nombre", nombreLocal);
        mostrarOpciones();
    };
}


iniciarProceso();

