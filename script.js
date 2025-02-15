// Función para redirigir a las páginas de Profesor o Estudiante
function redirectToPage(role) {
    if (role === 'profesor') {
        window.location.href = 'profesor.html'; // Redirige a la página de Profesor
    } else if (role === 'estudiante') {
        window.location.href = 'estudiante.html'; // Redirige a la página de Estudiante
    }
}
