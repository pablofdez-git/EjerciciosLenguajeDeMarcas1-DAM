// Seleccionar los elementos
const formulario = document.querySelector('#miFormulario');
const inputNombre = document.querySelector('#nombre');
const mensaje = document.querySelector('#mensaje');

// Escuchar el evento 'submit'
formulario.addEventListener('submit', (evento) => {
    
    evento.preventDefault();        // Evitar que la página se refresque
    
    const valor = inputNombre.value;

    // Validación
    if (valor === "") {
        mensaje.textContent = "¡Por favor, escribe tu nombre!";
        mensaje.className = "error";                            // Aplicar clase CSS de error
    } else {
        mensaje.textContent = `¡Gracias por unirte, ${valor}!`;
        mensaje.className = "exito";                            // Aplicar clase CSS de éxito
        inputNombre.value = "";                                 // Limpiar el campo
    }
});