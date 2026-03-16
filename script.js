// Efecto de cambio de color al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Validación simple o animaciones de entrada (opcional)
console.log("Sitio de ARGUS BIOINGENIERIA cargado correctamente.");
