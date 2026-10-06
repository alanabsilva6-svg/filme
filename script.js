// Rolagem suave dos carrosséis
function scrollRow(rowId, scrollAmount) {
    const row = document.getElementById(rowId);
    if (row) {
        row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Abrir Modal de Vídeo
function openModal(title, videoUrl) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoPlayer');
    const modalTitle = document.getElementById('modalTitle');

    if (modal && iframe && modalTitle) {
        modalTitle.textContent = title;
        iframe.src = videoUrl + "?autoplay=1";
        
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
        }, 10);
    }
}

// Fechar Modal de Vídeo
function closeModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoPlayer');

    if (modal && iframe) {
        modal.classList.add('opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            iframe.src = "";
        }, 300);
    }
}

// Contador de Favoritos
let favoritesCount = 0;
function toggleFavorite(title) {
    favoritesCount++;
    const badge = document.getElementById('fav-count');
    if (badge) {
        badge.textContent = favoritesCount;
        badge.classList.remove('hidden');
    }
    alert(`"${title}" foi adicionado à sua lista!`);
}

// Busca / Filtro em Tempo Real
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const term = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.movie-card');

            cards.forEach(card => {
                const titleElement = card.querySelector('h3');
                const title = titleElement ? titleElement.textContent.toLowerCase() : '';
                
                if (title.includes(term)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});