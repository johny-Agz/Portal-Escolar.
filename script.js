function redirigirAProfesor() {
    window.location.href = "profesor.html";
}

function redirigirAEstudiante() {
    window.location.href = "estudiante.html";
}

// Efecto de cursor personalizado
document.addEventListener('DOMContentLoaded', () => {
    const tarjetas = document.querySelectorAll('.tarjeta');
    
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('mousemove', (e) => {
            const rect = tarjeta.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            tarjeta.style.setProperty('--x', `${x}px`);
            tarjeta.style.setProperty('--y', `${y}px`);
        });
    });
});