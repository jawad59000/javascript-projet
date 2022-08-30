import display from "./utils/displayUser.js";
import removeActive from "./utils/removeActive.js";
const changeUser = document.querySelector(".btnChange");
window.addEventListener("DOMContentLoaded", function () {
  display();
});

changeUser.addEventListener("click", async () => {
  try {
    display();
    removeActive();
  } catch (error) {
    console.log(error);
  }
});
