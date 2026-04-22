// BlockOne987 Shared JavaScript

// Matrix Rain Effect
(function() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()*&^%+-=[]{}|;:,.<>?/~';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px Fira Code, monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const char = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(char, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
})();

// Custom Cursor
(function() {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .snippet-card, .doc-card, .blog-card, .lab-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
})();

// Glitch click effect for headers
(function() {
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(el => {
        el.addEventListener('click', () => {
            const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
            let iterations = 0;
            const interval = setInterval(() => {
                el.setAttribute('data-text', 
                    Array(20).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
                );
                iterations++;
                if (iterations > 5) {
                    clearInterval(interval);
                    const original = el.textContent;
                    el.setAttribute('data-text', original);
                }
            }, 50);
        });
    });
})();