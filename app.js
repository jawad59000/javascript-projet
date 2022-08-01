const btn = document.querySelector(".btn");
const menu = document.querySelector(".menu");
let ouvert = document.querySelector(".btn_ouvert");
let fermer = document.querySelector(".btn_fermer");
console.log(fermer);

menu.style.display = "none";

btn.addEventListener("click", function () {
  menu.classList.toggle("menu_open");
  if (menu.classList.contains("menu_open")) {
    menu.style.display = "block";
    ouvert.style.display = "none";
    fermer.style.display = "block";
  } else {
    menu.style.display = "none";
    ouvert.style.display = "block";
    fermer.style.display = "none";
  }
});
