// let TextoPrueba = document.getElementById("textoprueba").innerText;
// console.log(TextoPrueba);

// const contenedores = document.getElementsByClassName("prueba1");

// console.log(contenedores[0]);
// console.log(contenedores[1]);
// console.log(contenedores[2]);
// console.log(contenedores[3]);

// const main = document.getElementsByTagName("main");
// main[2].innerHTML = "<h2>Esto es un texto cambiado<h2>"
// console.log(main[2].innerHTML);

// let textoAModificar = document.getElementById("texto");
// let texto = document.createElement("h1");
// texto.innerHTML = "Esto es un titulo secundario creado dinamicamente"
// textoAModificar.append(texto);
// main[0].remove();

// let introducirNombre = document.createElement("input");
// let introducirEdad = document.createElement("input");

// textoAModificar.appendChild(introducirNombre);
// textoAModificar.appendChild(introducirEdad);

// introducirNombre.id = "nombre";
// introducirEdad.id = "edad";
// introducirNombre.value = "Hola";

// let EventoUno = document.getElementById("eventButton1");
const boton1 = document.querySelector('#eventButton1');

boton1.addEventListener("mousemove", () => {
    // console.log("Se clickeo el boton");
    body.style.backgroundColor = "red";
})

const body = document.body

const evento2 = document.querySelector('#eventButton2');

evento2.addEventListener("mousemove", () => {
    body.style.backgroundColor = "white";
})
