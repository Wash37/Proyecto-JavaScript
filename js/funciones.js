
function calcular(tipo, n1, n2) {
    let resultado;
    
    switch(tipo) {
        case 'suma':
            resultado = n1 + n2;
            break;
        case 'resta':
            resultado = n1 - n2;
            break;
    }
    
    return resultado;
}

let transacciones = [];



function registrarTransaccion(tipo, monto, balance) {
const transaccion = {
    tipo: tipo,
    monto: monto,
    balance: balance,
};
transacciones.push(transaccion);
console.log(`Transacción registrada: ${tipo} de $${monto}. Balance actual: $${balance}`);
console.log(transacciones);
}

function mostrarTransacciones() {
console.log('Últimas transacciones:');
console.log(transacciones);
}

const botonTransacciones = document.createElement('button');
botonTransacciones.textContent = 'Mostrar transacciones';
botonTransacciones.onclick = mostrarTransacciones;
document.body.appendChild(botonTransacciones);
botonTransacciones.classList.add('botonTransacciones');
botonTransacciones.classList.add('posicionTrans');

function cambiarModoOscuro() {
    const body = document.body;
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    body.classList.toggle('modoOscuro');
    header.classList.toggle('modoOscuroHeader');
    main.classList.toggle('modoOscuroMain');
    footer.classList.toggle('modoOscuroFooter');
};

function modoOscuroEvento() {
    const modoOscuroBoton = document.getElementById('modoOscuro');
    modoOscuroBoton.classList.add('botonTransacciones');
    modoOscuroBoton.classList.add('posicionOscuro')
    modoOscuroBoton.addEventListener('click', cambiarModoOscuro);
}

document.addEventListener('DOMContentLoaded', modoOscuroEvento);

function mostrarOpciones() {
    main.innerHTML = `
        <div class="blank"> <button id="modoOscuro">Modo Oscuro</button></div>
        <h2><center>Cargando...<center><h2> 
        <div class="blank"></div> `
    setTimeout(() => {
        main.innerHTML = `
        <div class="blank"> <button id="modoOscuro">Modo Oscuro</button></div>
        <div class="options">
        <h2>Bienvenido ${nombre.value}, por favor elige una opción:</h2>
        <p id="opcion1">Información de mi cuenta</p>
        <p id="opcion2">Ingresar dinero</p>
        <p id="opcion3">Retirar dinero</p>
        <p id="opcion4">Valor del dolar</p>
        </div>
        <div class="blank"></div>
    `;
    modoOscuroEvento()
    
    const opcion1 = document.querySelector('#opcion1');
        opcion1.onclick = () => {
            mostrarInformacion();
        };

    const opcion2 = document.querySelector('#opcion2');
        opcion2.onclick = () => {
            ingresoDinero();
        };
    
    const opcion3 = document.querySelector('#opcion3');
        opcion3.onclick = () => {
            retiroDinero();
        };
        

    const opcion4 = document.querySelector('#opcion4');
        opcion4.onclick = () => {
            fetch('https://api.exchangerate-api.com/v4/latest/ARS')
            .then(response => response.json())
            .then(data => {
            const tipoDeCambio = data.rates.USD;
            const valorDolar = 1 / tipoDeCambio;
            main.innerHTML = `
                <div class="blank"> <button id="modoOscuro">Modo Oscuro</button></div>
                <div class="options">
                <h2>Valor del dólar: $${valorDolar}</h2>
                <button onclick="mostrarOpciones()">Volver</button>
                </div>
                <div class="blank"></div>
            `;
            modoOscuroEvento()
            })
            .catch(error => console.error(error));
        }
    }, 2000);
    }
    

function mostrarInformacion() {
    localStorage.clear;
    main.innerHTML = `
        <div class="blank"> <button id="modoOscuro">Modo Oscuro</button></div>
        <div class="options">
        <h2>Nombre: ${nombre.value} </h2>
        <h2>Saldo: ${balance}</h2>
        <h2>Estatus: ${tipo} </h2>
        <input type="button" value="Volver" id="volver">
        </div>
        <div class="blank"></div>
    `;
    modoOscuroEvento()
    const volver = document.querySelector('#volver');

        volver.onclick = () => {
            mostrarOpciones();
        };
    }

