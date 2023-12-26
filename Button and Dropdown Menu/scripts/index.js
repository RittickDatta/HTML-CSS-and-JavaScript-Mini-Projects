const menu_btn = document.querySelector('.dropdown-btn');
const menu = document.querySelector('.menu-options');

menu_btn.addEventListener("click", () => {
  menu.classList.toggle("show")
})
