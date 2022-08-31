import display from "./utils/displayUser.js";
import removeActive from "./utils/removeActive.js";
import animeCard from "./utils/anim.js";
import change from "./utils/background.js";

const changeUser = document.querySelector(".btnChange");
window.addEventListener("DOMContentLoaded", function () {
  display();
  animeCard();
});

changeUser.addEventListener("click", async () => {
  try {
    display();
    removeActive();
  } catch (error) {
    console.log(error);
  }
});

const btnChange = document.querySelector(".btnChangeColor");
btnChange.addEventListener("click", function () {
  change();
});
