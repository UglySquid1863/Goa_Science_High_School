// Fade-in on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));

// Sticky header change
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#1a252f';
    } else {
        header.style.backgroundColor = '#2c3e50';
    }
});

// Back-to-top
const backToTop = document.createElement('div');
backToTop.classList.add('back-to-top');
backToTop.innerHTML = '↑';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Apply button on Home
const applyBtn = document.querySelector('.apply-btn');
if (applyBtn) {
    applyBtn.addEventListener('click', () => {
        alert('Admission application coming soon! Contact us for details.');
    });
}

// Gallery card lightbox
const cards = document.querySelectorAll('.card');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
lightbox.innerHTML = `<span class="lightbox-close">&times;</span><img src="" alt="">`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.lightbox-close');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const imgSrc = card.querySelector('img').src;
        lightboxImg.src = imgSrc;
        lightbox.classList.add('show');
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('show');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('show');
});

// Explore button alert (engaging demo)
const exploreBtns = document.querySelectorAll('.explore-btn');
exploreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Dive into our vibrant school life—reach out to join the fun!');
    });
});

// Timeline accordion (click to expand details)
const timelineItems = document.querySelectorAll('.timeline-content');
timelineItems.forEach(item => {
    item.addEventListener('click', () => {
        const details = item.nextElementSibling;
        details.classList.toggle('show');
    });
});
