import displaySingleUser from "./displaySingleUser.js";
import fetchFollowers from "./fetchFollowers.js";

window.addEventListener("DOMContentLoaded", async function () {
  const name = localStorage.getItem("user");
  // console.log(name);
  const url = `https://api.github.com/users/${name}`;
  let user = await fetchFollowers(url);
  // console.log(user);
  displaySingleUser(user);
});
