function setRole(role) {
    if (role === 'profesor') {
        window.location.href = "profesor.html";
    } else if (role === 'estudiante') {
        window.location.href = "estudiante.html";
    }
}
function toggleMenu() {
    let menu = document.getElementById("tool-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
