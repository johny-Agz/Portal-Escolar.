function setRole(role) {
    if (role === 'profesor') {
        window.location.href = "profesor.html";
    } else if (role === 'estudiante') {
        window.location.href = "estudiante.html";
    }
}