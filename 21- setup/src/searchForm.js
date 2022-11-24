import display from "./displayDrinks.js";
import fetchDrinks from "./fetchDrinks.js";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const container = document.querySelector(".container");
const search = document.querySelector(".recherche");

// console.log(btns);

search.addEventListener("keyup", async function () {
  const urll = url + search.value;
  const users = await fetchDrinks(urll);

  display(users);
});
