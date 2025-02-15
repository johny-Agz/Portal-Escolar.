// Generador de partículas
function crearParticulas() {
    const contenedor = document.querySelector('.fondo-dinamico');
    for(let i = 0; i < 50; i++) {
        const particula = document.createElement('div');
        particula.className = 'particula';
        particula.style.left = Math.random() * 100 + 'vw';
        particula.style.width = particula.style.height = Math.random() * 15 + 5 + 'px';
        particula.style.animationDelay = Math.random() * 10 + 's';
        contenedor.appendChild(particula);
    }
}

// Efecto de movimiento 3D en tarjetas
document.querySelectorAll('.tarjeta-rol').forEach(tarjeta => {
    tarjeta.addEventListener('mousemove', (e) => {
        const rect = tarjeta.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        tarjeta.style.transform = `
            perspective(1000px)
            rotateX(${(y - rect.height/2) / 15}deg)
            rotateY(${-(x - rect.width/2) / 15}deg)
            scale(1.05)
        `;
    });

    tarjeta.addEventListener('mouseleave', () => {
        tarjeta.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Inicialización
window.onload = () => {
    crearParticulas();
    AOS.init();
}

// Funciones de navegación
function redirigirAProfesor() {
    window.location.href = 'profesor.html';
}

function redirigirAEstudiante() {
    window.location.href = 'estudiante.html';
}