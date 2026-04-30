const box = document.getElementById('box');
const toggleBtn = document.getElementById('toggleBtn');

// Función para alternar la visibilidad de la caja
function toggleBox() {
  if (box.style.display === 'none') {
    box.style.display = 'block';
    toggleBtn.textContent = 'Ocultar Caja';
  } else {
    box.style.display = 'none';
    toggleBtn.textContent = 'Mostrar Caja';
  }
}

// Agregar evento al botón para alternar la visibilidad de la caja
toggleBtn.addEventListener('click', toggleBox);