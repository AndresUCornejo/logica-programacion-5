
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let numeroInput = document.getElementById("numeroInput");
let adivinarBtn = document.getElementById("adivinarBtn");
let mensajeDiv = document.getElementById("mensaje");


function mostrarMensaje(mensaje) {
    mensajeDiv.textContent = mensaje;
}


function procesarIntento() {
    let numeroUsuario = Number(numeroInput.value);
    if (isNaN(numeroUsuario)) {
        mostrarMensaje("¡Error! Ingresa un número válido.");
        return;
    }

    if (numeroUsuario < numeroSecreto) {
        mostrarMensaje("El número secreto es mayor. ¡Sigue intentando!");
    } else if (numeroUsuario > numeroSecreto) {
        mostrarMensaje("El número secreto es menor. ¡Sigue intentando!");
    } else {
        mostrarMensaje("¡Felicidades! Has adivinado el número secreto.");

        adivinarBtn.disabled = true;
        numeroInput.disabled = true;
    }

    numeroInput.value = "";
}


adivinarBtn.addEventListener("click", procesarIntento);


numeroInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        procesarIntento();
    }
});
