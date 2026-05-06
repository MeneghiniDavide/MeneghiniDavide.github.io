//script per la barra di navigazione che scompare e compare in base allo scroll----------------------------------------------
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
    // Se scendo, aggiungo la classe per nascondere
    navbar.classList.add('nav-hidden');
    } else {
    // Se salgo, rimuovo la classe per mostrare
    navbar.classList.remove('nav-hidden');
    }
    lastScrollY = window.scrollY;
});