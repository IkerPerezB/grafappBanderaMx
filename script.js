// Selección de elementos del DOM
const pickerGreen = document.getElementById('pickerGreen');
const pickerRed = document.getElementById('pickerRed');

const stripeGreen = document.getElementById('stripeGreen');
const stripeRed = document.getElementById('stripeRed');

const greenHex = document.getElementById('greenHex');
const redHex = document.getElementById('redHex');

// Función para inicializar colores
function initColors() {
    // Aplicar valores iniciales de los inputs a las franjas
    stripeGreen.style.backgroundColor = pickerGreen.value;
    stripeRed.style.backgroundColor = pickerRed.value;
}

// Evento para actualizar el VERDE
pickerGreen.addEventListener('input', (event) => {
    const color = event.target.value;
    stripeGreen.style.backgroundColor = color;
    greenHex.textContent = color.toUpperCase();
});

// Evento para actualizar el ROJO
pickerRed.addEventListener('input', (event) => {
    const color = event.target.value;
    stripeRed.style.backgroundColor = color;
    redHex.textContent = color.toUpperCase();
});

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', initColors);