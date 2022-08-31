export default async function displayDrink(drink) {
  drink = drink[0];
  console.log(drink);
  const ingredients = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
  ];
  console.log(ingredients);
  document.querySelector(".soloDrink").innerHTML = `
            <img
              src="${drink.strDrinkThumb}"
            />
            <div class="info">
            <h2> ${drink.strDrink} </h2>
            <h3> ${drink.strInstructions} </h3>
            ${ingredients
              .map((ingredient) => {
                if (ingredient) {
                  return `<h5><i class="fa-solid fa-square-check check"></i> ${ingredient}</h5>`;
                }
              })
              .join("")}
              <a hreF="./index.html"><button>ALL COCKTAILS</button></a>
            </div>
          `;
}
