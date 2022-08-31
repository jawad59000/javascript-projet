import { showLoading } from "./toggleLoading.js";

async function fetchDrinks(url) {
  showLoading();
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.drinks;
  } catch (error) {
    console.log(error);
  }
}

export default fetchDrinks;