function ingresoDinero() {
    main.innerHTML = `
                    <div class="blank"> <button id="modoOscuro">Modo Oscuro</button></div>
                    <div class="options">
                    <h2> Tu balance es de $${balance}, cuanto desea ingresar? </h2>
                    <input type="number" id="ingreso" placeholder="Cantidad a depositar">
                    <button id="confirmar">Ingresar</button>
                    <input type="button" value="Volver" id="volver">
                    </div>
                    <div class="blank"></div>`;
                    modoOscuroEvento()
                    const volver = document.querySelector('#volver');
                    
                    volver.onclick = () => {
                        mostrarOpciones();
                    };

                    const ingreso = document.querySelector('#ingreso');
                    const confirmar = document.querySelector('#confirmar');

                    confirmar.onclick = () => {
                        const monto = parseFloat(ingreso.value);

                        if(!isNaN(monto) && monto > 0) {
                            balance = calcular('suma', balance, monto);
                            localStorage.setItem("balance", balance);
                            registrarTransaccion('Ingreso', monto, balance);
                            main.innerHTML = `
                                            <div class="blank"></div>
                                            <div class="options">
                                            <h2>Tu nuevo balance es de $${balance}</h2>
                                            <button onclick="ingresoDinero()">Volver a ingresar</button>
                                            </div>
                                            <div class="blank"></div>
                                            `;
                                            
                        }else if(monto < 0) {
                            main.innerHTML = `
                                            <div class="blank"></div>
                                            <div class="options">
                                            <h2>No puedes ingresar un monto negativo</h2>
                                            <button onclick="ingresoDinero()">Volver a intentar</button>
                                            </div>
                                            <div class="blank"></div>`
                        }else {
                            main.innerHTML = `
                                            <div class="blank"></div>
                                            <div class="options">
                                            <h2>Por favor, ingrese un monto valido</h2>
                                            <button onclick="ingresoDinero()">Volver a intentar</button>
                                            </div>
                                            <div class="blank"></div>`
                        }
                    }
                }

function retiroDinero() {
    main.innerHTML = `
                    <div class="blank"> <button id="modoOscuro">Modo Oscuro</button></div>
                    <div class="options">
                    <h2> Tu balance es de $${balance}, cuanto desea retirar? </h2>
                    <input type="number" id="retiro" placeholder="Cantidad a retirar">
                    <button id="confirmar">Retirar</button>
                    <input type="button" value="Volver" id="volver">
                    </div>
                    <div class="blank"></div>`;
                    modoOscuroEvento()
                    const volver = document.querySelector('#volver');

                    volver.onclick = () => {
                            mostrarOpciones();
                    };

                    const retiro = document.querySelector('#retiro');
                    const confirmar = document.querySelector('#confirmar');

                    confirmar.onclick = () => {
                        const monto = parseFloat(retiro.value);

                        if(!isNaN(monto) && monto > 0 && balance > monto) {
                            balance = calcular('resta', balance, monto);
                            localStorage.setItem("balance", balance);
                            registrarTransaccion('Retiro', monto, balance);
                            main.innerHTML = `
                                            <div class="blank"></div>
                                            <div class="options">
                                            <h2>Tu nuevo balance es de $${balance}</h2>
                                            <button onclick="retiroDinero()">Volver a retirar</button>
                                            </div>
                                            <div class="blank"></div>`;
                        }else if(monto < 0) {
                            main.innerHTML = `
                                            <div class="blank"></div>
                                            <div class="options">
                                            <h2>No puedes retirar un monto negativo</h2>
                                            <button onclick="retiroDinero()">Volver a intentar</button>
                                            </div>
                                            <div class="blank"></div>`
                        }else if(monto > balance) {
                            main.innerHTML = `
                                            <div class="blank"></div>
                                            <div class="options">
                                            <h2>No tienes suficiente saldo para retirar esa cantidad</h2>
                                            <button onclick="retiroDinero()">Volver a intentar</button>
                                            </div>
                                            <div class="blank"></div>`
                        }else {
                            main.innerHTML = `<h2>Por favor, ingrese un monto valido</h2>
                                            <button onclick="retiroDinero()">Volver a intentar</button>`
                        }
                        }
                    }