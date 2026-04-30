// Seleccionar los controles y la tarjeta
const inputColor = document.querySelector('#colorFondo');
//const inputColorBorde = document.querySelector('#colorBorde');
const inputRadio = document.querySelector('#redondeo');
const inputGrosor = document.querySelector('#grosor');
const inputTipoLetra = document.querySelector('#tipoLetra');
const inputTamanioLetra = document.querySelector('#tamanioLetra');
const tarjeta = document.querySelector('#tarjeta');

// Función que aplica todos los cambios
function actualizarTarjeta() {
  tarjeta.style.backgroundColor = inputColor.value;
  tarjeta.style.borderRadius = inputRadio.value + "px";
//  tarjeta.style.border = `${inputGrosor.value}px solid #${inputColorBorde.value}`;
  tarjeta.style.fontFamily = inputTipoLetra.value;
  tarjeta.style.fontSize = `${inputTamanioLetra.value}px`;
}

// Escuchar el evento 'input' en cada control
inputColor.addEventListener('input', actualizarTarjeta);
//inputColorBorde.addEventListener('input', actualizarTarjeta);
inputRadio.addEventListener('input', actualizarTarjeta);
inputGrosor.addEventListener('input', actualizarTarjeta);
inputTamanioLetra.addEventListener('change', actualizarTarjeta);
inputTipoLetra.addEventListener('change', actualizarTarjeta);