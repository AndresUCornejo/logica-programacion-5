// Generar un número secreto aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Obtener referencias a los elementos del DOM
let numeroInput = document.getElementById("numeroInput");
let adivinarBtn = document.getElementById("adivinarBtn");
let mensajeDiv = document.getElementById("mensaje");

// Función para mostrar mensajes en pantalla
function mostrarMensaje(mensaje) {
    mensajeDiv.textContent = mensaje;
}

// Función para procesar el intento del usuario
function procesarIntento() {
    let numeroUsuario = Number(numeroInput.value);

    // Verificar si la entrada es un número válido
    if (isNaN(numeroUsuario)) {
        mostrarMensaje("¡Error! Ingresa un número válido.");
        return;
    }

    // Comparar el número ingresado con el número secreto
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

// Agregar un evento al botón
adivinarBtn.addEventListener("click", procesarIntento);

// Detectar la tecla "Enter"
numeroInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        procesarIntento();
    }
});