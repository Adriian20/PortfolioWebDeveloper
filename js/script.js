document.addEventListener('DOMContentLoaded', function () {
    /* const header = document.querySelector('header');
    let lastScrollTop = 0;
    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        if (scrollTop > lastScrollTop) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.width = '100%';
    header.style.transition = 'transform 0.3s ease';
    */

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