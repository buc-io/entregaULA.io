document.addEventListener("DOMContentLoaded", function() {
    // mostrar/ocultar el menú desplegable
    var menuToggle = document.getElementById("menu");
    var navUl = document.querySelector("nav ul");

    menuToggle.onclick = function(){
        navUl.classList.toggle("show");
    };
});

