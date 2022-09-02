import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";
import setUser from "./setUser.js";
import searcher from "./search.js";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
let index = 0;
let page = [];
const search = document.querySelector(".search");
window.addEventListener("DOMContentLoaded", async function () {
  const followers = await fetchFollowers(url);
  page = paginate(followers);

  displayFollowers(page[index]);

  displayButtons(page);
  setUser();
  searcher();
  const btnContainer = document.querySelector(".btn-container");
  const prevBtn = this.document.querySelector(".prev-btn");

  const nextBtn = this.document.querySelector(".next-btn");

  const btns = [...this.document.querySelectorAll(".page-btn")];

  btnContainer.addEventListener("click", function (e) {
    const id = e.target.dataset.id;

    if (id) {
      index = id;
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
    }
    displayFollowers(page[index]);
    search.value = "";
    // console.log(page);
  });

  prevBtn.addEventListener("click", function () {
    index--;
    btns.forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.id.includes(index)) {
        btn.classList.add("active");
      }
    });

    if (index < 0) {
      index = 0;
      search.value = "";
      btns[0].classList.add("active");
    }
    // console.log(index);
  });
  nextBtn.addEventListener("click", function () {
    index++;
    btns.forEach((btn) => {
      btn.classList.remove("active");
      if (btn.dataset.id.includes(index)) {
        btn.classList.add("active");
      }
    });
    if (index > page.length - 1) {
      index = page.length - 1;
      search.value = "";
      btns[page.length - 1].classList.add("active");
    }
  });

  btns[0].classList.add("active");
});
