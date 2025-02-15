// Función que se llama cuando se selecciona un rol (Profesor o Estudiante)
function setRole(role) {
    // Ocultar el área de selección de rol
    document.querySelector('.choose-role').style.display = 'none';
    
    // Mostrar el menú
    document.getElementById('menu').classList.remove('hidden');
    
    // Mostrar las herramientas según el rol seleccionado
    if (role === 'profesor') {
        document.getElementById('profesor-tools').classList.remove('hidden');
    } else if (role === 'estudiante') {
        document.getElementById('estudiante-tools').classList.remove('hidden');
    }
}
