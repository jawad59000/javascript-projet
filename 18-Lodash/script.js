const btns = document.querySelectorAll(".btn");
const questions = document.querySelector("article");
const plus = document.querySelectorAll(".plus");
const moins = document.querySelectorAll(".moins");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.currentTarget.parentElement.nextSibling.nextSibling.classList.toggle(
      "display"
    );

    if (
      e.currentTarget.parentElement.nextSibling.nextSibling.classList.contains(
        "display"
      )
    ) {
      e.target.classList.add("cache");
      e.target.parentElement.nextSibling.nextSibling.children[0].classList.add(
        "display"
      );
    } else {
      e.target.classList.remove("display");
      e.target.parentElement.previousSibling.previousSibling.children[0].classList.remove(
        "cache"
      );
    }
  });
});

const btnMenu = document.querySelector(".btnMenu");
const search = document.querySelector(".search");

btnMenu.addEventListener("click", function () {
  search.classList.toggle("showMenu");
});

const doc = document.querySelector(".doc");
function display(info) {
  const displayFunction = info.map(function (func) {
    return `<div class="docSubject" id="${func.id}">
        <div class="h1">
        <h1></h1>
        </div>
        <div class="subject"><p>${func.function}</p></div>
        <div class="desc">
          <br />
          <br />
          <h3>${func.title1}</h3>
          <br />
          <p>
           ${func.desc}
          </p>
          <br />
          <br />
          <h3>${func.title2}</h3>
          <br />
          <p>
            ${func.argument}
          </p>
          <br />
          <br />
          <h3>${func.title3}</h3>
          <br />
          <p>${func.return}</p>
          <br />
          <br />
          <h3>${func.title4}</h3>
          <br />
          <img src="${func.exemple}" />
        </div>
      </div>`;
  });

  doc.innerHTML = displayFunction.join("");
}

const inputText = document.querySelector(".recherche");

const btnFunction = document.querySelector(".btnFunction");

inputText.addEventListener("keyup", function () {
  const value = inputText.value;
  const filterCharacter = info.filter((character) => {
    return character.function.includes(value);
  });
  display(filterCharacter);
});

inputText.addEventListener("keyup", function () {
  const value = inputText.value;
  const filterCharacter = array.filter((character) => {
    return character.value.includes(value);
  });
  displayLiArray(filterCharacter);
});

inputText.addEventListener("keyup", function () {
  const value = inputText.value;
  const filterCharacter = collections.filter((character) => {
    return character.value.includes(value);
  });
  displayLiCollections(filterCharacter);
});

const fonctionArray = document.querySelector(".array ul");

function displayLiArray(array) {
  const displayFunction = array.map(function (func) {
    return `
       
           <li><a href="${func.link}">${func.value}</a></li>
           
          `;
  });

  fonctionArray.innerHTML = displayFunction.join("");
}

const fonctionCollections = document.querySelector(".collections ul");

function displayLiCollections(collections) {
  const displayFunction = collections.map(function (func) {
    return `
       
           <li><a href="${func.link}">${func.value}</a></li>
           
          `;
  });

  fonctionCollections.innerHTML = displayFunction.join("");
}

window.addEventListener("DOMContentLoaded", function () {
  display(info);
  displayLiArray(array);
  displayLiCollections(collections);
});
