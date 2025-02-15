
// Función para mostrar un mensaje de bienvenida al estudiante
function mostrarBienvenidaEstudiante() {
    console.log("¡Bienvenido al portal del estudiante! Aquí tienes tus herramientas.");
}

// Función para mostrar las herramientas del estudiante (por ejemplo, tareas, proyectos, etc.)
function mostrarHerramientasEstudiante() {
    // Lógica para mostrar herramientas específicas
    const tareas = document.getElementById("tareas");
    const proyectos = document.getElementById("proyectos");
    const examenes = document.getElementById("examenes");
    const reuniones = document.getElementById("reuniones");

    tareas.style.display = "block";
    proyectos.style.display = "block";
    examenes.style.display = "block";
    reuniones.style.display = "block";
}

// Llamada a las funciones al cargar la página
window.onload = function() {
    mostrarBienvenidaEstudiante();
    mostrarHerramientasEstudiante();
}
