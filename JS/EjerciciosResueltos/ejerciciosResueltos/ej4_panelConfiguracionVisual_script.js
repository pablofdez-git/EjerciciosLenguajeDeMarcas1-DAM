// Seleccionar los controles y la tarjeta
const inputColor = document.querySelector('#colorFondo');
const inputRadio = document.querySelector('#redondeo');
const inputGrosor = document.querySelector('#grosor');
const tarjeta = document.querySelector('#tarjeta');

// Función que aplica todos los cambios
function actualizarTarjeta() {
  tarjeta.style.backgroundColor = inputColor.value;
  tarjeta.style.borderRadius = inputRadio.value + "px";
  tarjeta.style.border = `${inputGrosor.value}px solid #333`;
}

// Escuchar el evento 'input' en cada control
inputColor.addEventListener('input', actualizarTarjeta);
inputRadio.addEventListener('input', actualizarTarjeta);
inputGrosor.addEventListener('input', actualizarTarjeta);