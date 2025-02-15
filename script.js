// Redirigir a la página de Estudiantes o Profesores
function redirigirPagina(rol) {
    if (rol === "estudiante") {
        window.location.href = "estudiante.html";  // Redirige a la página de estudiantes
    } else if (rol === "profesor") {
        window.location.href = "profesor.html";  // Redirige a la página de profesores
    }
}

// Asignamos los eventos a los botones de selección
document.getElementById("btnEstudiante").addEventListener("click", function() {
    redirigirPagina("estudiante");  // Redirige a Estudiante
});

document.getElementById("btnProfesor").addEventListener("click", function() {
    redirigirPagina("profesor");  // Redirige a Profesor
});
