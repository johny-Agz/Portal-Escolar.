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
// Para profesor.html (dentro del script)
herramientasProfesor.forEach((herramienta, index) => {
    const iconos = [
        'fa-book-open', 'fa-chalkboard-teacher', 'fa-clipboard-check',
        'fa-calendar-alt', 'fa-file-alt', 'fa-users', 
        'fa-graduation-cap', 'fa-pencil-ruler', 'fa-chart-line',
        'fa-comments', 'fa-clipboard-list', 'fa-tasks',
        'fa-chart-pie', 'fa-check-double', 'fa-handshake',
        'fa-project-diagram', 'fa-clock', 'fa-question-circle',
        'fa-list-alt', 'fa-poll', 'fa-binoculars',
        'fa-box-open', 'fa-calendar-day', 'fa-bell',
        'fa-briefcase', 'fa-gamepad', 'fa-chart-bar',
        'fa-award', 'fa-file-video', 'fa-user-check'
    ];
    
    gridContainer.innerHTML += `
        <div class="card animate__animated animate__fadeInUp" style="animation-delay: ${index * 0.1}s">
            <i class="fas ${iconos[index]}"></i>
            <h3>${herramienta}</h3>
            <button class="btn-profesor">Acceder <i class="fas fa-arrow-right"></i></button>
        </div>
    `;
});

// Para estudiante.html (dentro del script)
herramientasEstudiante.forEach((herramienta, index) => {
    const iconos = [
        'fa-laptop-code', 'fa-award', 'fa-clock',
        'fa-book-reader', 'fa-file-signature', 'fa-comments',
        'fa-book', 'fa-users', 'fa-envelope',
        'fa-briefcase', 'fa-futbol', 'fa-file-download',
        'fa-calendar-week', 'fa-film', 'fa-bell'
    ];
    
    gridContainer.innerHTML += `
        <div class="card animate__animated animate__fadeInUp" style="animation-delay: ${index * 0.1}s">
            <i class="fas ${iconos[index]}"></i>
            <h3>${herramienta}</h3>
            <button class="btn-estudiante">Acceder <i class="fas fa-arrow-right"></i></button>
        </div>
    `;
});