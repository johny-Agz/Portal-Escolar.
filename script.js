// Navegación
function redirigirAProfesor() {
    window.location.href = "profesor.html";
}

function redirigirAEstudiante() {
    window.location.href = "estudiante.html";
}

function volverAlInicio() {
    window.location.href = "index.html";
}

// Efectos Dinámicos
document.querySelectorAll('.herramienta').forEach(herramienta => {
    herramienta.addEventListener('mouseenter', function() {
        this.style.transform = 'rotateZ(1deg) scale(1.02)';
    });
    
    herramienta.addEventListener('mouseleave', function() {
        this.style.transform = 'rotateZ(0) scale(1)';
    });
});

// Carga Dinámica de Contenido
window.addEventListener('DOMContentLoaded', () => {
    // Puedes agregar aquí carga de datos dinámicos
});