document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarToggle.addEventListener('click', () => {
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
    // About section continuous scroll animation
    const aboutSection = document.querySelector('.about');
    const aboutText = aboutSection ? aboutSection.querySelector('.about-text') : null;
    function animateAboutOnScroll() {
        if (!aboutSection) return;
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate progress: 0 (below viewport) to 1 (fully in viewport)
        let progress = 1 - Math.max(0, Math.min(1, (rect.top + rect.height/2 - windowHeight/2) / (windowHeight/2)));
        // Clamp progress between 0 and 1
        progress = Math.max(0, Math.min(1, progress));
        // Parallax translate and opacity
        aboutSection.style.opacity = 0.5 + 0.5 * progress;
        aboutSection.style.transform = `translateY(${80 * (1-progress)}px) scale(${0.98 + 0.02*progress})`;
        if (aboutText) {
            aboutText.style.opacity = 0.3 + 0.7 * progress;
            aboutText.style.transform = `translateY(${40 * (1-progress)}px)`;
        }
    }
    window.addEventListener('scroll', animateAboutOnScroll);
    animateAboutOnScroll();
    // Trainers and Contact Us scroll animation
    const trainerCards = document.querySelectorAll('.trainers');
    const contactUs = document.querySelector('.contact-us');
    const contactInfo = document.querySelector('.info');
    const squareBoxes = document.querySelectorAll('.square-box');
    function animateSectionsOnScroll() {
        trainerCards.forEach((card, idx) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                setTimeout(() => card.classList.add('visible'), idx * 120);
            } else {
                card.classList.remove('visible');
            }
        });
        [contactUs, contactInfo].forEach((el) => {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
        squareBoxes.forEach((box, idx) => {
            const rect = box.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                setTimeout(() => box.classList.add('visible'), idx * 100);
            } else {
                box.classList.remove('visible');
            }
        });
    }
    window.addEventListener('scroll', animateSectionsOnScroll);
    animateSectionsOnScroll();
});