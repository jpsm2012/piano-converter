document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('music-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Mock Data
    const songs = [
        {
            title: "Für Elise",
            artist: "Ludwig van Beethoven",
            genre: "classico",
            difficulty: "easy",
            img: "🎹"
        },
        {
            title: "Moonlight Sonata (1st Mov)",
            artist: "Ludwig van Beethoven",
            genre: "classico",
            difficulty: "medium",
            img: "🌙"
        },
        {
            title: "Giorno's Theme",
            artist: "Yugo Kanno",
            genre: "anime",
            difficulty: "hard",
            img: "🐞"
        },
        {
            title: "Bohemian Rhapsody",
            artist: "Queen",
            genre: "rock",
            difficulty: "medium",
            img: "👑"
        },
        {
            title: "River Flows in You",
            artist: "Yiruma",
            genre: "pop",
            difficulty: "easy",
            img: "💧"
        },
        {
            title: "Blue Bird",
            artist: "Ikimonogakari",
            genre: "anime",
            difficulty: "medium",
            img: "🐦"
        },
        {
            title: "Take Five",
            artist: "Dave Brubeck",
            genre: "jazz",
            difficulty: "hard",
            img: "🎷"
        },
        {
            title: "Interstellar Theme",
            artist: "Hans Zimmer",
            genre: "ost",
            difficulty: "medium",
            img: "🚀"
        }
    ];

    function renderSongs(filter = 'all') {
        grid.innerHTML = '';

        const filtered = filter === 'all'
            ? songs
            : songs.filter(s => s.genre === filter);

        if (filtered.length === 0) {
            grid.innerHTML = '<p class="text-muted" style="grid-column: 1/-1; text-align: center;">Nenhuma música encontrada nesta categoria.</p>';
            return;
        }

        filtered.forEach(song => {
            const card = document.createElement('div');
            card.className = 'music-card animate-enter';

            // Map difficulty to valid class
            let diffClass = 'medium';
            if (song.difficulty === 'easy' || song.difficulty === 'hard') diffClass = song.difficulty;

            // Map difficulty to text
            const diffText = {
                'easy': 'Iniciante',
                'medium': 'Intermediário',
                'hard': 'Avançado'
            }[song.difficulty] || 'Intermediário';

            card.innerHTML = `
                <div class="card-img">
                    <span style="font-size: 3rem;">${song.img}</span>
                    <div class="play-overlay">▶</div>
                </div>
                <div class="card-body">
                    <h3 class="music-title" title="${song.title}">${song.title}</h3>
                    <p class="music-artist">${song.artist}</p>
                    <div class="card-footer">
                        <span>MIDI • 4:20</span>
                        <span class="badge-difficulty ${diffClass}">${diffText}</span>
                    </div>
                </div>
            `;

            card.addEventListener('click', () => {
                alert(`Tocando preview: ${song.title}`);
            });

            grid.appendChild(card);
        });
    }

    // Init
    renderSongs();

    // Filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSongs(btn.dataset.filter);
        });
    });
});
