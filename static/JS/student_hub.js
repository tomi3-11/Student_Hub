const links = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all links and pages
        links.forEach(l => l.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));

        // Add active class to clicked link and matching page
        this.classList.add('active');
        const target = document.getElementById(this.getAttribute('data-target'));
        target.classList.add('active');
    })
})