import displayDrinks from "./displayDrinks.js";
import fetchDrinks from "./fetchDrinks.js";
import { showLoading } from "./toggleLoading.js";
import { hideLoading } from "./toggleLoading.js";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

const search = document.querySelector(".recherche");

search.addEventListener("keyup", async function () {
  const drinks = await fetchDrinks(url);
  const value = search.value;
  const filterCharacter = drinks.filter((character) => {
    return character.strDrink.toLowerCase().includes(value.toLowerCase());
  });
  document.querySelector("section").innerHTML = showLoading();
  displayDrinks(filterCharacter);
  if (filterCharacter.length < 1) {
    showLoading();
    document.querySelector(
      "section"
    ).textContent = `il n'y a aucun cocktail qui correspond a la recherche`;
  }
});
