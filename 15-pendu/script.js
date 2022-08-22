const words = [
  {
    word: "adamantin",
    link: "https://www.larousse.fr/dictionnaires/francais/adamantin/987",
  },
  {
    word: "zenith",
    link: "https://www.larousse.fr/dictionnaires/francais/z%C3%A9nith/83086",
  },
  {
    word: "cocombre",
    link: "https://www.larousse.fr/dictionnaires/francais/concombre/17950",
  },
  {
    word: "bouteille",
    link: "https://www.larousse.fr/dictionnaires/francais/bouteille/10746",
  },
  {
    word: "armada",
    link: "https://www.larousse.fr/dictionnaires/francais/armada/5274",
  },
  {
    word: "ordinateur",
    link: "https://www.larousse.fr/dictionnaires/francais/ordinateur/56358",
  },
];
const word = random();

const wordLetters = word.word.toUpperCase().split("");
const emptyLetters = new Array(word.word.length);
let turn = 8;
const letterAlreadyUsed = [];
const img = [...document.getElementsByClassName("img")];
console.log(img);
let etape = 0;

nmb_img = img.length;

function random() {
  let random = Math.floor(Math.random() * words.length);
  return words[random];
}

window.addEventListener("load", render());

function removeActiveCarte() {
  for (i = 1; i < nmb_img; i++) {
    img[i].classList.remove("active");
  }
}

function getAllIndex(myWord, mySelectedLetter) {
  const indexes = [];
  for (let index = 0; index < myWord.length; index++) {
    const element = myWord[index];
    if (element === mySelectedLetter) {
      indexes.push(index);
    }
  }
  return indexes;
}

function guestWordRender(emptyLetters) {
  const display = [];
  for (let index = 0; index < emptyLetters.length; index++) {
    if (emptyLetters[index]) {
      display.push(emptyLetters[index]);
    } else {
      display.push("_");
    }
  }
  document.getElementById("emptyLetters").innerHTML = display.join(" ");
}

function render() {
  document.getElementById("turn").textContent = `Il vous reste : ${turn} Tours`;
  document.getElementById("letterAlreadyUsed").textContent = `Lettre 
déjà utiliser : ${letterAlreadyUsed.join(", ")}`;
  guestWordRender(emptyLetters);
}

window.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {
    selectedLetter();
  }
});

function selectedLetter() {
  let letter = document.getElementById("selectedLetter").value;
  letter = letter.trim();
  const mySelectedLetter = letter[0].toUpperCase();
  letterAlreadyUsed.push(mySelectedLetter);
  const temp = getAllIndex(wordLetters, mySelectedLetter);
  if (temp.length === 0) {
    turn--;
    etape++;
    if (etape >= nmb_img) {
      etape = 0;
    }
    removeActiveCarte();
    img[etape].classList.add("active");
  } else {
    for (let index = 0; index < temp.length; index++) {
      emptyLetters[temp[index]] = wordLetters[temp[index]];
      wordLetters[temp[index]] = "";
    }
  }
  render();
  // console.log(wordLetters);
  if (turn === 0) {
    alert("DOMMAGE VOUS AVEZ PERDU, ESSAYER ENCORE!");
    etape = 0;
    document.querySelector("#emptyLetters").innerHTML = `Le mot était :
      <a target = _blank href=${word.link}>${word.word}</a>`;
    img[8].classList.add("active");
    reset();
    reload(true);
  }
  if (wordLetters.every((el) => el === "")) {
    alert("FORMIDABLE VOUS AVEZ GAGNER!");
    etape = 0;
    document.querySelector(
      "#emptyLetters"
    ).innerHTML = `Bien jouer c'était bien le mot :
      <a target = _blank href=${word.link}>${word.word.toUpperCase()}</a>`;
    reset();
  }
}

function reset() {
  turn = 8;
  letterAlreadyUsed.length = 0;
  removeActiveCarte();
  etape = 0;
  img[etape].classList.add("active");
}
