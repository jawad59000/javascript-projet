const btn = document.querySelector(".ouvrir");
const menu = document.querySelector(".menu");

btn.addEventListener("click", function () {
  menu.classList.toggle("show-links");
});
