const button = document.getElementById("showSummary");
const aside = document.getElementById("summaryCard");

button.addEventListener("click", () => {
  aside.classList.toggle("showHideAside");
});

function toggleHamburgerMenu() {
  const hamburgerMenu = document.getElementsByClassName("hamburger-menu");

  hamburgerMenu.classList.toggle("")
}
