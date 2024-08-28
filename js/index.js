let balance = 1000;
let tipo = "vip";

localStorage.setItem("balance", balance);
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
