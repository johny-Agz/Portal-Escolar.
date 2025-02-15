function setRole(role) {
    if (role === "profesor") {
        window.location.href = "profesor.html"; // Redirige a la página de profesores
    } else if (role === "estudiante") {
        window.location.href = "estudiante.html"; // Redirige a la página de estudiantes
    } else {
        document.getElementById("menu").classList.remove("hidden");
        document.getElementById("profesor-tools").classList.add("hidden");
        document.getElementById("estudiante-tools").classList.add("hidden");
    }
}
