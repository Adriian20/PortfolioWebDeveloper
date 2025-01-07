document.addEventListener('DOMContentLoaded', function () {
    // Animation links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            if (link.getAttribute('href').charAt(0) !== '#') return;
            e.preventDefault();
            const href = link.getAttribute('href');
            const target = document.querySelector(href);
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});