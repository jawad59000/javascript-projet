let id = 0;
class Book {
  constructor(title, author, pages, read, img) {
    id++;
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.image = img;
  }

  displayInfo() {
    let result = `${this.title} de ${this.author}, ${this.pages} pages, `;

    if (this.read) {
      result += "le livre a deja été lu";
    } else {
      result += "le livre n'a pas encore été lu";
    }

    return result;
  }
}

class Library {
  constructor() {
    this.myLibrary = [];
  }
  addBook(book) {
    this.myLibrary.push(book);
  }
  displayBooks() {
    const _this = this;

    this.lookLibrary = this.myLibrary.map((book) => {
      let lu = "";

      if (book.read) {
        lu = "le livre a deja été lu";
      } else {
        lu = `le livre n'a pas été lu`;
      }

      return `<div class="book"><div class="info">
          <img src="${book.image}" class= "image">
          <h1>${book.title}</h1>
          <h2>${book.author}</h2>
          <div class="count">
            <h5 class="page">${book.pages} pages</h5h5>
            <h5 class="vu">${lu}</h5>
          </div>
        <div class="btn">
   <i class="fa-solid fa-trash-can rubbish"  data-id="${book.id}"></i>
    <button class="read ${!book.read ? "black" : "green"} btn-btn" data-id="${
        book.id
      }">read</button>
    </div>
        </div>
          </div>`;
    });

    document.querySelector("section").innerHTML = this.lookLibrary.join("");

    const readBtns = document.querySelectorAll(".read");

    readBtns.forEach((readBtn) => {
      readBtn.addEventListener("click", function (e) {
        _this.myLibrary = _this.myLibrary.map(function (book) {
          const id = Number(e.target.dataset.id);

          if (book.id === id) {
            editLocalStorage(id);
            return { ...book, read: !book.read };
          } else {
            return book;
          }
        });
        _this.displayBooks();
      });
    });

    const deleteBtns = document.querySelectorAll(".rubbish");
    console.log(deleteBtns);
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", function (e) {
        _this.myLibrary = _this.myLibrary.filter(function (book) {
          const id = Number(e.target.dataset.id);
          if (book.id !== id) {
            return book;
          }
          removeFromLocalStorage(id);
        });
        _this.displayBooks();
      });
    });
  }

  display() {
    const _this = this;

    let value = search.value;
    value = value.toUpperCase();
    console.log(value);
    const array = _this.myLibrary.filter((character) => {
      return character.title.toUpperCase().includes(value);
    });

    if (array.length > 0) {
      let lu = "";
      if (read) {
        lu = "le livre a deja été lu";
      } else {
        lu = `le livre n'a pas été lu`;
      }

      const filter = array.map((character) => {
        return `<div class="book"><div class="info">
          <img src="${character.image}" class= "image">
          <h1>${character.title}</h1>
          <h2>${character.author}</h2>
          <div class="count">
            <h5 class="page">${character.pages} pages</h5h5>
            <h5 class="vu">${lu}</h5>
          </div>
        <div class="btn">
   <i class="fa-solid fa-trash-can rubbish"  data-id="${character.id}"></i>
    <button class="read ${
      !character.read ? "black" : "green"
    } btn-btn" data-id="${character.id}">read</button>
    </div>
        </div>
          </div>`;
      });
      document.querySelector("section").innerHTML = filter.join("");
    } else {
      document.querySelector(
        "section"
      ).innerHTML = `<h1>Il n'y a pas livre correspondant a la recherche</h1>`;
    }
    if (!value) {
      _this.displayBooks();
    }
    const deleteBtns = document.querySelectorAll(".rubbish");
    console.log(deleteBtns);
    deleteBtns.forEach((deleteBtn) => {
      deleteBtn.addEventListener("click", function (e) {
        _this.myLibrary = _this.myLibrary.filter(function (book) {
          const id = Number(e.target.dataset.id);
          if (book.id !== id) {
            return book;
          }
          removeFromLocalStorage(id);
        });
        _this.displayBooks();
      });
    });
    const readBtns = document.querySelectorAll(".read");

    readBtns.forEach((readBtn) => {
      readBtn.addEventListener("click", function (e) {
        _this.myLibrary = _this.myLibrary.map(function (book) {
          const id = Number(e.target.dataset.id);

          if (book.id === id) {
            editLocalStorage(id);
            return { ...book, read: !book.read };
          } else {
            return book;
          }
        });
        _this.displayBooks();
      });
    });
  }
}

