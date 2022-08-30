import fetchUser from "./fetchUser.js";
import removeActive from "./removeActive.js";
async function displayUser() {
  const tabUser = await fetchUser();
  const img = document.querySelector("img");
  const info = document.querySelector(".info");
  img.src = tabUser.picture;
  info.innerHTML = `<h4 class='title'>my name is :</h4>
        <p>${tabUser.fullName}</p>`;

  const btns = document.querySelectorAll(".btn");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      removeActive(btns);
      btn.classList.add("active");
      info.innerHTML = `<h4 class='title'>my ${category} is :</h4>
        <p>${tabUser[category]}</p>`;
    });
    if (tabUser) {
      removeActive(btns);
      document.querySelector(".name").classList.add("active");
    }
  });
}

export default displayUser;
