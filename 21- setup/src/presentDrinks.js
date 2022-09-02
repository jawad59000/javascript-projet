import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
// const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

export default async function (url) {
  const drinks = await fetchDrinks(url);
  displayDrinks(drinks);
  setDrink();
}
