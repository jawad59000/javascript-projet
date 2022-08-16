const btn = document.querySelector(".btn");
const menu = document.querySelector(".menu");
let ouvert = document.querySelector(".btn_ouvert");
let fermer = document.querySelector(".btn_fermer");
const title = document.querySelector(".principal");
const p = document.querySelector("p");
const arrow = document.querySelector(".arrow");
const titleMenu = document.querySelector(".title_menu");
const projets = document.querySelector(".projets");

menu.style.display = "none";

window.addEventListener("load", function () {
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(
    title,
    2,
    {
      transform: "translateY(-500px)",
      height: 0,
      opacity: 0,
      ease: "power2.out",
    },
    0.3
  )
    .staggerFrom(
      p,
      2,
      { transform: "translateY(500px)", opacity: 0, ease: "power2.out" },
      0.3,
      "-=1"
    )
    .staggerFrom(
      arrow,
      2,
      { left: 50, opacity: 0, transform: "scale(0)", ease: "power2.out" },
      0.3,
      "-=1"
    )
    .staggerFrom(
      btn,
      2,
      { transform: "scale(0)", ease: "power2.out" },
      0.3,
      "-=1"
    );
  TL.play();
});

const projet = document.querySelectorAll(".projet");

fermer.style.display = "none";
btn.addEventListener("click", function () {
  menu.classList.toggle("menu_open");
  if (menu.classList.contains("menu_open")) {
    menu.style.display = "block";
    ouvert.style.display = "none";
    fermer.style.display = "block";
  } else {
    menu.style.display = "none";
    ouvert.style.display = "block";
    fermer.style.display = "none";
  }
});

ouvert.addEventListener("click", function () {
  const TL = gsap.timeline({ paused: true });
  TL.staggerFrom(
    titleMenu,
    2,
    {
      transform: "translateY(-300px)",
      ease: "power2.out",
    },
    0.3
  )
    .staggerFrom(
      projets,
      2,
      {
        transform: "translateX(-1000px)",
        ease: "power2.out",
      },
      0.3,
      "-=1"
    )
    .staggerFrom(
      projet,
      2,
      {
        transform: "translateY(1900px)",
        ease: "power2.out",
      },
      0.3,
      "-=1"
    );
  TL.play();
});
