// Función para configurar filtros de categoría
function setupCategoryFilters(dataType, gridId) {
    const buttons = document.querySelectorAll(`#${dataType} .category-btn`);
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            buttons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            let filteredItems;
            
            if (category === 'all') {
                filteredItems = data[dataType];
            } else {
                filteredItems = data[dataType].filter(item => item.category === category);
            }
            
            renderItems(filteredItems, gridId);
        });
    });
}

// Función para búsqueda
function setupSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    
    const performSearch = () => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            // Si la búsqueda está vacía, mostrar todos los elementos
            renderItems(data.attractions, 'attractions-grid');
            renderItems(data.hotels, 'hotels-grid');
            renderItems(data.restaurants, 'restaurants-grid');
            return;
        }
        
        // Buscar en todas las categorías
        const filteredAttractions = data.attractions.filter(item => 
            item.name.toLowerCase().includes(searchTerm) || 
            item.description.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        );
        
        const filteredHotels = data.hotels.filter(item => 
            item.name.toLowerCase().includes(searchTerm) || 
            item.description.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        );
        
        const filteredRestaurants = data.restaurants.filter(item => 
            item.name.toLowerCase().includes(searchTerm) || 
            item.description.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm)
        );
        
        renderItems(filteredAttractions, 'attractions-grid');
        renderItems(filteredHotels, 'hotels-grid');
        renderItems(filteredRestaurants, 'restaurants-grid');
    };
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Menú móvil
function setupMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Cambiar icono
        const icon = menuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Scroll suave para enlaces de navegación
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Cerrar menú móvil si está abierto
                const navLinks = document.querySelector('.nav-links');
                const menuBtn = document.querySelector('.mobile-menu-btn');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = menuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
                
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Configurar scroll para el botón de desplazamiento hacia abajo
    const scrollDownBtn = document.querySelector('.scroll-down');
    scrollDownBtn.addEventListener('click', () => {
        document.querySelector('#attractions').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// Observador de intersección para animaciones al hacer scroll
function setupIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar todas las tarjetas
    document.querySelectorAll('.item-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observar secciones
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar todos los elementos inicialmente
    renderItems(data.attractions, 'attractions-grid');
    renderItems(data.hotels, 'hotels-grid');
    renderItems(data.restaurants, 'restaurants-grid');
    
    // Configurar filtros para cada sección
    setupCategoryFilters('attractions', 'attractions-grid');
    setupCategoryFilters('hotels', 'hotels-grid');
    setupCategoryFilters('restaurants', 'restaurants-grid');
    
    // Configurar búsqueda
    setupSearch();
    
    // Configurar menú móvil
    setupMobileMenu();
    
    // Configurar cierre de modal
    setupModalClose();
    
    // Configurar scroll suave
    setupSmoothScrolling();
    
    // Configurar observador de intersección
    setupIntersectionObserver();
});