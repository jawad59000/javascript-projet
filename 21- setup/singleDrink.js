import displaySingleDrink from "./src/displaySingleDrink.js";
import fetchDrinks from "./src/fetchDrinks.js";

window.addEventListener("DOMContentLoaded", async function () {
  const id = localStorage.getItem("drink");
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const drink = await fetchDrinks(url);
  console.log(drink);
  displaySingleDrink(drink);
});
