// Obtener el elemento span que contiene la palabra "idea"
var palabraColorida = document.getElementById("palabraColorida");

// Definir la velocidad de cambio de color
var velocidad = 0.0009; // Puedes ajustar esta velocidad según tu preferencia

// Función para cambiar el color suavemente usando funciones trigonométricas
function cambiarColorSuave() {
    // Obtener el tiempo actual en milisegundos
    var tiempoActual = Date.now();

    // Calcular los valores de rojo, verde y azul en función del tiempo
    var rojo = Math.sin(velocidad * tiempoActual) * 127 + 128;
    var verde = Math.sin(velocidad * tiempoActual + (2 * Math.PI / 3)) * 127 + 128;
    var azul = Math.sin(velocidad * tiempoActual + (4 * Math.PI / 3)) * 127 + 128;

    // Aplicar el color al elemento
    palabraColorida.style.color = "rgb(" + Math.round(rojo) + "," + Math.round(verde) + "," + Math.round(azul) + ")";

    // Llamar a la función de nuevo en el siguiente fotograma
    requestAnimationFrame(cambiarColorSuave);
}

// Iniciar la animación de cambio de color
cambiarColorSuave();
