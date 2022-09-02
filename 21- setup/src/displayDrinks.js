import { hideLoading } from "./toggleLoading.js";

export default async function displayDrinks(drinks) {
  if (!drinks) {
    hideLoading();
    document.querySelector(
      "section"
    ).textContent = `il n'y a aucun cocktail qui correspond a la recherche`;
    return;
  }

  hideLoading();
  const showDrinks = drinks.map(function (drink) {
    // console.log(item);
    return ` <a href = "./drink.html"> <div class="cocktail" data-id="${drink.idDrink}">
        <img
          src="${drink.strDrinkThumb}"
        />
        <div class="name">${drink.strDrink}</div>
      </div></a>`;
  });

  document.querySelector("section").innerHTML = showDrinks;
}
