// Main JavaScript file

document.addEventListener('DOMContentLoaded', () => {
    console.log('Piano Booster Converter Loaded');

    // Simple scroll reveal effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationName = 'slideInUp';
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-enter').forEach(el => {
        observer.observe(el);
    });

    // Konami Code Listener
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiPosition = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiPosition]) {
            konamiPosition++;
            if (konamiPosition === konamiCode.length) {
                activateMaestroMode();
                konamiPosition = 0;
            }
        } else {
            konamiPosition = 0;
        }
    });

    function activateMaestroMode() {
        alert('🎵 MAESTRO MODE ACTIVATED! 🎵');
        document.body.style.setProperty('--primary', '#ffd700'); // Gold
        document.body.style.setProperty('--primary-glow', 'rgba(255, 215, 0, 0.6)');
        document.querySelector('.logo').innerHTML = '🎹 Maestro Converter';
    }

    // Theme Toggle Injection
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        const li = document.createElement('li');
        li.innerHTML = '<button id="theme-toggle" style="background:none; border:none; font-size:1.2rem; margin-left:10px; cursor:pointer;">🌞</button>';
        navLinks.appendChild(li);

        const toggleBtn = li.querySelector('button');
        let isDark = true;

        toggleBtn.addEventListener('click', () => {
            isDark = !isDark;
            toggleBtn.innerHTML = isDark ? '🌞' : '🌙';

            if (!isDark) {
                // Light Mode Override
                document.documentElement.style.setProperty('--bg-dark', '#f0f2f5');
                document.documentElement.style.setProperty('--bg-card', '#ffffff');
                document.documentElement.style.setProperty('--text-main', '#1a1a2e');
                document.documentElement.style.setProperty('--text-muted', '#666');
            } else {
                // Dark Mode Reset
                document.documentElement.style.setProperty('--bg-dark', '#0a0a12');
                document.documentElement.style.setProperty('--bg-card', '#151522');
                document.documentElement.style.setProperty('--text-main', '#ffffff');
                document.documentElement.style.setProperty('--text-muted', '#a0a0b0');
            }
        });
    }

    // Particle System (Simple Musical Notes)
    const particleContainer = document.getElementById('particles-js');
    if (particleContainer) {
        const notes = ['♪', '♫', '♩', '♬', '♭', '♯'];
        const colors = [
            'rgba(138, 43, 226, 0.5)', // Primary
            'rgba(0, 243, 255, 0.5)', // Secondary
            'rgba(255, 255, 255, 0.3)'  // White
        ];

        function createParticle() {
            const el = document.createElement('div');
            el.innerText = notes[Math.floor(Math.random() * notes.length)];
            el.style.position = 'absolute';
            el.style.color = colors[Math.floor(Math.random() * colors.length)];
            el.style.fontSize = Math.random() * 20 + 10 + 'px';
            el.style.left = Math.random() * 100 + 'vw';
            el.style.top = '100vh';
            el.style.pointerEvents = 'none';
            el.style.transition = `top ${Math.random() * 10 + 10}s linear, opacity 5s`;
            el.style.opacity = Math.random();
            el.style.zIndex = -1;

            particleContainer.appendChild(el);

            // Animate
            setTimeout(() => {
                el.style.top = '-50px';
                el.style.opacity = 0;
            }, 100);

            // Cleanup
            setTimeout(() => {
                el.remove();
            }, 20000);
        }

        // Spawn rate
        setInterval(createParticle, 1000);
        // Initial batch
        for (let i = 0; i < 10; i++) setTimeout(createParticle, i * 200);
    }
});
