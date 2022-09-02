const display = (followers) => {
  // console.log(followers);

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
