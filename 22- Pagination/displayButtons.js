import display from "./displayFollowers.js";
import paginate from "./paginate.js";

export async function displayButtons(followers) {
  const showBtn = `<button class="prev-btn">prev</button> ${followers
    .map(function (_, index) {
      return `<button class="page-btn" data-id="${index}">${index + 1}</button>`;
    })
    .join("")}<button class="next-btn">next</button>`;
  document.querySelector(".btn-container").innerHTML = showBtn;
  // console.log(buttons);
}

export default displayButtons;
