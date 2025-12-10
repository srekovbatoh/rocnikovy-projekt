
// Kvíz na guides.html
document.getElementById('quiz-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const answer = e.target.q1.value;
    let result = "";

    if (answer === "a") {
        result = "Odporúčame 16/8 alebo 18/6 – skvelé na chudnutie!";
    } else if (answer === "b") {
        result = "Skús 16/8 alebo 5:2 – ideálne pre celkové zdravie.";
    } else if (answer === "c") {
        result = "OMAD alebo 20/4 – maximálna mentálna jasnosť!";
    } else {
        result = "Vyber si jednu z možností ↑";
    }

    document.getElementById('quiz-result').textContent = result;
});
if (performance.navigation.type === 1 || document.referrer.includes(location.hostname)) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const hero = document.querySelector('.hero, .hero-compact');
            if (hero) {
                const targetY = hero.getBoundingClientRect().bottom + window.pageYOffset - 20;
                const startY = window.pageYOffset;
                const duration = 3500;
                const startTime = performance.now();

                function animateScroll(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const ease = 1 - Math.pow(1 - progress, 3);

                    window.scrollTo(0, startY + (targetY - startY) * ease);

                    if (progress < 1) {
                        requestAnimationFrame(animateScroll);
                    }
                }
                requestAnimationFrame(animateScroll);
            }
        }, 40);
    });
}

// Zobrazenie/skrytie sekcie článkov
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const target = document.getElementById('articles');
        if (target) {
            target.style.display = 'block';
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact Form
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    if (name && email && message) {
        document.getElementById('form-result').textContent = 'Správa odoslaná! Ďakujeme.';
        e.target.reset();
    } else {
        document.getElementById('form-result').textContent = 'Vyplňte všetky polia.';
    }
});

// Newsletter Form
document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target['newsletter-email'].value;
    if (email) {
        document.getElementById('newsletter-result').textContent = 'Prihlásenie úspešné! Skontrolujte e-mail.';
        e.target.reset();
    } else {
        document.getElementById('newsletter-result').textContent = 'Zadajte platný e-mail.';
    }
});

// Read More Button
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});