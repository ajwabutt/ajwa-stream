const movieData = [
    {
        title: "Trending Now",
        movies: [
            { t: "Inception", m: "98%", a: "13+", g: "Sci-Fi", img: "Inception.jpg" },
            { t: "Kung Fu Panda", m: "95%", a: "16+", g: "Animation", img: "kung.jpg" },
            { t: "Stranger Things", m: "99%", a: "16+", g: "Horror", img: "Stranger.jpg" }, // Local Image ka naam
            { t: "Squid Game", m: "96%", a: "18+", g: "Drama", img: "Squid Game.jpg" },
             { t: "Game of Thrones", m: "96%", a: "18+", g: "Drama", img: "Game.jpg" },
            { t: "The Matrix", m: "92%", a: "18+", g: "Sci-Fi", img: "The Matrix.jpg" }
        ]
    },
    {
        title: "Popular on AJWA STREAM",
        movies: [
            { t: "Queen of Tears", m: "96%", a: "18+", g: "Drama", img: "queen.jpg" },
            { t: "Bridgerton", m: "95%", a: "16+", g: "Romantic", img: "Bridgerton.jpg" },
            { t: "Money Heist", m: "94%", a: "18+", g: "Heist", img: "Money.jpg" },
            { t: "shrek", m: "98%", a: "13+", g: "animation", img: "shrek.jpg" },
            { t: "The Crown", m: "88%", a: "16+", g: "History", img: "The Crown.jpg" },
            { t: "The Witcher", m: "91%", a: "16+", g: "Fantasy", img: "The Witcher.jpg" }
        ]
    }
];

function renderMovies() {
    const main = document.getElementById('movie-app');
    if (!main) return;

    main.innerHTML = movieData.map((section, index) => `
        <section class="row">
            <h2>${section.title}</h2>
            <div class="row-wrapper" style="position: relative;">
                
                <button class="scroll-btn left" onclick="scrollRow('left', 'scroll-${index}')">‹</button>
                
                <div class="posters-container" id="scroll-${index}">
                    ${section.movies.map(movie => `
                        <div class="movie-card" onclick="toggleMobileDetail(this)">
                            <img src="${movie.img}" alt="${movie.t}">
                            <div class="movie-info">
                                <span class="match">${movie.m} Match</span>
                                <div class="title">${movie.t}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <button class="scroll-btn right" onclick="scrollRow('right', 'scroll-${index}')">›</button>
                
            </div>
        </section>
    `).join('');
}
// Function ko window object par rakhein taaki HTML se access ho sake
window.scrollRow = function(direction, elementId) {
    const container = document.getElementById(elementId);
    if (!container) {
        console.error("Container nahi mila:", elementId);
        return;
    }
    
    // Laptop par zyada scroll, Mobile par kam
    const scrollAmount = window.innerWidth > 768 ? 500 : 300; 

    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
};

// Baaki render logic
function renderMovies() {
    const main = document.getElementById('movie-app');
    if (!main) return;

    main.innerHTML = movieData.map((section, index) => `
        <section class="row">
            <h2>${section.title}</h2>
            <div class="row-wrapper" style="position: relative;">
                
                <button class="scroll-btn left" onclick="scrollRow('left', 'scroll-${index}')">‹</button>
                
                <div class="posters-container" id="scroll-${index}">
                    ${section.movies.map(movie => `
                        <div class="movie-card" onclick="toggleMobileDetail(this)">
                            <img src="${movie.img}" alt="${movie.t}">
                            <div class="movie-info">
                                <span class="match">${movie.m} Match</span>
                                <div class="title">${movie.t}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <button class="scroll-btn right" onclick="scrollRow('right', 'scroll-${index}')">›</button>
                
            </div>
        </section>
    `).join('');
}
window.onload = renderMovies;



// Initialize
window.onload = renderMovies;




function scrollRow(index, direction) {
    const row = document.getElementById(`row-${index}`);
    
    // Agar mobile hai to poori row width scroll karega (yani agle 3 cards)
    // Agar desktop hai to 80% scroll karega
    const scrollStep = window.innerWidth < 768 ? row.clientWidth : row.clientWidth * 0.8;
    
    row.scrollBy({
        left: direction * scrollStep,
        behavior: 'smooth'
    });
}
   window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});



// Mobile Menu Toggle Logic
function setupNavbar() {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = '#141414';
        } else {
            nav.style.backgroundColor = 'transparent';
        }
    });
}

// Initialize Everything
window.addEventListener('DOMContentLoaded', () => {
    renderMovies();
    setupNavbar();
});