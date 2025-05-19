document.addEventListener('DOMContentLoaded', function() {
    // Animación para los pasos del proceso
    const processSteps = document.querySelectorAll('.process-step');
    const specialServices = document.querySelectorAll('.special-service');
    
    // Función para verificar si un elemento está en el viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Función para animar elementos cuando son visibles
    function animateOnScroll() {
        processSteps.forEach(step => {
            if (isInViewport(step)) {
                step.classList.add('animate');
            }
        });
        
        specialServices.forEach(service => {
            if (isInViewport(service)) {
                service.classList.add('animate');
            }
        });
    }
    
    // Ejecutar la animación al cargar la página y al hacer scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Funcionalidad para las FAQ
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Cerrar todas las demás preguntas
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar el estado activo de la pregunta actual
            item.classList.toggle('active');
        });
    });
    
    // Funcionalidad para los dots del slider de testimonios
    const dots = document.querySelectorAll('.dot');
    const testimonialSlider = document.querySelector('.testimonials-slider');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Actualizar la clase activa en los dots
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            
            // Calcular la posición de desplazamiento
            const cardWidth = testimonialCards[0].offsetWidth + 32; // Ancho + gap
            testimonialSlider.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth'
            });
        });
    });
    
    // Detectar cambios en el scroll del slider para actualizar los dots
    testimonialSlider.addEventListener('scroll', () => {
        const scrollPosition = testimonialSlider.scrollLeft;
        const cardWidth = testimonialCards[0].offsetWidth + 32; // Ancho + gap
        
        const activeIndex = Math.round(scrollPosition / cardWidth);
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    });
});
