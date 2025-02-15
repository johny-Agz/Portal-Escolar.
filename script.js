// Redirige a la página correspondiente según el rol (profesor o estudiante)
function redirigirPagina(rol) {
    if (rol === "profesor") {
        window.location.href = "profesor.html";  // Redirige a la página de profesores
    } else if (rol === "estudiante") {
        window.location.href = "estudiante.html";  // Redirige a la página de estudiantes
    } else {
        alert("Por favor selecciona un rol válido."); // Si no se selecciona ningún rol válido
    }
}

// Asignamos los eventos a los botones de los roles (profesor y estudiante)
document.getElementById("btnEstudiante").addEventListener("click", function() {
    redirigirPagina("estudiante");  // Llamada a la función para redirigir a Estudiante
});

document.getElementById("btnProfesor").addEventListener("click", function() {
    redirigirPagina("profesor");  // Llamada a la función para redirigir a Profesor
});
