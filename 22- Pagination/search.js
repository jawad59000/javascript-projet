import display from "./displayFollowers.js";
import fetchFollowers from "./fetchFollowers.js";
import { hideLoading, showLoading } from "./Loading.js";
import paginate from "./paginate.js";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
// const container = document.querySelector(".container");
const search = document.querySelector(".search");

// console.log(btns);
export default async function searchour() {
  search.addEventListener("keyup", async function () {
    showLoading();
    const users = await fetchFollowers(url);
    let page = paginate(users);
    const btns = document.querySelectorAll(".page-btn");
    // console.log(users);
    const value = search.value;
    // console.log(users);

    const filterUsers = users.filter((user) => {
      // console.log(user.login.value == "benackles");
      return user.login.includes(value);
    });

    display(filterUsers);

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    if (!search.value) {
      display(page[0]);
      btns[0].classList.add("active");
    }
  });
}
