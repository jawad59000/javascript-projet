const btns = document.querySelectorAll(".tab-btn");
const desc = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    desc.forEach(function (des) {
      des.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
