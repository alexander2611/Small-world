// JavaScript para el comportamiento del placeholder
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        // Guardar el texto original del placeholder
        const originalPlaceholder = searchInput.placeholder;
        
        // Ocultar placeholder al enfocar (focus) el input
        searchInput.addEventListener('focus', function() {
            this.placeholder = '';
        });
        
        // Restaurar placeholder si no hay texto al perder el foco (blur)
        searchInput.addEventListener('blur', function() {
            if (this.value === '') {
                this.placeholder = originalPlaceholder;
            }
        });
        
        // También podemos ocultar el placeholder al empezar a escribir
        searchInput.addEventListener('input', function() {
            this.placeholder = '';
        });
    }
    
    // El resto de tu código para la sección hero...
    const searchForm = document.querySelector('.search-box');
    const scrollButton = document.querySelector('.scroll-down');
    const heroBackground = document.querySelector('.hero-background');
    
    // Precargar la imagen de fondo para mejor rendimiento
    if (heroBackground) {
        const img = new Image();
        img.src = heroBackground.src;
        img.onload = function() {
            heroBackground.style.opacity = '1';
        };
    }
    
    // Manejar envío del formulario de búsqueda
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            performSearch(searchInput.value.trim());
        });
    }
    
    // Manejar clic en el botón de scroll
    if (scrollButton) {
        scrollButton.addEventListener('click', function() {
            scrollToSection('attractions');
        });
    }
    
    // Función para realizar búsqueda
    function performSearch(term) {
        if (term === '') return;
        
        // Aquí iría la lógica de búsqueda
        console.log('Buscando:', term);
        // Por ejemplo: filtrar elementos según el término
    }
    
// Funcionalidad para la flecha de scroll
document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.querySelector('.scroll-down');
    
    if (scrollButton) {
        scrollButton.addEventListener('click', function() {
            // Desplazarse a la sección de atracciones
            const attractionsSection = document.getElementById('attractions');
            if (attractionsSection) {
                const offsetTop = attractionsSection.offsetTop - 80; // Ajuste para el header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
        
        // También se puede agregar detección de rueda del mouse
        let scrollTimeout;
        window.addEventListener('wheel', function() {
            clearTimeout(scrollTimeout);
            scrollButton.style.opacity = '0.5';
            
            scrollTimeout = setTimeout(function() {
                scrollButton.style.opacity = '1';
            }, 1000);
            });
        }
    }
)});

