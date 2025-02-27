// Sayfa kaydırıldıkça öğelerin görünmesini sağlamak
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight) {
            section.classList.add('visible');
        }
    });


/* İletişim Section */
#iletisim {
    padding: 40px 20px;
    margin-top: 20px;
    background: #333;
    text-align: center;
}

#iletisim a {
    color: #ffd700;
    text-decoration: none;
}

#iletisim a:hover {
    text-decoration: underline;
}

/* Kaydırıldıkça Gelen Kutu Animasyonu */
.fade-in-box {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in-box.visible {
    opacity: 1;
    transform: translateY(0);
}

section {
    opacity: 0;
    transition: opacity 1s ease;
}

section.visible {
    opacity: 1;
}