// Función para renderizar elementos en una cuadrícula
function renderItems(items, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    if (items.length === 0) {
        container.innerHTML = '<p class="no-results">No se encontraron resultados para esta categoría.</p>';
        return;
    }
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        
        // Crear estrellas de rating
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            stars += i <= Math.floor(item.rating) ? '<i class="fas fa-star"></i>' : 
                     (i - 0.5) <= item.rating ? '<i class="fas fa-star-half-alt"></i>' : 
                     '<i class="far fa-star"></i>';
        }
        
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <div class="item-badge">${item.category}</div>
            <div class="item-info">
                <h3 class="item-title">${item.name}</h3>
                <p class="item-description">${item.description}</p>
                <div class="item-meta">
                    <span class="rating">${stars} ${item.rating}</span>
                    <span>${item.price}</span>
                </div>
            </div>
        `;
        
        // Añadir evento de clic para abrir modal
        card.addEventListener('click', () => {
            openModal(item);
        });
        
        container.appendChild(card);
    });
    
    // Animar tarjetas con retraso escalonado
    animateCards(containerId);
}

// Función para animar tarjetas
function animateCards(containerId) {
    const cards = document.querySelectorAll(`#${containerId} .item-card`);
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, 100 * index);
    });
}

// Función para abrir modal con detalles
function openModal(item) {
    const modal = document.getElementById('detail-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalCategory = document.getElementById('modal-category');
    const modalRating = document.getElementById('modal-rating');
    const modalPrice = document.getElementById('modal-price');
    const modalExtra = document.getElementById('modal-extra');
    
    // Crear estrellas de rating
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= Math.floor(item.rating) ? '<i class="fas fa-star"></i>' : 
                 (i - 0.5) <= item.rating ? '<i class="fas fa-star-half-alt"></i>' : 
                 '<i class="far fa-star"></i>';
    }
    
    // Llenar modal con datos
    modalImage.src = item.image;
    modalTitle.textContent = item.name;
    modalDescription.textContent = item.description;
    modalCategory.textContent = item.category;
    modalRating.innerHTML = `${stars} ${item.rating}`;
    modalPrice.textContent = item.price;
    
    // Añadir detalles adicionales si existen
    if (item.details) {
        modalExtra.innerHTML = `
            <h3>Más Información</h3>
            <p>${item.details}</p>
        `;
    } else {
        modalExtra.innerHTML = '';
    }
    
    // Mostrar modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal
function setupModalClose() {
    const modal = document.getElementById('detail-modal');
    const closeButton = document.getElementById('modal-close');
    
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}