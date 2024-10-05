// Pantalla 1: Validación de coordenadas
document.getElementById('set-coordinates').addEventListener('click', function () {
	const latDegree = document.getElementById('lat-degree').value;
	const latMinute = document.getElementById('lat-minute').value;
	const latSecond = document.getElementById('lat-second').value;
	const lonDegree = document.getElementById('lon-degree').value;
	const lonMinute = document.getElementById('lon-minute').value;
	const lonSecond = document.getElementById('lon-second').value;
	const latDirection = document.querySelector('input[name="lat-direction"]:checked').value;
	const lonDirection = document.querySelector('input[name="lon-direction"]:checked').value;

	// Validar si las coordenadas son correctas (10° 0' 10" N, 0° 10' 0" W)
	if (latDegree == 10 && latMinute == 0 && latSecond == 10 && latDirection == 'N' &&
		lonDegree == 0 && lonMinute == 10 && lonSecond == 0 && lonDirection == 'W') {
		window.location.href = "screen2.html";
	} else {
		alert("Coordenadas incorrectas, intenta de nuevo.");
	}
});

// Habilitar el botón cuando se ingrese algo en los campos de texto
const fields = document.querySelectorAll('input[type="number"], input[type="radio"]');
fields.forEach(field => {
	field.addEventListener('input', checkInputs);
});

function checkInputs() {
	const latDegree = document.getElementById('lat-degree').value;
	const latMinute = document.getElementById('lat-minute').value;
	const latSecond = document.getElementById('lat-second').value;
	const lonDegree = document.getElementById('lon-degree').value;
	const lonMinute = document.getElementById('lon-minute').value;
	const lonSecond = document.getElementById('lon-second').value;
	const latDirection = document.querySelector('input[name="lat-direction"]:checked');
	const lonDirection = document.querySelector('input[name="lon-direction"]:checked');

	// Si todos los campos están llenos, habilita el botón
	if (latDegree && latMinute && latSecond && lonDegree && lonMinute && lonSecond && latDirection && lonDirection) {
		document.getElementById('set-coordinates').disabled = false;
	} else {
		document.getElementById('set-coordinates').disabled = true;
	}
}

document.addEventListener("DOMContentLoaded", function () {
	// Elemento del DOM donde se mostrará el temporizador
	const timerElement = document.getElementById('timer');
	const fireButton = document.getElementById('fire-btn');

	// Tiempo total en segundos (1 minuto = 60 segundos)
	let countdownTime = 60;

	// Función para actualizar el temporizador en el DOM
	function updateTimer() {
		// Calcular minutos y segundos
		const minutes = Math.floor(countdownTime / 60);
		const seconds = countdownTime % 60;

		// Actualizar el contenido del temporizador en formato mm:ss
		timerElement.textContent =
			`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

		// Cuando el tiempo llegue a cero
		if (countdownTime <= 0) {
			clearInterval(countdownInterval); // Detener el intervalo
			fireButton.disabled = false; // Habilitar el botón de disparo
			fireButton.style.backgroundColor = "#dc3545"; // Cambiar el color a rojo
		} else {
			countdownTime--; // Reducir el tiempo en 1 segundo
		}
	}

	// Iniciar la cuenta regresiva
	const countdownInterval = setInterval(updateTimer, 1000); // Cada segundo

	// Evento para manejar el clic en el botón de disparo
	fireButton.addEventListener('click', function () {
		window.location.href = "screen3.html"; // Redirigir a la pantalla 3
	});
});



