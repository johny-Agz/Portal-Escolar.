function setRole(role) {
    if (role === "profesor") {
        window.location.href = "profesor.html"; // Redirige a la página de profesores
    } else {
        document.getElementById("menu").classList.remove("hidden");
        document.getElementById("profesor-tools").classList.add("hidden");
    }
}
