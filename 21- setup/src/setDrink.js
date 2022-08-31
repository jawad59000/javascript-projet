export default function setDrink() {
  document.querySelector("section").addEventListener("click", function (e) {
    const target = e.target;
    if (target.parentElement.getAttribute("data-id")) {
      const id = target.parentElement.dataset.id;
      localStorage.setItem("drink", id);
    }
    if ([...document.querySelectorAll("a")].includes(target)) {
      const id = target.children[0].dataset.id;
      console.log(id);
      localStorage.setItem("drink", id);
    }
  });
}
