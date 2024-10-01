// JS to enhance animations or handle dynamic content
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const mainSections = document.querySelectorAll('main');

    // Add smooth scroll to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            window.scroll({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Add dynamic background color change on scroll
    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;
        if (scrollPos > 100) {
            document.body.style.backgroundColor = '#f4a261'; // Change to lighter yellow
        } else {
            document.body.style.backgroundColor = '#f9c74f'; // Original yellow
        }
    });

    // Example for image hover effect
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'all 0.5s';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
});
