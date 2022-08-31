import { hideLoading } from "./toggleLoading.js";

export default async function displayDrinks(drinks) {
  const showDrinks = drinks.map(function (drink) {
    // console.log(item);

    return ` <a href = "./drink.html"> <div class="cocktail" data-id="${drink.idDrink}">
        <img
          src="${drink.strDrinkThumb}"
        />
        <div class="name">${drink.strDrink}</div>
      </div></a>`;
  });
  hideLoading();
  document.querySelector("section").innerHTML = showDrinks;
}
