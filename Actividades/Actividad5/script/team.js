document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the revealed class to trigger animations
                if (entry.target.classList.contains('reveal-card')) {
                    entry.target.classList.add('revealed');
                } else if (entry.target.classList.contains('reveal-fade')) {
                    entry.target.classList.add('revealed');
                } else if (entry.target.classList.contains('reveal-slide')) {
                    entry.target.classList.add('revealed');
                } else if (entry.target.classList.contains('reveal-line')) {
                    entry.target.classList.add('revealed');
                }
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('.reveal-card, .reveal-fade, .reveal-slide, .reveal-line, .value-item').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
