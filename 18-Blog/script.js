const title = document.querySelector("#title");
const picture = document.querySelector(".picture");
const description = document.querySelector("#description");
const list = document.querySelector(".divArticle");
const submit = document.querySelector(".sumbit");
const form = document.querySelector("form");
console.log(title);
// add item

let valueDescription = description.value;

function addItem(e) {
  e.preventDefault();
  const valueTitle = title.value;
  let valueDescription = description.value;
  // const valuePicture = picture.value;
  valueDescription = valueDescription.replace("\r\n", "<br>");
  console.log(valueDescription);
  const id = new Date().getTime().toString();

  //si la valeur entrer n'est pas vide et que l'edit flague et faux (pas en mode edit)
  const element = document.createElement("article");
  // on crée un attribut
  let attr = document.createAttribute("data-id");
  // et on assigne la valeur de cette attribut comme l'id propre a chaque new article
  attr.value = id;
  // on asdigne donc cette attribut a l'element crée qui est l'article
  element.setAttributeNode(attr);
  element.classList.add("article");
  // on crée de nouvel balise html avec leur class qui se crée dans  l'article
  element.innerHTML = `<h1 class="title">${valueTitle}</h1>
      <img src="./photo/compact.png" alt="" />
      <p class="description">
      ${valueDescription}
      </p>`;
  // add event listeners to both buttons;
  // const deleteBtn = element.querySelector(".delete-btn");
  // deleteBtn.addEventListener("click", deleteItem);
  // const editBtn = element.querySelector(".edit-btn");
  // editBtn.addEventListener("click", editItem);

  // append child
  // on ajoute l'element a la fin de la list des article
  list.insertBefore(element, list.firstChild);
  // display alert
}

form.addEventListener("submit", addItem);
