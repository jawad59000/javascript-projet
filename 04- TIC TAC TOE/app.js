// récupérer les éléments du DOM
const cases = [...document.getElementsByClassName("case")]; // nodelist -> array
let joueur = document.getElementById("joueur");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let scoreNul = document.getElementById("scoreNul");

window.addEventListener("DOMContentLoaded", setupItems);

// mémoire des stats du jeu
let state = {
  joueurEnCours: 1,
  scoreJ1: 0,
  scoreJ2: 0,
  matchNul: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  c5: 0,
  c6: 0,
  c7: 0,
  c8: 0,
  c9: 0,
};

const resetState = () => {
  joueurEnCours = 1;
  state.c1 = 0;
  state.c2 = 0;
  state.c3 = 0;
  state.c4 = 0;
  state.c5 = 0;
  state.c6 = 0;
  state.c7 = 0;
  state.c8 = 0;
  state.c9 = 0;
};

const verifierVictoire = () => {
  if (
    (state.c1 == state.c2 && state.c2 == state.c3 && state.c1 > 0) ||
    (state.c1 == state.c4 && state.c4 == state.c7 && state.c1 > 0) ||
    (state.c1 == state.c5 && state.c5 == state.c9 && state.c1 > 0) ||
    (state.c3 == state.c5 && state.c5 == state.c7 && state.c7 > 0) ||
    (state.c2 == state.c5 && state.c5 == state.c8 && state.c2 > 0) ||
    (state.c3 == state.c6 && state.c6 == state.c9 && state.c3 > 0) ||
    (state.c4 == state.c5 && state.c5 == state.c6 && state.c4 > 0) ||
    (state.c7 == state.c8 && state.c8 == state.c9 && state.c7 > 0)
  ) {
    console.log("winner !");
    return true;
  } else if (
    state.c1 !== 0 &&
    state.c2 !== 0 &&
    state.c3 !== 0 &&
    state.c4 !== 0 &&
    state.c5 !== 0 &&
    state.c6 !== 0 &&
    state.c7 !== 0 &&
    state.c8 !== 0 &&
    state.c9 !== 0
  ) {
    return null;
  } else {
    return false;
  }
};

const jouerCase = (e) => {
  let idCase = e.target.id;

  // si case déjà jouée on ne fait rien
  if (state[idCase] !== 0) return;

  state[idCase] = state.joueurEnCours;

  let isVctoire = verifierVictoire();

  if (isVctoire === true) {
    // si victoire

    alert("Le gagnant est le joueur " + state.joueurEnCours);

    if (state.joueurEnCours == 1) {
      state.scoreJ1++;
      score1.textContent = state.scoreJ1;
    } else {
      state.scoreJ2++;
      score2.textContent = state.scoreJ2;
    }

    resetState();
    cases.forEach((c) => (c.textContent = ""));
    let items = getLocalStorage();
    if ((items.length = 0)) {
      addToLocalStorage(state.scoreJ1, state.scoreJ2);
    } else {
      items.scoreJ1 = state.scoreJ1;
      items.scoreJ2 = state.scoreJ2;
    }
  } else if (isVctoire === null) {
    // si nul

    alert("Match nul !");

    state.matchNul++;
    scoreNul.textContent = state.matchNul;

    resetState();
    addToLocalStorage(state.matchNul);
    cases.forEach((c) => (c.textContent = ""));
  } else if (isVctoire === false) {
    // sinon on continue le jeu
    if (state.joueurEnCours == 1) {
      state.joueurEnCours = 2;
      e.target.textContent = "X";
      joueur.textContent = "2";
    } else {
      state.joueurEnCours = 1;
      e.target.textContent = "O";
      joueur.textContent = "1";
    }
  }
};

cases.forEach((el) => {
  el.addEventListener("click", jouerCase);
});

function addToLocalStorage(scoreJ1, scoreJ2) {
  // on crée un object ou l'on vien stocker la valeur et l'id de l'article
  const score = [{ scoreJ1 }, { scoreJ2 }];
  // on crée une variable ou l'on va stocker des truc dans le local storage
  let items = getLocalStorage();
  // on push dans cette variable l'object ou les object d'article ajouter
  items.push(score);
  // editLocalStorage();
  // on crée une clef list ou seront stocker tout les article stocker dans items
  localStorage.setItem("scores", JSON.stringify(items));

  // if (items.length > 0) {
  //   editLocalStorage();
  //   cases.forEach((el) => {
  //     el.addEventListener("click", jouerCase);
  //   });
  // }
}

function editLocalStorage(value) {
  items = items.reduce(function (item) {
    if (items.scoreJ1 || items.scoreJ2 || items.atchNul) {
      item.scoreJ1.value = value;
      item.scoreJ2.value = value;
    }
  });
}
function getLocalStorage() {
  // on va retourner ce qui est stocker dans la clef list dans le storage
  return localStorage.getItem("scores")
    ? // si il ya des items dans la list on les return
      JSON.parse(localStorage.getItem("scores"))
    : // si la list est vide on retourne un tableau vide
      [];
}

function removeFromLocalStorage(scoreJ1, scoreJ2) {
  let items = getLocalStorage();
  // on filtre le tableaux item et on retourn uniquement les item dont l'id ne correspond pas a celui que l'on vien de supprimer sur la page
  if (deletScore) {
    return (scoreJ1 = 0), (scoreJ2 = 0), (matchNul = 0);
  }

  localStorage.setItem("scores", JSON.stringify(items));
}

function createListItem(score1, score2) {
  score1.textContent = state.scoreJ1;
  score2.textContent = state.scoreJ2;
}

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    // crée la list d'element puis l'afficher grace  a la classe show container
    items.forEach(function (score1, score2) {
      createListItem(score1, score2);
    });
  } else {
    return (scoreJ1 = 0), (scoreJ2 = 0), (matchNul = 0);
  }
  console.log(items.length);
}
