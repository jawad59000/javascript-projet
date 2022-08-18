const btns = [...document.querySelectorAll(".container #btn")];
const questions = document.querySelector("article");
const plus = document.querySelectorAll(".plus");
const moins = document.querySelectorAll(".moins");
const doc = document.querySelector(".doc");
const nav = document.querySelector(".navBar");
const game = document.querySelector(".game");
const ga = document.querySelectorAll(".ga");
const btn = document.querySelector("button #btn");

window.addEventListener("DOMContentLoaded", function () {
  display(info);
  // displayBtnLi();
  // displayLi(li);
  console.log(displayLi(li));
});

// btn.addEventListener("click", function () {
//   e.currentTarget.parentElement.nextSibling.nextSibling.classList.toggle(
//     "display"
//   );
//   console.log("kkk");
// });

window.addEventListener("load", function () {
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(
    nav,
    2,
    {
      transform: "translateX(-400px)",
      opacity: 0,
      ease: "power2.out",
    },
    0.3
  )
    .staggerFrom(
      game,
      2,
      { transform: "translateY(-100px)", opacity: 0, ease: "power2.out" },
      0.3,
      "-=1"
    )
    .staggerFrom(
      ga,
      2,
      { transform: "scale(0)", opacity: 0, ease: "power2.out" },
      0.3,
      "-=1"
    )
    .staggerFrom(
      search,
      2,
      { transform: "translateY(1000px)", opacity: 0, ease: "power2.out" },
      0.3,
      "-=2"
    )
    .staggerFrom(
      doc,
      2,
      {
        right: 50,
        opacity: 0,
        transform: "translateX(400px)",
        ease: "power2.out",
      },
      0.3,
      "-=1"
    );

  TL.play();
});

const btnMenu = document.querySelector(".btnMenu");
const search = document.querySelector(".search");

btnMenu.addEventListener("click", function () {
  search.classList.toggle("showMenu");
});

function display(info) {
  const displayFunction = info.map(function (func) {
    return `<div class="docSubject" id="${func.id}">
        <div class="h1">
        <h1>${func.type}</h1>
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
function displayLi() {
  const displayFunction = li.map(function (func) {
    return `

           <li><a href="${func.link}">${func.value}</a></li>

          `;
  });
  fonction.innerHTML = displayFunction.join("");
}

inputText.addEventListener("keyup", function () {
  const value = inputText.value;
  const filterCharacter = info.filter((character) => {
    return character.function.includes(value);
  });
  display(filterCharacter);
});

const fonction = document.querySelector(".array ul");

inputText.addEventListener("keyup", function () {
  const value = inputText.value;
  const filterCharacter = li.filter((character) => {
    return character.value.includes(value);
  });
  displayLi(filterCharacter);
});

const fonctionCollections = document.querySelector(".fonction ul");
const container = document.querySelector(".container");

function displayBtnLi() {
  const categories = li.reduce(function (values, item) {
    if (!values.includes(item.type)) {
      values.push(item.type);
    }
    return values;
  }, []);

  const categoryBtns = categories
    .map(function (category) {
      return `<div class="article">
        <div class="title">
          <button type="button" class="btn" id = 'btn'>
            <span class="plus-icon">
              <i class="far fa-plus-square plus"></i>
            </span>
            <span class="minus-icon">
              <i class="far fa-minus-square moins"></i>
            </span>
          </button>
          <h2>${category}</h2>
        </div>
        <div class="functions ${category}">
          <ul></ul>
        </div>
      </div>
    </div>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  console.log(btns);

  //   btns.forEach(function (btn) {
  //     btn.addEventListener("click", function (e) {
  //       e.currentTarget.parentElement.nextSibling.nextSibling.classList.toggle(
  //         "display"
  //       );
  //       const liType = li.filter(function (l) {
  //         // console.log(menuItem.category);
  //         if (fonction.classList.contains(l.type)) {
  //           return l;
  //         }
  //       });

  //       displayLi(liType);
  //     });
  //   });
  // }

  // const fonctionUl = document.querySelectorAll(".fonction ul");
  // const fonction = document.querySelectorAll(".fonction");
  // function displayLi() {
  //   const displayFunction = li
  //     .map(function (func) {
  //       return `

  //            <li><a href="${func.link}">${func.value}</a></li>

  //           `;
  //     })
  //     .join("");

  //   fonctionUl.innerHTML = displayFunction;
}

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
