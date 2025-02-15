// Función que maneja la redirección de acuerdo al rol seleccionado
function setRole(role) {
    if (role === "profesor") {
        // Redirige a la página de profesores
        window.location.href = "profesor.html"; 
    } else if (role === "estudiante") {
        // Redirige a la página de estudiantes
        window.location.href = "estudiante.html"; 
    } else {
        // Si no se selecciona ningún rol válido, se puede mostrar un mensaje o algo por el estilo
        alert("Por favor, elige un rol.");
    }
}

// Añadir evento de clic para el botón de Estudiante
document.getElementById("btnEstudiante").addEventListener("click", function() {
    setRole("estudiante");
});

// Añadir evento de clic para el botón de Profesor
document.getElementById("btnProfesor").addEventListener("click", function() {
    setRole("profesor");
});
