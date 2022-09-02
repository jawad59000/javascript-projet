export default function setDrink() {
  document.querySelector(".container").addEventListener("click", function (e) {
    const target = e.target;

    if (target.parentElement.parentElement.getAttribute("data-id")) {
      const id = target.parentElement.parentElement.dataset.id;
      // console.log(id);
      localStorage.setItem("user", id);
    }
    if (e.target.dataset.id) {
      const id = target.dataset.id;
      // console.log(id);
      localStorage.setItem("user", id);
    }
  });
}
