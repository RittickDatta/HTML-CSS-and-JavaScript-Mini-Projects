const hamburger_icon = document.querySelector('.hamburger-menu');
const sidenav = document.querySelector('.side-nav');
const overlay = document.querySelector('.overlay');
const sidenav_list_items = document.querySelectorAll('.sidenav__list_item');

function toggleView() {
  sidenav.classList.toggle('show');
  overlay.classList.toggle('show');

  sidenav.classList.toggle('hide');
  overlay.classList.toggle('hide');
}

hamburger_icon.addEventListener('click', () => {
  toggleView();
});

overlay.addEventListener('click', () => {
  toggleView();
});

sidenav_list_items.forEach((item) => {
  item.addEventListener('click', () => {
    toggleView();
  });
});
