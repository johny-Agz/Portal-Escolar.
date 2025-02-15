// Función que se ejecuta cuando se elige un rol (profesor o estudiante)
function setRole(role) {
    if (role === "profesor") {
        window.location.href = "profesor.html"; // Redirige a la página de profesores
    } else if (role === "estudiante") {
        window.location.href = "estudiante.html"; // Redirige a la página de estudiantes
    } else {
        // Si no es ni profesor ni estudiante, muestra el menú
        document.getElementById("menu").classList.remove("hidden");
        document.getElementById("profesor-tools").classList.add("hidden");
        document.getElementById("estudiante-tools").classList.add("hidden");
    }
}

// Esta función se llama cuando se hace clic en "Soy Estudiante" o "Soy Profesor"
document.getElementById("btnEstudiante").addEventListener("click", function() {
    setRole("estudiante");
});

document.getElementById("btnProfesor").addEventListener("click", function() {
    setRole("profesor");
});
