document.addEventListener('DOMContentLoaded', () => {
    // Переключение мобильного меню (Burger Menu)
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Обработка клика по кнопке "TRY FREE"
    const tryFreeBtn = document.getElementById('tryFreeBtn');
    if (tryFreeBtn) {
        tryFreeBtn.addEventListener('click', () => {
            alert('Регистрация в DevOpsFlow открыта! Начните бесплатный период.');
        });
    }

    // Обработка клика по кнопке "LEARN MORE"
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            const featuresSection = document.getElementById('features');
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    console.log('DevOpsFlow script initialized successfully.');
});