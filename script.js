let currentSlide = 0;

function slideProducts(direction) {
    const slider = document.getElementById('productSlider');
    const cards = slider.getElementsByClassName('product-card');
    const cardWidth = cards[0].offsetWidth + 32;
    const maxSlide = cards.length - Math.floor(slider.parentElement.offsetWidth / cardWidth);
    
    currentSlide += direction;
    
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide > maxSlide) currentSlide = maxSlide;
    
    slider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
}

document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    this.reset();
});

document.querySelectorAll('.product-card .cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        alert(`Thank you for your interest in ${productName}! We will contact you shortly.`);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
