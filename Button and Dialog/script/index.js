const btn= document.querySelector(".main-btn");
const dialog= document.querySelector(".dialog");

const cancel_btn= document.querySelector(".cancel");
const continue_btn = document.querySelector(".continue");

const overlay = document.querySelector(".overlay");

const btns= [btn, cancel_btn, continue_btn]

btns.forEach((item) => item.addEventListener("click", () => {
  dialog.classList.toggle("hide")
  overlay.classList.toggle("hide")
}));

overlay.addEventListener("click", () => {
  overlay.classList.toggle("hide")
  dialog.classList.toggle("hide")
})
          