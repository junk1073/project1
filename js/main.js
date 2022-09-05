(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
header.classList.remove('header_active');
        }
    };
}());

// burger handler

(function ()  {
    const burgeritem = document.querySelector ('.burger');
    const menu = document.querySelector ('.header__nav');
    const menucloseitem = document.querySelector ('.header__nav-close');
    burgeritem.addEventListener ('click', () => {
        menu.classList.add ('header__nav_active');
    });
    menucloseitem.addEventListener ('click', () => {
        menu.classList.remove ('header__nav_active');
    })
}());