const button = document.getElementById("showSummary");
const aside = document.getElementById("summaryCard");

button.addEventListener("click", () => {
  aside.classList.toggle("showHideAside");
});
