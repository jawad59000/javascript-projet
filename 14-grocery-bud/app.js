const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** event listeners **********

// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);

// ****** functions **********

// add item
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    //si la valeur entrer n'est pas vide et que l'edit flague et faux (pas en mode edit)
    createListItem(id, value);
    // display alert
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add("show-container");
    // set local storage
    addToLocalStorage(id, value);
    // set back to default
    // on remet les veleur de depart une fois l'items ajouter
    setBackToDefault();
  } else if (value !== "" && editFlag) {
    //{si la valeur n'est pas vide mais que l'edit flag est true (nous somme dans la phase edit) on affect donc la valeur de l'element qu'on a choisis d'edité dans la zone text
    editElement.innerHTML = value;
    displayAlert("value changed", "success");

    // edit  local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}

// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    // s'il ya plus de 0 article alors on va supprimer tous les enfans de la list
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  // sinon on va retirer la class show-container au container pour qu'on ne voit plus le button clear items
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

// delete item

function deleteItem(e) {
  // quand on va clicker sur l'element sa recuperer on recupere le parent du parent de cet element du coup l'article
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  // on supprime don l'article en question de la list
  list.removeChild(element);
  // si les enfant de la list sont egale a 0 alors retirer la class show-container au container pour qu'on ne voit plus le button clear items
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");

  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}
// edit item
function editItem(e) {
  // on recuperer l'article
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  // on recupere le titre car le parent de l'element c'est la div des buttons et ensuite on recupere sont frere qui le paragraphe contenant la valeur de l'article
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  // on affiche la valeur recuperer a la zone de text qu'on peut modifier
  grocery.value = editElement.innerHTML;
  editFlag = true;

  // on recupere le data id de l'article que l'on va venir stocker dans un variable
  editID = element.dataset.id;
  //on met le text du button en edit
  submitBtn.textContent = "edit";
  grocery.focus();
}
// set back to defaults
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ****** local storage **********

// add to local storage
function addToLocalStorage(id, value) {
  // on crée un object ou l'on vien stocker la valeur et l'id de l'article
  const grocery = { value, id };
  // on crée une variable ou l'on va stocker des truc dans le local storage
  let items = getLocalStorage();
  // on push dans cette variable l'object ou les object d'article ajouter
  items.push(grocery);
  // on crée une clef list ou seront stocker tout les article stocker dans items
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  // on va retourner ce qui est stocker dans la clef list dans le storage
  return localStorage.getItem("list")
    ? // si il ya des items dans la list on les return
      JSON.parse(localStorage.getItem("list"))
    : // si la list est vide on retourne un tableau vide
      [];
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  // on filtre le tableaux item et on retourn uniquement les item dont l'id ne correspond pas a celui que l'on vien de supprimer sur la page
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();
  // tu prend le tableau et si l'id correspond a celui que tu vien d'editer dans la page sa modifie sa valeur par la nouvelle et sa retourn les item
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  // mise a jour du local
  localStorage.setItem("list", JSON.stringify(items));
}

// SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// ****** setup items **********

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    // crée la list d'element puis l'afficher grace  a la classe show container
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  //  crée un element article
  const element = document.createElement("article");
  // on crée un attribut
  let attr = document.createAttribute("data-id");
  // et on assigne la valeur de cette attribut comme l'id propre a chaque new article
  attr.value = id;
  // on asdigne donc cette attribut a l'element crée qui est l'article
  element.setAttributeNode(attr);
  element.classList.add("grocery-item");
  // on crée de nouvel balise html avec leur class qui se crée dans  l'article
  element.innerHTML = `
            <p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);

  // append child
  // on ajoute l'element a la fin de la list des article
  list.appendChild(element);
}
