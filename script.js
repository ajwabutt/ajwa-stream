const movieData = [
    {
        title: "Trending Now",
        movies: [
            { t: "Inception", m: "98%", img: "Inception.jpg", d: "Sci-Fi • Action" },
            { t: "Kung Fu Panda", m: "95%", img: "kung.jpg", d: "Animation • Family" },
            { t: "Stranger Things", m: "99%", img: "Stranger.jpg", d: "Sci-Fi • Horror" },
            { t: "Squid Game", m: "96%", img: "Squid Game.jpg", d: "Drama • Thriller" },
            { t: "Game of Thrones", m: "96%", img: "Game.jpg", d: "Fantasy • Drama" },
            { t: "The Matrix", m: "92%", img: "The Matrix.jpg", d: "Sci-Fi • Action" }
        ]
    },
    {
        title: "Popular on AJWA STREAM",
        movies: [
            { t: "Queen of Tears", m: "96%", img: "Queen.jpg", d: "Romantic • Drama" },
            { t: "Bridgerton", m: "95%", img: "Bridgerton.jpg", d: "Romantic • History" },
            { t: "Money Heist", m: "94%", img: "Money.jpg", d: "Heist • Thriller" },
            { t: "Shrek", m: "98%", img: "shrek.jpg", d: "Animation • Comedy" },
            { t: "The Crown", m: "88%", img: "The Crown.jpg", d: "History • Drama" },
            { t: "The Witcher", m: "91%", img: "The Witcher.jpg", d: "Fantasy • Action" }
        ]
    }
];

function renderMovies() {
    const main = document.getElementById('movie-app');
    if (!main) return;

    main.innerHTML = movieData.map((section, index) => `
        <div class="row">
            <h2 class="row-title">${section.title}</h2>
            <div class="row-wrapper">
                <button class="scroll-btn left-btn" onclick="event.stopPropagation(); scrollRow('left', 'scroll-${index}')">‹</button>
                <div class="posters-container" id="scroll-${index}">
                    ${section.movies.map(movie => `
                        <div class="movie-card" onclick="handleMobileClick(this)">
                            <img src="${movie.img}" alt="${movie.t}">
                            <div class="movie-info-overlay">
                                <span class="watch-tag">WATCH</span>
                                <span class="match-text">${movie.m} Match</span>
                                <div class="movie-name">${movie.t}</div>
                                <div class="movie-desc">${movie.d}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button class="scroll-btn right-btn" onclick="event.stopPropagation(); scrollRow('right', 'scroll-${index}')">›</button>
            </div>
        </div>
    `).join('');
}

window.handleMobileClick = function(card) {
    if (window.innerWidth <= 768) {
        const isActive = card.classList.contains('active');
        document.querySelectorAll('.movie-card').forEach(c => c.classList.remove('active'));
        if (!isActive) card.classList.add('active');
    }
};

window.scrollRow = function(direction, id) {
    const container = document.getElementById(id);
    const amount = window.innerWidth > 768 ? 600 : 300;
    container.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
};

window.onload = renderMovies;
// 2. Scroll Function
window.scrollRow = function(direction, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;
    const scrollAmount = window.innerWidth > 768 ? 600 : 300;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
};

// 3. Click to Show Detail (Mobile)
window.toggleMobileDetail = function(card) {
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.movie-card.active').forEach(c => {
            if (c !== card) c.classList.remove('active');
        });
        card.classList.toggle('active');
    }
};

// 4. Navbar & Initialization
window.onload = () => {
    renderMovies();
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) nav.style.background = "#141414";
        else nav.style.background = "transparent";
    });
};