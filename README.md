# Instituto Tecnológico de Pachuca
## Materia: Graficación
## Autor: Iker Adrik Perez Badillo
### Fecha: 15 de febrero de 2026
### Se adjuntan evidencias de como fueron los prompt para obtener el resultado final de la aplicación:
####Primer prompt: Acorde a la imagen que te adjunto quiero que realices una aplicacion semejante y con los archivos reparados de html, css y js, abajo de la bandera quiero que aparezca en etiquetas los siguientes datos :

Karla Esperanza Sanchez Esqueda-23200898

Iker Adrik Perez Badillo-23200876

Nancy Jazareth Lugo Cruz-23200858

El formato de la aplicación quiero que sea:

que se visualice la bandera de México en la aplicación y que puedan cambiarse los tonos de verde y rojo de la bandera, el color blanco de la bandera no es necesario que tenga un arrastrador para cambiar de color ya que es blanco. no se si puedas hacer una imagen similar al águila de la bandera de México, sino no alteres la imagen.
####Segundo prompt: Quiero que el html, css y js esten separados
####Tercer prompt: <!DOCTYPE html>

<html lang="es">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Bandera de México Interactiva</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<link rel="stylesheet" href="style.css">

</head>

<body>

  

<div class="container mt-5">

<h1 class="text-center mb-5 fw-bold display-4">Bandera de México</h1>

  

<div class="row g-0 justify-content-center align-items-end">

<div class="col-md-4">

<div class="control-area text-center mb-3">

<label class="section-title">Esperanza</label>

<input type="range" class="form-range custom-range range-green" id="greenRange" min="0" max="255" value="104">

<div class="hex-text mt-2" id="greenHex">#006800</div>

</div>

<div id="greenBox" class="flag-section left-section"></div>

</div>

  

<div class="col-md-4">

<div class="control-area text-center mb-3">

<label class="section-title">Unidad</label>

<div class="static-spacer"></div>

<div class="hex-text mt-2 text-muted">#FFFFFF</div>

</div>

<div class="flag-section center-section bg-white d-flex align-items-center justify-content-center">

<img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Coat_of_arms_of_Mexico.svg" alt="Escudo Nacional" class="escudo-img">

</div>

</div>

  

<div class="col-md-4">

<div class="control-area text-center mb-3">

<label class="section-title">Sangre de nuestros héroes</label>

<input type="range" class="form-range custom-range range-red" id="redRange" min="0" max="255" value="206">

<div class="hex-text mt-2" id="redHex">#CE0000</div>

</div>

<div id="redBox" class="flag-section right-section"></div>

</div>

  

</div>

</div>

  

<script src="script.js"></script>

</body>

</html>

CSS:

body {

font-family: 'Poppins', sans-serif;

background-color: #f8f9fa;

color: #333;

}

  

/* Títulos de las secciones */

.section-title {

font-size: 1.1rem;

font-weight: 500;

margin-bottom: 10px;

display: block;

}

  

/* Texto del código Hex */

.hex-text {

font-family: monospace;

font-weight: bold;

font-size: 1.2rem;

text-transform: uppercase;

letter-spacing: 1px;

}

  

/* Espaciador para la columna blanca que no tiene slider */

.static-spacer {

height: 28px; /* Altura aproximada del input range para alinear textos */

}

  

/* --- BLOQUES DE LA BANDERA --- */

.flag-section {

height: 400px; /* Altura de la bandera */

width: 100%;

transition: background-color 0.1s ease;

}

  

/* Bordes redondeados solo en las esquinas exteriores de la bandera completa */

.left-section {

border-top-left-radius: 15px;

border-bottom-left-radius: 15px;

}

  

.right-section {

border-top-right-radius: 15px;

border-bottom-right-radius: 15px;

}

  

/* Escudo */

.escudo-img {

width: 80%; /* Ajustar tamaño del escudo dentro de la franja blanca */

max-width: 250px;

height: auto;

}

  

/* --- SLIDERS PERSONALIZADOS --- */

.custom-range::-webkit-slider-thumb {

background: #444; /* Thumb gris oscuro */

border: 2px solid white;

box-shadow: 0 2px 5px rgba(0,0,0,0.3);

width: 20px;

height: 20px;

margin-top: -8px;

-webkit-appearance: none;

border-radius: 50%;

cursor: pointer;

}

  

.custom-range::-webkit-slider-runnable-track {

height: 4px;

border-radius: 2px;

}

  

/* Track Verde (Degradado de oscuro a claro o viceversa) */

.range-green::-webkit-slider-runnable-track {

background: linear-gradient(to right, #002200, #00ff00);

}

  

/* Track Rojo */

.range-red::-webkit-slider-runnable-track {

background: linear-gradient(to right, #330000, #ff0000);

}

JS:

// Selección de elementos

const greenRange = document.getElementById('greenRange');

const redRange = document.getElementById('redRange');

  

const greenBox = document.getElementById('greenBox');

const redBox = document.getElementById('redBox');

  

const greenHex = document.getElementById('greenHex');

const redHex = document.getElementById('redHex');

  

// Función auxiliar para convertir número a Hex de 2 dígitos

function valueToHex(c) {

const hex = c.toString(16);

return hex.length === 1 ? "0" + hex : hex;

}

  

// Función para actualizar el VERDE

function updateGreen() {

// Obtenemos valor del slider (0 a 255)

const val = parseInt(greenRange.value);

// Para conservar un tono "bandera", mantenemos Rojo y Azul en 0

// y variamos solo el Verde.

// El color será rgb(0, val, 0)

const colorString = `rgb(0, ${val}, 0)`;

const hexString = `#00${valueToHex(val)}00`;

  

greenBox.style.backgroundColor = colorString;

greenHex.textContent = hexString;

}

  

// Función para actualizar el ROJO

function updateRed() {

// Obtenemos valor del slider

const val = parseInt(redRange.value);

// El color será rgb(val, 0, 0)

const colorString = `rgb(${val}, 0, 0)`;

const hexString = `#${valueToHex(val)}0000`;

  

redBox.style.backgroundColor = colorString;

redHex.textContent = hexString;

}

  

// Event Listeners

greenRange.addEventListener('input', updateGreen);

redRange.addEventListener('input', updateRed);

  

// Inicialización (Ejecutar al cargar para pintar los colores iniciales)

updateGreen();

updateRed();

UTILIZA EL FORMATO DE ESTOS CODIGOS
