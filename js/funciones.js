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
    modoOscuroBoton.addEventListener('click', cambiarModoOscuro);
}

document.addEventListener('DOMContentLoaded', modoOscuroEvento);

function mostrarOpciones() {
    main.innerHTML = `
        <div class="blank"> <button id="modoOscuro">Modo Oscuro</button></div>
        <div class="options">
        <h2>Bienvenido ${nombre.value}, por favor elige una opción:</h2>
        <p id="opcion1">Información de mi cuenta</p>
        <p id="opcion2">Ingresar dinero</p>
        <p id="opcion3">Retirar dinero</p>
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