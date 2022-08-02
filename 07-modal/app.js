// sélectionner modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector(".modal-btn");
const modelOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
// écouter les events sur modal-btn and close-btn

// quand l'utilisateur clique sur modal-btn ajouter .open-modal à modal-overlay
modalBtn.addEventListener("click", function () {
  modelOverlay.classList.add("open-modal");
});

// quand l'utilisateur clique close-btn supprimer .open-modal de modal-overlay
closeBtn.addEventListener("click", function () {
  modelOverlay.classList.remove("open-modal");
});
