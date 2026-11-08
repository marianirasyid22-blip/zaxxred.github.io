
// Animasi saat elemen masuk ke layar
const cards = document.querySelectorAll(
    '.profile-card, .about-card'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.15
});

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform += ' translateY(25px)';
    card.style.transition = 'opacity .8s ease, transform .8s ease';
    observer.observe(card);
});

const style = document.createElement('style');

style.textContent = `
    .show {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(style);

// Efek gerakan ringan pada cube
const cube = document.querySelector('.cube');

document.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;

    cube.style.marginLeft = `${x}px`;
    cube.style.marginTop = `${y}px`;
});
