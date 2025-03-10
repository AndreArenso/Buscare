window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header && window.scrollY > 50) { // Verifica se o header existe
        header.classList.add('scrolled');
    } else if (header) {
        header.classList.remove('scrolled');
    }
});

// Lógica para o slider de depoimentos
const radios = document.querySelectorAll('input[name="radio"]');
const slides = document.querySelectorAll('.slide');

radios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${index * 100}%)`; // Move o slider para o slide correspondente
        });
    });
});
