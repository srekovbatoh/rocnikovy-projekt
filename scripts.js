// Fasting Timer
let timerInterval;
let seconds = 0;

document.getElementById('start-timer')?.addEventListener('click', () => {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            seconds++;
            const hours = Math.floor(seconds / 3600);
            const mins = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            document.getElementById('timer-display').textContent = 
                `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }, 1000);
    }
});

document.getElementById('reset-timer')?.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    document.getElementById('timer-display').textContent = '00:00:00';
});

// Quiz
document.getElementById('quiz-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const goal = e.target.goal.value;
    const result = goal === 'weight-loss' 
        ? 'Odporúčame 16/8 intermitentné hladovanie pre chudnutie.' 
        : 'Skúste 5:2 hladovanie pre celkové zdravie.';
    document.getElementById('quiz-result').textContent = result;
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