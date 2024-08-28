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

function mostrarOpciones() {
    main.innerHTML = `
        <h2>Bienvenido ${nombre.value}, por favor elige una opción:</h2>
        <p id="opcion1">1- Información de mi cuenta</p>
        <p id="opcion2">2- Ingresar dinero</p>
        <p id="opcion3">3- Retirar dinero</p>
    `;
    
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
    main.innerHTML = `
        <h2>Nombre: ${nombre.value} </h2>
        <h2>Saldo: ${balance}</h2>
        <h2>Estatus: ${tipo} </h2>
        <input type="button" value="Volver" id="volver">
    `;
    
    const volver = document.querySelector('#volver');

        volver.onclick = () => {
            mostrarOpciones();
        };
    }

function ingresoDinero() {
    main.innerHTML = `<h2> Tu balance es de $${balance}, cuanto desea ingresar? </h2>
                    <input type="number" id="ingreso" placeholder="Cantidad a depositar">
                    <button id="confirmar">Ingresar</button>
                    <input type="button" value="Volver" id="volver">`;

                    const volver = document.querySelector('#volver');
                    
                    volver.onclick = () => {
                        mostrarOpciones();
                    };

                    const ingreso = document.querySelector('#ingreso');
                    const confirmar = document.querySelector('#confirmar');

                    confirmar.onclick = () => {
                        const monto = parseFloat(ingreso.value);

                        if(isNaN(monto) && monto < 0) {
                            balance = calcular(suma, balance, monto);
                            main.innerHTML = `<h2>Tu nuevo balance es de $${balance}</h2>
                                            <button onclick="ingresoDinero()">Volver a ingresar</button>
                                            `;
                                            let balanceStorage = balance;
                                            localStorage.setItem("balance", balanceStorage)
                        }else {
                            main.innerHTML = `<h2>Por favor, ingrese un monto valido</h2>
                                            <button onclick="ingresoDinero()">Volver a intentar</button>`
                        }
                    }
                }

function retiroDinero() {
    main.innerHTML = `<h2> Tu balance es de $${balance}, cuanto desea retirar? </h2>
                    <input type="number" id="retiro" placeholder="Cantidad a retirar">
                    <button id="confirmar">Retirar</button>
                    <input type="button" value="Volver" id="volver">`;

                    const volver = document.querySelector('#volver');

                    volver.onclick = () => {
                            mostrarOpciones();
                    };

                    const retiro = document.querySelector('#retiro');
                    const confirmar = document.querySelector('#confirmar');

                    confirmar.onclick = () => {
                        const monto = parseFloat(retiro.value);

                        if(isNaN(monto) && monto < 0) {
                            balance = calcular(resta, balance, monto);
                            main.innerHTML = `<h2>Tu nuevo balance es de $${balance}</h2>
                                            <button onclick="retiroDinero()">Volver a retirar</button>`;
                                            let balanceStorage = balance;
                                            localStorage.setItem("balance", balanceStorage)
                        }else {
                            main.innerHTML = `<h2>Por favor, ingrese un monto valido</h2>
                                            <button onclick="retiroDinero()">Volver a intentar</button>`
                        }
                        }
                    }