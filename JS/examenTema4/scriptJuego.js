const frase = document.querySelector('#mensaje');
let intentos = document.querySelector('#intentos');
const btnIntentar = document.querySelector('#btnIntentar');
const input = document.querySelector('#inputNumero');
const btnReiniciar = document.querySelector('#btnReiniciar');
let aleatorio = Math.floor(Math.random()* 100);

btnIntentar.addEventListener('input', () =>{
	const valor = input.value;

	if(valor === ""){
		frase.textContent = "Introduce un numero";
		frase.style.color = "#e53e3e";
	}else{
		intentos.value = intentos.value +1;

		if(valor < aleatorio.value){
			frase.textContent = "¡Demasiado bajo! Prueba con un mayor.";
			frase.style.color = "#3182ce";
		}else if(valor > aleatorio.value){
			frase.textContent = "¡Demasiado alto! Prueba con uno menor.";
			frase.style.color = "#dd6b20";
		}else if(valor === aleatorio.value){
			frase.textContent = `¡Correcto! Has necesitado ${intentos} intentos.`;
			body.style.backgroundColor = "#c6f6d5";
		}

		intentos.textContent = `Intentos: ${intentos}`;
	}
});

btnReiniciar.addEventListener("click", function() {
	intentos.value = 0;
	frase.textContent  = "Adivina el número (entre 1 y 100).";
	frase.style.color = "#4a5568";
	body.style.backgroundColor = "white";
});

