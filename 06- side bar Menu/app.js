const ouvert = document.querySelector(".ouvrir");
const fermer = document.querySelector(".fermer");
const menu = document.querySelector(".nav");

// menu.style.transform = "translateX(-400px)";

ouvert.addEventListener("click", function () {
  menu.classList.add("show-links");
});

fermer.addEventListener("click", function () {
  menu.classList.remove("show-links");
});
