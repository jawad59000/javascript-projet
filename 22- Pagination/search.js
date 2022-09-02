import display from "./displayFollowers.js";
import fetchFollowers from "./fetchFollowers.js";
import paginate from "./paginate.js";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
const container = document.querySelector(".container");
const search = document.querySelector(".search");

// console.log(btns);
export default async function searchour() {
  search.addEventListener("keyup", async function () {
    const users = await fetchFollowers(url);
    let page = paginate(users);
    const btns = document.querySelectorAll(".page-btn");
    // console.log(users);
    const value = search.value;
    // console.log(users);
    const filterUsers = users.filter((user) => {
      // console.log(user.login == "benackles");
      return user.login.includes(value);
    });
    if (filterUsers.length < 1) {
      container.innerHTML = `<div class="msg">
      <p>
      Aucun utilisateur ne correspond a la recherche </p> <div>`;
    } else {
      display(filterUsers);
    }

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    if (!search.value) {
      console.log("FFFF");
      display(page[0]);
    }

    if (!search.value) {
      btns[0].classList.add("active");
    }
  });
}
