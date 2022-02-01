// VARIABLES GLOBALES

const menuBurger = document.querySelector('#menu-burger');
const menu = document.querySelector('#menu');

// CODIGO

activarMenu = () => {
    menu.classList.toggle('is-active')
}

menuBurger.addEventListener('click', activarMenu);