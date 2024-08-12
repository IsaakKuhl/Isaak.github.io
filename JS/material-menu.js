// menu
var wrapper = document.querySelector('.material-menu-wrapper');
var circle = document.querySelector('.material-btn');
var link = document.querySelector('.material-content').querySelectorAll('li');
var ham = document.querySelector('.material-hamburger');
var main = document.querySelector('#container');
var attachment = document.querySelector('.attachment');
var content = document.querySelector('.material-content');
var win = window;
function openMenu(event) {
  wrapper.classList.toggle('open');
  circle.classList.toggle('active');
  ham.classList.toggle('material-close');
  attachment.classList.toggle('active');
  for (var i = 0; i < link.length; i++) {
    link[i].classList.toggle('active');
  }
  content.classList.toggle('active');
  event.preventDefault();
  event.stopImmediatePropagation();
};
function closeMenu() {
  if (wrapper.classList.contains('open')) {
    wrapper.classList.remove('open');
  }
  if (circle.classList.contains('active')) {
    circle.classList.remove('active');
    for (var i = 0; i < link.length; i++) {
      link[i].classList.toggle('active');
    }
    ham.classList.remove('material-close');
    attachment.classList.remove('active');
    content.classList.toggle('active');
  }
};
circle.addEventListener('click', openMenu, false);
win.addEventListener('click', closeMenu, false);

