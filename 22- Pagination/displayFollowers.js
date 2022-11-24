import { hideLoading } from "./Loading.js";
const container = document.querySelector(".container");

const display = (followers) => {
  // console.log(followers)

  if (followers.length < 1) {
    container.innerHTML = `<div class="msg">
    <p>
    Aucun utilisateur ne correspond a la recherche </p> </div>`;
    console.log(container);
  }

  hideLoading();
  const showFollower = followers
    .map(function (follower) {
      // console.log(item);
      const { avatar_url: image, html_url: link, login } = follower;
      return `<div class="card" data-id='${login}'><a href="./index2.html">
        <img
          src="${image}"
        />
        <h4>${login}</h4>
        <a href="${link}"><button class="btn">Profil</button></a>
        </a>
      </div> `;
    })
    .join("");
  document.querySelector(".container").innerHTML = showFollower;
};

export default display;
