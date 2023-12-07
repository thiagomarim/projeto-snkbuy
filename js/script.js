const menuBtn = document.querySelector('.menu-mobile');
const menuNav = document.querySelector('.nav');

function showMenu() {
  menuNav.classList.toggle('ativo');
}


menuBtn.addEventListener('click', showMenu);