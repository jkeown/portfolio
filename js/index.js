const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// nav scroll color change
window.onscroll = () => {
    const header = document.querySelector('header');
    const navList = document.querySelector('.nav__list');
    (this.scrollY <= 10) ? header.classList.remove('scroll-bg-clr') : header.classList.add('scroll-bg-clr');
    (this.scrollY <= 10) ? navList.classList.remove('scroll-clr') : navList.classList.add('scroll-clr');
};