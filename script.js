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

// Efectos Interactivos
document.querySelectorAll('.herramienta').forEach(herramienta => {
    herramienta.addEventListener('mouseenter', () => {
        herramienta.style.transform = 'rotateZ(1deg) scale(1.02)';
    });
    
    herramienta.addEventListener('mouseleave', () => {
        herramienta.style.transform = 'rotateZ(0) scale(1)';
    });
});

// Animación del Logo
const logo = document.querySelector('.logo-icono');
logo.addEventListener('click', () => {
    logo.style.animation = 'animate-spin 1s linear';
    setTimeout(() => {
        logo.style.animation = '';
    }, 1000);
});