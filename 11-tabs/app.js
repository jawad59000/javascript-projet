const btns = document.querySelectorAll(".tab-btn");
const desc = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", (e) => {
  // recuperet les data id dans la variable id
  const id = e.target.dataset.id;
  // si id existe parcourir tout les button
  if (id) {
    btns.forEach(function (btn) {
      // pour chaque button enlever la class active
      btn.classList.remove("active");
      // et mettre la class active au button targeté(sur le quel on a appuyer)
      e.target.classList.add("active");
    });
    // ensuite faire un forEach des description(texte) et leur retirer la class active
    desc.forEach(function (des) {
      des.classList.remove("active");
    });
    // crée une const element qui va recuperer les element qui on la class id qui correspond a celui du button sur le quel on a appuyer
    const element = document.getElementById(id);
    // et lui ajouter la class active
    element.classList.add("active");
  }
});
