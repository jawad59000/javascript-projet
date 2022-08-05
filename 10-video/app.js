// MDN DOMContentLoaded
let vid = document.querySelector(".preloader");
let btn = document.querySelector(".switch-btn");
let video = document.querySelector(".video-container");

// afficher la video quand la page est totalement charger
window.addEventListener("load", () => {
  vid.classList.add("video-container");
});

// stop and play video
btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else if (btn.classList.contains("slide")) {
    btn.classList.remove("slide");
    video.play();
  }
});
