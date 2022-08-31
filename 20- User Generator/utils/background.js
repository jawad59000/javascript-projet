import removeActive from "./removeActive.js";

function changeBG() {
  const card = document.querySelector(".carte");
  const btnChange = document.querySelector(".btnChange");
  const img = document.querySelector("img");
  const btns = document.querySelectorAll(".btn");
  function getRandomRGB() {
    return Math.floor(Math.random() * 256);
  }

  const col1 = getRandomRGB();
  const col2 = getRandomRGB();
  const col3 = getRandomRGB();
  console.log("kkn");
  const colorString1 = `rgba(${col1}, ${col2}, ${col3})`;
  const colorString2 = `rgba(${col2}, ${col3}, ${col1})`;

  card.style.background = colorString1;
  card.style.border = `${colorString2} solid 2px`;
  btnChange.style.background = colorString2;
  btnChange.style.shadow = colorString2;
  img.style.border = `${colorString2} solid 2px`;
  card.classList.remove("jjj");
  img.classList.remove("jjj");
  btnChange.classList.remove("jjj");
  let r = document.querySelector(":root");
  r.style.setProperty("--clr-bcg", `${colorString2}`);
  console.log();
}

export default changeBG;
