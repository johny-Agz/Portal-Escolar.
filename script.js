function setRole(role) {
    document.getElementById("menu").classList.remove("hidden");

    if (role === "profesor") {
        document.getElementById("profesor-tools").classList.remove("hidden");
    } else {
        document.getElementById("profesor-tools").classList.add("hidden");
    }
}
