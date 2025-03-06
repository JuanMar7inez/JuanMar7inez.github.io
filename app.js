document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const overlay = document.querySelector(".overlay");

    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        nav.classList.toggle("nav-active");
        overlay.classList.toggle("overlay-active"); // Agregar la clase al overlay
    });

    document.addEventListener("click", function (event) {
        if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
            nav.classList.remove("nav-active");
            overlay.classList.remove("overlay-active"); // Ocultar el overlay
        }
    });

    overlay.addEventListener("click", function () {
        nav.classList.remove("nav-active");
        overlay.classList.remove("overlay-active");
    });
});
