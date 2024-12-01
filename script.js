
// Función para iniciar el juego y mostrar la primera pregunta
function iniciarCuestionario() {
    document.getElementById('cuestionario').style.display = 'block'; // Mostrar el área del juego
    document.getElementById('pregunta1').style.display = 'block'; // Mostrar la primera pregunta
}

// Función para pasar a la siguiente pregunta
function siguientePregunta(numeroPregunta) {
    // Ocultar la pregunta actual
    document.getElementById(`pregunta${numeroPregunta}`).style.display = 'none';

    // Mostrar la siguiente pregunta
    const siguienteNumero = numeroPregunta + 1;
    const siguientePregunta = document.getElementById(`pregunta${siguienteNumero}`);
    
    if (siguientePregunta) {
        siguientePregunta.style.display = 'block'; // Mostrar la siguiente pregunta si existe
    }
}

// Función para verificar las respuestas y mostrar los resultados
function mostrarResultados() {
    let correctas = 0;

    // Verificar la respuesta de la pregunta 1
    const respuesta1 = document.querySelector('input[name="respuesta1"]:checked');
    if (respuesta1 && respuesta1.value === '1810') {
        correctas++;
    }

    // Verificar la respuesta de la pregunta 2
    const respuesta2 = document.querySelector('input[name="respuesta2"]:checked');
    if (respuesta2 && respuesta2.value === 'Simón Bolívar') {
        correctas++;
    }

    // Verificar la respuesta de la pregunta 3
    const respuesta3 = document.querySelector('input[name="respuesta3"]:checked');
    if (respuesta3 && respuesta3.value === 'Batalla de Boyacá') {
        correctas++;
    }

    // Ocultar la última pregunta
    document.getElementById('pregunta3').style.display = 'none';

    // Mostrar los resultados
    document.getElementById('resultado').style.display = 'block';
    const resultadoTexto = document.getElementById('resultadoTexto');
    resultadoTexto.textContent = `Has respondido correctamente ${correctas} de 3 preguntas.`;
}




