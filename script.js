// Animaciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('header').classList.add('animate__fadeInDown');
});

// Efecto hover para las tarjetas
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});