const library = new Library();
const newBook = document.querySelector(".newBook");
const form = document.querySelector("form");
newBook.addEventListener("click", function () {
  form.classList.add("display");
  if (library.myLibrary.length < 1) {
    document.querySelector("section").textContent = ``;
  }
});

let title = document.getElementById("title");
let author = document.getElementById("author");
let nbrPages = document.getElementById("nbrPages");
let read = document.getElementById("read");
let img = document.getElementById("image");
const submit = document.getElementById("submit");
const regExp = new RegExp(
  "^https:{1}[a-zA-Z0-9._/,-:=()+%&]+[.]{1}[a-z]{2,10}$"
);
const regExp2 = new RegExp("[a-zA-Z '-]{3,40}");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (!title.value || !author.value || !nbrPages.value || !img.value) {
    alert(
      "vous devez remplir tous les champs avant de soummetre le formulaire"
    );
  } else if (regExp.test(img.value) === false) {
    alert("Entrer un lien valide pour l'image");
  } else if (regExp2.test(title.value) === false) {
    alert("Entrer un vrai titre de livre");
  } else if (regExp2.test(author.value) === false) {
    alert("Entrer un vrai nom d'auteur");
  } else {
    const book = new Book(
      title.value,
      author.value,
      nbrPages.value,
      read.checked,
      img.value
    );
    library.myLibrary.push(book);
    library.displayBooks();
    addToLocalStorage(
      book.title,
      book.author,
      book.read,
      book.pages,
      book.image
    );
    form.classList.remove("display");
    setBackToDefault();
  }
});

function addToLocalStorage(title, author, read, pages, image) {
  const book = { title, author, pages, read, id, image };

  let items = getLocalStorage();

  items.push(book);

  localStorage.setItem("blog", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("blog")
    ? // si il ya des items dans la list on les return
      JSON.parse(localStorage.getItem("blog"))
    : // si la list est vide on retourne un tableau vide
      [];
}

function editLocalStorage(id) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.read = !item.read;
    }
    return item;
  });

  localStorage.setItem("blog", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("blog", JSON.stringify(items));
}

function setupItems() {
  let items = getLocalStorage();
  library.myLibrary = items;
  if (items.length > 0) {
    library.displayBooks();
  }
}

function setBackToDefault() {
  title.value = "";
  author.value = "";
  nbrPages.value = "";
  img.value = "";
  read.checked = false;
}
const count = document.querySelectorAll(".count");
window.addEventListener("load", setupItems);
window.addEventListener("load", function () {
  let element = document.querySelector("section");
  element = element.lastChild;
  id = element.children
    .item(0)
    .children.item(0)
    .nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children.item(
      0
    ).dataset.id;
});

const mode = document.querySelector(".darkMode");

mode.addEventListener("click", darkMode);

function darkMode() {
  const setTheme = document.documentElement;
  setTheme.classList.toggle("dark-theme");

  let theme;

  if (setTheme.classList.contains("dark-theme")) {
    theme = "DARK";
  } else {
    theme = "LIGHT";
  }
  localStorage.setItem("pageTheme", JSON.stringify(theme));
}

let getTheme = JSON.parse(localStorage.getItem("pageTheme"));

if (getTheme === "DARK") {
  document.documentElement.classList = "dark-theme";
}

const recommandation = document.querySelector(".recommandation");
let timer;
const hideControls = () => {
  timer = setTimeout(() => {
    recommandation.classList.remove("ok");
  }, 5000);
}; // on affiche les controles dans 3s

img.addEventListener("mouseenter", () => {
  recommandation.classList.add("ok");
  clearTimeout(timer);
  hideControls();
});

const fermer = document.getElementsByClassName("fermer").item(0);

fermer.addEventListener("click", function () {
  form.classList.remove("display");
  setBackToDefault();
  if (!library.myLibrary.length) {
    document.querySelector(
      "section"
    ).innerHTML = `<h1>Il n'y a aucun livre dans la library clicker sur le bouton nouveau livre pour en ajouter un</h1>`;
  } else {
    div.style.display = "block";
  }
});

const search = document.querySelector(".searchBook");
search.addEventListener("keyup", function () {
  // console.log(library.myLibrary);
  library.display();
  if (!library.myLibrary.length) {
    document.querySelector(
      "section"
    ).innerHTML = `<h1>Il n'y a aucun livre dans la library clicker sur le bouton nouveau livre pour en ajouter un</h1>`;
  }
});

const div = document.querySelector(".search");
if (!library.myLibrary.length) {
  document.querySelector(
    "section"
  ).innerHTML = `<h1>Il n'y a aucun livre dans la library clicker sur le bouton nouveau livre pour en ajouter un</h1>`;
}
